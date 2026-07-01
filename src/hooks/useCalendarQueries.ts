import { useQuery } from "@tanstack/react-query"
import {
  fetchPmsProperties,
  fetchPmsBookings,
  fetchPmsRooms,
  fetchPmsCalendarSlots,
  fetchPmsRoomTypes,
} from "@/lib/api"

export const calendarKeys = {
  all: ["calendar"] as const,
  properties: () => [...calendarKeys.all, "properties"] as const,
  roomTypes: (propertyId: string) => [...calendarKeys.all, "roomTypes", propertyId] as const,
  bookings: (propertyId: string) => [...calendarKeys.all, "bookings", propertyId] as const,
  rooms: (propertyId: string) => [...calendarKeys.all, "rooms", propertyId] as const,
  calendarSlots: (propertyId: string, dateFrom: string, dateTo: string) =>
    [...calendarKeys.all, "slots", propertyId, dateFrom, dateTo] as const,
}

export function usePropertiesQuery() {
  return useQuery({
    queryKey: calendarKeys.properties(),
    queryFn: fetchPmsProperties,
    staleTime: 30 * 60 * 1000,
  })
}

export function useBookingsQuery(propertyId: string | null, dateFrom?: string, dateTo?: string) {
  return useQuery({
    queryKey: calendarKeys.bookings(propertyId ?? ""),
    queryFn: () => fetchPmsBookings(propertyId!, { from_date: dateFrom, to_date: dateTo }),
    enabled: !!propertyId,
  })
}

export function useRoomsQuery(propertyId: string | null) {
  return useQuery({
    queryKey: calendarKeys.rooms(propertyId ?? ""),
    queryFn: () => fetchPmsRooms(propertyId!),
    enabled: !!propertyId,
  })
}

export function useRoomTypesQuery(propertyId: string | null) {
  return useQuery({
    queryKey: calendarKeys.roomTypes(propertyId ?? ""),
    queryFn: () => fetchPmsRoomTypes(propertyId!),
    enabled: !!propertyId,
  })
}

export function useCalendarSlotsQuery(propertyId: string | null, dateFrom: string, dateTo: string) {
  return useQuery({
    queryKey: calendarKeys.calendarSlots(propertyId ?? "", dateFrom, dateTo),
    queryFn: () => fetchPmsCalendarSlots(propertyId!, dateFrom, dateTo),
    enabled: !!propertyId,
  })
}
