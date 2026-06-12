import { useState, useEffect, useCallback } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  Search,
  ChevronLeft,
  ChevronRight,
  Plus,
  Eye,
  Trash2,
  ImageIcon,
  AlertCircle,
  Edit3,
} from 'lucide-react'
import api from '@/lib/api'
import { useTranslation } from 'react-i18next'
import { Banner, PaginatedResponse } from '@/types'
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

interface BannerFormData {
  html_source: string
  image: File | null
}

const emptyFormData: BannerFormData = {
  html_source: '',
  image: null,
}

export default function BannerManagementPage() {
  const { t } = useTranslation()
  const [bannerList, setBannerList] = useState<Banner[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [totalCount, setTotalCount] = useState(0)
  const ITEMS_PER_PAGE = 20

  const [createDialogOpen, setCreateDialogOpen] = useState(false)
  const [editDialogOpen, setEditDialogOpen] = useState(false)
  const [editingBanner, setEditingBanner] = useState<Banner | null>(null)
  const [formData, setFormData] = useState<BannerFormData>(emptyFormData)
  const [formError, setFormError] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false)

  const [previewBanner, setPreviewBanner] = useState<Banner | null>(null)
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
  const [bannerToDelete, setBannerToDelete] = useState<Banner | null>(null)
  const [actionLoading, setActionLoading] = useState<string | null>(null)

  const buildParams = useCallback(() => {
    const params: Record<string, string | number | boolean> = {
      page,
      page_size: ITEMS_PER_PAGE,
    }
    if (searchQuery.trim()) {
      params.search = searchQuery.trim()
    }
    return params
  }, [page, searchQuery])

  const fetchBanners = useCallback(async () => {
    try {
      setLoading(true)
      setError(null)
      const response = await api.get<PaginatedResponse<Banner>>('/story/admin/banners/', {
        params: buildParams(),
      })
      const data = response.data
      setBannerList(data.results ?? [])
      setTotalCount(data.count ?? 0)
      setTotalPages(Math.ceil((data.count ?? 0) / ITEMS_PER_PAGE))
    } catch (err: unknown) {
      console.error('Error fetching banners:', err)
      setError(getApiErrorMessage(err) ?? 'Failed to load banners')
    } finally {
      setLoading(false)
    }
  }, [buildParams])

  useEffect(() => {
    setPage(1)
  }, [searchQuery])

  useEffect(() => {
    void fetchBanners()
  }, [fetchBanners])

  const resetForm = () => {
    setFormData(emptyFormData)
    setFormError(null)
  }

  const handleCreate = async () => {
    setFormError(null)
    if (!formData.html_source.trim()) {
      setFormError('HTML source is required')
      return
    }
    if (!formData.image) {
      setFormError('Banner image is required')
      return
    }
    try {
      setSubmitting(true)
      const fd = new FormData()
      fd.append('html_source', formData.html_source.trim())
      fd.append('image', formData.image)
      await api.post('/story/admin/banners/create/', fd)
      setCreateDialogOpen(false)
      resetForm()
      await fetchBanners()
    } catch (err: unknown) {
      setFormError(getApiErrorMessage(err) ?? 'Failed to create banner')
    } finally {
      setSubmitting(false)
    }
  }

  const handleEdit = async () => {
    if (!editingBanner) return
    setFormError(null)
    if (!formData.html_source.trim()) {
      setFormError('HTML source is required')
      return
    }
    try {
      setSubmitting(true)
      const fd = new FormData()
      fd.append('html_source', formData.html_source.trim())
      if (formData.image) {
        fd.append('image', formData.image)
      }
      await api.patch(`/story/admin/banners/${editingBanner.guid}/update/`, fd)
      setEditDialogOpen(false)
      setEditingBanner(null)
      resetForm()
      await fetchBanners()
    } catch (err: unknown) {
      setFormError(getApiErrorMessage(err) ?? 'Failed to update banner')
    } finally {
      setSubmitting(false)
    }
  }

  const handleDelete = async () => {
    if (!bannerToDelete) return
    try {
      setActionLoading(bannerToDelete.guid)
      await api.delete(`/story/admin/banners/${bannerToDelete.guid}/delete/`)
      setDeleteDialogOpen(false)
      setBannerToDelete(null)
      await fetchBanners()
    } catch (err: unknown) {
      console.error('Delete error:', err)
      setError(getApiErrorMessage(err) ?? 'Failed to delete banner')
    } finally {
      setActionLoading(null)
    }
  }

  const openEditDialog = (banner: Banner) => {
    setEditingBanner(banner)
    setFormData({
      html_source: banner.html_source ?? '',
      image: null,
    })
    setFormError(null)
    setEditDialogOpen(true)
  }

  const formatDate = (value: string | null) => {
    if (!value) return '-'
    return new Date(value).toLocaleString()
  }

  return (
    <div className="space-y-6 p-4 md:p-6 overflow-y-auto h-full">
      <div className="border-b border-border pb-4 md:pb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">{t('banners.title')}</h1>
          <p className="text-muted-foreground mt-1 md:mt-2 text-sm md:text-base">{t('banners.subtitle')}</p>
        </div>
        <Button
          className="rounded-xl shrink-0"
          onClick={() => {
            resetForm()
            setCreateDialogOpen(true)
          }}
        >
          <Plus className="h-4 w-4 mr-2" />
          {t('banners.create')}
        </Button>
      </div>

      {error && (
        <ErrorAlert message={error} onRetry={() => { setError(null); void fetchBanners() }} />
      )}

      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 md:h-5 w-4 md:w-5 text-muted-foreground" />
          <Input
            placeholder={t('banners.searchPlaceholder')}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 md:pl-12 h-10 md:h-11 rounded-xl border-border bg-card text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/10"
          />
        </div>
      </div>

      {loading ? (
        <div className="flex h-96 items-center justify-center">
          <div className="text-center">
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-500 border-t-transparent mx-auto" />
            <p className="mt-4 text-sm font-medium text-muted-foreground">{t('banners.loading')}</p>
          </div>
        </div>
      ) : bannerList.length === 0 ? (
        <div className="flex h-96 items-center justify-center">
          <div className="text-center">
            <AlertCircle className="h-12 w-12 text-muted-foreground mx-auto" />
            <p className="mt-4 text-sm font-medium text-muted-foreground">{t('banners.empty.title')}</p>
            <p className="text-xs text-muted-foreground mt-1">{t('banners.empty.description')}</p>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          {bannerList.map((banner) => (
            <div
              key={banner.guid}
              className="border border-border rounded-xl bg-card p-4 md:p-5 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col md:flex-row gap-4">
                <div className="shrink-0">
                  {banner.image ? (
                    <img
                      src={banner.image}
                      alt=""
                      className="rounded-lg object-cover"
                      style={{ width: '370px', height: '120px' }}
                      loading="lazy"
                    />
                  ) : (
                    <div
                      className="rounded-lg bg-muted flex items-center justify-center"
                      style={{ width: '370px', height: '120px' }}
                    >
                      <ImageIcon className="h-8 w-8 text-muted-foreground" />
                    </div>
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <p className="text-xs text-muted-foreground mb-1">370x120px</p>
                  <div className="mt-1 text-xs text-muted-foreground line-clamp-3 font-mono bg-muted p-2 rounded">
                    {banner.html_source ? banner.html_source.substring(0, 200) + (banner.html_source.length > 200 ? '...' : '') : '-'}
                  </div>
                  <div className="mt-2 text-xs text-muted-foreground space-y-0.5">
                    <p>{t('banners.created')}: {formatDate(banner.created_at)}</p>
                  </div>
                </div>

                <div className="flex md:flex-col items-center md:items-end gap-2 shrink-0">
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-lg"
                    onClick={() => setPreviewBanner(banner)}
                  >
                    <Eye className="h-4 w-4 mr-1" />
                    {t('banners.actions.preview')}
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-lg"
                    onClick={() => openEditDialog(banner)}
                  >
                    <Edit3 className="h-4 w-4 mr-1" />
                    {t('banners.actions.edit')}
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="rounded-lg text-red-600 hover:text-red-700 hover:bg-red-50"
                    onClick={() => {
                      setBannerToDelete(banner)
                      setDeleteDialogOpen(true)
                    }}
                    disabled={actionLoading === banner.guid}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}

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

      {/* Create Dialog */}
      <Dialog open={createDialogOpen} onOpenChange={(open) => { if (!open) { setCreateDialogOpen(false); resetForm() } }}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>{t('banners.createDialog.title')}</DialogTitle>
            <DialogDescription>{t('banners.createDialog.description')}</DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            {formError && (
              <div className="rounded-lg bg-red-50 border border-red-200 p-3 text-sm text-red-700">
                {formError}
              </div>
            )}
            <div className="space-y-2">
              <Label htmlFor="banner-html">{t('banners.form.htmlSource')}</Label>
              <Textarea
                id="banner-html"
                value={formData.html_source}
                onChange={(e) => setFormData(prev => ({ ...prev, html_source: e.target.value }))}
                placeholder={t('banners.form.htmlSourcePlaceholder')}
                className="rounded-xl min-h-24 font-mono text-sm"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="banner-image">{t('banners.form.image')}</Label>
              <p className="text-xs text-muted-foreground">370x120px</p>
              <Input
                id="banner-image"
                type="file"
                accept="image/*"
                onChange={(e) => setFormData(prev => ({ ...prev, image: e.target.files?.[0] ?? null }))}
                className="rounded-xl"
              />
            </div>
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
      <Dialog open={editDialogOpen} onOpenChange={(open) => { if (!open) { setEditDialogOpen(false); setEditingBanner(null); resetForm() } }}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>{t('banners.editDialog.title')}</DialogTitle>
            <DialogDescription>{t('banners.editDialog.description')}</DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            {formError && (
              <div className="rounded-lg bg-red-50 border border-red-200 p-3 text-sm text-red-700">
                {formError}
              </div>
            )}
            <div className="space-y-2">
              <Label htmlFor="edit-banner-html">{t('banners.form.htmlSource')}</Label>
              <Textarea
                id="edit-banner-html"
                value={formData.html_source}
                onChange={(e) => setFormData(prev => ({ ...prev, html_source: e.target.value }))}
                placeholder={t('banners.form.htmlSourcePlaceholder')}
                className="rounded-xl min-h-24 font-mono text-sm"
              />
            </div>
            {editingBanner && editingBanner.image && !formData.image && (
              <div className="space-y-2">
                <Label>{t('banners.form.currentImage')}</Label>
                <img
                  src={editingBanner.image}
                  alt=""
                  className="rounded-lg border object-cover"
                  style={{ width: '370px', height: '120px' }}
                />
              </div>
            )}
            <div className="space-y-2">
              <Label htmlFor="edit-banner-image">{t('banners.form.replaceImage')}</Label>
              <p className="text-xs text-muted-foreground">370x120px</p>
              <Input
                id="edit-banner-image"
                type="file"
                accept="image/*"
                onChange={(e) => setFormData(prev => ({ ...prev, image: e.target.files?.[0] ?? null }))}
                className="rounded-xl"
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => { setEditDialogOpen(false); setEditingBanner(null); resetForm() }}>
              {t('common.cancel')}
            </Button>
            <Button onClick={() => void handleEdit()} disabled={submitting}>
              {submitting ? t('common.saving') : t('common.save')}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Preview Dialog */}
      <Dialog open={!!previewBanner} onOpenChange={() => setPreviewBanner(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{t('banners.preview.title')}</DialogTitle>
          </DialogHeader>
          {previewBanner && (
            <div className="space-y-4">
              {previewBanner.image && (
                <div className="flex justify-center">
                  <img
                    src={previewBanner.image}
                    alt=""
                    className="rounded-lg border object-cover"
                    style={{ width: '370px', height: '120px' }}
                  />
                </div>
              )}

              <div>
                <h4 className="text-sm font-medium text-muted-foreground mb-1">{t('banners.form.htmlSource')}</h4>
                <pre className="text-sm bg-muted p-4 rounded-lg overflow-x-auto whitespace-pre-wrap font-mono">
                  {previewBanner.html_source || '-'}
                </pre>
              </div>

              <div className="text-sm space-y-1 text-muted-foreground">
                <p>
                  <span className="font-medium text-foreground">{t('banners.created')}:</span>{' '}
                  {formatDate(previewBanner.created_at)}
                </p>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setPreviewBanner(null)}>
              {t('common.back')}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent className="max-w-sm">
          <DialogHeader>
            <DialogTitle>{t('banners.deleteDialog.title')}</DialogTitle>
            <DialogDescription>{t('banners.deleteDialog.description')}</DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex flex-col sm:flex-row gap-2">
            <Button variant="outline" onClick={() => setDeleteDialogOpen(false)}>
              {t('common.back')}
            </Button>
            <Button
              variant="destructive"
              onClick={() => void handleDelete()}
              disabled={actionLoading === bannerToDelete?.guid}
            >
              <Trash2 className="h-4 w-4 mr-1" />
              {t('banners.deleteDialog.confirm')}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
