import { useMemo } from "react"
import { useRoomsQuery, useRoomTypesQuery } from "@/hooks/useCalendarQueries"
import type { PMSRoom, PMSRoomType } from "@/types/pms"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import { useTranslation } from "react-i18next"
import { cn } from "@/lib/utils"

const conditionStyles: Record<string, string> = {
  good: "bg-emerald-50 text-emerald-700 border-emerald-200",
  maintenance: "bg-amber-50 text-amber-700 border-amber-200",
  renovation: "bg-rose-50 text-rose-700 border-rose-200",
}

const availabilityStyles: Record<string, string> = {
  available: "bg-emerald-50 text-emerald-700",
  occupied: "bg-amber-50 text-amber-700",
  maintenance: "bg-rose-50 text-rose-700",
}

export default function HotelRoomsSection({ hotelId }: { hotelId: string | undefined }) {
  const { t } = useTranslation()
  const propertyId: string | null = hotelId ?? null

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
          {rooms.length} {t('properties.rooms')}
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
            <RoomCard key={room.id} room={room} roomTypeMap={roomTypeMap} />
          ))}
        </div>
      )}
    </div>
  )
}

function RoomCard({ room, roomTypeMap }: { room: PMSRoom; roomTypeMap: Map<number, PMSRoomType> }) {
  const roomType = room.room_type_id ? roomTypeMap.get(room.room_type_id) : null
  const displayName = room.display_name || room.room_number

  return (
    <Card className="overflow-hidden">
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
