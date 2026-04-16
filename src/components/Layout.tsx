import { Link, useLocation, Outlet } from 'react-router-dom'
import { useState } from 'react'
import { useAuthStore } from '@/store/authStore'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Users, MessageSquare, LogOut, Home, Menu } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useTranslation } from 'react-i18next'
import { LanguageSwitcher } from './LanguageSwitcher'
import { ThemeToggle } from './ThemeToggle'

export default function Layout() {
  const location = useLocation()
  const { user, logout } = useAuthStore()
  const { t } = useTranslation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { icon: Users, label: t('nav.users'), path: '/users' },
    { icon: Home, label: t('nav.bookings'), path: '/bookings' },
    { icon: MessageSquare, label: t('nav.chat'), path: '/chat' },
  ]

  const handleNavClick = () => {
    setMobileMenuOpen(false)
  }

  const renderSidebarContent = (mobile: boolean) => (
    <div className="flex h-full flex-col">
      <div className="flex h-16 items-center border-b px-4 md:px-6">
        <h1 className="truncate text-lg font-bold md:text-xl">{t('common.appName')}</h1>
      </div>

      <nav className="space-y-1 p-4">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = location.pathname.startsWith(item.path)
          const link = (
            <Link
              to={item.path}
              className={cn(
                'flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors md:py-2',
                isActive
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
              )}
            >
              <Icon className="h-4 w-4 shrink-0" />
              <span className="truncate">{item.label}</span>
            </Link>
          )

          if (mobile) {
            return (
              <SheetClose asChild key={item.path}>
                {link}
              </SheetClose>
            )
          }

          return (
            <div key={item.path} onClick={handleNavClick}>
              {link}
            </div>
          )
        })}
      </nav>

      <div className="mt-auto border-t bg-card p-4">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <Avatar className="h-9 w-9 shrink-0">
              <AvatarFallback className="bg-primary text-xs text-primary-foreground">
                {user?.email?.slice(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div className="min-w-0 flex-1 overflow-hidden">
              <p className="truncate text-sm font-medium">{user?.email}</p>
              <p className="text-xs text-muted-foreground">{t('common.admin')}</p>
            </div>
            <Button variant="ghost" size="icon" onClick={logout} className="shrink-0">
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex items-center gap-2">
            <LanguageSwitcher className="flex-1" />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="flex h-screen bg-background">
      {/* Desktop Sidebar */}
      <aside className="hidden w-64 shrink-0 border-r bg-card md:block">
        {renderSidebarContent(false)}
      </aside>

      {/* Main Content */}
      <main className="flex min-w-0 flex-1 flex-col overflow-hidden">
        <div className="flex h-14 items-center border-b px-3 md:hidden">
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open navigation menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[280px] p-0">
              <SheetHeader className="sr-only">
                <SheetTitle>{t('common.appName')}</SheetTitle>
                <SheetDescription>{t('common.appName')} navigation</SheetDescription>
              </SheetHeader>
              {renderSidebarContent(true)}
            </SheetContent>
          </Sheet>
          <p className="ml-2 truncate text-sm font-semibold">{t('common.appName')}</p>
        </div>
        <Outlet />
      </main>
    </div>
  )
}