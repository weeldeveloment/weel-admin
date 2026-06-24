import { useEffect, useMemo, useRef, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { AlertCircle, Loader2 } from "lucide-react";
import { api } from "@/lib/api";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Skeleton } from "@/components/ui/skeleton";

type CalendarStatus = "available" | "booked" | "blocked" | "held";
type CalendarAction = "block" | "hold" | "unblock" | "unhold";

type CalendarEntry = {
  date: string;
  status: string;
};

type CalendarResponse =
  | CalendarEntry[]
  | {
      property_id?: string;
      range?: {
        from_date?: string;
        to_date?: string;
      };
      calendar?: CalendarEntry[];
    };

type CalendarMap = Record<string, CalendarStatus>;

type DayCell = {
  date: Date;
  iso: string;
  inMonth: boolean;
  isPast: boolean;
  status: CalendarStatus;
};

const STATUS_STYLES: Record<CalendarStatus, string> = {
  available:
    "border-slate-200 bg-white text-slate-900 hover:border-slate-300 hover:bg-slate-50",
  booked:
    "border-emerald-200 bg-emerald-50 text-emerald-700 underline decoration-emerald-400",
  blocked:
    "border-rose-200 bg-rose-50 text-rose-700 underline decoration-rose-400",
  held: "border-amber-200 bg-amber-50 text-amber-700 underline decoration-amber-400",
};

const DAY_NAMES = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const LOG_PREFIX = "[CottageCalendarSection]";
let globalMountCount = 0;

function logInfo(event: string, payload: Record<string, unknown>) {
  console.info(`${LOG_PREFIX} ${event}\n${JSON.stringify(payload, null, 2)}`);
}

function logError(event: string, payload: Record<string, unknown>) {
  console.error(`${LOG_PREFIX} ${event}\n${JSON.stringify(payload, null, 2)}`);
}

function pad(value: number) {
  return String(value).padStart(2, "0");
}

function toIsoDate(date: Date) {
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

function startOfDay(date: Date) {
  const next = new Date(date);
  next.setHours(0, 0, 0, 0);
  return next;
}

function addDays(date: Date, amount: number) {
  const next = new Date(date);
  next.setDate(next.getDate() + amount);
  return next;
}

function addMonths(date: Date, amount: number) {
  return new Date(date.getFullYear(), date.getMonth() + amount, 1);
}

function endOfMonth(date: Date) {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0);
}

function getMonthTitle(date: Date, locale: string) {
  return date.toLocaleDateString(locale, {
    month: "long",
    year: "numeric",
  });
}

function getCalendarDays(monthDate: Date, calendarMap: CalendarMap) {
  const monthStart = new Date(monthDate.getFullYear(), monthDate.getMonth(), 1);
  const startWeekday = (monthStart.getDay() + 6) % 7;
  const gridStart = addDays(monthStart, -startWeekday);
  const totalDays = 42;
  const today = startOfDay(new Date());

  return Array.from({ length: totalDays }, (_, index): DayCell => {
    const date = addDays(gridStart, index);
    const iso = toIsoDate(date);
    return {
      date,
      iso,
      inMonth: date.getMonth() === monthStart.getMonth(),
      isPast: startOfDay(date) < today,
      status: calendarMap[iso] ?? "available",
    };
  });
}

function normalizeCalendarPayload(payload: CalendarResponse): CalendarMap {
  const entries = Array.isArray(payload) ? payload : payload.calendar ?? [];
  return entries.reduce<CalendarMap>((acc, item) => {
    const status =
      item.status === "booked" ||
      item.status === "blocked" ||
      item.status === "held"
        ? item.status
        : "available";
    acc[item.date] = status;
    return acc;
  }, {});
}

function getMutationAction(nextStatus: CalendarStatus, currentStatus: CalendarStatus): CalendarAction | null {
  if (nextStatus === "booked" || nextStatus === currentStatus) return null;
  if (nextStatus === "blocked") return "block";
  if (nextStatus === "held") return "hold";
  if (nextStatus === "available" && currentStatus === "blocked") return "unblock";
  if (nextStatus === "available" && currentStatus === "held") return "unhold";
  return null;
}

async function fetchPropertyCalendar(propertyId: string, fromDate: string, toDate: string) {
  const response = await api.get<CalendarResponse>(`/booking/properties/${propertyId}/calendar/`, {
    params: {
      from_date: fromDate,
      to_date: toDate,
    },
  });
  return normalizeCalendarPayload(response.data);
}

async function mutatePropertyCalendar(
  propertyId: string,
  action: CalendarAction,
  date: string,
) {
  await api.post(`/booking/properties/${propertyId}/calendar/${action}/`, {
    from_date: date,
    to_date: date,
  });
}

export default function CottageCalendarSection({
  propertyId,
  isVerified,
}: {
  propertyId: string;
  isVerified: boolean;
}) {
  const { t, i18n } = useTranslation();
  const queryClient = useQueryClient();
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const instanceIdRef = useRef(++globalMountCount);
  const fetchCountRef = useRef(0);

  const today = useMemo(() => startOfDay(new Date()), []);
  const rangeStart = useMemo(() => today, [today]);
  const firstVisibleMonth = useMemo(
    () => new Date(today.getFullYear(), today.getMonth(), 1),
    [today],
  );
  const rangeEnd = useMemo(() => endOfMonth(addMonths(today, 1)), [today]);
  const fromDate = useMemo(() => toIsoDate(rangeStart), [rangeStart]);
  const toDate = useMemo(() => toIsoDate(rangeEnd), [rangeEnd]);

  useEffect(() => {
    logInfo("mount", {
      instanceId: instanceIdRef.current,
      globalMountCount,
      propertyId,
      isVerified,
    });

    return () => {
      logInfo("unmount", {
        instanceId: instanceIdRef.current,
        propertyId,
      });
    };
  }, [propertyId, isVerified]);

  useEffect(() => {
    logInfo("query-range", {
      instanceId: instanceIdRef.current,
      propertyId,
      fromDate,
      toDate,
    });
  }, [fromDate, propertyId, toDate]);

  const calendarQuery = useQuery({
    queryKey: ["cottageCalendar", propertyId, fromDate, toDate],
    queryFn: async () => {
      fetchCountRef.current += 1;
      logInfo("fetch-start", {
        instanceId: instanceIdRef.current,
        fetchCount: fetchCountRef.current,
        propertyId,
        fromDate,
        toDate,
      });
      try {
        const result = await fetchPropertyCalendar(propertyId, fromDate, toDate);
        logInfo("fetch-success", {
          instanceId: instanceIdRef.current,
          fetchCount: fetchCountRef.current,
          propertyId,
          loadedDates: Object.keys(result).length,
        });
        return result;
      } catch (error) {
        logError("fetch-error", {
          instanceId: instanceIdRef.current,
          fetchCount: fetchCountRef.current,
          propertyId,
          fromDate,
          toDate,
          error: error instanceof Error ? error.message : String(error),
        });
        throw error;
      }
    },
    enabled: Boolean(propertyId),
  });

  const mutation = useMutation({
    mutationFn: async ({
      action,
      date,
    }: {
      action: CalendarAction;
      date: string;
    }) => {
      logInfo("mutation-start", {
        instanceId: instanceIdRef.current,
        propertyId,
        action,
        date,
      });
      return mutatePropertyCalendar(propertyId, action, date);
    },
    onSuccess: async () => {
      logInfo("mutation-success", {
        instanceId: instanceIdRef.current,
        propertyId,
      });
      await queryClient.invalidateQueries({
        queryKey: ["cottageCalendar", propertyId, fromDate, toDate],
      });
      setSelectedDate(null);
    },
    onError: (error) => {
      logError("mutation-error", {
        instanceId: instanceIdRef.current,
        propertyId,
        error: error instanceof Error ? error.message : String(error),
      });
    },
  });

  const months = useMemo(
    () => Array.from({ length: 2 }, (_, index) => addMonths(firstVisibleMonth, index)),
    [firstVisibleMonth],
  );

  const selectedStatus = selectedDate
    ? calendarQuery.data?.[selectedDate] ?? "available"
    : "available";

  const selectedActions = useMemo(() => {
    if (!selectedDate) return [];
    const actions: Array<{ status: CalendarStatus; label: string }> = [];
    if (selectedStatus === "booked") return actions;

    if (selectedStatus !== "available") {
      actions.push({
        status: "available",
        label: t("properties.calendar.actions.makeAvailable"),
      });
    }
    if (selectedStatus !== "blocked") {
      actions.push({
        status: "blocked",
        label: t("properties.calendar.actions.block"),
      });
    }
    if (selectedStatus !== "held") {
      actions.push({
        status: "held",
        label: t("properties.calendar.actions.hold"),
      });
    }

    return actions;
  }, [selectedDate, selectedStatus, t]);

  const handleStatusChange = (nextStatus: CalendarStatus) => {
    if (!selectedDate) return;
    const action = getMutationAction(nextStatus, selectedStatus);
    logInfo("status-click", {
      instanceId: instanceIdRef.current,
      propertyId,
      selectedDate,
      selectedStatus,
      nextStatus,
      action,
    });
    if (!action) {
      setSelectedDate(null);
      return;
    }
    mutation.mutate({ action, date: selectedDate });
  };

  useEffect(() => {
    logInfo("selection-change", {
      instanceId: instanceIdRef.current,
      propertyId,
      selectedDate,
    });
  }, [propertyId, selectedDate]);

  return (
    <Card>
      <CardHeader className="space-y-3">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <CardTitle className="text-base">
            {t("properties.calendar.title")}
          </CardTitle>
          <Badge variant="outline">
            {t("properties.calendar.range", { from: fromDate, to: toDate })}
          </Badge>
        </div>
        <div className="flex flex-wrap gap-2 text-xs">
          <LegendChip label={t("properties.calendar.legend.available")} status="available" />
          <LegendChip label={t("properties.calendar.legend.booked")} status="booked" />
          <LegendChip label={t("properties.calendar.legend.held")} status="held" />
          <LegendChip label={t("properties.calendar.legend.blocked")} status="blocked" />
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {!isVerified ? (
          <div className="rounded-md border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
            {t("properties.calendar.unverified")}
          </div>
        ) : null}

        {calendarQuery.isLoading ? (
          <div className="grid gap-4 xl:grid-cols-2">
            {months.map((month) => (
              <Skeleton key={month.toISOString()} className="h-[360px] w-full" />
            ))}
          </div>
        ) : null}

        {calendarQuery.isError ? (
          <div className="rounded-md border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
            <div className="flex items-center gap-2">
              <AlertCircle className="h-4 w-4" />
              <span>{t("properties.calendar.loadFailed")}</span>
            </div>
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="mt-3"
              onClick={() => calendarQuery.refetch()}
            >
              {t("common.retry")}
            </Button>
          </div>
        ) : null}

        {!calendarQuery.isLoading && !calendarQuery.isError ? (
          <div className="grid gap-4 xl:grid-cols-2">
            {months.map((month) => (
              <div key={month.toISOString()} className="rounded-lg border bg-card">
                <div className="border-b px-4 py-3">
                  <h3 className="text-sm font-semibold capitalize">
                    {getMonthTitle(month, i18n.language)}
                  </h3>
                </div>
                <div className="grid grid-cols-7 gap-2 p-4">
                  {DAY_NAMES.map((day) => (
                    <div
                      key={`${month.toISOString()}-${day}`}
                      className="text-center text-xs font-medium text-muted-foreground"
                    >
                      {day}
                    </div>
                  ))}
                  {getCalendarDays(month, calendarQuery.data ?? {}).map((day) => {
                    const isDisabled = !day.inMonth || day.isPast || !isVerified;
                    const isBooked = day.status === "booked";
                    const isSelected = selectedDate === day.iso;
                    const dayButtonClassName = cn(
                      "min-h-10 w-full rounded-md border text-sm font-medium transition-colors",
                      STATUS_STYLES[day.status],
                      !day.inMonth && "border-dashed border-slate-100 bg-slate-50 text-slate-300",
                      (day.isPast || !isVerified) &&
                        "cursor-not-allowed opacity-60 hover:border-inherit hover:bg-inherit",
                      isBooked && "opacity-80",
                      isSelected && "ring-2 ring-slate-900 ring-offset-2",
                    );

                    if (isDisabled) {
                      return (
                        <button
                          key={day.iso}
                          type="button"
                          disabled
                          className={dayButtonClassName}
                        >
                          {day.date.getDate()}
                        </button>
                      );
                    }

                    return (
                      <Popover
                        key={day.iso}
                        open={isSelected}
                        onOpenChange={(open) => setSelectedDate(open ? day.iso : null)}
                      >
                        <PopoverTrigger asChild>
                          <button
                            type="button"
                            className={dayButtonClassName}
                          >
                            {day.date.getDate()}
                          </button>
                        </PopoverTrigger>
                        <PopoverContent className="w-64" align="center">
                          <div className="space-y-3">
                            <div>
                              <p className="text-sm font-semibold">{day.iso}</p>
                              <p className="text-xs text-muted-foreground">
                                {t(`properties.calendar.legend.${day.status}`)}
                              </p>
                            </div>
                            <div className="space-y-2">
                              {selectedActions.length > 0 ? (
                                selectedActions.map((actionItem) => (
                                  <Button
                                    key={actionItem.status}
                                    type="button"
                                    variant="outline"
                                    className="w-full justify-between"
                                    disabled={mutation.isPending}
                                    onClick={() => handleStatusChange(actionItem.status)}
                                  >
                                    <span>{actionItem.label}</span>
                                    {mutation.isPending && selectedDate === day.iso ? (
                                      <Loader2 className="h-4 w-4 animate-spin" />
                                    ) : (
                                      <span
                                        className={cn(
                                          "h-2.5 w-2.5 rounded-full",
                                          actionItem.status === "available" && "bg-slate-900",
                                          actionItem.status === "blocked" && "bg-rose-500",
                                          actionItem.status === "held" && "bg-amber-400",
                                        )}
                                      />
                                    )}
                                  </Button>
                                ))
                              ) : (
                                <p className="text-xs text-muted-foreground">
                                  {isBooked
                                    ? t("properties.calendar.bookedReadonly")
                                    : t("properties.calendar.noActions")}
                                </p>
                              )}
                            </div>
                            {mutation.isError ? (
                              <p className="text-xs text-rose-600">
                                {t("properties.calendar.updateFailed")}
                              </p>
                            ) : null}
                          </div>
                        </PopoverContent>
                      </Popover>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        ) : null}
      </CardContent>
    </Card>
  );
}

function LegendChip({
  label,
  status,
}: {
  label: string;
  status: CalendarStatus;
}) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1">
      <span
        className={cn(
          "h-2.5 w-2.5 rounded-full",
          status === "available" && "bg-slate-900",
          status === "booked" && "bg-emerald-500",
          status === "held" && "bg-amber-400",
          status === "blocked" && "bg-rose-500",
        )}
      />
      <span>{label}</span>
    </div>
  );
}
