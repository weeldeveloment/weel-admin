import axios from 'axios'
import { clearAuthTokens, getAccessToken, getRefreshToken, setAuthTokens } from './authTokens'
import { resolveApiBaseUrl } from './api-base-url'

// The `|| 'https://dev.weel.uz'` fallback made the guard below dead code: the
// value was never empty, so a production build with no VITE_API_URL silently
// pointed at the dev backend instead of failing.
export const API_URL = resolveApiBaseUrl(import.meta.env.VITE_API_URL, { dev: 'https://dev.weel.uz' })

const API_BASE = `${API_URL}/api`
let refreshAccessTokenPromise: Promise<string> | null = null

export const api = axios.create({
  baseURL: API_BASE,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Request interceptor to add auth token
api.interceptors.request.use((config) => {
  const token = getAccessToken()
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  // Remove default JSON Content-Type for FormData so the browser sets
  // the correct multipart/form-data boundary automatically.
  if (config.data instanceof FormData) {
    delete config.headers['Content-Type']
  }
  return config
})

// Response interceptor to handle token refresh
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config
    if (!originalRequest) return Promise.reject(error)

    const isAuthEndpoint =
      originalRequest.url?.includes('/admin-auth/login/') ||
      originalRequest.url?.includes('/admin-auth/token/refresh/')

    if (error.response?.status === 401 && !originalRequest._retry && !isAuthEndpoint) {
      originalRequest._retry = true

      try {
        const refreshToken = getRefreshToken()
        if (!refreshToken) {
          throw new Error('Missing refresh token.')
        }

        refreshAccessTokenPromise ??= axios
          .post<{ access: string }>(`${API_BASE}/admin-auth/token/refresh/`, {
            refresh: refreshToken,
          })
          .then((response) => {
            const { access } = response.data
            if (!access) throw new Error('Refresh response did not include access token.')
            setAuthTokens(access)
            return access
          })
          .finally(() => {
            refreshAccessTokenPromise = null
          })

        const access = await refreshAccessTokenPromise
        
        originalRequest.headers.Authorization = `Bearer ${access}`
        return api(originalRequest)
      } catch (refreshError) {
        clearAuthTokens()
        window.location.href = '/login'
        return Promise.reject(refreshError)
      }
    }

    return Promise.reject(error)
  }
)

// ── PMS Calendar API ─────────────────────────────────────────────

import type { PMSBooking, PMSCalendarSlot, PMSRoom, PMSRoomBed, PMSProperty, PMSRate, PMSRoomType, PMSRoomCondition, PMSRoomAvailability } from "@/types/pms"
import type { AdminB2BCompany, AdminB2BUser, B2BSupportMessage, B2BSupportThread } from "@/types"

export type PMSRoomUpdate = {
  condition?: PMSRoomCondition
  availability?: PMSRoomAvailability
  room_number?: string
  display_name?: string | null
  floor?: number
  area?: string | null
  bedroom_count?: number
  beds?: PMSRoomBed[]
  capacity?: number
  meal_plan?: string
  base_price?: string | null
  currency?: string
  is_active?: boolean
  photos?: string[]
  cover_photo_index?: number
}

export type PMSRoomCreate = {
  room_type_id: number
  room_number: string
  display_name: string | null
  floor: number
  area: string | null
  bedroom_count: number
  beds: PMSRoomBed[]
  capacity: number
  meal_plan: string
  base_price: string | null
  currency: string
  condition: PMSRoomCondition
  availability: Exclude<PMSRoomAvailability, "held">
  is_active: boolean
}

async function adminAuthGet<T>(url: string, params?: Record<string, string | undefined>): Promise<T> {
  const cleanParams: Record<string, string> = {}
  if (params) {
    for (const [k, v] of Object.entries(params)) {
      if (v !== undefined && v !== null) cleanParams[k] = v
    }
  }
  const response = await api.get<T>(url, { params: cleanParams })
  return response.data
}

async function adminAuthPost<T>(url: string, data?: unknown): Promise<T> {
  const response = await api.post<T>(url, data)
  return response.data
}

async function adminAuthPatch<T>(url: string, data?: unknown): Promise<T> {
  const response = await api.patch<T>(url, data)
  return response.data
}

// ── Properties ───────────────────────────────────────────────────

export function fetchPmsProperties(): Promise<PMSProperty[]> {
  return adminAuthGet<PMSProperty[]>("/admin-auth/hotels/")
}

// ── Room Types ────────────────────────────────────────────────────

export type PMSRoomTypeCreate = {
  preset?: string | null
  custom_name?: string | null
  name: string
  description?: string | null
  base_rate?: string | number | null
  capacity?: number
  amenities?: string[]
  photos?: string[]
}

export function fetchPmsRoomTypes(propertyId: string): Promise<PMSRoomType[]> {
  return adminAuthGet<PMSRoomType[]>(`/admin-auth/hotels/${propertyId}/room-types/`)
}

export function createPmsRoomType(propertyId: string, data: PMSRoomTypeCreate): Promise<PMSRoomType> {
  return adminAuthPost<PMSRoomType>(`/admin-auth/hotels/${propertyId}/room-types/`, data)
}

// ── Rooms ─────────────────────────────────────────────────────────

export function fetchPmsRooms(propertyId: string, roomTypeId?: number): Promise<PMSRoom[]> {
  return adminAuthGet<PMSRoom[]>(`/admin-auth/hotels/${propertyId}/rooms/`, {
    room_type_id: roomTypeId?.toString(),
  })
}

export function createPmsRoom(propertyId: string, data: PMSRoomCreate): Promise<PMSRoom> {
  return adminAuthPost<PMSRoom>(`/admin-auth/hotels/${propertyId}/rooms/`, data)
}

export function fetchPmsRoom(propertyId: string, roomId: number): Promise<PMSRoom> {
  return adminAuthGet<PMSRoom>(`/admin-auth/hotels/${propertyId}/rooms/${roomId}/`)
}

export function updatePmsRoom(propertyId: string, roomId: number, data: PMSRoomUpdate): Promise<PMSRoom> {
  return adminAuthPatch<PMSRoom>(`/admin-auth/hotels/${propertyId}/rooms/${roomId}/`, data)
}

export async function uploadRoomImage(propertyId: string, roomId: number, file: File): Promise<{ image_url: string }> {
  const formData = new FormData()
  formData.append("image", file)
  const response = await api.post<{ image_url: string }>(
    `/admin-auth/hotels/${propertyId}/rooms/${roomId}/images/`,
    formData,
  )
  return response.data
}

// ── Bookings ──────────────────────────────────────────────────────

export function fetchPmsBookings(
  propertyId: string,
  params?: { status?: string; from_date?: string; to_date?: string; room_id?: number },
): Promise<PMSBooking[]> {
  return adminAuthGet<PMSBooking[]>(
    `/admin-auth/hotels/${propertyId}/bookings/`,
    params as Record<string, string | undefined>,
  )
}

export function fetchPmsBooking(propertyId: string, bookingId: number): Promise<PMSBooking> {
  return adminAuthGet<PMSBooking>(`/admin-auth/hotels/${propertyId}/bookings/${bookingId}/`)
}

export function createPmsBooking(propertyId: string, data: Partial<PMSBooking> & { guest?: Record<string, unknown> }): Promise<PMSBooking> {
  return adminAuthPost<PMSBooking>(`/admin-auth/hotels/${propertyId}/bookings/create/`, data)
}

export function updatePmsBooking(propertyId: string, bookingId: number, data: Partial<PMSBooking>): Promise<PMSBooking> {
  return adminAuthPatch<PMSBooking>(`/admin-auth/hotels/${propertyId}/bookings/${bookingId}/`, data)
}

export function movePmsBooking(propertyId: string, bookingId: number, data: { new_room_id: number; new_check_in?: string; new_check_out?: string }): Promise<PMSBooking> {
  return adminAuthPost<PMSBooking>(`/admin-auth/hotels/${propertyId}/bookings/${bookingId}/move/`, data)
}

export function cancelPmsBooking(propertyId: string, bookingId: number): Promise<PMSBooking> {
  return adminAuthPost<PMSBooking>(`/admin-auth/hotels/${propertyId}/bookings/${bookingId}/cancel/`)
}

export function checkInPmsBooking(propertyId: string, bookingId: number): Promise<PMSBooking> {
  return adminAuthPost<PMSBooking>(`/admin-auth/hotels/${propertyId}/bookings/${bookingId}/check-in/`)
}

export function checkOutPmsBooking(propertyId: string, bookingId: number): Promise<PMSBooking> {
  return adminAuthPost<PMSBooking>(`/admin-auth/hotels/${propertyId}/bookings/${bookingId}/check-out/`)
}

export function acceptPmsBooking(propertyId: string, bookingId: number): Promise<PMSBooking> {
  return adminAuthPost<PMSBooking>(`/admin-auth/hotels/${propertyId}/bookings/${bookingId}/accept/`)
}

export function updatePmsBookingVoucher(propertyId: string, bookingId: number, voucherNumber?: string): Promise<PMSBooking> {
  return adminAuthPost<PMSBooking>(`/admin-auth/hotels/${propertyId}/bookings/${bookingId}/voucher/`, {
    voucher_number: voucherNumber,
  })
}

// ── Calendar ──────────────────────────────────────────────────────

export function fetchPmsCalendarSlots(propertyId: string, fromDate: string, toDate: string): Promise<PMSCalendarSlot[]> {
  return adminAuthGet<PMSCalendarSlot[]>(`/admin-auth/hotels/${propertyId}/calendar/`, {
    from_date: fromDate,
    to_date: toDate,
  })
}

// ── Rates ─────────────────────────────────────────────────────────

export function fetchPmsRates(propertyId: string, roomTypeId?: number): Promise<PMSRate[]> {
  return adminAuthGet<PMSRate[]>(`/admin-auth/hotels/${propertyId}/rates/`, {
    room_type_id: roomTypeId?.toString(),
  })
}

// ── B2B ───────────────────────────────────────────────────────────

export function fetchB2BCompanies(): Promise<AdminB2BCompany[]> {
  return adminAuthGet<AdminB2BCompany[]>('/admin-auth/b2b/companies/')
}

export function createB2BCompany(data: Partial<AdminB2BCompany>): Promise<AdminB2BCompany> {
  return adminAuthPost<AdminB2BCompany>('/admin-auth/b2b/companies/', data)
}

export function fetchB2BUsers(companyId: number): Promise<AdminB2BUser[]> {
  return adminAuthGet<AdminB2BUser[]>(`/admin-auth/b2b/companies/${companyId}/users/`)
}

export function createB2BUser(companyId: number, data: Partial<AdminB2BUser>): Promise<AdminB2BUser> {
  return adminAuthPost<AdminB2BUser>(`/admin-auth/b2b/companies/${companyId}/users/`, data)
}

// ── B2B yordam markazi ────────────────────────────────────────────
//
// The other end of the mobile app's "Yordam markazi". Reading a thread marks
// its employee's lines answered server-side, which is what clears the badge on
// the inbox — so the list is refetched after opening one.

export function fetchB2BSupportThreads(search?: string): Promise<B2BSupportThread[]> {
  return adminAuthGet<B2BSupportThread[]>('/admin-auth/b2b/support/', {
    search: search?.trim() || undefined,
  })
}

export function fetchB2BSupportThread(employeeId: number): Promise<B2BSupportMessage[]> {
  return adminAuthGet<B2BSupportMessage[]>(`/admin-auth/b2b/support/${employeeId}/`)
}

export function replyToB2BSupportThread(
  employeeId: number,
  text: string,
): Promise<B2BSupportMessage> {
  return adminAuthPost<B2BSupportMessage>(`/admin-auth/b2b/support/${employeeId}/`, { text })
}

export async function fetchExchangeRate(): Promise<number> {
  const response = await api.get<{ rate: string }>("/payment/exchange-rate/");
  return Number.parseFloat(response.data.rate);
}

export async function convertPriceOnCurrencyChange(
  currentCurrency: string,
  newCurrency: string,
  currentValue: string,
): Promise<string> {
  if (currentCurrency === newCurrency || !currentValue) return currentValue;
  const rate = await fetchExchangeRate();
  const numericValue = Number.parseFloat(currentValue);
  if (!Number.isFinite(numericValue)) return currentValue;

  if (currentCurrency === "USD" && newCurrency === "UZS") {
    return String(Math.round(numericValue * rate));
  }
  if (currentCurrency === "UZS" && newCurrency === "USD") {
    return String(Math.round(numericValue / rate));
  }
  return currentValue;
}

export default api
