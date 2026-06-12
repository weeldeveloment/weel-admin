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
import { PropertyItem, PropertyListResult, PaginatedResponse } from '@/types'
import PropertyTabContent from '@/components/PropertyTabContent'

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
  const cottagesLoadMoreRef = useRef<HTMLDivElement>(null)
  const apartmentsLoadMoreRef = useRef<HTMLDivElement>(null)

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
            filteredItems={filteredCottageItems}
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
            filteredItems={filteredApartmentItems}
            loadMoreRef={apartmentsLoadMoreRef}
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
