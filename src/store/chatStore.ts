import { create } from 'zustand'
import { Message, Partner } from '@/types'

interface ChatState {
  messages: Record<number, Message[]>
  partners: Partner[]
  activePartnerId: number | null
  isConnected: boolean
  setMessages: (partnerId: number, messages: Message[]) => void
  addMessage: (partnerId: number, message: Message) => void
  setPartners: (partners: Partner[]) => void
  setActivePartnerId: (partnerId: number | null) => void
  setConnected: (connected: boolean) => void
  markAsRead: (partnerId: number, messageIds: number[]) => void
  updatePartnerStatus: (partnerId: number, isOnline: boolean) => void
}

export const useChatStore = create<ChatState>((set) => ({
  messages: {},
  partners: [],
  activePartnerId: null,
  isConnected: false,

  setMessages: (partnerId, messages) =>
    set((state) => ({
      messages: { ...state.messages, [partnerId]: messages },
    })),

  addMessage: (partnerId, message) =>
    set((state) => ({
      // Keep the store idempotent because the same event may arrive via REST refresh and socket.
      messages: {
        ...state.messages,
        [partnerId]: state.messages[partnerId].some((entry) => entry.id === message.id)
          ? state.messages[partnerId]
          : [...state.messages[partnerId], message],
      },
    })),

  setPartners: (partners) => set({ partners }),

  setActivePartnerId: (partnerId) => set({ activePartnerId: partnerId }),

  setConnected: (connected) => set({ isConnected: connected }),

  markAsRead: (partnerId, messageIds) =>
    set((state) => {
      const partnerMessages = state.messages[partnerId]
      return {
        messages: {
          ...state.messages,
          [partnerId]: partnerMessages.map((msg) =>
            messageIds.includes(msg.id) ? { ...msg, is_read: true } : msg
          ),
        },
      }
    }),

  updatePartnerStatus: (partnerId, isOnline) =>
    set((state) => ({
      partners: state.partners.map((p) =>
        p.id === partnerId ? { ...p, is_online: isOnline } : p
      ),
    })),
}))
