import { useState, useEffect, useCallback } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import {
  Dialog,
  DialogContent,
  DialogDescription,
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
import {
  Search,
  ChevronLeft,
  ChevronRight,
  Eye,
  CheckCircle,
  XCircle,
  Trash2,
  ImageIcon,
  Video,
  Clock,
  ShieldCheck,
  AlertCircle,
} from 'lucide-react'
import api from '@/lib/api'
import { useTranslation } from 'react-i18next'
import { AdminStory, PaginatedResponse } from '@/types'
import ErrorAlert from '@/components/ErrorAlert'

const getApiErrorMessage = (err: unknown): string | null => {
  if (
    typeof err === 'object' &&
    err !== null &&
    'response' in err &&
    typeof (err as { response?: { data?: { detail?: unknown } } }).response?.data?.detail === 'string'
  ) {
    return (err as { response: { data: { detail: string } } }).response.data.detail
  }
  return null
}

export default function StoriesModerationPage() {
  const { t } = useTranslation()
  const [stories, setStories] = useState<AdminStory[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [totalCount, setTotalCount] = useState(0)
  const [activeTab, setActiveTab] = useState('all')
  const [ordering, setOrdering] = useState('-created_at')
  const ITEMS_PER_PAGE = 20

  const [previewStory, setPreviewStory] = useState<AdminStory | null>(null)
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
  const [storyToDelete, setStoryToDelete] = useState<AdminStory | null>(null)
  const [actionLoading, setActionLoading] = useState<string | null>(null)

  const buildParams = useCallback(() => {
    const params: Record<string, string | number | boolean> = {
      page,
      page_size: ITEMS_PER_PAGE,
      ordering,
    }
    if (searchQuery.trim()) {
      params.search = searchQuery.trim()
    }
    if (activeTab === 'pending') {
      params.is_verified = 'false'
    } else if (activeTab === 'approved') {
      params.is_verified = 'true'
    }
    return params
  }, [page, ordering, searchQuery, activeTab])

  const fetchStories = useCallback(async (signal?: AbortSignal) => {
    try {
      setLoading(true)
      setError(null)
      const response = await api.get<PaginatedResponse<AdminStory>>('/story/admin/stories/', {
        params: buildParams(),
        signal,
      })
      if (signal?.aborted) return
      const data = response.data
      setStories(data.results ?? [])
      setTotalCount(data.count ?? 0)
      setTotalPages(Math.ceil((data.count ?? 0) / ITEMS_PER_PAGE))
    } catch (err: unknown) {
      if (signal?.aborted) return
      console.error('Error fetching stories:', err)
      setError(getApiErrorMessage(err) ?? t('stories.error'))
    } finally {
      if (!signal?.aborted) setLoading(false)
    }
  }, [buildParams, t])

  useEffect(() => {
    setPage(1)
  }, [searchQuery, activeTab, ordering])

  useEffect(() => {
    const controller = new AbortController()
    void fetchStories(controller.signal)
    return () => controller.abort()
  }, [fetchStories])

  const handleModerate = async (story: AdminStory, approve: boolean) => {
    try {
      setActionLoading(story.guid)
      await api.patch(`/story/admin/stories/${story.guid}/moderate/`, {
        is_verified: approve,
      })
      await fetchStories()
    } catch (err: unknown) {
      console.error('Moderation error:', err)
      setError(getApiErrorMessage(err) ?? t('stories.moderateError'))
    } finally {
      setActionLoading(null)
    }
  }

  const handleDelete = async () => {
    if (!storyToDelete) return
    try {
      setActionLoading(storyToDelete.guid)
      await api.delete(`/story/admin/stories/${storyToDelete.guid}/delete/`)
      setDeleteDialogOpen(false)
      setStoryToDelete(null)
      await fetchStories()
    } catch (err: unknown) {
      console.error('Delete error:', err)
      setError(getApiErrorMessage(err) ?? t('stories.deleteError'))
    } finally {
      setActionLoading(null)
    }
  }

  const formatDate = (value: string | null) => {
    if (!value) return '-'
    return new Date(value).toLocaleString()
  }

  const StatusBadge = ({ story }: { story: AdminStory }) => {
    if (story.is_verified) {
      return (
        <Badge variant="default" className="bg-green-600 hover:bg-green-700 text-white">
          <ShieldCheck className="h-3 w-3 mr-1" />
          {t('stories.status.approved')}
        </Badge>
      )
    }
    return (
      <Badge variant="secondary" className="bg-amber-100 text-amber-800 hover:bg-amber-200">
        <Clock className="h-3 w-3 mr-1" />
        {t('stories.status.pending')}
      </Badge>
    )
  }

  const MediaPreview = ({ story }: { story: AdminStory }) => {
    const firstMedia = story.media[0]
    if (!firstMedia) {
      return (
        <div className="h-16 w-16 rounded-lg bg-muted flex items-center justify-center">
          <ImageIcon className="h-6 w-6 text-muted-foreground" />
        </div>
      )
    }
    if (firstMedia.media_type === 'video') {
      return (
        <div className="h-16 w-16 rounded-lg bg-muted flex items-center justify-center relative overflow-hidden">
          <Video className="h-6 w-6 text-muted-foreground" />
        </div>
      )
    }
    return (
      <img
        src={firstMedia.media_url ?? ''}
        alt=""
        className="h-16 w-16 rounded-lg object-cover"
        loading="lazy"
      />
    )
  }

  return (
    <div className="space-y-6 p-4 md:p-6 overflow-y-auto h-full">
      {/* Header */}
      <div className="border-b border-border pb-4 md:pb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-foreground">{t('stories.title')}</h1>
        <p className="text-muted-foreground mt-1 md:mt-2 text-sm md:text-base">{t('stories.subtitle')}</p>
      </div>

      {/* Error Alert */}
      {error && (
        <ErrorAlert message={error} onRetry={() => { setError(null); void fetchStories() }} />
      )}

      {/* Controls */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 md:h-5 w-4 md:w-5 text-muted-foreground" />
          <Input
            placeholder={t('stories.searchPlaceholder')}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 md:pl-12 h-10 md:h-11 rounded-xl border-border bg-card text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/10"
          />
        </div>
        <Select value={ordering} onValueChange={setOrdering}>
          <SelectTrigger className="w-full md:w-48 rounded-xl">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="-created_at">{t('stories.sort.newest')}</SelectItem>
            <SelectItem value="created_at">{t('stories.sort.oldest')}</SelectItem>
            <SelectItem value="-expires_at">{t('stories.sort.expiresSoon')}</SelectItem>
            <SelectItem value="-views">{t('stories.sort.mostViewed')}</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="bg-muted rounded-lg p-1 flex overflow-x-auto">
          <TabsTrigger
            value="all"
            className="rounded-md data-[state=active]:bg-card data-[state=active]:text-foreground data-[state=active]:shadow-sm text-muted-foreground shrink-0"
          >
            {t('stories.tabs.all')}
          </TabsTrigger>
          <TabsTrigger
            value="pending"
            className="rounded-md data-[state=active]:bg-card data-[state=active]:text-foreground data-[state=active]:shadow-sm text-muted-foreground shrink-0"
          >
            {t('stories.tabs.pending')}
          </TabsTrigger>
          <TabsTrigger
            value="approved"
            className="rounded-md data-[state=active]:bg-card data-[state=active]:text-foreground data-[state=active]:shadow-sm text-muted-foreground shrink-0"
          >
            {t('stories.tabs.approved')}
          </TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab}>
          {loading ? (
            <div className="flex h-96 items-center justify-center">
              <div className="text-center">
                <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-500 border-t-transparent mx-auto" />
                <p className="mt-4 text-sm font-medium text-muted-foreground">{t('stories.loading')}</p>
              </div>
            </div>
          ) : stories.length === 0 ? (
            <div className="flex h-96 items-center justify-center">
              <div className="text-center">
                <AlertCircle className="h-12 w-12 text-muted-foreground mx-auto" />
                <p className="mt-4 text-sm font-medium text-muted-foreground">{t('stories.empty.title')}</p>
                <p className="text-xs text-muted-foreground mt-1">{t('stories.empty.description')}</p>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {stories.map((story) => (
                <div
                  key={story.guid}
                  className="border border-border rounded-xl bg-card p-4 md:p-5 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-col md:flex-row gap-4">
                    {/* Media thumbnail */}
                    <div className="shrink-0">
                      <MediaPreview story={story} />
                    </div>

                    {/* Story info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <StatusBadge story={story} />
                        <span className="text-xs text-muted-foreground">
                          {story.property_kind === 'apartment'
                            ? t('stories.type.apartment')
                            : t('stories.type.cottage')}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {t('stories.views', { count: story.views })}
                        </span>
                      </div>
                      <h3 className="font-semibold text-foreground text-sm md:text-base truncate">
                        {story.property_title ?? t('stories.noTitle')}
                      </h3>
                      <div className="mt-1 text-xs text-muted-foreground space-y-0.5">
                        <p>
                          {t('stories.created')}: {formatDate(story.created_at)}
                        </p>
                        <p>
                          {t('stories.expires')}: {formatDate(story.expires_at)}
                        </p>
                        <p>
                          {t('stories.partner')}: #{story.partner_user_id ?? '-'}
                        </p>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex md:flex-col items-center md:items-end gap-2 shrink-0">
                      <Button
                        variant="outline"
                        size="sm"
                        className="rounded-lg"
                        onClick={() => setPreviewStory(story)}
                      >
                        <Eye className="h-4 w-4 mr-1" />
                        {t('stories.actions.preview')}
                      </Button>
                      {!story.is_verified ? (
                        <Button
                          variant="default"
                          size="sm"
                          className="rounded-lg bg-green-600 hover:bg-green-700"
                          onClick={() => handleModerate(story, true)}
                          disabled={actionLoading === story.guid}
                        >
                          <CheckCircle className="h-4 w-4 mr-1" />
                          {t('stories.actions.approve')}
                        </Button>
                      ) : (
                        <Button
                          variant="outline"
                          size="sm"
                          className="rounded-lg border-amber-300 text-amber-700 hover:bg-amber-50"
                          onClick={() => handleModerate(story, false)}
                          disabled={actionLoading === story.guid}
                        >
                          <XCircle className="h-4 w-4 mr-1" />
                          {t('stories.actions.reject')}
                        </Button>
                      )}
                      <Button
                        variant="ghost"
                        size="sm"
                        className="rounded-lg text-red-600 hover:text-red-700 hover:bg-red-50"
                        onClick={() => {
                          setStoryToDelete(story)
                          setDeleteDialogOpen(true)
                        }}
                        disabled={actionLoading === story.guid}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200 pt-6">
                  <div className="flex items-center gap-2 order-2 sm:order-1">
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      {t('users.pagination.page', { page, total: totalPages })}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      ({t('users.pagination.range', {
                        from: stories.length > 0 ? (page - 1) * ITEMS_PER_PAGE + 1 : 0,
                        to: Math.min(page * ITEMS_PER_PAGE, totalCount),
                        total: totalCount,
                      })})
                    </p>
                  </div>
                  <div className="flex items-center gap-2 order-1 sm:order-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setPage(page - 1)}
                      disabled={page === 1}
                      className="rounded-lg"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <div className="flex items-center gap-1">
                      {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                        const pageNum = page > 3 ? page - 2 + i : i + 1
                        if (pageNum > totalPages) return null
                        return (
                          <Button
                            key={pageNum}
                            variant={pageNum === page ? 'default' : 'outline'}
                            size="sm"
                            onClick={() => setPage(pageNum)}
                            className="rounded-lg min-w-9"
                          >
                            {pageNum}
                          </Button>
                        )
                      })}
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setPage(page + 1)}
                      disabled={page === totalPages}
                      className="rounded-lg"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}
            </div>
          )}
        </TabsContent>
      </Tabs>

      {/* Preview Dialog */}
      <Dialog open={!!previewStory} onOpenChange={() => setPreviewStory(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{t('stories.preview.title')}</DialogTitle>
            <DialogDescription>{previewStory?.property_title ?? ''}</DialogDescription>
          </DialogHeader>
          {previewStory && (
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <StatusBadge story={previewStory} />
                <span className="text-xs text-muted-foreground">
                  {previewStory.property_kind === 'apartment'
                    ? t('stories.type.apartment')
                    : t('stories.type.cottage')}
                </span>
              </div>

              {previewStory.media.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {previewStory.media.map((media) => (
                    <div key={media.guid} className="relative aspect-square rounded-lg overflow-hidden bg-muted">
                      {media.media_type === 'video' ? (
                        <video
                          src={media.media_url ?? ''}
                          className="h-full w-full object-cover"
                          controls
                          preload="metadata"
                        />
                      ) : (
                        <img
                          src={media.media_url ?? ''}
                          alt=""
                          className="h-full w-full object-cover"
                          loading="lazy"
                        />
                      )}
                      <div className="absolute top-1 right-1">
                        <Badge variant="secondary" className="text-[10px]">
                          {media.media_type}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div className="text-sm space-y-1 text-muted-foreground">
                <p>
                  <span className="font-medium text-foreground">{t('stories.partner')}:</span> #
                  {previewStory.partner_user_id ?? '-'}
                </p>
                <p>
                  <span className="font-medium text-foreground">{t('stories.created')}:</span>{' '}
                  {formatDate(previewStory.created_at)}
                </p>
                <p>
                  <span className="font-medium text-foreground">{t('stories.expires')}:</span>{' '}
                  {formatDate(previewStory.expires_at)}
                </p>
                <p>
                  <span className="font-medium text-foreground">{t('stories.views')}:</span>{' '}
                  {previewStory.views}
                </p>
              </div>
            </div>
          )}
          <DialogFooter className="flex flex-col sm:flex-row gap-2">
            {previewStory && !previewStory.is_verified && (
              <Button
                className="bg-green-600 hover:bg-green-700"
                onClick={() => {
                  void handleModerate(previewStory, true)
                  setPreviewStory(null)
                }}
                disabled={actionLoading === previewStory.guid}
              >
                <CheckCircle className="h-4 w-4 mr-1" />
                {t('stories.actions.approve')}
              </Button>
            )}
            {previewStory && previewStory.is_verified && (
              <Button
                variant="outline"
                className="border-amber-300 text-amber-700 hover:bg-amber-50"
                onClick={() => {
                  void handleModerate(previewStory, false)
                  setPreviewStory(null)
                }}
                disabled={actionLoading === previewStory.guid}
              >
                <XCircle className="h-4 w-4 mr-1" />
                {t('stories.actions.reject')}
              </Button>
            )}
            <Button variant="outline" onClick={() => setPreviewStory(null)}>
              {t('common.back')}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent className="max-w-sm">
          <DialogHeader>
            <DialogTitle>{t('stories.deleteDialog.title')}</DialogTitle>
            <DialogDescription>{t('stories.deleteDialog.description')}</DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex flex-col sm:flex-row gap-2">
            <Button variant="outline" onClick={() => setDeleteDialogOpen(false)}>
              {t('common.back')}
            </Button>
            <Button
              variant="destructive"
              onClick={() => void handleDelete()}
              disabled={actionLoading === storyToDelete?.guid}
            >
              <Trash2 className="h-4 w-4 mr-1" />
              {t('stories.deleteDialog.confirm')}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
