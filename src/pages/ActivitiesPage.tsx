import { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import api from '@/lib/api'
import ErrorAlert from '@/components/ErrorAlert'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { CalendarDays } from 'lucide-react'
import type { Activity } from '@/types'

const getApiErrorMessage = (err: unknown): string | null => {
  if (
    typeof err === 'object' &&
    err !== null &&
    'response' in err &&
    typeof (err as { response?: { data?: { message?: unknown } } }).response?.data?.message === 'string'
  ) {
    return (err as { response: { data: { message: string } } }).response.data.message
  }
  return null
}

export default function ActivitiesPage() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const [activities, setActivities] = useState<Activity[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [togglingGuid, setTogglingGuid] = useState<string | null>(null)

  const fetchActivities = useCallback(async () => {
    try {
      setLoading(true)
      setError(null)
      const response = await api.get<Activity[]>('/admin-auth/activities/')
      setActivities(response.data)
    } catch (err: unknown) {
      console.error('Error fetching activities:', err)
      setError(getApiErrorMessage(err) ?? t('activities.error'))
    } finally {
      setLoading(false)
    }
  }, [t])

  useEffect(() => {
    void fetchActivities()
  }, [fetchActivities])

  const toggleActive = async (activity: Activity) => {
    try {
      setTogglingGuid(activity.guid)
      const response = await api.patch<Activity>(`/admin-auth/activities/${activity.guid}/`, {
        is_active: !activity.is_active,
      })
      setActivities((prev) => prev.map((a) => (a.guid === activity.guid ? response.data : a)))
    } catch (err) {
      console.error('Error toggling activity status:', err)
    } finally {
      setTogglingGuid(null)
    }
  }

  if (loading) {
    return (
      <div className="flex h-full items-center justify-center p-6">
        <p className="text-sm text-muted-foreground">{t('activities.loading')}</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="p-4 md:p-6">
        <ErrorAlert message={error} onRetry={fetchActivities} />
      </div>
    )
  }

  return (
    <div className="flex h-full min-h-0 flex-col overflow-y-auto p-4 md:p-6">
      <div className="mb-4">
        <h1 className="text-2xl font-semibold">{t('activities.title')}</h1>
        <p className="text-sm text-muted-foreground">{t('activities.subtitle')}</p>
      </div>

      <div className="overflow-x-auto rounded-xl border">
        <table className="w-full text-sm">
          <thead className="bg-muted/50 text-left text-muted-foreground">
            <tr>
              <th className="p-3 font-medium">{t('activities.table.name')}</th>
              <th className="p-3 font-medium">{t('activities.table.category')}</th>
              <th className="p-3 font-medium">{t('activities.table.partner')}</th>
              <th className="p-3 font-medium">{t('activities.table.buffer')}</th>
              <th className="p-3 font-medium">{t('activities.table.status')}</th>
              <th className="p-3 font-medium">{t('activities.table.created')}</th>
              <th className="p-3 font-medium">{t('activities.table.action')}</th>
            </tr>
          </thead>
          <tbody>
            {activities.map((activity) => (
              <tr key={activity.guid} className="border-t">
                <td className="p-3 font-medium">{activity.name}</td>
                <td className="p-3">
                  <Badge variant="secondary">{t(`activities.category.${activity.category}`)}</Badge>
                </td>
                <td className="p-3 text-muted-foreground">#{activity.partner_user_id}</td>
                <td className="p-3 text-muted-foreground">{activity.buffer_minutes}</td>
                <td className="p-3">
                  <Badge variant={activity.is_active ? 'default' : 'outline'}>
                    {t(activity.is_active ? 'activities.status.active' : 'activities.status.inactive')}
                  </Badge>
                </td>
                <td className="p-3 text-muted-foreground">
                  {new Date(activity.created_at).toLocaleDateString()}
                </td>
                <td className="p-3">
                  <div className="flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => navigate(`/activities/${activity.guid}/calendar`)}
                    >
                      <CalendarDays className="h-4 w-4" />
                      {t('activities.actions.viewCalendar')}
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      disabled={togglingGuid === activity.guid}
                      onClick={() => toggleActive(activity)}
                    >
                      {t(activity.is_active ? 'activities.actions.deactivate' : 'activities.actions.activate')}
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
