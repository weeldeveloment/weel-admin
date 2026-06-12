import { Routes, Route, Navigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useAuthStore } from './store/authStore'
import { useTranslation } from 'react-i18next'
import LoginPage from './pages/LoginPage'
import Layout from './components/Layout'
import UsersPage from './pages/UsersPage'
import ChatPage from './pages/ChatPage'
import BookingsPage from './pages/BookingsPage'
import Partner from './pages/Partner'
import PropertiesPage from './pages/PropertiesPage'
import CottageDetailsUpdate from './pages/CottageDetailsUpdate'
import ApartmentDetailsUpdate from './pages/ApartmentDetailsUpdate'
import StoriesModerationPage from './pages/StoriesModerationPage'
import NewsManagementPage from './pages/NewsManagementPage'
import BannerManagementPage from './pages/BannerManagementPage'

function App() {
  const { isAuthenticated, isLoading, checkAuth } = useAuthStore()
  const { t } = useTranslation()

  useEffect(() => {
    checkAuth()
  }, [checkAuth])

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-center">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
          <p className="mt-2 text-sm text-muted-foreground">{t('common.loading')}</p>
        </div>
      </div>
    )
  }

  return (
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
        <Route path="bookings" element={<BookingsPage />} />
        <Route path="chat" element={<ChatPage />} />
        <Route path="chat/:partnerId" element={<ChatPage />} />
        <Route path="partner/:partnerId" element={<Partner />} />
        <Route path="properties" element={<PropertiesPage />} />
        <Route path="properties/cottages/:propertyId" element={<CottageDetailsUpdate />} />
        <Route path="properties/apartments/:propertyId" element={<ApartmentDetailsUpdate />} />
        <Route path="properties/:propertyType/:propertyId" element={<Navigate to="/properties" replace />} />
        <Route path="stories" element={<StoriesModerationPage />} />
        <Route path="news" element={<NewsManagementPage />} />
        <Route path="banners" element={<BannerManagementPage />} />
      </Route>
    </Routes>
  )
}

export default App
