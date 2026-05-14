import { useEffect, useMemo, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { useTranslation } from 'react-i18next'
import { api } from '@/lib/api'
import { resolveImageUrl, cn } from '@/lib/utils'
import type {
  ApartmentAdminList,
  ApartmentAdminUpdate,
  RegionList,
  DistrictList,
  PrefectureList,
} from '@/types/weel-openapi'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { PriceInput } from '@/components/ui/price-input'
import { Label } from '@/components/ui/label'
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
import { Separator } from '@/components/ui/separator'
import { Skeleton } from '@/components/ui/skeleton'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Save, GripVertical, Trash2, Plus, Loader2, Copy, Check, Phone } from 'lucide-react'

type LocationOption = {
  id: string
  label: string
  region_id?: string
  district_guid?: string
}

function CopyBlock({ label, data }: { label: string; data: unknown }) {
  const [copied, setCopied] = useState(false)
  const json = JSON.stringify(data, null, 2)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(json)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      /* ignore */
    }
  }

  return (
    <div>
      <div className="mb-1 flex items-center justify-between">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</p>
        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          {copied ? <Check className="h-3 w-3 text-green-600" /> : <Copy className="h-3 w-3" />}
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
      <pre className="max-h-64 overflow-auto rounded-md border bg-black/5 p-3 text-xs">{json}</pre>
    </div>
  )
}

const MAX_IMAGES = 10

const fetchApartment = async (id: string): Promise<ApartmentAdminList> => {
  const response = await api.get<ApartmentAdminList>(`/property/admin/apartments/${id}/`)
  return response.data
}

const updateApartment = async (id: string, payload: ApartmentAdminUpdate): Promise<ApartmentAdminList> => {
  const response = await api.patch<ApartmentAdminList>(`/property/admin/apartments/${id}/`, payload)
  return response.data
}

const uploadApartmentImage = async (id: string, file: File): Promise<unknown> => {
  const formData = new FormData()
  formData.append('image', file)
  const response = await api.post(`/property/apartments/${id}/images/`, formData)
  return response.data
}

const fetchRegions = async (): Promise<LocationOption[]> => {
  const response = await api.get<RegionList[]>('/property/admin/regions/')
  return (response.data ?? []).map((r) => ({ id: String(r.id ?? ''), label: r.title ?? '' })).filter((i) => i.id)
}

const fetchDistricts = async (): Promise<LocationOption[]> => {
  const response = await api.get<DistrictList[]>('/property/admin/districts/')
  return (response.data ?? [])
    .map((d) => ({
      id: String(d.id ?? ''),
      label: d.title ?? '',
      region_id: String(d.region_id ?? ''),
    }))
    .filter((i) => i.id)
}

const fetchPrefectures = async (): Promise<LocationOption[]> => {
  const response = await api.get<PrefectureList[]>('/property/admin/prefectures/')
  return (response.data ?? [])
    .map((p) => ({
      id: String(p.guid ?? ''),
      label: p.title ?? '',
      district_guid: String(p.district?.guid ?? ''),
    }))
    .filter((i) => i.id)
}

function formatDateTime(value?: string | null) {
  if (!value) return '-'
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return value
  return date.toLocaleString()
}

export default function ApartmentDetailsUpdate() {
  const { propertyId } = useParams<{ propertyId: string }>()
  const { t } = useTranslation()
  const queryClient = useQueryClient()

  const [form, setForm] = useState<ApartmentAdminUpdate>({})
  const [savedMessage, setSavedMessage] = useState<string | null>(null)
  const [imageMessage, setImageMessage] = useState<string | null>(null)
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null)
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const apartmentQuery = useQuery({
    queryKey: ['apartment', propertyId],
    queryFn: () => fetchApartment(propertyId!),
    enabled: Boolean(propertyId),
  })

  const regionsQuery = useQuery({
    queryKey: ['regions'],
    queryFn: fetchRegions,
  })

  const districtsQuery = useQuery({
    queryKey: ['districts'],
    queryFn: fetchDistricts,
  })

  const prefecturesQuery = useQuery({
    queryKey: ['prefectures'],
    queryFn: fetchPrefectures,
  })

  const apartment = apartmentQuery.data

  useEffect(() => {
    if (!apartment) return
    const nextForm: ApartmentAdminUpdate = {
      title: apartment.title ?? '',
      price: apartment.price ?? '',
      currency: (apartment.currency as 'USD' | 'UZS') ?? undefined,
      minimum_weekend_day_stay: false,
      weekend_only_sunday_inclusive: false,
      latitude: apartment.latitude ?? null,
      longitude: apartment.longitude ?? null,
      country: apartment.country ?? null,
      city: apartment.city ?? null,
      region_id: apartment.region_id ? String(apartment.region_id) : null,
      district_id: apartment.district_id ? String(apartment.district_id) : null,
      prefecture_id: apartment.prefecture_id ?? null,
      apartment_number: apartment.apartment_number ?? null,
      home_number: apartment.home_number ?? null,
      entrance_number: apartment.entrance_number ?? null,
      floor_number: apartment.floor_number ?? null,
      pass_code: apartment.pass_code ?? null,
      is_verified: apartment.is_verified ?? false,
      verification_status: apartment.verification_status ?? null,
      is_archived: apartment.is_archived ?? false,
      is_recommended: false,
    }
    setForm(nextForm)
  }, [apartment])

  const updateMutation = useMutation({
    mutationFn: (payload: ApartmentAdminUpdate) => updateApartment(propertyId!, payload),
    onSuccess: (data) => {
      queryClient.setQueryData(['apartment', propertyId], data)
      setSavedMessage(t('common.saved') ?? 'Saved successfully')
      setTimeout(() => setSavedMessage(null), 3000)
    },
  })

  const uploadImageMutation = useMutation({
    mutationFn: (file: File) => uploadApartmentImage(propertyId!, file),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['apartment', propertyId] })
      setImageMessage(t('propertyDetails.messages.imageUpdateSuccess') ?? 'Image updated successfully')
      setTimeout(() => setImageMessage(null), 3000)
    },
    onError: () => {
      setImageMessage(t('propertyDetails.messages.imageUpdateFailed') ?? 'Failed to update image')
    },
  })

  const imagesUpdateMutation = useMutation({
    mutationFn: (updatedImages: string[]) => updateApartment(propertyId!, { img: updatedImages }),
    onMutate: async (updatedImages) => {
      await queryClient.cancelQueries({ queryKey: ['apartment', propertyId] })
      const previous = queryClient.getQueryData<ApartmentAdminList>(['apartment', propertyId])
      queryClient.setQueryData(['apartment', propertyId], (old: ApartmentAdminList | undefined) => {
        if (!old) return old
        return { ...old, img: updatedImages }
      })
      return { previous }
    },
    onError: (_err, _updatedImages, context) => {
      if (context?.previous) {
        queryClient.setQueryData(['apartment', propertyId], context.previous)
      }
      setImageMessage(t('propertyDetails.messages.imageUpdateFailed') ?? 'Failed to update image')
      setTimeout(() => setImageMessage(null), 3000)
    },
  })

  const handleChange = <K extends keyof ApartmentAdminUpdate>(key: K, value: ApartmentAdminUpdate[K]) => {
    setForm((prev) => {
      const next = { ...prev, [key]: value }
      if (key === 'region_id') {
        next.district_id = null
        next.prefecture_id = null
      }
      if (key === 'district_id') {
        next.prefecture_id = null
      }
      return next
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!propertyId) return
    updateMutation.mutate(form)
  }

  const currentImageCount = apartment?.img?.length ?? 0
  const isMaxImages = currentImageCount >= MAX_IMAGES

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    if (isMaxImages) {
      setImageMessage(t('properties.maxImagesReached') ?? `Maximum ${MAX_IMAGES} images allowed.`)
      setTimeout(() => setImageMessage(null), 3000)
      if (fileInputRef.current) fileInputRef.current.value = ''
      return
    }
    uploadImageMutation.mutate(file)
    if (fileInputRef.current) fileInputRef.current.value = ''
  }

  const handleDragStart = (e: React.DragEvent, index: number) => {
    setDraggedIndex(index)
    e.dataTransfer.effectAllowed = 'move'
    e.dataTransfer.setData('text/plain', String(index))
  }

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault()
    e.dataTransfer.dropEffect = 'move'
    if (draggedIndex !== index) {
      setDragOverIndex(index)
    }
  }

  const handleDrop = (e: React.DragEvent, dropIndex: number) => {
    e.preventDefault()
    const dragIndex = Number(e.dataTransfer.getData('text/plain'))
    if (dragIndex === dropIndex || Number.isNaN(dragIndex)) {
      setDraggedIndex(null)
      setDragOverIndex(null)
      return
    }
    const currentImages = apartment?.img ?? []
    const newImages = [...currentImages]
    const [removed] = newImages.splice(dragIndex, 1)
    newImages.splice(dropIndex, 0, removed)
    imagesUpdateMutation.mutate(newImages)
    setDraggedIndex(null)
    setDragOverIndex(null)
  }

  const handleDragEnd = () => {
    setDraggedIndex(null)
    setDragOverIndex(null)
  }

  const handleDeleteImage = (index: number) => {
    const currentImages = apartment?.img ?? []
    imagesUpdateMutation.mutate(currentImages.filter((_, i) => i !== index))
  }

  const filteredDistricts = useMemo(() => {
    const all = districtsQuery.data ?? []
    if (!form.region_id) return all
    return all.filter((d) => d.region_id === form.region_id)
  }, [districtsQuery.data, form.region_id])

  const filteredPrefectures = useMemo(() => {
    const all = prefecturesQuery.data ?? []
    if (!form.district_id) return all
    return all.filter((p) => p.district_guid === form.district_id)
  }, [prefecturesQuery.data, form.district_id])

  if (apartmentQuery.isLoading) {
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

  if (apartmentQuery.error || !apartment) {
    return (
      <div className="h-full overflow-y-auto p-4 md:p-6">
        <p className="text-sm text-red-600">{t('properties.loadFailed', { type: t('properties.tabs.apartments') })}</p>
      </div>
    )
  }

  return (
    <div className="h-full overflow-y-auto p-4 md:p-6">
      <div className="mb-4 flex items-center gap-3">
        <h1 className="text-xl font-bold md:text-2xl">{apartment.title}</h1>
        <div className="ml-auto flex items-center gap-2">
          {apartment.is_verified ? (
            <Badge variant="default">{t('properties.verified')}</Badge>
          ) : (
            <Badge variant="outline">{t('properties.unverified')}</Badge>
          )}
          {apartment.is_archived ? <Badge variant="secondary">{t('properties.archived')}</Badge> : null}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {savedMessage && (
          <div className="rounded-md border bg-green-50 px-4 py-2 text-sm text-green-700">{savedMessage}</div>
        )}
        {updateMutation.isError && (
          <div className="rounded-md border bg-red-50 px-4 py-2 text-sm text-red-700">
            {t('common.saveFailed')}
          </div>
        )}

        <Tabs defaultValue="basic" className="w-full">
          <TabsList>
            <TabsTrigger value="basic">{t('properties.tabs.basic')}</TabsTrigger>
            <TabsTrigger value="pricing">{t('properties.tabs.pricing')}</TabsTrigger>
            <TabsTrigger value="location">{t('properties.tabs.location')}</TabsTrigger>
            <TabsTrigger value="details">{t('properties.tabs.apartmentDetails')}</TabsTrigger>
            <TabsTrigger value="images">{t('properties.tabs.images')}</TabsTrigger>
            <TabsTrigger value="partner">{t('properties.tabs.partner')}</TabsTrigger>
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
                    value={form.title ?? ''}
                    onChange={(e) => handleChange('title', e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="guests">{t('properties.guests')}</Label>
                  <p className="text-sm font-medium">{apartment.guests ?? '-'}</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="rooms">{t('properties.rooms')}</Label>
                  <p className="text-sm font-medium">{apartment.rooms ?? '-'}</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="beds">{t('properties.beds')}</Label>
                  <p className="text-sm font-medium">{apartment.beds ?? '-'}</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bathrooms">{t('properties.bathrooms')}</Label>
                  <p className="text-sm font-medium">{apartment.bathrooms ?? '-'}</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="pricing" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">{t('properties.pricing')}</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="price">{t('propertyDetails.fields.pricePerNight')}</Label>
                  <PriceInput
                    id="price"
                    currency={form.currency ?? 'USD'}
                    value={form.price ?? ''}
                    onChange={(value) => handleChange('price', value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="currency">{t('properties.currency')}</Label>
                  <Select
                    value={form.currency ?? ''}
                    onValueChange={(value) => handleChange('currency', value as 'USD' | 'UZS')}
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
                    value={form.country ?? ''}
                    onChange={(e) => handleChange('country', e.target.value || null)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="city">{t('properties.city')}</Label>
                  <Input
                    id="city"
                    value={form.city ?? ''}
                    onChange={(e) => handleChange('city', e.target.value || null)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="latitude">{t('properties.latitude')}</Label>
                  <Input
                    id="latitude"
                    value={form.latitude ?? ''}
                    onChange={(e) => handleChange('latitude', e.target.value || null)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="longitude">{t('properties.longitude')}</Label>
                  <Input
                    id="longitude"
                    value={form.longitude ?? ''}
                    onChange={(e) => handleChange('longitude', e.target.value || null)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="region_id">{t('properties.region')}</Label>
                  <Select
                    value={form.region_id ?? ''}
                    onValueChange={(value) => handleChange('region_id', value || null)}
                  >
                    <SelectTrigger id="region_id">
                      <SelectValue placeholder={t('properties.selectRegion')} />
                    </SelectTrigger>
                    <SelectContent>
                      {(regionsQuery.data ?? []).map((r) => (
                        <SelectItem key={r.id} value={r.id}>
                          {r.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="district_id">{t('properties.district')}</Label>
                  <Select
                    value={form.district_id ?? ''}
                    onValueChange={(value) => handleChange('district_id', value || null)}
                    disabled={!form.region_id}
                  >
                    <SelectTrigger id="district_id">
                      <SelectValue placeholder={form.region_id ? t('properties.selectDistrict') : t('properties.placeholders.regionFirst')} />
                    </SelectTrigger>
                    <SelectContent>
                      {filteredDistricts.map((d) => (
                        <SelectItem key={d.id} value={d.id}>
                          {d.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="prefecture_id">{t('properties.prefecture')}</Label>
                  <Select
                    value={form.prefecture_id ?? ''}
                    onValueChange={(value) => handleChange('prefecture_id', value || null)}
                    disabled={!form.district_id}
                  >
                    <SelectTrigger id="prefecture_id">
                      <SelectValue placeholder={form.district_id ? t('properties.selectPrefecture') : t('properties.placeholders.districtFirst')} />
                    </SelectTrigger>
                    <SelectContent>
                      {filteredPrefectures.map((p) => (
                        <SelectItem key={p.id} value={p.id}>
                          {p.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="details" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">{t('propertyDetails.sections.apartmentDetails')}</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="apartment_number">{t('propertyDetails.fields.apartmentNumber')}</Label>
                  <Input
                    id="apartment_number"
                    value={form.apartment_number ?? ''}
                    onChange={(e) => handleChange('apartment_number', e.target.value || null)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="home_number">{t('propertyDetails.fields.homeNumber')}</Label>
                  <Input
                    id="home_number"
                    value={form.home_number ?? ''}
                    onChange={(e) => handleChange('home_number', e.target.value || null)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="entrance_number">{t('propertyDetails.fields.entranceNumber')}</Label>
                  <Input
                    id="entrance_number"
                    value={form.entrance_number ?? ''}
                    onChange={(e) => handleChange('entrance_number', e.target.value || null)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="floor_number">{t('propertyDetails.fields.floorNumber')}</Label>
                  <Input
                    id="floor_number"
                    value={form.floor_number ?? ''}
                    onChange={(e) => handleChange('floor_number', e.target.value || null)}
                  />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="pass_code">{t('propertyDetails.fields.passCode')}</Label>
                  <Input
                    id="pass_code"
                    value={form.pass_code ?? ''}
                    onChange={(e) => handleChange('pass_code', e.target.value || null)}
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
                {imageMessage && (
                  <div
                    className={`rounded-md border px-4 py-2 text-sm ${
                      imageMessage.includes(t('propertyDetails.messages.imageUpdateSuccess') ?? 'success')
                        ? 'bg-green-50 text-green-700'
                        : 'bg-red-50 text-red-700'
                    }`}
                  >
                    {imageMessage}
                  </div>
                )}

                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
                  {apartment.img?.map((src, index) => {
                    const isDragged = draggedIndex === index
                    const isDropTarget = dragOverIndex === index && draggedIndex !== index

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
                          isDragged && 'z-0 scale-95 opacity-40 ring-2 ring-primary/50',
                          isDropTarget && 'z-10 scale-105 shadow-lg ring-2 ring-primary',
                          !isDragged && !isDropTarget && 'hover:ring-1 hover:ring-border'
                        )}
                      >
                        <img
                          src={resolveImageUrl(src)}
                          alt={`${apartment.title} ${index + 1}`}
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
                          disabled={imagesUpdateMutation.isPending}
                          className="absolute bottom-1.5 right-1.5 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-black/40 text-white opacity-70 transition-all hover:bg-red-500/90 hover:opacity-100 disabled:opacity-30"
                          title={t('properties.deleteImage') ?? 'Delete image'}
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    )
                  })}

                  {!isMaxImages && (
                    <label
                      className={cn(
                        'flex aspect-[4/3] cursor-pointer flex-col items-center justify-center gap-1.5 rounded-lg border-2 border-dashed border-primary/30 bg-primary/5 transition-colors hover:border-primary/50 hover:bg-primary/10',
                        uploadImageMutation.isPending && 'pointer-events-none opacity-60'
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
                  )}
                </div>

                {isMaxImages && (
                  <p className="text-sm font-medium text-amber-600">
                    {t('properties.maxImagesReached', { count: MAX_IMAGES })}
                  </p>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="partner" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">{t('properties.partnerInfo')}</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {apartment.partner_user ? (
                  <>
                    <div className="space-y-1 md:col-span-2">
                      <div className="flex items-center gap-3">
                        {apartment.partner_user.avatar ? (
                          <img
                            src={resolveImageUrl(apartment.partner_user.avatar)}
                            alt=""
                            className="h-12 w-12 rounded-full object-cover"
                          />
                        ) : (
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted text-sm font-bold text-muted-foreground">
                            {(apartment.partner_user.first_name?.[0] ?? apartment.partner_user.username?.[0] ?? '?').toUpperCase()}
                          </div>
                        )}
                        <div>
                          <p className="font-medium">
                            {[apartment.partner_user.first_name, apartment.partner_user.last_name]
                              .filter(Boolean)
                              .join(' ') || apartment.partner_user.username || '-'}
                          </p>
                          <p className="text-xs text-muted-foreground">@{apartment.partner_user.username}</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <Label className="text-xs text-muted-foreground">{t('properties.partnerId')}</Label>
                      <p className="text-sm font-medium">{apartment.partner_user.id}</p>
                    </div>

                    <div className="space-y-1">
                      <Label className="text-xs text-muted-foreground">{t('properties.partnerRole')}</Label>
                      <p className="text-sm font-medium">{apartment.partner_user.role ?? '-'}</p>
                    </div>

                    <div className="space-y-1">
                      <Label className="text-xs text-muted-foreground">{t('properties.partnerPhone')}</Label>
                      {apartment.partner_user.phone_number ? (
                        <a
                          href={`tel:${apartment.partner_user.phone_number}`}
                          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                        >
                          <Phone className="h-3.5 w-3.5" />
                          {apartment.partner_user.phone_number}
                        </a>
                      ) : (
                        <p className="text-sm font-medium">-</p>
                      )}
                    </div>

                    <div className="space-y-1">
                      <Label className="text-xs text-muted-foreground">{t('properties.partnerEmail')}</Label>
                      <p className="text-sm font-medium">{apartment.partner_user.email ?? '-'}</p>
                    </div>

                    <div className="flex items-center gap-2">
                      <Badge variant={apartment.partner_user.is_active ? 'default' : 'secondary'}>
                        {apartment.partner_user.is_active ? t('properties.partnerActive') : t('properties.partnerInactive')}
                      </Badge>
                      {apartment.partner_user.is_verified && (
                        <Badge variant="outline">{t('properties.partnerVerified')}</Badge>
                      )}
                    </div>
                  </>
                ) : (
                  <p className="text-sm text-muted-foreground md:col-span-2">
                    {t('properties.noPartner')}
                  </p>
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
                <div className="flex items-center gap-2">
                  <Checkbox
                    id="is_verified"
                    checked={form.is_verified ?? false}
                    onCheckedChange={(v) => handleChange('is_verified', Boolean(v))}
                  />
                  <Label htmlFor="is_verified" className="cursor-pointer">
                    {t('properties.isVerified')}
                  </Label>
                </div>

                <div className="flex items-center gap-2">
                  <Checkbox
                    id="is_archived"
                    checked={form.is_archived ?? false}
                    onCheckedChange={(v) => handleChange('is_archived', Boolean(v))}
                  />
                  <Label htmlFor="is_archived" className="cursor-pointer">
                    {t('properties.isArchived')}
                  </Label>
                </div>

                <div className="flex items-center gap-2">
                  <Checkbox
                    id="is_recommended"
                    checked={form.is_recommended ?? false}
                    onCheckedChange={(v) => handleChange('is_recommended', Boolean(v))}
                  />
                  <Label htmlFor="is_recommended" className="cursor-pointer">
                    {t('properties.isRecommended')}
                  </Label>
                </div>

                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="verification_status">{t('properties.verificationStatus')}</Label>
                  <Select
                    value={form.verification_status ?? ''}
                    onValueChange={(value) => handleChange('verification_status', value || null)}
                  >
                    <SelectTrigger id="verification_status">
                      <SelectValue placeholder={t('properties.selectVerificationStatus')} />
                    </SelectTrigger>
                    <SelectContent>
                      {(['pending', 'approved', 'rejected', 'underReview'] as const).map((status) => (
                        <SelectItem key={status} value={status}>
                          {t(`propertyDetails.status.${status}`)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <Separator className="md:col-span-2" />

                <div className="space-y-1 text-sm text-muted-foreground md:col-span-2">
                  <p>
                    <span className="font-medium">GUID:</span> {apartment.guid}
                  </p>
                  <p>
                    <span className="font-medium">{t('properties.createdAt')}:</span>{' '}
                    {formatDateTime(apartment.created_at)}
                  </p>
                  <p>
                    <span className="font-medium">{t('properties.averageRating')}:</span>{' '}
                    {apartment.average_rating ?? '-'}
                  </p>
                  <p>
                    <span className="font-medium">{t('properties.propertyType')}:</span>{' '}
                    {apartment.property_type?.uz ?? apartment.property_type?.ru ?? apartment.property_type?.en ?? '-'}
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="flex items-center gap-3">
          <Button type="submit" disabled={updateMutation.isPending}>
            <Save className="mr-2 h-4 w-4" />
            {updateMutation.isPending ? t('common.saving') : t('common.save')}
          </Button>
        </div>

        {/* Debug / Observability panel */}
        <details className="rounded-lg border bg-muted/30">
          <summary className="cursor-pointer px-4 py-2 text-sm font-medium text-muted-foreground">
            {t('propertyDetails.raw.title') ?? 'Raw Property Data'} (Debug)
          </summary>
          <div className="space-y-3 p-4 pt-0">
            <CopyBlock label="API Response (ApartmentAdminList)" data={apartment} />
            <CopyBlock label="Current Form State" data={form} />
          </div>
        </details>
      </form>
    </div>
  )
}
