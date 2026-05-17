import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Search,
  Home,
  Hash,
  User,
  Calendar,
  Users,
  DollarSign,
  RefreshCw,
  ChevronLeft,
  ChevronRight,
  AlertTriangle,
} from 'lucide-react'
import { api } from '@/lib/api'
import { format } from 'date-fns'
import { useTranslation } from 'react-i18next'
import { Booking, PaginatedBookings } from '@/types'

const statusColors: Record<string, string> = {
  pending: 'bg-yellow-500 text-yellow-50',
  confirmed: 'bg-green-500 text-green-50',
  checked_in: 'bg-emerald-500 text-emerald-50',
  cancelled: 'bg-red-500 text-red-50',
  completed: 'bg-blue-500 text-blue-50',
  no_show: 'bg-orange-500 text-orange-50',
}

const PAGE_SIZE = 20

const getNumericValue = (value: unknown): number => {
  if (typeof value === 'number' && Number.isFinite(value)) {
    return value
  }
  if (typeof value === 'string') {
    const parsed = Number(value)
    return Number.isFinite(parsed) ? parsed : 0
  }
  if (value && typeof value === 'object') {
    const record = value as Record<string, unknown>
    const prioritizedKeys = ['count', 'value', 'adults', 'children', 'babies']
    for (const key of prioritizedKeys) {
      if (key in record) {
        const parsed = getNumericValue(record[key])
        if (parsed > 0) return parsed
      }
    }
    for (const nestedValue of Object.values(record)) {
      const parsed = getNumericValue(nestedValue)
      if (parsed > 0) return parsed
    }
  }
  return 0
}

const matchesStatusFilter = (statusFilter: string, status: string) => {
  switch (statusFilter) {
    case 'negotiation':
      return status === 'pending'
    case 'booked':
      return status === 'confirmed' || status === 'checked_in'
    case 'cancelled':
      return status === 'cancelled'
    default:
      return true
  }
}

const normalizeBookingPrice = (booking: Booking) => {
  const rawPrice = booking.booking_price as unknown
  if (!rawPrice) return null

  let source: unknown = rawPrice
  if (typeof rawPrice === 'string') {
    try {
      source = JSON.parse(rawPrice)
    } catch {
      return null
    }
  }

  if (!source || typeof source !== 'object') return null
  const price = source as Record<string, unknown>
  const subtotal = getNumericValue(price.subtotal)
  const serviceFee = getNumericValue(price.service_fee)
  const chargeAmount = getNumericValue(price.charge_amount)
  const currencyFromPrice = typeof price.currency === 'string' ? price.currency.toUpperCase() : null
  const currencyFromBooking = typeof booking.currency === 'string' ? booking.currency.toUpperCase() : null
  const currency = currencyFromPrice ?? currencyFromBooking ?? 'USD'

  const normalizedTotal =
    chargeAmount > 0
      ? chargeAmount
      : subtotal > 0 || serviceFee > 0
        ? subtotal + serviceFee
        : 0

  if (subtotal <= 0 && serviceFee <= 0 && normalizedTotal <= 0) {
    return null
  }

  return {
    subtotal,
    serviceFee,
    total: normalizedTotal,
    currency,
  }
}

export default function BookingsPage() {
  const { t } = useTranslation()
  const [searchQuery, setSearchQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState<string>('booked')
  const [ordering, setOrdering] = useState<'-check_in' | 'check_in'>('-check_in')
  const [currentPage, setCurrentPage] = useState(1)
  const statusLabels: Record<string, string> = {
    pending: t('bookings.statuses.pending'),
    confirmed: t('bookings.statuses.confirmed'),
    checked_in: t('bookings.statuses.checked_in'),
    cancelled: t('bookings.statuses.cancelled'),
    completed: t('bookings.statuses.completed'),
    no_show: t('bookings.statuses.no_show'),
  }

  const fetchBookings = async () => {
    const params: Record<string, string> = {
      page: currentPage.toString(),
      page_size: PAGE_SIZE.toString(),
      ordering,
    }

    if (searchQuery) {
      params.search = searchQuery
    }

    switch (statusFilter) {
      case 'negotiation':
        params.status = 'pending'
        break
      case 'booked':
        params.status = 'confirmed'
        break
      case 'cancelled':
        params.status = 'cancelled'
        break
      default:
        break
    }

    const response = await api.get<PaginatedBookings>('/booking/admin/bookings/', { params })
    return {
      ...response.data,
      results: response.data.results.filter((booking) =>
        matchesStatusFilter(statusFilter, booking.status),
      ),
    }
  }

  const {
    data: bookingsData,
    isLoading,
    isFetching,
    refetch,
  } = useQuery({
    queryKey: ['bookings', currentPage, searchQuery, statusFilter, ordering],
    queryFn: fetchBookings,
    refetchInterval: 5000,
  })

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
    setCurrentPage(1)
  }

  const handleStatusChange = (value: string) => {
    setStatusFilter(value)
    setCurrentPage(1)
  }

  const handleOrderingToggle = () => {
    setOrdering((prev) => (prev === '-check_in' ? 'check_in' : '-check_in'))
    setCurrentPage(1)
  }

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage)
  }

  const formatDate = (dateString: string) => {
    try {
      return format(new Date(dateString), 'MMM dd, yyyy')
    } catch {
      return dateString
    }
  }

  const formatTime = (dateString: string) => {
    try {
      return format(new Date(dateString), 'HH:mm')
    } catch {
      return ''
    }
  }

  const formatCurrency = (amount: number, currency: string) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency,
    }).format(amount)
  }

  const formatGuests = (booking: Booking) => {
    const adults = getNumericValue(booking.adults)
    const children = getNumericValue(booking.children)
    const babies = getNumericValue(booking.babies)

    const parts = [`${adults} ${t('bookings.guests.adults')}`]
    if (children > 0) {
      parts.push(`${children} ${t('bookings.guests.children')}`)
    }
    if (babies > 0) {
      parts.push(`${babies} ${t('bookings.guests.babies')}`)
    }
    return parts.join(', ')
  }

  const getTabCount = (tabValue: string): number | undefined => {
    const counts = bookingsData?.queue_counts
    if (!counts) return undefined
    switch (tabValue) {
      case 'negotiation':
        return counts['pending']
      case 'booked':
        return counts['confirmed'] + counts['checked_in']
      case 'cancelled':
        return counts['cancelled']
      default:
        return undefined
    }
  }

  const tabs = [
    { value: 'booked', label: t('bookings.tabs.booked') },
    { value: 'negotiation', label: t('bookings.tabs.negotiation') },
    { value: 'cancelled', label: t('bookings.tabs.cancelled') },
  ]
  const totalPages = bookingsData ? Math.max(1, Math.ceil(bookingsData.count / PAGE_SIZE)) : 1

  return (
    <div className="flex-1 overflow-hidden flex flex-col bg-background">
      <div className="h-full flex flex-col">
        {/* Header */}
        <div className="border-b bg-background">
          <div className="p-4 md:p-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-xl md:text-2xl font-bold">{t('bookings.title')}</h1>
                <p className="text-sm text-muted-foreground mt-1">
                  {t('bookings.subtitle')}
                </p>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => refetch()}
                disabled={isFetching}
              >
                <RefreshCw className={`h-4 w-4 mr-2 ${isFetching ? 'animate-spin' : ''}`} />
                <span className="hidden sm:inline">{t('common.refresh')}</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="border-b bg-background p-3 md:p-4 space-y-3">
          <div className="flex flex-col gap-3">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder={t('bookings.searchPlaceholder')}
                value={searchQuery}
                onChange={handleSearch}
                className="pl-9"
              />
            </div>
            <div className="flex flex-wrap items-center gap-2 md:gap-4">
              <Button variant="outline" size="sm" onClick={handleOrderingToggle}>
                {ordering === '-check_in' ? t('bookings.sortDesc') : t('bookings.sortAsc')}
              </Button>
            </div>
          </div>
          <Tabs value={statusFilter} onValueChange={handleStatusChange}>
            <TabsList className="inline-flex overflow-x-auto">
              {tabs.map((tab) => {
                const count = getTabCount(tab.value)
                return (
                  <TabsTrigger key={tab.value} value={tab.value} className="flex items-center gap-2 shrink-0">
                    <span>{tab.label}</span>
                    {typeof count === 'number' && (
                      <Badge variant="secondary" className="text-xs px-2 py-0.5">
                        {count}
                      </Badge>
                    )}
                  </TabsTrigger>
                )
              })}
            </TabsList>
          </Tabs>
        </div>

        {/* Bookings List */}
        <ScrollArea className="flex-1">
          <div className="p-6 space-y-4">
            {isLoading ? (
              <div className="flex items-center justify-center py-12">
                <RefreshCw className="h-6 w-6 animate-spin text-muted-foreground" />
                <span className="ml-2 text-muted-foreground">{t('bookings.loading')}</span>
              </div>
            ) : bookingsData?.results.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <Home className="h-12 w-12 text-muted-foreground mb-4" />
                <h3 className="text-lg font-semibold mb-2">{t('bookings.empty.title')}</h3>
                <p className="text-sm text-muted-foreground">
                  {searchQuery
                    ? t('bookings.empty.adjust')
                    : t('bookings.empty.description')}
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {bookingsData?.results.map((booking) => {
                  const price = normalizeBookingPrice(booking)

                  return (
                    <Card key={booking.guid} className="p-4 hover:shadow-md transition-shadow bg-card">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 space-y-3">
                        {/* Top row - Booking number and status */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Hash className="h-4 w-4 text-muted-foreground" />
                            <span className="font-semibold text-sm">
                              #{booking.booking_number}
                            </span>
                            <Badge variant="secondary" className={statusColors[booking.status]}>
                              {statusLabels[booking.status] ?? booking.status}
                            </Badge>
                            {booking.is_overdue && (
                              <span className="inline-flex items-center gap-1 text-xs text-red-600 font-semibold">
                                <AlertTriangle className="h-3.5 w-3.5" /> {t('bookings.overdue')}
                              </span>
                            )}
                            {booking.conflict_flag && (
                              <Badge variant="outline" className="text-xs">
                                {t('bookings.conflict')}
                              </Badge>
                            )}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {formatDate(booking.created_at)} {formatTime(booking.created_at)}
                          </div>
                        </div>

                        {/* Property info */}
                        <div className="flex items-center gap-2 text-sm">
                          <Home className="h-4 w-4 text-muted-foreground" />
                          <span className="font-medium">{booking.property.title}</span>
                          <span className="text-muted-foreground">
                            ({booking.property.property_type})
                          </span>
                        </div>

                        {/* Client info */}
                        <div className="flex items-center gap-2 text-sm">
                          <User className="h-4 w-4 text-muted-foreground" />
                          <span>
                            {booking.client.first_name} {booking.client.last_name}
                          </span>
                          <span className="text-muted-foreground">
                            ({booking.client.phone_number})
                          </span>
                        </div>

                        {/* Dates and guests */}
                        <div className="flex items-center gap-4 text-sm">
                          <div className="flex items-center gap-1.5 text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            <span>
                              {formatDate(booking.check_in)} → {formatDate(booking.check_out)}
                            </span>
                          </div>
                          <div className="flex items-center gap-1.5 text-muted-foreground">
                            <Users className="h-4 w-4" />
                            <span>{formatGuests(booking)}</span>
                          </div>
                        </div>

                        {/* Price info */}
                        {price && (
                          <div className="flex items-center gap-4 pt-2 border-t">
                            <div className="flex items-center gap-1.5 text-sm">
                              <DollarSign className="h-4 w-4 text-muted-foreground" />
                              <div className="space-y-0.5">
                                <div className="text-xs text-muted-foreground">
                                  {t('bookings.price.subtotal')}: {formatCurrency(price.subtotal, price.currency)}
                                </div>
                                <div className="text-xs text-muted-foreground">
                                  {t('bookings.price.serviceFee')}: {formatCurrency(price.serviceFee, price.currency)}
                                </div>
                                <div className="font-semibold">
                                  {t('bookings.price.total')}: {formatCurrency(price.total, price.currency)}
                                </div>
                              </div>
                            </div>
                          </div>
                        )}

                        {(booking.confirmed_at ||
                          booking.checked_in_at ||
                          booking.cancelled_at ||
                          booking.no_show_at ||
                          booking.completed_at) && (
                          <div className="pt-2 border-t">
                            <p className="text-xs font-medium text-muted-foreground">
                              {t('bookings.timestamps.title')}
                            </p>
                          </div>
                        )}
                      </div>

                      {/* Status timestamps */}
                      <div className="text-xs text-muted-foreground space-y-1 text-right">
                        {booking.confirmed_at && (
                          <div>
                            <span className="text-green-600">✓</span> {t('bookings.timestamps.confirmed')}{' '}
                            {formatDate(booking.confirmed_at)}
                          </div>
                        )}
                        {booking.checked_in_at && (
                          <div>
                            <span className="text-emerald-600">✓</span> {t('bookings.timestamps.checked_in')}{' '}
                            {formatDate(booking.checked_in_at)}
                          </div>
                        )}
                        {booking.cancelled_at && (
                          <div>
                            <span className="text-red-600">✗</span> {t('bookings.timestamps.cancelled')}{' '}
                            {formatDate(booking.cancelled_at)}
                          </div>
                        )}
                        {booking.no_show_at && (
                          <div>
                            <span className="text-orange-500">!</span> {t('bookings.timestamps.no_show')}{' '}
                            {formatDate(booking.no_show_at)}
                          </div>
                        )}
                        {booking.completed_at && (
                          <div>
                            <span className="text-blue-600">✓</span> {t('bookings.timestamps.completed')}{' '}
                            {formatDate(booking.completed_at)}
                          </div>
                        )}
                      </div>
                    </div>
                    </Card>
                  )
                })}
              </div>
            )}

            {/* Pagination */}
            {bookingsData && bookingsData.results.length > 0 && (
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6 pt-4 border-t">
                <p className="text-sm text-muted-foreground order-2 sm:order-1">
                  {t('bookings.info.showing', { count: bookingsData.results.length, total: bookingsData.count })}
                </p>
                <div className="flex items-center gap-2 order-1 sm:order-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <span className="text-sm font-medium px-2">
                    {t('bookings.info.page', { page: currentPage, total: totalPages })}
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage >= totalPages}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>
      </div>
    </div>
  )
}
