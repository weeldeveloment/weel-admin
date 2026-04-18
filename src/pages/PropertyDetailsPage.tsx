import { useEffect, useMemo, useState } from 'react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useNavigate, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { AlertCircle, Archive, CheckCircle, AlertTriangle, ChevronsUpDown, Check, Copy } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command'
import { api } from '@/lib/api'
import { cn } from '@/lib/utils'

type PropertyType = 'cottages' | 'apartments'

type PropertyRecord = Record<string, unknown>

type PropertySummary = {
  guid?: string
  title?: string
  img?: string[]
  city?: string | null
  country?: string | null
  property_location?: PropertyRecord | null
}

type LocationOption = {
  id: string
  label: string
}

type ApartmentAdminUpdate = {
  title?: string
  price?: string
  currency?: 'USD' | 'UZS'
  minimum_weekend_day_stay?: boolean
  weekend_only_sunday_inclusive?: boolean
  latitude?: string
  longitude?: string
  country?: string
  city?: string
  apartment_number?: string
  home_number?: string
  entrance_number?: string
  floor_number?: string
  pass_code?: string
  is_verified?: boolean
  is_archived?: boolean
  is_recommended?: boolean
  verification_status?: string
  verified_by_user_id?: number | null
  region_id?: string
  district_id?: string
  prefecture_id?: string
}

type CottageAdminUpdate = {
  title?: string
  price_per_person?: string
  price_on_working_days?: string
  price_on_weekends?: string
  currency?: 'USD' | 'UZS'
  minimum_weekend_day_stay?: boolean
  weekend_only_sunday_inclusive?: boolean
  latitude?: string
  longitude?: string
  country?: string
  city?: string
  guests?: number
  rooms?: number
  beds?: number
  bathrooms?: number
  is_verified?: boolean
  is_archived?: boolean
  is_recommended?: boolean
  verification_status?: string
  verified_by_user_id?: number | null
  region_id?: string
  district_id?: string
  prefecture_id?: string
}

const API_URL = (import.meta.env.VITE_API_URL || 'https://dev.weel.uz').replace(/\/$/, '')
const FALLBACK_IMAGE =
  'data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 800 600%22%3E%3Cdefs%3E%3ClinearGradient id=%22g%22 x1=%220%25%22 y1=%220%25%22 x2=%22100%25%22 y2=%22100%25%22%3E%3Cstop offset=%220%25%22 stop-color=%22%231f2937%22/%3E%3Cstop offset=%22100%25%22 stop-color=%22%23374151%22/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width=%22800%22 height=%22600%22 fill=%22url(%23g)%22/%3E%3Ccircle cx=%22390%22 cy=%22240%22 r=%2280%22 fill=%22%239ca3af%22 fill-opacity=%220.18%22/%3E%3Cpath d=%22M160 470l120-130 90 90 70-80 200 220H160z%22 fill=%22%23e5e7eb%22 fill-opacity=%220.18%22/%3E%3Ctext x=%22400%22 y=%22350%22 text-anchor=%22middle%22 font-family=%22Arial, sans-serif%22 font-size=%2232%22 fill=%22%23e5e7eb%22 fill-opacity=%220.8%22%3ENo image%3C/text%3E%3C/svg%3E'

const isRecord = (value: unknown): value is PropertyRecord => {
  return typeof value === 'object' && value !== null
}

const resolveImageUrl = (value?: string) => {
  if (!value) return ''
  if (value.startsWith('http://') || value.startsWith('https://')) return value
  if (value.startsWith('/')) return `${API_URL}${value}`
  return `${API_URL}/${value}`
}

const extractArray = (payload: unknown): unknown[] => {
  if (Array.isArray(payload)) return payload
  if (
    typeof payload === 'object' &&
    payload !== null &&
    Array.isArray((payload as { results?: unknown[] }).results)
  ) {
    return (payload as { results?: unknown[] }).results ?? []
  }
  return []
}

const mapLocationOptions = (payload: unknown): LocationOption[] => {
  const list = Array.isArray(payload) ? payload : []
  return list
    .map((item) => {
      if (!item || typeof item !== 'object') return null
      const record = item as Record<string, unknown>
      const rawId = record.id ?? record.guid
      const rawLabel = record.title ?? record.name
      if (!rawId || !rawLabel) return null
      return {
        id: String(rawId),
        label: String(rawLabel),
      }
    })
    .filter((item): item is LocationOption => item !== null)
}

type SearchableSelectProps = {
  value: string
  onChange: (value: string) => void
  options: LocationOption[]
  placeholder: string
  searchPlaceholder: string
  emptyText: string
  disabled?: boolean
}

function SearchableSelect({
  value,
  onChange,
  options,
  placeholder,
  searchPlaceholder,
  emptyText,
  disabled,
}: SearchableSelectProps) {
  const [open, setOpen] = useState(false)

  const selected = options.find((option) => option.id === value)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          type="button"
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between font-normal"
          disabled={disabled}
        >
          <span className="truncate">{selected?.label ?? placeholder}</span>
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0">
        <Command>
          <CommandInput placeholder={searchPlaceholder} />
          <CommandList>
            <CommandEmpty>{emptyText}</CommandEmpty>
            <CommandGroup>
              {options.map((option) => (
                <CommandItem
                  key={option.id}
                  value={option.label}
                  onSelect={() => {
                    onChange(option.id)
                    setOpen(false)
                  }}
                >
                  <Check
                    className={cn('mr-2 h-4 w-4', value === option.id ? 'opacity-100' : 'opacity-0')}
                  />
                  {option.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

export default function PropertyDetailsPage() {
  const { t } = useTranslation()
  const queryClient = useQueryClient()
  const navigate = useNavigate()
  const { propertyType, propertyId } = useParams<{ propertyType: string; propertyId: string }>()

  const resolvedType: PropertyType | null =
    propertyType === 'cottages' || propertyType === 'apartments' ? propertyType : null

  const [formData, setFormData] = useState<ApartmentAdminUpdate & CottageAdminUpdate>({})
  const [message, setMessage] = useState<string | null>(null)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [isRawCopied, setIsRawCopied] = useState(false)

  const selectedRegionId = formData.region_id ? String(formData.region_id) : ''
  const selectedDistrictId = formData.district_id ? String(formData.district_id) : ''

  const detailsQuery = useQuery({
    queryKey: ['property-details', resolvedType, propertyId],
    queryFn: async () => {
      if (!resolvedType || !propertyId) return null
      const response = await api.get(`/property/admin/${resolvedType}/${propertyId}/`)
      return isRecord(response.data) ? response.data : null
    },
    enabled: Boolean(resolvedType && propertyId),
  })

  const summaryQuery = useQuery({
    queryKey: ['property-summary', resolvedType],
    queryFn: async () => {
      if (!resolvedType) return []
      const response = await api.get(`/property/admin/${resolvedType}/`)
      return extractArray(response.data) as PropertySummary[]
    },
    enabled: Boolean(resolvedType),
  })

  const regionsQuery = useQuery({
    queryKey: ['property-regions'],
    queryFn: async () => {
      const response = await api.get('/property/regions/')
      return mapLocationOptions(response.data)
    },
  })

  const districtsQuery = useQuery({
    queryKey: ['property-districts', selectedRegionId],
    queryFn: async () => {
      const response = await api.get('/property/districts/', {
        params: { region_id: selectedRegionId },
      })
      return mapLocationOptions(response.data)
    },
    enabled: Boolean(selectedRegionId),
  })

  const prefecturesQuery = useQuery({
    queryKey: ['property-prefectures', selectedDistrictId],
    queryFn: async () => {
      const response = await api.get('/property/prefectures/', {
        params: { district_id: selectedDistrictId },
      })
      return mapLocationOptions(response.data)
    },
    enabled: Boolean(selectedDistrictId),
  })

  useEffect(() => {
    const data = detailsQuery.data
    if (!data) return

    const initialData: ApartmentAdminUpdate & CottageAdminUpdate = {
      title: typeof data.title === 'string' ? data.title : '',
      price: resolvedType === 'apartments' && typeof data.price === 'string' ? data.price : '',
      price_per_person:
        resolvedType === 'cottages' && typeof data.price_per_person === 'string' ? data.price_per_person : '',
      price_on_working_days:
        resolvedType === 'cottages' && typeof data.price_on_working_days === 'string'
          ? data.price_on_working_days
          : '',
      price_on_weekends:
        resolvedType === 'cottages' && typeof data.price_on_weekends === 'string'
          ? data.price_on_weekends
          : '',
      currency: typeof data.currency === 'string' ? (data.currency as 'USD' | 'UZS') : 'USD',
      country: typeof data.country === 'string' ? data.country : '',
      city: typeof data.city === 'string' ? data.city : '',
      latitude: typeof data.latitude === 'string' ? data.latitude : '',
      longitude: typeof data.longitude === 'string' ? data.longitude : '',
      is_verified: Boolean(data.is_verified),
      is_archived: Boolean(data.is_archived),
      is_recommended: Boolean(data.is_recommended),
      verification_status: typeof data.verification_status === 'string' ? data.verification_status : '',
      apartment_number:
        resolvedType === 'apartments' && typeof data.apartment_number === 'string' ? data.apartment_number : '',
      home_number: resolvedType === 'apartments' && typeof data.home_number === 'string' ? data.home_number : '',
      entrance_number:
        resolvedType === 'apartments' && typeof data.entrance_number === 'string' ? data.entrance_number : '',
      floor_number:
        resolvedType === 'apartments' && typeof data.floor_number === 'string' ? data.floor_number : '',
      pass_code: resolvedType === 'apartments' && typeof data.pass_code === 'string' ? data.pass_code : '',
      guests: resolvedType === 'cottages' && typeof data.guests === 'number' ? data.guests : 0,
      rooms: resolvedType === 'cottages' && typeof data.rooms === 'number' ? data.rooms : 0,
      beds: resolvedType === 'cottages' && typeof data.beds === 'number' ? data.beds : 0,
      bathrooms: resolvedType === 'cottages' && typeof data.bathrooms === 'number' ? data.bathrooms : 0,
    }

    setFormData(initialData)
  }, [detailsQuery.data, resolvedType])

  const updateMutation = useMutation({
    mutationFn: async () => {
      if (!resolvedType || !propertyId) throw new Error('Invalid property route params')
      const response = await api.patch(`/property/admin/${resolvedType}/${propertyId}/`, formData)
      return isRecord(response.data) ? response.data : null
    },
    onSuccess: async (updatedData) => {
      setErrorMessage(null)
      setMessage(t('propertyDetails.messages.updateSuccess', { defaultValue: 'Property updated successfully.' }))

      if (updatedData) {
        queryClient.setQueryData(['property-details', resolvedType, propertyId], updatedData)
      }

      await queryClient.invalidateQueries({ queryKey: ['property-details', resolvedType, propertyId] })
      await queryClient.invalidateQueries({ queryKey: ['property-summary', resolvedType] })
      await queryClient.invalidateQueries({ queryKey: ['properties'] })
      await queryClient.invalidateQueries({ queryKey: ['partner-properties'] })
    },
    onError: (error) => {
      setMessage(null)
      setErrorMessage(
        t('propertyDetails.messages.updateFailed', {
          defaultValue: `Failed to update property: ${error instanceof Error ? error.message : 'Unknown error'}`,
        }),
      )
    },
  })

  const deleteMutation = useMutation({
    mutationFn: async () => {
      if (!resolvedType || !propertyId) throw new Error('Invalid property route params')
      await api.delete(`/property/admin/${resolvedType}/${propertyId}/`)
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['properties'] })
      await queryClient.invalidateQueries({ queryKey: ['partner-properties'] })
      navigate('/properties')
    },
    onError: () => {
      setMessage(null)
      setErrorMessage(t('propertyDetails.messages.deleteFailed', { defaultValue: 'Failed to delete property.' }))
    },
  })

  const rawPreview = useMemo(() => {
    if (!detailsQuery.data) return ''
    return JSON.stringify(detailsQuery.data, null, 2)
  }, [detailsQuery.data])

  const handleCopyRaw = async () => {
    if (!rawPreview) return

    try {
      await navigator.clipboard.writeText(rawPreview)
      setIsRawCopied(true)
      setTimeout(() => setIsRawCopied(false), 1500)
    } catch {
      setErrorMessage(
        t('propertyDetails.messages.copyFailed', {
          defaultValue: 'Failed to copy raw JSON.',
        }),
      )
    }
  }

  const summary = useMemo(() => {
    if (!summaryQuery.data || !propertyId) return null
    return summaryQuery.data.find((item) => item.guid === propertyId) ?? null
  }, [propertyId, summaryQuery.data])

  const detailsImage = Array.isArray(detailsQuery.data?.img) ? detailsQuery.data.img?.[0] : null
  const summaryImage = summary?.img?.[0] ?? null
  const heroImage = resolveImageUrl(String(detailsImage || summaryImage || ''))

  const locationLabel = summary?.city || summary?.country || t('propertyDetails.labels.noLocation', { defaultValue: 'No location' })
  const heroTitle =
    typeof detailsQuery.data?.title === 'string'
      ? detailsQuery.data.title
      : t('propertyDetails.title', { defaultValue: 'Property Details' })

  const verificationStatus =
    typeof detailsQuery.data?.verification_status === 'string' ? detailsQuery.data.verification_status : 'pending'
  const isVerified = Boolean(detailsQuery.data?.is_verified)
  const isArchived = Boolean(detailsQuery.data?.is_archived)
  const isRecommended = Boolean(detailsQuery.data?.is_recommended)

  if (!resolvedType || !propertyId) {
    return (
      <div className="h-full overflow-y-auto p-4 md:p-6">
        <Card>
          <CardContent className="pt-6 text-sm text-red-600">
            {t('propertyDetails.messages.invalidRoute', { defaultValue: 'Invalid property route.' })}
          </CardContent>
        </Card>
      </div>
    )
  }

  if (detailsQuery.isLoading) {
    return (
      <div className="h-full overflow-y-auto p-4 md:p-6">
        <Card>
          <CardContent className="pt-6 text-sm text-muted-foreground">
            {t('propertyDetails.messages.loading', { defaultValue: 'Loading property details...' })}
          </CardContent>
        </Card>
      </div>
    )
  }

  if (detailsQuery.error || !detailsQuery.data) {
    return (
      <div className="h-full overflow-y-auto p-4 md:p-6">
        <Card>
          <CardContent className="pt-6 text-sm text-red-600">
            {t('propertyDetails.messages.loadFailed', { defaultValue: 'Failed to load property details.' })}
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="h-full overflow-y-auto p-4 md:p-6">
      <div className="mx-auto max-w-6xl space-y-6">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="overflow-hidden">
            <div className="aspect-[16/10] w-full bg-muted">
              {heroImage ? (
                <img src={heroImage} alt={heroTitle} className="h-full w-full object-cover" />
              ) : (
                <img src={FALLBACK_IMAGE} alt={heroTitle} className="h-full w-full object-cover" />
              )}
            </div>
            <CardContent className="space-y-3 p-6">
              <div className="space-y-1">
                <h1 className="text-2xl font-bold text-foreground md:text-3xl">{heroTitle}</h1>
                <p className="text-sm text-muted-foreground">
                  {resolvedType === 'cottages'
                    ? t('propertyDetails.types.cottage', { defaultValue: 'Cottage' })
                    : t('propertyDetails.types.apartment', { defaultValue: 'Apartment' })}{' '}
                  - {locationLabel}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                <Badge variant={isVerified ? 'default' : 'secondary'} className="flex items-center gap-1">
                  <CheckCircle className="h-3 w-3" />
                  {isVerified
                    ? t('propertyDetails.badges.verified', { defaultValue: 'Verified' })
                    : t('propertyDetails.badges.notVerified', { defaultValue: 'Not Verified' })}
                </Badge>
                <Badge variant={isArchived ? 'destructive' : 'outline'} className="flex items-center gap-1">
                  <Archive className="h-3 w-3" />
                  {isArchived
                    ? t('propertyDetails.badges.archived', { defaultValue: 'Archived' })
                    : t('propertyDetails.badges.active', { defaultValue: 'Active' })}
                </Badge>
                <Badge variant={isRecommended ? 'default' : 'secondary'} className="flex items-center gap-1">
                  {isRecommended
                    ? t('propertyDetails.badges.recommended', { defaultValue: 'Recommended' })
                    : t('propertyDetails.badges.notRecommended', { defaultValue: 'Not Recommended' })}
                </Badge>
                {verificationStatus && (
                  <Badge variant="outline" className="flex items-center gap-1">
                    <AlertTriangle className="h-3 w-3" />
                    {verificationStatus}
                  </Badge>
                )}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{t('propertyDetails.actions.title', { defaultValue: 'Actions' })}</CardTitle>
              <CardDescription>
                {t('propertyDetails.actions.description', { defaultValue: 'Manage this property' })}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button
                variant="destructive"
                onClick={() => {
                  if (
                    !window.confirm(
                      t('propertyDetails.messages.deleteConfirm', {
                        defaultValue: 'Are you sure you want to delete this property?',
                      }),
                    )
                  ) {
                    return
                  }
                  setMessage(null)
                  setErrorMessage(null)
                  deleteMutation.mutate()
                }}
                disabled={deleteMutation.isPending}
                className="w-full"
              >
                {deleteMutation.isPending
                  ? t('propertyDetails.actions.deleting', { defaultValue: 'Deleting...' })
                  : t('propertyDetails.actions.delete', { defaultValue: 'Delete Property' })}
              </Button>
              {message && <p className="text-xs text-emerald-600">{message}</p>}
              {errorMessage && <p className="text-xs text-red-600">{errorMessage}</p>}
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>{t('propertyDetails.edit.title', { defaultValue: 'Edit Property Details' })}</CardTitle>
            <CardDescription>
              {t('propertyDetails.edit.description', {
                defaultValue: 'Update property information below and save changes.',
              })}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <section className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                {t('propertyDetails.sections.basic', { defaultValue: 'Basic Information' })}
              </h3>
              <div className="space-y-2">
                <Label htmlFor="title">{t('propertyDetails.fields.title', { defaultValue: 'Title' })}</Label>
                <Input
                  id="title"
                  value={formData.title || ''}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder={t('propertyDetails.placeholders.title', { defaultValue: 'Property title' })}
                  className="max-w-xl"
                />
              </div>
            </section>

            <Separator />

            <section className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                {t('propertyDetails.sections.pricing', { defaultValue: 'Pricing' })}
              </h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="currency">{t('propertyDetails.fields.currency', { defaultValue: 'Currency' })}</Label>
                  <Select
                    value={formData.currency || 'USD'}
                    onValueChange={(value: string) =>
                      setFormData({ ...formData, currency: value as 'USD' | 'UZS' })
                    }
                  >
                    <SelectTrigger id="currency">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="USD">USD</SelectItem>
                      <SelectItem value="UZS">UZS</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {resolvedType === 'apartments' ? (
                <div className="space-y-2">
                  <Label htmlFor="price">
                    {t('propertyDetails.fields.pricePerNight', { defaultValue: 'Price per Night' })}
                  </Label>
                  <Input
                    id="price"
                    type="number"
                    step="0.01"
                    value={formData.price || ''}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    placeholder={t('propertyDetails.placeholders.price', { defaultValue: 'Enter price' })}
                    className="max-w-xl"
                  />
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="price_per_person">
                      {t('propertyDetails.fields.pricePerPerson', { defaultValue: 'Price per Person' })}
                    </Label>
                    <Input
                      id="price_per_person"
                      type="number"
                      step="0.01"
                      value={formData.price_per_person || ''}
                      onChange={(e) => setFormData({ ...formData, price_per_person: e.target.value })}
                      placeholder={t('propertyDetails.placeholders.pricePerPerson', {
                        defaultValue: 'Price per person',
                      })}
                      className="max-w-xl"
                    />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="price_on_working_days">
                        {t('propertyDetails.fields.priceOnWorkingDays', {
                          defaultValue: 'Price on Working Days',
                        })}
                      </Label>
                      <Input
                        id="price_on_working_days"
                        type="number"
                        step="0.01"
                        value={formData.price_on_working_days || ''}
                        onChange={(e) => setFormData({ ...formData, price_on_working_days: e.target.value })}
                        placeholder={t('propertyDetails.placeholders.priceOnWorkingDays', {
                          defaultValue: 'Working days price',
                        })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="price_on_weekends">
                        {t('propertyDetails.fields.priceOnWeekends', { defaultValue: 'Price on Weekends' })}
                      </Label>
                      <Input
                        id="price_on_weekends"
                        type="number"
                        step="0.01"
                        value={formData.price_on_weekends || ''}
                        onChange={(e) => setFormData({ ...formData, price_on_weekends: e.target.value })}
                        placeholder={t('propertyDetails.placeholders.priceOnWeekends', {
                          defaultValue: 'Weekend price',
                        })}
                      />
                    </div>
                  </div>
                </div>
              )}

              <div className="space-y-3">
                <Label className="text-base">
                  {t('propertyDetails.fields.pricingOptions', { defaultValue: 'Pricing Options' })}
                </Label>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="minimum_weekend_day_stay"
                    checked={formData.minimum_weekend_day_stay || false}
                    onCheckedChange={(checked: boolean | 'indeterminate') =>
                      setFormData({ ...formData, minimum_weekend_day_stay: Boolean(checked) })
                    }
                  />
                  <Label htmlFor="minimum_weekend_day_stay" className="font-normal cursor-pointer">
                    {t('propertyDetails.fields.minimumWeekendStay', {
                      defaultValue: 'Minimum weekend day stay',
                    })}
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="weekend_only_sunday_inclusive"
                    checked={formData.weekend_only_sunday_inclusive || false}
                    onCheckedChange={(checked: boolean | 'indeterminate') =>
                      setFormData({ ...formData, weekend_only_sunday_inclusive: Boolean(checked) })
                    }
                  />
                  <Label htmlFor="weekend_only_sunday_inclusive" className="font-normal cursor-pointer">
                    {t('propertyDetails.fields.weekendSundayInclusive', {
                      defaultValue: 'Weekend only (Sunday inclusive)',
                    })}
                  </Label>
                </div>
              </div>
            </section>

            <Separator />

            <section className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                {t('propertyDetails.sections.location', { defaultValue: 'Location' })}
              </h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="country">{t('propertyDetails.fields.country', { defaultValue: 'Country' })}</Label>
                  <Input
                    id="country"
                    value={formData.country || ''}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    placeholder={t('propertyDetails.placeholders.country', { defaultValue: 'Country' })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="city">{t('propertyDetails.fields.city', { defaultValue: 'City' })}</Label>
                  <Input
                    id="city"
                    value={formData.city || ''}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder={t('propertyDetails.placeholders.city', { defaultValue: 'City' })}
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="latitude">
                    {t('propertyDetails.fields.latitude', { defaultValue: 'Latitude' })}
                  </Label>
                  <Input
                    id="latitude"
                    type="text"
                    value={formData.latitude || ''}
                    onChange={(e) => setFormData({ ...formData, latitude: e.target.value })}
                    placeholder={t('propertyDetails.placeholders.latitude', { defaultValue: 'e.g., 41.2995' })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="longitude">
                    {t('propertyDetails.fields.longitude', { defaultValue: 'Longitude' })}
                  </Label>
                  <Input
                    id="longitude"
                    type="text"
                    value={formData.longitude || ''}
                    onChange={(e) => setFormData({ ...formData, longitude: e.target.value })}
                    placeholder={t('propertyDetails.placeholders.longitude', {
                      defaultValue: 'e.g., 69.2401',
                    })}
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <div className="space-y-2">
                  <Label htmlFor="region_id">
                    {t('propertyDetails.fields.regionId', { defaultValue: 'Region ID' })}
                  </Label>
                  <SearchableSelect
                    value={selectedRegionId}
                    onChange={(value) =>
                      setFormData((prev) => ({
                        ...prev,
                        region_id: value,
                        district_id: '',
                        prefecture_id: '',
                      }))
                    }
                    options={regionsQuery.data ?? []}
                    placeholder={
                      regionsQuery.isLoading
                        ? t('propertyDetails.messages.loading', { defaultValue: 'Loading property details...' })
                        : t('propertyDetails.placeholders.regionId', { defaultValue: 'Select region' })
                    }
                    searchPlaceholder={
                      t('propertyDetails.placeholders.searchRegion', { defaultValue: 'Search region...' })
                    }
                    emptyText={t('propertyDetails.placeholders.emptyRegion', { defaultValue: 'No regions found.' })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="district_id">
                    {t('propertyDetails.fields.districtId', { defaultValue: 'District ID' })}
                  </Label>
                  <SearchableSelect
                    value={selectedDistrictId}
                    onChange={(value) =>
                      setFormData((prev) => ({
                        ...prev,
                        district_id: value,
                        prefecture_id: '',
                      }))
                    }
                    options={districtsQuery.data ?? []}
                    placeholder={
                      !selectedRegionId
                        ? t('propertyDetails.placeholders.regionFirst', { defaultValue: 'Select region first' })
                        : districtsQuery.isLoading
                          ? t('propertyDetails.messages.loading', { defaultValue: 'Loading property details...' })
                          : t('propertyDetails.placeholders.districtId', { defaultValue: 'Select district' })
                    }
                    searchPlaceholder={
                      t('propertyDetails.placeholders.searchDistrict', { defaultValue: 'Search district...' })
                    }
                    emptyText={
                      t('propertyDetails.placeholders.emptyDistrict', { defaultValue: 'No districts found.' })
                    }
                    disabled={!selectedRegionId}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="prefecture_id">
                    {t('propertyDetails.fields.prefectureId', { defaultValue: 'Prefecture ID' })}
                  </Label>
                  <SearchableSelect
                    value={formData.prefecture_id ? String(formData.prefecture_id) : ''}
                    onChange={(value) => setFormData((prev) => ({ ...prev, prefecture_id: value }))}
                    options={prefecturesQuery.data ?? []}
                    placeholder={
                      !selectedDistrictId
                        ? t('propertyDetails.placeholders.districtFirst', { defaultValue: 'Select district first' })
                        : prefecturesQuery.isLoading
                          ? t('propertyDetails.messages.loading', { defaultValue: 'Loading property details...' })
                          : t('propertyDetails.placeholders.prefectureId', {
                              defaultValue: 'Select prefecture',
                            })
                    }
                    searchPlaceholder={
                      t('propertyDetails.placeholders.searchPrefecture', {
                        defaultValue: 'Search prefecture...',
                      })
                    }
                    emptyText={
                      t('propertyDetails.placeholders.emptyPrefecture', {
                        defaultValue: 'No prefectures found.',
                      })
                    }
                    disabled={!selectedDistrictId}
                  />
                </div>
              </div>
            </section>

            <Separator />

            <section className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                {resolvedType === 'apartments'
                  ? t('propertyDetails.sections.apartmentDetails', { defaultValue: 'Apartment Details' })
                  : t('propertyDetails.sections.roomDetails', { defaultValue: 'Room Details' })}
              </h3>

              {resolvedType === 'apartments' ? (
                <div className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="apartment_number">
                        {t('propertyDetails.fields.apartmentNumber', {
                          defaultValue: 'Apartment Number',
                        })}
                      </Label>
                      <Input
                        id="apartment_number"
                        value={formData.apartment_number || ''}
                        onChange={(e) => setFormData({ ...formData, apartment_number: e.target.value })}
                        placeholder={t('propertyDetails.placeholders.apartmentNumber', {
                          defaultValue: 'Apartment number',
                        })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="home_number">
                        {t('propertyDetails.fields.homeNumber', { defaultValue: 'Home Number' })}
                      </Label>
                      <Input
                        id="home_number"
                        value={formData.home_number || ''}
                        onChange={(e) => setFormData({ ...formData, home_number: e.target.value })}
                        placeholder={t('propertyDetails.placeholders.homeNumber', {
                          defaultValue: 'Home number',
                        })}
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="entrance_number">
                        {t('propertyDetails.fields.entranceNumber', {
                          defaultValue: 'Entrance Number',
                        })}
                      </Label>
                      <Input
                        id="entrance_number"
                        value={formData.entrance_number || ''}
                        onChange={(e) => setFormData({ ...formData, entrance_number: e.target.value })}
                        placeholder={t('propertyDetails.placeholders.entranceNumber', {
                          defaultValue: 'Entrance number',
                        })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="floor_number">
                        {t('propertyDetails.fields.floorNumber', { defaultValue: 'Floor Number' })}
                      </Label>
                      <Input
                        id="floor_number"
                        value={formData.floor_number || ''}
                        onChange={(e) => setFormData({ ...formData, floor_number: e.target.value })}
                        placeholder={t('propertyDetails.placeholders.floorNumber', {
                          defaultValue: 'Floor number',
                        })}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="pass_code">
                      {t('propertyDetails.fields.passCode', { defaultValue: 'Pass Code' })}
                    </Label>
                    <Input
                      id="pass_code"
                      value={formData.pass_code || ''}
                      onChange={(e) => setFormData({ ...formData, pass_code: e.target.value })}
                      placeholder={t('propertyDetails.placeholders.passCode', {
                        defaultValue: 'Security pass code',
                      })}
                    />
                  </div>
                </div>
              ) : (
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="guests">
                      {t('propertyDetails.fields.guestsCapacity', { defaultValue: 'Guests Capacity' })}
                    </Label>
                    <Input
                      id="guests"
                      type="number"
                      value={formData.guests || 0}
                      onChange={(e) => setFormData({ ...formData, guests: parseInt(e.target.value, 10) || 0 })}
                      placeholder="0"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="rooms">{t('propertyDetails.fields.rooms', { defaultValue: 'Rooms' })}</Label>
                    <Input
                      id="rooms"
                      type="number"
                      value={formData.rooms || 0}
                      onChange={(e) => setFormData({ ...formData, rooms: parseInt(e.target.value, 10) || 0 })}
                      placeholder="0"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="beds">{t('propertyDetails.fields.beds', { defaultValue: 'Beds' })}</Label>
                    <Input
                      id="beds"
                      type="number"
                      value={formData.beds || 0}
                      onChange={(e) => setFormData({ ...formData, beds: parseInt(e.target.value, 10) || 0 })}
                      placeholder="0"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bathrooms">
                      {t('propertyDetails.fields.bathrooms', { defaultValue: 'Bathrooms' })}
                    </Label>
                    <Input
                      id="bathrooms"
                      type="number"
                      value={formData.bathrooms || 0}
                      onChange={(e) =>
                        setFormData({ ...formData, bathrooms: parseInt(e.target.value, 10) || 0 })
                      }
                      placeholder="0"
                    />
                  </div>
                </div>
              )}
            </section>

            <Separator />

            <section className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                {t('propertyDetails.sections.status', { defaultValue: 'Status' })}
              </h3>

              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="is_verified"
                    checked={formData.is_verified || false}
                    onCheckedChange={(checked: boolean | 'indeterminate') =>
                      setFormData({ ...formData, is_verified: Boolean(checked) })
                    }
                  />
                  <Label htmlFor="is_verified" className="font-normal cursor-pointer">
                    {t('propertyDetails.fields.markVerified', { defaultValue: 'Mark as Verified' })}
                  </Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="is_archived"
                    checked={formData.is_archived || false}
                    onCheckedChange={(checked: boolean | 'indeterminate') =>
                      setFormData({ ...formData, is_archived: Boolean(checked) })
                    }
                  />
                  <Label htmlFor="is_archived" className="font-normal cursor-pointer">
                    {t('propertyDetails.fields.archiveProperty', { defaultValue: 'Archive Property' })}
                  </Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="is_recommended"
                    checked={formData.is_recommended || false}
                    onCheckedChange={(checked: boolean | 'indeterminate') =>
                      setFormData({ ...formData, is_recommended: Boolean(checked) })
                    }
                  />
                  <Label htmlFor="is_recommended" className="font-normal cursor-pointer">
                    {t('propertyDetails.fields.markRecommended', {
                      defaultValue: 'Mark as Recommended',
                    })}
                  </Label>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="verification_status">
                  {t('propertyDetails.fields.verificationStatus', {
                    defaultValue: 'Verification Status',
                  })}
                </Label>
                <Select
                  value={formData.verification_status || 'pending'}
                  onValueChange={(value: string) => setFormData({ ...formData, verification_status: value })}
                >
                  <SelectTrigger id="verification_status">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pending">
                      {t('propertyDetails.status.pending', { defaultValue: 'Pending' })}
                    </SelectItem>
                    <SelectItem value="approved">
                      {t('propertyDetails.status.approved', { defaultValue: 'Approved' })}
                    </SelectItem>
                    <SelectItem value="rejected">
                      {t('propertyDetails.status.rejected', { defaultValue: 'Rejected' })}
                    </SelectItem>
                    <SelectItem value="under_review">
                      {t('propertyDetails.status.underReview', { defaultValue: 'Under Review' })}
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="verified_by_user_id">
                  {t('propertyDetails.fields.verifiedByUserId', {
                    defaultValue: 'Verified by User ID',
                  })}
                </Label>
                <Input
                  id="verified_by_user_id"
                  type="number"
                  value={formData.verified_by_user_id || ''}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      verified_by_user_id: e.target.value ? parseInt(e.target.value, 10) : null,
                    })
                  }
                  placeholder={t('propertyDetails.placeholders.verifiedByUserId', {
                    defaultValue: 'Admin user ID who verified',
                  })}
                />
              </div>
            </section>

            <Separator className="my-6" />

            <div className="flex flex-wrap gap-3">
              <Button
                onClick={() => {
                  setMessage(null)
                  setErrorMessage(null)
                  updateMutation.mutate()
                }}
                disabled={updateMutation.isPending}
                className="gap-2"
              >
                {updateMutation.isPending
                  ? t('propertyDetails.actions.saving', { defaultValue: 'Saving...' })
                  : t('propertyDetails.actions.saveChanges', { defaultValue: 'Save Changes' })}
              </Button>
            </div>

            {message && (
              <div className="mt-4 flex items-center gap-2 rounded-md bg-emerald-50 p-3 text-sm text-emerald-700">
                <CheckCircle className="h-4 w-4" />
                {message}
              </div>
            )}
            {errorMessage && (
              <div className="mt-4 flex items-center gap-2 rounded-md bg-red-50 p-3 text-sm text-red-700">
                <AlertCircle className="h-4 w-4" />
                {errorMessage}
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-start justify-between space-y-0">
            <div className="space-y-1.5">
              <CardTitle>{t('propertyDetails.raw.title', { defaultValue: 'Raw Property Data' })}</CardTitle>
              <CardDescription>
                {t('propertyDetails.raw.description', {
                  defaultValue: 'Complete API response in JSON format',
                })}
              </CardDescription>
            </div>
            <Button
              type="button"
              variant="outline"
              className="h-8 w-8 p-0"
              onClick={handleCopyRaw}
              title={
                isRawCopied
                  ? t('propertyDetails.raw.copied', { defaultValue: 'Copied' })
                  : t('propertyDetails.raw.copy', { defaultValue: 'Copy raw JSON' })
              }
              aria-label={
                isRawCopied
                  ? t('propertyDetails.raw.copied', { defaultValue: 'Copied' })
                  : t('propertyDetails.raw.copy', { defaultValue: 'Copy raw JSON' })
              }
            >
              {isRawCopied ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            </Button>
          </CardHeader>
          <CardContent>
            <pre className="max-h-96 overflow-auto rounded-md border bg-muted/20 p-3 text-xs">{rawPreview}</pre>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
