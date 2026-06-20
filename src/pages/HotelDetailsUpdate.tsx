import { useEffect, useMemo, useReducer, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useTranslation } from 'react-i18next'
import { ChevronLeft, Loader2, Trash2, Upload } from 'lucide-react'
import { api } from '@/lib/api'
import { resolveImageUrl } from '@/lib/utils'
import type { HotelOrganizationOption, PropertyItem } from '@/types'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Skeleton } from '@/components/ui/skeleton'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

type HotelForm = {
  title: string
  organization_id: string
  tenant_schema: string
  address: string
  city: string
  country: string
  latitude: string
  longitude: string
  currency: 'USD' | 'UZS'
  timezone: string
  cancellation_policy: string
  check_in_time: string
  check_out_time: string
  star_rating: string
  description_ru: string
  description_uz: string
  description_en: string
  amenities: string
  is_active: boolean
  is_allowed_alcohol: boolean
  is_allowed_pets: boolean
  is_quiet_hours: boolean
}

type State = {
  form: HotelForm
  savedMessage: string | null
  errorMessage: string | null
  imageMessage: string | null
}

type Action =
  | { type: 'hydrate'; payload: PropertyItem }
  | { type: 'setField'; key: keyof HotelForm; value: HotelForm[keyof HotelForm] }
  | { type: 'setSavedMessage'; value: string | null }
  | { type: 'setErrorMessage'; value: string | null }
  | { type: 'setImageMessage'; value: string | null }

const emptyForm: HotelForm = {
  title: '',
  organization_id: '',
  tenant_schema: '',
  address: '',
  city: '',
  country: 'UZ',
  latitude: '',
  longitude: '',
  currency: 'USD',
  timezone: 'Asia/Tashkent',
  cancellation_policy: '',
  check_in_time: '',
  check_out_time: '',
  star_rating: '',
  description_ru: '',
  description_uz: '',
  description_en: '',
  amenities: '',
  is_active: true,
  is_allowed_alcohol: false,
  is_allowed_pets: false,
  is_quiet_hours: true,
}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'hydrate': {
      const item = action.payload
      const detail = (item.property_detail as Record<string, unknown> | undefined) ?? {}
      return {
        ...state,
        form: {
          title: item.title ?? '',
          organization_id: item.organization?.id ? String(item.organization.id) : item.organization_id ? String(item.organization_id) : '',
          tenant_schema: item.organization?.schema_name ?? item.tenant_schema ?? '',
          address: item.address ?? String(detail.address ?? ''),
          city: item.city ?? '',
          country: item.country ?? 'UZ',
          latitude: item.latitude ?? '',
          longitude: item.longitude ?? '',
          currency: (item.currency as 'USD' | 'UZS') ?? 'USD',
          timezone: String(detail.timezone ?? item.timezone ?? 'Asia/Tashkent'),
          cancellation_policy: String(detail.cancellation_policy ?? item.cancellation_policy ?? ''),
          check_in_time: String(detail.check_in_time ?? item.check_in_time ?? ''),
          check_out_time: String(detail.check_out_time ?? item.check_out_time ?? ''),
          star_rating: item.star_rating != null ? String(item.star_rating) : detail.star_rating != null ? String(detail.star_rating) : '',
          description_ru: item.description_ru ?? String(detail.description_ru ?? ''),
          description_uz: item.description_uz ?? String(detail.description_uz ?? ''),
          description_en: item.description_en ?? String(detail.description_en ?? ''),
          amenities: Array.isArray(item.amenities)
            ? item.amenities.join(', ')
            : Array.isArray(detail.amenities)
              ? (detail.amenities as string[]).join(', ')
              : '',
          is_active: item.is_active ?? true,
          is_allowed_alcohol: item.is_allowed_alcohol ?? Boolean(detail.is_allowed_alcohol),
          is_allowed_pets: item.is_allowed_pets ?? Boolean(detail.is_allowed_pets),
          is_quiet_hours: item.is_quiet_hours ?? Boolean(detail.is_quiet_hours ?? true),
        },
        errorMessage: null,
      }
    }
    case 'setField':
      return { ...state, form: { ...state.form, [action.key]: action.value } }
    case 'setSavedMessage':
      return { ...state, savedMessage: action.value }
    case 'setErrorMessage':
      return { ...state, errorMessage: action.value }
    case 'setImageMessage':
      return { ...state, imageMessage: action.value }
    default:
      return state
  }
}

const initialState: State = {
  form: emptyForm,
  savedMessage: null,
  errorMessage: null,
  imageMessage: null,
}

const fetchHotel = async (id: string): Promise<PropertyItem> => {
  const response = await api.get<PropertyItem>(`/property/admin/hotels/${encodeURIComponent(id)}/`)
  return response.data
}

const fetchOrganizations = async (): Promise<HotelOrganizationOption[]> => {
  const response = await api.get<HotelOrganizationOption[]>('/property/admin/hotel-organizations/')
  return response.data ?? []
}

export default function HotelDetailsUpdate() {
  const { propertyId } = useParams<{ propertyId: string }>()
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const { t } = useTranslation()
  const isCreateMode = propertyId === 'create'
  const [state, dispatch] = useReducer(reducer, initialState)
  const [uploading, setUploading] = useState(false)

  const hotelQuery = useQuery({
    queryKey: ['hotel', propertyId],
    queryFn: () => fetchHotel(propertyId!),
    enabled: Boolean(propertyId) && !isCreateMode,
  })

  const organizationsQuery = useQuery({
    queryKey: ['hotel-organizations'],
    queryFn: fetchOrganizations,
  })

  useEffect(() => {
    if (hotelQuery.data) {
      dispatch({ type: 'hydrate', payload: hotelQuery.data })
    }
  }, [hotelQuery.data])

  const hotel = hotelQuery.data
  const form = state.form

  const selectedOrganization = useMemo(
    () => (organizationsQuery.data ?? []).find((item) => String(item.id) === form.organization_id) ?? null,
    [organizationsQuery.data, form.organization_id],
  )

  useEffect(() => {
    if (selectedOrganization && form.tenant_schema !== selectedOrganization.schema_name) {
      dispatch({ type: 'setField', key: 'tenant_schema', value: selectedOrganization.schema_name })
    }
  }, [selectedOrganization, form.tenant_schema])

  const saveMutation = useMutation({
    mutationFn: async () => {
      const payload = {
        title: form.title,
        organization_id: form.organization_id ? Number(form.organization_id) : null,
        tenant_schema: form.tenant_schema,
        address: form.address || null,
        city: form.city || null,
        country: form.country || null,
        latitude: form.latitude || null,
        longitude: form.longitude || null,
        currency: form.currency,
        timezone: form.timezone || null,
        cancellation_policy: form.cancellation_policy || null,
        check_in_time: form.check_in_time || null,
        check_out_time: form.check_out_time || null,
        star_rating: form.star_rating ? Number(form.star_rating) : null,
        description_ru: form.description_ru || null,
        description_uz: form.description_uz || null,
        description_en: form.description_en || null,
        amenities: form.amenities
          .split(',')
          .map((value) => value.trim())
          .filter(Boolean),
        is_active: form.is_active,
        is_allowed_alcohol: form.is_allowed_alcohol,
        is_allowed_pets: form.is_allowed_pets,
        is_quiet_hours: form.is_quiet_hours,
      }

      if (isCreateMode) {
        const response = await api.post<PropertyItem>('/property/admin/hotels/', payload)
        return response.data
      }

      const response = await api.patch<PropertyItem>(
        `/property/admin/hotels/${encodeURIComponent(propertyId!)}/`,
        payload,
      )
      return response.data
    },
    onSuccess: (data) => {
      dispatch({ type: 'setSavedMessage', value: t('common.saved') })
      dispatch({ type: 'hydrate', payload: data })
      void queryClient.invalidateQueries({ queryKey: ['properties'] })
      if (isCreateMode && data.guid) {
        navigate(`/properties/hotels/${encodeURIComponent(data.guid)}`, { replace: true })
      }
    },
    onError: () => {
      dispatch({ type: 'setErrorMessage', value: t('common.saveFailed') })
    },
  })

  const deleteMutation = useMutation({
    mutationFn: async () => {
      await api.delete(`/property/admin/hotels/${encodeURIComponent(propertyId!)}/`)
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['properties'] })
      navigate('/properties')
    },
  })

  const handleImageUpload = async (file: File | null) => {
    if (!file || !propertyId || isCreateMode) return
    setUploading(true)
    dispatch({ type: 'setImageMessage', value: null })
    try {
      const formData = new FormData()
      formData.append('image', file)
      await api.post(`/property/admin/hotels/${encodeURIComponent(propertyId)}/images/`, formData)
      dispatch({ type: 'setImageMessage', value: t('common.saved') })
      await hotelQuery.refetch()
    } catch {
      dispatch({ type: 'setImageMessage', value: t('common.actionFailed') })
    } finally {
      setUploading(false)
    }
  }

  const handleDeleteImage = async (imageUrl: string) => {
    if (!propertyId || isCreateMode) return
    try {
      await api.delete(
        `/property/admin/hotels/${encodeURIComponent(propertyId)}/images/${encodeURIComponent(imageUrl)}/`,
      )
      await hotelQuery.refetch()
    } catch {
      dispatch({ type: 'setImageMessage', value: t('common.actionFailed') })
    }
  }

  if (!isCreateMode && hotelQuery.isLoading) {
    return (
      <div className="h-full overflow-y-auto p-4 md:p-6">
        <Skeleton className="mb-4 h-8 w-64" />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Skeleton className="h-48" />
          <Skeleton className="h-48" />
        </div>
      </div>
    )
  }

  if (!isCreateMode && (hotelQuery.error || !hotel)) {
    return (
      <div className="h-full overflow-y-auto p-4 md:p-6">
        <p className="text-sm text-red-600">
          {t('properties.loadFailed', { type: t('properties.tabs.hotels') })}
        </p>
      </div>
    )
  }

  return (
    <div className="h-full overflow-y-auto p-4 md:p-6">
      <div className="mb-4 flex items-center gap-3">
        <Button variant="ghost" size="icon" onClick={() => navigate('/properties')}>
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-xl font-bold md:text-2xl">
          {isCreateMode
            ? t('properties.createPageTitle', { type: t('properties.tabs.hotels') })
            : hotel?.title}
        </h1>
        <div className="ml-auto flex items-center gap-2">
          {isCreateMode ? <Badge variant="outline">{t('properties.createModeBadge')}</Badge> : null}
          <Badge variant={form.is_active ? 'default' : 'secondary'}>
            {form.is_active ? t('partners.status') : t('properties.archived')}
          </Badge>
        </div>
      </div>

      <form
        onSubmit={(event) => {
          event.preventDefault()
          void saveMutation.mutateAsync()
        }}
        className="space-y-6"
      >
        {state.savedMessage ? (
          <div className="rounded-md border bg-green-50 px-4 py-2 text-sm text-green-700">
            {state.savedMessage}
          </div>
        ) : null}
        {state.errorMessage ? (
          <div className="rounded-md border bg-red-50 px-4 py-2 text-sm text-red-700">
            {state.errorMessage}
          </div>
        ) : null}

        <Tabs defaultValue="basic" className="w-full">
          <TabsList>
            <TabsTrigger value="basic">{t('properties.tabs.basic')}</TabsTrigger>
            <TabsTrigger value="details">{t('properties.tabs.details')}</TabsTrigger>
            <TabsTrigger value="location">{t('properties.tabs.location')}</TabsTrigger>
            <TabsTrigger value="images">{t('properties.tabs.images')}</TabsTrigger>
            <TabsTrigger value="settings">{t('properties.tabs.settings')}</TabsTrigger>
          </TabsList>

          <TabsContent value="basic" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">{t('properties.basicInfo')}</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="organization_id">{t('properties.partnerInfo')}</Label>
                  <Select
                    value={form.organization_id}
                    onValueChange={(value) =>
                      dispatch({ type: 'setField', key: 'organization_id', value })
                    }
                  >
                    <SelectTrigger id="organization_id">
                      <SelectValue placeholder={t('properties.selectPartner')} />
                    </SelectTrigger>
                    <SelectContent>
                      {(organizationsQuery.data ?? []).map((item) => (
                        <SelectItem key={item.id} value={String(item.id)}>
                          {item.name} ({item.schema_name})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="title">{t('properties.title')}</Label>
                  <Input
                    id="title"
                    value={form.title}
                    onChange={(event) =>
                      dispatch({ type: 'setField', key: 'title', value: event.target.value })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="star_rating">Star rating</Label>
                  <Input
                    id="star_rating"
                    type="number"
                    min={1}
                    max={7}
                    value={form.star_rating}
                    onChange={(event) =>
                      dispatch({ type: 'setField', key: 'star_rating', value: event.target.value })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="currency">{t('properties.currency')}</Label>
                  <Select
                    value={form.currency}
                    onValueChange={(value) =>
                      dispatch({ type: 'setField', key: 'currency', value: value as 'USD' | 'UZS' })
                    }
                  >
                    <SelectTrigger id="currency">
                      <SelectValue placeholder={t('properties.selectCurrency')} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="USD">USD</SelectItem>
                      <SelectItem value="UZS">UZS</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="check_in_time">{t('properties.checkIn')}</Label>
                  <Input
                    id="check_in_time"
                    value={form.check_in_time}
                    onChange={(event) =>
                      dispatch({ type: 'setField', key: 'check_in_time', value: event.target.value })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="check_out_time">{t('properties.checkOut')}</Label>
                  <Input
                    id="check_out_time"
                    value={form.check_out_time}
                    onChange={(event) =>
                      dispatch({ type: 'setField', key: 'check_out_time', value: event.target.value })
                    }
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="details" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">{t('properties.tabs.details')}</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-1 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="description_uz">{t('properties.descriptionUz')}</Label>
                  <Textarea
                    id="description_uz"
                    rows={4}
                    value={form.description_uz}
                    onChange={(event) =>
                      dispatch({ type: 'setField', key: 'description_uz', value: event.target.value })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description_ru">{t('properties.descriptionRu')}</Label>
                  <Textarea
                    id="description_ru"
                    rows={4}
                    value={form.description_ru}
                    onChange={(event) =>
                      dispatch({ type: 'setField', key: 'description_ru', value: event.target.value })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description_en">Description (English)</Label>
                  <Textarea
                    id="description_en"
                    rows={4}
                    value={form.description_en}
                    onChange={(event) =>
                      dispatch({ type: 'setField', key: 'description_en', value: event.target.value })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Input
                    id="address"
                    value={form.address}
                    onChange={(event) =>
                      dispatch({ type: 'setField', key: 'address', value: event.target.value })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="amenities">{t('properties.amenities')}</Label>
                  <Textarea
                    id="amenities"
                    rows={3}
                    value={form.amenities}
                    placeholder="wifi, breakfast, parking"
                    onChange={(event) =>
                      dispatch({ type: 'setField', key: 'amenities', value: event.target.value })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cancellation_policy">Cancellation policy</Label>
                  <Input
                    id="cancellation_policy"
                    value={form.cancellation_policy}
                    onChange={(event) =>
                      dispatch({ type: 'setField', key: 'cancellation_policy', value: event.target.value })
                    }
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="location" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">{t('properties.location')}</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="country">{t('properties.country')}</Label>
                  <Input
                    id="country"
                    value={form.country}
                    onChange={(event) =>
                      dispatch({ type: 'setField', key: 'country', value: event.target.value })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="city">{t('properties.city')}</Label>
                  <Input
                    id="city"
                    value={form.city}
                    onChange={(event) =>
                      dispatch({ type: 'setField', key: 'city', value: event.target.value })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="latitude">{t('properties.latitude')}</Label>
                  <Input
                    id="latitude"
                    value={form.latitude}
                    onChange={(event) =>
                      dispatch({ type: 'setField', key: 'latitude', value: event.target.value })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="longitude">{t('properties.longitude')}</Label>
                  <Input
                    id="longitude"
                    value={form.longitude}
                    onChange={(event) =>
                      dispatch({ type: 'setField', key: 'longitude', value: event.target.value })
                    }
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="timezone">Timezone</Label>
                  <Input
                    id="timezone"
                    value={form.timezone}
                    onChange={(event) =>
                      dispatch({ type: 'setField', key: 'timezone', value: event.target.value })
                    }
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="images" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">{t('properties.tabs.images')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {state.imageMessage ? (
                  <div className="rounded-md border bg-muted/30 px-4 py-2 text-sm">
                    {state.imageMessage}
                  </div>
                ) : null}
                {isCreateMode ? (
                  <p className="text-sm text-muted-foreground">{t('properties.imageUploadAfterCreate')}</p>
                ) : (
                  <>
                    <div className="flex flex-wrap gap-4">
                      {(hotel?.img ?? []).map((image) => (
                        <div key={image} className="space-y-2">
                          <img
                            src={resolveImageUrl(image)}
                            alt={hotel?.title}
                            className="h-32 w-40 rounded-md object-cover"
                          />
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            className="w-full"
                            onClick={() => void handleDeleteImage(image)}
                          >
                            <Trash2 className="h-4 w-4" />
                            {t('properties.deleteImage')}
                          </Button>
                        </div>
                      ))}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="hotel-image-upload">Upload image</Label>
                      <Input
                        id="hotel-image-upload"
                        type="file"
                        accept="image/*"
                        onChange={(event) => void handleImageUpload(event.target.files?.[0] ?? null)}
                      />
                      {uploading ? (
                        <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Uploading...
                        </div>
                      ) : null}
                    </div>
                  </>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">{t('properties.settings')}</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <label className="flex items-center gap-2 text-sm">
                  <Checkbox
                    checked={form.is_active}
                    onCheckedChange={(value) =>
                      dispatch({ type: 'setField', key: 'is_active', value: Boolean(value) })
                    }
                  />
                  <span>Active</span>
                </label>
                <label className="flex items-center gap-2 text-sm">
                  <Checkbox
                    checked={form.is_allowed_alcohol}
                    onCheckedChange={(value) =>
                      dispatch({ type: 'setField', key: 'is_allowed_alcohol', value: Boolean(value) })
                    }
                  />
                  <span>{t('properties.allowedAlcohol')}</span>
                </label>
                <label className="flex items-center gap-2 text-sm">
                  <Checkbox
                    checked={form.is_allowed_pets}
                    onCheckedChange={(value) =>
                      dispatch({ type: 'setField', key: 'is_allowed_pets', value: Boolean(value) })
                    }
                  />
                  <span>{t('properties.allowedPets')}</span>
                </label>
                <label className="flex items-center gap-2 text-sm">
                  <Checkbox
                    checked={form.is_quiet_hours}
                    onCheckedChange={(value) =>
                      dispatch({ type: 'setField', key: 'is_quiet_hours', value: Boolean(value) })
                    }
                  />
                  <span>{t('properties.quietHours')}</span>
                </label>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="flex items-center justify-between gap-3">
          {!isCreateMode ? (
            <Button
              type="button"
              variant="destructive"
              onClick={() => void deleteMutation.mutateAsync()}
              disabled={deleteMutation.isPending}
            >
              <Trash2 className="h-4 w-4" />
              Delete hotel
            </Button>
          ) : <div />}
          <Button type="submit" disabled={saveMutation.isPending}>
            {saveMutation.isPending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Upload className="h-4 w-4" />}
            {saveMutation.isPending ? t('common.saving') : t('common.save')}
          </Button>
        </div>
      </form>
    </div>
  )
}
