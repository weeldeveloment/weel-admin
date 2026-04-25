import api from './api'
import type { AdminAuth, PartnerProfile } from '@/types/weel-openapi'

type AdminPartnersResponse = AdminAuth.AdminAuthUsersPartnersList.ResponseBody

const isRecord = (value: unknown): value is Record<string, unknown> => {
  return typeof value === 'object' && value !== null
}

const asString = (value: unknown): string | undefined => {
  return typeof value === 'string' ? value : undefined
}

const asNullableString = (value: unknown): string | null | undefined => {
  if (typeof value === 'string') return value
  if (value === null) return null
  return undefined
}

const asNumber = (value: unknown): number | undefined => {
  if (typeof value === 'number' && Number.isFinite(value)) return value
  if (typeof value === 'string') {
    const parsed = Number(value)
    if (Number.isFinite(parsed)) return parsed
  }
  return undefined
}

const asBoolean = (value: unknown): boolean | undefined => {
  return typeof value === 'boolean' ? value : undefined
}

export interface PartnerDetails extends PartnerProfile {
  email?: string | null
  full_name?: string
  is_active?: boolean
  is_verified?: boolean
  properties_count?: number
  raw: Record<string, unknown>
}

const normalizePartner = (value: unknown): PartnerDetails | null => {
  if (!isRecord(value)) return null

  return {
    id: asNumber(value.id),
    guid: asString(value.guid),
    username: asString(value.username),
    first_name: asString(value.first_name),
    last_name: asString(value.last_name),
    phone_number: asString(value.phone_number),
    avatar: asNullableString(value.avatar),
    created_at: asString(value.created_at),
    email: asNullableString(value.email),
    full_name: asString(value.full_name),
    is_active: asBoolean(value.is_active),
    is_verified: asBoolean(value.is_verified),
    properties_count: asNumber(value.properties_count),
    raw: value,
  }
}

const extractPartnersArray = (payload: unknown): unknown[] => {
  if (Array.isArray(payload)) return payload

  if (isRecord(payload) && Array.isArray(payload.results)) {
    return payload.results
  }

  return []
}

export const fetchAllPartners = async (): Promise<PartnerDetails[]> => {
  const response = await api.get<AdminPartnersResponse>('/admin-auth/users/partners/')

  return extractPartnersArray(response.data)
    .map(normalizePartner)
    .filter((partner): partner is PartnerDetails => partner !== null)
}

export const fetchPartnerById = async (partnerId: string): Promise<PartnerDetails | null> => {
  const partners = await fetchAllPartners()
  return partners.find((partner) => String(partner.id) === partnerId)
}
