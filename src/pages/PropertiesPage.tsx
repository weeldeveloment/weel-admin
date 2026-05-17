import { useEffect, useMemo, useRef, useState } from 'react'
import { useInfiniteQuery } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Image, LayoutGrid, List, Plus, RotateCcw } from 'lucide-react'
import { api } from '@/lib/api'
import { useTranslation } from 'react-i18next'
import { PropertyItem, PropertyListResult, PaginatedResponse } from '@/types'
import { formatDate } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'

type PropertyTab = 'cottages' | 'apartments'
type ViewMode = 'grid' | 'list'
type VerifiedFilter = 'all' | 'verified' | 'unverified'

const extractListResult = (payload: unknown): PropertyListResult => {
  if (Array.isArray(payload)) {
    return {
      items: payload as PropertyItem[],
      count: payload.length,
      next: null,
      previous: null,
    }
  }

  if (payload && typeof payload === 'object' && Array.isArray((payload as PaginatedResponse<PropertyItem>).results)) {
    const parsed = payload as PaginatedResponse<PropertyItem>
    return {
      items: parsed.results ?? [],
      count: typeof parsed.count === 'number' ? parsed.count : (parsed.results?.length ?? 0),
      next: parsed.next ?? null,
      previous: parsed.previous ?? null,
    }
  }

  return {
    items: [],
    count: 0,
    next: null,
    previous: null,
  }
}

const fetchPropertiesByType = async (
  type: PropertyTab,
  page: number,
  search: string
): Promise<PropertyListResult> => {
  const endpoint = '/property/admin/all/'
  const propertyTypeValue = type === 'cottages' ? 'cottage' : 'apartment'
  const params: Record<string, string | number> = {
    page,
    page_size: 12,
    property_type: propertyTypeValue,
  }
  if (search) params.search = search
  const response = await api.get(endpoint, { params })
  return extractListResult(response.data)
}

const getNextPageFromUrl = (nextUrl: string | null): number | undefined => {
  if (!nextUrl) return undefined

  try {
    const parsed = new URL(nextUrl, window.location.origin)
    const page = parsed.searchParams.get('page')
    if (!page) return undefined

    const asNumber = Number(page)
    return Number.isFinite(asNumber) && asNumber > 0 ? asNumber : undefined
  } catch {
    return undefined
  }
}

function PropertyCard({
  item,
  viewMode,
  type,
}: {
  item: PropertyItem
  viewMode: ViewMode
  type: PropertyTab
}) {
  const navigate = useNavigate()
  const { t } = useTranslation()

  const handleClick = () => {
    const propertyId = item.guid
    if (!propertyId) return
    navigate(`/properties/${type}/${propertyId}`)
  }

  const verifiedBadge = (
    <Badge
      variant={item.is_verified ? 'default' : 'secondary'}
      className="text-[10px] px-1.5 py-0"
    >
      {item.is_verified ? t('properties.verified') : t('properties.unverified')}
    </Badge>
  )

  const dateText = item.created_at ? (
    <span className="text-[10px] text-muted-foreground">
      {formatDate(item.created_at)}
    </span>
  ) : null

  if (viewMode === 'list') {
    return (
      <button
        type="button"
        className="group flex w-full overflow-hidden rounded-xl border text-left text-sm transition-all hover:shadow-md"
        onClick={handleClick}
      >
        <div className="h-24 w-32 shrink-0 bg-muted sm:h-28 sm:w-40">
          {item.img?.[0] ? (
            <img
              src={item.img[0]}
              alt={item.title}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-muted">
              <Image className="h-8 w-8 text-muted-foreground" />
            </div>
          )}
        </div>
        <Card className="flex flex-1 flex-col justify-center rounded-none border-0 border-l shadow-none">
          <CardContent className="space-y-1.5 p-4">
            <p className="line-clamp-1 font-semibold">{item.title}</p>
            <p className="text-xs text-muted-foreground">{item.city}</p>
            <div className="flex items-center gap-2">
              {verifiedBadge}
              {dateText}
            </div>
          </CardContent>
        </Card>
      </button>
    )
  }

  return (
    <button
      type="button"
      className="group w-full overflow-hidden rounded-xl border text-left text-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
      onClick={handleClick}
    >
      <div className="aspect-[4/3] w-full bg-muted">
        {item.img?.[0] ? (
          <img
            src={item.img[0]}
            alt={item.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-muted">
            <Image className="h-10 w-10 text-muted-foreground" />
          </div>
        )}
      </div>
      <Card className="rounded-none border-0 border-t shadow-none">
        <CardContent className="space-y-1.5 p-4">
          <p className="line-clamp-1 font-semibold">{item.title}</p>
          <p className="text-xs text-muted-foreground">{item.city}</p>
          <div className="flex items-center justify-between pt-0.5">
            {verifiedBadge}
            {dateText}
          </div>
        </CardContent>
      </Card>
    </button>
  )
}

export default function PropertiesPage() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState<PropertyTab>('cottages')
  const [createDialogOpen, setCreateDialogOpen] = useState(false)
  const [createType, setCreateType] = useState<PropertyTab>('cottages')
  const [viewMode, setViewMode] = useState<ViewMode>('grid')
  const [cottagesSearch, setCottagesSearch] = useState('')
  const [apartmentsSearch, setApartmentsSearch] = useState('')
  const [cottagesVerified, setCottagesVerified] = useState<VerifiedFilter>('all')
  const [apartmentsVerified, setApartmentsVerified] = useState<VerifiedFilter>('all')
  const [cottagesDateFrom, setCottagesDateFrom] = useState('')
  const [cottagesDateTo, setCottagesDateTo] = useState('')
  const [apartmentsDateFrom, setApartmentsDateFrom] = useState('')
  const [apartmentsDateTo, setApartmentsDateTo] = useState('')
  const cottagesLoadMoreRef = useRef<HTMLDivElement | null>(null)
  const apartmentsLoadMoreRef = useRef<HTMLDivElement | null>(null)

  const cottagesQuery = useInfiniteQuery({
    queryKey: ['properties', 'cottages', cottagesSearch],
    queryFn: ({ pageParam }) => fetchPropertiesByType('cottages', pageParam, cottagesSearch),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => getNextPageFromUrl(lastPage.next),
    enabled: activeTab === 'cottages',
  })

  const apartmentsQuery = useInfiniteQuery({
    queryKey: ['properties', 'apartments', apartmentsSearch],
    queryFn: ({ pageParam }) => fetchPropertiesByType('apartments', pageParam, apartmentsSearch),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => getNextPageFromUrl(lastPage.next),
    enabled: activeTab === 'apartments',
  })

  const cottageItems = useMemo(
    () => cottagesQuery.data?.pages.flatMap((page) => page.items) ?? [],
    [cottagesQuery.data]
  )

  const apartmentItems = useMemo(
    () => apartmentsQuery.data?.pages.flatMap((page) => page.items) ?? [],
    [apartmentsQuery.data]
  )

  const filteredCottageItems = useMemo(() => {
    return cottageItems.filter((item) => {
      if (cottagesVerified !== 'all') {
        const isVerified = item.is_verified ?? false
        if (cottagesVerified === 'verified' && !isVerified) return false
        if (cottagesVerified === 'unverified' && isVerified) return false
      }
      const itemDate = item.created_at?.split('T')[0]
      if (cottagesDateFrom && itemDate && itemDate < cottagesDateFrom) return false
      if (cottagesDateTo && itemDate && itemDate > cottagesDateTo) return false
      return true
    })
  }, [cottageItems, cottagesVerified, cottagesDateFrom, cottagesDateTo])

  const filteredApartmentItems = useMemo(() => {
    return apartmentItems.filter((item) => {
      if (apartmentsVerified !== 'all') {
        const isVerified = item.is_verified ?? false
        if (apartmentsVerified === 'verified' && !isVerified) return false
        if (apartmentsVerified === 'unverified' && isVerified) return false
      }
      const itemDate = item.created_at?.split('T')[0]
      if (apartmentsDateFrom && itemDate && itemDate < apartmentsDateFrom) return false
      if (apartmentsDateTo && itemDate && itemDate > apartmentsDateTo) return false
      return true
    })
  }, [apartmentItems, apartmentsVerified, apartmentsDateFrom, apartmentsDateTo])

  useEffect(() => {
    if (activeTab !== 'cottages') return
    if (!cottagesLoadMoreRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0]
        if (!target.isIntersecting) return
        if (!cottagesQuery.hasNextPage || cottagesQuery.isFetchingNextPage) return
        void cottagesQuery.fetchNextPage()
      },
      { rootMargin: '200px' }
    )

    observer.observe(cottagesLoadMoreRef.current)
    return () => observer.disconnect()
  }, [activeTab, cottagesQuery.hasNextPage, cottagesQuery.isFetchingNextPage, cottagesQuery.fetchNextPage])

  useEffect(() => {
    if (activeTab !== 'apartments') return
    if (!apartmentsLoadMoreRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0]
        if (!target.isIntersecting) return
        if (!apartmentsQuery.hasNextPage || apartmentsQuery.isFetchingNextPage) return
        void apartmentsQuery.fetchNextPage()
      },
      { rootMargin: '200px' }
    )

    observer.observe(apartmentsLoadMoreRef.current)
    return () => observer.disconnect()
  }, [activeTab, apartmentsQuery.hasNextPage, apartmentsQuery.isFetchingNextPage, apartmentsQuery.fetchNextPage])

  const listContainerClass = viewMode === 'grid'
    ? 'grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3'
    : 'flex flex-col gap-3'

  const openCreateDialog = (initialType: PropertyTab) => {
    setCreateType(initialType)
    setCreateDialogOpen(true)
  }

  const handleCreateProperty = () => {
    setCreateDialogOpen(false)
    navigate(`/properties/${createType}/create`)
  }

  return (
    <div className="h-full overflow-y-auto p-4 md:p-6">
      <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as PropertyTab)} className="space-y-4">
        <TabsList>
          <TabsTrigger value="cottages">{t('properties.tabs.cottages')}</TabsTrigger>
          <TabsTrigger value="apartments">{t('properties.tabs.apartments')}</TabsTrigger>
        </TabsList>

        <TabsContent value="cottages" className="space-y-4">
          <div className="space-y-2">
            <p className="text-sm font-medium text-foreground">{t('properties.filter.label')}</p>
            <div className="flex flex-wrap items-end gap-3">
              <div className="flex flex-1 flex-wrap items-end gap-3">
                <div className="flex flex-col gap-1">
                  <Label className="text-xs text-muted-foreground">{t('properties.searchLabel')}</Label>
                  <Input
                    type="text"
                    placeholder={t('properties.searchPlaceholder', { type: t('properties.tabs.cottages') })}
                    value={cottagesSearch}
                    onChange={(e) => setCottagesSearch(e.target.value)}
                    className="w-52"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <Label className="text-xs text-muted-foreground">{t('properties.filter.verified')}</Label>
                  <Select value={cottagesVerified} onValueChange={(v) => setCottagesVerified(v as VerifiedFilter)}>
                    <SelectTrigger className="w-44">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">{t('properties.filter.all')}</SelectItem>
                      <SelectItem value="verified">{t('properties.verified')}</SelectItem>
                      <SelectItem value="unverified">{t('properties.unverified')}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex flex-col gap-1">
                  <Label className="text-xs text-muted-foreground">{t('properties.filter.dateFrom')}</Label>
                  <Input type="date" value={cottagesDateFrom} onChange={(e) => setCottagesDateFrom(e.target.value)} className="w-40" />
                </div>
                <div className="flex flex-col gap-1">
                  <Label className="text-xs text-muted-foreground">{t('properties.filter.dateTo')}</Label>
                  <Input type="date" value={cottagesDateTo} onChange={(e) => setCottagesDateTo(e.target.value)} className="w-40" />
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-9 px-2 text-muted-foreground"
                  onClick={() => {
                    setCottagesSearch('')
                    setCottagesVerified('all')
                    setCottagesDateFrom('')
                    setCottagesDateTo('')
                  }}
                >
                  <RotateCcw className="h-4 w-4" />
                  {t('properties.filter.reset')}
                </Button>
              </div>
            <div className="flex items-center gap-3">
              <Button
                size="sm"
                className="hidden sm:inline-flex"
                onClick={() => openCreateDialog('cottages')}
              >
                <Plus className="h-4 w-4" />
                {t('properties.createProperty')}
              </Button>
              <div className="flex items-center rounded-md border">
                <button
                  type="button"
                  onClick={() => setViewMode('grid')}
                  className={`inline-flex items-center justify-center p-2 transition-colors ${viewMode === 'grid' ? 'bg-accent text-accent-foreground' : 'text-muted-foreground hover:text-foreground'}`}
                  title={t('properties.viewMode.grid')}
                >
                  <LayoutGrid className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode('list')}
                  className={`inline-flex items-center justify-center p-2 transition-colors ${viewMode === 'list' ? 'bg-accent text-accent-foreground' : 'text-muted-foreground hover:text-foreground'}`}
                  title={t('properties.viewMode.list')}
                >
                  <List className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
          </div>
          {cottagesQuery.isLoading ? <p className="text-sm text-muted-foreground">{t('properties.loading', { type: t('properties.tabs.cottages') })}</p> : null}
          {cottagesQuery.isError ? <p className="text-sm text-red-600">{t('properties.loadFailed', { type: t('properties.tabs.cottages') })}</p> : null}
          {cottagesQuery.isSuccess && !cottagesQuery.isFetchingNextPage && filteredCottageItems.length === 0 ? (
            <p className="text-sm text-muted-foreground">{t('properties.noFound', { type: t('properties.tabs.cottages') })}</p>
          ) : null}
          {filteredCottageItems.length > 0 ? (
            <ul className={listContainerClass}>
              {filteredCottageItems.map((item) => (
                <li key={item.guid}>
                  <PropertyCard item={item} viewMode={viewMode} type="cottages" />
                </li>
              ))}
            </ul>
          ) : null}
          <div ref={cottagesLoadMoreRef} className="h-4" />
          {cottagesQuery.isFetchingNextPage ? <p className="mt-3 text-xs text-muted-foreground">{t('properties.loadMore', { type: t('properties.tabs.cottages') })}</p> : null}
        </TabsContent>

        <TabsContent value="apartments" className="space-y-4">
          <div className="space-y-2">
            <p className="text-sm font-medium text-foreground">{t('properties.filter.label')}</p>
            <div className="flex flex-wrap items-end gap-3">
              <div className="flex flex-1 flex-wrap items-end gap-3">
                <div className="flex flex-col gap-1">
                  <Label className="text-xs text-muted-foreground">{t('properties.searchLabel')}</Label>
                  <Input
                    type="text"
                    placeholder={t('properties.searchPlaceholder', { type: t('properties.tabs.apartments') })}
                    value={apartmentsSearch}
                    onChange={(e) => setApartmentsSearch(e.target.value)}
                    className="w-52"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <Label className="text-xs text-muted-foreground">{t('properties.filter.verified')}</Label>
                  <Select value={apartmentsVerified} onValueChange={(v) => setApartmentsVerified(v as VerifiedFilter)}>
                    <SelectTrigger className="w-44">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">{t('properties.filter.all')}</SelectItem>
                      <SelectItem value="verified">{t('properties.verified')}</SelectItem>
                      <SelectItem value="unverified">{t('properties.unverified')}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex flex-col gap-1">
                  <Label className="text-xs text-muted-foreground">{t('properties.filter.dateFrom')}</Label>
                  <Input type="date" value={apartmentsDateFrom} onChange={(e) => setApartmentsDateFrom(e.target.value)} className="w-40" />
                </div>
                <div className="flex flex-col gap-1">
                  <Label className="text-xs text-muted-foreground">{t('properties.filter.dateTo')}</Label>
                  <Input type="date" value={apartmentsDateTo} onChange={(e) => setApartmentsDateTo(e.target.value)} className="w-40" />
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-9 px-2 text-muted-foreground"
                  onClick={() => {
                    setApartmentsSearch('')
                    setApartmentsVerified('all')
                    setApartmentsDateFrom('')
                    setApartmentsDateTo('')
                  }}
                >
                  <RotateCcw className="h-4 w-4" />
                  {t('properties.filter.reset')}
                </Button>
              </div>
              <div className="flex items-center gap-3">
                <Button
                  size="sm"
                  className="hidden sm:inline-flex"
                  onClick={() => openCreateDialog('apartments')}
                >
                  <Plus className="h-4 w-4" />
                  {t('properties.createProperty')}
                </Button>
                <div className="flex items-center rounded-md border">
                  <button
                    type="button"
                    onClick={() => setViewMode('grid')}
                    className={`inline-flex items-center justify-center p-2 transition-colors ${viewMode === 'grid' ? 'bg-accent text-accent-foreground' : 'text-muted-foreground hover:text-foreground'}`}
                    title={t('properties.viewMode.grid')}
                  >
                    <LayoutGrid className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setViewMode('list')}
                    className={`inline-flex items-center justify-center p-2 transition-colors ${viewMode === 'list' ? 'bg-accent text-accent-foreground' : 'text-muted-foreground hover:text-foreground'}`}
                    title={t('properties.viewMode.list')}
                  >
                    <List className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          {apartmentsQuery.isLoading ? <p className="text-sm text-muted-foreground">{t('properties.loading', { type: t('properties.tabs.apartments') })}</p> : null}
          {apartmentsQuery.isError ? <p className="text-sm text-red-600">{t('properties.loadFailed', { type: t('properties.tabs.apartments') })}</p> : null}
          {apartmentsQuery.isSuccess && !apartmentsQuery.isFetchingNextPage && filteredApartmentItems.length === 0 ? (
            <p className="text-sm text-muted-foreground">{t('properties.noFound', { type: t('properties.tabs.apartments') })}</p>
          ) : null}
          {filteredApartmentItems.length > 0 ? (
            <ul className={listContainerClass}>
              {filteredApartmentItems.map((item) => (
                <li key={item.guid}>
                  <PropertyCard item={item} viewMode={viewMode} type="apartments" />
                </li>
              ))}
            </ul>
          ) : null}
          <div ref={apartmentsLoadMoreRef} className="h-4" />
          {apartmentsQuery.isFetchingNextPage ? <p className="mt-3 text-xs text-muted-foreground">{t('properties.loadMore', { type: t('properties.tabs.apartments') })}</p> : null}
        </TabsContent>
      </Tabs>
      <Dialog open={createDialogOpen} onOpenChange={setCreateDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{t('properties.createDialog.title')}</DialogTitle>
            <DialogDescription>{t('properties.createDialog.description')}</DialogDescription>
          </DialogHeader>
          <Tabs
            value={createType}
            onValueChange={(value) => setCreateType(value as PropertyTab)}
            className="space-y-4"
          >
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="cottages">{t('properties.tabs.cottages')}</TabsTrigger>
              <TabsTrigger value="apartments">{t('properties.tabs.apartments')}</TabsTrigger>
            </TabsList>
          </Tabs>
          <Button onClick={handleCreateProperty}>
            <Plus className="h-4 w-4" />
            {t('properties.createDialog.continue')}
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  )
}
