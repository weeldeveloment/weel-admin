import { useState } from 'react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useTranslation } from 'react-i18next'
import { Loader2, ShieldCheck, ShieldX, UserCog, Building2 } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import ErrorAlert from '@/components/ErrorAlert'
import { decideB2BOwnershipRequest, fetchB2BOwnershipRequests } from '@/lib/api'
import type { AdminB2BOwnershipRequest } from '@/types'

/**
 * The other end of the mobile app's "owner asking to hand over or close the
 * company" flow. Neither move happens on the owner's own say-so — see
 * `WorkspaceOwnershipRequestView` in weel-backend-v2 — so every row here is
 * genuinely waiting on somebody at WEEL, not just logged for the record.
 */
export default function B2BOwnershipPage() {
  const { t } = useTranslation()
  const queryClient = useQueryClient()
  const [pending, setPending] = useState<{
    request: AdminB2BOwnershipRequest
    action: 'approve' | 'reject'
  } | null>(null)
  const [note, setNote] = useState('')

  const requestsQuery = useQuery({
    queryKey: ['b2bOwnershipRequests'],
    queryFn: fetchB2BOwnershipRequests,
    // A request left sitting is a company that cannot do anything else with
    // its "owner" row, so the queue is worth refreshing without a reload.
    refetchInterval: 30_000,
  })

  const decideMutation = useMutation({
    mutationFn: ({ id, action, note }: { id: number; action: 'approve' | 'reject'; note: string }) =>
      decideB2BOwnershipRequest(id, action, note),
    onSuccess: () => {
      setPending(null)
      setNote('')
      void queryClient.invalidateQueries({ queryKey: ['b2bOwnershipRequests'] })
    },
  })

  const requests = requestsQuery.data ?? []

  const openConfirm = (request: AdminB2BOwnershipRequest, action: 'approve' | 'reject') => {
    setNote('')
    decideMutation.reset()
    setPending({ request, action })
  }

  const confirm = () => {
    if (!pending) return
    decideMutation.mutate({ id: pending.request.id, action: pending.action, note })
  }

  return (
    <div className="space-y-6 p-4 md:p-6 overflow-y-auto h-full">
      <div className="border-b border-border pb-4 md:pb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-foreground">{t('b2bOwnership.title')}</h1>
        <p className="text-muted-foreground mt-1 md:mt-2 text-sm md:text-base">
          {t('b2bOwnership.subtitle')}
        </p>
      </div>

      {requestsQuery.isError && (
        <ErrorAlert
          message={t('b2bOwnership.loadFailed')}
          onRetry={() => void requestsQuery.refetch()}
        />
      )}

      {requestsQuery.isLoading ? (
        <div className="flex h-64 items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
        </div>
      ) : requests.length === 0 ? (
        <div className="flex h-64 items-center justify-center">
          <p className="text-sm font-medium text-muted-foreground">{t('b2bOwnership.empty')}</p>
        </div>
      ) : (
        <div className="space-y-4">
          {requests.map((request) => (
            <Card key={request.id} className="p-4 md:p-5">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <Badge
                      variant={request.kind === 'close' ? 'destructive' : 'default'}
                      className="gap-1"
                    >
                      {request.kind === 'close' ? (
                        <Building2 className="h-3 w-3" />
                      ) : (
                        <UserCog className="h-3 w-3" />
                      )}
                      {t(`b2bOwnership.kind.${request.kind}`)}
                    </Badge>
                  </div>
                  <h3 className="font-semibold text-foreground text-sm md:text-base">
                    {request.company_name}
                  </h3>
                  <div className="mt-1 text-xs text-muted-foreground space-y-0.5">
                    <p>
                      {t('b2bOwnership.requestedBy')}: {request.requested_by_name ?? `#${request.requested_by}`}
                    </p>
                    {request.kind === 'transfer' && (
                      <p>
                        {t('b2bOwnership.target')}: {request.target_name ?? `#${request.target_employee_id}`}
                      </p>
                    )}
                    <p>
                      {t('b2bOwnership.reason')}: {request.reason || t('b2bOwnership.noReason')}
                    </p>
                  </div>
                </div>

                <div className="flex md:flex-col items-center md:items-end gap-2 shrink-0">
                  <Button
                    variant="default"
                    size="sm"
                    className="rounded-lg bg-green-600 hover:bg-green-700"
                    onClick={() => openConfirm(request, 'approve')}
                    disabled={decideMutation.isPending}
                  >
                    <ShieldCheck className="h-4 w-4 mr-1" />
                    {t('b2bOwnership.approve')}
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-lg border-red-300 text-red-700 hover:bg-red-50"
                    onClick={() => openConfirm(request, 'reject')}
                    disabled={decideMutation.isPending}
                  >
                    <ShieldX className="h-4 w-4 mr-1" />
                    {t('b2bOwnership.reject')}
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}

      <Dialog open={pending !== null} onOpenChange={(open) => !open && setPending(null)}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>
              {pending?.action === 'approve'
                ? t('b2bOwnership.confirmApprove.title')
                : t('b2bOwnership.confirmReject.title')}
            </DialogTitle>
            <DialogDescription>
              {pending?.action === 'approve'
                ? t(
                    pending.request.kind === 'transfer'
                      ? 'b2bOwnership.confirmApprove.transferDescription'
                      : 'b2bOwnership.confirmApprove.closeDescription',
                    {
                      company: pending.request.company_name,
                      target: pending.request.target_name ?? '',
                    },
                  )
                : pending
                  ? t('b2bOwnership.confirmReject.description', {
                      company: pending.request.company_name,
                    })
                  : ''}
            </DialogDescription>
          </DialogHeader>
          <Textarea
            value={note}
            onChange={(event) => setNote(event.target.value)}
            placeholder={t('b2bOwnership.notePlaceholder')}
            rows={3}
          />
          {decideMutation.isError && (
            <p className="text-sm text-red-600">{t('b2bOwnership.actionFailed')}</p>
          )}
          <DialogFooter className="flex flex-col sm:flex-row gap-2">
            <Button variant="outline" onClick={() => setPending(null)} disabled={decideMutation.isPending}>
              {t('common.cancel')}
            </Button>
            <Button
              variant={pending?.action === 'approve' ? 'default' : 'destructive'}
              className={pending?.action === 'approve' ? 'bg-green-600 hover:bg-green-700' : undefined}
              onClick={confirm}
              disabled={decideMutation.isPending}
            >
              {decideMutation.isPending ? (
                <Loader2 className="h-4 w-4 animate-spin mr-1" />
              ) : pending?.action === 'approve' ? (
                <ShieldCheck className="h-4 w-4 mr-1" />
              ) : (
                <ShieldX className="h-4 w-4 mr-1" />
              )}
              {decideMutation.isPending
                ? pending?.action === 'approve'
                  ? t('b2bOwnership.approving')
                  : t('b2bOwnership.rejecting')
                : pending?.action === 'approve'
                  ? t('b2bOwnership.approve')
                  : t('b2bOwnership.reject')}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
