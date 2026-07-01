import { useEffect, useReducer, useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  User,
  Calendar,
  BedDouble,
  Utensils,
  CreditCard,
  Building2,
  FileText,
  XCircle,
  LogIn,
  LogOut,
  Loader2,
  Pencil,
  Save,
} from "lucide-react"
import { format, parseISO } from "date-fns"
import type { PMSBooking } from "@/types/pms"
import { cn } from "@/lib/utils"

interface BookingDetailModalProps {
  booking: PMSBooking | null
  open: boolean
  onOpenChange: (open: boolean) => void
  onStatusChange: (bookingId: number, status: string) => Promise<void>
  onUpdate: (bookingId: number, booking: Partial<PMSBooking>) => Promise<void>
  onClose: () => void
}

const statusConfig: Record<string, { label: string; color: string }> = {
  new: { label: "New", color: "bg-green-100 text-green-700 border-green-200" },
  checked_in: { label: "Checked In", color: "bg-blue-100 text-blue-700 border-blue-200" },
  checked_out: { label: "Checked Out", color: "bg-gray-100 text-gray-700 border-gray-200" },
  cancelled: { label: "Cancelled", color: "bg-red-100 text-red-700 border-red-200" },
}

const paymentStatusConfig: Record<string, { color: string }> = {
  pending: { color: "bg-yellow-100 text-yellow-700 border-yellow-200" },
  paid: { color: "bg-green-100 text-green-700 border-green-200" },
  partial: { color: "bg-orange-100 text-orange-700 border-orange-200" },
  refunded: { color: "bg-gray-100 text-gray-700 border-gray-200" },
}

const mealPlans = ["RO", "BB", "HB", "FB", "AI", "UAI"]
const sources = ["direct", "ota", "b2b", "walk_in"]
const paymentStatuses = Object.keys(paymentStatusConfig)

interface ModalState { pendingStatus: string | null }

function modalReducer(state: ModalState, action: { type: "SET_PENDING"; status: string | null }): ModalState {
  switch (action.type) {
    case "SET_PENDING": return { ...state, pendingStatus: action.status }
    default: return state
  }
}

interface BookingEditForm {
  guest_first_name: string
  guest_last_name: string
  check_in: string
  check_out: string
  adult_count: string
  child_count: string
  meal_plan: string
  source: string
  payment_status: string
  rate: string
  total_cost: string
  currency: string
  notes: string
}

function getInitialForm(booking: PMSBooking): BookingEditForm {
  return {
    guest_first_name: booking.guest_first_name || "",
    guest_last_name: booking.guest_last_name || "",
    check_in: booking.check_in || "",
    check_out: booking.check_out || "",
    adult_count: String(booking.adult_count ?? 1),
    child_count: String(booking.child_count ?? 0),
    meal_plan: booking.meal_plan || "RO",
    source: booking.source || "direct",
    payment_status: booking.payment_status || "pending",
    rate: booking.rate ? String(booking.rate) : "",
    total_cost: booking.total_cost ? String(booking.total_cost) : "",
    currency: booking.currency || "USD",
    notes: booking.notes || "",
  }
}

export default function BookingDetailModal({
  booking,
  open,
  onOpenChange,
  onStatusChange,
  onUpdate,
  onClose,
}: BookingDetailModalProps) {
  const [{ pendingStatus }, modalDispatch] = useReducer(modalReducer, { pendingStatus: null })
  const [isEditing, setIsEditing] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [form, setForm] = useState<BookingEditForm | null>(null)

  useEffect(() => {
    if (booking && open) {
      setForm(getInitialForm(booking))
      setIsEditing(false)
    }
  }, [booking, open])

  if (!booking) return null

  const status = statusConfig[booking.status || "new"] || statusConfig.new
  const paymentStatus = paymentStatusConfig[booking.payment_status || "pending"] || paymentStatusConfig.pending

  const nights = booking.check_in && booking.check_out
    ? Math.ceil((new Date(booking.check_out).getTime() - new Date(booking.check_in).getTime()) / (1000 * 60 * 60 * 24))
    : 0

  const availableActions = [
    { status: "checked_in", label: "Check In", icon: <LogIn className="h-4 w-4 mr-2" />, condition: booking.status === "new" },
    { status: "checked_out", label: "Check Out", icon: <LogOut className="h-4 w-4 mr-2" />, condition: booking.status === "checked_in" },
    { status: "cancelled", label: "Cancel", icon: <XCircle className="h-4 w-4 mr-2" />, condition: booking.status !== "cancelled" && booking.status !== "checked_out" },
  ]

  const updateField = (field: keyof BookingEditForm, value: string) => {
    setForm((prev) => (prev ? { ...prev, [field]: value } : prev))
  }

  const handleSave = async () => {
    if (!form || !booking.id) return
    setIsSaving(true)
    try {
      await onUpdate(booking.id, {
        guest_first_name: form.guest_first_name || null,
        guest_last_name: form.guest_last_name || null,
        check_in: form.check_in,
        check_out: form.check_out,
        adult_count: parseInt(form.adult_count) || 1,
        child_count: parseInt(form.child_count) || 0,
        meal_plan: form.meal_plan as PMSBooking["meal_plan"],
        source: form.source as PMSBooking["source"],
        payment_status: form.payment_status as PMSBooking["payment_status"],
        rate: form.rate || null,
        total_cost: form.total_cost || null,
        currency: form.currency || "USD",
        notes: form.notes || null,
      })
      setIsEditing(false)
    } finally {
      setIsSaving(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[92vh] max-w-[min(620px,calc(100vw-24px))] gap-0 overflow-hidden p-0">
        <DialogHeader className="border-b px-5 pb-4 pt-5 pr-12 sm:px-6 sm:pr-14">
          <div className="flex min-w-0 flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div className="min-w-0 space-y-1">
              <DialogTitle className="truncate text-lg">Booking Details</DialogTitle>
              <p className="text-sm text-muted-foreground">#{booking.booking_number || booking.id}</p>
            </div>
            <div className="flex shrink-0 flex-wrap items-center gap-2">
              <Badge variant="outline" className={cn("text-xs", status.color)}>
                {status.label}
              </Badge>
              <Button
                type="button"
                variant="outline"
                size="sm"
                disabled={isSaving || !!pendingStatus}
                onClick={() => setIsEditing((v) => !v)}
              >
                <Pencil className="h-4 w-4 mr-2" />
                {isEditing ? "Cancel" : "Edit"}
              </Button>
            </div>
          </div>
        </DialogHeader>

        <ScrollArea className="max-h-[calc(92vh-150px)] px-5 py-5 sm:px-6">
          {isEditing && form ? (
            <form className="space-y-4 pb-6" onSubmit={(e) => { e.preventDefault(); void handleSave() }}>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label>First Name</Label>
                  <Input value={form.guest_first_name} onChange={(e) => updateField("guest_first_name", e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label>Last Name</Label>
                  <Input value={form.guest_last_name} onChange={(e) => updateField("guest_last_name", e.target.value)} />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label>Check In</Label>
                  <Input type="date" value={form.check_in} onChange={(e) => updateField("check_in", e.target.value)} required />
                </div>
                <div className="space-y-2">
                  <Label>Check Out</Label>
                  <Input type="date" value={form.check_out} onChange={(e) => updateField("check_out", e.target.value)} required />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label>Adults</Label>
                  <Input type="number" min="1" value={form.adult_count} onChange={(e) => updateField("adult_count", e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label>Children</Label>
                  <Input type="number" min="0" value={form.child_count} onChange={(e) => updateField("child_count", e.target.value)} />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label>Meal Plan</Label>
                  <Select value={form.meal_plan} onValueChange={(v) => updateField("meal_plan", v)}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                      {mealPlans.map((plan) => <SelectItem key={plan} value={plan}>{plan}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Source</Label>
                  <Select value={form.source} onValueChange={(v) => updateField("source", v)}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                      {sources.map((source) => <SelectItem key={source} value={source}>{source}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                <div className="space-y-2">
                  <Label>Rate</Label>
                  <Input type="number" min="0" step="0.01" value={form.rate} onChange={(e) => updateField("rate", e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label>Payment</Label>
                  <Select value={form.payment_status} onValueChange={(v) => updateField("payment_status", v)}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                      {paymentStatuses.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Total</Label>
                  <Input type="number" min="0" step="0.01" value={form.total_cost} onChange={(e) => updateField("total_cost", e.target.value)} />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-[120px_1fr]">
                <div className="space-y-2">
                  <Label>Currency</Label>
                  <Input value={form.currency} onChange={(e) => updateField("currency", e.target.value.toUpperCase())} maxLength={3} />
                </div>
                <div className="space-y-2">
                  <Label>Notes</Label>
                  <Input value={form.notes} onChange={(e) => updateField("notes", e.target.value)} />
                </div>
              </div>
            </form>
          ) : (
            <div className="space-y-4 pb-6">
              <div className="space-y-2">
                <h4 className="text-sm font-semibold flex items-center gap-2">
                  <User className="h-4 w-4 text-muted-foreground" />Guest
                </h4>
                <div className="bg-muted/50 rounded-lg p-3 space-y-1">
                  <p className="text-sm font-medium">
                    {[booking.guest_first_name, booking.guest_last_name].filter(Boolean).join(" ") || "Guest"}
                  </p>
                  <p className="text-xs text-muted-foreground">{booking.adult_count} adults, {booking.child_count} children</p>
                </div>
              </div>
              <Separator />
              <div className="space-y-2">
                <h4 className="text-sm font-semibold flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />Dates
                </h4>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <div className="bg-muted/50 rounded-lg p-3">
                    <p className="text-xs text-muted-foreground">Check In</p>
                    <p className="text-sm font-medium">{booking.check_in ? format(parseISO(booking.check_in), "MMM d, yyyy") : "-"}</p>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-3">
                    <p className="text-xs text-muted-foreground">Check Out</p>
                    <p className="text-sm font-medium">{booking.check_out ? format(parseISO(booking.check_out), "MMM d, yyyy") : "-"}</p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">{nights} nights</p>
              </div>
              <Separator />
              <div className="space-y-2">
                <h4 className="text-sm font-semibold flex items-center gap-2">
                  <BedDouble className="h-4 w-4 text-muted-foreground" />Room
                </h4>
                <div className="bg-muted/50 rounded-lg p-3 space-y-1">
                  <p className="text-sm font-medium">{booking.room_number || `#${booking.room_id}`}</p>
                  <p className="text-xs text-muted-foreground">Rate: {booking.rate || "-"}</p>
                </div>
              </div>
              <Separator />
              <div className="space-y-2">
                <h4 className="text-sm font-semibold flex items-center gap-2">
                  <CreditCard className="h-4 w-4 text-muted-foreground" />Payment
                </h4>
                <div className="flex items-center justify-between bg-muted/50 rounded-lg p-3">
                  <Badge variant="outline" className={cn("text-xs", paymentStatus.color)}>
                    {booking.payment_status || "pending"}
                  </Badge>
                  <div className="text-right">
                    <p className="text-sm font-semibold">{booking.total_cost || "0"}</p>
                    <p className="text-xs text-muted-foreground">{booking.currency}</p>
                  </div>
                </div>
              </div>
              <Separator />
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div className="bg-muted/50 rounded-lg p-3">
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    <Building2 className="h-3 w-3" /> Source
                  </p>
                  <p className="text-sm font-medium capitalize">{booking.source}</p>
                </div>
                <div className="bg-muted/50 rounded-lg p-3">
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    <Utensils className="h-3 w-3" /> Meal Plan
                  </p>
                  <p className="text-sm font-medium">{booking.meal_plan}</p>
                </div>
              </div>
              {booking.notes && (
                <>
                  <Separator />
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold flex items-center gap-2">
                      <FileText className="h-4 w-4 text-muted-foreground" />Notes
                    </h4>
                    <p className="text-sm bg-muted/50 rounded-lg p-3">{booking.notes}</p>
                  </div>
                </>
              )}
            </div>
          )}
        </ScrollArea>

        <DialogFooter className="flex-row items-center justify-between gap-3 space-x-0 border-t px-5 py-4 sm:space-x-0 sm:px-6">
          {isEditing ? (
            <div className="flex min-w-0 flex-1 flex-wrap items-center gap-2">
              <Button size="sm" disabled={isSaving} onClick={handleSave}>
                {isSaving ? <Loader2 className="h-4 w-4 mr-2 animate-spin" /> : <Save className="h-4 w-4 mr-2" />}
                {isSaving ? "Saving..." : "Save"}
              </Button>
            </div>
          ) : (
            <div className="flex min-w-0 flex-1 flex-wrap items-center gap-2">
              {availableActions
                .filter((action) => action.condition)
                .map((action) => {
                  const isPending = pendingStatus === action.status
                  return (
                    <Button
                      key={action.status}
                      size="sm"
                      disabled={isPending || !!pendingStatus}
                      variant={action.status === "cancelled" ? "destructive" : "default"}
                      onClick={async () => {
                        modalDispatch({ type: "SET_PENDING", status: action.status })
                        try {
                          await onStatusChange(booking.id!, action.status)
                          onClose()
                        } catch {
                          // Error handled by parent
                        } finally {
                          modalDispatch({ type: "SET_PENDING", status: null })
                        }
                      }}
                    >
                      {isPending ? <Loader2 className="h-4 w-4 mr-2 animate-spin" /> : action.icon}
                      {isPending ? "Processing..." : action.label}
                    </Button>
                  )
                })}
            </div>
          )}
          <Button className="shrink-0" variant="outline" size="sm" disabled={isSaving} onClick={onClose}>
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
