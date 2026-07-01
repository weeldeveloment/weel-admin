import { useReducer, useMemo } from "react"
import { addDays, subDays, format } from "date-fns"
import type { CalendarUIState, CalendarAction, CalendarView, PMSBooking, UndoAction } from "@/types/pms"
import { CALENDAR_VIEW_DAYS } from "@/types/pms"

const today = new Date()

function computeDateRange(currentDate: Date, view: CalendarView): { dateFrom: string; dateTo: string } {
  const days = CALENDAR_VIEW_DAYS[view]
  const from = format(currentDate, "yyyy-MM-dd")
  const to = format(addDays(currentDate, days - 1), "yyyy-MM-dd")
  return { dateFrom: from, dateTo: to }
}

const initialDateRange = computeDateRange(today, "week")

const initialState: CalendarUIState = {
  selectedPropertyId: null,
  view: "week",
  currentDate: today,
  dateFrom: initialDateRange.dateFrom,
  dateTo: initialDateRange.dateTo,
  selectedBooking: null,
  filterStatus: "",
  filterRoomType: "",
  filterFloor: "",
  searchQuery: "",
  undoStack: [],
  quickBookingOpen: false,
  quickBookingInitial: null,
}

function calendarReducer(state: CalendarUIState, action: CalendarAction): CalendarUIState {
  switch (action.type) {
    case "SET_PROPERTY":
      return { ...state, selectedPropertyId: action.payload }
    case "SET_VIEW": {
      const range = computeDateRange(state.currentDate, action.payload)
      return { ...state, view: action.payload, ...range }
    }
    case "SET_DATE": {
      const range = computeDateRange(action.payload, state.view)
      return { ...state, currentDate: action.payload, ...range }
    }
    case "NAVIGATE": {
      const days = CALENDAR_VIEW_DAYS[state.view]
      let newDate: Date
      if (action.payload === "prev") newDate = subDays(state.currentDate, days)
      else if (action.payload === "next") newDate = addDays(state.currentDate, days)
      else newDate = today
      const range = computeDateRange(newDate, state.view)
      return { ...state, currentDate: newDate, ...range }
    }
    case "SELECT_BOOKING":
      return { ...state, selectedBooking: action.payload }
    case "SET_FILTER_STATUS":
      return { ...state, filterStatus: action.payload }
    case "SET_FILTER_ROOM_TYPE":
      return { ...state, filterRoomType: action.payload }
    case "SET_FILTER_FLOOR":
      return { ...state, filterFloor: action.payload }
    case "SET_SEARCH_QUERY":
      return { ...state, searchQuery: action.payload }
    case "PUSH_UNDO":
      return { ...state, undoStack: [...state.undoStack, action.payload] }
    case "POP_UNDO":
      return { ...state, undoStack: state.undoStack.slice(0, -1) }
    case "OPEN_QUICK_BOOKING":
      return { ...state, quickBookingOpen: true, quickBookingInitial: action.payload }
    case "CLOSE_QUICK_BOOKING":
      return { ...state, quickBookingOpen: false, quickBookingInitial: null }
    default:
      return state
  }
}

export function useCalendarReducer() {
  const [state, dispatch] = useReducer(calendarReducer, initialState)

  const actions = useMemo(() => ({
    setProperty: (id: string) => dispatch({ type: "SET_PROPERTY", payload: id }),
    setView: (view: CalendarView) => dispatch({ type: "SET_VIEW", payload: view }),
    setDate: (date: Date) => dispatch({ type: "SET_DATE", payload: date }),
    navigate: (dir: "prev" | "next" | "today") => dispatch({ type: "NAVIGATE", payload: dir }),
    selectBooking: (booking: PMSBooking | null) => dispatch({ type: "SELECT_BOOKING", payload: booking }),
    setFilterStatus: (v: string) => dispatch({ type: "SET_FILTER_STATUS", payload: v }),
    setFilterRoomType: (v: string) => dispatch({ type: "SET_FILTER_ROOM_TYPE", payload: v }),
    setFilterFloor: (v: string) => dispatch({ type: "SET_FILTER_FLOOR", payload: v }),
    setSearchQuery: (v: string) => dispatch({ type: "SET_SEARCH_QUERY", payload: v }),
    pushUndo: (action: UndoAction) => dispatch({ type: "PUSH_UNDO", payload: action }),
    popUndo: () => dispatch({ type: "POP_UNDO" }),
    openQuickBooking: (initial?: CalendarUIState["quickBookingInitial"]) => dispatch({ type: "OPEN_QUICK_BOOKING", payload: initial ?? null }),
    closeQuickBooking: () => dispatch({ type: "CLOSE_QUICK_BOOKING" }),
  }), [])

  return [state, actions] as const
}
