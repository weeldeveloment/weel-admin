import { useMemo, useRef } from "react"
import { useCalendarReducer } from "@/hooks/useCalendarReducer"
import {
  usePropertiesQuery,
  useBookingsQuery,
  useRoomsQuery,
  useCalendarSlotsQuery,
  calendarKeys,
} from "@/hooks/useCalendarQueries"
import {
  useMoveBookingMutation,
  useChangeBookingStatusMutation,
  useCreateBookingMutation,
  useUpdateBookingMutation,
} from "@/hooks/useCalendarMutations"

import { format, subDays } from "date-fns"
import { STATUS_ACTION_TO_BOOKING_STATUS, type PMSBooking, type CalendarView, type PMSBookingStatus, type PMSBookingStatusAction } from "@/types/pms"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import FullCalendar from "@fullcalendar/react"
import type {
  EventApi,
  DateSelectArg,
  EventClickArg,
  EventDropArg,
} from "@fullcalendar/core"
import interactionPlugin from "@fullcalendar/interaction"
import resourceTimelinePlugin from "@fullcalendar/resource-timeline"

import CalendarToolbar from "@/components/calendar/CalendarToolbar"
import CalendarLegend from "@/components/calendar/CalendarLegend"
import BookingDetailModal from "@/components/calendar/BookingDetailModal"
import QuickBookingModal from "@/components/calendar/QuickBookingModal"
import { useQueryClient } from "@tanstack/react-query"

const fullCalendarViewMap: Record<CalendarView, string> = {
  day: "hotelDay",
  week: "hotelWeek",
  month: "hotelMonth",
}

export default function ChessboardPage() {
  const [state, actions] = useCalendarReducer()
  const queryClient = useQueryClient()
  const calendarRef = useRef<FullCalendar>(null)

  const propertiesQuery = usePropertiesQuery()

  const propertyId = state.selectedPropertyId

  const bookingsQuery = useBookingsQuery(propertyId, state.dateFrom, state.dateTo)
  const roomsQuery = useRoomsQuery(propertyId)
  const calendarSlotsQuery = useCalendarSlotsQuery(propertyId, state.dateFrom, state.dateTo)

  const moveMutation = useMoveBookingMutation(propertyId)
  const statusMutation = useChangeBookingStatusMutation(propertyId)
  const createMutation = useCreateBookingMutation(propertyId)
  const updateMutation = useUpdateBookingMutation(propertyId)

  const bookings = useMemo(() => bookingsQuery.data ?? [], [bookingsQuery.data])
  const rooms = useMemo(() => roomsQuery.data ?? [], [roomsQuery.data])
  const loading = bookingsQuery.isLoading || roomsQuery.isLoading || calendarSlotsQuery.isLoading
  const error = bookingsQuery.error?.message ?? roomsQuery.error?.message ?? calendarSlotsQuery.error?.message ?? null

  const handleDatesSet = () => {
    // datesSet fires on every render — we don't need to sync since
    // our state drives the view, not the other way around
  }

  const handleViewChange = (newView: CalendarView) => {
    actions.setView(newView)
    calendarRef.current?.getApi()?.changeView(fullCalendarViewMap[newView])
  }

  const handleDateChange = (newDate: Date) => {
    actions.setDate(newDate)
    calendarRef.current?.getApi()?.gotoDate(newDate)
  }

  const handleUndo = () => {
    const stack = state.undoStack
    const lastAction = stack[stack.length - 1]
    if (!lastAction) return
    actions.popUndo()

    if (lastAction.type === "move" || lastAction.type === "resize") {
      const data = lastAction.data as { bookingId: number; prevRoomId?: number; prevCheckIn: string; prevCheckOut: string }
      queryClient.setQueriesData<PMSBooking[]>({ queryKey: calendarKeys.bookingsRoot(propertyId ?? "") }, (old) =>
        old?.map((b) =>
          b.id === data.bookingId
            ? { ...b, room_id: data.prevRoomId ?? b.room_id, check_in: data.prevCheckIn, check_out: data.prevCheckOut }
            : b,
        ),
      )
    } else if (lastAction.type === "status") {
      const data = lastAction.data as { bookingId: number; prevStatus: PMSBookingStatus }
      queryClient.setQueriesData<PMSBooking[]>({ queryKey: calendarKeys.bookingsRoot(propertyId ?? "") }, (old) =>
        old?.map((b) => (b.id === data.bookingId ? { ...b, status: data.prevStatus } : b)),
      )
    }
  }

  const filteredRooms = useMemo(() => {
    let result = rooms
    if (state.searchQuery) {
      const s = state.searchQuery.toLowerCase()
      result = result.filter((r) => r.room_number.toLowerCase().includes(s))
    }
    if (state.filterRoomType && state.filterRoomType !== "all") {
      result = result.filter((r) => String(r.room_type_id) === state.filterRoomType)
    }
    if (state.filterFloor && state.filterFloor !== "all") {
      result = result.filter((r) => String(r.floor) === state.filterFloor)
    }
    return result
  }, [rooms, state.searchQuery, state.filterRoomType, state.filterFloor])

  const resources = useMemo(() => {
    return filteredRooms.map((room) => ({
      id: String(room.id),
      title: room.room_number,
    }))
  }, [filteredRooms])

  const events = useMemo(() => {
    return bookings
      .filter((b) => !state.filterStatus || state.filterStatus === "all" || b.status === state.filterStatus)
      .map((b) => {
        const guestName = [b.guest_first_name, b.guest_last_name].filter(Boolean).join(" ") || "Guest"
        return {
          id: String(b.id),
          resourceId: String(b.room_id),
          title: `${guestName} #${b.booking_number || b.id}`,
          start: b.check_in,
          end: b.check_out,
          classNames: [`fc-event-status-${b.status || "default"}`],
          extendedProps: {
            booking: b,
            status: b.status,
            guestName,
            bookingNumber: b.booking_number || b.id,
          },
        }
      })
  }, [bookings, state.filterStatus])

  const syncSelectedBooking = (bookingId: number) => {
    const booking = queryClient
      .getQueriesData<PMSBooking[]>({ queryKey: calendarKeys.bookingsRoot(propertyId ?? "") })
      .flatMap(([, data]) => data ?? [])
      ?.find((b) => b.id === bookingId)
    if (booking) actions.selectBooking(booking)
  }

  const handleEventDrop = async (info: EventDropArg) => {
    const booking = info.event.extendedProps.booking as PMSBooking
    const newResource = info.newResource
    const newResourceId = newResource?.id
    const newRoomId = newResourceId && !newResourceId.startsWith("type-")
      ? parseInt(newResourceId)
      : booking.room_id

    if (propertyId && newRoomId) {
      const prevBooking = bookings.find((b) => b.id === booking.id!)
      const roomChanged = prevBooking && newRoomId !== prevBooking.room_id

      try {
        await moveMutation.mutateAsync({
          bookingId: booking.id!,
          data: {
            new_room_id: newRoomId,
            new_check_in: info.event.startStr,
            new_check_out: info.event.endStr,
          },
        })
        actions.pushUndo({
          type: roomChanged ? "move" : "resize",
          data: {
            bookingId: booking.id!,
            prevRoomId: prevBooking?.room_id,
            prevCheckIn: prevBooking?.check_in,
            prevCheckOut: prevBooking?.check_out,
          },
          bookingId: booking.id!,
        })
      } catch {
        calendarRef.current?.getApi()?.refetchEvents()
      }
    }
  }

  const handleEventResize = async (info: { event: EventApi }) => {
    const booking = info.event.extendedProps.booking as PMSBooking
    if (propertyId) {
      const prevBooking = bookings.find((b) => b.id === booking.id!)
      try {
        await moveMutation.mutateAsync({
          bookingId: booking.id!,
          data: {
            new_room_id: booking.room_id,
            new_check_in: info.event.startStr,
            new_check_out: info.event.endStr,
          },
        })
        actions.pushUndo({
          type: "resize",
          data: {
            bookingId: booking.id!,
            prevRoomId: prevBooking?.room_id,
            prevCheckIn: prevBooking?.check_in,
            prevCheckOut: prevBooking?.check_out,
          },
          bookingId: booking.id!,
        })
      } catch {
        calendarRef.current?.getApi()?.refetchEvents()
      }
    }
  }

  const handleEventClick = (info: EventClickArg) => {
    const booking = info.event.extendedProps.booking as PMSBooking
    actions.selectBooking(booking)
  }

  const handleSelect = (selectInfo: DateSelectArg) => {
    const resourceId = selectInfo.resource?.id
    const roomId = resourceId && !resourceId.startsWith("type-") ? parseInt(resourceId) : undefined
    const checkIn = format(new Date(selectInfo.start), "yyyy-MM-dd")
    const checkOut = format(subDays(new Date(selectInfo.end), 1), "yyyy-MM-dd")
    actions.openQuickBooking({ roomId, checkIn, checkOut })
    calendarRef.current?.getApi()?.unselect()
  }

  const handleCreateBooking = async (bookingData: Record<string, unknown>) => {
    if (propertyId) {
      try {
        await createMutation.mutateAsync(bookingData)
        actions.closeQuickBooking()
      } catch (err) {
        console.error("Failed to create booking:", err)
      }
    }
  }

  const handleUpdateBooking = async (bookingId: number, bookingData: Partial<PMSBooking>) => {
    if (!propertyId) return
    const updated = await updateMutation.mutateAsync({ bookingId, data: bookingData })
    actions.selectBooking(updated)
  }

  const handleStatusChange = async (bookingId: number, status: PMSBookingStatusAction) => {
    if (propertyId) {
      const prevBooking = bookings.find((b) => b.id === bookingId)
      queryClient.setQueriesData<PMSBooking[]>({ queryKey: calendarKeys.bookingsRoot(propertyId) }, (old) =>
        old?.map((b) => (b.id === bookingId ? { ...b, status: STATUS_ACTION_TO_BOOKING_STATUS[status] } : b)),
      )
      try {
        await statusMutation.mutateAsync({ bookingId, status })
        syncSelectedBooking(bookingId)
        actions.pushUndo({
          type: "status",
          data: { bookingId, prevStatus: prevBooking?.status },
          bookingId,
        })
      } catch {
        // Error handled by parent
      }
    }
  }

  return (
    <div className="flex flex-col h-full p-6 space-y-4 overflow-auto relative">
      {loading && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-background/60">
          <div className="text-center">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent mx-auto" />
            <p className="mt-2 text-sm text-muted-foreground">Loading...</p>
          </div>
        </div>
      )}
      {error && (
        <div className="bg-destructive/10 border border-destructive/20 text-destructive text-sm px-4 py-2 rounded-md flex items-center justify-between">
          <span>{error}</span>
          <button onClick={() => queryClient.resetQueries()} className="ml-4 text-destructive/70 hover:text-destructive font-bold text-lg leading-none">
            ×
          </button>
        </div>
      )}

      {/* Property Selector */}
      <div className="flex items-center gap-3">
        <label className="text-sm font-medium">Hotel:</label>
        <Select
          value={propertyId ?? ""}
          onValueChange={(v) => actions.setProperty(v)}
        >
          <SelectTrigger className="w-[280px]">
            <SelectValue placeholder="Select a hotel..." />
          </SelectTrigger>
          <SelectContent>
            {(propertiesQuery.data ?? []).map((p) => (
              <SelectItem key={p.id} value={p.guid}>{p.name}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {propertyId && (
        <>
          <CalendarToolbar
            compact={false}
            currentDate={state.currentDate}
            view={state.view}
            bookings={bookings}
            rooms={rooms}
            searchQuery={state.searchQuery}
            filterStatus={state.filterStatus}
            filterRoomType={state.filterRoomType}
            filterFloor={state.filterFloor}
            undoStackLength={state.undoStack.length}
            onDateChange={handleDateChange}
            onViewChange={handleViewChange}
            onSearchChange={actions.setSearchQuery}
            onFilterStatusChange={actions.setFilterStatus}
            onFilterRoomTypeChange={actions.setFilterRoomType}
            onFilterFloorChange={actions.setFilterFloor}
            onUndo={handleUndo}
          />

          <div className="flex items-center justify-between">
            <CalendarLegend />
            <Button size="sm" onClick={() => actions.openQuickBooking(null)}>
              Quick Booking
            </Button>
          </div>

          <div className={cn("rounded-xl border bg-card shadow-sm overflow-hidden", state.view === "month" ? "h-[800px]" : "h-[600px]")}>
            <FullCalendar
              ref={calendarRef}
              plugins={[resourceTimelinePlugin, interactionPlugin]}
              initialView={fullCalendarViewMap[state.view]}
              headerToolbar={false}
              resources={resources}
              events={events}
              editable={true}
              selectable={true}
              selectMirror={true}
              eventDrop={handleEventDrop}
              eventResize={handleEventResize}
              eventClick={handleEventClick}
              select={handleSelect}
              resourceAreaWidth={200}
              height="100%"
              resourceAreaHeaderContent="Room"
              slotDuration={{ days: 1 }}
              slotLabelInterval={{ days: 1 }}
              slotLabelFormat={[
                { weekday: "short" },
                { day: "numeric", month: "short" },
              ]}
              views={{
                hotelDay: { type: "resourceTimeline", duration: { days: 7 } },
                hotelWeek: { type: "resourceTimeline", duration: { days: 14 } },
                hotelMonth: { type: "resourceTimeline", duration: { days: 31 } },
              }}
              datesSet={handleDatesSet}
              eventContent={(arg) => {
                const guestName = arg.event.extendedProps.guestName as string
                const bookingNumber = arg.event.extendedProps.bookingNumber
                return (
                  <div className="fc-event-main-frame px-1.5 py-1">
                    <div className="fc-event-title text-[11px] font-semibold leading-tight truncate">
                      {guestName}
                    </div>
                    <div className="text-[10px] opacity-80 leading-tight">
                      #{bookingNumber}
                    </div>
                  </div>
                )
              }}
            />
          </div>

          <BookingDetailModal
            booking={state.selectedBooking}
            open={!!state.selectedBooking}
            onOpenChange={(open) => { if (!open) actions.selectBooking(null) }}
            onStatusChange={handleStatusChange}
            onUpdate={handleUpdateBooking}
            onClose={() => actions.selectBooking(null)}
          />

          <QuickBookingModal
            open={state.quickBookingOpen}
            onOpenChange={(open) => { if (!open) actions.closeQuickBooking() }}
            rooms={filteredRooms}
            initialCheckIn={state.quickBookingInitial?.checkIn}
            initialCheckOut={state.quickBookingInitial?.checkOut}
            initialRoomId={state.quickBookingInitial?.roomId}
            onCreate={handleCreateBooking}
          />
        </>
      )}
    </div>
  )
}
