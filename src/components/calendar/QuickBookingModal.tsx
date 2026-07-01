import { useState, useEffect } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { CalendarIcon, User, BedDouble, Utensils, CreditCard } from "lucide-react"
import { format } from "date-fns"
import type { PMSRoom } from "@/types/pms"

interface QuickBookingModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  rooms: PMSRoom[]
  initialCheckIn?: string
  initialCheckOut?: string
  initialRoomId?: number
  initialRoomNumber?: string
  initialRoomTypeId?: number | null
  onCreate: (booking: Record<string, unknown>) => void
}

const mealPlans = ["RO", "BB", "HB", "FB", "AI", "UAI"]
const sources = ["direct", "ota", "b2b", "walk_in"]

export default function QuickBookingModal({
  open,
  onOpenChange,
  rooms,
  initialCheckIn,
  initialCheckOut,
  initialRoomId,
  initialRoomNumber,
  initialRoomTypeId,
  onCreate,
}: QuickBookingModalProps) {
  const now = new Date()
  const [form, setForm] = useState({
    room_id: String(initialRoomId || ""),
    guest_first_name: "",
    guest_last_name: "",
    check_in: initialCheckIn || format(now, "yyyy-MM-dd"),
    check_out: initialCheckOut || format(new Date(now.getTime() + 86400000), "yyyy-MM-dd"),
    adult_count: "1",
    child_count: "0",
    meal_plan: "RO",
    source: "direct",
    notes: "",
  })

  useEffect(() => {
    if (open) {
      setForm({
        room_id: String(initialRoomId || ""),
        guest_first_name: "",
        guest_last_name: "",
        check_in: initialCheckIn || format(now, "yyyy-MM-dd"),
        check_out: initialCheckOut || format(new Date(now.getTime() + 86400000), "yyyy-MM-dd"),
        adult_count: "1",
        child_count: "0",
        meal_plan: "RO",
        source: "direct",
        notes: "",
      })
    }
  }, [open, initialCheckIn, initialCheckOut, initialRoomId])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const roomId = parseInt(form.room_id)
    if (!roomId) return
    onCreate({
      room_id: roomId,
      guest: {
        first_name: form.guest_first_name || "Guest",
        last_name: form.guest_last_name || null,
      },
      check_in: form.check_in,
      check_out: form.check_out,
      adult_count: parseInt(form.adult_count) || 1,
      child_count: parseInt(form.child_count) || 0,
      meal_plan: form.meal_plan,
      source: form.source,
      notes: form.notes || null,
    })
    onOpenChange(false)
  }

  const updateField = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <CalendarIcon className="h-5 w-5" />
            Quick Booking
          </DialogTitle>
        </DialogHeader>

        {(initialRoomId || initialCheckIn) && (
          <div className="bg-muted/50 rounded-lg px-3 py-2 text-sm space-y-0.5">
            {initialRoomNumber && (
              <div className="flex items-center gap-2 text-muted-foreground">
                <BedDouble className="h-3.5 w-3.5" />
                <span>
                  Room {initialRoomNumber}
                  {initialRoomTypeId != null && ` (Type #${initialRoomTypeId})`}
                </span>
              </div>
            )}
            {initialCheckIn && (
              <div className="flex items-center gap-2 text-muted-foreground">
                <CalendarIcon className="h-3.5 w-3.5" />
                <span>
                  {format(new Date(initialCheckIn), "MMM d, yyyy")}
                  {initialCheckOut ? ` — ${format(new Date(initialCheckOut), "MMM d, yyyy")}` : ""}
                </span>
              </div>
            )}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label className="flex items-center gap-2">
              <BedDouble className="h-4 w-4 text-muted-foreground" />
              Room *
            </Label>
            <Select value={form.room_id} onValueChange={(v) => updateField("room_id", v)}>
              <SelectTrigger>
                <SelectValue placeholder="Select a room" />
              </SelectTrigger>
              <SelectContent>
                {rooms.map((room) => (
                  <SelectItem key={room.id} value={String(room.id)}>
                    {room.room_number} (Floor {room.floor})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-2">
              <Label className="flex items-center gap-2">
                <User className="h-4 w-4 text-muted-foreground" />
                First Name
              </Label>
              <Input
                value={form.guest_first_name}
                onChange={(e) => updateField("guest_first_name", e.target.value)}
                placeholder="Guest"
              />
            </div>
            <div className="space-y-2">
              <Label className="flex items-center gap-2">
                <User className="h-4 w-4 text-muted-foreground" />
                Last Name
              </Label>
              <Input
                value={form.guest_last_name}
                onChange={(e) => updateField("guest_last_name", e.target.value)}
                placeholder="(optional)"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-2">
              <Label>Check In *</Label>
              <Input type="date" value={form.check_in} onChange={(e) => updateField("check_in", e.target.value)} required />
            </div>
            <div className="space-y-2">
              <Label>Check Out *</Label>
              <Input type="date" value={form.check_out} onChange={(e) => updateField("check_out", e.target.value)} required />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-2">
              <Label>Adults</Label>
              <Input type="number" min="1" value={form.adult_count} onChange={(e) => updateField("adult_count", e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label>Children</Label>
              <Input type="number" min="0" value={form.child_count} onChange={(e) => updateField("child_count", e.target.value)} />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-2">
              <Label className="flex items-center gap-2">
                <Utensils className="h-4 w-4 text-muted-foreground" />
                Meal Plan
              </Label>
              <Select value={form.meal_plan} onValueChange={(v) => updateField("meal_plan", v)}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  {mealPlans.map((plan) => <SelectItem key={plan} value={plan}>{plan}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label className="flex items-center gap-2">
                <CreditCard className="h-4 w-4 text-muted-foreground" />
                Source
              </Label>
              <Select value={form.source} onValueChange={(v) => updateField("source", v)}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  {sources.map((src) => <SelectItem key={src} value={src}>{src}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label>Notes</Label>
            <Input value={form.notes} onChange={(e) => updateField("notes", e.target.value)} placeholder="Optional notes" />
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>Cancel</Button>
            <Button type="submit">Create Booking</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
