import { useEffect, useRef, useState } from 'react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useTranslation } from 'react-i18next'
import { Loader2, Search, Send } from 'lucide-react'

import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { ScrollArea } from '@/components/ui/scroll-area'
import ErrorAlert from '@/components/ErrorAlert'
import {
  fetchB2BSupportThread,
  fetchB2BSupportThreads,
  replyToB2BSupportThread,
} from '@/lib/api'
import { cn } from '@/lib/utils'
import type { B2BSupportThread } from '@/types'

/**
 * The other end of the mobile app's "Yordam markazi".
 *
 * A queue on the left, one conversation on the right. There is no thread
 * entity behind it — a thread is every line one employee has written, derived
 * per employee — so the selection is an employee id and nothing else.
 */
export default function B2BSupportPage() {
  const { t } = useTranslation()
  const queryClient = useQueryClient()

  const [search, setSearch] = useState('')
  const [debouncedSearch, setDebouncedSearch] = useState('')
  const [selectedId, setSelectedId] = useState<number | null>(null)
  const [reply, setReply] = useState('')

  // The inbox refetches on every keystroke otherwise, and the search runs a
  // three-column ILIKE across every message in the system.
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedSearch(search), 300)
    return () => clearTimeout(timer)
  }, [search])

  const threadsQuery = useQuery({
    queryKey: ['b2bSupportThreads', debouncedSearch],
    queryFn: () => fetchB2BSupportThreads(debouncedSearch),
    // Somebody writing in while this screen is open should appear without a
    // manual refresh; a support desk nobody polls is a support desk that
    // misses people.
    refetchInterval: 30_000,
  })

  const messagesQuery = useQuery({
    queryKey: ['b2bSupportThread', selectedId],
    queryFn: () => fetchB2BSupportThread(selectedId as number),
    enabled: selectedId !== null,
    refetchInterval: selectedId === null ? false : 15_000,
  })

  const replyMutation = useMutation({
    mutationFn: (text: string) =>
      replyToB2BSupportThread(selectedId as number, text),
    onSuccess: () => {
      setReply('')
      void queryClient.invalidateQueries({ queryKey: ['b2bSupportThread', selectedId] })
      // Answering clears the employee's unread count, which the list shows.
      void queryClient.invalidateQueries({ queryKey: ['b2bSupportThreads'] })
    },
  })

  const threads = threadsQuery.data ?? []
  const selected = threads.find((thread) => thread.employee_id === selectedId) ?? null

  const bottomRef = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messagesQuery.data])

  // Opening a thread marks its lines answered server-side, so the badge in the
  // list is stale the moment one is selected.
  useEffect(() => {
    if (selectedId === null) return
    void queryClient.invalidateQueries({ queryKey: ['b2bSupportThreads'] })
  }, [selectedId, queryClient])

  const openThread = (thread: B2BSupportThread) => {
    setSelectedId(thread.employee_id)
    setReply('')
  }

  const send = () => {
    const text = reply.trim()
    if (!text || selectedId === null || replyMutation.isPending) return
    replyMutation.mutate(text)
  }

  return (
    <div className="flex h-full flex-col gap-4 p-4">
      <div>
        <h1 className="text-2xl font-bold">{t('b2bSupport.title')}</h1>
        <p className="text-sm text-muted-foreground">{t('b2bSupport.subtitle')}</p>
      </div>

      <div className="grid min-h-0 flex-1 grid-cols-1 gap-4 md:grid-cols-[320px_1fr]">
        <Card className="flex min-h-0 flex-col overflow-hidden">
          <div className="relative border-b p-3">
            <Search className="absolute left-6 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder={t('b2bSupport.searchPlaceholder')}
              className="pl-9"
            />
          </div>

          <ScrollArea className="min-h-0 flex-1">
            {threadsQuery.isLoading ? (
              <div className="flex justify-center p-6">
                <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
              </div>
            ) : threads.length === 0 ? (
              <p className="p-6 text-center text-sm text-muted-foreground">
                {t('b2bSupport.empty')}
              </p>
            ) : (
              threads.map((thread) => (
                <button
                  key={thread.employee_id}
                  type="button"
                  onClick={() => openThread(thread)}
                  className={cn(
                    'flex w-full items-start gap-3 border-b p-3 text-left transition-colors hover:bg-accent',
                    thread.employee_id === selectedId && 'bg-accent',
                  )}
                >
                  <Avatar className="h-9 w-9 shrink-0">
                    <AvatarFallback>{initials(thread.full_name)}</AvatarFallback>
                  </Avatar>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="truncate text-sm font-medium">{thread.full_name}</span>
                      {thread.unread_count > 0 && (
                        <Badge variant="destructive" className="shrink-0">
                          {thread.unread_count}
                        </Badge>
                      )}
                    </div>
                    <p className="truncate text-xs text-muted-foreground">
                      {thread.company_name}
                    </p>
                    <p className="truncate text-xs text-muted-foreground">
                      {thread.last_message}
                    </p>
                  </div>
                  <span className="shrink-0 text-[11px] text-muted-foreground">
                    {formatWhen(thread.last_message_at)}
                  </span>
                </button>
              ))
            )}
          </ScrollArea>
        </Card>

        <Card className="flex min-h-0 flex-col overflow-hidden">
          {selected === null ? (
            <p className="m-auto text-sm text-muted-foreground">
              {t('b2bSupport.noneSelected')}
            </p>
          ) : (
            <>
              <div className="border-b p-3">
                <p className="font-medium">{selected.full_name}</p>
                <p className="text-xs text-muted-foreground">
                  {[selected.company_name, selected.phone].filter(Boolean).join(' · ')}
                </p>
              </div>

              <ScrollArea className="min-h-0 flex-1 p-4">
                {messagesQuery.isLoading ? (
                  <div className="flex justify-center p-6">
                    <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
                  </div>
                ) : messagesQuery.isError ? (
                  <ErrorAlert
                    message={t('b2bSupport.loadFailed')}
                    onRetry={() => void messagesQuery.refetch()}
                  />
                ) : (messagesQuery.data ?? []).length === 0 ? (
                  <p className="p-6 text-center text-sm text-muted-foreground">
                    {t('b2bSupport.threadEmpty')}
                  </p>
                ) : (
                  <div className="flex flex-col gap-2">
                    {(messagesQuery.data ?? []).map((message) => (
                      <div
                        key={message.id}
                        className={cn(
                          'max-w-[78%] rounded-2xl px-3 py-2 text-sm',
                          message.is_staff
                            ? 'self-end bg-primary text-primary-foreground'
                            : 'self-start bg-muted',
                        )}
                      >
                        <p className="whitespace-pre-wrap break-words">{message.text}</p>
                        <p
                          className={cn(
                            'mt-1 text-right text-[11px]',
                            message.is_staff
                              ? 'text-primary-foreground/70'
                              : 'text-muted-foreground',
                          )}
                        >
                          {formatTime(message.created_at)}
                        </p>
                      </div>
                    ))}
                    <div ref={bottomRef} />
                  </div>
                )}
              </ScrollArea>

              <div className="flex items-center gap-2 border-t p-3">
                <Input
                  value={reply}
                  onChange={(event) => setReply(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' && !event.shiftKey) {
                      event.preventDefault()
                      send()
                    }
                  }}
                  placeholder={t('b2bSupport.replyPlaceholder')}
                />
                <Button onClick={send} disabled={!reply.trim() || replyMutation.isPending}>
                  {replyMutation.isPending ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Send className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </>
          )}
        </Card>
      </div>
    </div>
  )
}

function initials(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean)
  if (parts.length === 0) return '?'
  if (parts.length === 1) return parts[0].slice(0, 1).toUpperCase()
  return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase()
}

function formatTime(value: string) {
  const at = new Date(value)
  return Number.isNaN(at.getTime())
    ? ''
    : at.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
}

/** Today's messages get a clock; anything older gets a date. */
function formatWhen(value?: string | null) {
  if (!value) return ''
  const at = new Date(value)
  if (Number.isNaN(at.getTime())) return ''
  const today = new Date()
  const sameDay =
    at.getDate() === today.getDate() &&
    at.getMonth() === today.getMonth() &&
    at.getFullYear() === today.getFullYear()
  return sameDay
    ? at.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    : at.toLocaleDateString([], { day: '2-digit', month: '2-digit' })
}
