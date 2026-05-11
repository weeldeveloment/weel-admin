import { useEffect, useMemo, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { useTranslation } from 'react-i18next'
import { api } from '@/lib/api'
import { resolveImageUrl, cn } from '@/lib/utils'
import type {
  CottageAdminList,
  CottageAdminUpdate,
  RegionList,
  DistrictList,
  PrefectureList,
} from '@/types/weel-openapi'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
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

type CottageForm = CottageAdminUpdate & {
  country?: string | null
  city?: string | null
  latitude?: string | null
  longitude?: string | null
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

const fetchCottage = async (id: string): Promise<CottageAdminList> => {
  const response = await api.get<CottageAdminList>(`/property/admin/cottages/${id}/`)
  console.log('[CottageDetailsUpdate] API response:', response.data)
  console.log('[CottageDetailsUpdate] guests:', response.data.guests, 'rooms:', response.data.rooms, 'beds:', response.data.beds, 'bathrooms:', response.data.bathrooms)
  return response.data
}

const updateCottage = async (id: string, payload: CottageAdminUpdate): Promise<CottageAdminList> => {
  const response = await api.patch<CottageAdminList>(`/property/admin/cottages/${id}/`, payload)
  return response.data
}

const uploadCottageImage = async (id: string, file: File): Promise<unknown> => {
  const formData = new FormData()
  formData.append('image', file)
  const response = await api.post(`/property/admin/cottages/${id}/images/`, formData)
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

export default function CottageDetailsUpdate() {
  const { propertyId } = useParams<{ propertyId: string }>()
  const { t } = useTranslation()
  const queryClient = useQueryClient()

  const [form, setForm] = useState<CottageForm>({})
  const [dirtyFields, setDirtyFields] = useState<Set<string>>(new Set())
  const [savedMessage, setSavedMessage] = useState<string | null>(null)
  const [imageMessage, setImageMessage] = useState<string | null>(null)
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null)
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const cottageQuery = useQuery({
    queryKey: ['cottage', propertyId],
    queryFn: () => fetchCottage(propertyId!),
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

  const cottage = cottageQuery.data

  useEffect(() => {
    if (!cottage) return
    console.log('[CottageDetailsUpdate] Initializing form from cottage:', {
      guests: cottage.guests,
      rooms: cottage.rooms,
      beds: cottage.beds,
      bathrooms: cottage.bathrooms,
      full: cottage,
    })
    const nextForm: CottageForm = {
      title: cottage.title ?? '',
      price_per_person: cottage.price_per_person ?? '',
      price_on_working_days: cottage.price_on_working_days ?? '',
      price_on_weekends: cottage.price_on_weekends ?? '',
      currency: (cottage.currency as 'USD' | 'UZS') ?? undefined,
      weekend_only_sunday_inclusive: (cottage as any).weekend_only_sunday_inclusive ?? false,
      guests: cottage.guests ?? null,
      rooms: cottage.rooms ?? null,
      beds: cottage.beds ?? null,
      bathrooms: cottage.bathrooms ?? null,
      country: cottage.country ?? null,
      city: cottage.city ?? null,
      latitude: cottage.latitude ?? null,
      longitude: cottage.longitude ?? null,
      region_id: cottage.region?.id ? String(cottage.region.id) : null,
      district_id: cottage.district?.id ? String(cottage.district.id) : null,
      prefecture_id: cottage.prefecture_id ?? null,
      is_verified: cottage.is_verified ?? false,
      verification_status: cottage.verification_status ?? null,
      is_archived: cottage.is_archived ?? false,
      is_recommended: (cottage as any).is_recommended ?? false,
    }
    console.log('[CottageDetailsUpdate] Form initialized:', nextForm)
    setForm(nextForm)
    setDirtyFields(new Set())
  }, [cottage?.guid])

  const updateMutation = useMutation({
    mutationFn: (payload: CottageAdminUpdate) => updateCottage(propertyId!, payload),
    onSuccess: (data) => {
      queryClient.setQueryData(['cottage', propertyId], data)
      setSavedMessage(t('common.saved') ?? 'Saved successfully')
      setTimeout(() => setSavedMessage(null), 3000)
      setDirtyFields(new Set())
    },
  })

  const uploadImageMutation = useMutation({
    mutationFn: (file: File) => uploadCottageImage(propertyId!, file),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cottage', propertyId] })
      setImageMessage(t('propertyDetails.messages.imageUpdateSuccess') ?? 'Image updated successfully')
      setTimeout(() => setImageMessage(null), 3000)
    },
    onError: () => {
      setImageMessage(t('propertyDetails.messages.imageUpdateFailed') ?? 'Failed to update image')
    },
  })

  const imagesUpdateMutation = useMutation({
    mutationFn: (updatedImages: string[]) => updateCottage(propertyId!, { img: updatedImages }),
    onMutate: async (updatedImages) => {
      await queryClient.cancelQueries({ queryKey: ['cottage', propertyId] })
      const previous = queryClient.getQueryData<CottageAdminList>(['cottage', propertyId])
      queryClient.setQueryData(['cottage', propertyId], (old: CottageAdminList | undefined) => {
        if (!old) return old
        return { ...old, img: updatedImages }
      })
      return { previous }
    },
    onError: (_err, _updatedImages, context) => {
      if (context?.previous) {
        queryClient.setQueryData(['cottage', propertyId], context.previous)
      }
      setImageMessage(t('propertyDetails.messages.imageUpdateFailed') ?? 'Failed to update image')
      setTimeout(() => setImageMessage(null), 3000)
    },
  })

  const handleChange = <K extends keyof CottageForm>(key: K, value: CottageForm[K]) => {
    setDirtyFields((prev) => {
      const next = new Set(prev)
      next.add(key as string)
      if (key === 'region_id') {
        next.add('district_id')
        next.add('prefecture_id')
      }
      if (key === 'district_id') {
        next.add('prefecture_id')
      }
      return next
    })
    setForm((prev) => {
      const next = { ...prev, [key]: value }
      // Cascade clear child selections when parent changes
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

  const handleNumberChange = (key: keyof CottageForm, value: string) => {
    const trimmed = value.trim()
    if (trimmed === '') {
      console.log(`[CottageDetailsUpdate] ${key} cleared`)
      handleChange(key, null)
      return
    }
    const num = Number(trimmed)
    const final = Number.isFinite(num) ? num : null
    console.log(`[CottageDetailsUpdate] ${key} changed:`, final)
    handleChange(key, final)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!propertyId) return
    const payload: Partial<CottageForm> = {}
    dirtyFields.forEach((key) => {
      payload[key as keyof CottageForm] = form[key as keyof CottageForm] as any
    })
    console.log('[CottageDetailsUpdate] Submitting dirty payload:', payload)
    updateMutation.mutate(payload as CottageAdminUpdate)
  }

  const currentImageCount = cottage?.img?.length ?? 0
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
    const currentImages = cottage?.img ?? []
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
    const currentImages = cottage?.img ?? []
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

  if (cottageQuery.isLoading) {
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

  if (cottageQuery.error || !cottage) {
    return (
      <div className="h-full overflow-y-auto p-4 md:p-6">
        <p className="text-sm text-red-600">{t('properties.loadFailed', { type: t('properties.tabs.cottages') })}</p>
      </div>
    )
  }

  return (
    <div className="h-full overflow-y-auto p-4 md:p-6">
      <div className="mb-4 flex items-center gap-3">
        <h1 className="text-xl font-bold md:text-2xl">{cottage.title}</h1>
        <div className="ml-auto flex items-center gap-2">
          {cottage.is_verified ? (
            <Badge variant="default">{t('properties.verified')}</Badge>
          ) : (
            <Badge variant="outline">{t('properties.unverified')}</Badge>
          )}
          {cottage.is_archived ? <Badge variant="secondary">{t('properties.archived')}</Badge> : null}
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
                  <Input
                    id="guests"
                    type="number"
                    value={form.guests ?? ''}
                    onChange={(e) => handleNumberChange('guests', e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="rooms">{t('properties.rooms')}</Label>
                  <Input
                    id="rooms"
                    type="number"
                    value={form.rooms ?? ''}
                    onChange={(e) => handleNumberChange('rooms', e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="beds">{t('properties.beds')}</Label>
                  <Input
                    id="beds"
                    type="number"
                    value={form.beds ?? ''}
                    onChange={(e) => handleNumberChange('beds', e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bathrooms">{t('properties.bathrooms')}</Label>
                  <Input
                    id="bathrooms"
                    type="number"
                    value={form.bathrooms ?? ''}
                    onChange={(e) => handleNumberChange('bathrooms', e.target.value)}
                  />
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
                  <Label htmlFor="price_per_person">{t('properties.pricePerPerson')}</Label>
                  <Input
                    id="price_per_person"
                    type="number"
                    min="0"
                    step="0.01"
                    value={form.price_per_person ?? ''}
                    onChange={(e) => handleChange('price_per_person', e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="price_on_working_days">{t('properties.priceWorkingDays')}</Label>
                  <Input
                    id="price_on_working_days"
                    type="number"
                    min="0"
                    step="0.01"
                    value={form.price_on_working_days ?? ''}
                    onChange={(e) => handleChange('price_on_working_days', e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="price_on_weekends">{t('properties.priceWeekends')}</Label>
                  <Input
                    id="price_on_weekends"
                    type="number"
                    min="0"
                    step="0.01"
                    value={form.price_on_weekends ?? ''}
                    onChange={(e) => handleChange('price_on_weekends', e.target.value)}
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

                <div className="flex items-center gap-2 md:col-span-2">
                  <Checkbox
                    id="weekend_only_sunday_inclusive"
                    checked={form.weekend_only_sunday_inclusive ?? false}
                    onCheckedChange={(v) => handleChange('weekend_only_sunday_inclusive', Boolean(v))}
                  />
                  <Label htmlFor="weekend_only_sunday_inclusive" className="cursor-pointer">
                    {t('properties.weekendSundayInclusive')}
                  </Label>
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
                  {cottage.img?.map((src, index) => {
                    const isDragged = draggedIndex === index
                    const isDropTarget = dragOverIndex === index && draggedIndex !== index

                    return (
                      <div
                        key={`${src}-${index}`}
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
                          alt={`${cottage.title} ${index + 1}`}
                          className="pointer-events-none h-full w-full object-cover"
                          draggable={false}
                        />

                        {/* Order badge */}
                        <div className="absolute left-1.5 top-1.5 z-10 flex h-5 w-5 items-center justify-center rounded-full bg-black/60 text-[10px] font-bold text-white">
                          {index + 1}
                        </div>

                        {/* Drag handle - desktop hover */}
                        <div className="absolute right-1.5 top-1.5 z-10 opacity-0 transition-opacity group-hover:opacity-100">
                          <div
                            className="flex h-7 w-7 cursor-grab items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition-colors hover:bg-black/60 active:cursor-grabbing"
                            title={t('properties.dragToReorder') ?? 'Drag to reorder'}
                          >
                            <GripVertical className="h-3.5 w-3.5" />
                          </div>
                        </div>

                        {/* Delete button - always visible, subtle */}
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

                  {/* Add image card */}
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
                {cottage.partner_user ? (
                  <>
                    <div className="space-y-1 md:col-span-2">
                      <div className="flex items-center gap-3">
                        {cottage.partner_user.avatar ? (
                          <img
                            src={resolveImageUrl(cottage.partner_user.avatar)}
                            alt=""
                            className="h-12 w-12 rounded-full object-cover"
                          />
                        ) : (
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted text-sm font-bold text-muted-foreground">
                            {(cottage.partner_user.first_name?.[0] ?? cottage.partner_user.username?.[0] ?? '?').toUpperCase()}
                          </div>
                        )}
                        <div>
                          <p className="font-medium">
                            {[cottage.partner_user.first_name, cottage.partner_user.last_name]
                              .filter(Boolean)
                              .join(' ') || cottage.partner_user.username || '-'}
                          </p>
                          <p className="text-xs text-muted-foreground">@{cottage.partner_user.username}</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <Label className="text-xs text-muted-foreground">{t('properties.partnerId')}</Label>
                      <p className="text-sm font-medium">{cottage.partner_user.id}</p>
                    </div>

                    <div className="space-y-1">
                      <Label className="text-xs text-muted-foreground">{t('properties.partnerRole')}</Label>
                      <p className="text-sm font-medium">{cottage.partner_user.role ?? '-'}</p>
                    </div>

                    <div className="space-y-1">
                      <Label className="text-xs text-muted-foreground">{t('properties.partnerPhone')}</Label>
                      {cottage.partner_user.phone_number ? (
                        <a
                          href={`tel:${cottage.partner_user.phone_number}`}
                          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                        >
                          <Phone className="h-3.5 w-3.5" />
                          {cottage.partner_user.phone_number}
                        </a>
                      ) : (
                        <p className="text-sm font-medium">-</p>
                      )}
                    </div>

                    <div className="space-y-1">
                      <Label className="text-xs text-muted-foreground">{t('properties.partnerEmail')}</Label>
                      <p className="text-sm font-medium">{cottage.partner_user.email ?? '-'}</p>
                    </div>

                    <div className="flex items-center gap-2">
                      <Badge variant={cottage.partner_user.is_active ? 'default' : 'secondary'}>
                        {cottage.partner_user.is_active ? t('properties.partnerActive') : t('properties.partnerInactive')}
                      </Badge>
                      {cottage.partner_user.is_verified && (
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
                      {([
                        { value: 'waiting', label: t('propertyDetails.status.pending') ?? 'Waiting' },
                        { value: 'accepted', label: t('propertyDetails.status.approved') ?? 'Accepted' },
                        { value: 'rejected', label: t('propertyDetails.status.rejected') ?? 'Rejected' },
                      ]).map((status) => (
                        <SelectItem key={status.value} value={status.value}>
                          {status.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <Separator className="md:col-span-2" />

                <div className="space-y-1 text-sm text-muted-foreground md:col-span-2">
                  <p>
                    <span className="font-medium">GUID:</span> {cottage.guid}
                  </p>
                  <p>
                    <span className="font-medium">{t('properties.createdAt')}:</span>{' '}
                    {formatDateTime(cottage.created_at)}
                  </p>
                  <p>
                    <span className="font-medium">{t('properties.averageRating')}:</span>{' '}
                    {cottage.average_rating ?? '-'}
                  </p>
                  <p>
                    <span className="font-medium">{t('properties.propertyType')}:</span>{' '}
                    {cottage.property_type?.uz ?? cottage.property_type?.ru ?? cottage.property_type?.en ?? '-'}
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="flex items-center gap-3">
          <Button type="submit" disabled={updateMutation.isPending || dirtyFields.size === 0}>
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
            <CopyBlock label="API Response (CottageAdminList)" data={cottage} />
            <CopyBlock label="Current Form State" data={form} />
          </div>
        </details>
      </form>
    </div>
  )
}
