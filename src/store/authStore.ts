import { create } from 'zustand'
import { User, AuthResponse } from '@/types'
import api from '@/lib/api'

const isAdminUser = (user: User) =>
  user.role === 'admin' || Boolean(user.is_staff) || Boolean(user.is_superuser)

const normalizeAdminUser = (user: User): User => ({
  ...user,
  role: 'admin',
})

const clearAuthTokens = () => {
  localStorage.removeItem('access_token')
  localStorage.removeItem('refresh_token')
}

const fetchAdminUser = async () => {
  const response = await api.get<User>('/admin-auth/me/')
  return response.data
}

interface AuthState {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
  login: (email: string, password: string) => Promise<void>
  logout: () => void
  checkAuth: () => Promise<void>
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  isLoading: true,

  login: async (email: string, password: string) => {
    try {
      const response = await api.post<Partial<AuthResponse>>('/admin-auth/login/', {
        email,
        password,
      })

      const { access, refresh } = response.data

      if (!access || !refresh) {
        throw new Error('Login response did not include authentication tokens.')
      }

      localStorage.setItem('access_token', access)
      localStorage.setItem('refresh_token', refresh)

      const user = await fetchAdminUser()

      if (!isAdminUser(user)) {
        clearAuthTokens()
        throw new Error('Access denied. Admin privileges required.')
      }

      set({ user: normalizeAdminUser(user), isAuthenticated: true })
    } catch (error: unknown) {
      console.error('Login failed:', error)
      clearAuthTokens()
      throw error
    }
  },

  logout: () => {
    clearAuthTokens()
    set({ user: null, isAuthenticated: false })
  },

  checkAuth: async () => {
    const token = localStorage.getItem('access_token')
    
    if (!token) {
      set({ isLoading: false, isAuthenticated: false })
      return
    }

    try {
      const user = await fetchAdminUser()

      if (!isAdminUser(user)) {
        clearAuthTokens()
        set({ user: null, isAuthenticated: false, isLoading: false })
        return
      }

      set({ user: normalizeAdminUser(user), isAuthenticated: true, isLoading: false })
    } catch {
      clearAuthTokens()
      set({ user: null, isAuthenticated: false, isLoading: false })
    }
  },
}))
