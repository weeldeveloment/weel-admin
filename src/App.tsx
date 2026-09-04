import { Routes, Route, Navigate } from 'react-router-dom'
import { lazy, Suspense, useEffect } from 'react'
import { useAuthStore } from './store/authStore'
import { useTranslation } from 'react-i18next'
import Layout from './components/Layout'

const LoginPage = lazy(() => import('./pages/LoginPage'))
const UsersPage = lazy(() => import('./pages/UsersPage'))
const B2BPage = lazy(() => import('./pages/B2BPage'))
const ChatPage = lazy(() => import('./pages/ChatPage'))
const B2BSupportPage = lazy(() => import('./pages/B2BSupportPage'))
const B2BOwnershipPage = lazy(() => import('./pages/B2BOwnershipPage'))
const BookingsPage = lazy(() => import('./pages/BookingsPage'))
const Partner = lazy(() => import('./pages/Partner'))
const ActivitiesPage = lazy(() => import('./pages/ActivitiesPage'))
const ActivityCalendarPage = lazy(() => import('./pages/ActivityCalendarPage'))
const StoriesModerationPage = lazy(() => import('./pages/StoriesModerationPage'))
const NewsManagementPage = lazy(() => import('./pages/NewsManagementPage'))
const BannerManagementPage = lazy(() => import('./pages/BannerManagementPage'))

function LoadingScreen() {
  const { t } = useTranslation()
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="text-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
        <p className="mt-2 text-sm text-muted-foreground">{t('common.loading')}</p>
      </div>
    </div>
  )
}

function App() {
  const { isAuthenticated, isLoading, checkAuth } = useAuthStore()

  useEffect(() => {
    checkAuth()
  }, [checkAuth])

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <Suspense fallback={<LoadingScreen />}>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <Layout />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        >
          <Route index element={<Navigate to="/users" replace />} />
          <Route path="users" element={<UsersPage />} />
          <Route path="b2b" element={<B2BPage />} />
          <Route path="bookings" element={<BookingsPage />} />
          <Route path="chat" element={<ChatPage />} />
          <Route path="chat/:partnerId" element={<ChatPage />} />
          <Route path="b2b-support" element={<B2BSupportPage />} />
          <Route path="b2b-ownership" element={<B2BOwnershipPage />} />
          <Route path="partner/:partnerId" element={<Partner />} />
          <Route path="activities" element={<ActivitiesPage />} />
          <Route path="activities/:guid/calendar" element={<ActivityCalendarPage />} />
          <Route path="stories" element={<StoriesModerationPage />} />
          <Route path="news" element={<NewsManagementPage />} />
          <Route path="banners" element={<BannerManagementPage />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App
