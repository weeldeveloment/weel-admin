import { useState, useEffect, useRef, useCallback, memo } from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import {
  Send,
  Search,
  Check,
  CheckCheck,
  Loader2
} from 'lucide-react';
import { api } from '@/lib/api';
import { useChatWebSocket } from '@/hooks/useChatWebSocket';
import { useTranslation } from 'react-i18next';

interface Actor {
  id: number;
  role?: 'admin' | 'partner' | 'client';
  full_name: string;
  email?: string;
  username?: string;
  phone_number?: string;
}

interface ChatMessage {
  id: number;
  conversation?: number;
  conversation_id?: number;
  sender?: Actor;
  receiver?: Actor;
  sender_type?: 'admin' | 'partner' | 'client';
  receiver_type?: 'admin' | 'partner' | 'client';
  sender_id?: number;
  receiver_id?: number;
  content: string;
  is_read: boolean;
  created_at: string;
  updated_at?: string;
}

interface Conversation {
  conversation_id: number;
  counterpart: Actor;
  last_message?: ChatMessage;
  unread_count: number;
}

function getCounterpartIdFromMessage(message: ChatMessage, counterpartRole: 'partner' | 'client') {
  const senderType = message.sender?.role ?? message.sender_type;
  const receiverType = message.receiver?.role ?? message.receiver_type;

  if (senderType === counterpartRole) {
    return Number(message.sender?.id ?? message.sender_id);
  }

  if (receiverType === counterpartRole) {
    return Number(message.receiver?.id ?? message.receiver_id);
  }

  return null;
}

function mergeChatMessage(messages: ChatMessage[], incoming: ChatMessage) {
  if (messages.some((entry) => entry.id === incoming.id)) {
    return messages;
  }

  return [...messages, incoming].sort(
    (left, right) => new Date(left.created_at).getTime() - new Date(right.created_at).getTime()
  );
}

const ConversationItem = memo(
  ({
    conversation,
    isActive,
    onClick,
  }: {
    conversation: Conversation;
    isActive: boolean;
    onClick: () => void;
  }) => {
    const { t } = useTranslation();
    return (
      <button
        onClick={onClick}
        className={`w-full rounded-xl p-3 text-left transition-all duration-200 hover:bg-accent/80 ${
          isActive ? 'bg-accent/50 border border-accent' : ''
        }`}
      >
        <div className="flex items-start gap-3">
          <div className="relative flex-shrink-0">
            <Avatar className="h-12 w-12">
              <AvatarImage
                src={`https://api.dicebear.com/7.x/initials/svg?seed=${conversation.counterpart.full_name}`}
              />
              <AvatarFallback>
                {conversation.counterpart.full_name.slice(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
          </div>
          <div className="flex-1 overflow-hidden">
            <div className="flex items-center justify-between gap-2">
              <p className="font-semibold truncate">{conversation.counterpart.full_name}</p>
              {conversation.unread_count > 0 && (
                <Badge variant="default" className="h-5 min-w-[20px] px-1.5 text-xs">
                  {conversation.unread_count}
                </Badge>
              )}
            </div>
            <p className="truncate text-sm mt-0.5 text-muted-foreground">
              {conversation.last_message?.content || t('chat.noMessages')}
            </p>
            {conversation.counterpart.phone_number && (
              <p className="text-xs text-muted-foreground mt-1">
                {conversation.counterpart.phone_number}
              </p>
            )}
          </div>
        </div>
      </button>
    )
  }
);

ConversationItem.displayName = 'ConversationItem';

const MessageBubble = memo(({ message }: { message: ChatMessage }) => {
  const senderRole = message.sender?.role ?? message.sender_type;
  const isAdmin = senderRole === 'admin';

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString(undefined, { hour: 'numeric', minute: '2-digit', hour12: true });
  };

  const StatusIcon = () => {
    if (!isAdmin) return null;
    return message.is_read ? (
      <CheckCheck className="h-3 w-3 text-blue-500" />
    ) : (
      <Check className="h-3 w-3 opacity-50" />
    );
  };

  return (
    <div
      className={`flex ${isAdmin ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-2 duration-300`}
    >
      <div
        className={`max-w-[70%] rounded-2xl px-4 py-2.5 ${
          isAdmin
            ? 'bg-primary text-primary-foreground rounded-br-sm'
            : 'bg-accent text-accent-foreground rounded-bl-sm'
        }`}
      >
        <p className="text-sm leading-relaxed whitespace-pre-wrap break-words">{message.content}</p>
        <div className="flex items-center justify-end gap-1 mt-1">
          <span className={`text-xs ${isAdmin ? 'opacity-70' : 'text-muted-foreground'}`}>
            {formatTime(message.created_at)}
          </span>
          <StatusIcon />
        </div>
      </div>
    </div>
  );
});

MessageBubble.displayName = 'MessageBubble';

const DateSeparator = memo(({ date }: { date: string }) => {
  const { t } = useTranslation();
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    if (date.toDateString() === today.toDateString()) {
      return t('common.today');
    } else if (date.toDateString() === yesterday.toDateString()) {
      return t('common.yesterday');
    } else {
      return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    }
  };

  return (
    <div className="flex items-center justify-center my-4">
      <div className="bg-muted px-3 py-1 rounded-full">
        <span className="text-xs text-muted-foreground font-medium">{formatDate(date)}</span>
      </div>
    </div>
  );
});

DateSeparator.displayName = 'DateSeparator';



export default function ChatPage() {
  const { partnerId } = useParams<{ partnerId?: string }>();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');
  const [messageInput, setMessageInput] = useState('');
  const [isSending, setIsSending] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const messageEndRef = useRef<HTMLDivElement>(null);
  const requestedRole = (searchParams.get('role') || '').toLowerCase();
  const counterpartRole: 'partner' | 'client' = requestedRole === 'client' ? 'client' : 'partner';
  const activePartnerId = partnerId ? Number(partnerId) : null;
  const markMessagesAsRead = useCallback(
    async (targetPartnerId: number, messageIds: number[], targetRole: 'partner' | 'client') => {
      if (messageIds.length === 0) return;

      await api.post('/chat/read/', {
        message_ids: messageIds,
        counterpart_id: targetPartnerId,
        counterpart_type: targetRole,
      });

      queryClient.setQueryData(['messages', targetPartnerId.toString(), targetRole], (old: ChatMessage[] = []) =>
        old.map((entry) => (messageIds.includes(entry.id) ? { ...entry, is_read: true } : entry))
      );
      queryClient.invalidateQueries({ queryKey: ['conversations'] });
    },
    [queryClient]
  );
  const { connect, disconnect } = useChatWebSocket({
    onMessage: (incoming) => {
      const normalizedIncoming = incoming as ChatMessage;
      const incomingPartnerId = getCounterpartIdFromMessage(normalizedIncoming, counterpartRole);

      if (!incomingPartnerId || incomingPartnerId !== activePartnerId) {
        queryClient.invalidateQueries({ queryKey: ['conversations'] });
        return;
      }

      queryClient.setQueryData(['messages', partnerId, counterpartRole], (old: ChatMessage[] = []) =>
        mergeChatMessage(old, normalizedIncoming)
      );
      queryClient.invalidateQueries({ queryKey: ['conversations'] });

      if (incoming.sender_type === counterpartRole && !incoming.is_read) {
        void markMessagesAsRead(incomingPartnerId, [incoming.id], counterpartRole);
      }

      scrollToBottom();
    },
    onRead: (payload) => {
      if (!payload.messageIds?.length) {
        queryClient.invalidateQueries({ queryKey: ['conversations'] });
        return;
      }

      if (!partnerId) {
        queryClient.invalidateQueries({ queryKey: ['conversations'] });
        return;
      }

      queryClient.setQueryData(['messages', partnerId, counterpartRole], (old: ChatMessage[] = []) =>
        old.map((entry) => (payload.messageIds.includes(entry.id) ? { ...entry, is_read: true } : entry))
      );
      queryClient.invalidateQueries({ queryKey: ['conversations'] });
    },
  });

  // Fetch conversations
  const {
    data: conversations = [],
    isLoading: isLoadingConversations,
  } = useQuery<Conversation[]>({
    queryKey: ['conversations'],
    queryFn: async () => {
      const response = await api.get('/chat/conversations/');
      return (response.data || []).map((conv: any) => ({
        conversation_id: conv.conversation_id ?? conv.id,
        counterpart: conv.counterpart ?? conv.partner,
        last_message: conv.last_message,
        unread_count: conv.unread_count ?? 0,
      }));
    },
    refetchInterval: 30000,
  });

  // Fetch messages for selected partner
  const {
    data: messages = [],
    isLoading: isLoadingMessages,
  } = useQuery<ChatMessage[]>({
    queryKey: ['messages', partnerId, counterpartRole],
    queryFn: async () => {
      if (!partnerId) throw new Error('Partner ID is required');
      const response = await api.get(`/chat/messages/${partnerId}/`, {
        params: {
          role: counterpartRole,
        },
      });
      return response.data;
    },
    enabled: !!partnerId,
  });

  useEffect(() => {
    connect();

    return () => {
      disconnect();
    };
  }, [connect, disconnect]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    setMessageInput('');
  }, [partnerId]);

  useEffect(() => {
    if (!activePartnerId || messages.length === 0) return;

    const unreadPartnerMessageIds = messages
      .filter((entry) => entry.sender_type === counterpartRole && !entry.is_read)
      .map((entry) => entry.id);

    if (unreadPartnerMessageIds.length > 0) {
      void markMessagesAsRead(activePartnerId, unreadPartnerMessageIds, counterpartRole);
    }
  }, [activePartnerId, markMessagesAsRead, messages, counterpartRole]);

  const scrollToBottom = () => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = useCallback(async () => {
    if (!messageInput.trim() || !partnerId || isSending) return;

    setIsSending(true);
    try {
      const response = await api.post('/chat/send/', {
        receiver_id: parseInt(partnerId),
        receiver_type: counterpartRole,
        content: messageInput.trim(),
      });

      queryClient.setQueryData(['messages', partnerId, counterpartRole], (old: ChatMessage[] = []) =>
        mergeChatMessage(old, response.data)
      );
      queryClient.invalidateQueries({ queryKey: ['conversations'] });

      setMessageInput('');
      scrollToBottom();
    } catch (error) {
      console.error('Failed to send message:', error);
    } finally {
      setIsSending(false);
    }
  }, [messageInput, partnerId, isSending, queryClient, counterpartRole]);

  const filteredConversations = conversations.filter((conv) =>
    conv.counterpart.full_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const selectedConversation = conversations.find(
    (conv) =>
      conv.counterpart.id.toString() === partnerId &&
      (conv.counterpart.role || 'partner') === counterpartRole
  );
  const activeCounterpart = selectedConversation?.counterpart;
  const activeCounterpartName =
    activeCounterpart?.full_name || `${counterpartRole === 'client' ? 'Client' : 'Partner'} #${partnerId}`;

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar - Conversations List */}
      <Card className="w-80 flex-shrink-0 rounded-none border-l-0 border-y-0">
        <div className="p-4 border-b">
          <h2 className="text-xl font-bold mb-4">{t('chat.title')}</h2>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder={t('chat.searchPlaceholder')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9"
            />
          </div>
        </div>

        <ScrollArea className="h-[calc(100vh-140px)]">
          <div className="p-3 space-y-2">
            {isLoadingConversations ? (
              <div className="flex items-center justify-center py-8">
                <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
              </div>
            ) : filteredConversations.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground text-sm">
                {searchQuery ? t('chat.noConversationsSearch') : t('chat.noConversations')}
              </div>
            ) : (
              filteredConversations.map((conv) => (
                <ConversationItem
                  key={conv.conversation_id}
                  conversation={conv}
                  isActive={
                    conv.counterpart.id.toString() === partnerId &&
                    (conv.counterpart.role || 'partner') === counterpartRole
                  }
                  onClick={() =>
                    navigate(`/chat/${conv.counterpart.id}?role=${conv.counterpart.role || 'partner'}`)
                  }
                />
              ))
            )}
          </div>
        </ScrollArea>
      </Card>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {partnerId ? (
          <>
            {/* Chat Header */}
            <div className="border-b p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage
                      src={`https://api.dicebear.com/7.x/initials/svg?seed=${activeCounterpartName}`}
                    />
                    <AvatarFallback>
                      {activeCounterpartName.slice(0, 2).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">{activeCounterpartName}</h3>
                    {activeCounterpart?.phone_number && (
                      <p className="text-xs text-muted-foreground">
                        {activeCounterpart.phone_number}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Messages Area */}
            <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
              <div className="space-y-4 max-w-4xl mx-auto">
                {isLoadingMessages ? (
                  <div className="flex items-center justify-center py-8">
                    <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
                  </div>
                ) : messages.length === 0 ? (
                  <div className="text-center py-8 text-muted-foreground text-sm">
                    {t('chat.noMessages')}
                  </div>
                ) : (
                  <>
                    {messages.map((msg, index) => {
                      const showDateSeparator =
                        index === 0 ||
                        new Date(msg.created_at).toDateString() !==
                          new Date(messages[index - 1].created_at).toDateString();

                      return (
                        <div key={msg.id}>
                          {showDateSeparator && (
                            <DateSeparator date={msg.created_at} />
                          )}
                          <MessageBubble message={msg} />
                        </div>
                      );
                    })}
                  </>
                )}
                <div ref={messageEndRef} />
              </div>
            </ScrollArea>

            {/* Message Input */}
            <div className="border-t p-4">
              <div className="flex items-end gap-2 max-w-4xl mx-auto">
                <div className="flex-1">
                  <Input
                    placeholder={t('chat.inputPlaceholder')}
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        handleSendMessage();
                      }
                    }}
                    className="pr-10"
                    disabled={isSending}
                  />
                </div>

                <Button
                  onClick={handleSendMessage}
                  disabled={!messageInput.trim() || isSending}
                  className="flex-shrink-0"
                >
                  {isSending ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Send className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-muted-foreground">
            <div className="text-center">
              <div className="mb-4">
                <svg
                  className="mx-auto h-24 w-24 text-muted-foreground/30"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">{t('chat.selectTitle')}</h3>
              <p className="text-sm">{t('chat.selectSubtitle')}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
