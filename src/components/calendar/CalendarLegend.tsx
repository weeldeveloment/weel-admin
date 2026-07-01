import { cn } from "@/lib/utils"

const statusColors: Record<string, { bg: string; label: string }> = {
  new: { bg: "bg-green-500", label: "New" },
  checked_in: { bg: "bg-sky-400", label: "Checked In" },
  checked_out: { bg: "bg-gray-400", label: "Checked Out" },
  cancelled: { bg: "bg-red-400", label: "Cancelled" },
}

export default function CalendarLegend() {
  return (
    <div className="flex items-center gap-4 flex-wrap text-xs">
      {Object.entries(statusColors).map(([key, colors]) => (
        <div key={key} className="flex items-center gap-1.5">
          <span className={cn("w-3 h-3 rounded-full", colors.bg)} />
          <span className="text-muted-foreground">{colors.label}</span>
        </div>
      ))}
    </div>
  )
}
