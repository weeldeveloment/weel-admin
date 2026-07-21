import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './index.css'
import './i18n'
import App from './App'
import { ThemeProvider } from './components/theme-provider'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
    },
  },
})

// Disable browser extension DOM injectors (Grammarly, Microsoft Editor, etc.)
// at the mount point level so they don't mutate React-owned nodes.
const rootEl = document.getElementById('root')!
rootEl.setAttribute('data-gramm', 'false')
rootEl.setAttribute('data-gramm_editor', 'false')
rootEl.setAttribute('data-enable-grammarly', 'false')
rootEl.setAttribute('data-ms-editor', 'false')

createRoot(rootEl).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>,
)
