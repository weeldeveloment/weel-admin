import { useTranslation } from 'react-i18next'
import { Globe2 } from 'lucide-react'
import { cn } from '@/lib/utils'

interface LanguageSwitcherProps {
  className?: string
}

export function LanguageSwitcher({ className }: LanguageSwitcherProps) {
  const { i18n, t } = useTranslation()
  const currentLang = i18n.resolvedLanguage ?? i18n.language
  const languages = [
    { code: 'en', label: t('common.languages.en') },
    { code: 'ru', label: t('common.languages.ru') },
    { code: 'uz', label: t('common.languages.uz') },
  ]

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    void i18n.changeLanguage(event.target.value)
  }

  return (
    <div className={cn('inline-flex items-center gap-2', className)}>
      <Globe2 className="h-4 w-4 text-muted-foreground" />
      <select
        value={currentLang}
        onChange={handleChange}
        className="rounded-md border bg-background px-2 py-1 text-sm text-foreground"
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.label}
          </option>
        ))}
      </select>
    </div>
  )
}
