import axios from 'axios'

export const API_URL = import.meta.env.VITE_API_URL ?? ""
const API_BASE = `${API_URL}/api`

export const api = axios.create({
  baseURL: API_BASE,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Request interceptor to add auth token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('access_token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  // Remove default JSON Content-Type for FormData so the browser sets
  // the correct multipart/form-data boundary automatically.
  if (config.data instanceof FormData) {
    delete config.headers['Content-Type']
  }
  return config
})

// Response interceptor to handle token refresh
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true

      try {
        const refreshToken = localStorage.getItem('refresh_token')
        const response = await axios.post(`${API_BASE}/admin-auth/token/refresh/`, {
          refresh: refreshToken,
        })

        const { access } = response.data
        localStorage.setItem('access_token', access)
        
        originalRequest.headers.Authorization = `Bearer ${access}`
        return api(originalRequest)
      } catch (refreshError) {
        localStorage.removeItem('access_token')
        localStorage.removeItem('refresh_token')
        window.location.href = '/login'
        return Promise.reject(refreshError)
      }
    }

    return Promise.reject(error)
  }
)

export async function fetchExchangeRate(): Promise<number> {
  const response = await api.get<{ rate: string }>("/payment/exchange-rate/");
  return Number.parseFloat(response.data.rate);
}

export async function convertPriceOnCurrencyChange(
  currentCurrency: string,
  newCurrency: string,
  currentValue: string,
): Promise<string> {
  if (currentCurrency === newCurrency || !currentValue) return currentValue;
  const rate = await fetchExchangeRate();
  const numericValue = Number.parseFloat(currentValue);
  if (!Number.isFinite(numericValue)) return currentValue;

  if (currentCurrency === "USD" && newCurrency === "UZS") {
    return String(Math.round(numericValue * rate));
  }
  if (currentCurrency === "UZS" && newCurrency === "USD") {
    return String(Math.round(numericValue / rate));
  }
  return currentValue;
}

export default api
