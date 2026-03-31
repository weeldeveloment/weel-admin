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
  phone_number?: string
  phone?: string
  avatar?: string
  is_active: boolean
  created_at: string
  unread_count?: number
}

export interface Message {
  id: number
  conversation_id?: number
  sender_id: number
  receiver_id: number
  sender_type?: 'admin' | 'partner'
  receiver_type?: 'admin' | 'partner'
  content: string
  created_at: string
  updated_at?: string
  is_read: boolean
  sender?: User
  receiver?: User
}

export interface Conversation {
  conversation_id: number
  counterpart: Partner
  last_message?: Message
  unread_count: number
}

export interface WebSocketMessage {
  type: 'message' | 'read' | 'typing' | 'online' | 'offline' | 'ping' | 'error'
  data: any
  error?: string
}
