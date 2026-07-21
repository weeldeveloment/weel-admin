import { useState, useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { MessageSquare, Search, ChevronLeft, ChevronRight, Users } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import api from '@/lib/api'
import { useTranslation } from 'react-i18next'
import { AdminClient, AdminPartner, AdminPmsUser, PaginatedResponse } from '@/types'
import { formatUzbekPhoneNumber, getPhoneHref } from '@/lib/phone'
import ErrorAlert from '@/components/ErrorAlert'

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

interface UserPage<T> {
  results: T[]
  count: number
}

const fetchUserPage = async <T,>(endpoint: string, page: number, search: string): Promise<UserPage<T>> => {
  const response = await api.get<PaginatedResponse<T> | T[]>(endpoint, {
    params: {
      page,
      page_size: 10,
      search: search.trim() || undefined,
    },
  })

  if (Array.isArray(response.data)) {
    return { results: response.data, count: response.data.length }
  }

  return {
    results: response.data.results ?? [],
    count: response.data.count ?? 0,
  }
}

export default function UsersPage() {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const [searchQuery, setSearchQuery] = useState('')
  const [clientsPage, setClientsPage] = useState(1)
  const [partnersPage, setPartnersPage] = useState(1)
  const [pmsPage, setPmsPage] = useState(1)
  const ITEMS_PER_PAGE = 10

  const clientsQuery = useQuery({
    queryKey: ['adminUsers', 'clients', clientsPage, searchQuery],
    queryFn: () => fetchUserPage<AdminClient>('/admin-auth/users/clients/', clientsPage, searchQuery),
  })

  const partnersQuery = useQuery({
    queryKey: ['adminUsers', 'partners', partnersPage, searchQuery],
    queryFn: () => fetchUserPage<AdminPartner>('/admin-auth/users/partners/', partnersPage, searchQuery),
  })

  const pmsQuery = useQuery({
    queryKey: ['adminUsers', 'pms', pmsPage, searchQuery],
    queryFn: () => fetchUserPage<AdminPmsUser>('/admin-auth/users/pms/', pmsPage, searchQuery),
  })

  const loading = clientsQuery.isLoading || partnersQuery.isLoading || pmsQuery.isLoading
  const error =
    getApiErrorMessage(clientsQuery.error) ??
    getApiErrorMessage(partnersQuery.error) ??
    getApiErrorMessage(pmsQuery.error)

  useEffect(() => {
    setClientsPage(1)
    setPartnersPage(1)
    setPmsPage(1)
  }, [searchQuery])

  const UserTable = ({ 
    users, 
    totalUsers,
    type, 
    page, 
    onPageChange 
  }: { 
    users: AdminClient[] | AdminPartner[] | AdminPmsUser[]
    totalUsers: number
    type: 'client' | 'partner' | 'pms'
    page: number
    onPageChange: (page: number) => void
  }) => {
    const paginatedUsers = users
    const totalPages = Math.ceil(totalUsers / ITEMS_PER_PAGE)

    return (
      <div className="space-y-6">
        {/* Table */}
        <div className="border border-border rounded-xl overflow-hidden bg-card shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="px-4 md:px-6 py-3 md:py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">{t('users.table.name')}</th>
                  <th className="px-4 md:px-6 py-3 md:py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">{t('users.table.phone')}</th>
                  <th className="px-4 md:px-6 py-3 md:py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">{t('users.table.registered')}</th>
                  <th className="px-4 md:px-6 py-3 md:py-4 text-center text-xs font-semibold text-muted-foreground uppercase tracking-wider">{t('users.table.action')}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {paginatedUsers.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="px-4 md:px-6 py-12 md:py-16 text-center">
                      <div className="flex flex-col items-center justify-center gap-3">
                        <Users className="h-10 md:h-12 w-10 md:w-12 text-muted-foreground" />
                        <p className="text-sm text-muted-foreground font-medium">
                          {users.length === 0 && searchQuery
                            ? t('users.empty.noneSearch')
                            : t('users.empty.none')}
                        </p>
                      </div>
                    </td>
                  </tr>
                ) : (
                    paginatedUsers.map((user) => {
                      return (
                        <tr
                          key={user.id}
                          className="hover:bg-accent/40 transition-colors duration-150 group"
                          onClick={() => type === 'partner' ? navigate(`/partner/${user.id}`) : null}
                        >
                          <td className="px-4 md:px-6 py-3 md:py-4">
                            <div className="flex items-center gap-3">
                              <Avatar className="h-9 md:h-10 w-9 md:w-10 ring-2 ring-border flex-shrink-0">
                                <AvatarFallback className="bg-gradient-to-br from-blue-500 to-blue-600 text-white text-xs font-semibold">
                                  {(user.first_name ?? '')[0]?.toUpperCase() ?? ''}
                                </AvatarFallback>
                              </Avatar>
                              <div className="min-w-0">
                                <p className="font-semibold text-foreground text-sm truncate">
                                  {user.first_name}
                                </p>
                                <p className="text-xs text-muted-foreground">{type === 'client' ? t('users.type.client') : type === 'partner' ? t('users.type.partner') : t('users.type.pms')}</p>
                              </div>
                            </div>
                          </td>
                          <td className="px-4 md:px-6 py-3 md:py-4">
                            {user.phone_number ? (
                              <a
                                href={getPhoneHref(user.phone_number)}
                                className="text-sm font-medium text-foreground underline-offset-2 hover:underline"
                                aria-label={`Call ${formatUzbekPhoneNumber(user.phone_number)}`}
                              >
                                {formatUzbekPhoneNumber(user.phone_number)}
                              </a>
                            ) : (
                              <span className="text-sm text-muted-foreground">-</span>
                            )}
                          </td>
                          <td className="px-4 md:px-6 py-3 md:py-4">
                            {user.created_at ? (
                              <span className="text-sm text-muted-foreground whitespace-nowrap">
                                {new Date(user.created_at).toLocaleDateString(undefined, {
                                  year: 'numeric',
                                  month: 'short',
                                  day: 'numeric',
                                  hour: '2-digit',
                                  minute: '2-digit',
                                })}
                              </span>
                            ) : (
                              <span className="text-sm text-muted-foreground">-</span>
                            )}
                          </td>
                          <td className="px-4 md:px-6 py-3 md:py-4 text-center">
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={(e) => {
                                e.stopPropagation()
                                navigate(`/chat/${user.id}?role=${type}`)
                              }
                              }
                              title={t('users.chat.open')}
                              className="rounded-lg"
                            >
                              <MessageSquare className="h-4 w-4 text-blue-600" />
                            </Button>
                          </td>
                        </tr>
                      )
                    }
                    
                    )
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination Footer */}
        {totalPages > 1 && (
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200 pt-6">
            <div className="flex items-center gap-2 order-2 sm:order-1">
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
            <div className="flex items-center gap-2 order-1 sm:order-2">
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
    <div className="space-y-6 p-4 md:p-6 overflow-y-auto h-full">
      {/* Header */}
      <div className="border-b border-border pb-4 md:pb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-foreground">{t('users.title')}</h1>
        <p className="text-muted-foreground mt-1 md:mt-2 text-sm md:text-base">{t('users.subtitle')}</p>
      </div>

      {/* Error Alert */}
      {error && (
        <ErrorAlert
          message={error}
          onRetry={() => {
            void clientsQuery.refetch()
            void partnersQuery.refetch()
            void pmsQuery.refetch()
          }}
        />
      )}

      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 md:h-5 w-4 md:w-5 text-muted-foreground" />
        <Input
          placeholder={t('users.searchPlaceholder')}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 md:pl-12 h-10 md:h-11 rounded-xl border-border bg-card text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/10"
        />
      </div>

      {/* Tabs */}
      <Tabs defaultValue="clients" className="space-y-6">
        <TabsList className="bg-muted rounded-lg p-1 flex overflow-x-auto">
          <TabsTrigger
            value="clients"
            className="rounded-md data-[state=active]:bg-card data-[state=active]:text-foreground data-[state=active]:shadow-sm text-muted-foreground shrink-0"
          >
            <Users className="h-4 w-4 mr-2" />
            {t('users.tabs.clients')} <span className="ml-2 bg-accent text-accent-foreground px-2 py-0.5 rounded text-xs font-semibold">{clientsQuery.data?.count ?? 0}</span>
          </TabsTrigger>
          <TabsTrigger
            value="partners"
            className="rounded-md data-[state=active]:bg-card data-[state=active]:text-foreground data-[state=active]:shadow-sm text-muted-foreground shrink-0"
          >
            <Users className="h-4 w-4 mr-2" />
            {t('users.tabs.partners')} <span className="ml-2 bg-accent text-accent-foreground px-2 py-0.5 rounded text-xs font-semibold">{partnersQuery.data?.count ?? 0}</span>
          </TabsTrigger>
          <TabsTrigger
            value="pms"
            className="rounded-md data-[state=active]:bg-card data-[state=active]:text-foreground data-[state=active]:shadow-sm text-muted-foreground shrink-0"
          >
            <Users className="h-4 w-4 mr-2" />
            {t('users.tabs.hotelOwners')} <span className="ml-2 bg-accent text-accent-foreground px-2 py-0.5 rounded text-xs font-semibold">{pmsQuery.data?.count ?? 0}</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="clients">
          <UserTable 
            users={clientsQuery.data?.results ?? []}
            totalUsers={clientsQuery.data?.count ?? 0}
            type="client" 
            page={clientsPage}
            onPageChange={setClientsPage}
          />
        </TabsContent>

        <TabsContent value="partners">
          <UserTable 
            users={partnersQuery.data?.results ?? []}
            totalUsers={partnersQuery.data?.count ?? 0}
            type="partner" 
            page={partnersPage}
            onPageChange={setPartnersPage}
          />
        </TabsContent>

        <TabsContent value="pms">
          <UserTable 
            users={pmsQuery.data?.results ?? []}
            totalUsers={pmsQuery.data?.count ?? 0}
            type="pms" 
            page={pmsPage}
            onPageChange={setPmsPage}
          />
        </TabsContent>
      </Tabs>
    </div>
  )
}
