import { useMemo, useRef, useState, type FormEvent } from "react"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { calendarKeys, useRoomsQuery, useRoomTypesQuery } from "@/hooks/useCalendarQueries"
import { createPmsRoom, fetchPmsBookings, updatePmsRoom, uploadRoomImage, createPmsRoomType, type PMSRoomTypeCreate } from "@/lib/api"
import type { PMSRoomCreate, PMSRoomUpdate } from "@/lib/api"
import { resolveImageUrl } from "@/lib/utils"
import type { PMSBooking, PMSRoom, PMSRoomBed, PMSRoomCondition, PMSRoomType } from "@/types/pms"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
} from "@/components/ui/sheet"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useTranslation } from "react-i18next"
import { cn } from "@/lib/utils"
import {
  CheckCircle2,
  AlertTriangle,
  Search,
  Wrench,
  Star,
  ImagePlus,
  Plus,
  Trash2,
} from "lucide-react"

const conditionStyles: Record<PMSRoomCondition, string> = {
  clean: "bg-emerald-50 text-emerald-700 border-emerald-200",
  dirty: "bg-amber-50 text-amber-700 border-amber-200",
  inspection: "bg-sky-50 text-sky-700 border-sky-200",
  maintenance: "bg-red-50 text-red-700 border-red-200",
}

const availabilityStyles: Record<string, string> = {
  available: "bg-emerald-50 text-emerald-700",
  occupied: "bg-amber-50 text-amber-700",
  blocked: "bg-rose-50 text-rose-700",
  held: "bg-sky-50 text-sky-700",
}

const ALL_CONDITIONS: PMSRoomCondition[] = ["clean", "dirty", "inspection", "maintenance"]

const CONDITION_ICONS: Record<PMSRoomCondition, typeof CheckCircle2> = {
  clean: CheckCircle2,
  dirty: AlertTriangle,
  inspection: Search,
  maintenance: Wrench,
}

const MEAL_PLANS = ["RO", "BB", "HB", "FB", "AI", "UAI"]
const CURRENCIES = ["USD", "UZS"]
const BED_TYPE_KEYS = ["single", "twin", "double", "king", "sofa", "bunk", "kids", "extra"] as const
const ROOM_TYPE_PRESETS = [
  "standard",
  "superior",
  "deluxe",
  "suite",
  "studio",
  "apartment",
  "family",
  "dormitory",
  "custom",
] as const

type SheetTab = "details" | "images" | "bookings"

type RoomCreateDraft = {
  room_type_id: string
  room_number: string
  display_name: string
  floor: string
  area: string
  bedroom_count: string
  beds: PMSRoomBed[]
  capacity: string
  meal_plan: string
  base_price: string
  currency: string
  condition: PMSRoomCondition
  availability: PMSRoomCreate["availability"]
  is_active: boolean
}

const createEmptyRoomDraft = (): RoomCreateDraft => ({
  room_type_id: "",
  room_number: "",
  display_name: "",
  floor: "1",
  area: "",
  bedroom_count: "1",
  beds: [{ type: "", quantity: 1 }],
  capacity: "2",
  meal_plan: "BB",
  base_price: "",
  currency: "UZS",
  condition: "clean",
  availability: "available",
  is_active: true,
})

function getApiErrorMessage(error: unknown, fallback: string): string {
  const data = (error as { response?: { data?: unknown } }).response?.data
  if (!data || typeof data !== "object") return fallback

  const record = data as Record<string, unknown>
  if (typeof record.detail === "string") return record.detail

  for (const value of Object.values(record)) {
    if (typeof value === "string") return value
    if (Array.isArray(value) && typeof value[0] === "string") return value[0]
  }
  return fallback
}

function toRoomUpdate(room: PMSRoom): PMSRoomUpdate {
  return {
    condition: room.condition,
    availability: room.availability,
    room_number: room.room_number,
    display_name: room.display_name,
    floor: room.floor,
    area: room.area,
    bedroom_count: room.bedroom_count,
    beds: room.beds,
    capacity: room.capacity,
    meal_plan: room.meal_plan,
    base_price: room.base_price,
    currency: room.currency,
    is_active: room.is_active,
    photos: room.photos,
    cover_photo_index: room.cover_photo_index,
  }
}

export default function HotelRoomsSection({ hotelId }: { hotelId: string | undefined }) {
  const { t } = useTranslation()
  const queryClient = useQueryClient()
  const propertyId: string | null = hotelId ?? null

  const roomsQuery = useRoomsQuery(propertyId)
  const roomTypesQuery = useRoomTypesQuery(propertyId)

  const rooms = useMemo(() => roomsQuery.data ?? [], [roomsQuery.data])
  const roomTypes = useMemo(() => roomTypesQuery.data ?? [], [roomTypesQuery.data])
  const loading = roomsQuery.isLoading || roomTypesQuery.isLoading

  const [selectedRoom, setSelectedRoom] = useState<PMSRoom | null>(null)
  const [isCreateOpen, setIsCreateOpen] = useState(false)
  const [isRoomTypeCreateOpen, setIsRoomTypeCreateOpen] = useState(false)
  const [activeTab, setActiveTab] = useState<SheetTab>("details")
  const [showEditBedErrors, setShowEditBedErrors] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const roomTypeMap = useMemo(() => {
    const map = new Map<number, PMSRoomType>()
    for (const rt of roomTypes) {
      if (rt.id) map.set(rt.id, rt)
    }
    return map
  }, [roomTypes])

  const bookingsQuery = useQuery({
    queryKey: ["calendar", "bookings", propertyId ?? "", "room", selectedRoom?.id],
    queryFn: () => fetchPmsBookings(propertyId!, { room_id: selectedRoom!.id }),
    enabled: !!selectedRoom && !!propertyId,
  })

  const updateMutation = useMutation({
    mutationFn: () => updatePmsRoom(propertyId!, selectedRoom!.id, toRoomUpdate(selectedRoom!)),
    onSuccess: (updatedRoom) => {
      queryClient.setQueryData<PMSRoom[]>(calendarKeys.rooms(propertyId ?? ""), (old) =>
        old?.map((r) => (r.id === updatedRoom.id ? { ...r, ...updatedRoom } : r)),
      )
      handleCloseSheet()
    },
  })

  const updateSelectedRoom = (data: PMSRoomUpdate) => {
    if (!selectedRoom) return
    setSelectedRoom((prev) => (prev ? { ...prev, ...data } : prev))
  }

  const imageUploadMutation = useMutation({
    mutationFn: (file: File) => uploadRoomImage(propertyId!, selectedRoom!.id, file),
    onSuccess: ({ image_url }) => {
      const updatedPhotos = [...(selectedRoom?.photos ?? []), image_url]
      updateSelectedRoom({ photos: updatedPhotos })
    },
  })

  const handleOpenSheet = (room: PMSRoom) => {
    setSelectedRoom({
      ...room,
      beds: room.beds?.length ? room.beds.map((bed) => ({ ...bed })) : [{ type: "", quantity: 1 }],
      photos: [...room.photos],
      amenities: [...room.amenities],
    })
    setActiveTab("details")
    setShowEditBedErrors(false)
    updateMutation.reset()
  }

  const handleCloseSheet = () => {
    setSelectedRoom(null)
    setActiveTab("details")
    setShowEditBedErrors(false)
    updateMutation.reset()
  }

  const handleConditionChange = (condition: PMSRoomCondition) => {
    updateSelectedRoom({ condition })
  }

  const handleFieldChange = (field: string, value: unknown) => {
    updateSelectedRoom({ [field]: value } as PMSRoomUpdate)
  }

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    imageUploadMutation.mutate(file)
    if (fileInputRef.current) fileInputRef.current.value = ""
  }

  const handleRemovePhoto = (index: number) => {
    if (!selectedRoom) return
    const updatedPhotos = selectedRoom.photos.filter((_photo: string, i: number) => i !== index)
    let coverIndex = selectedRoom.cover_photo_index ?? 0
    if (coverIndex >= updatedPhotos.length) coverIndex = 0
    updateSelectedRoom({ photos: updatedPhotos, cover_photo_index: coverIndex })
  }

  const handleSetCover = (index: number) => {
    updateSelectedRoom({ cover_photo_index: index })
  }

  const handleSaveRoom = () => {
    if (!selectedRoom) return
    if (selectedRoom.beds.some((bed) => !bed.type)) {
      setShowEditBedErrors(true)
      setActiveTab("details")
      return
    }
    updateMutation.mutate()
  }

  const handleRoomCreated = (room: PMSRoom) => {
    queryClient.setQueryData<PMSRoom[]>(calendarKeys.rooms(propertyId ?? ""), (old) => {
      if (!old) return [room]
      if (old.some((existingRoom) => existingRoom.id === room.id)) return old
      return [...old, room]
    })
    void queryClient.invalidateQueries({ queryKey: calendarKeys.rooms(propertyId ?? "") })
    setIsCreateOpen(false)
    setSelectedRoom(room)
    setActiveTab("images")
  }

  if (loading) {
    return (
      <div className="space-y-4">
        <Skeleton className="h-10 w-64" />
        <Skeleton className="h-64 w-full" />
      </div>
    )
  }

  if (!propertyId) {
    return (
      <Card>
        <CardContent className="py-8 text-center text-sm text-muted-foreground">
          This hotel was not found in the PMS system.
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          {rooms.length} {t("properties.rooms")}
        </p>
        <div className="flex items-center gap-3">
          {roomTypes.length === 0 ? (
            <span className="text-xs text-muted-foreground">{t("inspection.create.noRoomTypes")}</span>
          ) : null}
          <Button
            type="button"
            variant="outline"
            className="gap-2"
            onClick={() => setIsRoomTypeCreateOpen(true)}
          >
            <Plus className="h-4 w-4" />
            {t("inspection.roomType.action")}
          </Button>
          <Button
            type="button"
            className="gap-2"
            onClick={() => setIsCreateOpen(true)}
            disabled={roomTypes.length === 0}
          >
            <Plus className="h-4 w-4" />
            {t("inspection.create.action")}
          </Button>
        </div>
      </div>

      {rooms.length === 0 ? (
        <Card>
          <CardContent className="py-8 text-center text-sm text-muted-foreground">
            No rooms found for this hotel.
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {rooms.map((room) => (
            <RoomCard
              key={room.id}
              room={room}
              roomType={room.room_type_id ? roomTypeMap.get(room.room_type_id) : undefined}
              onClick={() => handleOpenSheet(room)}
            />
          ))}
        </div>
      )}

      <RoomCreateSheet
        open={isCreateOpen}
        propertyId={propertyId}
        roomTypes={roomTypes}
        onOpenChange={setIsCreateOpen}
        onCreated={handleRoomCreated}
      />

      <RoomTypeCreateSheet
        open={isRoomTypeCreateOpen}
        propertyId={propertyId}
        onOpenChange={setIsRoomTypeCreateOpen}
        onCreated={() => {
          void queryClient.invalidateQueries({ queryKey: calendarKeys.roomTypes(propertyId) })
          setIsRoomTypeCreateOpen(false)
        }}
      />

      <Sheet open={!!selectedRoom} onOpenChange={(open) => { if (!open) handleCloseSheet() }}>
        <SheetContent className="sm:max-w-xl overflow-y-auto">
          <SheetHeader>
            <SheetTitle>
              {selectedRoom?.display_name || selectedRoom?.room_number}
            </SheetTitle>
            <SheetDescription>
              {selectedRoom?.display_name && selectedRoom.display_name !== selectedRoom.room_number
                ? `#${selectedRoom.room_number}`
                : `${t("inspection.card.type")}: ${
                    selectedRoom?.room_type_id
                      ? roomTypeMap.get(selectedRoom.room_type_id)?.name ?? "—"
                      : selectedRoom?.room_type ?? "—"
                  }`}
            </SheetDescription>
          </SheetHeader>

          {selectedRoom && (
            <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as SheetTab)} className="mt-4">
              {updateMutation.isError ? (
                <div className="mb-4 rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
                  {getApiErrorMessage(updateMutation.error, t("common.actionFailed"))}
                </div>
              ) : null}
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="details">{t("inspection.tabs.details")}</TabsTrigger>
                <TabsTrigger value="images">{t("inspection.tabs.images")}</TabsTrigger>
                <TabsTrigger value="bookings">{t("inspection.tabs.bookings")}</TabsTrigger>
              </TabsList>

              <TabsContent value="details" className="space-y-6 mt-4">
                <div className="space-y-3">
                  <Label className="text-sm font-medium">{t("inspection.dialog.condition")}</Label>
                  <div className="grid grid-cols-2 gap-2">
                    {ALL_CONDITIONS.map((condition) => {
                      const Icon = CONDITION_ICONS[condition]
                      const isSelected = selectedRoom.condition === condition
                      return (
                        <Button
                          key={condition}
                          variant={isSelected ? "default" : "outline"}
                          className={cn("justify-start gap-2 h-10")}
                          onClick={() => handleConditionChange(condition)}
                          disabled={updateMutation.isPending}
                        >
                          <Icon className="h-4 w-4" />
                          {t(`inspection.condition.${condition}`)}
                        </Button>
                      )
                    })}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="room-number">{t("inspection.form.roomNumber")}</Label>
                    <Input
                      id="room-number"
                      value={selectedRoom.room_number}
                      onChange={(e) => handleFieldChange("room_number", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="display-name">{t("inspection.form.displayName")}</Label>
                    <Input
                      id="display-name"
                      value={selectedRoom.display_name ?? ""}
                      onChange={(e) => handleFieldChange("display_name", e.target.value || null)}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="floor">{t("inspection.card.floor")}</Label>
                    <Input
                      id="floor"
                      type="number"
                      value={selectedRoom.floor}
                      onChange={(e) => handleFieldChange("floor", Number(e.target.value))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="area">{t("inspection.form.area")}</Label>
                    <Input
                      id="area"
                      type="number"
                      step="0.01"
                      value={selectedRoom.area ?? ""}
                      onChange={(e) => handleFieldChange("area", e.target.value || null)}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="bedrooms">{t("inspection.form.bedrooms")}</Label>
                    <Input
                      id="bedrooms"
                      type="number"
                      value={selectedRoom.bedroom_count}
                      onChange={(e) => handleFieldChange("bedroom_count", Number(e.target.value))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="capacity">{t("inspection.form.capacity")}</Label>
                    <Input
                      id="capacity"
                      type="number"
                      value={selectedRoom.capacity}
                      onChange={(e) => handleFieldChange("capacity", Number(e.target.value))}
                    />
                  </div>
                </div>

                <BedConfigurationFields
                  beds={selectedRoom.beds}
                  showErrors={showEditBedErrors}
                  onChange={(beds) => {
                    setShowEditBedErrors(false)
                    handleFieldChange("beds", beds)
                  }}
                />

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="meal-plan">{t("inspection.form.mealPlan")}</Label>
                    <Select
                      value={selectedRoom.meal_plan}
                      onValueChange={(v) => handleFieldChange("meal_plan", v)}
                    >
                      <SelectTrigger id="meal-plan">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {MEAL_PLANS.map((mp) => (
                          <SelectItem key={mp} value={mp}>{mp}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="availability">{t("inspection.form.availability")}</Label>
                    <Select
                      value={selectedRoom.availability}
                      onValueChange={(v) => handleFieldChange("availability", v)}
                    >
                      <SelectTrigger id="availability">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.keys(availabilityStyles).map((a) => (
                          <SelectItem key={a} value={a}>{a}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="base-price">{t("inspection.form.basePrice")}</Label>
                    <Input
                      id="base-price"
                      type="number"
                      step="0.01"
                      value={selectedRoom.base_price ?? ""}
                      onChange={(e) => handleFieldChange("base_price", e.target.value || null)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="currency">{t("inspection.form.currency")}</Label>
                    <Select
                      value={selectedRoom.currency}
                      onValueChange={(v) => handleFieldChange("currency", v)}
                    >
                      <SelectTrigger id="currency">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {CURRENCIES.map((c) => (
                          <SelectItem key={c} value={c}>{c}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Checkbox
                    id="is-active"
                    checked={selectedRoom.is_active}
                    onCheckedChange={(checked) => handleFieldChange("is_active", checked === true)}
                  />
                  <Label htmlFor="is-active" className="cursor-pointer">
                    {t("inspection.form.active")}
                  </Label>
                </div>
              </TabsContent>

              <TabsContent value="images" className="space-y-4 mt-4">
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleFileSelect}
                />

                <Button
                  variant="outline"
                  className="w-full gap-2"
                  onClick={() => fileInputRef.current?.click()}
                  disabled={imageUploadMutation.isPending}
                >
                  <ImagePlus className="h-4 w-4" />
                  {imageUploadMutation.isPending ? t("inspection.images.uploading") : t("inspection.images.add")}
                </Button>

                {selectedRoom.photos.length === 0 ? (
                  <div className="py-12 text-center text-sm text-muted-foreground">
                    {t("inspection.images.empty")}
                  </div>
                ) : (
                  <div className="grid grid-cols-3 gap-3">
                     {selectedRoom.photos.map((photo: string, index: number) => {
                       const isCover = (selectedRoom.cover_photo_index ?? 0) === index
                      return (
                        <div
                          key={`${photo}-${index}`}
                          className={cn(
                            "group relative aspect-square overflow-hidden rounded-lg border-2 transition-all",
                            isCover ? "border-primary ring-2 ring-primary/30" : "border-transparent hover:border-primary/50",
                          )}
                        >
                          <img
                            src={resolveImageUrl(photo)}
                            alt={`Room photo ${index + 1}`}
                            className="h-full w-full object-cover"
                          />
                          {isCover && (
                            <div className="absolute left-1 top-1 flex items-center gap-1 rounded bg-primary px-1.5 py-0.5 text-[10px] font-medium text-primary-foreground">
                              <Star className="h-3 w-3" />
                              {t("inspection.images.cover")}
                            </div>
                          )}
                          <div className="absolute inset-0 flex items-center justify-center gap-2 bg-black/50 opacity-0 transition-opacity group-hover:opacity-100">
                            {!isCover && (
                              <Button
                                size="icon"
                                variant="secondary"
                                className="h-7 w-7"
                                onClick={() => handleSetCover(index)}
                                title={t("inspection.images.setCover")}
                              >
                                <Star className="h-3.5 w-3.5" />
                              </Button>
                            )}
                            <Button
                              size="icon"
                              variant="destructive"
                              className="h-7 w-7"
                              onClick={() => handleRemovePhoto(index)}
                              title={t("inspection.images.remove")}
                            >
                              <Trash2 className="h-3.5 w-3.5" />
                            </Button>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                )}
              </TabsContent>

              <TabsContent value="bookings" className="mt-4">
                {bookingsQuery.isLoading ? (
                  <div className="space-y-3">
                    {Array.from({ length: 3 }).map((_, i) => (
                      <Skeleton key={i} className="h-16 w-full" />
                    ))}
                  </div>
                ) : (bookingsQuery.data?.length ?? 0) === 0 ? (
                  <div className="py-12 text-center text-sm text-muted-foreground">
                    {t("inspection.bookings.empty")}
                  </div>
                ) : (
                  <div className="space-y-2">
                    {bookingsQuery.data?.map((booking) => (
                      <BookingRow key={booking.id} booking={booking} />
                    ))}
                  </div>
                )}
              </TabsContent>
            </Tabs>
          )}

          <SheetFooter className="mt-6">
            <Button variant="outline" onClick={handleCloseSheet}>
              {t("inspection.dialog.cancel")}
            </Button>
            <Button onClick={handleSaveRoom} disabled={updateMutation.isPending}>
              {updateMutation.isPending
                ? t("inspection.dialog.saving")
                : t("inspection.dialog.save")}
            </Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  )
}

function BedConfigurationFields({
  beds,
  showErrors,
  onChange,
}: {
  beds: PMSRoomBed[]
  showErrors: boolean
  onChange: (beds: PMSRoomBed[]) => void
}) {
  const { t } = useTranslation()

  const updateBed = (index: number, update: Partial<PMSRoomBed>) => {
    onChange(beds.map((bed, bedIndex) => (bedIndex === index ? { ...bed, ...update } : bed)))
  }

  const addBed = () => onChange([...beds, { type: "", quantity: 1 }])
  const removeBed = (index: number) => {
    if (beds.length === 1) return
    onChange(beds.filter((_bed, bedIndex) => bedIndex !== index))
  }

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <Label>{t("inspection.beds.title")}</Label>
        <Button type="button" variant="outline" size="sm" className="gap-1" onClick={addBed}>
          <Plus className="h-4 w-4" />
          {t("inspection.beds.add")}
        </Button>
      </div>
      <div className="space-y-2">
        {beds.map((bed, index) => {
          const hasError = showErrors && !bed.type
          const quantityId = `bed-quantity-${index}`
          return (
            <div key={index} className="space-y-1">
              <div className="flex items-center gap-2">
                <Select value={bed.type} onValueChange={(type) => updateBed(index, { type })}>
                  <SelectTrigger
                    className={cn("flex-1", hasError && "border-destructive ring-1 ring-destructive")}
                    aria-label={t("inspection.beds.type")}
                  >
                    <SelectValue placeholder={t("inspection.beds.type")} />
                  </SelectTrigger>
                  <SelectContent>
                    {BED_TYPE_KEYS.map((key) => {
                      const label = t(`inspection.bedTypes.${key}`)
                      return <SelectItem key={key} value={label}>{label}</SelectItem>
                    })}
                  </SelectContent>
                </Select>
                <Label htmlFor={quantityId} className="sr-only">
                  {t("inspection.beds.quantity")}
                </Label>
                <Input
                  id={quantityId}
                  type="number"
                  min={1}
                  step={1}
                  value={bed.quantity}
                  onChange={(event) => updateBed(index, {
                    quantity: Math.max(1, Number.parseInt(event.target.value, 10) || 1),
                  })}
                  className="w-20"
                  aria-label={t("inspection.beds.quantity")}
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={() => removeBed(index)}
                  disabled={beds.length === 1}
                  aria-label={t("inspection.beds.remove")}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
              {hasError ? (
                <p className="pl-1 text-xs text-destructive">{t("inspection.beds.required")}</p>
              ) : null}
            </div>
          )
        })}
      </div>
    </div>
  )
}

function RoomCreateSheet({
  open,
  propertyId,
  roomTypes,
  onOpenChange,
  onCreated,
}: {
  open: boolean
  propertyId: string
  roomTypes: PMSRoomType[]
  onOpenChange: (open: boolean) => void
  onCreated: (room: PMSRoom) => void
}) {
  const { t } = useTranslation()
  const [draft, setDraft] = useState<RoomCreateDraft>(createEmptyRoomDraft)
  const [showBedErrors, setShowBedErrors] = useState(false)

  const createMutation = useMutation({
    mutationFn: (data: PMSRoomCreate) => createPmsRoom(propertyId, data),
    onSuccess: (room) => {
      setDraft(createEmptyRoomDraft())
      onCreated(room)
    },
  })

  const updateDraft = <K extends keyof RoomCreateDraft>(key: K, value: RoomCreateDraft[K]) => {
    setDraft((current) => ({ ...current, [key]: value }))
  }

  const handleOpenChange = (nextOpen: boolean) => {
    if (!nextOpen) {
      setDraft(createEmptyRoomDraft())
      setShowBedErrors(false)
      createMutation.reset()
    }
    onOpenChange(nextOpen)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (draft.beds.some((bed) => !bed.type)) {
      setShowBedErrors(true)
      return
    }
    createMutation.mutate({
      room_type_id: Number(draft.room_type_id),
      room_number: draft.room_number.trim(),
      display_name: draft.display_name.trim() || null,
      floor: Number(draft.floor),
      area: draft.area || null,
      bedroom_count: Number(draft.bedroom_count),
      beds: draft.beds,
      capacity: Number(draft.capacity),
      meal_plan: draft.meal_plan,
      base_price: draft.base_price || null,
      currency: draft.currency,
      condition: draft.condition,
      availability: draft.availability,
      is_active: draft.is_active,
    })
  }

  const errorMessage = createMutation.isError
    ? getApiErrorMessage(createMutation.error, t("common.actionFailed"))
    : null

  return (
    <Sheet open={open} onOpenChange={handleOpenChange}>
      <SheetContent className="sm:max-w-xl overflow-y-auto">
        <SheetHeader>
          <SheetTitle>{t("inspection.create.title")}</SheetTitle>
          <SheetDescription>{t("inspection.create.description")}</SheetDescription>
        </SheetHeader>

        <form className="mt-6 space-y-6" onSubmit={handleSubmit}>
          {errorMessage ? (
            <div className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
              {errorMessage}
            </div>
          ) : null}

          <div className="space-y-2">
            <Label htmlFor="create-room-type">{t("inspection.form.roomType")}</Label>
            <Select
              value={draft.room_type_id}
              onValueChange={(value) => updateDraft("room_type_id", value)}
              required
            >
              <SelectTrigger id="create-room-type">
                <SelectValue placeholder={t("inspection.create.selectRoomType")} />
              </SelectTrigger>
              <SelectContent>
                {roomTypes.map((roomType) => (
                  <SelectItem key={roomType.id} value={String(roomType.id)}>
                    {roomType.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="create-room-number">{t("inspection.form.roomNumber")}</Label>
              <Input
                id="create-room-number"
                value={draft.room_number}
                onChange={(event) => updateDraft("room_number", event.target.value)}
                maxLength={20}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="create-display-name">{t("inspection.form.displayName")}</Label>
              <Input
                id="create-display-name"
                value={draft.display_name}
                onChange={(event) => updateDraft("display_name", event.target.value)}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="create-floor">{t("inspection.card.floor")}</Label>
              <Input
                id="create-floor"
                type="number"
                step="1"
                value={draft.floor}
                onChange={(event) => updateDraft("floor", event.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="create-area">{t("inspection.form.area")}</Label>
              <Input
                id="create-area"
                type="number"
                min="0.01"
                step="0.01"
                value={draft.area}
                onChange={(event) => updateDraft("area", event.target.value)}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="create-bedrooms">{t("inspection.form.bedrooms")}</Label>
              <Input
                id="create-bedrooms"
                type="number"
                min="0"
                step="1"
                value={draft.bedroom_count}
                onChange={(event) => updateDraft("bedroom_count", event.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="create-capacity">{t("inspection.form.capacity")}</Label>
              <Input
                id="create-capacity"
                type="number"
                min="1"
                step="1"
                value={draft.capacity}
                onChange={(event) => updateDraft("capacity", event.target.value)}
                required
              />
            </div>
          </div>

          <BedConfigurationFields
            beds={draft.beds}
            showErrors={showBedErrors}
            onChange={(beds) => {
              setShowBedErrors(false)
              updateDraft("beds", beds)
            }}
          />

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="create-condition">{t("inspection.dialog.condition")}</Label>
              <Select
                value={draft.condition}
                onValueChange={(value) => updateDraft("condition", value as PMSRoomCondition)}
              >
                <SelectTrigger id="create-condition"><SelectValue /></SelectTrigger>
                <SelectContent>
                  {ALL_CONDITIONS.map((condition) => (
                    <SelectItem key={condition} value={condition}>
                      {t(`inspection.condition.${condition}`)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="create-availability">{t("inspection.form.availability")}</Label>
              <Select
                value={draft.availability}
                onValueChange={(value) => updateDraft(
                  "availability",
                  value as PMSRoomCreate["availability"],
                )}
              >
                <SelectTrigger id="create-availability"><SelectValue /></SelectTrigger>
                <SelectContent>
                  {(["available", "occupied", "blocked"] as const).map((availability) => (
                    <SelectItem key={availability} value={availability}>
                      {t(`inspection.availability.${availability}`)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="create-meal-plan">{t("inspection.form.mealPlan")}</Label>
              <Select value={draft.meal_plan} onValueChange={(value) => updateDraft("meal_plan", value)}>
                <SelectTrigger id="create-meal-plan"><SelectValue /></SelectTrigger>
                <SelectContent>
                  {MEAL_PLANS.map((mealPlan) => (
                    <SelectItem key={mealPlan} value={mealPlan}>{mealPlan}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="create-base-price">{t("inspection.form.basePrice")}</Label>
              <Input
                id="create-base-price"
                type="number"
                min="0"
                step="0.01"
                value={draft.base_price}
                onChange={(event) => updateDraft("base_price", event.target.value)}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="create-currency">{t("inspection.form.currency")}</Label>
              <Select value={draft.currency} onValueChange={(value) => updateDraft("currency", value)}>
                <SelectTrigger id="create-currency"><SelectValue /></SelectTrigger>
                <SelectContent>
                  {CURRENCIES.map((currency) => (
                    <SelectItem key={currency} value={currency}>{currency}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-end pb-2">
              <div className="flex items-center gap-2">
                <Checkbox
                  id="create-is-active"
                  checked={draft.is_active}
                  onCheckedChange={(checked) => updateDraft("is_active", checked === true)}
                />
                <Label htmlFor="create-is-active" className="cursor-pointer">
                  {t("inspection.form.active")}
                </Label>
              </div>
            </div>
          </div>

          <SheetFooter>
            <Button type="button" variant="outline" onClick={() => handleOpenChange(false)}>
              {t("inspection.dialog.cancel")}
            </Button>
            <Button type="submit" disabled={createMutation.isPending}>
              {createMutation.isPending
                ? t("inspection.create.creating")
                : t("inspection.create.submit")}
            </Button>
          </SheetFooter>
        </form>
      </SheetContent>
    </Sheet>
  )
}

function RoomTypeCreateSheet({
  open,
  propertyId,
  onOpenChange,
  onCreated,
}: {
  open: boolean
  propertyId: string
  onOpenChange: (open: boolean) => void
  onCreated: () => void
}) {
  const { t } = useTranslation()
  const [name, setName] = useState("")
  const [preset, setPreset] = useState<string>("")
  const [capacity, setCapacity] = useState("2")
  const [baseRate, setBaseRate] = useState("")
  const [description, setDescription] = useState("")

  const createMutation = useMutation({
    mutationFn: (data: PMSRoomTypeCreate) => createPmsRoomType(propertyId, data),
    onSuccess: () => {
      setName("")
      setPreset("")
      setCapacity("2")
      setBaseRate("")
      setDescription("")
      onCreated()
    },
  })

  const handleOpenChange = (nextOpen: boolean) => {
    if (!nextOpen) {
      setName("")
      setPreset("")
      setCapacity("2")
      setBaseRate("")
      setDescription("")
      createMutation.reset()
    }
    onOpenChange(nextOpen)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    createMutation.mutate({
      name: name.trim(),
      preset: preset || null,
      capacity: Number(capacity),
      base_rate: baseRate.trim() ? baseRate.trim() : null,
      description: description.trim() || null,
    })
  }

  const errorMessage = createMutation.isError
    ? getApiErrorMessage(createMutation.error, t("common.actionFailed"))
    : null

  return (
    <Sheet open={open} onOpenChange={handleOpenChange}>
      <SheetContent className="sm:max-w-lg overflow-y-auto">
        <SheetHeader>
          <SheetTitle>{t("inspection.roomType.title")}</SheetTitle>
          <SheetDescription>{t("inspection.roomType.subtitle")}</SheetDescription>
        </SheetHeader>

        <form className="mt-6 space-y-6" onSubmit={handleSubmit}>
          {errorMessage ? (
            <div className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
              {errorMessage}
            </div>
          ) : null}

          <div className="space-y-2">
            <Label htmlFor="create-room-type-name">{t("inspection.roomType.name")}</Label>
            <Input
              id="create-room-type-name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              maxLength={100}
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="create-room-type-preset">{t("inspection.roomType.preset")}</Label>
              <Select value={preset} onValueChange={setPreset}>
                <SelectTrigger id="create-room-type-preset">
                  <SelectValue placeholder="—" />
                </SelectTrigger>
                <SelectContent>
                  {ROOM_TYPE_PRESETS.map((p) => (
                    <SelectItem key={p} value={p}>{p}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="create-room-type-capacity">{t("inspection.roomType.capacity")}</Label>
              <Input
                id="create-room-type-capacity"
                type="number"
                min="1"
                step="1"
                value={capacity}
                onChange={(event) => setCapacity(event.target.value)}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="create-room-type-base-rate">{t("inspection.roomType.baseRate")}</Label>
            <Input
              id="create-room-type-base-rate"
              type="number"
              min="0"
              step="0.01"
              value={baseRate}
              onChange={(event) => setBaseRate(event.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="create-room-type-description">{t("inspection.roomType.description")}</Label>
            <Textarea
              id="create-room-type-description"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
          </div>

          <SheetFooter>
            <Button type="button" variant="outline" onClick={() => handleOpenChange(false)}>
              {t("inspection.dialog.cancel")}
            </Button>
            <Button type="submit" disabled={createMutation.isPending}>
              {createMutation.isPending
                ? t("inspection.roomType.creating")
                : t("inspection.roomType.submit")}
            </Button>
          </SheetFooter>
        </form>
      </SheetContent>
    </Sheet>
  )
}

function BookingRow({ booking }: { booking: PMSBooking }) {
  const statusColors: Record<string, string> = {
    new: "bg-green-100 text-green-800",
    confirmed: "bg-blue-100 text-blue-800",
    checked_in: "bg-sky-100 text-sky-800",
    checked_out: "bg-gray-100 text-gray-800",
    cancelled: "bg-red-100 text-red-800",
    no_show: "bg-orange-100 text-orange-800",
  }

  return (
    <div className="flex items-center justify-between rounded-lg border p-3 text-sm">
      <div className="min-w-0 flex-1">
        <p className="font-medium truncate">
          {booking.guest_first_name} {booking.guest_last_name}
        </p>
        <p className="text-xs text-muted-foreground">
          {booking.check_in} → {booking.check_out}
        </p>
      </div>
      <div className="flex items-center gap-2 shrink-0 ml-3">
        <span className="text-xs text-muted-foreground font-mono">{booking.booking_number}</span>
        <Badge variant="outline" className={cn("text-[10px]", statusColors[booking.status] ?? "")}>
          {booking.status}
        </Badge>
      </div>
    </div>
  )
}

function RoomCard({
  room,
  roomType,
  onClick,
}: {
  room: PMSRoom
  roomType?: PMSRoomType
  onClick: () => void
}) {
  const displayName = room.display_name || room.room_number

  return (
    <Card
      className="cursor-pointer transition-all hover:ring-1 hover:ring-primary/50 hover:shadow-md"
      onClick={onClick}
    >
      <CardHeader className="border-b bg-muted/30 pb-3">
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-base">{displayName}</CardTitle>
            {room.display_name && room.display_name !== room.room_number ? (
              <p className="text-xs text-muted-foreground">#{room.room_number}</p>
            ) : null}
          </div>
          <Badge
            variant="outline"
            className={cn("text-[10px]", availabilityStyles[room.availability] ?? "")}
          >
            {room.availability}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-2 pt-4 text-sm">
        <div className="grid grid-cols-2 gap-x-4 gap-y-1.5">
          <div>
            <span className="text-xs text-muted-foreground">Floor</span>
            <p className="font-medium">{room.floor}</p>
          </div>
          <div>
            <span className="text-xs text-muted-foreground">Capacity</span>
            <p className="font-medium">{room.capacity} guests</p>
          </div>
          {roomType ? (
            <div>
              <span className="text-xs text-muted-foreground">Room Type</span>
              <p className="font-medium">{roomType.name}</p>
            </div>
          ) : null}
          {room.room_type ? (
            <div>
              <span className="text-xs text-muted-foreground">Category</span>
              <p className="font-medium">{room.room_type}</p>
            </div>
          ) : null}
          <div>
            <span className="text-xs text-muted-foreground">Bedrooms</span>
            <p className="font-medium">{room.bedroom_count}</p>
          </div>
          {room.area ? (
            <div>
              <span className="text-xs text-muted-foreground">Area</span>
              <p className="font-medium">{room.area}</p>
            </div>
          ) : null}
        </div>

        <div className="flex items-center gap-2 pt-1">
          <span
            className={cn(
              "inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-medium",
              conditionStyles[room.condition] ?? "bg-slate-50 text-slate-700 border-slate-200",
            )}
          >
            {room.condition}
          </span>
          {room.meal_plan ? (
            <Badge variant="outline" className="text-[10px]">
              {room.meal_plan}
            </Badge>
          ) : null}
        </div>

        {room.photos.length > 0 && (
          <div className="flex items-center gap-1 pt-1">
            <div className="flex -space-x-1">
              {room.photos.slice(0, 3).map((photo: string, i: number) => (
                <img
                  key={i}
                  src={resolveImageUrl(photo)}
                  alt=""
                  className="h-8 w-8 rounded-md border-2 border-background object-cover"
                />
              ))}
            </div>
            {room.photos.length > 3 && (
              <span className="text-[10px] text-muted-foreground">+{room.photos.length - 3}</span>
            )}
          </div>
        )}

        {room.amenities.length > 0 && (
          <div className="flex flex-wrap gap-1 pt-1">
            {room.amenities.slice(0, 4).map((a) => (
              <Badge key={a} variant="secondary" className="text-[10px]">
                {a}
              </Badge>
            ))}
            {room.amenities.length > 4 && (
              <span className="text-[10px] text-muted-foreground">+{room.amenities.length - 4}</span>
            )}
          </div>
        )}

        {!room.is_active && (
          <Badge variant="outline" className="text-[10px] text-muted-foreground">
            Inactive
          </Badge>
        )}
      </CardContent>
    </Card>
  )
}
