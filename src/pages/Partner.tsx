import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ChevronLeft } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { fetchPartnerById } from '@/lib/partners'
import { formatUzbekPhoneNumber } from '@/lib/phone'
import PropertiesTable from '@/components/PropertiesTable'

export default function Partner() {
  const navigate = useNavigate()
  const { partnerId } = useParams<{ partnerId: string }>()
  const [propertiesCount, setPropertiesCount] = useState<number | null>(null)

  const { data: partner, isLoading, error } = useQuery({
    queryKey: ['partner', partnerId],
    queryFn: async () => {
      if (!partnerId) return null
      return fetchPartnerById(partnerId)
    },
    enabled: Boolean(partnerId),
  })

  const formatDateTime = (value?: string) => {
    if (!value) return '-'

    const date = new Date(value)
    if (Number.isNaN(date.getTime())) return value

    return date.toLocaleString()
  }

  const knownKeys = new Set([
    'id',
    'guid',
    'username',
    'first_name',
    'last_name',
    'phone_number',
    'email',
    'full_name',
    'is_active',
    'is_verified',
    'properties_count',
    'created_at',
    'avatar',
  ])

  const extraFields = partner
    ? Object.entries(partner.raw)
        .filter(([key, value]) => !knownKeys.has(key) && value !== undefined)
        .map(([key, value]) => ({
          key,
          value: typeof value === 'object' ? JSON.stringify(value) : String(value),
        }))
    : []

  const displayedPropertiesCount = propertiesCount ?? partner?.properties_count ?? 0

  return (
    <div className="h-full overflow-y-auto p-4 md:p-6">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-foreground md:text-3xl">Owner Details</h1>
            <p className="text-sm text-muted-foreground md:text-base">Owner ID: {partnerId}</p>
          </div>
        </div>

        {isLoading && (
          <Card>
            <CardContent className="pt-6 text-sm text-muted-foreground">Loading partner information...</CardContent>
          </Card>
        )}

        {!isLoading && error && (
          <Card>
            <CardContent className="pt-6 text-sm text-red-600">Failed to load partner information.</CardContent>
          </Card>
        )}

        {!isLoading && !error && !partner && (
          <Card>
            <CardContent className="pt-6 text-sm text-muted-foreground">
              Owner not found in admin user responses.
            </CardContent>
          </Card>
        )}

        {!isLoading && !error && partner && (
          <Tabs defaultValue="details" className="space-y-4">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="details">Owner Details</TabsTrigger>
              <TabsTrigger value="properties">Properties ({displayedPropertiesCount})</TabsTrigger>
            </TabsList>

            <TabsContent value="details" className="space-y-4">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between gap-3">
                    <CardTitle className="text-xl">
                      {partner.full_name}
                    </CardTitle>
                    <div className="flex items-center gap-2">
                      <Badge variant={partner.is_active ? 'default' : 'secondary'}>
                        {partner.is_active ? 'Active' : 'Inactive'}
                      </Badge>
                      {partner.is_verified !== undefined && (
                        <Badge variant={partner.is_verified ? 'default' : 'outline'}>
                          {partner.is_verified ? 'Verified' : 'Unverified'}
                        </Badge>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 gap-3 text-sm md:grid-cols-2">
                    <p><span className="font-medium">ID:</span> {partner.id}</p>
                    <p><span className="font-medium">GUID:</span> {partner.guid}</p>
                    <p><span className="font-medium">Username:</span> {partner.username}</p>
                    <p><span className="font-medium">Email:</span> {partner.email}</p>
                    <p><span className="font-medium">First name:</span> {partner.first_name}</p>
                    <p><span className="font-medium">Last name:</span> {partner.last_name}</p>
                    <p><span className="font-medium">Phone:</span> {formatUzbekPhoneNumber(partner.phone_number) || '-'}</p>
                    <p><span className="font-medium">Properties count:</span> {displayedPropertiesCount}</p>
                    <p><span className="font-medium">Created at:</span> {formatDateTime(partner.created_at)}</p>
                    <p><span className="font-medium">Avatar:</span> {partner.avatar}</p>
                  </div>

                  {extraFields.length > 0 && (
                    <div className="space-y-2">
                      <h2 className="text-sm font-semibold">Additional fields from API</h2>
                      <div className="space-y-1 rounded-md border bg-muted/30 p-3 text-xs">
                        {extraFields.map((item) => (
                          <p key={item.key} className="break-all">
                            <span className="font-medium">{item.key}:</span> {item.value}
                          </p>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="properties">
              <PropertiesTable
                partnerId={String(partner.id)}
                onCountChange={setPropertiesCount}
              />
            </TabsContent>
          </Tabs>
        )}
      </div>
    </div>
  )
}
