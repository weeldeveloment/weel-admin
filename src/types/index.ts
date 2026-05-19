export type PropertyRecord = Record<string, unknown>

export interface User {
  id: number
  email: string
  full_name?: string
  role?: 'admin' | 'partner' | 'client'
  is_staff?: boolean
  is_superuser?: boolean
}

export interface AuthResponse {
  access: string
  refresh: string
  user: User
}

export interface Partner {
  id: number
  full_name: string
  email: string
  phone_number?: string
  phone?: string
  avatar?: string
  is_active: boolean
  created_at: string
  unread_count?: number
}

export interface Message {
  id: number
  conversation_id?: number
  sender_id: number
  receiver_id: number
  sender_type?: 'admin' | 'partner' | 'client'
  receiver_type?: 'admin' | 'partner' | 'client'
  content: string
  created_at: string
  updated_at?: string
  is_read: boolean
  sender?: User
  receiver?: User
}

export interface Conversation {
  conversation_id: number
  counterpart: Partner
  last_message?: Message
  unread_count: number
}

export interface WebSocketMessage {
  type: 'message' | 'read' | 'typing' | 'online' | 'offline' | 'ping' | 'error'
  data: unknown
  error?: string
}

export interface PaginatedResponse<T> {
  count?: number
  next?: string | null
  previous?: string | null
  results?: T[]
}

export interface BookingClient {
  id: number
  email: string
  first_name: string
  last_name: string
  phone_number: string
}

export interface BookingProperty {
  guid: string
  title: string
  property_type: string
}

export interface BookingPrice {
  subtotal: number
  hold_amount: number
  charge_amount: number
  service_fee: number
}

export interface Booking {
  guid: string
  booking_number: string
  currency?: string
  check_in: string
  check_out: string
  adults: number
  children: number
  babies: number
  status: 'pending' | 'confirmed' | 'checked_in' | 'cancelled' | 'completed' | 'no_show'
  cancellation_reason?: string
  confirmed_at?: string
  checked_in_at?: string
  no_show_at?: string
  cancelled_at?: string
  completed_at?: string
  created_at: string
  conflict_flag?: boolean
  is_overdue?: boolean
  client: BookingClient
  property: BookingProperty
  booking_price?: BookingPrice
}

export interface PaginatedBookings {
  count: number
  next: string | null
  previous: string | null
  results: Booking[]
  queue_counts?: Record<string, number>
}

export interface Region {
  guid: string
  title: string
}

export interface AdminClient {
  id: string | number
  first_name?: string
  last_name?: string
  full_name?: string
  phone_number: string
  created_at?: string
}

export interface AdminPartner {
  id: string | number
  first_name?: string
  last_name?: string
  full_name?: string
  username: string
  phone_number?: string
  created_at?: string
  properties_count?: number
  is_verified?: boolean
}

export interface StoryMedia {
  guid: string
  media_type: string
  media_url: string | null
}

export interface AdminStory {
  guid: string
  property_id: string | null
  property_title: string | null
  property_kind: string | null
  property_img: string | null
  partner_user_id: number | null
  is_verified: boolean
  verified_by_user_id: number | null
  verified_at: string | null
  created_at: string
  updated_at: string
  expires_at: string | null
  uploaded_at: string | null
  views: number
  media: StoryMedia[]
}

export interface Actor {
  id: number
  role?: 'admin' | 'partner' | 'client'
  full_name: string
  email?: string
  username?: string
  phone_number?: string
}

export interface ChatMessage {
  id: number
  conversation?: number
  conversation_id?: number
  sender?: Actor
  receiver?: Actor
  sender_type?: 'admin' | 'partner' | 'client'
  receiver_type?: 'admin' | 'partner' | 'client'
  sender_id?: number
  receiver_id?: number
  content: string
  is_read: boolean
  created_at: string
  updated_at?: string
}

export interface ChatConversation {
  conversation_id: number
  counterpart: Actor
  last_message?: ChatMessage
  unread_count: number
}

export interface ChatConversationApi {
  conversation_id?: number
  id?: number
  counterpart?: Actor
  partner?: Actor
  last_message?: ChatMessage
  unread_count?: number
}

export interface PropertyItem {
  id?: number
  guid?: string
  title?: string
  property_type?: string
  img?: string[]
  city?: string | null
  country?: string | null
  is_verified?: boolean
  created_at?: string
  price?: string | null
  currency?: string | null
  price_per_person?: string | null
  price_on_working_days?: string | null
  price_on_weekends?: string | null
  region_id?: number | null
  district_id?: number | null
  guests?: number | null
  rooms?: number | null
  beds?: number | null
  bathrooms?: number | null
  average_rating?: number | null
  is_archived?: boolean
  is_recommended?: boolean
  latitude?: string | null
  longitude?: string | null
}

export interface PropertyListResult {
  items: PropertyItem[]
  count: number
  next: string | null
  previous: string | null
}

export type PropertyTab = 'cottages' | 'apartments'

export interface PropertyLocationRegion {
  id?: number | null
  guid?: string | null
  name?: string | null
}

export interface PropertyLocationDistrict {
  id?: number | null
  guid?: string | null
  name?: string | null
}

export interface PropertyLocationPrefecture {
  id?: string | null
  name?: string | null
}

export interface PropertyLocation {
  latitude?: string | null
  longitude?: string | null
  country?: string | null
  city?: string | null
  region?: PropertyLocationRegion
  district?: PropertyLocationDistrict
  prefecture?: PropertyLocationPrefecture
}

export interface PropertySummary {
  guid?: string
  title?: string
  img?: string[]
  city?: string | null
  country?: string | null
  property_location?: PropertyLocation | null
  region_id?: number | null
  district_id?: number | null
  prefecture_id?: string | null
  region?: Record<string, unknown>
  district?: Record<string, unknown>
}

export interface BasePropertyDetails {
  guid?: string
  title?: string
  img?: string[]
  price?: string
  price_per_person?: string
  price_on_working_days?: string
  price_on_weekends?: string
  currency?: 'USD' | 'UZS'
  minimum_weekend_day_stay?: boolean
  weekend_only_sunday_inclusive?: boolean
  latitude?: string | null
  longitude?: string | null
  country?: string | null
  city?: string | null
  is_verified?: boolean
  is_archived?: boolean
  is_recommended?: boolean
  verification_status?: string
  verified_by_user_id?: number | null
  region_id?: string | number
  district_id?: string | number
  prefecture_id?: string
  property_location?: PropertyLocation | null
}

export interface ApartmentPropertyDetails extends BasePropertyDetails {
  apartment_number?: string
  home_number?: string
  entrance_number?: string
  floor_number?: string
  pass_code?: string
}

export interface CottagePropertyDetails extends BasePropertyDetails {
  guests?: number
  rooms?: number
  beds?: number
  bathrooms?: number
}

export interface LocationOption {
  id: string
  label: string
}

export type PropertyDetails = ApartmentPropertyDetails | CottagePropertyDetails

export const parseString = (value: unknown, fallback = ''): string => {
  return typeof value === 'string' ? value : fallback
}

export const parseNumber = (value: unknown, fallback = 0): number => {
  return typeof value === 'number' && Number.isFinite(value) ? value : fallback
}

export const parseBoolean = (value: unknown, fallback = false): boolean => {
  return typeof value === 'boolean' ? value : fallback
}

export const parseNullableString = (value: unknown): string | null => {
  return typeof value === 'string' ? value : null
}

export const parseNullableNumber = (value: unknown): number | null => {
  return typeof value === 'number' && Number.isFinite(value) ? value : null
}

export const parseEnum = <T extends string>(
  value: unknown,
  allowedValues: readonly T[],
  fallback: T
): T => {
  return typeof value === 'string' && allowedValues.includes(value as T) ? (value as T) : fallback
}

export const mapLocationOptions = (payload: unknown): LocationOption[] => {
  const list = Array.isArray(payload) ? payload : []
  return list
    .map((item) => {
      if (!item || typeof item !== 'object') return null
      const record = item as Record<string, unknown>
      const rawId = record.id
      const rawLabel = record.title
      if (!rawId || !rawLabel) return null
      return {
        id: String(rawId),
        label: String(rawLabel),
      }
    })
    .filter((item): item is LocationOption => item !== null)
}

export const extractArray = <T = unknown>(payload: unknown): T[] => {
  if (Array.isArray(payload)) return payload as T[]
  if (typeof payload === 'object' && payload !== null && Array.isArray((payload as { results?: T[] }).results)) {
    return (payload as { results?: T[] }).results ?? []
  }
  return []
}

export const clampDecimalPlaces = (value: unknown, maxDecimals = 8): string => {
  if (typeof value !== 'string') return parseString(value)
  const trimmed = value.trim()
  if (!trimmed) return trimmed
  const isNegative = trimmed.startsWith('-')
  const raw = isNegative ? trimmed.slice(1) : trimmed
  const [intPart, fractionPart = ''] = raw.split('.')
  if (!/^\d+$/.test(intPart)) return trimmed
  if (fractionPart && !/^\d+$/.test(fractionPart)) return trimmed
  const clampedFraction = fractionPart.slice(0, maxDecimals)
  return `${isNegative ? '-' : ''}${intPart}${clampedFraction ? `.${clampedFraction}` : ''}`
}

