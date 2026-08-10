import { useState } from 'react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Building2, Plus, Search, UserPlus, Users } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { createB2BCompany, createB2BUser, fetchB2BCompanies, fetchB2BUsers } from '@/lib/api'
import { AdminB2BCompany, AdminB2BUser } from '@/types'
import { formatUzbekPhoneNumber, getPhoneHref } from '@/lib/phone'
import ErrorAlert from '@/components/ErrorAlert'

const getApiErrorMessage = (err: unknown): string | null => {
  if (
    typeof err === 'object' &&
    err !== null &&
    'response' in err &&
    typeof (err as { response?: { data?: { message?: unknown; detail?: unknown } } }).response?.data === 'object'
  ) {
    const data = (err as { response: { data: Record<string, unknown> } }).response.data
    if (typeof data.message === 'string') return data.message
    if (typeof data.detail === 'string') return data.detail
    if (typeof data.phone === 'object' && Array.isArray(data.phone) && typeof data.phone[0] === 'string') {
      return data.phone[0]
    }
    if (typeof data.name === 'object' && Array.isArray(data.name) && typeof data.name[0] === 'string') {
      return data.name[0]
    }
  }
  return null
}

const emptyCompanyForm = { name: '', legal_name: '', inn: '', city: '', industry: '' }
const emptyUserForm = { phone: '', first_name: '', last_name: '', role: 'owner' as 'owner' | 'performer' }

export default function B2BPage() {
  const { t } = useTranslation()
  const queryClient = useQueryClient()

  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCompanyId, setSelectedCompanyId] = useState<number | null>(null)

  const [companyDialogOpen, setCompanyDialogOpen] = useState(false)
  const [companyForm, setCompanyForm] = useState(emptyCompanyForm)
  const [companyError, setCompanyError] = useState<string | null>(null)

  const [userDialogOpen, setUserDialogOpen] = useState(false)
  const [userForm, setUserForm] = useState(emptyUserForm)
  const [userError, setUserError] = useState<string | null>(null)

  const companiesQuery = useQuery({
    queryKey: ['b2bCompanies'],
    queryFn: fetchB2BCompanies,
  })

  const usersQuery = useQuery({
    queryKey: ['b2bUsers', selectedCompanyId],
    queryFn: () => fetchB2BUsers(selectedCompanyId as number),
    enabled: selectedCompanyId !== null,
  })

  const createCompanyMutation = useMutation({
    mutationFn: (data: Partial<AdminB2BCompany>) => createB2BCompany(data),
    onSuccess: (company) => {
      void queryClient.invalidateQueries({ queryKey: ['b2bCompanies'] })
      setCompanyDialogOpen(false)
      setCompanyForm(emptyCompanyForm)
      setCompanyError(null)
      setSelectedCompanyId(company.id)
    },
    onError: (err) => setCompanyError(getApiErrorMessage(err) ?? t('common.saveFailed')),
  })

  const createUserMutation = useMutation({
    mutationFn: (data: Partial<AdminB2BUser>) => createB2BUser(selectedCompanyId as number, data),
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: ['b2bUsers', selectedCompanyId] })
      setUserDialogOpen(false)
      setUserForm(emptyUserForm)
      setUserError(null)
    },
    onError: (err) => setUserError(getApiErrorMessage(err) ?? t('common.saveFailed')),
  })

  const companies = (companiesQuery.data ?? []).filter((c) =>
    c.name.toLowerCase().includes(searchQuery.trim().toLowerCase()),
  )
  const selectedCompany = companies.find((c) => c.id === selectedCompanyId) ?? null
  const users = usersQuery.data ?? []

  const loadError = getApiErrorMessage(companiesQuery.error) ?? getApiErrorMessage(usersQuery.error)

  const handleCreateCompany = () => {
    if (!companyForm.name.trim()) {
      setCompanyError(t('b2b.errors.nameRequired'))
      return
    }
    setCompanyError(null)
    createCompanyMutation.mutate({
      name: companyForm.name.trim(),
      legal_name: companyForm.legal_name.trim() || undefined,
      inn: companyForm.inn.trim() || undefined,
      city: companyForm.city.trim() || undefined,
      industry: companyForm.industry.trim() || undefined,
    })
  }

  const handleCreateUser = () => {
    if (!userForm.phone.trim()) {
      setUserError(t('b2b.errors.phoneRequired'))
      return
    }
    setUserError(null)
    createUserMutation.mutate({
      phone: userForm.phone.trim(),
      first_name: userForm.first_name.trim() || undefined,
      last_name: userForm.last_name.trim() || undefined,
      role: userForm.role,
    })
  }

  return (
    <div className="space-y-6 p-4 md:p-6 overflow-y-auto h-full">
      <div className="border-b border-border pb-4 md:pb-6 flex items-center justify-between gap-4 flex-wrap">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">{t('b2b.title')}</h1>
          <p className="text-muted-foreground mt-1 md:mt-2 text-sm md:text-base">{t('b2b.subtitle')}</p>
        </div>
        <Button onClick={() => setCompanyDialogOpen(true)} className="rounded-xl">
          <Plus className="h-4 w-4 mr-2" />
          {t('b2b.company.create')}
        </Button>
      </div>

      {loadError && (
        <ErrorAlert
          message={loadError}
          onRetry={() => {
            void companiesQuery.refetch()
            void usersQuery.refetch()
          }}
        />
      )}

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,320px)_1fr] gap-6">
        {/* Companies list */}
        <div className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder={t('b2b.company.searchPlaceholder')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 h-10 rounded-xl"
            />
          </div>

          <div className="border border-border rounded-xl bg-card shadow-sm divide-y divide-border overflow-hidden">
            {companiesQuery.isLoading ? (
              <div className="p-6 text-center text-sm text-muted-foreground">{t('users.loading')}</div>
            ) : companies.length === 0 ? (
              <div className="p-6 flex flex-col items-center gap-2 text-center">
                <Building2 className="h-8 w-8 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">{t('b2b.company.empty')}</p>
              </div>
            ) : (
              companies.map((company) => (
                <button
                  key={company.id}
                  onClick={() => setSelectedCompanyId(company.id)}
                  className={`w-full text-left px-4 py-3 hover:bg-accent/40 transition-colors ${
                    company.id === selectedCompanyId ? 'bg-accent/60' : ''
                  }`}
                >
                  <p className="font-semibold text-sm text-foreground truncate">{company.name}</p>
                  {company.city && <p className="text-xs text-muted-foreground truncate">{company.city}</p>}
                </button>
              ))
            )}
          </div>
        </div>

        {/* Users of selected company */}
        <div className="space-y-4">
          {!selectedCompany ? (
            <div className="border border-dashed border-border rounded-xl p-12 flex flex-col items-center gap-3 text-center">
              <Users className="h-10 w-10 text-muted-foreground" />
              <p className="text-sm text-muted-foreground">{t('b2b.user.selectCompany')}</p>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <div>
                  <h2 className="text-lg font-semibold text-foreground">{selectedCompany.name}</h2>
                  <p className="text-sm text-muted-foreground">{t('b2b.user.count', { count: users.length })}</p>
                </div>
                <Button onClick={() => setUserDialogOpen(true)} variant="outline" className="rounded-xl">
                  <UserPlus className="h-4 w-4 mr-2" />
                  {t('b2b.user.create')}
                </Button>
              </div>

              <div className="border border-border rounded-xl overflow-hidden bg-card shadow-sm">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[500px]">
                    <thead>
                      <tr className="border-b border-border bg-muted/50">
                        <th className="px-4 md:px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">{t('users.table.name')}</th>
                        <th className="px-4 md:px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">{t('users.table.phone')}</th>
                        <th className="px-4 md:px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">{t('b2b.user.role')}</th>
                        <th className="px-4 md:px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">{t('users.table.registered')}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {usersQuery.isLoading ? (
                        <tr>
                          <td colSpan={4} className="px-6 py-10 text-center text-sm text-muted-foreground">{t('users.loading')}</td>
                        </tr>
                      ) : users.length === 0 ? (
                        <tr>
                          <td colSpan={4} className="px-6 py-10 text-center text-sm text-muted-foreground">{t('b2b.user.empty')}</td>
                        </tr>
                      ) : (
                        users.map((user) => (
                          <tr key={user.id} className="hover:bg-accent/40 transition-colors">
                            <td className="px-4 md:px-6 py-3">
                              <p className="font-medium text-sm text-foreground">
                                {[user.first_name, user.last_name].filter(Boolean).join(' ') || '-'}
                              </p>
                            </td>
                            <td className="px-4 md:px-6 py-3">
                              <a
                                href={getPhoneHref(user.phone)}
                                className="text-sm font-medium text-foreground underline-offset-2 hover:underline"
                              >
                                {formatUzbekPhoneNumber(user.phone)}
                              </a>
                            </td>
                            <td className="px-4 md:px-6 py-3">
                              <Badge variant={user.role === 'owner' ? 'default' : 'secondary'}>
                                {user.role === 'owner' ? t('b2b.role.owner') : t('b2b.role.performer')}
                              </Badge>
                            </td>
                            <td className="px-4 md:px-6 py-3">
                              <span className="text-sm text-muted-foreground whitespace-nowrap">
                                {user.created_at
                                  ? new Date(user.created_at).toLocaleDateString(undefined, {
                                      year: 'numeric',
                                      month: 'short',
                                      day: 'numeric',
                                    })
                                  : '-'}
                              </span>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Create company dialog */}
      <Dialog open={companyDialogOpen} onOpenChange={setCompanyDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{t('b2b.company.create')}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            {companyError && <ErrorAlert message={companyError} onRetry={handleCreateCompany} />}
            <div className="space-y-2">
              <Label htmlFor="company-name">{t('b2b.company.form.name')}</Label>
              <Input
                id="company-name"
                value={companyForm.name}
                onChange={(e) => setCompanyForm({ ...companyForm, name: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company-legal-name">{t('b2b.company.form.legalName')}</Label>
              <Input
                id="company-legal-name"
                value={companyForm.legal_name}
                onChange={(e) => setCompanyForm({ ...companyForm, legal_name: e.target.value })}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="company-inn">{t('b2b.company.form.inn')}</Label>
                <Input
                  id="company-inn"
                  value={companyForm.inn}
                  onChange={(e) => setCompanyForm({ ...companyForm, inn: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company-city">{t('b2b.company.form.city')}</Label>
                <Input
                  id="company-city"
                  value={companyForm.city}
                  onChange={(e) => setCompanyForm({ ...companyForm, city: e.target.value })}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="company-industry">{t('b2b.company.form.industry')}</Label>
              <Input
                id="company-industry"
                value={companyForm.industry}
                onChange={(e) => setCompanyForm({ ...companyForm, industry: e.target.value })}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setCompanyDialogOpen(false)}>
              {t('common.cancel')}
            </Button>
            <Button onClick={handleCreateCompany} disabled={createCompanyMutation.isPending}>
              {createCompanyMutation.isPending ? t('common.creating') : t('common.create')}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Create user dialog */}
      <Dialog open={userDialogOpen} onOpenChange={setUserDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{t('b2b.user.create')}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            {userError && <ErrorAlert message={userError} onRetry={handleCreateUser} />}
            <div className="space-y-2">
              <Label htmlFor="user-phone">{t('b2b.user.form.phone')}</Label>
              <Input
                id="user-phone"
                placeholder="+998901234567"
                value={userForm.phone}
                onChange={(e) => setUserForm({ ...userForm, phone: e.target.value })}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="user-first-name">{t('b2b.user.form.firstName')}</Label>
                <Input
                  id="user-first-name"
                  value={userForm.first_name}
                  onChange={(e) => setUserForm({ ...userForm, first_name: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="user-last-name">{t('b2b.user.form.lastName')}</Label>
                <Input
                  id="user-last-name"
                  value={userForm.last_name}
                  onChange={(e) => setUserForm({ ...userForm, last_name: e.target.value })}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label>{t('b2b.user.role')}</Label>
              <Select
                value={userForm.role}
                onValueChange={(value) => setUserForm({ ...userForm, role: value as 'owner' | 'performer' })}
              >
                <SelectTrigger className="rounded-xl">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="owner">{t('b2b.role.owner')}</SelectItem>
                  <SelectItem value="performer">{t('b2b.role.performer')}</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setUserDialogOpen(false)}>
              {t('common.cancel')}
            </Button>
            <Button onClick={handleCreateUser} disabled={createUserMutation.isPending}>
              {createUserMutation.isPending ? t('common.creating') : t('common.create')}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
