export type PMSRoomCondition = "clean" | "dirty" | "inspection" | "maintenance"
export type PMSRoomAvailability = "available" | "occupied" | "blocked" | "held"
export type PMSBookingStatus = "new" | "confirmed" | "checked_in" | "checked_out" | "cancelled" | "no_show"
export type PMSBookingStatusAction = "cancel" | "check_in" | "check_out" | "confirm"
export type PMSPaymentStatus = "pending" | "paid" | "partial" | "refunded"

export interface PMSProperty {
  id: number
  guid: string
  organization_id: number
  name: string
  star_rating: number | null
  weel_classification: string | null
  city: string | null
  country: string
  is_active: boolean
  created_at: string
  updated_at: string
}

export interface PMSRoomType {
  id: number
  property_id: number
  name: string
  preset: string | null
  custom_name: string | null
  description: string | null
  base_rate: string | null
  currency: string
  capacity: number
  amenities: string[]
  is_active: boolean
}

export interface PMSRoom {
  id: number
  property_id: number
  room_type_id: number | null
  room_type: string | null
  room_number: string
  display_name: string | null
  floor: number
  area: string | null
  bedroom_count: number
  capacity: number
  amenities: string[]
  condition: PMSRoomCondition
  availability: PMSRoomAvailability
  meal_plan: string
  is_active: boolean
}

export interface PMSBooking {
  id: number
  property_id: number
  room_id: number
  guest_id: number | null
  booking_number: string
  check_in: string
  check_out: string
  status: PMSBookingStatus
  source: string
  meal_plan: string
  adult_count: number
  child_count: number
  rate: string | null
  currency: string
  payment_status: PMSPaymentStatus
  total_cost: string | null
  notes: string | null
  room_number: string | null
  guest_first_name: string | null
  guest_last_name: string | null
  voucher_number: string | null
  created_at: string
  updated_at: string
}

export interface PMSCalendarSlot {
  id: number
  room_id: number
  room_number: string | null
  room_type_id: number | null
  date: string
  status: string
  hold_expires_at: string | null
}

export interface PMSRate {
  id: number
  property_id: number
  room_type_id: number
  date_from: string
  date_to: string
  rate: string
  currency: string
  min_stay: number
  is_weekend_rate: boolean
}

export interface PMSGuest {
  id: number
  first_name: string
  last_name: string | null
  email: string | null
  phone: string | null
  is_vip: boolean
  is_blacklisted: boolean
  notes: string | null
}

export type CalendarView = "day" | "week" | "month"

export const CALENDAR_VIEW_DAYS: Record<CalendarView, number> = {
  day: 1,
  week: 7,
  month: 31,
}

export interface CalendarUIState {
  selectedPropertyId: string | null
  view: CalendarView
  currentDate: Date
  dateFrom: string
  dateTo: string
  selectedBooking: PMSBooking | null
  filterStatus: string
  filterRoomType: string
  filterFloor: string
  searchQuery: string
  undoStack: UndoAction[]
  quickBookingOpen: boolean
  quickBookingInitial: {
    roomId?: number
    checkIn?: string
    checkOut?: string
  } | null
}

export interface UndoAction {
  type: "move" | "resize" | "status" | "create"
  data: unknown
  bookingId: number
}

export type CalendarAction =
  | { type: "SET_PROPERTY"; payload: string }
  | { type: "SET_VIEW"; payload: CalendarView }
  | { type: "SET_DATE"; payload: Date }
  | { type: "NAVIGATE"; payload: "prev" | "next" | "today" }
  | { type: "SELECT_BOOKING"; payload: PMSBooking | null }
  | { type: "SET_FILTER_STATUS"; payload: string }
  | { type: "SET_FILTER_ROOM_TYPE"; payload: string }
  | { type: "SET_FILTER_FLOOR"; payload: string }
  | { type: "SET_SEARCH_QUERY"; payload: string }
  | { type: "PUSH_UNDO"; payload: UndoAction }
  | { type: "POP_UNDO" }
  | { type: "OPEN_QUICK_BOOKING"; payload: CalendarUIState["quickBookingInitial"] }
  | { type: "CLOSE_QUICK_BOOKING" }

export const STATUS_COLORS: Record<PMSBookingStatus, string> = {
  new: "#22c55e",
  confirmed: "#3b82f6",
  checked_in: "#0ea5e9",
  checked_out: "#6b7280",
  cancelled: "#ef4444",
  no_show: "#f59e0b",
}

export const STATUS_LABELS: Record<PMSBookingStatus, string> = {
  new: "New",
  confirmed: "Confirmed",
  checked_in: "Checked In",
  checked_out: "Checked Out",
  cancelled: "Cancelled",
  no_show: "No Show",
}

export const STATUS_ACTION_TO_BOOKING_STATUS: Record<PMSBookingStatusAction, PMSBookingStatus> = {
  cancel: "cancelled",
  check_in: "checked_in",
  check_out: "checked_out",
  confirm: "confirmed",
}
