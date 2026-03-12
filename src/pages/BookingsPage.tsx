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
  User,
  Calendar,
  Users,
  DollarSign,
  RefreshCw,
  ChevronLeft,
  ChevronRight,
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
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed'
  cancellation_reason?: string
  confirmed_at?: string
  cancelled_at?: string
  completed_at?: string
  created_at: string
  client: BookingClient
  property: BookingProperty
  booking_price?: BookingPrice
}

interface PaginatedBookings {
  count: number
  next: string | null
  previous: string | null
  results: Booking[]
}

const statusColors: Record<string, string> = {
  pending: 'bg-yellow-500 text-yellow-50',
  confirmed: 'bg-green-500 text-green-50',
  cancelled: 'bg-red-500 text-red-50',
  completed: 'bg-blue-500 text-blue-50',
}

const statusLabels: Record<string, string> = {
  pending: 'Pending',
  confirmed: 'Confirmed',
  cancelled: 'Cancelled',
  completed: 'Completed',
}

export default function BookingsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState<string>('all')
  const [currentPage, setCurrentPage] = useState(1)

  const fetchBookings = async () => {
    const params: Record<string, string> = {
      page: currentPage.toString(),
      page_size: '20',
    }

    if (searchQuery) {
      params.search = searchQuery
    }

    if (statusFilter !== 'all') {
      params.status = statusFilter
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
    queryKey: ['bookings', currentPage, searchQuery, statusFilter],
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
        <div className="border-b bg-background p-4">
          <div className="flex items-center gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by booking number or phone..."
                value={searchQuery}
                onChange={handleSearch}
                className="pl-9 max-w-md"
              />
            </div>
            <Tabs value={statusFilter} onValueChange={handleStatusChange}>
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="pending">Pending</TabsTrigger>
                <TabsTrigger value="confirmed">Confirmed</TabsTrigger>
                <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
                <TabsTrigger value="completed">Completed</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
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
                      </div>

                      {/* Status timestamps */}
                      <div className="text-xs text-muted-foreground space-y-1 text-right">
                        {booking.confirmed_at && (
                          <div>
                            <span className="text-green-600">✓</span> Confirmed:{' '}
                            {formatDate(booking.confirmed_at)}
                          </div>
                        )}
                        {booking.cancelled_at && (
                          <div>
                            <span className="text-red-600">✗</span> Cancelled:{' '}
                            {formatDate(booking.cancelled_at)}
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
