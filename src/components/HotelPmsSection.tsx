import { useEffect, useMemo, useRef } from "react"
import { useCalendarReducer } from "@/hooks/useCalendarReducer"
import {
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

const undoStatusActionMap: Partial<Record<PMSBookingStatus, PMSBookingStatusAction>> = {
  confirmed: "confirm",
  checked_in: "check_in",
  checked_out: "check_out",
  cancelled: "cancel",
}

export default function HotelPmsSection({ hotelId }: { hotelId: string | undefined }) {
  const [state, actions] = useCalendarReducer()
  const queryClient = useQueryClient()
  const calendarRef = useRef<FullCalendar>(null)

  const propertyId: string | null = hotelId ?? null

  useEffect(() => {
    if (propertyId) actions.setProperty(propertyId)
  }, [propertyId, actions])

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

  const handleDatesSet = () => {}

  const handleViewChange = (newView: CalendarView) => {
    actions.setView(newView)
    calendarRef.current?.getApi()?.changeView(fullCalendarViewMap[newView])
  }

  const handleDateChange = (newDate: Date) => {
    actions.setDate(newDate)
    calendarRef.current?.getApi()?.gotoDate(newDate)
  }

  const updateBookingCaches = (bookingId: number, updates: Partial<PMSBooking>) => {
    queryClient.setQueriesData<PMSBooking[]>(
      { queryKey: calendarKeys.bookingsRoot(propertyId ?? "") },
      (old) => old?.map((b) => (b.id === bookingId ? { ...b, ...updates } : b)),
    )
  }

  const handleUndo = async () => {
    const stack = state.undoStack
    const lastAction = stack[stack.length - 1]
    if (!lastAction) return

    if (lastAction.type === "move" || lastAction.type === "resize") {
      const data = lastAction.data as { bookingId: number; prevRoomId?: number; prevCheckIn: string; prevCheckOut: string }
      if (!data.prevRoomId) return
      await moveMutation.mutateAsync({
        bookingId: data.bookingId,
        data: {
          new_room_id: data.prevRoomId,
          new_check_in: data.prevCheckIn,
          new_check_out: data.prevCheckOut,
        },
      })
      actions.popUndo()
    } else if (lastAction.type === "status") {
      const data = lastAction.data as { bookingId: number; prevStatus: PMSBookingStatus }
      const reverseAction = undoStatusActionMap[data.prevStatus]
      if (!reverseAction) return
      await statusMutation.mutateAsync({ bookingId: data.bookingId, status: reverseAction })
      actions.popUndo()
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

    if (newRoomId) {
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
    try {
      await createMutation.mutateAsync(bookingData)
      actions.closeQuickBooking()
    } catch (err) {
      console.error("Failed to create booking:", err)
    }
  }

  const handleUpdateBooking = async (bookingId: number, bookingData: Partial<PMSBooking>) => {
    const updated = await updateMutation.mutateAsync({ bookingId, data: bookingData })
    actions.selectBooking(updated)
  }

  const handleStatusChange = async (bookingId: number, status: PMSBookingStatusAction) => {
    const prevBooking = bookings.find((b) => b.id === bookingId)
    updateBookingCaches(bookingId, { status: STATUS_ACTION_TO_BOOKING_STATUS[status] })
    try {
      await statusMutation.mutateAsync({ bookingId, status })
      syncSelectedBooking(bookingId)
      if (prevBooking?.status && undoStatusActionMap[prevBooking.status]) {
        actions.pushUndo({
          type: "status",
          data: { bookingId, prevStatus: prevBooking.status },
          bookingId,
        })
      }
    } catch {
      // Error handled by parent
    }
  }

  if (!propertyId) {
    return (
      <div className="rounded-md border bg-muted/30 px-4 py-8 text-center text-sm text-muted-foreground">
        This hotel was not found in the PMS system. Make sure the hotel is synced to PMS.
      </div>
    )
  }

  return (
    <div className="relative flex flex-col space-y-4">
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
    </div>
  )
}
