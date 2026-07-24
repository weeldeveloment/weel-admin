import { useMemo, useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useInfiniteQuery } from '@tanstack/react-query'
import { fetchPartnerProperties, type PartnerProperty } from '@/lib/partners'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { Image, LayoutGrid, List, Search } from 'lucide-react'

interface PropertiesTableProps {
  partnerId: string
  onCountChange?: (count: number) => void
}

const PAGE_SIZE = 12

const SORT_OPTIONS = [
  { value: 'default', label: 'Default' },
  { value: 'title_asc', label: 'Title A-Z' },
  { value: 'title_desc', label: 'Title Z-A' },
  { value: 'price_low', label: 'Price: Low to High' },
  { value: 'price_high', label: 'Price: High to Low' },
]

export default function PropertiesTable({ partnerId, onCountChange }: PropertiesTableProps) {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState('default')
  const [typeFilter, setTypeFilter] = useState('all-types')
  const [viewMode, setViewMode] = useState<'list' | 'card'>('list')
  const loadMoreRef = useRef<HTMLDivElement | null>(null)

  const {
    data,
    isLoading,
    isError,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteQuery({
    queryKey: ['partnerProperties', partnerId, PAGE_SIZE, searchTerm, sortBy],
    queryFn: ({ pageParam }) =>
      fetchPartnerProperties(partnerId, {
        page: pageParam,
        limit: PAGE_SIZE,
        search: searchTerm || undefined,
        sort: sortBy !== 'default' ? sortBy : undefined,
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const loadedCount = allPages.reduce((sum, page) => sum + page.results.length, 0)
      const totalCount = allPages[0]?.count ?? 0

      if (lastPage.next) return allPages.length + 1
      if (loadedCount < totalCount && lastPage.results.length > 0) return allPages.length + 1
      return undefined
    },
    enabled: Boolean(partnerId),
  })

  const allProperties = useMemo(
    () => data?.pages.flatMap((page) => page.results) ?? [],
    [data]
  )

  const filteredProperties = useMemo(() => {
    if (!allProperties) return []
    
    return allProperties.filter((prop: PartnerProperty) => {
      if (typeFilter !== 'all-types' && !prop.property_type?.toLowerCase().includes(typeFilter.toLowerCase())) {
        return false
      }
      return true
    })
  }, [allProperties, typeFilter])

  useEffect(() => {
    onCountChange?.(data?.pages[0]?.count || 0)
  }, [onCountChange, data?.pages])

  useEffect(() => {
    if (!loadMoreRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0]
        if (!target.isIntersecting) return
        if (!hasNextPage || isFetchingNextPage) return
        void fetchNextPage()
      },
      { rootMargin: '200px' }
    )

    observer.observe(loadMoreRef.current)
    return () => observer.disconnect()
  }, [hasNextPage, isFetchingNextPage, fetchNextPage])

  const handlePropertyClick = (property: PartnerProperty) => {
    const propertyType = property.property_type?.toLowerCase() || ''
    if (propertyType.includes('apartment')) {
      navigate(`/properties/apartments/${property.guid}`)
    } else if (propertyType.includes('cottage')) {
      navigate(`/properties/cottages/${property.guid}`)
    } else if (propertyType.includes('hotel')) {
      navigate(`/properties/hotels/${property.guid}`)
    }
  }

  const formatPrice = (price?: string | null, currency?: string | null) => {
    if (!price) return '-'
    const numPrice = parseFloat(price)
    if (isNaN(numPrice)) return price
    return `${numPrice.toLocaleString()} ${currency || 'UZS'}`
  }

  const getPropertyType = (prop: PartnerProperty) => {
    const type = prop.property_type?.toLowerCase() || 'unknown'
    if (type.includes('apartment')) return 'Apartment'
    if (type.includes('cottage')) return 'Cottage'
    return type.charAt(0).toUpperCase() + type.slice(1)
  }

  const renderImage = (property: PartnerProperty, className: string) => {
    if (property.img?.[0]) {
      return <img src={property.img[0]} alt={property.title} className={className} />
    }

    return (
      <div className={`flex items-center justify-center bg-muted ${className}`}>
        <Image className="h-8 w-8 text-muted-foreground" />
      </div>
    )
  }

  const getPropertyInfo = (property: PartnerProperty) => (
    <>
      <p className="line-clamp-1 font-semibold">{property.title}</p>
      <div className="flex items-center justify-between gap-2">
        <Badge variant="outline">{getPropertyType(property)}</Badge>
        <span className="text-sm text-muted-foreground">
          {formatPrice(property.price, property.currency)}
        </span>
      </div>
    </>
  )

  return (
    <div className="space-y-4">
      {/* Filters */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg">Filters & Search</CardTitle>
        </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex flex-col gap-3 md:flex-row md:gap-2">
              <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search properties..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9"
              />
            </div>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="md:w-40">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                {SORT_OPTIONS.map((opt) => (
                  <SelectItem key={opt.value} value={opt.value}>
                    {opt.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={typeFilter} onValueChange={setTypeFilter}>
              <SelectTrigger className="md:w-40">
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-types">All Types</SelectItem>
                <SelectItem value="apartment">Apartment</SelectItem>
                <SelectItem value="cottage">Cottage</SelectItem>
                <SelectItem value="hotel">Hotel</SelectItem>
              </SelectContent>
            </Select>
            <div className="flex items-center rounded-md border self-start">
              <button
                type="button"
                onClick={() => setViewMode('list')}
                className={`inline-flex items-center justify-center p-2 transition-colors ${viewMode === 'list' ? 'bg-accent text-accent-foreground' : 'text-muted-foreground hover:text-foreground'}`}
                title="List view"
                aria-label="List view"
              >
                <List className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => setViewMode('card')}
                className={`inline-flex items-center justify-center p-2 transition-colors ${viewMode === 'card' ? 'bg-accent text-accent-foreground' : 'text-muted-foreground hover:text-foreground'}`}
                title="Card view"
                aria-label="Card view"
              >
                <LayoutGrid className="h-4 w-4" />
              </button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Properties List */}
      <Card>
        {isLoading && (
          <CardContent className="pt-6 text-sm text-muted-foreground">
            Loading properties...
          </CardContent>
        )}

        {isError && (
          <CardContent className="pt-6 text-sm text-red-600">
            Failed to load properties. Please try again.
          </CardContent>
        )}

        {!isLoading && !isError && filteredProperties.length === 0 && (
          <CardContent className="pt-6 text-sm text-muted-foreground">
            {allProperties.length === 0 
              ? 'This owner has no properties.' 
              : 'No properties match the selected filters.'}
          </CardContent>
        )}

        {!isLoading && !isError && filteredProperties.length > 0 && (
          <>
            {viewMode === 'list' ? (
              <div className="flex flex-col gap-3 p-4">
                {filteredProperties.map((property) => (
                  <button
                    key={property.guid}
                    type="button"
                    className="group flex w-full overflow-hidden rounded-xl border text-left text-sm transition-all hover:shadow-md"
                    onClick={() => handlePropertyClick(property)}
                  >
                    <div className="h-24 w-32 shrink-0 bg-muted sm:h-28 sm:w-40">
                      {renderImage(property, 'h-full w-full object-cover')}
                    </div>
                    <div className="flex flex-1 flex-col justify-center space-y-2 p-4">
                      {getPropertyInfo(property)}
                    </div>
                  </button>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-3 p-4 md:grid-cols-2 xl:grid-cols-3">
                {filteredProperties.map((property) => (
                  <button
                    key={property.guid}
                    type="button"
                    className="group overflow-hidden rounded-lg border text-left transition hover:bg-muted/30"
                    onClick={() => handlePropertyClick(property)}
                  >
                    <div className="aspect-[4/3] w-full bg-muted">
                      {renderImage(property, 'h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]')}
                    </div>
                    <div className="space-y-2 p-4">
                      {getPropertyInfo(property)}
                    </div>
                  </button>
                ))}
              </div>
            )}

            <div className="border-t bg-muted/30 px-4 md:px-6 py-3">
              <p className="text-xs text-muted-foreground md:text-sm">
                Showing {allProperties.length} of {data?.pages[0]?.count || 0}
              </p>
              <div ref={loadMoreRef} className="h-4" />
              {isFetchingNextPage ? (
                <p className="text-xs text-muted-foreground">Loading more properties...</p>
              ) : null}
              {!hasNextPage && allProperties.length > 0 ? (
                <p className="text-xs text-muted-foreground">All properties loaded.</p>
              ) : null}
            </div>
          </>
        )}
      </Card>
    </div>
  )
}
