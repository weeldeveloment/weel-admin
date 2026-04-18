import { useEffect, useMemo, useState } from 'react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useNavigate, useParams } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { api } from '@/lib/api'

type PropertyType = 'cottages' | 'apartments'

type PropertyRecord = Record<string, unknown>

type PropertySummary = {
  guid?: string
  title?: string
  img?: string[]
  city?: string | null
  country?: string | null
  property_location?: PropertyRecord | null
}

const API_URL = (import.meta.env.VITE_API_URL || 'https://dev.weel.uz').replace(/\/$/, '')
const FALLBACK_IMAGE =
  'data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 800 600%22%3E%3Cdefs%3E%3ClinearGradient id=%22g%22 x1=%220%25%22 y1=%220%25%22 x2=%22100%25%22 y2=%22100%25%22%3E%3Cstop offset=%220%25%22 stop-color=%22%231f2937%22/%3E%3Cstop offset=%22100%25%22 stop-color=%22%23374151%22/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width=%22800%22 height=%22600%22 fill=%22url(%23g)%22/%3E%3Ccircle cx=%22390%22 cy=%22240%22 r=%2280%22 fill=%22%239ca3af%22 fill-opacity=%220.18%22/%3E%3Cpath d=%22M160 470l120-130 90 90 70-80 200 220H160z%22 fill=%22%23e5e7eb%22 fill-opacity=%220.18%22/%3E%3Ctext x=%22400%22 y=%22350%22 text-anchor=%22middle%22 font-family=%22Arial, sans-serif%22 font-size=%2232%22 fill=%22%23e5e7eb%22 fill-opacity=%220.8%22%3ENo image%3C/text%3E%3C/svg%3E'

const isRecord = (value: unknown): value is PropertyRecord => {
  return typeof value === 'object' && value !== null
}

const getEndpointPrefix = (type: PropertyType) => `/property/${type}`

const resolveImageUrl = (value?: string) => {
  if (!value) return ''
  if (value.startsWith('http://') || value.startsWith('https://')) return value
  if (value.startsWith('/')) return `${API_URL}${value}`
  return `${API_URL}/${value}`
}

const extractArray = (payload: unknown): unknown[] => {
  if (Array.isArray(payload)) return payload
  if (typeof payload === 'object' && payload !== null && Array.isArray((payload as { results?: unknown[] }).results)) {
    return (payload as { results?: unknown[] }).results ?? []
  }
  return []
}

export default function PropertyDetailsPage() {
  const queryClient = useQueryClient()
  const navigate = useNavigate()
  const { propertyType, propertyId } = useParams<{ propertyType: string; propertyId: string }>()

  const resolvedType: PropertyType | null =
    propertyType === 'cottages' || propertyType === 'apartments' ? propertyType : null

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [message, setMessage] = useState<string | null>(null)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const detailsQuery = useQuery({
    queryKey: ['property-details', resolvedType, propertyId],
    queryFn: async () => {
      if (!resolvedType || !propertyId) return null
      const response = await api.get(`${getEndpointPrefix(resolvedType)}/${propertyId}/`)
      return isRecord(response.data) ? response.data : null
    },
    enabled: Boolean(resolvedType && propertyId),
  })

  const summaryQuery = useQuery({
    queryKey: ['property-summary', resolvedType],
    queryFn: async () => {
      if (!resolvedType) return []
      const response = await api.get(`${getEndpointPrefix(resolvedType)}/`)
      return extractArray(response.data) as PropertySummary[]
    },
    enabled: Boolean(resolvedType),
  })

  useEffect(() => {
    const data = detailsQuery.data
    if (!data) return

    setTitle(typeof data.title === 'string' ? data.title : '')
    setDescription(typeof data.description === 'string' ? data.description : '')
  }, [detailsQuery.data])

  const updateMutation = useMutation({
    mutationFn: async () => {
      if (!resolvedType || !propertyId) throw new Error('Invalid property route params')

      const payload: PropertyRecord = {
        title,
        description,
      }

      await api.patch(`${getEndpointPrefix(resolvedType)}/${propertyId}/`, payload)
    },
    onSuccess: async () => {
      setErrorMessage(null)
      setMessage('Property updated successfully.')
      await queryClient.invalidateQueries({ queryKey: ['property-details', resolvedType, propertyId] })
      await queryClient.invalidateQueries({ queryKey: ['properties'] })
      await queryClient.invalidateQueries({ queryKey: ['partner-properties'] })
    },
    onError: () => {
      setMessage(null)
      setErrorMessage('Failed to update property.')
    },
  })

  const deleteMutation = useMutation({
    mutationFn: async () => {
      if (!resolvedType || !propertyId) throw new Error('Invalid property route params')
      await api.delete(`${getEndpointPrefix(resolvedType)}/${propertyId}/`)
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['properties'] })
      await queryClient.invalidateQueries({ queryKey: ['partner-properties'] })
      navigate('/properties')
    },
    onError: () => {
      setMessage(null)
      setErrorMessage('Failed to delete property.')
    },
  })

  const rawPreview = useMemo(() => {
    if (!detailsQuery.data) return ''
    return JSON.stringify(detailsQuery.data, null, 2)
  }, [detailsQuery.data])

  const summary = useMemo(() => {
    if (!summaryQuery.data || !propertyId) return null
    return summaryQuery.data.find((item) => item.guid === propertyId) ?? null
  }, [propertyId, summaryQuery.data])

  const heroImage: string = summary?.img?.[0] ? resolveImageUrl(String(summary.img[0])) : ''
  const locationLabel = summary?.city || summary?.country || 'No location'
  const heroTitle = typeof detailsQuery.data?.title === 'string' ? detailsQuery.data.title : 'Property Details'
  const descriptionPreview =
    typeof detailsQuery.data?.description === 'string' && detailsQuery.data.description.trim().length > 0
      ? detailsQuery.data.description
      : 'No description'

  if (!resolvedType || !propertyId) {
    return (
      <div className="h-full overflow-y-auto p-4 md:p-6">
        <Card>
          <CardContent className="pt-6 text-sm text-red-600">Invalid property route.</CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="h-full overflow-y-auto p-4 md:p-6">
      <div className="mx-auto max-w-6xl space-y-6">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="overflow-hidden">
            <div className="aspect-[16/10] w-full bg-muted">
              {heroImage ? (
                <img src={String(heroImage)} alt={heroTitle} className="h-full w-full object-cover" />
              ) : (
                <img src={FALLBACK_IMAGE} alt={heroTitle} className="h-full w-full object-cover" />
              )}
            </div>
            <CardContent className="space-y-3 p-6">
              <div className="space-y-1">
                <h1 className="text-2xl font-bold text-foreground md:text-3xl">
                  {heroTitle}
                </h1>
                <p className="text-sm text-muted-foreground">
                  {resolvedType} • {locationLabel}
                </p>
              </div>

              <div className="rounded-lg border bg-muted/20 p-3 text-sm">
                <p className="text-xs uppercase tracking-wide text-muted-foreground">Description</p>
                <p className="line-clamp-3 font-medium">{descriptionPreview}</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Edit Property</CardTitle>
              <CardDescription>Update the property title and description, then save or delete it.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {detailsQuery.isLoading ? (
                <p className="text-sm text-muted-foreground">Loading property details...</p>
              ) : null}

              {detailsQuery.error ? (
                <p className="text-sm text-red-600">Failed to load property details.</p>
              ) : null}

              {!detailsQuery.isLoading && !detailsQuery.error && !detailsQuery.data ? (
                <p className="text-sm text-muted-foreground">Property not found.</p>
              ) : null}

              {detailsQuery.data ? (
                <form
                  className="space-y-4"
                  onSubmit={(event) => {
                    event.preventDefault()
                    setMessage(null)
                    setErrorMessage(null)
                    updateMutation.mutate()
                  }}
                >
                  <div className="space-y-2">
                    <label className="text-sm font-medium" htmlFor="property-title">
                      Title
                    </label>
                    <Input
                      id="property-title"
                      value={title}
                      onChange={(event) => setTitle(event.target.value)}
                      placeholder="Property title"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium" htmlFor="property-description">
                      Description
                    </label>
                    <textarea
                      id="property-description"
                      value={description}
                      onChange={(event) => setDescription(event.target.value)}
                      placeholder="Property description"
                      className="min-h-40 w-full rounded-lg border bg-background px-3 py-2 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                  </div>

                  <div className="flex flex-wrap items-center gap-2 pt-2">
                    <Button type="submit" disabled={updateMutation.isPending || deleteMutation.isPending}>
                      {updateMutation.isPending ? 'Saving...' : 'Save Changes'}
                    </Button>

                    <Button
                      type="button"
                      variant="destructive"
                      onClick={() => {
                        if (!window.confirm('Are you sure you want to delete this property?')) return
                        setMessage(null)
                        setErrorMessage(null)
                        deleteMutation.mutate()
                      }}
                      disabled={updateMutation.isPending || deleteMutation.isPending}
                    >
                      {deleteMutation.isPending ? 'Deleting...' : 'Delete Property'}
                    </Button>
                  </div>

                  {message ? <p className="text-sm text-emerald-600">{message}</p> : null}
                  {errorMessage ? <p className="text-sm text-red-600">{errorMessage}</p> : null}
                </form>
              ) : null}
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Raw Property Data</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="max-h-96 overflow-auto rounded-md border bg-muted/20 p-3 text-xs">{rawPreview}</pre>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
