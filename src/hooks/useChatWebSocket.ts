import { useEffect, useRef, useCallback, useState } from 'react'
import { Message, WebSocketMessage } from '@/types'

interface UseChatWebSocketOptions {
  onMessage?: (message: Message) => void
  onRead?: (payload: { partnerId: number; partnerType?: 'admin' | 'partner' | 'client'; messageIds: number[] }) => void
  onError?: (error: string) => void
}

function resolveWebSocketUrl(token: string) {
  const configured = (import.meta.env.VITE_WS_URL || '').trim()
  const fallback = 'wss://dev.weel.uz/ws/chat/'

  try {
    const parsed = new URL(configured || fallback)
    parsed.protocol = parsed.protocol === 'http:' ? 'ws:' : 'wss:'
    parsed.pathname = '/ws/chat/'
    parsed.search = `?token=${encodeURIComponent(token)}`
    return parsed.toString()
  } catch {
    return `${fallback}?token=${encodeURIComponent(token)}`
  }
}

export function useChatWebSocket(options: UseChatWebSocketOptions = {}) {
  const wsRef = useRef<WebSocket | null>(null)
  const pingIntervalRef = useRef<number | null>(null)
  const reconnectTimeoutRef = useRef<number | null>(null)
  const reconnectAttemptsRef = useRef(0)
  const tokenRef = useRef<string | null>(null)
  const optionsRef = useRef(options)
  const [isConnected, setIsConnected] = useState(false)

  useEffect(() => {
    optionsRef.current = options
  }, [options])

  const disconnect = useCallback(() => {
    if (reconnectTimeoutRef.current) {
      window.clearTimeout(reconnectTimeoutRef.current)
      reconnectTimeoutRef.current = null
    }
    if (pingIntervalRef.current) {
      window.clearInterval(pingIntervalRef.current)
      pingIntervalRef.current = null
    }
    if (wsRef.current) {
      wsRef.current.close(1000, 'Client disconnect')
      wsRef.current = null
    }
    reconnectAttemptsRef.current = 0
    setIsConnected(false)
  }, [])

  const connect = useCallback(() => {
    const token = localStorage.getItem('access_token')
    if (!token) return
    if (wsRef.current && (wsRef.current.readyState === WebSocket.OPEN || wsRef.current.readyState === WebSocket.CONNECTING)) {
      return
    }

    tokenRef.current = token
    const ws = new WebSocket(resolveWebSocketUrl(token))
    wsRef.current = ws

    ws.onopen = () => {
      reconnectAttemptsRef.current = 0
      setIsConnected(true)
      if (pingIntervalRef.current) {
        window.clearInterval(pingIntervalRef.current)
      }
      pingIntervalRef.current = window.setInterval(() => {
        if (wsRef.current?.readyState === WebSocket.OPEN) {
          wsRef.current.send(JSON.stringify({ type: 'ping', data: {} }))
        }
      }, 30000)
    }

    ws.onmessage = (event) => {
      try {
        const data: WebSocketMessage = JSON.parse(event.data)
        if (data.type === 'message' && data.data) {
          optionsRef.current.onMessage?.(data.data as Message)
          return
        }
        if (data.type === 'read' && data.data) {
          optionsRef.current.onRead?.(data.data)
          return
        }
        if (data.type === 'error' && data.error) {
          optionsRef.current.onError?.(data.error)
        }
      } catch {
        optionsRef.current.onError?.('Failed to parse chat websocket message')
      }
    }

    ws.onerror = () => {
      setIsConnected(false)
    }

    ws.onclose = (event) => {
      setIsConnected(false)
      if (pingIntervalRef.current) {
        window.clearInterval(pingIntervalRef.current)
        pingIntervalRef.current = null
      }
      if (event.code === 1000 || !tokenRef.current) {
        return
      }

      reconnectAttemptsRef.current += 1
      if (reconnectAttemptsRef.current > 5) {
        return
      }

      reconnectTimeoutRef.current = window.setTimeout(() => {
        connect()
      }, 3000)
    }
  }, [])

  const sendRead = useCallback((partnerId: number, messageIds: number[], partnerType: 'partner' | 'client' = 'partner') => {
    if (!wsRef.current || wsRef.current.readyState !== WebSocket.OPEN || messageIds.length === 0) {
      return false
    }

    wsRef.current.send(JSON.stringify({
      type: 'read',
      data: { partnerId, partnerType, messageIds },
    }))
    return true
  }, [])

  useEffect(() => {
    return () => {
      disconnect()
    }
  }, [disconnect])

  return {
    connect,
    disconnect,
    sendRead,
    isConnected,
  }
}
