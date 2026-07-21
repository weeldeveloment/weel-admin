const ACCESS_TOKEN_KEY = 'access_token'
const REFRESH_TOKEN_KEY = 'refresh_token'

let accessTokenMemory: string | null = sessionStorage.getItem(ACCESS_TOKEN_KEY)
let refreshTokenMemory: string | null = sessionStorage.getItem(REFRESH_TOKEN_KEY)

export function getAccessToken() {
  return accessTokenMemory
}

export function getRefreshToken() {
  return refreshTokenMemory
}

export function setAuthTokens(access: string, refresh?: string) {
  accessTokenMemory = access
  sessionStorage.setItem(ACCESS_TOKEN_KEY, access)

  if (refresh !== undefined) {
    refreshTokenMemory = refresh
    sessionStorage.setItem(REFRESH_TOKEN_KEY, refresh)
  }
}

export function clearAuthTokens() {
  accessTokenMemory = null
  refreshTokenMemory = null
  sessionStorage.removeItem(ACCESS_TOKEN_KEY)
  sessionStorage.removeItem(REFRESH_TOKEN_KEY)
  localStorage.removeItem(ACCESS_TOKEN_KEY)
  localStorage.removeItem(REFRESH_TOKEN_KEY)
}
