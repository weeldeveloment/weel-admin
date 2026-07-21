import axios from 'axios'
import { clearAuthTokens, getAccessToken, getRefreshToken, setAuthTokens } from './authTokens'

export const API_URL = import.meta.env.VITE_API_URL || 'https://dev.weel.uz'

if (!API_URL) {
  throw new Error('Missing required VITE_API_URL environment variable.')
}

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

import type { PMSBooking, PMSCalendarSlot, PMSRoom, PMSProperty, PMSRate, PMSRoomType } from "@/types/pms"

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

export function fetchPmsRoomTypes(propertyId: string): Promise<PMSRoomType[]> {
  return adminAuthGet<PMSRoomType[]>(`/admin-auth/hotels/${propertyId}/room-types/`)
}

// ── Rooms ─────────────────────────────────────────────────────────

export function fetchPmsRooms(propertyId: string, roomTypeId?: number): Promise<PMSRoom[]> {
  return adminAuthGet<PMSRoom[]>(`/admin-auth/hotels/${propertyId}/rooms/`, {
    room_type_id: roomTypeId?.toString(),
  })
}

// ── Bookings ──────────────────────────────────────────────────────

export function fetchPmsBookings(
  propertyId: string,
  params?: { status?: string; from_date?: string; to_date?: string },
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
