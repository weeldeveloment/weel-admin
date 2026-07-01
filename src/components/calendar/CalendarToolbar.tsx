import { useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ChevronLeft,
  ChevronRight,
  Calendar as CalendarIcon,
  Search,
  Undo2,
  Filter,
  Users,
  BedDouble,
  TrendingUp,
  Percent,
} from "lucide-react"
import { format } from "date-fns"
import type { PMSBooking, PMSRoom, CalendarView } from "@/types/pms"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface CalendarToolbarProps {
  currentDate: Date
  view: CalendarView
  bookings: PMSBooking[]
  rooms: PMSRoom[]
  searchQuery: string
  filterStatus: string
  filterRoomType: string
  filterFloor: string
  undoStackLength: number
  onDateChange: (date: Date) => void
  onViewChange: (view: CalendarView) => void
  onSearchChange: (query: string) => void
  onFilterStatusChange: (status: string) => void
  onFilterRoomTypeChange: (type: string) => void
  onFilterFloorChange: (floor: string) => void
  onUndo: () => void
  compact?: boolean
}

const statusOptions = [
  { value: "all", label: "All Statuses" },
  { value: "new", label: "New" },
  { value: "checked_in", label: "Checked In" },
  { value: "checked_out", label: "Checked Out" },
  { value: "cancelled", label: "Cancelled" },
]

export default function CalendarToolbar({
  currentDate,
  view,
  bookings,
  rooms,
  searchQuery,
  filterStatus,
  filterRoomType,
  filterFloor,
  undoStackLength,
  onDateChange,
  onViewChange,
  onSearchChange,
  onFilterStatusChange,
  onFilterRoomTypeChange,
  onFilterFloorChange,
  onUndo,
  compact = false,
}: CalendarToolbarProps) {
  const navigateDate = (direction: number) => {
    const newDate = new Date(currentDate)
    if (view === "day") newDate.setDate(newDate.getDate() + direction)
    else if (view === "week") newDate.setDate(newDate.getDate() + direction * 7)
    else if (view === "month") newDate.setMonth(newDate.getMonth() + direction)
    onDateChange(newDate)
  }

  const stats = useMemo(() => {
    const today = new Date()
    const todayStr = format(today, "yyyy-MM-dd")
    const activeBookings = bookings.filter((b) => {
      if (!b.check_in || !b.check_out) return false
      return b.check_in <= todayStr && b.check_out > todayStr
    })
    const totalRooms = rooms.length
    const occupiedRooms = new Set(activeBookings.map((b) => b.room_id)).size
    const occupancyRate = totalRooms > 0 ? Math.round((occupiedRooms / totalRooms) * 100) : 0
    const totalGuests = activeBookings.reduce((sum, b) => sum + (b.adult_count || 0) + (b.child_count || 0), 0)
    const revenue = activeBookings.reduce((sum, b) => sum + parseFloat(b.total_cost || "0"), 0)
    return { occupancyRate, occupiedRooms, totalRooms, totalGuests, revenue, activeBookingsCount: activeBookings.length }
  }, [bookings, rooms])

  const roomTypes = useMemo(() => {
    const types = new Map<number, string>()
    rooms.forEach((r) => {
      if (r.room_type_id) types.set(r.room_type_id, `Room Type #${r.room_type_id}`)
    })
    return Array.from(types.entries())
  }, [rooms])

  const floors = useMemo(() => {
    const floorSet = new Set<number>()
    rooms.forEach((r) => { if (r.floor) floorSet.add(r.floor) })
    return Array.from(floorSet).sort((a, b) => a - b)
  }, [rooms])

  return (
    <div className="space-y-4">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-bold">Calendar</h1>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <Button variant="outline" size="sm" onClick={() => navigateDate(-1)}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="sm" onClick={() => onDateChange(new Date())}>
            <CalendarIcon className="h-4 w-4 mr-2" />Today
          </Button>
          <Button variant="outline" size="sm" onClick={() => navigateDate(1)}>
            <ChevronRight className="h-4 w-4" />
          </Button>
          <span className="text-sm font-medium ml-2 min-w-[140px]">
            {format(currentDate, "MMMM d, yyyy")}
          </span>
          <Tabs value={view} onValueChange={(v) => onViewChange(v as CalendarView)} className="ml-4">
            <TabsList className="h-9">
              <TabsTrigger value="day" className="text-xs px-3">Day</TabsTrigger>
              <TabsTrigger value="week" className="text-xs px-3">Week</TabsTrigger>
              <TabsTrigger value="month" className="text-xs px-3">Month</TabsTrigger>
            </TabsList>
          </Tabs>
          {undoStackLength > 0 && (
            <Button variant="outline" size="sm" onClick={onUndo} className="ml-2">
              <Undo2 className="h-4 w-4 mr-2" />Undo
            </Button>
          )}
        </div>
      </div>

      {!compact && (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
          <div className="flex items-center gap-3 p-3 rounded-lg border bg-card">
            <div className="p-2 rounded-md bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <Percent className="h-4 w-4" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Occupancy</p>
              <p className="text-lg font-semibold">{stats.occupancyRate}%</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-lg border bg-card">
            <div className="p-2 rounded-md bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">
              <BedDouble className="h-4 w-4" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Occupied Rooms</p>
              <p className="text-lg font-semibold">{stats.occupiedRooms}/{stats.totalRooms}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-lg border bg-card">
            <div className="p-2 rounded-md bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300">
              <Users className="h-4 w-4" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Total Guests</p>
              <p className="text-lg font-semibold">{stats.totalGuests}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-lg border bg-card">
            <div className="p-2 rounded-md bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">
              <TrendingUp className="h-4 w-4" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Revenue Today</p>
              <p className="text-lg font-semibold">${stats.revenue.toFixed(0)}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-lg border bg-card">
            <div className="p-2 rounded-md bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300">
              <CalendarIcon className="h-4 w-4" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Active Bookings</p>
              <p className="text-lg font-semibold">{stats.activeBookingsCount}</p>
            </div>
          </div>
        </div>
      )}

      {!compact && (
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 flex-wrap">
          <div className="relative flex-1 max-w-xs">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search rooms..."
              className="pl-9 h-9"
            />
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <Select value={filterStatus} onValueChange={onFilterStatusChange}>
              <SelectTrigger className="w-[140px] h-9 text-xs">
                <SelectValue placeholder="All Statuses" />
              </SelectTrigger>
              <SelectContent>
                {statusOptions.map((opt) => (
                  <SelectItem key={opt.value} value={opt.value} className="text-xs">
                    {opt.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={filterRoomType} onValueChange={onFilterRoomTypeChange}>
              <SelectTrigger className="w-[140px] h-9 text-xs">
                <SelectValue placeholder="Room Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all" className="text-xs">All Types</SelectItem>
                {roomTypes.map(([id, label]) => (
                  <SelectItem key={id} value={String(id)} className="text-xs">{label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={filterFloor} onValueChange={onFilterFloorChange}>
              <SelectTrigger className="w-[120px] h-9 text-xs">
                <SelectValue placeholder="Floor" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all" className="text-xs">All Floors</SelectItem>
                {floors.map((f) => (
                  <SelectItem key={f} value={String(f)} className="text-xs">Floor {f}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            {(filterStatus || filterRoomType || filterFloor || searchQuery) && (
              <Button variant="ghost" size="sm" className="h-9 text-xs" onClick={() => {
                onFilterStatusChange("")
                onFilterRoomTypeChange("all")
                onFilterFloorChange("all")
                onSearchChange("")
              }}>
                Clear
              </Button>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
