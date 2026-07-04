import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './index.css'
import './i18n'
import App from './App'
import { ThemeProvider } from './components/theme-provider'

// Browser extensions (Google Translate, grammar checkers) mutate React-owned
// DOM nodes, which makes React's removeChild/insertBefore throw NotFoundError
// and crash the whole app (facebook/react#11538). Fall back gracefully instead.
if (typeof Node === 'function' && Node.prototype) {
  const originalRemoveChild = Node.prototype.removeChild
  Node.prototype.removeChild = function <T extends Node>(this: Node, child: T): T {
    if (child.parentNode !== this) {
      if (console) {
        console.warn('Ignored removeChild on detached node (likely a browser extension mutated the DOM)')
      }
      return child
    }
    return originalRemoveChild.call(this, child) as T
  }

  const originalInsertBefore = Node.prototype.insertBefore
  Node.prototype.insertBefore = function <T extends Node>(this: Node, newNode: T, referenceNode: Node | null): T {
    if (referenceNode && referenceNode.parentNode !== this) {
      if (console) {
        console.warn('Ignored insertBefore for detached reference node (likely a browser extension mutated the DOM)')
      }
      return newNode
    }
    return originalInsertBefore.call(this, newNode, referenceNode) as T
  }
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
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
