import { useState, useEffect } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { MessageSquare, Search, ChevronLeft, ChevronRight, Users } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import api from '@/lib/api'

interface User {
  id: string | number
  email: string
  first_name?: string
  last_name?: string
  full_name?: string
  phone_number?: string
  is_active: boolean
  created_at?: string
}

interface Partner extends User {
  username: string
  properties_count?: number
  is_verified?: boolean
}

interface Client extends User {
  phone_number: string
}

interface PaginatedResponse<T> {
  count: number
  next: string | null
  previous: string | null
  results: T[]
}

export default function UsersPage() {
  const navigate = useNavigate()
  const [clients, setClients] = useState<Client[]>([])
  const [partners, setPartners] = useState<Partner[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [clientsPage, setClientsPage] = useState(1)
  const [partnersPage, setPartnersPage] = useState(1)
  const ITEMS_PER_PAGE = 10

  useEffect(() => {
    fetchUsers()
  }, [])

  useEffect(() => {
    setClientsPage(1)
    setPartnersPage(1)
  }, [searchQuery])

  const fetchAllPages = async <T,>(endpoint: string): Promise<T[]> => {
    const pageSize = 100
    let page = 1
    const allItems: T[] = []

    while (true) {
      const response = await api.get<PaginatedResponse<T> | T[]>(endpoint, {
        params: { page, page_size: pageSize },
      })

      if (Array.isArray(response.data)) {
        return response.data
      }

      const { results, next } = response.data
      allItems.push(...(results || []))

      if (!next) break
      page += 1
    }

    return allItems
  }

  const fetchUsers = async () => {
    try {
      setLoading(true)
      setError(null)

      const [partnersData, clientsData] = await Promise.all([
        fetchAllPages<Partner>('/admin-auth/users/partners/'),
        fetchAllPages<Client>('/admin-auth/users/clients/'),
      ])

      setPartners(partnersData)
      setClients(clientsData)
    } catch (err: any) {
      console.error('Error fetching users:', err)
      setError(err.response?.data?.message || 'Failed to fetch users')
    } finally {
      setLoading(false)
    }
  }

  const filterUsers = (users: User[]) => {
    if (!searchQuery.trim()) return users
    return users.filter(
      (user) =>
        user.email?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.first_name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.last_name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.full_name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.phone_number?.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }

  const getPaginatedUsers = (users: User[], page: number) => {
    const filtered = filterUsers(users)
    const startIdx = (page - 1) * ITEMS_PER_PAGE
    const endIdx = startIdx + ITEMS_PER_PAGE
    return filtered.slice(startIdx, endIdx)
  }

  const getTotalPages = (users: User[]) => {
    const filtered = filterUsers(users)
    return Math.ceil(filtered.length / ITEMS_PER_PAGE)
  }

  const UserTable = ({ 
    users, 
    type, 
    page, 
    onPageChange 
  }: { 
    users: User[] | Partner[]
    type: 'client' | 'partner'
    page: number
    onPageChange: (page: number) => void
  }) => {
    const paginatedUsers = getPaginatedUsers(users, page)
    const totalPages = getTotalPages(users)
    const totalUsers = filterUsers(users).length

    return (
      <div className="space-y-6">
        {/* Table */}
        <div className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50/50">
                  <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Phone</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-4 text-center text-xs font-semibold text-slate-600 uppercase tracking-wider">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {paginatedUsers.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="px-6 py-16 text-center">
                      <div className="flex flex-col items-center justify-center gap-3">
                        <Users className="h-12 w-12 text-slate-300" />
                        <p className="text-sm text-slate-500 font-medium">
                          {filterUsers(users).length === 0 && searchQuery
                            ? 'No users match your search'
                            : 'No users found'}
                        </p>
                      </div>
                    </td>
                  </tr>
                ) : (
                  paginatedUsers.map((user) => (
                    <tr 
                      key={user.id} 
                      className="hover:bg-blue-50 transition-colors duration-150 group"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <Avatar className="h-10 w-10 ring-2 ring-slate-100">
                            <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.email}`} />
                            <AvatarFallback className="bg-gradient-to-br from-blue-500 to-blue-600 text-white text-xs font-semibold">
                              {(user.full_name || `${user.first_name || ''} ${user.last_name || ''}`.trim() || user.email)
                                .split(' ')
                                .map(n => n[0])
                                .join('')
                                .toUpperCase()
                                .slice(0, 2)}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-semibold text-slate-900 text-sm">
                              {user.full_name || `${user.first_name || ''} ${user.last_name || ''}`.trim() || user.email}
                            </p>
                            <p className="text-xs text-slate-500">{type === 'client' ? 'Client' : 'Partner'}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-sm text-slate-700 font-medium">
                          {user.phone_number || <span className="text-slate-400">-</span>}
                        </p>
                      </td>
                      <td className="px-6 py-4">
                        <div className="inline-flex items-center gap-2">
                          <div className={`h-2 w-2 rounded-full ${user.is_active ? 'bg-green-500' : 'bg-slate-300'}`} />
                          <span className={`text-xs font-semibold ${
                            user.is_active 
                              ? 'text-green-700 bg-green-100 px-2.5 py-1 rounded-full' 
                              : 'text-slate-600 bg-slate-100 px-2.5 py-1 rounded-full'
                          }`}>
                            {user.is_active ? 'Active' : 'Inactive'}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <Button 
                          size="sm" 
                          variant="ghost"
                          onClick={() => type === 'partner' && navigate(`/chat/${user.id}`)}
                          disabled={type !== 'partner'}
                          title={type === 'partner' ? 'Open chat' : 'Chat is available for partners only'}
                          className="rounded-lg"
                        >
                          <MessageSquare className="h-4 w-4 text-blue-600" />
                        </Button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination Footer */}
        {totalPages > 1 && (
          <div className="flex items-center justify-between border-t border-slate-200 pt-6">
            <div className="flex items-center gap-2">
              <p className="text-xs font-medium text-slate-600 uppercase tracking-wider">
                Page {page} of {totalPages}
              </p>
              <p className="text-sm text-slate-500">
                ({paginatedUsers.length > 0 ? (page - 1) * ITEMS_PER_PAGE + 1 : 0}–{Math.min(page * ITEMS_PER_PAGE, totalUsers)} of {totalUsers})
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => onPageChange(page - 1)}
                disabled={page === 1}
                className="rounded-lg"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <div className="flex items-center gap-1">
                {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                  const pageNum = page > 3 ? page - 2 + i : i + 1;
                  if (pageNum > totalPages) return null;
                  return (
                    <Button
                      key={pageNum}
                      variant={pageNum === page ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => onPageChange(pageNum)}
                      className="rounded-lg min-w-9"
                    >
                      {pageNum}
                    </Button>
                  );
                })}
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => onPageChange(page + 1)}
                disabled={page === totalPages}
                className="rounded-lg"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
      </div>
    )
  }

  if (loading) {
    return (
      <div className="flex h-96 items-center justify-center">
        <div className="text-center">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-500 border-t-transparent mx-auto" />
          <p className="mt-4 text-sm font-medium text-slate-600">Loading users...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6 p-6 overflow-y-auto h-full">
      {/* Header */}
      <div className="border-b border-slate-200 pb-6">
        <h1 className="text-3xl font-bold text-slate-900">Users</h1>
        <p className="text-slate-600 mt-2">Manage and view all clients and partners</p>
      </div>

      {/* Error Alert */}
      {error && (
        <div className="rounded-xl border border-red-200 bg-red-50 p-4">
          <p className="text-sm font-medium text-red-800">{error}</p>
          <Button
            variant="outline"
            size="sm"
            className="mt-3 border-red-300 text-red-700 hover:bg-red-100"
            onClick={fetchUsers}
          >
            Retry
          </Button>
        </div>
      )}

      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
        <Input
          placeholder="Search by name, email, or phone..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-12 h-11 rounded-xl border-slate-200 bg-white text-slate-900 placeholder-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10"
        />
      </div>

      {/* Tabs */}
      <Tabs defaultValue="clients" className="space-y-6">
        <TabsList className="bg-slate-100 rounded-lg p-1">
          <TabsTrigger value="clients" className="rounded-md data-[state=active]:bg-white data-[state=active]:shadow-sm">
            <Users className="h-4 w-4 mr-2" />
            Clients <span className="ml-2 bg-slate-200 text-slate-700 px-2 py-0.5 rounded text-xs font-semibold">{filterUsers(clients).length}</span>
          </TabsTrigger>
          <TabsTrigger value="partners" className="rounded-md data-[state=active]:bg-white data-[state=active]:shadow-sm">
            <Users className="h-4 w-4 mr-2" />
            Partners <span className="ml-2 bg-slate-200 text-slate-700 px-2 py-0.5 rounded text-xs font-semibold">{filterUsers(partners).length}</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="clients">
          <UserTable 
            users={clients} 
            type="client" 
            page={clientsPage}
            onPageChange={setClientsPage}
          />
        </TabsContent>

        <TabsContent value="partners">
          <UserTable 
            users={partners} 
            type="partner" 
            page={partnersPage}
            onPageChange={setPartnersPage}
          />
        </TabsContent>
      </Tabs>
    </div>
  )
}
