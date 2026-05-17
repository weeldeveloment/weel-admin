import api from './api'
import type { AdminAuth, ListAllPartnerPropertiesData, PartnerProfile } from '@/types/weel-openapi'

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
  const pageSize = 100
  let page = 1
  const allPartners: PartnerDetails[] = []

  while (true) {
    const response = await api.get<AdminPartnersResponse>('/admin-auth/users/partners/', {
      params: { page, page_size: pageSize },
    })

    const partners = extractPartnersArray(response.data)
      .map(normalizePartner)
      .filter((partner): partner is PartnerDetails => partner !== null)

    allPartners.push(...partners)

    if (!isRecord(response.data) || !response.data.next) break
    page += 1
  }

  return allPartners
}

export const fetchPartnerById = async (partnerId: string): Promise<PartnerDetails | null> => {
  const partners = await fetchAllPartners()
  return partners.find((partner) => String(partner.id) === partnerId) ?? null
}

export interface PartnerProperty {
  guid: string
  title: string
  price?: string | null
  currency?: string | null
  property_type?: string | null
  type?: 'apartment' | 'cottage'
  status?: string
  img: string[]
  raw: Record<string, unknown>
}

interface PartnerPropertiesResponse {
  results: PartnerProperty[]
  count: number
  next?: string | null
  previous?: string | null
}

type PartnerPropertyPayload = ListAllPartnerPropertiesData[number] & {
  price?:
    | string
    | number
    | {
        guid?: string
        month_to?: string | number | null
        month_from?: string | number | null
        price_per_person?: string | number | null
        price_on_weekends?: string | number | null
        price_on_working_days?: string | number | null
      }
    | null
  currency?: string | null
  img?: string[]
  status?: string
}

interface PartnerPropertiesPaginatedResponse {
  results: ListAllPartnerPropertiesData
  count?: number
  next?: string | null
  previous?: string | null
}

type PartnerPropertiesApiResponse = ListAllPartnerPropertiesData | PartnerPropertiesPaginatedResponse

const extractPropertyType = (propertyType: PartnerPropertyPayload['property_type']): string | null => {
  if (!propertyType) return null
  if (typeof propertyType === 'string') return propertyType

  if (!isRecord(propertyType)) return null

  const title = asString(propertyType.title)
  if (title) return title

  const kind = asString(propertyType.kind)
  if (kind) return kind

  return null
}

const extractPrice = (price: PartnerPropertyPayload['price']): string | null => {
  if (price === null || price === undefined) return null
  if (typeof price === 'string') return price
  if (typeof price === 'number') return String(price)

  const structuredPrice = [price.price_on_working_days, price.price_on_weekends, price.price_per_person]
    .find((value): value is string | number => typeof value === 'string' || typeof value === 'number')

  if (structuredPrice !== undefined) return String(structuredPrice)
  return null
}

const normalizeProperty = (value: PartnerPropertyPayload, type?: string): PartnerProperty | null => {
  const guid = value.guid
  if (!guid) return null

  return {
    guid,
    title: value.title || 'Unnamed Property',
    price: extractPrice(value.price),
    currency: value.currency ?? null,
    property_type: extractPropertyType(value.property_type),
    type: (type as 'apartment' | 'cottage') || undefined,
    img: Array.isArray(value.img) ? value.img : [],
    status: value.status,
    raw: value,
  }
}

const isPaginatedPropertiesResponse = (
  payload: PartnerPropertiesApiResponse
): payload is PartnerPropertiesPaginatedResponse => {
  return !Array.isArray(payload)
}

export const fetchPartnerProperties = async (
  partnerId: string,
  options?: {
    page?: number
    limit?: number
    search?: string
    sort?: string
  }
): Promise<PartnerPropertiesResponse> => {
  const params: {
    partner_id: string
    limit: number
    page: number
    search?: string
    sort?: string
  } = {
    partner_id: partnerId,
    limit: options?.limit || 10,
    page: options?.page || 1,
  }

  if (options?.search) params.search = options.search
  if (options?.sort) params.sort = options.sort

  const response = await api.get<PartnerPropertiesApiResponse>('/property/partner/all/', { params })
  const responseData = response.data
  const rawResults = isPaginatedPropertiesResponse(responseData) ? responseData.results : responseData

  const normalizedProperties = rawResults
    .map((prop) => normalizeProperty(prop))
    .filter((prop): prop is PartnerProperty => prop !== null)

  return {
    results: normalizedProperties,
    count: isPaginatedPropertiesResponse(responseData)
      ? responseData.count ?? normalizedProperties.length
      : normalizedProperties.length,
    next: isPaginatedPropertiesResponse(responseData) ? responseData.next ?? null : null,
    previous: isPaginatedPropertiesResponse(responseData) ? responseData.previous ?? null : null,
  }
}
