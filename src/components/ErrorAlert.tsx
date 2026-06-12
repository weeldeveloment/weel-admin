import { Button } from '@/components/ui/button'
import { useTranslation } from 'react-i18next'

interface ErrorAlertProps {
  message: string
  onRetry: () => void
}

export default function ErrorAlert({ message, onRetry }: ErrorAlertProps) {
  const { t } = useTranslation()

  return (
    <div className="rounded-xl border border-red-200 bg-red-50 p-4">
      <p className="text-sm font-medium text-red-800">{message}</p>
      <Button
        variant="outline"
        size="sm"
        className="mt-3 border-red-300 text-red-700 hover:bg-red-100"
        onClick={onRetry}
      >
        {t('common.retry')}
      </Button>
    </div>
  )
}
