import { useState, useEffect, useCallback } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
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
  Upload,
  AlertCircle,
  ImageIcon,
} from 'lucide-react'
import api from '@/lib/api'
import { useTranslation } from 'react-i18next'
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

interface PropertyTypeAdmin {
  guid: string
  title_en: string
  title_ru: string
  title_uz: string
  icon_url: string | null
  kind: string
}

const PLACEHOLDER_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>`

const ACCEPTED_FORMATS = '.svg,.png'

export default function PropertyTypeIconsPage() {
  const { t } = useTranslation()
  const [types, setTypes] = useState<PropertyTypeAdmin[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const [uploadDialogOpen, setUploadDialogOpen] = useState(false)
  const [selectedType, setSelectedType] = useState<PropertyTypeAdmin | null>(null)
  const [iconFile, setIconFile] = useState<File | null>(null)
  const [formError, setFormError] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false)

  const fetchTypes = useCallback(async () => {
    try {
      setLoading(true)
      setError(null)
      const response = await api.get<PropertyTypeAdmin[]>('/property/admin/types/')
      setTypes(response.data ?? [])
    } catch (err: unknown) {
      console.error('Error fetching property types:', err)
      setError(getApiErrorMessage(err) ?? 'Failed to load property types')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    void fetchTypes()
  }, [fetchTypes])

  const openUploadDialog = (type: PropertyTypeAdmin) => {
    setSelectedType(type)
    setIconFile(null)
    setFormError(null)
    setUploadDialogOpen(true)
  }

  const handleUpload = async () => {
    if (!selectedType) return
    setFormError(null)
    if (!iconFile) {
      setFormError(t('propertyTypeIcons.form.errorNoFile'))
      return
    }
    try {
      setSubmitting(true)
      const fd = new FormData()
      fd.append('icon', iconFile)
      await api.post(`/property/admin/types/${selectedType.guid}/icon/`, fd)
      setUploadDialogOpen(false)
      setSelectedType(null)
      await fetchTypes()
    } catch (err: unknown) {
      setFormError(getApiErrorMessage(err) ?? t('propertyTypeIcons.form.errorUploadFailed'))
    } finally {
      setSubmitting(false)
    }
  }

  const getKindLabel = (kind: string) => {
    const labels: Record<string, string> = {
      apartment: t('propertyTypeIcons.kinds.apartment'),
      cottage: t('propertyTypeIcons.kinds.cottage'),
      hotel: t('propertyTypeIcons.kinds.hotel'),
    }
    return labels[kind] ?? kind
  }

  const getCurrentLanguage = () => {
    return (typeof window !== 'undefined' ? localStorage.getItem('i18nextLng') : null) ?? 'uz'
  }

  const getLocalizedTitle = (type: PropertyTypeAdmin) => {
    const lang = getCurrentLanguage()
    if (lang === 'ru') return type.title_ru
    if (lang === 'en') return type.title_en
    return type.title_uz
  }

  const renderIconPreview = (type: PropertyTypeAdmin) => {
    const src = type.icon_url
    if (!src) {
      return (
        <div className="h-16 w-16 rounded-lg border-2 border-dashed border-muted-foreground/30 flex items-center justify-center bg-muted">
          <ImageIcon className="h-6 w-6 text-muted-foreground" />
        </div>
      )
    }
    const isSvg = src.endsWith('.svg')
    if (isSvg) {
      return (
        <img
          src={src}
          alt={type.title_en}
          className="h-16 w-16 object-contain"
          onError={(e) => {
            (e.target as HTMLImageElement).outerHTML = PLACEHOLDER_SVG
          }}
        />
      )
    }
    return (
      <img
        src={src}
        alt={type.title_en}
        className="h-16 w-16 rounded-lg object-cover"
        onError={(e) => {
          (e.target as HTMLImageElement).style.display = 'none'
        }}
      />
    )
  }

  return (
    <div className="space-y-6 p-4 md:p-6 overflow-y-auto h-full">
      <div className="border-b border-border pb-4 md:pb-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">
            {t('propertyTypeIcons.title')}
          </h1>
          <p className="text-muted-foreground mt-1 md:mt-2 text-sm md:text-base">
            {t('propertyTypeIcons.subtitle')}
          </p>
        </div>
      </div>

      {error && (
        <ErrorAlert message={error} onRetry={() => { setError(null); void fetchTypes() }} />
      )}

      {loading ? (
        <div className="flex h-96 items-center justify-center">
          <div className="text-center">
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent mx-auto" />
            <p className="mt-4 text-sm font-medium text-muted-foreground">
              {t('common.loading')}
            </p>
          </div>
        </div>
      ) : types.length === 0 ? (
        <div className="flex h-96 items-center justify-center">
          <div className="text-center">
            <AlertCircle className="h-12 w-12 text-muted-foreground mx-auto" />
            <p className="mt-4 text-sm font-medium text-muted-foreground">
              {t('propertyTypeIcons.empty')}
            </p>
          </div>
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {types.map((type) => (
            <div
              key={type.guid}
              className="border border-border rounded-xl bg-card p-5 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0">
                  {renderIconPreview(type)}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-foreground truncate">
                    {getLocalizedTitle(type)}
                  </h3>
                  <p className="text-sm text-muted-foreground capitalize">
                    {getKindLabel(type.kind)}
                  </p>
                  <div className="mt-1 text-xs text-muted-foreground space-y-0.5">
                    <p className="truncate">en: {type.title_en}</p>
                    <p className="truncate">ru: {type.title_ru}</p>
                    <p className="truncate">uz: {type.title_uz}</p>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full rounded-lg"
                  onClick={() => openUploadDialog(type)}
                >
                  <Upload className="h-4 w-4 mr-2" />
                  {t('propertyTypeIcons.actions.changeIcon')}
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}

      <Dialog
        open={uploadDialogOpen}
        onOpenChange={(open) => {
          if (!open) {
            setUploadDialogOpen(false)
            setSelectedType(null)
          }
        }}
      >
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>{t('propertyTypeIcons.uploadDialog.title')}</DialogTitle>
            <DialogDescription>
              {selectedType && t('propertyTypeIcons.uploadDialog.description', {
                type: getLocalizedTitle(selectedType),
              })}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            {formError && (
              <div className="rounded-lg bg-destructive/10 border border-destructive/30 p-3 text-sm text-destructive">
                {formError}
              </div>
            )}
            {selectedType && selectedType.icon_url && !iconFile && (
              <div className="space-y-2">
                <Label>{t('propertyTypeIcons.uploadDialog.currentIcon')}</Label>
                <div className="flex justify-center p-3 rounded-lg border bg-muted/50">
                  {selectedType.icon_url.endsWith('.svg') ? (
                    <img src={selectedType.icon_url} alt="" className="h-16 w-16 object-contain" />
                  ) : (
                    <img src={selectedType.icon_url} alt="" className="h-16 w-16 rounded object-cover" />
                  )}
                </div>
              </div>
            )}
            <div className="space-y-2">
              <Label htmlFor="icon-file">{t('propertyTypeIcons.uploadDialog.chooseFile')}</Label>
              <p className="text-xs text-muted-foreground">
                {t('propertyTypeIcons.uploadDialog.formatHint')}
              </p>
              <Input
                id="icon-file"
                type="file"
                accept={ACCEPTED_FORMATS}
                onChange={(e) => setIconFile(e.target.files?.[0] ?? null)}
                className="rounded-xl"
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => {
                setUploadDialogOpen(false)
                setSelectedType(null)
              }}
            >
              {t('common.cancel')}
            </Button>
            <Button onClick={() => void handleUpload()} disabled={submitting || !iconFile}>
              {submitting ? t('common.saving') : t('propertyTypeIcons.actions.upload')}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
