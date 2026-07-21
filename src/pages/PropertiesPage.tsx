import { useMemo, useRef, useState } from 'react'
import { useInfiniteQuery } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Plus } from 'lucide-react'
import { api } from '@/lib/api'
import { useTranslation } from 'react-i18next'
import { PropertyItem, PropertyListResult, PaginatedResponse, PropertyTab } from '@/types'
import PropertyTabContent from '@/components/PropertyTabContent'

type ViewMode = 'grid' | 'list'
type VerifiedFilter = 'all' | 'verified' | 'unverified'

interface PropertyFilters {
  search: string
  verified: VerifiedFilter
  dateFrom: string
  dateTo: string
}

const extractListResult = (payload: PaginatedResponse<PropertyItem>): PropertyListResult => {
  if (!Array.isArray(payload.results) || typeof payload.count !== 'number') {
    throw new Error('Invalid property list response')
  }

  return {
    items: payload.results,
    count: payload.count,
    next: payload.next ?? null,
    previous: payload.previous ?? null,
  }
}

const fetchPropertiesByType = async (
  type: PropertyTab,
  page: number,
  filters: PropertyFilters
): Promise<PropertyListResult> => {
  const endpoint = '/property/admin/all/'
  const propertyTypeValue =
    type === 'cottages' ? 'cottage' : type === 'apartments' ? 'apartment' : 'hotel'
  const params: Record<string, string | number> = {
    page,
    limit: 12,
    property_type: propertyTypeValue,
  }
  if (filters.search) params.search = filters.search
  if (filters.verified !== 'all') params.is_verified = String(filters.verified === 'verified')
  if (filters.dateFrom) params.created_from = filters.dateFrom
  if (filters.dateTo) params.created_to = filters.dateTo
  const response = await api.get(endpoint, { params })
  return extractListResult(response.data)
}

const getNextPageFromUrl = (nextUrl: string | number | null): number | undefined => {
  if (nextUrl === null || nextUrl === undefined) return undefined

  if (typeof nextUrl === 'number') {
    return Number.isFinite(nextUrl) && nextUrl > 0 ? nextUrl : undefined
  }

  try {
    const parsed = new URL(String(nextUrl), window.location.origin)
    const page = parsed.searchParams.get('page')
    if (!page) return undefined

    const asNumber = Number(page)
    return Number.isFinite(asNumber) && asNumber > 0 ? asNumber : undefined
  } catch {
    return undefined
  }
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
  const [hotelsSearch, setHotelsSearch] = useState('')
  const [cottagesVerified, setCottagesVerified] = useState<VerifiedFilter>('all')
  const [apartmentsVerified, setApartmentsVerified] = useState<VerifiedFilter>('all')
  const [hotelsVerified, setHotelsVerified] = useState<VerifiedFilter>('all')
  const [cottagesDateFrom, setCottagesDateFrom] = useState('')
  const [cottagesDateTo, setCottagesDateTo] = useState('')
  const [apartmentsDateFrom, setApartmentsDateFrom] = useState('')
  const [apartmentsDateTo, setApartmentsDateTo] = useState('')
  const [hotelsDateFrom, setHotelsDateFrom] = useState('')
  const [hotelsDateTo, setHotelsDateTo] = useState('')
  const cottagesLoadMoreRef = useRef<HTMLDivElement>(null)
  const apartmentsLoadMoreRef = useRef<HTMLDivElement>(null)
  const hotelsLoadMoreRef = useRef<HTMLDivElement>(null)
  const cottageFilters = useMemo<PropertyFilters>(
    () => ({
      search: cottagesSearch,
      verified: cottagesVerified,
      dateFrom: cottagesDateFrom,
      dateTo: cottagesDateTo,
    }),
    [cottagesSearch, cottagesVerified, cottagesDateFrom, cottagesDateTo]
  )
  const apartmentFilters = useMemo<PropertyFilters>(
    () => ({
      search: apartmentsSearch,
      verified: apartmentsVerified,
      dateFrom: apartmentsDateFrom,
      dateTo: apartmentsDateTo,
    }),
    [apartmentsSearch, apartmentsVerified, apartmentsDateFrom, apartmentsDateTo]
  )
  const hotelFilters = useMemo<PropertyFilters>(
    () => ({
      search: hotelsSearch,
      verified: hotelsVerified,
      dateFrom: hotelsDateFrom,
      dateTo: hotelsDateTo,
    }),
    [hotelsSearch, hotelsVerified, hotelsDateFrom, hotelsDateTo]
  )

  const cottagesQuery = useInfiniteQuery({
    queryKey: ['properties', 'cottages', cottageFilters],
    queryFn: ({ pageParam }) => fetchPropertiesByType('cottages', pageParam, cottageFilters),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => getNextPageFromUrl(lastPage.next),
    enabled: activeTab === 'cottages',
  })

  const apartmentsQuery = useInfiniteQuery({
    queryKey: ['properties', 'apartments', apartmentFilters],
    queryFn: ({ pageParam }) => fetchPropertiesByType('apartments', pageParam, apartmentFilters),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => getNextPageFromUrl(lastPage.next),
    enabled: activeTab === 'apartments',
  })

  const hotelsQuery = useInfiniteQuery({
    queryKey: ['properties', 'hotels', hotelFilters],
    queryFn: ({ pageParam }) => fetchPropertiesByType('hotels', pageParam, hotelFilters),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => getNextPageFromUrl(lastPage.next),
    enabled: activeTab === 'hotels',
  })

  const cottageItems = useMemo(
    () => cottagesQuery.data?.pages.flatMap((page) => page.items) ?? [],
    [cottagesQuery.data]
  )

  const apartmentItems = useMemo(
    () => apartmentsQuery.data?.pages.flatMap((page) => page.items) ?? [],
    [apartmentsQuery.data]
  )

  const hotelItems = useMemo(
    () => hotelsQuery.data?.pages.flatMap((page) => page.items) ?? [],
    [hotelsQuery.data]
  )

  const openCreateDialog = (initialType: PropertyTab) => {
    setCreateType(initialType)
    setCreateDialogOpen(true)
  }

  const handleCreateProperty = () => {
    setCreateDialogOpen(false)
    navigate(`/properties/${createType}/create`)
  }

  return (
    <div className="flex h-full min-h-0 flex-col overflow-y-auto p-4 md:p-6">
      <Tabs
        value={activeTab}
        onValueChange={(value) => setActiveTab(value as PropertyTab)}
        className="flex min-h-0 flex-col"
      >
        <TabsList>
          <TabsTrigger value="cottages">{t('properties.tabs.cottages')}</TabsTrigger>
          <TabsTrigger value="apartments">{t('properties.tabs.apartments')}</TabsTrigger>
          <TabsTrigger value="hotels">{t('properties.tabs.hotels')}</TabsTrigger>
        </TabsList>

        <TabsContent value="cottages">
          <PropertyTabContent
            tab="cottages"
            search={cottagesSearch}
            onSearchChange={setCottagesSearch}
            verified={cottagesVerified}
            onVerifiedChange={setCottagesVerified}
            dateFrom={cottagesDateFrom}
            onDateFromChange={setCottagesDateFrom}
            dateTo={cottagesDateTo}
            onDateToChange={setCottagesDateTo}
            query={cottagesQuery}
            items={cottageItems}
            loadMoreRef={cottagesLoadMoreRef}
            viewMode={viewMode}
            onViewModeChange={setViewMode}
            onOpenCreate={openCreateDialog}
          />
        </TabsContent>

        <TabsContent value="apartments">
          <PropertyTabContent
            tab="apartments"
            search={apartmentsSearch}
            onSearchChange={setApartmentsSearch}
            verified={apartmentsVerified}
            onVerifiedChange={setApartmentsVerified}
            dateFrom={apartmentsDateFrom}
            onDateFromChange={setApartmentsDateFrom}
            dateTo={apartmentsDateTo}
            onDateToChange={setApartmentsDateTo}
            query={apartmentsQuery}
            items={apartmentItems}
            loadMoreRef={apartmentsLoadMoreRef}
            viewMode={viewMode}
            onViewModeChange={setViewMode}
            onOpenCreate={openCreateDialog}
          />
        </TabsContent>

        <TabsContent value="hotels">
          <PropertyTabContent
            tab="hotels"
            search={hotelsSearch}
            onSearchChange={setHotelsSearch}
            verified={hotelsVerified}
            onVerifiedChange={setHotelsVerified}
            dateFrom={hotelsDateFrom}
            onDateFromChange={setHotelsDateFrom}
            dateTo={hotelsDateTo}
            onDateToChange={setHotelsDateTo}
            query={hotelsQuery}
            items={hotelItems}
            loadMoreRef={hotelsLoadMoreRef}
            viewMode={viewMode}
            onViewModeChange={setViewMode}
            onOpenCreate={openCreateDialog}
          />
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
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="cottages">{t('properties.tabs.cottages')}</TabsTrigger>
              <TabsTrigger value="apartments">{t('properties.tabs.apartments')}</TabsTrigger>
              <TabsTrigger value="hotels">{t('properties.tabs.hotels')}</TabsTrigger>
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
