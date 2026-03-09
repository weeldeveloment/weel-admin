export interface User {
  id: number
  email: string
  full_name?: string
  role?: 'admin' | 'partner'
  is_staff?: boolean
  is_superuser?: boolean
}

export interface AuthResponse {
  access: string
  refresh: string
  user: User
}

export interface Partner {
  id: number
  full_name: string
  email: string
  phone?: string
  avatar?: string
  is_active: boolean
  created_at: string
  unread_count?: number
}

export interface Message {
  id: number
  sender_id: number
  receiver_id: number
  content: string
  created_at: string
  is_read: boolean
  sender?: User
}

export interface Conversation {
  partner: Partner
  last_message?: Message
  unread_count: number
}

export interface WebSocketMessage {
  type: 'message' | 'read' | 'typing' | 'online' | 'offline' | 'ping'
  data: any
}
