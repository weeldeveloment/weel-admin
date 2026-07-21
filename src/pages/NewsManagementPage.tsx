import { useState, useEffect, useCallback } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
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
  Plus,
  Eye,
  Trash2,
  ImageIcon,
  Video,
  Clock,
  ShieldCheck,
  AlertCircle,
  Edit3,
} from 'lucide-react'
import api from '@/lib/api'
import { useTranslation } from 'react-i18next'
import { AdminNews, PaginatedResponse, StoryMedia } from '@/types'
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

interface NewsFormData {
  title: string
  body: string
  media_type: string
  media_file: File | null
}

const emptyFormData: NewsFormData = {
  title: '',
  body: '',
  media_type: '',
  media_file: null,
}

export default function NewsManagementPage() {
  const { t } = useTranslation()
  const [newsList, setNewsList] = useState<AdminNews[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [totalCount, setTotalCount] = useState(0)
  const [activeTab, setActiveTab] = useState('all')
  const [ordering, setOrdering] = useState('-created_at')
  const ITEMS_PER_PAGE = 20

  const [createDialogOpen, setCreateDialogOpen] = useState(false)
  const [editDialogOpen, setEditDialogOpen] = useState(false)
  const [editingNews, setEditingNews] = useState<AdminNews | null>(null)
  const [formData, setFormData] = useState<NewsFormData>(emptyFormData)
  const [formError, setFormError] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false)

  const [previewNews, setPreviewNews] = useState<AdminNews | null>(null)
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
  const [newsToDelete, setNewsToDelete] = useState<AdminNews | null>(null)
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
    return params
  }, [page, ordering, searchQuery])

  const fetchNews = useCallback(async (signal?: AbortSignal) => {
    try {
      setLoading(true)
      setError(null)
      const response = await api.get<PaginatedResponse<AdminNews>>('/story/admin/news/', {
        params: buildParams(),
        signal,
      })
      if (signal?.aborted) return
      const data = response.data
      setNewsList(data.results ?? [])
      setTotalCount(data.count ?? 0)
      setTotalPages(Math.ceil((data.count ?? 0) / ITEMS_PER_PAGE))
    } catch (err: unknown) {
      if (signal?.aborted) return
      console.error('Error fetching news:', err)
      setError(getApiErrorMessage(err) ?? 'Failed to load news')
    } finally {
      if (!signal?.aborted) setLoading(false)
    }
  }, [buildParams])

  useEffect(() => {
    setPage(1)
  }, [searchQuery, activeTab, ordering])

  useEffect(() => {
    const controller = new AbortController()
    void fetchNews(controller.signal)
    return () => controller.abort()
  }, [fetchNews])

  const resetForm = () => {
    setFormData(emptyFormData)
    setFormError(null)
  }

  const handleCreate = async () => {
    setFormError(null)
    if (!formData.title.trim()) {
      setFormError('Title is required')
      return
    }
    try {
      setSubmitting(true)
      const fd = new FormData()
      fd.append('title', formData.title.trim())
      fd.append('body', formData.body.trim())
      if (formData.media_file) {
        fd.append('media_type', formData.media_type)
        fd.append('media_file', formData.media_file)
      }
      await api.post('/story/admin/news/create/', fd)
      setCreateDialogOpen(false)
      resetForm()
      await fetchNews()
    } catch (err: unknown) {
      setFormError(getApiErrorMessage(err) ?? 'Failed to create news')
    } finally {
      setSubmitting(false)
    }
  }

  const handleEdit = async () => {
    if (!editingNews) return
    setFormError(null)
    if (!formData.title.trim()) {
      setFormError('Title is required')
      return
    }
    try {
      setSubmitting(true)
      const fd = new FormData()
      fd.append('title', formData.title.trim())
      fd.append('body', formData.body.trim())
      if (formData.media_file) {
        fd.append('media_type', formData.media_type)
        fd.append('media_file', formData.media_file)
      }
      await api.patch(`/story/admin/news/${editingNews.guid}/update/`, fd)
      setEditDialogOpen(false)
      setEditingNews(null)
      resetForm()
      await fetchNews()
    } catch (err: unknown) {
      setFormError(getApiErrorMessage(err) ?? 'Failed to update news')
    } finally {
      setSubmitting(false)
    }
  }

  const handleDelete = async () => {
    if (!newsToDelete) return
    try {
      setActionLoading(newsToDelete.guid)
      await api.delete(`/story/admin/news/${newsToDelete.guid}/delete/`)
      setDeleteDialogOpen(false)
      setNewsToDelete(null)
      await fetchNews()
    } catch (err: unknown) {
      console.error('Delete error:', err)
      setError(getApiErrorMessage(err) ?? 'Failed to delete news')
    } finally {
      setActionLoading(null)
    }
  }

  const openEditDialog = (news: AdminNews) => {
    setEditingNews(news)
    setFormData({
      title: news.title ?? '',
      body: news.body ?? '',
      media_type: '',
      media_file: null,
    })
    setFormError(null)
    setEditDialogOpen(true)
  }

  const formatDate = (value: string | null) => {
    if (!value) return '-'
    return new Date(value).toLocaleString()
  }

  const StatusBadge = ({ news }: { news: AdminNews }) => {
    if (news.is_verified) {
      return (
        <Badge variant="default" className="bg-green-600 hover:bg-green-700 text-white">
          <ShieldCheck className="h-3 w-3 mr-1" />
          Active
        </Badge>
      )
    }
    return (
      <Badge variant="secondary" className="bg-amber-100 text-amber-800 hover:bg-amber-200">
        <Clock className="h-3 w-3 mr-1" />
        Draft
      </Badge>
    )
  }

  const MediaPreview = ({ media }: { media: StoryMedia[] }) => {
    const firstMedia = media[0]
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
      <div className="border-b border-border pb-4 md:pb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">{t('news.title')}</h1>
          <p className="text-muted-foreground mt-1 md:mt-2 text-sm md:text-base">{t('news.subtitle')}</p>
        </div>
        <Button
          className="rounded-xl shrink-0"
          onClick={() => {
            resetForm()
            setCreateDialogOpen(true)
          }}
        >
          <Plus className="h-4 w-4 mr-2" />
          {t('news.create')}
        </Button>
      </div>

      {/* Error Alert */}
      {error && (
        <ErrorAlert message={error} onRetry={() => { setError(null); void fetchNews() }} />
      )}

      {/* Controls */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 md:h-5 w-4 md:w-5 text-muted-foreground" />
          <Input
            placeholder={t('news.searchPlaceholder')}
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
            <SelectItem value="-created_at">{t('news.sort.newest')}</SelectItem>
            <SelectItem value="created_at">{t('news.sort.oldest')}</SelectItem>
            <SelectItem value="-views">{t('news.sort.mostViewed')}</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="bg-muted rounded-lg p-1 flex overflow-x-auto">
          <TabsTrigger value="all" className="rounded-md data-[state=active]:bg-card data-[state=active]:text-foreground data-[state=active]:shadow-sm text-muted-foreground shrink-0">
            {t('news.tabs.all')}
          </TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab}>
          {loading ? (
            <div className="flex h-96 items-center justify-center">
              <div className="text-center">
                <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-500 border-t-transparent mx-auto" />
                <p className="mt-4 text-sm font-medium text-muted-foreground">{t('news.loading')}</p>
              </div>
            </div>
          ) : newsList.length === 0 ? (
            <div className="flex h-96 items-center justify-center">
              <div className="text-center">
                <AlertCircle className="h-12 w-12 text-muted-foreground mx-auto" />
                <p className="mt-4 text-sm font-medium text-muted-foreground">{t('news.empty.title')}</p>
                <p className="text-xs text-muted-foreground mt-1">{t('news.empty.description')}</p>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {newsList.map((news) => (
                <div
                  key={news.guid}
                  className="border border-border rounded-xl bg-card p-4 md:p-5 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-col md:flex-row gap-4">
                    {/* Media thumbnail */}
                    <div className="shrink-0">
                      <MediaPreview media={news.media} />
                    </div>

                    {/* News info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <StatusBadge news={news} />
                        <span className="text-xs text-muted-foreground">
                          {t('news.views', { count: news.views })}
                        </span>
                      </div>
                      <h3 className="font-semibold text-foreground text-sm md:text-base truncate">
                        {news.title ?? 'Untitled'}
                      </h3>
                      <p className="mt-1 text-xs text-muted-foreground line-clamp-2">
                        {news.body ?? ''}
                      </p>
                      <div className="mt-1 text-xs text-muted-foreground space-y-0.5">
                        <p>{t('news.created')}: {formatDate(news.created_at)}</p>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex md:flex-col items-center md:items-end gap-2 shrink-0">
                      <Button
                        variant="outline"
                        size="sm"
                        className="rounded-lg"
                        onClick={() => setPreviewNews(news)}
                      >
                        <Eye className="h-4 w-4 mr-1" />
                        {t('news.actions.preview')}
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="rounded-lg"
                        onClick={() => openEditDialog(news)}
                      >
                        <Edit3 className="h-4 w-4 mr-1" />
                        {t('news.actions.edit')}
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="rounded-lg text-red-600 hover:text-red-700 hover:bg-red-50"
                        onClick={() => {
                          setNewsToDelete(news)
                          setDeleteDialogOpen(true)
                        }}
                        disabled={actionLoading === news.guid}
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
                      Page {page} of {totalPages}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      ({(page - 1) * ITEMS_PER_PAGE + 1}–{Math.min(page * ITEMS_PER_PAGE, totalCount)} of {totalCount})
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

      {/* Create Dialog */}
      <Dialog open={createDialogOpen} onOpenChange={(open) => { if (!open) { setCreateDialogOpen(false); resetForm() } }}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>{t('news.createDialog.title')}</DialogTitle>
            <DialogDescription>{t('news.createDialog.description')}</DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            {formError && (
              <div className="rounded-lg bg-red-50 border border-red-200 p-3 text-sm text-red-700">
                {formError}
              </div>
            )}
            <div className="space-y-2">
              <Label htmlFor="news-title">{t('news.form.title')}</Label>
              <Input
                id="news-title"
                value={formData.title}
                onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                placeholder={t('news.form.titlePlaceholder')}
                className="rounded-xl"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="news-body">{t('news.form.body')}</Label>
              <Textarea
                id="news-body"
                value={formData.body}
                onChange={(e) => setFormData(prev => ({ ...prev, body: e.target.value }))}
                placeholder={t('news.form.bodyPlaceholder')}
                className="rounded-xl min-h-24"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="news-media-type">{t('news.form.mediaType')}</Label>
              <Select
                value={formData.media_type}
                onValueChange={(v) => setFormData(prev => ({ ...prev, media_type: v }))}
              >
                <SelectTrigger className="rounded-xl">
                  <SelectValue placeholder={t('news.form.mediaTypePlaceholder')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="image">{t('news.form.image')}</SelectItem>
                  <SelectItem value="video">{t('news.form.video')}</SelectItem>
                </SelectContent>
              </Select>
            </div>
            {formData.media_type && (
              <div className="space-y-2">
                <Label htmlFor="news-media-file">{t('news.form.mediaFile')}</Label>
                <Input
                  id="news-media-file"
                  type="file"
                  accept={formData.media_type === 'image' ? 'image/*' : 'video/*'}
                  onChange={(e) => setFormData(prev => ({ ...prev, media_file: e.target.files?.[0] ?? null }))}
                  className="rounded-xl"
                />
              </div>
            )}
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => { setCreateDialogOpen(false); resetForm() }}>
              {t('common.cancel')}
            </Button>
            <Button onClick={() => void handleCreate()} disabled={submitting}>
              {submitting ? t('common.creating') : t('common.create')}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit Dialog */}
      <Dialog open={editDialogOpen} onOpenChange={(open) => { if (!open) { setEditDialogOpen(false); setEditingNews(null); resetForm() } }}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>{t('news.editDialog.title')}</DialogTitle>
            <DialogDescription>{t('news.editDialog.description')}</DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            {formError && (
              <div className="rounded-lg bg-red-50 border border-red-200 p-3 text-sm text-red-700">
                {formError}
              </div>
            )}
            <div className="space-y-2">
              <Label htmlFor="edit-news-title">{t('news.form.title')}</Label>
              <Input
                id="edit-news-title"
                value={formData.title}
                onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                placeholder={t('news.form.titlePlaceholder')}
                className="rounded-xl"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="edit-news-body">{t('news.form.body')}</Label>
              <Textarea
                id="edit-news-body"
                value={formData.body}
                onChange={(e) => setFormData(prev => ({ ...prev, body: e.target.value }))}
                placeholder={t('news.form.bodyPlaceholder')}
                className="rounded-xl min-h-24"
              />
            </div>
            {/* Existing media preview */}
            {editingNews && editingNews.media.length > 0 && !formData.media_file && (
              <div className="space-y-2">
                <Label>{t('news.form.currentMedia')}</Label>
                <div className="flex flex-wrap gap-2">
                  {editingNews.media.map((m) => (
                    <div key={m.guid} className="relative h-20 w-20 rounded-lg overflow-hidden bg-muted border">
                      {m.media_type === 'video' ? (
                        <video src={m.media_url ?? ''} className="h-full w-full object-cover" />
                      ) : (
                        <img src={m.media_url ?? ''} alt="" className="h-full w-full object-cover" />
                      )}
                      <div className="absolute top-0.5 right-0.5">
                        <Badge variant="secondary" className="text-[10px] px-1">
                          {m.media_type}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            <div className="space-y-2">
              <Label htmlFor="edit-news-media-type">
                {editingNews && editingNews.media.length > 0 ? t('news.form.replaceMedia') : t('news.form.mediaType')}
              </Label>
              <Select
                value={formData.media_type}
                onValueChange={(v) => setFormData(prev => ({ ...prev, media_type: v }))}
              >
                <SelectTrigger className="rounded-xl">
                  <SelectValue placeholder={t('news.form.mediaTypePlaceholder')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="image">{t('news.form.image')}</SelectItem>
                  <SelectItem value="video">{t('news.form.video')}</SelectItem>
                </SelectContent>
              </Select>
            </div>
            {formData.media_type && (
              <div className="space-y-2">
                <Label htmlFor="edit-news-media-file">{t('news.form.mediaFile')}</Label>
                <Input
                  id="edit-news-media-file"
                  type="file"
                  accept={formData.media_type === 'image' ? 'image/*' : 'video/*'}
                  onChange={(e) => setFormData(prev => ({ ...prev, media_file: e.target.files?.[0] ?? null }))}
                  className="rounded-xl"
                />
              </div>
            )}
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => { setEditDialogOpen(false); setEditingNews(null); resetForm() }}>
              {t('common.cancel')}
            </Button>
            <Button onClick={() => void handleEdit()} disabled={submitting}>
              {submitting ? t('common.saving') : t('common.save')}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Preview Dialog */}
      <Dialog open={!!previewNews} onOpenChange={() => setPreviewNews(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{t('news.preview.title')}</DialogTitle>
            <DialogDescription>{previewNews?.title ?? ''}</DialogDescription>
          </DialogHeader>
          {previewNews && (
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <StatusBadge news={previewNews} />
              </div>

              <div>
                <h3 className="text-lg font-semibold">{previewNews.title}</h3>
                {previewNews.body && (
                  <p className="mt-2 text-sm text-muted-foreground whitespace-pre-wrap">{previewNews.body}</p>
                )}
              </div>

              {previewNews.media.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {previewNews.media.map((media) => (
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
                  <span className="font-medium text-foreground">{t('news.created')}:</span>{' '}
                  {formatDate(previewNews.created_at)}
                </p>
                <p>
                  <span className="font-medium text-foreground">{t('news.views')}:</span>{' '}
                  {previewNews.views}
                </p>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setPreviewNews(null)}>
              {t('common.back')}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent className="max-w-sm">
          <DialogHeader>
            <DialogTitle>{t('news.deleteDialog.title')}</DialogTitle>
            <DialogDescription>{t('news.deleteDialog.description')}</DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex flex-col sm:flex-row gap-2">
            <Button variant="outline" onClick={() => setDeleteDialogOpen(false)}>
              {t('common.back')}
            </Button>
            <Button
              variant="destructive"
              onClick={() => void handleDelete()}
              disabled={actionLoading === newsToDelete?.guid}
            >
              <Trash2 className="h-4 w-4 mr-1" />
              {t('news.deleteDialog.confirm')}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
