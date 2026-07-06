import { useCallback, useEffect, useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { addDays, format } from 'date-fns'
import FullCalendar from '@fullcalendar/react'
import resourceTimelinePlugin from '@fullcalendar/resource-timeline'
import interactionPlugin from '@fullcalendar/interaction'
import api from '@/lib/api'
import ErrorAlert from '@/components/ErrorAlert'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import type { ActivityResourceCalendarRow } from '@/types'

const STATUS_COLORS: Record<string, string> = {
  pending_payment: '#f59e0b',
  confirmed: '#22c55e',
  completed: '#94a3b8',
  cancelled: '#ef4444',
  expired: '#cbd5e1',
}

export default function ActivityCalendarPage() {
  const { guid } = useParams<{ guid: string }>()
  const { t } = useTranslation()
  const navigate = useNavigate()
  const [rows, setRows] = useState<ActivityResourceCalendarRow[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [anchorDate, setAnchorDate] = useState(() => new Date())

  const fromDate = useMemo(() => format(anchorDate, "yyyy-MM-dd'T'00:00:00"), [anchorDate])
  const toDate = useMemo(() => format(addDays(anchorDate, 1), "yyyy-MM-dd'T'00:00:00"), [anchorDate])

  const fetchCalendar = useCallback(async () => {
    if (!guid) return
    try {
      setLoading(true)
      setError(null)
      const response = await api.get<ActivityResourceCalendarRow[]>(
        `/admin-auth/activities/${guid}/calendar/`,
        { params: { from_date: fromDate, to_date: toDate } }
      )
      setRows(response.data)
    } catch (err) {
      console.error('Error fetching activity calendar:', err)
      setError(t('activities.error'))
    } finally {
      setLoading(false)
    }
  }, [guid, fromDate, toDate, t])

  useEffect(() => {
    void fetchCalendar()
  }, [fetchCalendar])

  const resources = useMemo(
    () => rows.map((row) => ({ id: String(row.resource.id), title: row.resource.label })),
    [rows]
  )

  const events = useMemo(
    () =>
      rows.flatMap((row) =>
        row.bookings.map((booking) => ({
          id: String(booking.id),
          resourceId: String(row.resource.id),
          title: `#${booking.id} · ${booking.price_snapshot}`,
          start: booking.starts_at,
          end: booking.blocked_until,
          backgroundColor: STATUS_COLORS[booking.status] ?? '#94a3b8',
          borderColor: STATUS_COLORS[booking.status] ?? '#94a3b8',
        }))
      ),
    [rows]
  )

  return (
    <div className="flex h-full min-h-0 flex-col overflow-hidden p-4 md:p-6">
      <div className="mb-4 flex items-center gap-3">
        <Button variant="ghost" size="sm" onClick={() => navigate('/activities')}>
          <ArrowLeft className="h-4 w-4" />
          {t('common.back')}
        </Button>
        <div>
          <h1 className="text-xl font-semibold">{t('activities.calendar.title')}</h1>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <input
            type="date"
            className="rounded-md border px-2 py-1 text-sm"
            value={format(anchorDate, 'yyyy-MM-dd')}
            onChange={(e) => e.target.value && setAnchorDate(new Date(e.target.value))}
          />
        </div>
      </div>

      {error && (
        <div className="mb-4">
          <ErrorAlert message={error} onRetry={fetchCalendar} />
        </div>
      )}

      {!loading && !error && resources.length === 0 && (
        <p className="text-sm text-muted-foreground">{t('activities.calendar.empty')}</p>
      )}

      {resources.length > 0 && (
        <div className="min-h-0 flex-1">
          <FullCalendar
            plugins={[resourceTimelinePlugin, interactionPlugin]}
            initialView="resourceTimelineDay"
            initialDate={anchorDate}
            headerToolbar={false}
            resources={resources}
            events={events}
            resourceAreaWidth={200}
            resourceAreaHeaderContent={t('activities.calendar.resourceColumn')}
            slotDuration={{ minutes: 15 }}
            height="100%"
          />
        </div>
      )}
    </div>
  )
}
