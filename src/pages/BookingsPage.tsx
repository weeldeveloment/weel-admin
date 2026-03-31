import { useEffect, useState } from 'react'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Search,
  Home,
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

interface BookingClient {
  id: number
  email: string
  first_name: string
  last_name: string
  phone_number: string
}

interface BookingProperty {
  guid: string
  title: string
  property_type: string
}

interface BookingPrice {
  guid: string
  subtotal: number
  hold_amount: number
  charge_amount: number
  service_fee: number
}

interface Booking {
  guid: string
  booking_number: string
  check_in: string
  check_out: string
  adults: number
  children: number
  babies: number
  status: 'pending' | 'confirmed' | 'checked_in' | 'cancelled' | 'completed' | 'no_show'
  cancellation_reason?: string
  confirmed_at?: string
  checked_in_at?: string
  no_show_at?: string
  cancelled_at?: string
  completed_at?: string
  created_at: string
  conflict_flag?: boolean
  is_overdue?: boolean
  client: BookingClient
  property: BookingProperty
  booking_price?: BookingPrice
}

interface PaginatedBookings {
  count: number
  next: string | null
  previous: string | null
  results: Booking[]
  queue_counts?: Record<string, number>
}

interface RegionOption {
  guid: string
  title: string
}

const statusColors: Record<string, string> = {
  pending: 'bg-yellow-500 text-yellow-50',
  confirmed: 'bg-green-500 text-green-50',
  checked_in: 'bg-emerald-500 text-emerald-50',
  cancelled: 'bg-red-500 text-red-50',
  completed: 'bg-blue-500 text-blue-50',
  no_show: 'bg-orange-500 text-orange-50',
}

const statusLabels: Record<string, string> = {
  pending: 'New',
  confirmed: 'Confirmed',
  checked_in: 'Checked-in',
  cancelled: 'Cancelled',
  completed: 'Completed',
  no_show: 'No-show',
}

export default function BookingsPage() {
  const queryClient = useQueryClient()
  const [searchQuery, setSearchQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState<string>('all')
  const [regionFilter, setRegionFilter] = useState<string>('all')
  const [dateFrom, setDateFrom] = useState('')
  const [dateTo, setDateTo] = useState('')
  const [ordering, setOrdering] = useState<'-check_in' | 'check_in'>('-check_in')
  const [regions, setRegions] = useState<RegionOption[]>([])
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    const loadRegions = async () => {
      try {
        const response = await api.get<RegionOption[]>('/property/regions/')
        setRegions(response.data || [])
      } catch (error) {
        console.error('Failed to load regions', error)
      }
    }
    void loadRegions()
  }, [])

  const fetchBookings = async () => {
    const params: Record<string, string> = {
      page: currentPage.toString(),
      page_size: '20',
      ordering,
    }

    if (searchQuery) {
      params.search = searchQuery
    }

    if (regionFilter !== 'all') {
      params.region = regionFilter
    }

    if (dateFrom) {
      params.date_from = dateFrom
    }

    if (dateTo) {
      params.date_to = dateTo
    }

    switch (statusFilter) {
      case 'new':
        params.status = 'pending'
        break
      case 'confirmed':
        params.status = 'confirmed'
        break
      case 'checked_in':
        params.status = 'checked_in'
        break
      case 'cancelled':
        params.status = 'cancelled'
        break
      case 'completed':
        params.status = 'completed'
        break
      case 'no_show':
        params.status = 'no_show'
        break
      case 'active':
        params.status_in = 'confirmed,checked_in'
        break
      case 'overdue':
        params.overdue = 'true'
        params.status_in = 'pending,confirmed'
        break
      default:
        break
    }

    const response = await api.get<PaginatedBookings>('/booking/admin/bookings/', { params })
    return response.data
  }

  const {
    data: bookingsData,
    isLoading,
    isFetching,
    refetch,
  } = useQuery({
    queryKey: ['bookings', currentPage, searchQuery, statusFilter, regionFilter, dateFrom, dateTo, ordering],
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

  const handleRegionChange = (value: string) => {
    setRegionFilter(value)
    setCurrentPage(1)
  }

  const handleDateFromChange = (value: string) => {
    setDateFrom(value)
    setCurrentPage(1)
  }

  const handleDateToChange = (value: string) => {
    setDateTo(value)
    setCurrentPage(1)
  }

  const handleOrderingToggle = () => {
    setOrdering((prev) => (prev === '-check_in' ? 'check_in' : '-check_in'))
    setCurrentPage(1)
  }

  const performAction = async (bookingId: string, action: 'checkin' | 'no_show' | 'ticket' | 'conflict') => {
    const endpoints: Record<string, string> = {
      checkin: `/booking/admin/bookings/${bookingId}/force-check-in/`,
      no_show: `/booking/admin/bookings/${bookingId}/mark-no-show/`,
      ticket: `/booking/admin/bookings/${bookingId}/create-ticket/`,
      conflict: `/booking/admin/bookings/${bookingId}/escalate-conflict/`,
    }

    try {
      await api.post(endpoints[action])
      await queryClient.invalidateQueries({ queryKey: ['bookings'] })
      await refetch()
    } catch (error) {
      console.error('Action failed', error)
      alert('Failed to perform action. Please try again.')
    }
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

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount)
  }

  const getTabCount = (tabValue: string): number | undefined => {
    const counts = bookingsData?.queue_counts
    if (!counts) return undefined
    switch (tabValue) {
      case 'new':
        return counts['pending'] || 0
      case 'active':
        return (counts['confirmed'] || 0) + (counts['checked_in'] || 0)
      case 'cancelled':
        return counts['cancelled'] || 0
      case 'completed':
        return counts['completed'] || 0
      case 'no_show':
        return counts['no_show'] || 0
      default:
        return undefined
    }
  }

  const tabs = [
    { value: 'all', label: 'All' },
    { value: 'new', label: 'New', accent: 'text-yellow-600' },
    { value: 'overdue', label: 'Check-in Overdue', accent: 'text-red-600' },
    { value: 'active', label: 'Active', accent: 'text-emerald-600' },
    { value: 'cancelled', label: 'Cancelled', accent: 'text-red-600' },
    { value: 'no_show', label: 'No-show', accent: 'text-orange-600' },
    { value: 'completed', label: 'Completed', accent: 'text-blue-600' },
  ]

  return (
    <div className="flex-1 overflow-hidden flex flex-col bg-muted/20">
      <div className="h-full flex flex-col">
        {/* Header */}
        <div className="border-b bg-background">
          <div className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold">Bookings</h1>
                <p className="text-sm text-muted-foreground mt-1">
                  Real-time booking management
                </p>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => refetch()}
                disabled={isFetching}
              >
                <RefreshCw className={`h-4 w-4 mr-2 ${isFetching ? 'animate-spin' : ''}`} />
                Refresh
              </Button>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="border-b bg-background p-4 space-y-3">
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex-1 min-w-[240px] relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by booking number or phone..."
                value={searchQuery}
                onChange={handleSearch}
                className="pl-9"
              />
            </div>
            <div className="flex items-center gap-2">
              <label className="text-xs text-muted-foreground">Region</label>
              <select
                value={regionFilter}
                onChange={(e) => handleRegionChange(e.target.value)}
                className="h-9 rounded-md border px-2 text-sm bg-background"
              >
                <option value="all">All regions</option>
                {regions.map((region) => (
                  <option key={region.guid} value={region.guid}>
                    {region.title}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <label className="text-xs text-muted-foreground">Date</label>
              <Input type="date" value={dateFrom} onChange={(e) => handleDateFromChange(e.target.value)} className="w-36" />
              <span className="text-muted-foreground">→</span>
              <Input type="date" value={dateTo} onChange={(e) => handleDateToChange(e.target.value)} className="w-36" />
            </div>
            <Button variant="outline" size="sm" onClick={handleOrderingToggle}>
              Sort {ordering === '-check_in' ? 'Date ↓' : 'Date ↑'}
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => refetch()}
              disabled={isFetching}
            >
              <RefreshCw className={`h-4 w-4 mr-2 ${isFetching ? 'animate-spin' : ''}`} />
              Refresh
            </Button>
          </div>
          <Tabs value={statusFilter} onValueChange={handleStatusChange}>
            <TabsList className="flex flex-wrap">
              {tabs.map((tab) => {
                const count = getTabCount(tab.value)
                return (
                  <TabsTrigger key={tab.value} value={tab.value} className="flex items-center gap-2">
                    <span className={tab.accent}>{tab.label}</span>
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
          <div className="p-6">
            {isLoading ? (
              <div className="flex items-center justify-center py-12">
                <RefreshCw className="h-6 w-6 animate-spin text-muted-foreground" />
                <span className="ml-2 text-muted-foreground">Loading bookings...</span>
              </div>
            ) : bookingsData?.results.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <Home className="h-12 w-12 text-muted-foreground mb-4" />
                <h3 className="text-lg font-semibold mb-2">No bookings found</h3>
                <p className="text-sm text-muted-foreground">
                  {searchQuery || statusFilter !== 'all'
                    ? 'Try adjusting your search or filters'
                    : 'Bookings will appear here as they are made'}
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {bookingsData?.results.map((booking) => (
                  <Card key={booking.guid} className="p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 space-y-3">
                        {/* Top row - Booking number and status */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Home className="h-4 w-4 text-muted-foreground" />
                            <span className="font-semibold text-sm">
                              #{booking.booking_number}
                            </span>
                            <Badge
                              variant="secondary"
                              className={statusColors[booking.status]}
                            >
                              {statusLabels[booking.status]}
                            </Badge>
                            {booking.is_overdue && (
                              <span className="inline-flex items-center gap-1 text-xs text-red-600 font-semibold">
                                <AlertTriangle className="h-3.5 w-3.5" /> Overdue
                              </span>
                            )}
                            {booking.conflict_flag && (
                              <Badge variant="outline" className="text-xs">
                                Conflict
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
                            <span>
                              {booking.adults} adults
                              {booking.children > 0 && `, ${booking.children} children`}
                              {booking.babies > 0 && `, ${booking.babies} babies`}
                            </span>
                          </div>
                        </div>

                        {/* Price info */}
                        {booking.booking_price && (
                          <div className="flex items-center gap-4 pt-2 border-t">
                            <div className="flex items-center gap-1.5 text-sm">
                              <DollarSign className="h-4 w-4 text-muted-foreground" />
                              <div className="space-y-0.5">
                                <div className="text-xs text-muted-foreground">
                                  Subtotal: {formatCurrency(booking.booking_price.subtotal)}
                                </div>
                                <div className="text-xs text-muted-foreground">
                                  Service fee: {formatCurrency(booking.booking_price.service_fee)}
                                </div>
                                <div className="font-semibold">
                                  Total: {formatCurrency(booking.booking_price.charge_amount)}
                                </div>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Actions */}
                        <div className="flex flex-wrap gap-2 pt-2 border-t">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => performAction(booking.guid, 'checkin')}
                            disabled={isFetching || ['cancelled', 'completed', 'checked_in', 'no_show'].includes(booking.status)}
                          >
                            Force check-in
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => performAction(booking.guid, 'no_show')}
                            disabled={isFetching || ['cancelled', 'completed', 'no_show'].includes(booking.status)}
                          >
                            Mark no-show
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => performAction(booking.guid, 'ticket')}
                            disabled={isFetching}
                          >
                            Create ticket
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => performAction(booking.guid, 'conflict')}
                            disabled={isFetching || booking.conflict_flag}
                          >
                            Escalate conflict
                          </Button>
                        </div>
                      </div>

                      {/* Status timestamps */}
                      <div className="text-xs text-muted-foreground space-y-1 text-right">
                        {booking.confirmed_at && (
                          <div>
                            <span className="text-green-600">✓</span> Confirmed:{' '}
                            {formatDate(booking.confirmed_at)}
                          </div>
                        )}
                        {booking.checked_in_at && (
                          <div>
                            <span className="text-emerald-600">✓</span> Checked-in:{' '}
                            {formatDate(booking.checked_in_at)}
                          </div>
                        )}
                        {booking.cancelled_at && (
                          <div>
                            <span className="text-red-600">✗</span> Cancelled:{' '}
                            {formatDate(booking.cancelled_at)}
                          </div>
                        )}
                        {booking.no_show_at && (
                          <div>
                            <span className="text-orange-500">!</span> No-show:{' '}
                            {formatDate(booking.no_show_at)}
                          </div>
                        )}
                        {booking.completed_at && (
                          <div>
                            <span className="text-blue-600">✓</span> Completed:{' '}
                            {formatDate(booking.completed_at)}
                          </div>
                        )}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            )}

            {/* Pagination */}
            {bookingsData && bookingsData.results.length > 0 && (
              <div className="flex items-center justify-between mt-6 pt-4 border-t">
                <p className="text-sm text-muted-foreground">
                  Showing {bookingsData.results.length} of {bookingsData.count} bookings
                </p>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <span className="text-sm font-medium px-2">
                    Page {currentPage}
                    {bookingsData.next && '+'}
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={!bookingsData.next}
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
