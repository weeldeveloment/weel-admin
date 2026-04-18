import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { api } from '@/lib/api'

type PropertyTab = 'cottages' | 'apartments'

interface PropertyItem {
  id?: number
  guid?: string
  title?: string
  property_type?: string
}

interface PaginatedResponse<T> {
  results?: T[]
}

const extractItems = (payload: unknown): PropertyItem[] => {
  if (Array.isArray(payload)) {
    return payload as PropertyItem[]
  }

  if (payload && typeof payload === 'object' && Array.isArray((payload as PaginatedResponse<PropertyItem>).results)) {
    return (payload as PaginatedResponse<PropertyItem>).results ?? []
  }

  return []
}

const fetchPropertiesByType = async (type: PropertyTab): Promise<PropertyItem[]> => {
  const endpoint = type === 'cottages' ? '/property/cottages/' : '/property/apartments/'
  const response = await api.get(endpoint)
  return extractItems(response.data)
}

export default function PropertiesPage() {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState<PropertyTab>('cottages')

  const cottagesQuery = useQuery({
    queryKey: ['properties', 'cottages'],
    queryFn: () => fetchPropertiesByType('cottages'),
    enabled: activeTab === 'cottages',
  })

  const apartmentsQuery = useQuery({
    queryKey: ['properties', 'apartments'],
    queryFn: () => fetchPropertiesByType('apartments'),
    enabled: activeTab === 'apartments',
  })

  return (
    <div className="h-full overflow-y-auto p-4 md:p-6">
      <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as PropertyTab)} className="space-y-4">
        <TabsList>
          <TabsTrigger value="cottages">Cottages</TabsTrigger>
          <TabsTrigger value="apartments">Apartments</TabsTrigger>
        </TabsList>

        <TabsContent value="cottages">
          {cottagesQuery.isLoading ? <p className="text-sm text-muted-foreground">Loading cottages...</p> : null}
          {cottagesQuery.error ? <p className="text-sm text-red-600">Failed to load cottages.</p> : null}
          {cottagesQuery.data && cottagesQuery.data.length === 0 ? (
            <p className="text-sm text-muted-foreground">No cottages found.</p>
          ) : null}
          {cottagesQuery.data && cottagesQuery.data.length > 0 ? (
            <ul className="space-y-2">
              {cottagesQuery.data.map((item) => (
                <li key={item.guid || String(item.id)}>
                  <button
                    type="button"
                    className="w-full rounded-md border p-3 text-left text-sm hover:bg-accent"
                    onClick={() => {
                      const propertyId = item.id ?? item.guid
                      if (!propertyId) return
                      navigate(`/properties/cottages/${propertyId}`)
                    }}
                  >
                    <p className="font-medium">{item.title || 'Untitled'}</p>
                    <p className="text-xs text-muted-foreground">ID: {item.id ?? '-'}</p>
                    <p className="text-xs text-muted-foreground">GUID: {item.guid || '-'}</p>
                  </button>
                </li>
              ))}
            </ul>
          ) : null}
        </TabsContent>

        <TabsContent value="apartments">
          {apartmentsQuery.isLoading ? <p className="text-sm text-muted-foreground">Loading apartments...</p> : null}
          {apartmentsQuery.error ? <p className="text-sm text-red-600">Failed to load apartments.</p> : null}
          {apartmentsQuery.data && apartmentsQuery.data.length === 0 ? (
            <p className="text-sm text-muted-foreground">No apartments found.</p>
          ) : null}
          {apartmentsQuery.data && apartmentsQuery.data.length > 0 ? (
            <ul className="space-y-2">
              {apartmentsQuery.data.map((item) => (
                <li key={item.guid || String(item.id)}>
                  <button
                    type="button"
                    className="w-full rounded-md border p-3 text-left text-sm hover:bg-accent"
                    onClick={() => {
                      const propertyId = item.id ?? item.guid
                      if (!propertyId) return
                      navigate(`/properties/apartments/${propertyId}`)
                    }}
                  >
                    <p className="font-medium">{item.title || 'Untitled'}</p>
                    <p className="text-xs text-muted-foreground">ID: {item.id ?? '-'}</p>
                    <p className="text-xs text-muted-foreground">GUID: {item.guid || '-'}</p>
                  </button>
                </li>
              ))}
            </ul>
          ) : null}
        </TabsContent>
      </Tabs>
    </div>
  )
}
