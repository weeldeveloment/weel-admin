import { useMemo, useState } from "react"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useRoomsQuery, useRoomTypesQuery } from "@/hooks/useCalendarQueries"
import { updatePmsRoom } from "@/lib/api"
import type { PMSRoom, PMSRoomCondition, PMSRoomType } from "@/types/pms"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useTranslation } from "react-i18next"
import { cn } from "@/lib/utils"
import { CheckCircle2, AlertTriangle, Search, Wrench, Filter } from "lucide-react"

const CONDITION_STYLES: Record<PMSRoomCondition, string> = {
  clean: "bg-emerald-50 text-emerald-700 border-emerald-200",
  dirty: "bg-amber-50 text-amber-700 border-amber-200",
  inspection: "bg-sky-50 text-sky-700 border-sky-200",
  maintenance: "bg-red-50 text-red-700 border-red-200",
}

const CONDITION_ICONS: Record<PMSRoomCondition, typeof CheckCircle2> = {
  clean: CheckCircle2,
  dirty: AlertTriangle,
  inspection: Search,
  maintenance: Wrench,
}

const ALL_CONDITIONS: PMSRoomCondition[] = ["clean", "dirty", "inspection", "maintenance"]

export default function RoomInspectionPage({ hotelId }: { hotelId: string | undefined }) {
  const { t } = useTranslation()
  const queryClient = useQueryClient()
  const propertyId = hotelId ?? null

  const roomsQuery = useRoomsQuery(propertyId)
  const roomTypesQuery = useRoomTypesQuery(propertyId)

  const rooms = useMemo(() => roomsQuery.data ?? [], [roomsQuery.data])
  const roomTypes = useMemo(() => roomTypesQuery.data ?? [], [roomTypesQuery.data])
  const loading = roomsQuery.isLoading || roomTypesQuery.isLoading

  const roomTypeMap = useMemo(() => {
    const map = new Map<number, PMSRoomType>()
    for (const rt of roomTypes) {
      if (rt.id) map.set(rt.id, rt)
    }
    return map
  }, [roomTypes])

  const [selectedRoom, setSelectedRoom] = useState<PMSRoom | null>(null)
  const [selectedCondition, setSelectedCondition] = useState<PMSRoomCondition | null>(null)
  const [filterCondition, setFilterCondition] = useState<string>("all")
  const [filterFloor, setFilterFloor] = useState<string>("all")
  const [searchQuery, setSearchQuery] = useState("")

  const floors = useMemo(() => {
    const set = new Set<number>()
    for (const r of rooms) set.add(r.floor)
    return Array.from(set).sort((a, b) => a - b)
  }, [rooms])

  const filteredRooms = useMemo(() => {
    return rooms.filter((r) => {
      if (filterCondition !== "all" && r.condition !== filterCondition) return false
      if (filterFloor !== "all" && r.floor !== Number(filterFloor)) return false
      if (searchQuery) {
        const q = searchQuery.toLowerCase()
        return (
          r.room_number.toLowerCase().includes(q) ||
          (r.display_name?.toLowerCase().includes(q) ?? false)
        )
      }
      return true
    })
  }, [rooms, filterCondition, filterFloor, searchQuery])

  const conditionCounts = useMemo(() => {
    const counts: Record<PMSRoomCondition, number> = { clean: 0, dirty: 0, inspection: 0, maintenance: 0 }
    for (const r of rooms) counts[r.condition]++
    return counts
  }, [rooms])

  const updateMutation = useMutation({
    mutationFn: ({ roomId, condition }: { roomId: number; condition: PMSRoomCondition }) =>
      updatePmsRoom(propertyId!, roomId, { condition }),
    onSuccess: (updatedRoom) => {
      queryClient.setQueryData<PMSRoom[]>(["calendar", "rooms", propertyId ?? ""], (old) =>
        old?.map((r) => (r.id === updatedRoom.id ? { ...r, ...updatedRoom } : r)),
      )
      setSelectedRoom(null)
      setSelectedCondition(null)
    },
  })

  const handleSave = () => {
    if (!selectedRoom || !selectedCondition) return
    updateMutation.mutate({ roomId: selectedRoom.id, condition: selectedCondition })
  }

  const handleOpenDialog = (room: PMSRoom) => {
    setSelectedRoom(room)
    setSelectedCondition(room.condition)
  }

  if (loading) {
    return (
      <div className="space-y-4">
        <Skeleton className="h-10 w-64" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton key={i} className="h-40" />
          ))}
        </div>
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
      <div className="flex flex-wrap items-center gap-2">
        {ALL_CONDITIONS.map((condition) => (
          <Badge
            key={condition}
            variant="outline"
            className={cn("gap-1.5", CONDITION_STYLES[condition])}
          >
            {t(`inspection.condition.${condition}`)}
            <span className="font-bold">{conditionCounts[condition]}</span>
          </Badge>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <div className="relative flex-1 min-w-[180px]">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder={t("inspection.filter.search")}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="h-9 w-full rounded-md border border-input bg-background pl-8 pr-3 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          />
        </div>

        <Filter className="h-4 w-4 text-muted-foreground" />

        <Select value={filterCondition} onValueChange={setFilterCondition}>
          <SelectTrigger className="w-[140px]">
            <SelectValue placeholder={t("inspection.filter.condition")} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">{t("inspection.filter.all")}</SelectItem>
            {ALL_CONDITIONS.map((c) => (
              <SelectItem key={c} value={c}>
                {t(`inspection.condition.${c}`)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={filterFloor} onValueChange={setFilterFloor}>
          <SelectTrigger className="w-[120px]">
            <SelectValue placeholder={t("inspection.filter.floor")} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">{t("inspection.filter.allFloors")}</SelectItem>
            {floors.map((f) => (
              <SelectItem key={f} value={String(f)}>
                {t("inspection.floor", { number: f })}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {filteredRooms.length === 0 ? (
        <Card>
          <CardContent className="py-8 text-center text-sm text-muted-foreground">
            {t("inspection.empty")}
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredRooms.map((room) => (
            <RoomCard
              key={room.id}
              room={room}
              roomType={room.room_type_id ? roomTypeMap.get(room.room_type_id) : undefined}
              onSelect={() => handleOpenDialog(room)}
            />
          ))}
        </div>
      )}

      <Dialog open={!!selectedRoom} onOpenChange={(open) => { if (!open) { setSelectedRoom(null); setSelectedCondition(null) } }}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>
              {t("inspection.dialog.title", { room: selectedRoom?.display_name || selectedRoom?.room_number })}
            </DialogTitle>
          </DialogHeader>

          {selectedRoom && (
            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-3 text-sm">
                <div>
                  <span className="text-xs text-muted-foreground">{t("inspection.card.floor")}</span>
                  <p className="font-medium">{selectedRoom.floor}</p>
                </div>
                <div>
                  <span className="text-xs text-muted-foreground">{t("inspection.card.type")}</span>
                  <p className="font-medium">
                    {selectedRoom.room_type_id
                      ? roomTypeMap.get(selectedRoom.room_type_id)?.name ?? "—"
                      : selectedRoom.room_type ?? "—"}
                  </p>
                </div>
                <div>
                  <span className="text-xs text-muted-foreground">{t("inspection.card.availability")}</span>
                  <p className="font-medium">{selectedRoom.availability}</p>
                </div>
              </div>

              <div className="space-y-2">
                <span className="text-sm font-medium">{t("inspection.dialog.condition")}</span>
                <div className="grid grid-cols-2 gap-2">
                  {ALL_CONDITIONS.map((condition) => {
                    const Icon = CONDITION_ICONS[condition]
                    const isSelected = selectedCondition === condition
                    return (
                      <Button
                        key={condition}
                        variant={isSelected ? "default" : "outline"}
                        className={cn(
                          "justify-start gap-2 h-10",
                          isSelected && "ring-2 ring-primary",
                        )}
                        onClick={() => setSelectedCondition(condition)}
                      >
                        <Icon className="h-4 w-4" />
                        {t(`inspection.condition.${condition}`)}
                      </Button>
                    )
                  })}
                </div>
              </div>
            </div>
          )}

          <DialogFooter>
            <Button variant="outline" onClick={() => { setSelectedRoom(null); setSelectedCondition(null) }}>
              {t("inspection.dialog.cancel")}
            </Button>
            <Button
              onClick={handleSave}
              disabled={!selectedCondition || selectedCondition === selectedRoom?.condition || updateMutation.isPending}
            >
              {updateMutation.isPending ? t("inspection.dialog.saving") : t("inspection.dialog.save")}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

function RoomCard({
  room,
  roomType,
  onSelect,
}: {
  room: PMSRoom
  roomType?: PMSRoomType
  onSelect: () => void
}) {
  const { t } = useTranslation()
  const displayName = room.display_name || room.room_number
  const conditionStyle = CONDITION_STYLES[room.condition] ?? "bg-slate-50 text-slate-700 border-slate-200"

  return (
    <Card
      className="cursor-pointer transition-all hover:ring-1 hover:ring-primary/50 hover:shadow-md"
      onClick={onSelect}
    >
      <CardHeader className="border-b bg-muted/30 pb-3">
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-base">{displayName}</CardTitle>
            {room.display_name && room.display_name !== room.room_number ? (
              <p className="text-xs text-muted-foreground">#{room.room_number}</p>
            ) : null}
          </div>
          <Badge variant="outline" className={cn("text-[10px]", conditionStyle)}>
            {t(`inspection.condition.${room.condition}`)}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-2 pt-4 text-sm">
        <div className="grid grid-cols-2 gap-x-4 gap-y-1.5">
          <div>
            <span className="text-xs text-muted-foreground">{t("inspection.card.floor")}</span>
            <p className="font-medium">{room.floor}</p>
          </div>
          <div>
            <span className="text-xs text-muted-foreground">{t("inspection.card.availability")}</span>
            <p className="font-medium">{room.availability}</p>
          </div>
          {roomType && (
            <div className="col-span-2">
              <span className="text-xs text-muted-foreground">{t("inspection.card.type")}</span>
              <p className="font-medium">{roomType.name}</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
