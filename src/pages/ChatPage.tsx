import { useState, useEffect, useRef, useCallback, memo } from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import {
  Send,
  Search,
  Check,
  CheckCheck,
  Loader2,
  ArrowLeft
} from 'lucide-react';
import { api } from '@/lib/api';
import { cn } from '@/lib/utils';
import { useChatWebSocket } from '@/hooks/useChatWebSocket';
import { useTranslation } from 'react-i18next';
import { Actor, ChatMessage, ChatConversation, ChatConversationApi } from '@/types';

function getCounterpartIdFromMessage(message: ChatMessage, counterpartRole: 'partner' | 'client') {
  const senderType = message.sender_type;
  const receiverType = message.receiver_type;

  if (senderType === counterpartRole) {
    return Number(message.sender_id);
  }

  if (receiverType === counterpartRole) {
    return Number(message.receiver_id);
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
    conversation: ChatConversation;
    isActive: boolean;
    onClick: () => void;
  }) => {
    const counterpart = conversation.counterpart;
    if (!counterpart) return null;
    const role = counterpart.role;
    const fullName = counterpart.full_name;
    const fallbackInitials = fullName.slice(0, 2).toUpperCase();
    return (
      <button
        onClick={onClick}
        className={`w-full min-w-0 rounded-xl p-3 text-left transition-all duration-200 hover:bg-accent/80 ${
          isActive ? 'bg-accent/50 border border-accent' : ''
        }`}
      >
        <div className="flex min-w-0 items-start gap-3">
          <div className="relative flex-shrink-0">
            <Avatar className="h-12 w-12">
              <AvatarFallback>
                {fallbackInitials}
              </AvatarFallback>
            </Avatar>
          </div>
          <div className="min-w-0 flex-1 overflow-hidden">
            <div className="flex items-center justify-between gap-2">
              <p className="min-w-0 flex-1 truncate font-semibold">{fullName}</p>
              {conversation.unread_count > 0 && (
                <Badge variant="default" className="h-5 min-w-[20px] px-1.5 text-xs">
                  {conversation.unread_count}
                </Badge>
              )}
            </div>
            <div className="flex items-center gap-2 mt-0.5">
              <Badge
                variant="secondary"
                className="text-xs h-5 px-1.5 capitalize"
              >
                {role}
              </Badge>
            </div>
            <p className="truncate text-sm mt-1 text-muted-foreground">
              {conversation.last_message?.content}
            </p>
            {conversation.counterpart.phone_number && (
              <p className="truncate text-xs text-muted-foreground mt-1">
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
  const senderRole = message.sender_type;
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
  const [chatError, setChatError] = useState<string | null>(null);
  const [mobileShowChat, setMobileShowChat] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const messageEndRef = useRef<HTMLDivElement>(null);
  const requestedRole = searchParams.get('role')?.toLowerCase() ?? 'partner';
  const counterpartRole: 'partner' | 'client' = requestedRole === 'client' ? 'client' : 'partner';
  const activePartnerId = partnerId ? Number(partnerId) : null;

  useEffect(() => {
    setMobileShowChat(!!partnerId);
  }, [partnerId]);
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
  const { connect, disconnect, sendMessage: sendMessageViaWs } = useChatWebSocket({
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
  } = useQuery({
    queryKey: ['conversations'],
    queryFn: async (): Promise<ChatConversation[]> => {
      const response = await api.get('/chat/conversations/');
      const items = response.data as ChatConversationApi[];
      return items.flatMap((conv) => {
        const counterpart = conv.counterpart ?? conv.partner
        if (!counterpart?.id || !counterpart.full_name || !counterpart.role) {
          return []
        }

        return [{
          conversation_id: conv.conversation_id ?? Number(`${counterpart.id}${counterpart.role === 'client' ? '1' : '0'}`),
          counterpart: counterpart as Actor,
          last_message: conv.last_message,
          unread_count: conv.unread_count ?? 0,
        }]
      });
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
    setChatError(null);
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

  const handleSendMessage = useCallback(() => {
    if (!messageInput.trim() || !partnerId || isSending) return;

    setIsSending(true);
    setChatError(null);
    const sent = sendMessageViaWs(parseInt(partnerId), counterpartRole, messageInput.trim());
    if (sent) {
      setMessageInput('');
      scrollToBottom();
    } else {
      setChatError(t('chat.sendFailed', 'Message was not sent. Reconnect and try again.'));
    }
    setIsSending(false);
  }, [messageInput, partnerId, isSending, counterpartRole, sendMessageViaWs, t]);

  const filteredConversations = conversations.filter((conv) =>
    conv.counterpart.full_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const selectedConversation = conversations.find(
    (conv) =>
      conv.counterpart.id.toString() === partnerId &&
      conv.counterpart.role === counterpartRole
  );
  const activeCounterpart = selectedConversation?.counterpart;
  const activeCounterpartName =
    activeCounterpart?.full_name;

  return (
    <div className="flex h-full min-h-0 bg-background">
      {/* Sidebar - Conversations List */}
      <Card className={cn(
        "flex h-full min-h-0 w-full flex-col rounded-none border-y-0 border-l-0 md:w-auto md:basis-[clamp(320px,30vw,420px)] md:min-w-[320px] md:max-w-[420px] md:shrink-0 md:border-r",
        mobileShowChat && partnerId ? "hidden md:flex" : "flex"
      )}>
        {/* Header */}
        <div className="border-b bg-background p-3 md:p-4">
          <h2 className="text-lg md:text-xl font-bold mb-3">{t('chat.title')}</h2>
          <div className="relative flex items-center w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground flex-shrink-0" />
            <Input
              placeholder={t('chat.searchPlaceholder')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 h-10 md:h-11 pl-10"
            />
          </div>
        </div>

        {/* Conversations List */}
        <ScrollArea className="min-h-0 flex-1">
          <div className="space-y-2 p-3 pr-5">
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
                    conv.counterpart.role === counterpartRole
                  }
                  onClick={() => {
                    navigate(`/chat/${conv.counterpart.id}?role=${conv.counterpart.role}`)
                    setMobileShowChat(true)
                  }}
                />
              ))
            )}
          </div>
        </ScrollArea>
      </Card>

      {/* Main Chat Area */}
      <div className={cn(
        "flex min-h-0 flex-1 flex-col",
        !partnerId || !mobileShowChat ? "hidden md:flex" : "flex"
      )}>
        {partnerId ? (
          <>
            {/* Chat Header */}
            <div className="border-b p-4">
              <div className="flex items-center justify-between">
                <div className="flex min-w-0 items-center gap-3">
                  {/* Mobile back button */}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="md:hidden"
                    onClick={() => {
                      navigate('/chat')
                      setMobileShowChat(false)
                    }}
                  >
                    <ArrowLeft className="h-5 w-5" />
                  </Button>
                  <Avatar className="h-10 w-10">
                    <AvatarFallback>
                      {(activeCounterpartName ?? '').slice(0, 2).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div className="min-w-0">
                    <div className="flex min-w-0 items-center gap-2">
                      <h3 className="truncate font-semibold">{activeCounterpartName ?? ''}</h3>
                      <Badge
                        variant="secondary"
                        className="text-xs h-5 px-1.5 capitalize"
                      >
                        {counterpartRole}
                      </Badge>
                    </div>
                    {activeCounterpart?.phone_number && (
                      <p className="truncate text-xs text-muted-foreground">
                        {activeCounterpart.phone_number}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Messages Area */}
            <ScrollArea className="min-h-0 flex-1 p-4" ref={scrollAreaRef}>
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
                  {chatError ? (
                    <p className="mt-1 text-xs text-destructive">{chatError}</p>
                  ) : null}
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
