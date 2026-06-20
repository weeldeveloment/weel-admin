import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Building2, Image } from 'lucide-react'
import { PropertyItem, PropertyTab } from '@/types'
import { formatDate } from '@/lib/utils'

type ViewMode = 'grid' | 'list'

export default function PropertyCard({
  item,
  viewMode,
  type,
}: {
  item: PropertyItem
  viewMode: ViewMode
  type: PropertyTab
}) {
  const navigate = useNavigate()
  const { t } = useTranslation()

  const handleClick = () => {
    const propertyId = item.guid
    if (!propertyId) return
    navigate(`/properties/${type}/${propertyId}`)
  }

  const verifiedBadge = (
    <Badge
      variant={item.is_verified ? 'default' : 'secondary'}
      className="text-[10px] px-1.5 py-0"
    >
      {item.is_verified ? t('properties.verified') : t('properties.unverified')}
    </Badge>
  )

  const dateText = item.created_at ? (
    <span className="text-[10px] text-muted-foreground">
      {formatDate(item.created_at)}
    </span>
  ) : null

  const tenantBadge =
    type === 'hotels' && item.organization_name ? (
      <Badge variant="outline" className="gap-1 text-[10px] px-1.5 py-0">
        <Building2 className="h-3 w-3" />
        {item.organization_name}
      </Badge>
    ) : null

  if (viewMode === 'list') {
    return (
      <button
        type="button"
        className="group flex w-full overflow-hidden rounded-xl border text-left text-sm transition-all hover:shadow-md"
        onClick={handleClick}
      >
        <div className="h-24 w-32 shrink-0 bg-muted sm:h-28 sm:w-40">
          {item.img?.[0] ? (
            <img
              src={item.img[0]}
              alt={item.title}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-muted">
              <Image className="h-8 w-8 text-muted-foreground" />
            </div>
          )}
        </div>
        <Card className="flex flex-1 flex-col justify-center rounded-none border-0 border-l shadow-none">
          <CardContent className="space-y-1.5 p-4">
            <p className="line-clamp-1 font-semibold">{item.title}</p>
            <p className="text-xs text-muted-foreground">{item.city}</p>
            <div className="flex items-center gap-2">
              {verifiedBadge}
              {tenantBadge}
              {dateText}
            </div>
          </CardContent>
        </Card>
      </button>
    )
  }

  return (
    <button
      type="button"
      className="group w-full overflow-hidden rounded-xl border text-left text-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
      onClick={handleClick}
    >
      <div className="aspect-[4/3] w-full bg-muted">
        {item.img?.[0] ? (
          <img
            src={item.img[0]}
            alt={item.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-muted">
            <Image className="h-10 w-10 text-muted-foreground" />
          </div>
        )}
      </div>
      <Card className="rounded-none border-0 border-t shadow-none">
        <CardContent className="space-y-1.5 p-4">
          <p className="line-clamp-1 font-semibold">{item.title}</p>
          <p className="text-xs text-muted-foreground">{item.city}</p>
          <div className="flex items-center justify-between pt-0.5">
            <div className="flex items-center gap-2">
              {verifiedBadge}
              {tenantBadge}
            </div>
            {dateText}
          </div>
        </CardContent>
      </Card>
    </button>
  )
}
