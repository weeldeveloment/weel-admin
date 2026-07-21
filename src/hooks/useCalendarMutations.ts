import { useMutation, useQueryClient } from "@tanstack/react-query"
import {
  movePmsBooking,
  updatePmsBooking,
  cancelPmsBooking,
  checkInPmsBooking,
  checkOutPmsBooking,
  acceptPmsBooking,
  createPmsBooking,
} from "@/lib/api"
import { calendarKeys } from "./useCalendarQueries"
import { STATUS_ACTION_TO_BOOKING_STATUS, type PMSBooking, type PMSBookingStatusAction } from "@/types/pms"

function mergeBooking(
  old: PMSBooking[] | undefined,
  bookingId: number,
  updates: Partial<PMSBooking>,
): PMSBooking[] {
  if (!old) return []
  return old.map((b) => (b.id === bookingId ? { ...b, ...updates } : b))
}

const bookingQueryFilter = (propertyId: string | null) => ({
  queryKey: calendarKeys.bookingsRoot(propertyId ?? ""),
})

export function useMoveBookingMutation(propertyId: string | null) {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: ({
      bookingId,
      data,
    }: {
      bookingId: number
      data: { new_room_id: number; new_check_in?: string; new_check_out?: string }
    }) => movePmsBooking(propertyId!, bookingId, data),
    onMutate: async ({ bookingId, data }) => {
      await queryClient.cancelQueries(bookingQueryFilter(propertyId))
      const previous = queryClient.getQueriesData<PMSBooking[]>(bookingQueryFilter(propertyId))
      queryClient.setQueriesData<PMSBooking[]>(bookingQueryFilter(propertyId), (old) =>
        mergeBooking(old, bookingId, {
          room_id: data.new_room_id,
          check_in: data.new_check_in,
          check_out: data.new_check_out,
        }),
      )
      return { previous }
    },
    onError: (_err, _vars, context) => {
      context?.previous.forEach(([queryKey, data]) => queryClient.setQueryData(queryKey, data))
    },
    onSettled: () => {
      queryClient.invalidateQueries(bookingQueryFilter(propertyId))
    },
  })
}

export function useUpdateBookingMutation(propertyId: string | null) {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: ({ bookingId, data }: { bookingId: number; data: Partial<PMSBooking> }) =>
      updatePmsBooking(propertyId!, bookingId, data),
    onMutate: async ({ bookingId, data }) => {
      await queryClient.cancelQueries(bookingQueryFilter(propertyId))
      const previous = queryClient.getQueriesData<PMSBooking[]>(bookingQueryFilter(propertyId))
      queryClient.setQueriesData<PMSBooking[]>(bookingQueryFilter(propertyId), (old) =>
        mergeBooking(old, bookingId, data),
      )
      return { previous }
    },
    onError: (_err, _vars, context) => {
      context?.previous.forEach(([queryKey, data]) => queryClient.setQueryData(queryKey, data))
    },
    onSettled: () => {
      queryClient.invalidateQueries(bookingQueryFilter(propertyId))
    },
  })
}

export function useChangeBookingStatusMutation(propertyId: string | null) {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: ({ bookingId, status }: { bookingId: number; status: PMSBookingStatusAction }) => {
      const fn = {
        cancel: cancelPmsBooking,
        check_in: checkInPmsBooking,
        check_out: checkOutPmsBooking,
        confirm: acceptPmsBooking,
      }[status]
      return fn(propertyId!, bookingId)
    },
    onMutate: async ({ bookingId, status }) => {
      await queryClient.cancelQueries(bookingQueryFilter(propertyId))
      const previous = queryClient.getQueriesData<PMSBooking[]>(bookingQueryFilter(propertyId))
      queryClient.setQueriesData<PMSBooking[]>(bookingQueryFilter(propertyId), (old) =>
        mergeBooking(old, bookingId, { status: STATUS_ACTION_TO_BOOKING_STATUS[status] }),
      )
      return { previous }
    },
    onError: (_err, _vars, context) => {
      context?.previous.forEach(([queryKey, data]) => queryClient.setQueryData(queryKey, data))
    },
    onSettled: () => {
      queryClient.invalidateQueries(bookingQueryFilter(propertyId))
    },
  })
}

export function useCreateBookingMutation(propertyId: string | null) {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (data: Parameters<typeof createPmsBooking>[1]) =>
      createPmsBooking(propertyId!, data),
    onSettled: () => {
      queryClient.invalidateQueries(bookingQueryFilter(propertyId))
    },
  })
}
