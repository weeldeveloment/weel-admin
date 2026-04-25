import { Moon, Sun, Laptop } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useTheme } from 'next-themes'
import { useTranslation } from 'react-i18next'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const { t } = useTranslation()

  const cycleTheme = () => {
    if (theme === 'light') setTheme('dark')
    else if (theme === 'dark') setTheme('system')
    else setTheme('light')
  }

  const current = theme
  const Icon = current === 'dark' ? Moon : current === 'system' ? Laptop : Sun

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      onClick={cycleTheme}
      className="rounded-full"
      title={t(`common.themes.${current}`)}
    >
      <Icon className="h-4 w-4" />
      <span className="sr-only">{t('common.theme')}</span>
    </Button>
  )
}
