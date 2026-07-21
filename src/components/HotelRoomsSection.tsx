import { useMemo, useRef, useState } from "react"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { useRoomsQuery, useRoomTypesQuery } from "@/hooks/useCalendarQueries"
import { fetchPmsBookings, updatePmsRoom, uploadRoomImage } from "@/lib/api"
import type { PMSRoomUpdate } from "@/lib/api"
import { resolveImageUrl } from "@/lib/utils"
import type { PMSBooking, PMSRoom, PMSRoomCondition, PMSRoomType } from "@/types/pms"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
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

type SheetTab = "details" | "images" | "bookings"

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
  const [activeTab, setActiveTab] = useState<SheetTab>("details")
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
    mutationFn: (data: PMSRoomUpdate) =>
      updatePmsRoom(propertyId!, selectedRoom!.id, data),
    onSuccess: (updatedRoom) => {
      queryClient.setQueryData<PMSRoom[]>(["calendar", "rooms", propertyId ?? ""], (old) =>
        old?.map((r) => (r.id === updatedRoom.id ? { ...r, ...updatedRoom } : r)),
      )
      setSelectedRoom((prev) => (prev ? { ...prev, ...updatedRoom } : prev))
    },
  })

  const imageUploadMutation = useMutation({
    mutationFn: (file: File) => uploadRoomImage(propertyId!, selectedRoom!.id, file),
    onSuccess: ({ image_url }) => {
      const updatedPhotos = [...(selectedRoom?.photos ?? []), image_url]
      updateMutation.mutate({ photos: updatedPhotos })
    },
  })

  const handleOpenSheet = (room: PMSRoom) => {
    setSelectedRoom(room)
    setActiveTab("details")
  }

  const handleCloseSheet = () => {
    setSelectedRoom(null)
    setActiveTab("details")
  }

  const handleConditionChange = (condition: PMSRoomCondition) => {
    if (!selectedRoom) return
    updateMutation.mutate({ condition })
  }

  const handleFieldChange = (field: string, value: unknown) => {
    if (!selectedRoom) return
    updateMutation.mutate({ [field]: value } as PMSRoomUpdate)
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
    updateMutation.mutate({ photos: updatedPhotos, cover_photo_index: coverIndex })
  }

  const handleSetCover = (index: number) => {
    if (!selectedRoom) return
    updateMutation.mutate({ cover_photo_index: index })
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
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
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
