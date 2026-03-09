import { useEffect, useRef, useCallback } from 'react'
import { useChatStore } from '@/store/chatStore'
import { Message, WebSocketMessage } from '@/types'

const WS_URL = import.meta.env.VITE_WS_URL || 'ws://localhost:8000'

class ChatWebSocket {
  private ws: WebSocket | null = null
  private reconnectAttempts = 0
  private maxReconnectAttempts = 5
  private reconnectDelay = 1000
  private pingInterval: number | null = null

  connect(token: string, onMessage: (data: WebSocketMessage) => void) {
    if (this.ws?.readyState === WebSocket.OPEN) {
      return
    }

    try {
      this.ws = new WebSocket(`${WS_URL}/ws/chat/?token=${token}`)

      this.ws.onopen = () => {
        console.log('WebSocket connected')
        this.reconnectAttempts = 0
        useChatStore.getState().setConnected(true)

        // Start ping interval to keep connection alive
        this.pingInterval = setInterval(() => {
          this.send({ type: 'ping', data: {} })
        }, 30000)
      }

      this.ws.onmessage = (event) => {
        try {
          const data: WebSocketMessage = JSON.parse(event.data)
          onMessage(data)
        } catch (error) {
          console.error('Failed to parse WebSocket message:', error)
        }
      }

      this.ws.onerror = (error) => {
        console.error('WebSocket error:', error)
      }

      this.ws.onclose = () => {
        console.log('WebSocket disconnected')
        useChatStore.getState().setConnected(false)
        
        if (this.pingInterval) {
          clearInterval(this.pingInterval)
          this.pingInterval = null
        }

        // Attempt to reconnect
        if (this.reconnectAttempts < this.maxReconnectAttempts) {
          this.reconnectAttempts++
          setTimeout(() => {
            console.log(`Reconnecting... Attempt ${this.reconnectAttempts}`)
            this.connect(token, onMessage)
          }, this.reconnectDelay * this.reconnectAttempts)
        }
      }
    } catch (error) {
      console.error('Failed to create WebSocket connection:', error)
    }
  }

  send(message: WebSocketMessage) {
    if (this.ws?.readyState === WebSocket.OPEN) {
      this.ws.send(JSON.stringify(message))
    }
  }

  disconnect() {
    if (this.pingInterval) {
      clearInterval(this.pingInterval)
      this.pingInterval = null
    }
    if (this.ws) {
      this.ws.close()
      this.ws = null
    }
    this.reconnectAttempts = 0
  }
}

const chatWs = new ChatWebSocket()

export function useChatWebSocket() {
  const wsRef = useRef<ChatWebSocket>(chatWs)
  const { addMessage, markAsRead, updatePartnerStatus } = useChatStore()

  const handleMessage = useCallback((data: WebSocketMessage) => {
    switch (data.type) {
      case 'message':
        const message: Message = data.data
        addMessage(message.sender_id, message)
        break
      
      case 'read':
        markAsRead(data.data.partnerId, data.data.messageIds)
        break
      
      case 'online':
        updatePartnerStatus(data.data.partnerId, true)
        break
      
      case 'offline':
        updatePartnerStatus(data.data.partnerId, false)
        break
      
      default:
        console.log('Unknown message type:', data.type)
    }
  }, [addMessage, markAsRead, updatePartnerStatus])

  const connect = useCallback(() => {
    const token = localStorage.getItem('access_token')
    if (token) {
      wsRef.current.connect(token, handleMessage)
    }
  }, [handleMessage])

  const disconnect = useCallback(() => {
    wsRef.current.disconnect()
  }, [])

  const sendMessage = useCallback((partnerId: number, content: string) => {
    wsRef.current.send({
      type: 'message',
      data: { receiver_id: partnerId, content },
    })
  }, [])

  const markMessagesAsRead = useCallback((partnerId: number, messageIds: number[]) => {
    wsRef.current.send({
      type: 'read',
      data: { partnerId, messageIds },
    })
  }, [])

  useEffect(() => {
    return () => {
      disconnect()
    }
  }, [disconnect])

  return {
    connect,
    disconnect,
    sendMessage,
    markMessagesAsRead,
  }
}
