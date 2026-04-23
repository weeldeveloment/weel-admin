import { useEffect, useRef, useCallback, useState } from 'react'
import { Message, WebSocketMessage } from '@/types'

interface UseChatWebSocketOptions {
  onMessage?: (message: Message) => void
  onRead?: (payload: { partnerId: number; partnerType?: 'admin' | 'partner' | 'client'; messageIds: number[] }) => void
  onError?: (error: string) => void
}

type ReadPayload = { partnerId: number; partnerType?: 'admin' | 'partner' | 'client'; messageIds: number[] }

function isReadPayload(value: unknown): value is ReadPayload {
  if (!value || typeof value !== 'object') return false
  const record = value as Record<string, unknown>

  if (typeof record.partnerId !== 'number') return false
  if (!Array.isArray(record.messageIds) || !record.messageIds.every((id) => typeof id === 'number')) return false
  if (
    record.partnerType !== undefined &&
    record.partnerType !== 'admin' &&
    record.partnerType !== 'partner' &&
    record.partnerType !== 'client'
  ) {
    return false
  }

  return true
}

const WS_URL = 'wss://dev.weel.uz/ws/chat/'

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
    const ws = new WebSocket(`${WS_URL}?token=${encodeURIComponent(token)}`)
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
          if (isReadPayload(data.data)) {
            optionsRef.current.onRead?.(data.data)
          } else {
            optionsRef.current.onError?.('Invalid chat websocket read payload')
          }
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

  const sendMessage = useCallback((receiverId: number, receiverType: 'partner' | 'client', content: string): void => {
    if (!wsRef.current || wsRef.current.readyState !== WebSocket.OPEN) {
      return
    }

    wsRef.current.send(JSON.stringify({
      type: 'message',
      data: {
        receiver_id: receiverId,
        receiver_type: receiverType,
        content,
      },
    }))
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
    sendMessage,
    isConnected,
  }
}
