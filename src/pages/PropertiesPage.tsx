import { useEffect, useMemo, useRef, useState } from 'react'
import { useInfiniteQuery } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { api } from '@/lib/api'

const API_URL = (import.meta.env.VITE_API_URL || 'https://dev.weel.uz').replace(/\/$/, '')
const FALLBACK_IMAGE =
  'data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 800 600%22%3E%3Cdefs%3E%3ClinearGradient id=%22g%22 x1=%220%25%22 y1=%220%25%22 x2=%22100%25%22 y2=%22100%25%22%3E%3Cstop offset=%220%25%22 stop-color=%22%231f2937%22/%3E%3Cstop offset=%22100%25%22 stop-color=%22%23374151%22/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width=%22800%22 height=%22600%22 fill=%22url(%23g)%22/%3E%3Ccircle cx=%22390%22 cy=%22240%22 r=%2280%22 fill=%22%239ca3af%22 fill-opacity=%220.18%22/%3E%3Cpath d=%22M160 470l120-130 90 90 70-80 200 220H160z%22 fill=%22%23e5e7eb%22 fill-opacity=%220.18%22/%3E%3Ctext x=%22400%22 y=%22350%22 text-anchor=%22middle%22 font-family=%22Arial, sans-serif%22 font-size=%2232%22 fill=%22%23e5e7eb%22 fill-opacity=%220.8%22%3ENo image%3C/text%3E%3C/svg%3E'

type PropertyTab = 'cottages' | 'apartments'

interface PropertyItem {
  id?: number
  guid?: string
  title?: string
  property_type?: string
  img?: string[]
  city?: string | null
  country?: string | null
}

interface PaginatedResponse<T> {
  count?: number
  next?: string | null
  previous?: string | null
  results?: T[]
}

interface PropertyListResult {
  items: PropertyItem[]
  count: number
  next: string | null
  previous: string | null
}

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
  const response = await api.get(endpoint, {
    params: {
      page,
      page_size: 12,
      property_type: propertyTypeValue,
      search: search || undefined,
    },
  })
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

const resolveImageUrl = (value?: string) => {
  if (!value) return ''
  if (value.startsWith('http://') || value.startsWith('https://')) return value
  if (value.startsWith('/')) return `${API_URL}${value}`
  return `${API_URL}/${value}`
}

export default function PropertiesPage() {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState<PropertyTab>('cottages')
  const [cottagesSearch, setCottagesSearch] = useState('')
  const [apartmentsSearch, setApartmentsSearch] = useState('')
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

  return (
    <div className="h-full overflow-y-auto p-4 md:p-6">
      <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as PropertyTab)} className="space-y-4">
        <TabsList>
          <TabsTrigger value="cottages">Cottages</TabsTrigger>
          <TabsTrigger value="apartments">Apartments</TabsTrigger>
        </TabsList>

        <TabsContent value="cottages" className="space-y-4">
          <Input
            type="text"
            placeholder="Search cottages..."
            value={cottagesSearch}
            onChange={(e) => setCottagesSearch(e.target.value)}
            className="max-w-sm"
          />
          {cottagesQuery.isLoading ? <p className="text-sm text-muted-foreground">Loading cottages...</p> : null}
          {cottagesQuery.error ? <p className="text-sm text-red-600">Failed to load cottages.</p> : null}
          {!cottagesQuery.isLoading && cottageItems.length === 0 ? (
            <p className="text-sm text-muted-foreground">No cottages found.</p>
          ) : null}
          {cottageItems.length > 0 ? (
            <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
              {cottageItems.map((item) => (
                <li key={item.guid || String(item.id)}>
                  <button
                    type="button"
                    className="group w-full overflow-hidden rounded-xl border text-left text-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
                    onClick={() => {
                      const propertyId = item.guid || item.id?.toString()
                      if (!propertyId) return
                      navigate(`/properties/cottages/${propertyId}`)
                    }}
                  >
                    <div className="aspect-[4/3] w-full bg-muted">
                      {item.img?.[0] ? (
                        <img
                          src={resolveImageUrl(item.img[0])}
                          alt={item.title || 'Untitled'}
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                        />
                      ) : (
                        <img src={FALLBACK_IMAGE} alt={item.title || 'Untitled'} className="h-full w-full object-cover" />
                      )}
                    </div>
                    <Card className="rounded-none border-0 border-t shadow-none">
                      <CardContent className="space-y-1 p-4">
                        <p className="line-clamp-1 font-semibold">{item.title || 'Untitled'}</p>
                        <p className="text-xs text-muted-foreground">{item.city || item.country || 'No location'}</p>
                      </CardContent>
                    </Card>
                  </button>
                </li>
              ))}
            </ul>
          ) : null}
          <div ref={cottagesLoadMoreRef} className="h-4" />
          {cottagesQuery.isFetchingNextPage ? <p className="mt-3 text-xs text-muted-foreground">Loading more cottages...</p> : null}
        </TabsContent>

        <TabsContent value="apartments" className="space-y-4">
          <Input
            type="text"
            placeholder="Search apartments..."
            value={apartmentsSearch}
            onChange={(e) => setApartmentsSearch(e.target.value)}
            className="max-w-sm"
          />
          {apartmentsQuery.isLoading ? <p className="text-sm text-muted-foreground">Loading apartments...</p> : null}
          {apartmentsQuery.error ? <p className="text-sm text-red-600">Failed to load apartments.</p> : null}
          {!apartmentsQuery.isLoading && apartmentItems.length === 0 ? (
            <p className="text-sm text-muted-foreground">No apartments found.</p>
          ) : null}
          {apartmentItems.length > 0 ? (
            <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
              {apartmentItems.map((item) => (
                <li key={item.guid || String(item.id)}>
                  <button
                    type="button"
                    className="group w-full overflow-hidden rounded-xl border text-left text-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
                    onClick={() => {
                      const propertyId = item.guid || item.id?.toString()
                      if (!propertyId) return
                      navigate(`/properties/apartments/${propertyId}`)
                    }}
                  >
                    <div className="aspect-[4/3] w-full bg-muted">
                      {item.img?.[0] ? (
                        <img
                          src={resolveImageUrl(item.img[0])}
                          alt={item.title || 'Untitled'}
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                        />
                      ) : (
                        <img src={FALLBACK_IMAGE} alt={item.title || 'Untitled'} className="h-full w-full object-cover" />
                      )}
                    </div>
                    <Card className="rounded-none border-0 border-t shadow-none">
                      <CardContent className="space-y-1 p-4">
                        <p className="line-clamp-1 font-semibold">{item.title || 'Untitled'}</p>
                        <p className="text-xs text-muted-foreground">{item.city || item.country || 'No location'}</p>
                      </CardContent>
                    </Card>
                  </button>
                </li>
              ))}
            </ul>
          ) : null}
          <div ref={apartmentsLoadMoreRef} className="h-4" />
          {apartmentsQuery.isFetchingNextPage ? <p className="mt-3 text-xs text-muted-foreground">Loading more apartments...</p> : null}
        </TabsContent>
      </Tabs>
    </div>
  )
}
