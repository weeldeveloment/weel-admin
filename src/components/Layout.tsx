import { Link, useLocation, Outlet } from 'react-router-dom'
import { useAuthStore } from '@/store/authStore'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar'
import { Users, MessageSquare, LogOut, Home, Building2, BookOpen, Newspaper } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { LanguageSwitcher } from './LanguageSwitcher'
import { ThemeToggle } from './ThemeToggle'

export default function Layout() {
  const location = useLocation()
  const { user, logout } = useAuthStore()
  const { t } = useTranslation()

  const navItems = [
    { icon: Home, label: t('nav.bookings'), path: '/bookings' },
    { icon: Users, label: t('nav.users'), path: '/users' },
    { icon: Building2, label: t('nav.properties'), path: '/properties' },
    { icon: BookOpen, label: t('nav.stories'), path: '/stories' },
    { icon: Newspaper, label: t('nav.news'), path: '/news' },
    { icon: MessageSquare, label: t('nav.chat'), path: '/chat' },
  ]

  return (
    <SidebarProvider defaultOpen>
      <div className="flex h-screen w-full bg-background">
        <Sidebar collapsible="icon">
          <SidebarHeader>
            <div className="flex h-10 items-center px-2">
              <h1 className="truncate text-lg font-bold group-data-[collapsible=icon]:hidden">
                {t('common.appName')}
              </h1>
              <span className="truncate text-lg font-bold group-data-[collapsible=icon]:inline hidden">
                W
              </span>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel className="group-data-[collapsible=icon]:hidden">
                {t('common.menu')}
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {navItems.map((item) => {
                    const Icon = item.icon
                    const isActive = location.pathname.startsWith(item.path)
                    return (
                      <SidebarMenuItem key={item.path}>
                        <SidebarMenuButton asChild isActive={isActive}>
                          <Link to={item.path}>
                            <Icon className="h-4 w-4" />
                            <span className="group-data-[collapsible=icon]:hidden">{item.label}</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    )
                  })}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter>
            <div className="flex items-center gap-2 px-2 py-2">
              <Avatar className="h-8 w-8 shrink-0">
                <AvatarFallback className="bg-primary text-xs text-primary-foreground">
                  {user?.email?.slice(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div className="min-w-0 flex-1 overflow-hidden group-data-[collapsible=icon]:hidden">
                <p className="truncate text-sm font-medium">{user?.email}</p>
                <p className="text-xs text-muted-foreground">{t('common.admin')}</p>
              </div>
              <Button variant="ghost" size="icon" onClick={logout}>
                <LogOut className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex items-center gap-2 px-2 group-data-[collapsible=icon]:hidden">
              <LanguageSwitcher className="flex-1" />
              <ThemeToggle />
            </div>
          </SidebarFooter>
        </Sidebar>

        <SidebarTrigger className="hidden md:flex" />

        <main className="flex min-w-0 flex-1 flex-col overflow-hidden">
          <Outlet />
        </main>
      </div>
    </SidebarProvider>
  )
}