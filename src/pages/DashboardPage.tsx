import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Users, MessageSquare, Home, TrendingUp } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function DashboardPage() {
  const { t } = useTranslation()
  const stats = [
    {
      title: t('dashboard.stats.totalPartners'),
      value: '248',
      change: '+12%',
      icon: Users,
    },
    {
      title: t('dashboard.stats.activeConversations'),
      value: '43',
      change: '+8%',
      icon: MessageSquare,
    },
    {
      title: t('dashboard.stats.propertiesListed'),
      value: '1,234',
      change: '+23%',
      icon: Home,
    },
    {
      title: t('dashboard.stats.growthRate'),
      value: '18.2%',
      change: '+4%',
      icon: TrendingUp,
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">{t('dashboard.title')}</h1>
        <p className="text-muted-foreground">
          {t('dashboard.welcome')}
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-600">{stat.change}</span> {t('dashboard.stats.changeSuffix')}
                </p>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>{t('dashboard.activity.recent')}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="h-2 w-2 rounded-full bg-green-500" />
                <div className="flex-1">
                  <p className="text-sm font-medium">{t('dashboard.activity.partnerRegistered')}</p>
                  <p className="text-xs text-muted-foreground">{t('dashboard.activity.ago2m')}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-2 w-2 rounded-full bg-blue-500" />
                <div className="flex-1">
                  <p className="text-sm font-medium">{t('dashboard.activity.propertyUpdated')}</p>
                  <p className="text-xs text-muted-foreground">{t('dashboard.activity.ago15m')}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-2 w-2 rounded-full bg-yellow-500" />
                <div className="flex-1">
                  <p className="text-sm font-medium">{t('dashboard.activity.messageReceived')}</p>
                  <p className="text-xs text-muted-foreground">{t('dashboard.activity.ago1h')}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{t('dashboard.quick.title')}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <button className="w-full rounded-md border p-3 text-left text-sm hover:bg-accent">
              {t('dashboard.quick.viewPartners')}
            </button>
            <button className="w-full rounded-md border p-3 text-left text-sm hover:bg-accent">
              {t('dashboard.quick.openChat')}
            </button>
            <button className="w-full rounded-md border p-3 text-left text-sm hover:bg-accent">
              {t('dashboard.quick.reviewProperties')}
            </button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
