import { lazy, useEffect, useMemo, useReducer, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useTranslation } from 'react-i18next'
import { Building2, ChevronLeft, GripVertical, Loader2, Phone, Plus, Trash2, Upload } from 'lucide-react'
import { api } from '@/lib/api'
import { resolveImageUrl, cn } from '@/lib/utils'
import { fetchAllPartners } from '@/lib/partners'
import { formatUzbekPhoneNumber, getPhoneHref } from '@/lib/phone'
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
import HotelPmsSection from '@/components/HotelPmsSection'
import HotelRoomsSection from '@/components/HotelRoomsSection'
const RoomInspectionPage = lazy(() => import('./RoomInspectionPage'))

type HotelForm = {
  title: string
  organization_id: string
  partner_user_id: string
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
  is_verified: boolean
  is_archived: boolean
  is_recommended: boolean
  is_testing: boolean
  is_allowed_alcohol: boolean
  is_allowed_pets: boolean
  is_quiet_hours: boolean
  verification_status: string | null
  entity_name: string
  inn: string
  mfi: string
  bank_account: string
  vat_status: string
}

type State = {
  form: HotelForm
  savedMessage: string | null
  errorMessage: string | null
  imageMessage: string | null
  draggedIndex: number | null
  dragOverIndex: number | null
  isDragOver: boolean
}

type Action =
  | { type: 'resetForm'; payload: HotelForm }
  | { type: 'setField'; key: keyof HotelForm; value: HotelForm[keyof HotelForm] }
  | { type: 'setSavedMessage'; value: string | null }
  | { type: 'setErrorMessage'; value: string | null }
  | { type: 'setImageMessage'; value: string | null }
  | { type: 'setDraggedIndex'; value: number | null }
  | { type: 'setDragOverIndex'; value: number | null }
  | { type: 'setIsDragOver'; value: boolean }

const MAX_IMAGES = 10

function createInitialForm(item: PropertyItem | null): HotelForm {
  if (!item) {
    return {
      title: '',
      organization_id: '',
      partner_user_id: '',
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
      is_verified: false,
      is_archived: false,
      is_recommended: false,
      is_testing: false,
      is_allowed_alcohol: false,
      is_allowed_pets: false,
      is_quiet_hours: true,
      verification_status: null,
      entity_name: '',
      inn: '',
      mfi: '',
      bank_account: '',
      vat_status: '',
    }
  }

  const detail = (item.property_detail as Record<string, unknown> | undefined) ?? {}
  return {
    title: item.title ?? '',
    organization_id: item.organization?.id ? String(item.organization.id) : item.organization_id ? String(item.organization_id) : '',
    partner_user_id: item.partner_user?.id ? String(item.partner_user.id) : '',
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
    is_verified: item.is_verified ?? false,
    is_archived: item.is_archived ?? false,
    is_recommended: item.is_recommended ?? false,
    is_testing: item.is_testing ?? false,
    is_allowed_alcohol: item.is_allowed_alcohol ?? Boolean(detail.is_allowed_alcohol),
    is_allowed_pets: item.is_allowed_pets ?? Boolean(detail.is_allowed_pets),
    is_quiet_hours: item.is_quiet_hours ?? Boolean(detail.is_quiet_hours ?? true),
    verification_status: item.verification_status ?? null,
    entity_name: String(item.legal_info?.entity_name ?? ''),
    inn: String(item.legal_info?.inn ?? ''),
    mfi: String(item.legal_info?.mfi ?? ''),
    bank_account: String(item.legal_info?.bank_account ?? ''),
    vat_status: String(item.legal_info?.vat_status ?? ''),
  }
}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'resetForm':
      return { ...state, form: action.payload, savedMessage: null, errorMessage: null }
    case 'setField':
      return { ...state, form: { ...state.form, [action.key]: action.value } }
    case 'setSavedMessage':
      return { ...state, savedMessage: action.value }
    case 'setErrorMessage':
      return { ...state, errorMessage: action.value }
    case 'setImageMessage':
      return { ...state, imageMessage: action.value }
    case 'setDraggedIndex':
      return { ...state, draggedIndex: action.value }
    case 'setDragOverIndex':
      return { ...state, dragOverIndex: action.value }
    case 'setIsDragOver':
      return { ...state, isDragOver: action.value }
    default:
      return state
  }
}

const initialState: State = {
  form: createInitialForm(null),
  savedMessage: null,
  errorMessage: null,
  imageMessage: null,
  draggedIndex: null,
  dragOverIndex: null,
  isDragOver: false,
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
  const [pendingCreateImages, setPendingCreateImages] = useState<
    Array<{ file: File; previewUrl: string }>
  >([])
  const pendingCreateImagesRef = useRef(pendingCreateImages)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const savedMessageTimerRef = useRef<number | null>(null)

  const hotelQuery = useQuery({
    queryKey: ['hotel', propertyId],
    queryFn: () => fetchHotel(propertyId!),
    enabled: Boolean(propertyId) && !isCreateMode,
  })

  const organizationsQuery = useQuery({
    queryKey: ['hotel-organizations'],
    queryFn: fetchOrganizations,
  })

  const partnersQuery = useQuery({
    queryKey: ['all-partners', 'hotel'],
    queryFn: fetchAllPartners,
    enabled: isCreateMode,
  })

  const [partnerSearchTerm, setPartnerSearchTerm] = useState('')
  const [selectedPartnerId, setSelectedPartnerId] = useState('') 

  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    form: createInitialForm(hotelQuery.data ?? null),
  })

  useEffect(() => {
    dispatch({ type: 'resetForm', payload: createInitialForm(hotelQuery.data ?? null) })
  }, [hotelQuery.data])

  useEffect(() => {
    pendingCreateImagesRef.current = pendingCreateImages
  }, [pendingCreateImages])

  useEffect(() => {
    return () => {
      pendingCreateImagesRef.current.forEach((item) => URL.revokeObjectURL(item.previewUrl))
    }
  }, [])

  const { form, savedMessage, errorMessage, imageMessage, draggedIndex, dragOverIndex, isDragOver } = state
  const hotel = hotelQuery.data

  const filteredPartnerOptions = useMemo(() => {
    const all = partnersQuery.data ?? []
    const searchTerm = partnerSearchTerm.trim().toLowerCase()
    if (!searchTerm) return all
    return all.filter((partner) => {
      const searchable = [
        partner.full_name, partner.first_name, partner.last_name,
        partner.username, partner.phone_number,
        partner.email, String(partner.id),
      ]
        .filter(Boolean)
        .join(' ')
        .toLowerCase()
      return searchable.includes(searchTerm)
    })
  }, [partnersQuery.data, partnerSearchTerm])

  const selectedPartner = useMemo(
    () => (partnersQuery.data ?? []).find((p) => String(p.id) === selectedPartnerId) ?? null,
    [partnersQuery.data, selectedPartnerId],
  )

  useEffect(() => {
    if (selectedPartner) {
      dispatch({ type: 'setField', key: 'partner_user_id', value: String(selectedPartner.id) })
    }
  }, [selectedPartner])

  const selectedOrganization = useMemo(
    () => (organizationsQuery.data ?? []).find((item) => String(item.id) === form.organization_id) ?? null,
    [organizationsQuery.data, form.organization_id],
  )

  const saveMutation = useMutation({
    mutationFn: async () => {
      const payload = {
        title: form.title,
        organization_id: form.organization_id ? Number(form.organization_id) : null,
        partner_user_id: form.partner_user_id ? Number(form.partner_user_id) : null,
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
        is_verified: form.is_verified,
        is_archived: form.is_archived,
        is_recommended: form.is_recommended,
        is_testing: form.is_testing,
        is_allowed_alcohol: form.is_allowed_alcohol,
        is_allowed_pets: form.is_allowed_pets,
        is_quiet_hours: form.is_quiet_hours,
        verification_status: form.verification_status || null,
        legal_info: {
          entity_name: form.entity_name || '',
          inn: form.inn || '',
          mfi: form.mfi || '',
          bank_account: form.bank_account || '',
          vat_status: form.vat_status || '',
        },
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
    onSuccess: async (data) => {
      void queryClient.invalidateQueries({ queryKey: ['properties'] })
      if (isCreateMode && data.guid) {
        for (const pending of pendingCreateImages) {
          try {
            const formData = new FormData()
            formData.append('image', pending.file)
            await api.post(`/property/admin/hotels/${encodeURIComponent(data.guid)}/images/`, formData)
          } catch {
            dispatch({ type: 'setImageMessage', value: t('common.actionFailed') })
          }
        }
        pendingCreateImages.forEach((item) => URL.revokeObjectURL(item.previewUrl))
        setPendingCreateImages([])
        navigate(`/properties/hotels/${encodeURIComponent(data.guid)}`, { replace: true })
      } else {
        const updated = await fetchHotel(propertyId!)
        queryClient.setQueryData(['hotel', propertyId], updated)
        dispatch({ type: 'resetForm', payload: createInitialForm(updated) })
        dispatch({ type: 'setSavedMessage', value: t('common.saved') })
        if (savedMessageTimerRef.current) window.clearTimeout(savedMessageTimerRef.current)
        savedMessageTimerRef.current = window.setTimeout(() => {
          dispatch({ type: 'setSavedMessage', value: null })
        }, 3000)
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

  const currentImageCount = isCreateMode
    ? pendingCreateImages.length
    : (hotel?.img?.length ?? 0)
  const isMaxImages = currentImageCount >= MAX_IMAGES
  const imageItems = isCreateMode
    ? pendingCreateImages.map((item) => item.previewUrl)
    : (hotel?.img ?? [])

  const uploadImageMutation = useMutation({
    mutationFn: async (file: File) => {
      const formData = new FormData()
      formData.append('image', file)
      await api.post(`/property/admin/hotels/${encodeURIComponent(propertyId!)}/images/`, formData)
    },
    onSuccess: () => {
      void hotelQuery.refetch()
      dispatch({ type: 'setImageMessage', value: t('common.saved') })
      setTimeout(() => dispatch({ type: 'setImageMessage', value: null }), 3000)
    },
    onError: () => {
      dispatch({ type: 'setImageMessage', value: t('common.actionFailed') })
      setTimeout(() => dispatch({ type: 'setImageMessage', value: null }), 3000)
    },
  })

  const imagesUpdateMutation = useMutation({
    mutationFn: async (updatedImages: string[]) => {
      await api.patch(`/property/admin/hotels/${encodeURIComponent(propertyId!)}/`, { img: updatedImages })
    },
    onSuccess: () => {
      void hotelQuery.refetch()
    },
    onError: () => {
      dispatch({ type: 'setImageMessage', value: t('common.actionFailed') })
      setTimeout(() => dispatch({ type: 'setImageMessage', value: null }), 3000)
    },
  })

  const deleteImageMutation = useMutation({
    mutationFn: async (imageUrl: string) => {
      await api.delete(
        `/property/admin/hotels/${encodeURIComponent(propertyId!)}/images/${encodeURIComponent(imageUrl)}/`,
      )
    },
    onSuccess: () => {
      void hotelQuery.refetch()
      dispatch({ type: 'setImageMessage', value: t('common.saved') })
      setTimeout(() => dispatch({ type: 'setImageMessage', value: null }), 3000)
    },
    onError: () => {
      dispatch({ type: 'setImageMessage', value: t('common.actionFailed') })
      setTimeout(() => dispatch({ type: 'setImageMessage', value: null }), 3000)
    },
  })

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    if (isMaxImages) {
      dispatch({
        type: 'setImageMessage',
        value: t('properties.maxImagesReached') ?? `Maximum ${MAX_IMAGES} images allowed.`,
      })
      setTimeout(() => dispatch({ type: 'setImageMessage', value: null }), 3000)
      if (fileInputRef.current) fileInputRef.current.value = ''
      return
    }
    if (isCreateMode) {
      const previewUrl = URL.createObjectURL(file)
      setPendingCreateImages((prev) => [...prev, { file, previewUrl }])
      dispatch({ type: 'setImageMessage', value: null })
    } else {
      uploadImageMutation.mutate(file)
    }
    if (fileInputRef.current) fileInputRef.current.value = ''
  }

  const handleFileDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    dispatch({ type: 'setIsDragOver', value: false })
    if (isMaxImages) {
      dispatch({
        type: 'setImageMessage',
        value: t('properties.maxImagesReached') ?? `Maximum ${MAX_IMAGES} images allowed.`,
      })
      setTimeout(() => dispatch({ type: 'setImageMessage', value: null }), 3000)
      return
    }
    const files = Array.from(e.dataTransfer.files).filter((f) =>
      f.type.startsWith('image/'),
    )
    if (files.length === 0) return
    if (isCreateMode) {
      const newImages = files.map((file) => ({
        file,
        previewUrl: URL.createObjectURL(file),
      }))
      setPendingCreateImages((prev) => [...prev, ...newImages])
    } else {
      const file = files[0]
      uploadImageMutation.mutate(file)
    }
  }

  const handleDragOverZone = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    if (!isDragOver && !isMaxImages) {
      dispatch({ type: 'setIsDragOver', value: true })
    }
  }

  const handleDragLeaveZone = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.currentTarget.contains(e.relatedTarget as Node)) return
    dispatch({ type: 'setIsDragOver', value: false })
  }

  const handleDragStart = (e: React.DragEvent, index: number) => {
    dispatch({ type: 'setDraggedIndex', value: index })
    e.dataTransfer.effectAllowed = 'move'
    e.dataTransfer.setData('text/plain', String(index))
  }

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault()
    e.dataTransfer.dropEffect = 'move'
    if (draggedIndex !== index) {
      dispatch({ type: 'setDragOverIndex', value: index })
    }
  }

  const handleDrop = (e: React.DragEvent, dropIndex: number) => {
    e.preventDefault()
    const dragIndex = Number(e.dataTransfer.getData('text/plain'))
    if (dragIndex === dropIndex || Number.isNaN(dragIndex)) {
      dispatch({ type: 'setDraggedIndex', value: null })
      dispatch({ type: 'setDragOverIndex', value: null })
      return
    }
    if (isCreateMode) {
      setPendingCreateImages((prev) => {
        const reordered = [...prev]
        const [removed] = reordered.splice(dragIndex, 1)
        reordered.splice(dropIndex, 0, removed)
        return reordered
      })
    } else {
      const currentImages = hotel?.img ?? []
      const newImages = [...currentImages]
      const [removed] = newImages.splice(dragIndex, 1)
      newImages.splice(dropIndex, 0, removed)
      imagesUpdateMutation.mutate(newImages)
    }
    dispatch({ type: 'setDraggedIndex', value: null })
    dispatch({ type: 'setDragOverIndex', value: null })
  }

  const handleDragEnd = () => {
    dispatch({ type: 'setDraggedIndex', value: null })
    dispatch({ type: 'setDragOverIndex', value: null })
  }

  const handleDeleteImage = (index: number) => {
    if (isCreateMode) {
      setPendingCreateImages((prev) => {
        const removed = prev[index]
        if (removed) {
          URL.revokeObjectURL(removed.previewUrl)
        }
        return prev.filter((_, i) => i !== index)
      })
      return
    }
    const currentImages = hotel?.img ?? []
    const imageUrl = currentImages[index]
    if (!imageUrl) return
    deleteImageMutation.mutate(imageUrl)
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
        {savedMessage ? (
          <div className="rounded-md border bg-green-50 px-4 py-2 text-sm text-green-700">
            {savedMessage}
          </div>
        ) : null}
        {errorMessage ? (
          <div className="rounded-md border bg-red-50 px-4 py-2 text-sm text-red-700">
            {errorMessage}
          </div>
        ) : null}

        <Tabs defaultValue="basic" className="w-full">
          <TabsList>
            <TabsTrigger value="basic">{t('properties.tabs.basic')}</TabsTrigger>
            <TabsTrigger value="details">{t('properties.tabs.details')}</TabsTrigger>
            <TabsTrigger value="partner">{t('properties.tabs.partner')}</TabsTrigger>
            <TabsTrigger value="rooms">{t('properties.tabs.rooms')}</TabsTrigger>
            <TabsTrigger value="inspection">{t('inspection.title')}</TabsTrigger>
            <TabsTrigger value="location">{t('properties.tabs.location')}</TabsTrigger>
            <TabsTrigger value="images">{t('properties.tabs.images')}</TabsTrigger>
            <TabsTrigger value="pms">{t('nav.pms')}</TabsTrigger>
            <TabsTrigger value="settings">{t('properties.tabs.settings')}</TabsTrigger>
          </TabsList>

          <TabsContent value="basic" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">{t('properties.basicInfo')}</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-1 gap-4 md:grid-cols-2">
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

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Legal Info</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="entity_name">Entity Name</Label>
                  <Input
                    id="entity_name"
                    value={form.entity_name}
                    onChange={(event) =>
                      dispatch({ type: 'setField', key: 'entity_name', value: event.target.value })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="inn">INN</Label>
                  <Input
                    id="inn"
                    value={form.inn}
                    onChange={(event) =>
                      dispatch({ type: 'setField', key: 'inn', value: event.target.value })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="mfi">MFI</Label>
                  <Input
                    id="mfi"
                    value={form.mfi}
                    onChange={(event) =>
                      dispatch({ type: 'setField', key: 'mfi', value: event.target.value })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bank_account">Bank Account</Label>
                  <Input
                    id="bank_account"
                    value={form.bank_account}
                    onChange={(event) =>
                      dispatch({ type: 'setField', key: 'bank_account', value: event.target.value })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="vat_status">VAT Status</Label>
                  <Select
                    value={form.vat_status}
                    onValueChange={(value) =>
                      dispatch({ type: 'setField', key: 'vat_status', value })
                    }
                  >
                    <SelectTrigger id="vat_status">
                      <SelectValue placeholder="Select VAT status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="registered">Registered</SelectItem>
                      <SelectItem value="not_registered">Not Registered</SelectItem>
                      <SelectItem value="exempt">Exempt</SelectItem>
                    </SelectContent>
                  </Select>
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

          <TabsContent value="partner" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">{t('properties.partnerInfo')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="organization_id">Organization</Label>
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

                {selectedOrganization ? (
                  <div className="rounded-lg border bg-muted/30 p-4 space-y-3">
                    <div className="flex items-center gap-2">
                      <Building2 className="h-5 w-5 text-muted-foreground" />
                      <span className="font-semibold">{selectedOrganization.name}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                      <div>
                        <span className="text-xs text-muted-foreground">ID</span>
                        <p className="font-medium">{selectedOrganization.id}</p>
                      </div>
                      <div>
                        <span className="text-xs text-muted-foreground">Slug</span>
                        <p className="font-medium">{selectedOrganization.slug}</p>
                      </div>
                      <div>
                        <span className="text-xs text-muted-foreground">Schema</span>
                        <p className="font-medium">{selectedOrganization.schema_name}</p>
                      </div>
                    </div>
                  </div>
                ) : null}

                {!isCreateMode && hotel?.partner_user ? (
                  <div className="rounded-lg border bg-muted/30 p-4">
                    <p className="mb-3 text-sm font-medium text-muted-foreground">
                      {t('properties.partnerInfo')}
                    </p>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      <div className="space-y-1 md:col-span-2">
                        <div className="flex items-center gap-3">
                          {hotel.partner_user.avatar ? (
                            <img
                              src={resolveImageUrl(hotel.partner_user.avatar)}
                              alt=""
                              className="h-12 w-12 rounded-full object-cover"
                            />
                          ) : (
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted text-sm font-bold text-muted-foreground">
                              {(
                                hotel.partner_user.first_name?.[0] ??
                                hotel.partner_user.username?.[0] ??
                                '?'
                              ).toUpperCase()}
                            </div>
                          )}
                          <div>
                            <p className="font-medium">
                              {[
                                hotel.partner_user.first_name,
                                hotel.partner_user.last_name,
                              ]
                                .filter(Boolean)
                                .join(' ') ||
                                hotel.partner_user.username ||
                                '-'}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {hotel.partner_user.username ? (
                                <button
                                  type="button"
                                  onClick={() => {
                                    const partnerId = hotel.partner_user?.id
                                    if (partnerId) navigate(`/partner/${partnerId}`)
                                  }}
                                  className="text-xs text-primary hover:underline"
                                >
                                  @{hotel.partner_user.username}
                                </button>
                              ) : (
                                '-'
                              )}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-1">
                        <Label className="text-xs text-muted-foreground">
                          {t('properties.partnerId')}
                        </Label>
                        <p className="text-sm font-medium">{hotel.partner_user.id}</p>
                      </div>
                      <div className="space-y-1">
                        <Label className="text-xs text-muted-foreground">
                          {t('properties.partnerRole')}
                        </Label>
                        <p className="text-sm font-medium">
                          {hotel.partner_user.role ?? '-'}
                        </p>
                      </div>
                      <div className="space-y-1">
                        <Label className="text-xs text-muted-foreground">
                          {t('properties.partnerPhone')}
                        </Label>
                        {hotel.partner_user.phone_number ? (
                          <a
                            href={getPhoneHref(hotel.partner_user.phone_number)}
                            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                          >
                            <Phone className="h-3.5 w-3.5" />
                            {formatUzbekPhoneNumber(hotel.partner_user.phone_number)}
                          </a>
                        ) : (
                          <p className="text-sm font-medium">-</p>
                        )}
                      </div>
                      <div className="space-y-1">
                        <Label className="text-xs text-muted-foreground">
                          {t('properties.partnerEmail')}
                        </Label>
                        <p className="text-sm font-medium">
                          {hotel.partner_user.email ?? '-'}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge
                          variant={
                            hotel.partner_user.is_active ? 'default' : 'secondary'
                          }
                        >
                          {hotel.partner_user.is_active
                            ? t('properties.partnerActive')
                            : t('properties.partnerInactive')}
                        </Badge>
                        {hotel.partner_user.is_verified && (
                          <Badge variant="outline">
                            {t('properties.partnerVerified')}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                ) : null}

                {isCreateMode ? (
                  <div className="rounded-lg border bg-muted/30 p-4 space-y-3">
                    <p className="text-sm font-medium text-muted-foreground">
                      Partner User
                    </p>
                    <div className="space-y-2">
                      <Input
                        value={partnerSearchTerm}
                        onChange={(e) => setPartnerSearchTerm(e.target.value)}
                        placeholder={
                          t('properties.partnerSearchPlaceholder') ??
                          'Search partner by name, username, phone...'
                        }
                      />
                      <Select
                        value={selectedPartnerId}
                        onValueChange={(value) => {
                          setSelectedPartnerId(value)
                          dispatch({ type: 'setField', key: 'partner_user_id', value })
                        }}
                      >
                        <SelectTrigger>
                          <SelectValue
                            placeholder={
                              t('properties.selectPartner') ??
                              'Select an existing partner'
                            }
                          />
                        </SelectTrigger>
                        <SelectContent>
                          {filteredPartnerOptions.map((partner) => {
                            const name =
                              partner.full_name ||
                              [partner.first_name, partner.last_name]
                                .filter(Boolean)
                                .join(' ') ||
                              partner.username ||
                              String(partner.id)
                            const phone = partner.phone_number
                              ? ` • ${partner.phone_number}`
                              : ''
                            return (
                              <SelectItem
                                key={partner.id}
                                value={String(partner.id)}
                              >
                                {`${name}${phone}`}
                              </SelectItem>
                            )
                          })}
                        </SelectContent>
                      </Select>
                      {!partnersQuery.isLoading && !partnersQuery.isError && filteredPartnerOptions.length === 0 ? (
                        <p className="text-xs text-muted-foreground">
                          {t('properties.noPartnerMatches')}
                        </p>
                      ) : null}
                      {partnersQuery.isLoading ? (
                        <p className="text-xs text-muted-foreground">
                          {t('common.loading')}
                        </p>
                      ) : null}
                      {partnersQuery.isError ? (
                        <p className="text-xs text-red-600">
                          {t('properties.partnerLoadFailed') ?? 'Failed to load partners.'}
                        </p>
                      ) : null}
                    </div>
                    {selectedPartner ? (
                      <div className="space-y-1">
                        <p className="text-sm font-medium">
                          {selectedPartner.full_name ||
                            [selectedPartner.first_name, selectedPartner.last_name]
                              .filter(Boolean)
                              .join(' ') ||
                            selectedPartner.username ||
                            '-'}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {selectedPartner.phone_number || '-'}
                        </p>
                      </div>
                    ) : null}
                  </div>
                ) : !hotel?.partner_user ? (
                  <p className="text-sm text-muted-foreground">{t('properties.noPartner')}</p>
                ) : null}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="rooms" className="space-y-4">
            {isCreateMode ? (
              <Card>
                <CardContent className="py-8 text-center text-sm text-muted-foreground">
                  {t('properties.pmsAfterCreate')}
                </CardContent>
              </Card>
            ) : hotel ? (
              <HotelRoomsSection hotelId={hotel.guid} />
            ) : null}
          </TabsContent>

          <TabsContent value="inspection" className="space-y-4">
            {isCreateMode ? (
              <Card>
                <CardContent className="py-8 text-center text-sm text-muted-foreground">
                  {t('properties.pmsAfterCreate')}
                </CardContent>
              </Card>
            ) : hotel ? (
              <RoomInspectionPage hotelId={hotel.guid} />
            ) : null}
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
                <CardTitle className="text-base">
                  {t('propertyDetails.sections.imageUpdater')}
                  <span className="ml-2 text-xs font-normal text-muted-foreground">
                    ({currentImageCount} / {MAX_IMAGES})
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {imageMessage ? (
                  <div
                    className={`rounded-md border px-4 py-2 text-sm ${
                      imageMessage.includes(
                        t('propertyDetails.messages.imageUpdateSuccess') ?? 'success',
                      )
                        ? 'bg-green-50 text-green-700'
                        : 'bg-red-50 text-red-700'
                    }`}
                  >
                    {imageMessage}
                  </div>
                ) : null}

                <div
                  className={cn(
                    'relative rounded-lg transition-all',
                    isDragOver && !isMaxImages && 'ring-2 ring-primary ring-offset-2 bg-primary/5',
                  )}
                  onDrop={handleFileDrop}
                  onDragOver={handleDragOverZone}
                  onDragLeave={handleDragLeaveZone}
                >
                  {isDragOver ? (
                    <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-2 rounded-lg bg-primary/10 pointer-events-none">
                      <Upload className="h-8 w-8 text-primary" />
                      <span className="text-sm font-medium text-primary">
                        {t('common.dropHere') ?? 'Drop image here'}
                      </span>
                    </div>
                  ) : null}
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
                    {imageItems.map((src, index) => {
                      const isDragged = draggedIndex === index
                      const isDropTarget =
                        dragOverIndex === index && draggedIndex !== index

                      return (
                        <div
                          key={src}
                          draggable
                          onDragStart={(e) => handleDragStart(e, index)}
                          onDragOver={(e) => handleDragOver(e, index)}
                          onDrop={(e) => handleDrop(e, index)}
                          onDragEnd={handleDragEnd}
                          className={cn(
                            'group relative aspect-[4/3] select-none overflow-hidden rounded-lg border bg-muted transition-all duration-200',
                            isDragged &&
                              'z-0 scale-95 opacity-40 ring-2 ring-primary/50',
                            isDropTarget &&
                              'z-10 scale-105 shadow-lg ring-2 ring-primary',
                            !isDragged &&
                              !isDropTarget &&
                              'hover:ring-1 hover:ring-border',
                          )}
                        >
                          <img
                            src={isCreateMode ? src : resolveImageUrl(src)}
                            alt={`${hotel?.title} ${index + 1}`}
                            className="pointer-events-none h-full w-full object-cover"
                            draggable={false}
                          />

                          <div className="absolute left-1.5 top-1.5 z-10 flex h-5 w-5 items-center justify-center rounded-full bg-black/60 text-[10px] font-bold text-white">
                            {index + 1}
                          </div>

                          <div className="absolute right-1.5 top-1.5 z-10 opacity-0 transition-opacity group-hover:opacity-100">
                            <div
                              className="flex h-7 w-7 cursor-grab items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition-colors hover:bg-black/60 active:cursor-grabbing"
                              title={t('properties.dragToReorder') ?? 'Drag to reorder'}
                            >
                              <GripVertical className="h-3.5 w-3.5" />
                            </div>
                          </div>

                          <button
                            type="button"
                            onClick={() => handleDeleteImage(index)}
                            disabled={deleteImageMutation.isPending || imagesUpdateMutation.isPending}
                            className="absolute bottom-1.5 right-1.5 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-black/40 text-white opacity-70 transition-all hover:bg-red-500/90 hover:opacity-100 disabled:opacity-30"
                            title={t('properties.deleteImage') ?? 'Delete image'}
                          >
                            <Trash2 className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      )
                    })}

                    {!isMaxImages ? (
                      <label
                        className={cn(
                          'flex aspect-[4/3] cursor-pointer flex-col items-center justify-center gap-1.5 rounded-lg border-2 border-dashed border-primary/30 bg-primary/5 transition-colors hover:border-primary/50 hover:bg-primary/10',
                          uploadImageMutation.isPending &&
                            'pointer-events-none opacity-60',
                        )}
                      >
                        <input
                          ref={fileInputRef}
                          type="file"
                          accept="image/*"
                          className="sr-only"
                          onChange={handleFileSelect}
                        />
                        {uploadImageMutation.isPending ? (
                          <Loader2 className="h-5 w-5 animate-spin text-primary" />
                        ) : (
                          <Plus className="h-5 w-5 text-primary" />
                        )}
                        <span className="text-xs font-medium text-primary">
                          {uploadImageMutation.isPending
                            ? t('propertyDetails.actions.updatingImage')
                            : t('propertyDetails.actions.updateImage')}
                        </span>
                      </label>
                    ) : null}
                  </div>
                </div>

                {isMaxImages ? (
                  <p className="text-sm font-medium text-amber-600">
                    {t('properties.maxImagesReached', { count: MAX_IMAGES })}
                  </p>
                ) : null}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="pms" className="space-y-4">
            {isCreateMode ? (
              <Card>
                <CardContent className="py-8 text-center text-sm text-muted-foreground">
                  {t('properties.pmsAfterCreate')}
                </CardContent>
              </Card>
            ) : hotel ? (
              <HotelPmsSection hotelId={hotel.guid} />
            ) : null}
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
                    checked={form.is_verified}
                    onCheckedChange={(value) =>
                      dispatch({ type: 'setField', key: 'is_verified', value: Boolean(value) })
                    }
                  />
                  <span>{t('properties.isVerified')}</span>
                </label>
                <label className="flex items-center gap-2 text-sm">
                  <Checkbox
                    checked={form.is_archived}
                    onCheckedChange={(value) =>
                      dispatch({ type: 'setField', key: 'is_archived', value: Boolean(value) })
                    }
                  />
                  <span>{t('properties.isArchived')}</span>
                </label>
                <label className="flex items-center gap-2 text-sm">
                  <Checkbox
                    checked={form.is_recommended}
                    onCheckedChange={(value) =>
                      dispatch({ type: 'setField', key: 'is_recommended', value: Boolean(value) })
                    }
                  />
                  <span>{t('properties.isRecommended')}</span>
                </label>
                <label className="flex items-center gap-2 text-sm">
                  <Checkbox
                    checked={form.is_testing}
                    onCheckedChange={(value) =>
                      dispatch({ type: 'setField', key: 'is_testing', value: Boolean(value) })
                    }
                  />
                  <span>{t('properties.isTesting')}</span>
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

                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="verification_status">
                    {t('properties.verificationStatus')}
                  </Label>
                  <Select
                    value={form.verification_status ?? ''}
                    onValueChange={(value) =>
                      dispatch({ type: 'setField', key: 'verification_status', value: value || null })
                    }
                  >
                    <SelectTrigger id="verification_status">
                      <SelectValue placeholder={t('properties.selectVerificationStatus')} />
                    </SelectTrigger>
                    <SelectContent>
                      {(['cancelled', 'accepted', 'waiting'] as const).map((status) => (
                        <SelectItem key={status} value={status}>
                          {t(`propertyDetails.status.${status}`)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
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
