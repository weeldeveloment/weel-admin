import { useEffect, useMemo, useState } from 'react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useNavigate, useParams } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { api } from '@/lib/api'

type PropertyType = 'cottages' | 'apartments'

type PropertyRecord = Record<string, unknown>

const isRecord = (value: unknown): value is PropertyRecord => {
  return typeof value === 'object' && value !== null
}

const getEndpointPrefix = (type: PropertyType) => `/property/${type}`

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
      <div className="mx-auto max-w-4xl space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h1 className="text-2xl font-bold text-foreground md:text-3xl">Property Details</h1>
          <Button variant="outline" onClick={() => navigate(-1)}>
            Back
          </Button>
        </div>

        {detailsQuery.isLoading ? (
          <Card>
            <CardContent className="pt-6 text-sm text-muted-foreground">Loading property details...</CardContent>
          </Card>
        ) : null}

        {detailsQuery.error ? (
          <Card>
            <CardContent className="pt-6 text-sm text-red-600">Failed to load property details.</CardContent>
          </Card>
        ) : null}

        {!detailsQuery.isLoading && !detailsQuery.error && !detailsQuery.data ? (
          <Card>
            <CardContent className="pt-6 text-sm text-muted-foreground">Property not found.</CardContent>
          </Card>
        ) : null}

        {detailsQuery.data ? (
          <>
            <Card>
              <CardHeader>
                <CardTitle>Edit Property</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 gap-3 text-sm md:grid-cols-2">
                  <p>
                    <span className="font-medium">Type:</span> {resolvedType}
                  </p>
                  <p>
                    <span className="font-medium">ID:</span> {propertyId}
                  </p>
                  <p className="md:col-span-2">
                    <span className="font-medium">GUID:</span>{' '}
                    {typeof detailsQuery.data.guid === 'string' ? detailsQuery.data.guid : '-'}
                  </p>
                </div>

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
                    className="min-h-28 w-full rounded-md border bg-background px-3 py-2 text-sm"
                  />
                </div>

                {message ? <p className="text-sm text-emerald-600">{message}</p> : null}
                {errorMessage ? <p className="text-sm text-red-600">{errorMessage}</p> : null}

                <div className="flex flex-wrap items-center gap-2">
                  <Button
                    onClick={() => {
                      setMessage(null)
                      setErrorMessage(null)
                      updateMutation.mutate()
                    }}
                    disabled={updateMutation.isPending || deleteMutation.isPending}
                  >
                    {updateMutation.isPending ? 'Saving...' : 'Save Changes'}
                  </Button>

                  <Button
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
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Raw Property Data</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="max-h-96 overflow-auto rounded-md border bg-muted/20 p-3 text-xs">{rawPreview}</pre>
              </CardContent>
            </Card>
          </>
        ) : null}
      </div>
    </div>
  )
}
