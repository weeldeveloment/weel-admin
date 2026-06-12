import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { LayoutGrid, List, Plus, RotateCcw } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { PropertyItem } from '@/types'
import PropertyCard from './PropertyCard'

type PropertyTab = 'cottages' | 'apartments'
type ViewMode = 'grid' | 'list'
type VerifiedFilter = 'all' | 'verified' | 'unverified'

interface PropertyTabContentProps {
  tab: PropertyTab
  search: string
  onSearchChange: (value: string) => void
  verified: VerifiedFilter
  onVerifiedChange: (value: VerifiedFilter) => void
  dateFrom: string
  onDateFromChange: (value: string) => void
  dateTo: string
  onDateToChange: (value: string) => void
  query: {
    isLoading: boolean
    isError: boolean
    isSuccess: boolean
    isFetchingNextPage: boolean
    hasNextPage: boolean
    fetchNextPage: () => void
  }
  filteredItems: PropertyItem[]
  loadMoreRef: React.RefObject<HTMLDivElement>
  viewMode: ViewMode
  onViewModeChange: (mode: ViewMode) => void
  onOpenCreate: (type: PropertyTab) => void
}

export default function PropertyTabContent({
  tab,
  search,
  onSearchChange,
  verified,
  onVerifiedChange,
  dateFrom,
  onDateFromChange,
  dateTo,
  onDateToChange,
  query,
  filteredItems,
  loadMoreRef,
  viewMode,
  onViewModeChange,
  onOpenCreate,
}: PropertyTabContentProps) {
  const { t } = useTranslation()

  const listContainerClass =
    viewMode === 'grid'
      ? 'grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3'
      : 'flex flex-col gap-3'

  const tabLabel = t(`properties.tabs.${tab}`)

  useEffect(() => {
    if (!loadMoreRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0]
        if (!target.isIntersecting) return
        if (!query.hasNextPage || query.isFetchingNextPage) return
        void query.fetchNextPage()
      },
      { rootMargin: '200px' }
    )

    observer.observe(loadMoreRef.current)
    return () => observer.disconnect()
  }, [query.hasNextPage, query.isFetchingNextPage, query.fetchNextPage, loadMoreRef])

  const handleReset = () => {
    onSearchChange('')
    onVerifiedChange('all')
    onDateFromChange('')
    onDateToChange('')
  }

  return (
    <div className="flex h-full flex-col space-y-4">
      <div className="space-y-2">
        <p className="text-sm font-medium text-foreground">{t('properties.filter.label')}</p>
        <div className="flex flex-wrap items-end gap-3">
          <div className="flex flex-1 flex-wrap items-end gap-3">
            <div className="flex flex-col gap-1">
              <Label className="text-xs text-muted-foreground">{t('properties.searchLabel')}</Label>
              <Input
                type="text"
                placeholder={t('properties.searchPlaceholder', { type: tabLabel })}
                value={search}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-52"
              />
            </div>
            <div className="flex flex-col gap-1">
              <Label className="text-xs text-muted-foreground">{t('properties.filter.verified')}</Label>
              <Select value={verified} onValueChange={(v) => onVerifiedChange(v as VerifiedFilter)}>
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
              <Input type="date" value={dateFrom} onChange={(e) => onDateFromChange(e.target.value)} className="w-40" />
            </div>
            <div className="flex flex-col gap-1">
              <Label className="text-xs text-muted-foreground">{t('properties.filter.dateTo')}</Label>
              <Input type="date" value={dateTo} onChange={(e) => onDateToChange(e.target.value)} className="w-40" />
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="h-9 px-2 text-muted-foreground"
              onClick={handleReset}
            >
              <RotateCcw className="h-4 w-4" />
              {t('properties.filter.reset')}
            </Button>
          </div>
          <div className="flex items-center gap-3">
            <Button
              size="sm"
              className="hidden sm:inline-flex"
              onClick={() => onOpenCreate(tab)}
            >
              <Plus className="h-4 w-4" />
              {t('properties.createProperty')}
            </Button>
            <div className="flex items-center rounded-md border">
              <button
                type="button"
                onClick={() => onViewModeChange('grid')}
                className={`inline-flex items-center justify-center p-2 transition-colors ${viewMode === 'grid' ? 'bg-accent text-accent-foreground' : 'text-muted-foreground hover:text-foreground'}`}
                title={t('properties.viewMode.grid')}
              >
                <LayoutGrid className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => onViewModeChange('list')}
                className={`inline-flex items-center justify-center p-2 transition-colors ${viewMode === 'list' ? 'bg-accent text-accent-foreground' : 'text-muted-foreground hover:text-foreground'}`}
                title={t('properties.viewMode.list')}
              >
                <List className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-0 flex-1 overflow-auto">
        {query.isLoading ? <p className="text-sm text-muted-foreground">{t('properties.loading', { type: tabLabel })}</p> : null}
        {query.isError ? <p className="text-sm text-red-600">{t('properties.loadFailed', { type: tabLabel })}</p> : null}
        {query.isSuccess && !query.isFetchingNextPage && filteredItems.length === 0 ? (
          <p className="text-sm text-muted-foreground">{t('properties.noFound', { type: tabLabel })}</p>
        ) : null}
        {filteredItems.length > 0 ? (
          <ul className={listContainerClass}>
            {filteredItems.map((item) => (
              <li key={item.guid}>
                <PropertyCard item={item} viewMode={viewMode} type={tab} />
              </li>
            ))}
          </ul>
        ) : null}
        <div ref={loadMoreRef} className="h-4" />
        {query.isFetchingNextPage ? <p className="mt-3 text-xs text-muted-foreground">{t('properties.loadMore', { type: tabLabel })}</p> : null}
      </div>
    </div>
  )
}
