import { useState, useEffect, useCallback } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { MessageSquare, Search, ChevronLeft, ChevronRight, Users } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import api from '@/lib/api'
import { useTranslation } from 'react-i18next'

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

export default function UsersPage() {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const [clients, setClients] = useState<Client[]>([])
  const [partners, setPartners] = useState<Partner[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [clientsPage, setClientsPage] = useState(1)
  const [partnersPage, setPartnersPage] = useState(1)
  const ITEMS_PER_PAGE = 10

  useEffect(() => {
    setClientsPage(1)
    setPartnersPage(1)
  }, [searchQuery])

  const fetchUsers = useCallback(async () => {
    try {
      setLoading(true)
      setError(null)

      const [partnersData, clientsData] = await Promise.all([
        fetchAllPages<Partner>('/admin-auth/users/partners/'),
        fetchAllPages<Client>('/admin-auth/users/clients/'),
      ])

      setPartners(partnersData)
      setClients(clientsData)
    } catch (err: unknown) {
      console.error('Error fetching users:', err)
      setError(getApiErrorMessage(err) || t('users.error'))
    } finally {
      setLoading(false)
    }
  }, [t])

  useEffect(() => {
    void fetchUsers()
  }, [fetchUsers])

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
        <div className="border border-border rounded-xl overflow-hidden bg-card shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">{t('users.table.name')}</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">{t('users.table.phone')}</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">{t('users.table.status')}</th>
                  <th className="px-6 py-4 text-center text-xs font-semibold text-muted-foreground uppercase tracking-wider">{t('users.table.action')}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {paginatedUsers.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="px-6 py-16 text-center">
                      <div className="flex flex-col items-center justify-center gap-3">
                        <Users className="h-12 w-12 text-muted-foreground" />
                        <p className="text-sm text-muted-foreground font-medium">
                          {filterUsers(users).length === 0 && searchQuery
                            ? t('users.empty.noneSearch')
                            : t('users.empty.none')}
                        </p>
                      </div>
                    </td>
                  </tr>
                ) : (
                  paginatedUsers.map((user) => (
                    <tr 
                      key={user.id} 
                      className="hover:bg-accent/40 transition-colors duration-150 group"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <Avatar className="h-10 w-10 ring-2 ring-border">
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
                            <p className="font-semibold text-foreground text-sm">
                              {user.full_name || `${user.first_name || ''} ${user.last_name || ''}`.trim() || user.email}
                            </p>
                            <p className="text-xs text-muted-foreground">{type === 'client' ? t('users.type.client') : t('users.type.partner')}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-sm text-foreground font-medium">
                          {user.phone_number || <span className="text-muted-foreground">-</span>}
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
                            {user.is_active ? t('users.status.active') : t('users.status.inactive')}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <Button 
                          size="sm" 
                          variant="ghost"
                          onClick={() => navigate(`/chat/${user.id}?role=${type}`)}
                          title={t('users.chat.open')}
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
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                {t('users.pagination.page', { page, total: totalPages })}
              </p>
              <p className="text-sm text-muted-foreground">
                ({t('users.pagination.range', {
                  from: paginatedUsers.length > 0 ? (page - 1) * ITEMS_PER_PAGE + 1 : 0,
                  to: Math.min(page * ITEMS_PER_PAGE, totalUsers),
                  total: totalUsers,
                })})
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
          <p className="mt-4 text-sm font-medium text-muted-foreground">{t('users.loading')}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6 p-6 overflow-y-auto h-full">
      {/* Header */}
      <div className="border-b border-border pb-6">
        <h1 className="text-3xl font-bold text-foreground">{t('users.title')}</h1>
        <p className="text-muted-foreground mt-2">{t('users.subtitle')}</p>
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
            {t('common.retry')}
          </Button>
        </div>
      )}

      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          placeholder={t('users.searchPlaceholder')}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-12 h-11 rounded-xl border-border bg-card text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/10"
        />
      </div>

      {/* Tabs */}
      <Tabs defaultValue="clients" className="space-y-6">
        <TabsList className="bg-muted rounded-lg p-1">
          <TabsTrigger
            value="clients"
            className="rounded-md data-[state=active]:bg-card data-[state=active]:text-foreground data-[state=active]:shadow-sm text-muted-foreground"
          >
            <Users className="h-4 w-4 mr-2" />
            {t('users.tabs.clients')} <span className="ml-2 bg-accent text-accent-foreground px-2 py-0.5 rounded text-xs font-semibold">{filterUsers(clients).length}</span>
          </TabsTrigger>
          <TabsTrigger
            value="partners"
            className="rounded-md data-[state=active]:bg-card data-[state=active]:text-foreground data-[state=active]:shadow-sm text-muted-foreground"
          >
            <Users className="h-4 w-4 mr-2" />
            {t('users.tabs.partners')} <span className="ml-2 bg-accent text-accent-foreground px-2 py-0.5 rounded text-xs font-semibold">{filterUsers(partners).length}</span>
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
