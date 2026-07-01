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
import type { PMSBooking } from "@/types/pms"

function mergeBooking(
  old: PMSBooking[] | undefined,
  bookingId: number,
  updates: Partial<PMSBooking>,
): PMSBooking[] {
  if (!old) return []
  return old.map((b) => (b.id === bookingId ? { ...b, ...updates } : b))
}

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
      await queryClient.cancelQueries({ queryKey: calendarKeys.bookings(propertyId ?? "") })
      const previous = queryClient.getQueryData<PMSBooking[]>(calendarKeys.bookings(propertyId ?? ""))
      queryClient.setQueryData<PMSBooking[]>(calendarKeys.bookings(propertyId ?? ""), (old) =>
        mergeBooking(old, bookingId, {
          room_id: data.new_room_id,
          check_in: data.new_check_in,
          check_out: data.new_check_out,
        }),
      )
      return { previous }
    },
    onError: (_err, _vars, context) => {
      if (context?.previous) {
        queryClient.setQueryData(calendarKeys.bookings(propertyId ?? ""), context.previous)
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: calendarKeys.bookings(propertyId ?? "") })
    },
  })
}

export function useUpdateBookingMutation(propertyId: string | null) {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: ({ bookingId, data }: { bookingId: number; data: Partial<PMSBooking> }) =>
      updatePmsBooking(propertyId!, bookingId, data),
    onMutate: async ({ bookingId, data }) => {
      await queryClient.cancelQueries({ queryKey: calendarKeys.bookings(propertyId ?? "") })
      const previous = queryClient.getQueryData<PMSBooking[]>(calendarKeys.bookings(propertyId ?? ""))
      queryClient.setQueryData<PMSBooking[]>(calendarKeys.bookings(propertyId ?? ""), (old) =>
        mergeBooking(old, bookingId, data),
      )
      return { previous }
    },
    onError: (_err, _vars, context) => {
      if (context?.previous) {
        queryClient.setQueryData(calendarKeys.bookings(propertyId ?? ""), context.previous)
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: calendarKeys.bookings(propertyId ?? "") })
    },
  })
}

export function useChangeBookingStatusMutation(propertyId: string | null) {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: ({ bookingId, status }: { bookingId: number; status: string }) => {
      const fn = {
        cancel: cancelPmsBooking,
        check_in: checkInPmsBooking,
        check_out: checkOutPmsBooking,
        confirm: acceptPmsBooking,
      }[status]
      if (!fn) throw new Error(`Unknown status: ${status}`)
      return fn(propertyId!, bookingId)
    },
    onMutate: async ({ bookingId, status }) => {
      await queryClient.cancelQueries({ queryKey: calendarKeys.bookings(propertyId ?? "") })
      const previous = queryClient.getQueryData<PMSBooking[]>(calendarKeys.bookings(propertyId ?? ""))
      const statusMap: Record<string, string> = {
        cancel: "cancelled",
        check_in: "checked_in",
        check_out: "checked_out",
        confirm: "confirmed",
      }
      queryClient.setQueryData<PMSBooking[]>(calendarKeys.bookings(propertyId ?? ""), (old) =>
        mergeBooking(old, bookingId, { status: statusMap[status] ?? status }),
      )
      return { previous }
    },
    onError: (_err, _vars, context) => {
      if (context?.previous) {
        queryClient.setQueryData(calendarKeys.bookings(propertyId ?? ""), context.previous)
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: calendarKeys.bookings(propertyId ?? "") })
    },
  })
}

export function useCreateBookingMutation(propertyId: string | null) {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (data: Parameters<typeof createPmsBooking>[1]) =>
      createPmsBooking(propertyId!, data),
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: calendarKeys.bookings(propertyId ?? "") })
    },
  })
}
