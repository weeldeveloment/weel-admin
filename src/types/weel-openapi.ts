/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface B2BCompany {
  /** Id */
  id: number;
  /**
   * Name
   * @minLength 1
   * @maxLength 200
   */
  name: string;
  /** Legal name */
  legal_name?: string | null;
  /**
   * Inn
   * @maxLength 20
   */
  inn?: string | null;
  /** City */
  city?: string | null;
  /** District */
  district?: string | null;
  /** Legal address */
  legal_address?: string | null;
  /** Industry */
  industry?: string | null;
  /** Employee count */
  employee_count?: number | null;
  /** Is active */
  is_active: boolean;
  /**
   * Created at
   * @format date-time
   */
  created_at: string;
}

export interface B2BUser {
  /** Id */
  id: number;
  /** Company id */
  company_id: number;
  /**
   * Phone
   * @minLength 1
   * @maxLength 20
   */
  phone: string;
  /**
   * Email
   * @format email
   */
  email?: string | null;
  /** First name */
  first_name?: string | null;
  /** Last name */
  last_name?: string | null;
  /**
   * Role
   * @default "performer"
   */
  role?: "owner" | "performer";
  /** Is active */
  is_active: boolean;
  /**
   * Created at
   * @format date-time
   */
  created_at: string;
}

export interface PropertyHotelCard {
  /** Id */
  id?: number;
  /**
   * Guid
   * @minLength 1
   */
  guid?: string;
  /**
   * Title
   * @minLength 1
   */
  title?: string;
  /**
   * Description
   * @minLength 1
   */
  description?: string | null;
  /**
   * Description uz
   * @minLength 1
   */
  description_uz?: string | null;
  /**
   * Description ru
   * @minLength 1
   */
  description_ru?: string | null;
  /**
   * Description en
   * @minLength 1
   */
  description_en?: string | null;
  /**
   * Address
   * @minLength 1
   */
  address?: string | null;
  /** @default [] */
  img?: string[];
  /** Star rating */
  star_rating?: number | null;
  /**
   * Weel classification
   * @minLength 1
   */
  weel_classification?: string | null;
  /** @default [] */
  themes?: string[];
  /**
   * City
   * @minLength 1
   */
  city?: string | null;
  /**
   * Country
   * @minLength 1
   */
  country?: string | null;
  /** Latitude */
  latitude?: number | null;
  /** Longitude */
  longitude?: number | null;
  /**
   * Min price
   * @format decimal
   */
  min_price?: string | null;
  /** Currency */
  currency?: string | null;
  /** Timezone */
  timezone?: string | null;
  /**
   * Rating
   * @format decimal
   */
  rating?: string | null;
  /**
   * Review count
   * @default 0
   */
  review_count?: number;
  /**
   * Booking count
   * @default 0
   */
  booking_count?: number;
  /**
   * Available rooms
   * @default 0
   */
  available_rooms?: number;
  /** @default [] */
  amenities?: string[];
  /**
   * Legal info
   * @default {}
   */
  legal_info?: Record<string, string | null>;
  /**
   * Check in time
   * @minLength 1
   */
  check_in_time?: string | null;
  /**
   * Check out time
   * @minLength 1
   */
  check_out_time?: string | null;
  /**
   * Cancellation policy
   * @minLength 1
   */
  cancellation_policy?: string | null;
  /**
   * Policies
   * @default {}
   */
  policies?: Record<string, string | null>;
  /** Is favorite */
  is_favorite?: boolean;
  /** Is verified */
  is_verified?: boolean;
  /** Is active */
  is_active?: boolean;
  /** Is testing */
  is_testing?: boolean;
  /** Is archived */
  is_archived?: boolean;
  /** Is recommended */
  is_recommended?: boolean;
  /** Verification status */
  verification_status?: string | null;
  /** Tenant schema */
  tenant_schema?: string | null;
  /**
   * Organization
   * @default {}
   */
  organization?: Record<string, string | null>;
  /**
   * Owner user
   * @default {}
   */
  owner_user?: Record<string, string | null>;
  /**
   * Property detail
   * @default {}
   */
  property_detail?: Record<string, string | null>;
  /**
   * Created at
   * @format date-time
   */
  created_at?: string | null;
  /**
   * Updated at
   * @format date-time
   */
  updated_at?: string | null;
}

export interface Property {
  /** Id */
  id: number;
  /**
   * Guid
   * @minLength 1
   */
  guid: string;
  /** Organization id */
  organization_id: number;
  /**
   * Name
   * @minLength 1
   * @maxLength 200
   */
  name: string;
  /** Description uz */
  description_uz?: string | null;
  /** Description ru */
  description_ru?: string | null;
  /** Description en */
  description_en?: string | null;
  /** Address */
  address?: string | null;
  /** Full address */
  full_address?: string | null;
  /** City */
  city?: string | null;
  /**
   * Country
   * @minLength 1
   * @default "UZ"
   */
  country?: string;
  /**
   * Latitude
   * @format decimal
   */
  latitude?: string | null;
  /**
   * Longitude
   * @format decimal
   */
  longitude?: string | null;
  /**
   * Star rating
   * @min 0
   * @max 5
   */
  star_rating?: number | null;
  /** Weel classification */
  weel_classification?:
    | "standard"
    | "essential"
    | "comfort"
    | "comfort_plus"
    | "business"
    | "premium"
    | "signature"
    | null;
  /** @default [] */
  themes: (
    | "beach"
    | "ski"
    | "city"
    | "countryside"
    | "lakefront"
    | "mountain"
    | "boutique"
    | "business"
    | "historic"
    | "nature"
    | "spa"
    | "family"
  )[];
  /** @default [] */
  amenities: string[];
  /**
   * Legal info
   * @default {}
   */
  legal_info: string;
  /** Check in time */
  check_in_time?: string | null;
  /** Check out time */
  check_out_time?: string | null;
  /** Cancellation policy */
  cancellation_policy?: string | null;
  /**
   * Quiet hours
   * @default true
   */
  quiet_hours?: boolean;
  /**
   * Alcohol allowed
   * @default true
   */
  alcohol_allowed?: boolean;
  /**
   * Pets allowed
   * @default false
   */
  pets_allowed?: boolean;
  /**
   * Timezone
   * @minLength 1
   * @default "Asia/Tashkent"
   */
  timezone?: string;
  /** @default [] */
  photos: string[];
  /** Is active */
  is_active: boolean;
  /**
   * Created at
   * @format date-time
   */
  created_at: string;
  /**
   * Updated at
   * @format date-time
   */
  updated_at: string;
}

export interface Change {
  /** Value */
  value: number;
  /** Change */
  change: number;
  /** Change percent */
  change_percent: number;
}

export interface ChangeWithCurrency {
  /** Value */
  value: number;
  /** Change */
  change: number;
  /** Change percent */
  change_percent: number;
  /**
   * Currency
   * @minLength 1
   */
  currency: string;
}

export interface KPIResponse {
  check_ins: Change;
  revenue: ChangeWithCurrency;
  bookings: Change;
  occupancy: Change;
  /** Current guests */
  current_guests: string;
}

export interface ChartPoint {
  /**
   * Date
   * @minLength 1
   */
  date: string;
  /** Value */
  value: number;
  /** Previous value */
  previous_value?: number | null;
}

export interface ChartResponse {
  points: ChartPoint[];
  /**
   * Metric
   * @minLength 1
   */
  metric: string;
}

export interface RoomAnalytics {
  /** Room id */
  room_id: number;
  /**
   * Room number
   * @minLength 1
   */
  room_number: string;
  /**
   * Category
   * @minLength 1
   */
  category: string;
  occupancy: Change;
  revenue: ChangeWithCurrency;
  adr: ChangeWithCurrency;
  revpar: ChangeWithCurrency;
}

export interface PeriodResponse {
  /**
   * Type
   * @minLength 1
   */
  type: string;
  /**
   * Date from
   * @minLength 1
   */
  date_from: string;
  /**
   * Date to
   * @minLength 1
   */
  date_to: string;
}

export interface AnalyticsResponse {
  kpi: KPIResponse;
  chart: ChartResponse;
  rooms: RoomAnalytics[];
  period: PeriodResponse;
}

export interface Booking {
  /** Id */
  id: number;
  /** Property id */
  property_id: number;
  /** Room id */
  room_id: number;
  /** Guest id */
  guest_id?: number | null;
  /**
   * Booking number
   * @minLength 1
   */
  booking_number: string;
  /**
   * Check in
   * @format date
   */
  check_in: string;
  /**
   * Check out
   * @format date
   */
  check_out: string;
  /**
   * Status
   * @minLength 1
   */
  status: string;
  /**
   * Source
   * @default "direct"
   */
  source?: "direct" | "ota" | "b2b" | "walk_in";
  /**
   * Meal plan
   * @default "RO"
   */
  meal_plan?: "RO" | "BB" | "HB" | "FB" | "AI" | "UAI";
  /**
   * Adult count
   * @min 1
   * @default 1
   */
  adult_count?: number;
  /**
   * Child count
   * @min 0
   * @default 0
   */
  child_count?: number;
  /**
   * Rate
   * @format decimal
   */
  rate?: string | null;
  /**
   * Currency
   * @minLength 1
   * @maxLength 3
   * @default "USD"
   */
  currency?: string;
  /**
   * Payment status
   * @default "pending"
   */
  payment_status?: "pending" | "paid" | "partial" | "refunded";
  /**
   * Total cost
   * @format decimal
   */
  total_cost?: string | null;
  /**
   * Hold amount
   * @format decimal
   */
  hold_amount?: string | null;
  /**
   * Confirmed at
   * @format date-time
   */
  confirmed_at?: string | null;
  /**
   * Confirmation deadline
   * @format date-time
   */
  confirmation_deadline?: string | null;
  /** B2b company id */
  b2b_company_id?: number | null;
  /** Voucher number */
  voucher_number?: string | null;
  /** Notes */
  notes?: string | null;
  /**
   * Room number
   * @minLength 1
   */
  room_number?: string | null;
  /**
   * Guest first name
   * @minLength 1
   */
  guest_first_name?: string | null;
  /**
   * Guest last name
   * @minLength 1
   */
  guest_last_name?: string | null;
  /**
   * External provider
   * @minLength 1
   */
  external_provider?: string | null;
  /**
   * External reservation id
   * @minLength 1
   */
  external_reservation_id?: string | null;
  /**
   * External room id
   * @minLength 1
   */
  external_room_id?: string | null;
  /** External payload ref */
  external_payload_ref: string;
  /**
   * Imported at
   * @format date-time
   */
  imported_at?: string | null;
  /**
   * Last synced at
   * @format date-time
   */
  last_synced_at?: string | null;
  /**
   * Created at
   * @format date-time
   */
  created_at: string;
  /**
   * Updated at
   * @format date-time
   */
  updated_at: string;
}

export interface ClassifyProperty {
  /**
   * Star rating
   * @min 0
   * @max 5
   */
  star_rating?: number | null;
  /** Weel classification */
  weel_classification?:
    | "standard"
    | "essential"
    | "comfort"
    | "comfort_plus"
    | "business"
    | "premium"
    | "signature"
    | null;
}

export interface Review {
  /** Id */
  id: number;
  /** Property id */
  property_id: number;
  /** Booking id */
  booking_id?: number | null;
  /**
   * Guest name
   * @minLength 1
   * @maxLength 200
   */
  guest_name: string;
  /**
   * Rating
   * @format decimal
   */
  rating: string;
  /**
   * Categories
   * @default {}
   */
  categories: string;
  /** Text */
  text?: string | null;
  /**
   * Hotel response
   * @minLength 1
   */
  hotel_response?: string | null;
  /**
   * Response date
   * @format date-time
   */
  response_date?: string | null;
  /** Is complained */
  is_complained: boolean;
  /**
   * Complaint reason
   * @minLength 1
   */
  complaint_reason?: string | null;
  /**
   * Created at
   * @format date-time
   */
  created_at: string;
  /**
   * Updated at
   * @format date-time
   */
  updated_at: string;
}

export interface ReviewComplain {
  /**
   * Reason
   * @minLength 1
   * @maxLength 500
   */
  reason: string;
}

export interface ReviewRespond {
  /**
   * Response
   * @minLength 1
   * @maxLength 2000
   */
  response: string;
}

export interface RoomType {
  /** Id */
  id: number;
  /** Property id */
  property_id: number;
  /** Preset */
  preset?:
    | "standard"
    | "superior"
    | "deluxe"
    | "suite"
    | "studio"
    | "apartment"
    | "family"
    | "dormitory"
    | "custom"
    | null;
  /**
   * Custom name
   * @maxLength 100
   */
  custom_name?: string | null;
  /**
   * Name
   * @minLength 1
   * @maxLength 100
   */
  name: string;
  /** Description */
  description?: string | null;
  /**
   * Base rate
   * @format decimal
   */
  base_rate?: string | null;
  /**
   * Capacity
   * @default 2
   */
  capacity?: number;
  /** @default [] */
  amenities: string[];
  /** @default [] */
  photos: string[];
  /** Is active */
  is_active: boolean;
  /**
   * Created at
   * @format date-time
   */
  created_at: string;
  /**
   * Updated at
   * @format date-time
   */
  updated_at: string;
}

export interface Room {
  /** Id */
  id: number;
  /** Property id */
  property_id: number;
  /** Room type id */
  room_type_id?: number | null;
  /**
   * Room type
   * @minLength 1
   */
  room_type?: string | null;
  /** Room type name */
  room_type_name?: string | null;
  /** Room type preset */
  room_type_preset?: string | null;
  /**
   * Room number
   * @minLength 1
   * @maxLength 20
   */
  room_number: string;
  /** Display name */
  display_name?: string | null;
  /**
   * Floor
   * @default 1
   */
  floor?: number;
  /**
   * Area
   * @format decimal
   */
  area?: string | null;
  /**
   * Bedroom count
   * @default 1
   */
  bedroom_count?: number;
  /**
   * Beds
   * @default []
   */
  beds: string;
  /** @default [] */
  amenities: string[];
  /** @default [] */
  photos: string[];
  /**
   * Condition
   * @default "clean"
   */
  condition?: "clean" | "dirty" | "inspection" | "maintenance";
  /**
   * Availability
   * @default "available"
   */
  availability?: "available" | "occupied" | "blocked";
  /**
   * Capacity
   * @default 2
   */
  capacity?: number;
  /**
   * Meal plan
   * @default "BB"
   */
  meal_plan?: "RO" | "BB" | "HB" | "FB" | "AI" | "UAI";
  /**
   * Base price
   * @format decimal
   */
  base_price?: string | null;
  /**
   * Currency
   * @default "UZS"
   */
  currency?: string | null;
  /**
   * Cover photo index
   * @default 0
   */
  cover_photo_index?: number;
  /** Is active */
  is_active?: boolean;
  /**
   * Created at
   * @format date-time
   */
  created_at: string;
  /**
   * Updated at
   * @format date-time
   */
  updated_at: string;
}

export interface AdminHotelRoomCreate {
  /** Id */
  id?: number;
  /** Property id */
  property_id?: number;
  /**
   * Room type id
   * @min 1
   */
  room_type_id: number;
  /**
   * Room type
   * @minLength 1
   */
  room_type?: string | null;
  /**
   * Room type name
   * @minLength 1
   */
  room_type_name?: string;
  /**
   * Room type preset
   * @minLength 1
   */
  room_type_preset?: string;
  /**
   * Room number
   * @minLength 1
   * @maxLength 20
   */
  room_number: string;
  /** Display name */
  display_name?: string | null;
  /**
   * Floor
   * @default 1
   */
  floor?: number;
  /**
   * Area
   * @format decimal
   */
  area?: string | null;
  /**
   * Bedroom count
   * @min 0
   * @default 1
   */
  bedroom_count?: number;
  /**
   * Beds
   * @default []
   */
  beds?: string;
  /** @default [] */
  amenities?: string[];
  /** @default [] */
  photos?: string[];
  /**
   * Condition
   * @default "clean"
   */
  condition?: "clean" | "dirty" | "inspection" | "maintenance";
  /**
   * Availability
   * @default "available"
   */
  availability?: "available" | "occupied" | "blocked";
  /**
   * Capacity
   * @min 1
   * @default 2
   */
  capacity?: number;
  /**
   * Meal plan
   * @default "BB"
   */
  meal_plan?: "RO" | "BB" | "HB" | "FB" | "AI" | "UAI";
  /**
   * Base price
   * @format decimal
   */
  base_price?: string | null;
  /**
   * Currency
   * @default "UZS"
   */
  currency?: string | null;
  /**
   * Cover photo index
   * @default 0
   */
  cover_photo_index?: number;
  /** Is active */
  is_active?: boolean;
  /**
   * Created at
   * @format date-time
   */
  created_at?: string;
  /**
   * Updated at
   * @format date-time
   */
  updated_at?: string;
}

export interface AdminCreate {
  /**
   * Email
   * @format email
   * @minLength 1
   */
  email: string;
  /**
   * Password
   * @minLength 8
   */
  password?: string;
  /** First name */
  first_name?: string;
  /** Last name */
  last_name?: string;
  /**
   * Is staff
   * @default true
   */
  is_staff?: boolean;
  /**
   * Is superuser
   * @default false
   */
  is_superuser?: boolean;
}

export interface AdminUser {
  /** Id */
  id: number;
  /**
   * Email
   * @format email
   * @minLength 1
   */
  email?: string | null;
  /** Full name */
  full_name: string;
  /** Is staff */
  is_staff: string;
  /** Is superuser */
  is_superuser: string;
}

export interface B2BLoginSendOTP {
  /**
   * Phone
   * @minLength 1
   * @maxLength 20
   */
  phone: string;
}

export interface B2BLoginVerify {
  /**
   * Phone
   * @minLength 1
   * @maxLength 20
   */
  phone: string;
  /**
   * Otp
   * @minLength 4
   * @maxLength 6
   */
  otp: string;
}

export interface B2BRefresh {
  /**
   * Refresh
   * @minLength 1
   */
  refresh: string;
}

export interface BudgetRequest {
  /** Id */
  id: number;
  /** Trip id */
  trip_id?: number | null;
  /** Employee id */
  employee_id?: number | null;
  /** Department id */
  department_id?: number | null;
  /**
   * Trip name
   * @minLength 1
   */
  trip_name?: string | null;
  /**
   * Trip destination
   * @minLength 1
   */
  trip_destination?: string | null;
  /**
   * Employee name
   * @minLength 1
   */
  employee_name?: string | null;
  /**
   * Employee position
   * @minLength 1
   */
  employee_position?: string | null;
  /**
   * Department name
   * @minLength 1
   */
  department_name?: string | null;
  /**
   * Requester first name
   * @minLength 1
   */
  requester_first_name?: string | null;
  /**
   * Requester last name
   * @minLength 1
   */
  requester_last_name?: string | null;
  /**
   * Requester role
   * @minLength 1
   */
  requester_role?: string | null;
  /**
   * Amount
   * @format decimal
   */
  amount: string;
  /**
   * Description
   * @maxLength 500
   */
  description?: string | null;
  /**
   * Status
   * @minLength 1
   */
  status: string;
  /** Reviewed by */
  reviewed_by?: number | null;
  /**
   * Reviewed at
   * @format date-time
   */
  reviewed_at?: string | null;
  /**
   * Review description
   * @minLength 1
   */
  review_description?: string | null;
  /**
   * Created at
   * @format date-time
   */
  created_at: string;
  /**
   * Department budget limit
   * @format decimal
   */
  department_budget_limit?: string | null;
  /**
   * Department used amount
   * @format decimal
   */
  department_used_amount: string;
  /**
   * Employee used amount
   * @format decimal
   */
  employee_used_amount: string;
}

export interface BudgetRequestListResponse {
  /** Count */
  count: number;
  results: BudgetRequest[];
}

export interface ReviewBudgetRequest {
  /** Status */
  status: "approved" | "rejected";
  /**
   * Description
   * @maxLength 500
   */
  description?: string | null;
}

export interface DashboardSummary {
  /**
   * Monthly limit
   * @format decimal
   */
  monthly_limit: string;
  /**
   * Spent this month
   * @format decimal
   */
  spent_this_month: string;
  /** Active employees */
  active_employees: number;
  /** Pending limit requests */
  pending_limit_requests: number;
  /** Change percent */
  change_percent: number;
}

export interface B2BEmployee {
  /** Id */
  id: number;
  /** Company id */
  company_id: number;
  /** Department id */
  department_id: number;
  /**
   * Department name
   * @minLength 1
   */
  department_name?: string | null;
  /**
   * Full name
   * @minLength 1
   * @maxLength 200
   */
  full_name: string;
  /** Position */
  position?: string | null;
  /**
   * Email
   * @format email
   * @minLength 1
   */
  email: string;
  /**
   * Phone
   * @minLength 1
   * @maxLength 20
   */
  phone: string;
  /**
   * Date of birth
   * @format date
   */
  date_of_birth?: string | null;
  /**
   * Passport series
   * @maxLength 10
   */
  passport_series?: string | null;
  /**
   * Passport upload front
   * @minLength 1
   */
  passport_upload_front?: string | null;
  /**
   * Passport upload back
   * @minLength 1
   */
  passport_upload_back?: string | null;
  /**
   * Photo
   * @minLength 1
   */
  photo?: string | null;
  /**
   * Passport pinfl
   * @minLength 1
   * @maxLength 20
   */
  passport_pinfl: string;
  /**
   * Individual limit
   * @format decimal
   */
  individual_limit?: string | null;
  /**
   * Status
   * @default "available"
   */
  status?: "available" | "on_trip" | "blocked";
  /**
   * Role
   * @default "employee"
   */
  role?: "owner" | "performer" | "employee";
  /** Is active */
  is_active: boolean;
  /**
   * Created at
   * @format date-time
   */
  created_at: string;
}

export interface B2BDepartmentSummary {
  /** Id */
  id: number;
  /** Company id */
  company_id: number;
  /**
   * Name
   * @minLength 1
   */
  name: string;
  /**
   * Color
   * @minLength 1
   */
  color: string;
  /**
   * Budget limit
   * @format decimal
   */
  budget_limit?: string | null;
  /**
   * Used amount
   * @format decimal
   */
  used_amount: string;
  /**
   * On trip amount
   * @format decimal
   */
  on_trip_amount: string;
  /**
   * Remaining amount
   * @format decimal
   */
  remaining_amount?: string | null;
  /** Status */
  status: "no_limit" | "high" | "low" | "empty";
  employees: B2BEmployee[];
  /**
   * Created at
   * @format date-time
   */
  created_at: string;
}

export interface B2BDepartment {
  /** Id */
  id: number;
  /** Company id */
  company_id: number;
  /**
   * Name
   * @minLength 1
   * @maxLength 100
   */
  name: string;
  /** Color */
  color?: "#7C3AED" | "#16A34A" | "#DC2626" | "#2563EB" | "#EA580C";
  /**
   * Created at
   * @format date-time
   */
  created_at: string;
}

export interface B2BDepartmentUpdate {
  /**
   * Name
   * @minLength 1
   * @maxLength 100
   */
  name?: string;
  /** Color */
  color?: "#7C3AED" | "#16A34A" | "#DC2626" | "#2563EB" | "#EA580C";
}

export interface B2BDepartmentMoveEmployees {
  /** Target department id */
  target_department_id: number;
}

export interface B2BEmployeeLimit {
  /** Id */
  id: number;
  /**
   * Full name
   * @minLength 1
   */
  full_name: string;
  /**
   * Position
   * @minLength 1
   */
  position?: string | null;
  /**
   * Photo
   * @minLength 1
   */
  photo?: string | null;
  /** Department id */
  department_id?: number | null;
  /**
   * Department name
   * @minLength 1
   */
  department_name?: string | null;
  /**
   * Individual limit
   * @format decimal
   */
  individual_limit: string;
  /**
   * Used amount
   * @format decimal
   */
  used_amount: string;
  /**
   * On trip amount
   * @format decimal
   */
  on_trip_amount: string;
  /**
   * Remaining amount
   * @format decimal
   */
  remaining_amount: string;
  /** Status */
  status: "high" | "low" | "empty";
}

export interface TopEmployeeByTrips {
  /** Employee id */
  employee_id: number;
  /**
   * Full name
   * @minLength 1
   */
  full_name?: string | null;
  /**
   * Position
   * @minLength 1
   */
  position?: string | null;
  /**
   * Email
   * @minLength 1
   */
  email?: string | null;
  /**
   * Phone
   * @minLength 1
   */
  phone?: string | null;
  /**
   * Photo
   * @minLength 1
   */
  photo?: string | null;
  /** Department id */
  department_id?: number | null;
  /**
   * Department name
   * @minLength 1
   */
  department_name?: string | null;
  /** Trip count */
  trip_count: number;
}

export interface HotelBookingRequest {
  /** Id */
  id: number;
  /** Company id */
  company_id: number;
  /** Trip id */
  trip_id?: number | null;
  /**
   * Tenant schema
   * @minLength 1
   */
  tenant_schema: string;
  /** Hotel property id */
  hotel_property_id: number;
  /**
   * Hotel name
   * @minLength 1
   */
  hotel_name?: string | null;
  /**
   * Hotel guid
   * @minLength 1
   */
  hotel_guid?: string | null;
  /**
   * Check in
   * @format date
   */
  check_in: string;
  /**
   * Check out
   * @format date
   */
  check_out: string;
  /** Status */
  status: "pending" | "confirmed" | "rejected" | "cancelled";
  /**
   * Room count
   * @default 0
   */
  room_count?: number;
  /**
   * Employee count
   * @default 0
   */
  employee_count?: number;
  /** Requested by */
  requested_by?: number | null;
  /**
   * Reviewed at
   * @format date-time
   */
  reviewed_at?: string | null;
  /**
   * Created at
   * @format date-time
   */
  created_at: string;
}

export interface HotelBookingRoomRequest {
  /** Room id */
  room_id: number;
  /**
   * @maxItems 2
   * @minItems 1
   */
  employee_ids: number[];
}

export interface HotelBookingRequestCreate {
  /** Trip id */
  trip_id: number;
  /**
   * Hotel guid
   * @minLength 1
   */
  hotel_guid: string;
  /**
   * Check in
   * @format date
   */
  check_in: string;
  /**
   * Check out
   * @format date
   */
  check_out: string;
  rooms: HotelBookingRoomRequest[];
}

export interface HotelBookingRoomEmployee {
  /** Employee id */
  employee_id: number;
  /**
   * Full name
   * @minLength 1
   */
  full_name?: string | null;
  /**
   * Position
   * @minLength 1
   */
  position?: string | null;
}

export interface HotelBookingRoom {
  /** Id */
  id: number;
  /** Room id */
  room_id: number;
  /**
   * Room name
   * @minLength 1
   */
  room_name?: string | null;
  /**
   * Price per night
   * @format decimal
   */
  price_per_night?: string | null;
  /**
   * Total price
   * @format decimal
   */
  total_price?: string | null;
  /** Pms booking id */
  pms_booking_id?: number | null;
  employees: HotelBookingRoomEmployee[];
}

export interface HotelBookingRequestDetail {
  /** Id */
  id: number;
  /** Company id */
  company_id: number;
  /** Trip id */
  trip_id?: number | null;
  /**
   * Tenant schema
   * @minLength 1
   */
  tenant_schema: string;
  /** Hotel property id */
  hotel_property_id: number;
  /**
   * Hotel name
   * @minLength 1
   */
  hotel_name?: string | null;
  /**
   * Hotel guid
   * @minLength 1
   */
  hotel_guid?: string | null;
  /**
   * Check in
   * @format date
   */
  check_in: string;
  /**
   * Check out
   * @format date
   */
  check_out: string;
  /** Status */
  status: "pending" | "confirmed" | "rejected" | "cancelled";
  /**
   * Room count
   * @default 0
   */
  room_count?: number;
  /**
   * Employee count
   * @default 0
   */
  employee_count?: number;
  /** Requested by */
  requested_by?: number | null;
  /**
   * Reviewed at
   * @format date-time
   */
  reviewed_at?: string | null;
  /**
   * Created at
   * @format date-time
   */
  created_at: string;
  rooms: HotelBookingRoom[];
}

export interface HotelCity {
  /**
   * City
   * @minLength 1
   */
  city: string;
  /** Hotel count */
  hotel_count: number;
}

export interface HotelCityList {
  results: HotelCity[];
}

export interface TopHotelByBookings {
  /**
   * Tenant schema
   * @minLength 1
   */
  tenant_schema: string;
  /** Hotel property id */
  hotel_property_id: number;
  /**
   * Hotel name
   * @minLength 1
   */
  hotel_name?: string | null;
  /**
   * Hotel guid
   * @minLength 1
   */
  hotel_guid?: string | null;
  /** Booking count */
  booking_count: number;
  /**
   * Total spend
   * @format decimal
   */
  total_spend: string;
}

export interface HotelMonthlySummary {
  /** Year */
  year: number;
  /** Month */
  month: number;
  /**
   * Month spend
   * @minLength 1
   */
  month_spend: string;
  top_hotels: TopHotelByBookings[];
}

export interface HotelSearchMatchingRoom {
  /** Id */
  id: number;
  /**
   * Room number
   * @minLength 1
   */
  room_number?: string | null;
  /** Floor */
  floor?: number | null;
  /**
   * Display name
   * @minLength 1
   */
  display_name?: string | null;
  /** Room type id */
  room_type_id?: number | null;
  /**
   * Bedroom count
   * @default 1
   */
  bedroom_count: number;
  /**
   * Price per night
   * @format decimal
   */
  price_per_night?: string | null;
  /**
   * Currency
   * @minLength 1
   */
  currency?: string | null;
  /** Beds */
  beds: object;
  amenities: string[];
  /** Capacity adults */
  capacity_adults?: number | null;
  /** Capacity children */
  capacity_children?: number | null;
  /**
   * Room type name
   * @minLength 1
   */
  room_type_name?: string | null;
  /**
   * Preset
   * @minLength 1
   */
  preset?: string | null;
  /**
   * Sellability
   * @minLength 1
   */
  sellability?: string | null;
  /**
   * Is available
   * @default true
   */
  is_available: boolean;
  /** Area sqm */
  area_sqm?: number | null;
  /**
   * Meal plan
   * @minLength 1
   */
  meal_plan?: string | null;
  /** Img */
  img: object;
  /** Nights */
  nights: number;
  /**
   * Total price
   * @format decimal
   */
  total_price?: string | null;
}

export interface HotelCard {
  /** Id */
  id: number;
  /**
   * Guid
   * @minLength 1
   */
  guid?: string | null;
  /**
   * Organization name
   * @minLength 1
   */
  organization_name?: string | null;
  /**
   * Title
   * @minLength 1
   */
  title: string;
  /**
   * City
   * @minLength 1
   */
  city?: string | null;
  /**
   * Country
   * @minLength 1
   */
  country?: string | null;
  /**
   * Address
   * @minLength 1
   */
  address?: string | null;
  /**
   * Full address
   * @minLength 1
   */
  full_address?: string | null;
  /**
   * Description
   * @minLength 1
   */
  description?: string | null;
  /**
   * Description uz
   * @minLength 1
   */
  description_uz?: string | null;
  /**
   * Description ru
   * @minLength 1
   */
  description_ru?: string | null;
  /**
   * Description en
   * @minLength 1
   */
  description_en?: string | null;
  /** Star rating */
  star_rating?: number | null;
  /**
   * Weel classification
   * @minLength 1
   */
  weel_classification?: string | null;
  /**
   * Is recommended
   * @default false
   */
  is_recommended: boolean;
  /**
   * Is verified
   * @default false
   */
  is_verified: boolean;
  /**
   * Is active
   * @default true
   */
  is_active: boolean;
  /**
   * Is testing
   * @default false
   */
  is_testing: boolean;
  /**
   * Is archived
   * @default false
   */
  is_archived: boolean;
  /**
   * Verification status
   * @minLength 1
   */
  verification_status?: string | null;
  themes: string[];
  amenities: string[];
  /** Legal info */
  legal_info: Record<string, string | null>;
  /**
   * Booking count
   * @default 0
   */
  booking_count: number;
  /**
   * Rating
   * @format decimal
   */
  rating?: string | null;
  /**
   * Review count
   * @default 0
   */
  review_count: number;
  /**
   * Available rooms
   * @default 0
   */
  available_rooms: number;
  /**
   * Total estimated price
   * @format decimal
   */
  total_estimated_price?: string | null;
  matching_rooms?: HotelSearchMatchingRoom[];
  /** Check in time */
  check_in_time?: string | null;
  /** Check out time */
  check_out_time?: string | null;
  /**
   * Cancellation policy
   * @minLength 1
   */
  cancellation_policy?: string | null;
  /** Policies */
  policies: Record<string, string | null>;
  /**
   * Currency
   * @minLength 1
   */
  currency?: string | null;
  /**
   * Timezone
   * @minLength 1
   */
  timezone?: string | null;
  /** Latitude */
  latitude?: number | null;
  /** Longitude */
  longitude?: number | null;
  /**
   * Min price
   * @format decimal
   */
  min_price?: string | null;
  img: string[];
  /**
   * Is favorite
   * @default false
   */
  is_favorite: boolean;
  /** Organization */
  organization: Record<string, string | null>;
  /** Partner user */
  partner_user?: Record<string, string | null>;
  /** Property detail */
  property_detail: Record<string, string | null>;
  /**
   * Tenant schema
   * @minLength 1
   */
  tenant_schema?: string | null;
  /**
   * Created at
   * @format date-time
   */
  created_at?: string | null;
  /**
   * Updated at
   * @format date-time
   */
  updated_at?: string | null;
}

export interface HotelSearchPage {
  /** Count */
  count: number;
  /** Page */
  page: number;
  /** Page size */
  page_size: number;
  results: HotelCard[];
}

export interface B2BHotelCalendar {
  /** Room id */
  room_id: number;
  /**
   * Room name
   * @minLength 1
   */
  room_name?: string | null;
  /**
   * Date
   * @format date
   */
  date: string;
  /**
   * Status
   * @minLength 1
   */
  status: string;
}

export interface RoomAvailability {
  /** Id */
  id: number;
  /**
   * Room number
   * @minLength 1
   */
  room_number?: string | null;
  /** Floor */
  floor?: number | null;
  /**
   * Display name
   * @minLength 1
   */
  display_name?: string | null;
  /** Room type id */
  room_type_id?: number | null;
  /**
   * Bedroom count
   * @default 1
   */
  bedroom_count?: number;
  /**
   * Price per night
   * @format decimal
   */
  price_per_night?: string | null;
  /**
   * Currency
   * @minLength 1
   */
  currency?: string | null;
  /**
   * Beds
   * @default []
   */
  beds: object;
  /** @default [] */
  amenities: string[];
  /** Capacity adults */
  capacity_adults?: number | null;
  /** Capacity children */
  capacity_children?: number | null;
  /**
   * Room type name
   * @minLength 1
   */
  room_type_name?: string | null;
  /**
   * Preset
   * @minLength 1
   */
  preset?: string | null;
  /**
   * Sellability
   * @minLength 1
   */
  sellability?: string | null;
  /**
   * Is available
   * @default true
   */
  is_available?: boolean;
  /** Area sqm */
  area_sqm?: number | null;
  /**
   * Meal plan
   * @minLength 1
   */
  meal_plan?: string | null;
  /**
   * Img
   * @default []
   */
  img: object;
}

export interface B2BLeadRequest {
  /** Id */
  id: number;
  /**
   * Full name
   * @minLength 1
   * @maxLength 200
   */
  full_name: string;
  /**
   * Company name
   * @maxLength 200
   * @default ""
   */
  company_name?: string;
  /**
   * Email
   * @format email
   * @default ""
   */
  email?: string;
  /**
   * Phone number
   * @minLength 1
   * @maxLength 20
   */
  phone_number: string;
  /**
   * Created at
   * @format date-time
   */
  created_at: string;
}

export interface RecentTripEmployee {
  /** Trip employee id */
  trip_employee_id: number;
  /** Trip id */
  trip_id: number;
  /** Employee id */
  employee_id: number;
  /**
   * Full name
   * @minLength 1
   */
  full_name?: string | null;
  /**
   * Position
   * @minLength 1
   */
  position?: string | null;
  /**
   * Email
   * @minLength 1
   */
  email?: string | null;
  /**
   * Phone
   * @minLength 1
   */
  phone?: string | null;
  /** Department id */
  department_id?: number | null;
  /**
   * Department name
   * @minLength 1
   */
  department_name?: string | null;
  /**
   * Trip name
   * @minLength 1
   */
  trip_name?: string | null;
  /**
   * Destination city
   * @minLength 1
   */
  destination_city?: string | null;
  /**
   * Trip start date
   * @format date
   */
  trip_start_date?: string | null;
  /**
   * Trip end date
   * @format date
   */
  trip_end_date?: string | null;
  /**
   * Check in
   * @format date
   */
  check_in?: string | null;
  /**
   * Check out
   * @format date
   */
  check_out?: string | null;
  /**
   * Trip status
   * @minLength 1
   */
  trip_status: string;
  /**
   * Trip employee status
   * @minLength 1
   */
  trip_employee_status: string;
  /**
   * Assigned at
   * @format date-time
   */
  assigned_at: string;
}

export interface PeriodStat {
  /**
   * Total budget
   * @minLength 1
   */
  total_budget: string;
  /** Total trips */
  total_trips: number;
  /**
   * Approved spend
   * @minLength 1
   */
  approved_spend: string;
  /**
   * Remaining limit
   * @minLength 1
   */
  remaining_limit: string;
  /**
   * Requested extra limit
   * @minLength 1
   */
  requested_extra_limit: string;
}

export interface DepartmentStat {
  /** Department id */
  department_id: number;
  /**
   * Department name
   * @minLength 1
   */
  department_name: string;
  /** Total trips */
  total_trips: number;
  /** Total employees */
  total_employees: number;
  /**
   * Approved spend
   * @minLength 1
   */
  approved_spend: string;
}

export interface StatisticsResponse {
  /**
   * Period
   * @minLength 1
   */
  period: string;
  /** Periods */
  periods: Record<string, PeriodStat>;
  by_department: DepartmentStat[];
}

export interface StatisticsChartResponse {
  /**
   * Period
   * @minLength 1
   */
  period: string;
  /**
   * Total
   * @minLength 1
   */
  total: string;
  /** Change percent */
  change_percent: number;
}

export interface MonthlySpendingChartPoint {
  /** Year */
  year: number;
  /** Month */
  month: number;
  /**
   * Value
   * @minLength 1
   */
  value: string;
  /** Change percent */
  change_percent: number;
}

export interface MonthlySpendingChartResponse {
  /** Months */
  months: number;
  /**
   * Total
   * @minLength 1
   */
  total: string;
  points: MonthlySpendingChartPoint[];
}

export interface WeeklySpendingChartPoint {
  /** Week */
  week: number;
  /**
   * Start
   * @format date
   */
  start: string;
  /**
   * End
   * @format date
   */
  end: string;
  /**
   * Value
   * @minLength 1
   */
  value: string;
  /** Change percent */
  change_percent: number;
}

export interface StatisticsChartPoint {
  /**
   * Date
   * @minLength 1
   */
  date: string;
  /**
   * Value
   * @minLength 1
   */
  value: string;
}

export interface WeeklySpendingChartResponse {
  /** Year */
  year: number;
  /** Month */
  month: number;
  /**
   * Total
   * @minLength 1
   */
  total: string;
  weeks: WeeklySpendingChartPoint[];
  points: StatisticsChartPoint[];
}

export interface Transaction {
  /** Id */
  id: number;
  /**
   * Date
   * @format date-time
   */
  date: string;
  /** Employee */
  employee: string;
  /**
   * Amount
   * @minLength 1
   */
  amount: string;
  /** Category */
  category: string;
  /**
   * Direction
   * @minLength 1
   */
  direction?: string | null;
  /**
   * Status
   * @minLength 1
   */
  status: string;
}

export interface TransactionListResponse {
  /** Count */
  count: number;
  /** Page */
  page: number;
  /** Page size */
  page_size: number;
  results: Transaction[];
}

export interface TravelPolicy {
  /** Id */
  id: number;
  /** Company id */
  company_id: number;
  /**
   * Budget per trip
   * @format decimal
   */
  budget_per_trip?: string | null;
  /**
   * Monthly budget
   * @format decimal
   */
  monthly_budget?: string | null;
  /** @default [] */
  allowed_star_ratings: number[];
  /** @default [] */
  allowed_weel_classifications: string[];
  /** @default [] */
  blacklisted_properties: number[];
  /** @default [] */
  preferred_properties: number[];
  /**
   * Updated at
   * @format date-time
   */
  updated_at: string;
}

export interface TravelPolicyRule {
  /** Id */
  id: number;
  /** Policy id */
  policy_id: number;
  /** Applies to */
  applies_to: "all" | "department" | "employee";
  /** Target id */
  target_id?: number | null;
  /**
   * Target name
   * @minLength 1
   */
  target_name?: string | null;
  /**
   * Budget limit
   * @format decimal
   */
  budget_limit?: string | null;
  /**
   * Used amount
   * @format decimal
   */
  used_amount: string;
  /**
   * Created at
   * @format date-time
   */
  created_at: string;
  /**
   * Updated at
   * @format date-time
   */
  updated_at: string;
}

export interface TravelPolicyRuleCreate {
  /** Applies to */
  applies_to: "all" | "department" | "employee";
  /** Target id */
  target_id?: number | null;
  /**
   * Budget limit
   * @format decimal
   */
  budget_limit?: string | null;
}

export interface TravelPolicyRuleUpdate {
  /** Applies to */
  applies_to?: "all" | "department" | "employee";
  /** Target id */
  target_id?: number | null;
  /**
   * Budget limit
   * @format decimal
   */
  budget_limit?: string | null;
}

export interface BusinessTrip {
  /** Id */
  id: number;
  /** Company id */
  company_id: number;
  /**
   * Name
   * @minLength 1
   * @maxLength 200
   */
  name: string;
  /** Destination city */
  destination_city?: string | null;
  /**
   * Start date
   * @format date
   */
  start_date?: string | null;
  /**
   * End date
   * @format date
   */
  end_date?: string | null;
  /**
   * Budget
   * @format decimal
   */
  budget?: string | null;
  /**
   * Status
   * @default "draft"
   */
  status?: "draft" | "pending" | "active" | "completed" | "cancelled";
  /** Notes */
  notes?: string | null;
  /** Created by */
  created_by?: number | null;
  /**
   * Created at
   * @format date-time
   */
  created_at: string;
  /**
   * Updated at
   * @format date-time
   */
  updated_at: string;
}

export interface ActiveTripEmployee {
  /** Trip employee id */
  trip_employee_id: number;
  /** Trip id */
  trip_id: number;
  /** Employee id */
  employee_id: number;
  /**
   * Full name
   * @minLength 1
   */
  full_name?: string | null;
  /**
   * Position
   * @minLength 1
   */
  position?: string | null;
  /**
   * Role
   * @minLength 1
   */
  role?: string | null;
  /**
   * Email
   * @minLength 1
   */
  email?: string | null;
  /**
   * Phone
   * @minLength 1
   */
  phone?: string | null;
  /**
   * Photo
   * @minLength 1
   */
  photo?: string | null;
  /** Department id */
  department_id?: number | null;
  /**
   * Department name
   * @minLength 1
   */
  department_name?: string | null;
  /**
   * Trip name
   * @minLength 1
   */
  trip_name?: string | null;
  /**
   * Destination city
   * @minLength 1
   */
  destination_city?: string | null;
  /**
   * Trip start date
   * @format date
   */
  trip_start_date?: string | null;
  /**
   * Trip end date
   * @format date
   */
  trip_end_date?: string | null;
  /**
   * Check in
   * @format date
   */
  check_in?: string | null;
  /**
   * Check out
   * @format date
   */
  check_out?: string | null;
  /**
   * Trip status
   * @minLength 1
   */
  trip_status: string;
  /**
   * Trip employee status
   * @minLength 1
   */
  trip_employee_status: string;
  /**
   * Assigned at
   * @format date-time
   */
  assigned_at: string;
  /**
   * Hotel name
   * @minLength 1
   */
  hotel_name?: string | null;
  /**
   * Voucher number
   * @minLength 1
   */
  voucher_number?: string | null;
  /**
   * Room name
   * @minLength 1
   */
  room_name?: string | null;
  /**
   * Price per night
   * @format decimal
   */
  price_per_night?: string | null;
  /**
   * Total price
   * @format decimal
   */
  total_price?: string | null;
  /**
   * Hotel address
   * @minLength 1
   */
  hotel_address?: string | null;
  /**
   * Hotel maps url
   * @minLength 1
   */
  hotel_maps_url?: string | null;
  /**
   * Hotel qr
   * @minLength 1
   */
  hotel_qr?: string | null;
  /**
   * Hotel check in time
   * @minLength 1
   */
  hotel_check_in_time?: string | null;
  /**
   * Hotel check out time
   * @minLength 1
   */
  hotel_check_out_time?: string | null;
  /** Pms accepted */
  pms_accepted: string;
}

export interface ActiveTripEmployeesResponse {
  /**
   * Type
   * @minLength 1
   */
  type: string;
  /** Count */
  count: number;
  results: ActiveTripEmployee[];
}

export interface TripStatusSummary {
  /** Year */
  year: number;
  /** Month */
  month: number;
  /** Active */
  active: number;
  /** Pending */
  pending: number;
  /** Completed */
  completed: number;
  /** Cancelled */
  cancelled: number;
}

export interface TripEmployee {
  /** Id */
  id: number;
  /** Trip id */
  trip_id: number;
  /** Employee id */
  employee_id: number;
  /**
   * Full name
   * @minLength 1
   */
  full_name?: string | null;
  /**
   * Position
   * @minLength 1
   */
  position?: string | null;
  /**
   * Phone
   * @minLength 1
   */
  phone?: string | null;
  /**
   * Email
   * @minLength 1
   */
  email?: string | null;
  /** Property id */
  property_id?: number | null;
  /** Room id */
  room_id?: number | null;
  /**
   * Check in
   * @format date
   */
  check_in?: string | null;
  /**
   * Check out
   * @format date
   */
  check_out?: string | null;
  /** Pms booking id */
  pms_booking_id?: number | null;
  /**
   * Status
   * @default "invited"
   */
  status?: "invited" | "confirmed" | "checked_in" | "checked_out" | "cancelled";
  /**
   * Created at
   * @format date-time
   */
  created_at: string;
}

export interface TravelVoucher {
  /** Id */
  id: number;
  /** Trip id */
  trip_id: number;
  /**
   * Voucher number
   * @minLength 1
   */
  voucher_number: string;
  /**
   * Pdf url
   * @minLength 1
   */
  pdf_url?: string | null;
  /**
   * Generated at
   * @format date-time
   */
  generated_at: string;
  /**
   * Created at
   * @format date-time
   */
  created_at: string;
}

export interface WorkspaceLogin {
  /**
   * Phone
   * @minLength 1
   * @maxLength 20
   */
  phone: string;
}

export interface WorkspaceLoginVerify {
  /**
   * Phone
   * @minLength 1
   * @maxLength 20
   */
  phone: string;
  /**
   * Otp
   * @minLength 4
   * @maxLength 6
   */
  otp: string;
}

export interface WorkspaceRefresh {
  /**
   * Refresh
   * @minLength 1
   */
  refresh: string;
}

export type WorkspaceChatMessage = {
  /** Id */
  id: number;
  /** Thread id */
  thread_id?: number;
  /** Sender id */
  sender_id: number;
  /**
   * Text
   * @minLength 1
   */
  text: string;
  /**
   * Created at
   * @format date-time
   */
  created_at: string;
} | null;

export interface ChatThread {
  /** Id */
  id: number;
  /**
   * Group name
   * @minLength 1
   */
  group_name?: string | null;
  participant_ids: number[];
  /** Unread */
  unread: number;
  /** Is pinned */
  is_pinned: boolean;
  /** Is muted */
  is_muted: boolean;
  last_message?: WorkspaceChatMessage;
}

export interface ThreadCreate {
  member_ids: number[];
  /**
   * Group name
   * @maxLength 200
   */
  group_name?: string | null;
}

export interface ThreadFlags {
  /** Is pinned */
  is_pinned?: boolean;
  /** Is muted */
  is_muted?: boolean;
}

export interface MessageWrite {
  /**
   * Text
   * @minLength 1
   * @maxLength 4000
   */
  text: string;
}

export interface CalendarEvent {
  /** Id */
  id: number;
  /**
   * Title
   * @minLength 1
   */
  title: string;
  /**
   * Event type
   * @minLength 1
   */
  event_type: string;
  /**
   * Starts at
   * @format date-time
   */
  starts_at: string;
  /**
   * Ends at
   * @format date-time
   */
  ends_at: string;
  /** All day */
  all_day: boolean;
  /**
   * Location
   * @minLength 1
   */
  location?: string | null;
  /**
   * Notes
   * @minLength 1
   */
  notes?: string | null;
  /** Author id */
  author_id: number;
  participant_ids: number[];
  /** Can edit */
  can_edit: boolean;
}

export interface EventWrite {
  /**
   * Title
   * @minLength 1
   * @maxLength 300
   */
  title: string;
  /**
   * Event type
   * @default "meeting"
   */
  event_type?: "meeting" | "call" | "task" | "deadline" | "personal";
  /**
   * Starts at
   * @format date-time
   */
  starts_at: string;
  /**
   * Ends at
   * @format date-time
   */
  ends_at: string;
  /**
   * All day
   * @default false
   */
  all_day?: boolean;
  /**
   * Location
   * @maxLength 300
   */
  location?: string | null;
  /** Notes */
  notes?: string | null;
  /** @default [] */
  participant_ids?: number[];
}

export interface EventPatch {
  /**
   * Title
   * @minLength 1
   * @maxLength 300
   */
  title?: string;
  /**
   * Event type
   * @default "meeting"
   */
  event_type?: "meeting" | "call" | "task" | "deadline" | "personal";
  /**
   * Starts at
   * @format date-time
   */
  starts_at?: string;
  /**
   * Ends at
   * @format date-time
   */
  ends_at?: string;
  /**
   * All day
   * @default false
   */
  all_day?: boolean;
  /**
   * Location
   * @maxLength 300
   */
  location?: string | null;
  /** Notes */
  notes?: string | null;
  participant_ids?: number[];
}

export interface Me {
  /** Id */
  id: number;
  /** Company id */
  company_id: number;
  /**
   * Company name
   * @minLength 1
   */
  company_name?: string | null;
  /**
   * Full name
   * @minLength 1
   */
  full_name: string;
  /**
   * Position
   * @minLength 1
   */
  position?: string | null;
  /**
   * Role
   * @minLength 1
   */
  role: string;
  /**
   * Phone
   * @minLength 1
   */
  phone?: string | null;
  /**
   * Email
   * @minLength 1
   */
  email?: string | null;
  /**
   * Photo
   * @minLength 1
   */
  photo?: string | null;
  /**
   * Department name
   * @minLength 1
   */
  department_name?: string | null;
  /** Permissions */
  permissions: Record<string, boolean>;
}

export interface Subtask {
  /** Id */
  id: number;
  /**
   * Title
   * @minLength 1
   */
  title: string;
  /** Is done */
  is_done: boolean;
}

export interface TaskComment {
  /** Id */
  id: number;
  /** Author id */
  author_id: number;
  /**
   * Text
   * @minLength 1
   */
  text: string;
  /**
   * Created at
   * @format date-time
   */
  created_at: string;
}

export interface Task {
  /** Id */
  id: number;
  /**
   * Title
   * @minLength 1
   */
  title: string;
  /** Description */
  description: string;
  /**
   * Status
   * @minLength 1
   */
  status: string;
  /**
   * Priority
   * @minLength 1
   */
  priority: string;
  /**
   * Project
   * @minLength 1
   */
  project?: string | null;
  /**
   * Due date
   * @format date-time
   */
  due_date?: string | null;
  /** Author id */
  author_id: number;
  /**
   * Created at
   * @format date-time
   */
  created_at: string;
  assignee_ids: number[];
  subtasks: Subtask[];
  comments: TaskComment[];
  /** Can edit */
  can_edit: boolean;
  /** Can delete */
  can_delete: boolean;
  /** Can change status */
  can_change_status: boolean;
}

export interface TaskList {
  results: Task[];
  /** Counters */
  counters: Record<string, number>;
}

export interface TaskWrite {
  /**
   * Title
   * @minLength 1
   * @maxLength 300
   */
  title: string;
  /**
   * Description
   * @default ""
   */
  description?: string;
  /**
   * Status
   * @default "todo"
   */
  status?: "todo" | "in_progress" | "review" | "done";
  /**
   * Priority
   * @default "medium"
   */
  priority?: "low" | "medium" | "high" | "urgent";
  /**
   * Project
   * @maxLength 200
   */
  project?: string | null;
  /**
   * Due date
   * @format date-time
   */
  due_date?: string | null;
  /** @default [] */
  assignee_ids?: number[];
  /** @default [] */
  subtasks?: string[];
}

export interface TaskPatch {
  /**
   * Title
   * @minLength 1
   * @maxLength 300
   */
  title?: string;
  /** Description */
  description?: string;
  /** Status */
  status?: "todo" | "in_progress" | "review" | "done";
  /** Priority */
  priority?: "low" | "medium" | "high" | "urgent";
  /**
   * Project
   * @maxLength 200
   */
  project?: string | null;
  /**
   * Due date
   * @format date-time
   */
  due_date?: string | null;
  assignee_ids?: number[];
  subtasks?: string[];
}

export interface TaskCommentWrite {
  /**
   * Text
   * @minLength 1
   * @maxLength 2000
   */
  text: string;
}

export interface TaskStatus {
  /** Status */
  status: "todo" | "in_progress" | "review" | "done";
}

export interface TeamMember {
  /** Id */
  id: number;
  /**
   * Full name
   * @minLength 1
   */
  full_name: string;
  /**
   * Position
   * @minLength 1
   */
  position?: string | null;
  /**
   * Role
   * @minLength 1
   */
  role: string;
  /**
   * Department name
   * @minLength 1
   */
  department_name?: string | null;
  /**
   * Department color
   * @minLength 1
   */
  department_color?: string | null;
  /**
   * Phone
   * @minLength 1
   */
  phone?: string | null;
  /**
   * Email
   * @minLength 1
   */
  email?: string | null;
  /**
   * Photo
   * @minLength 1
   */
  photo?: string | null;
  /**
   * Status
   * @minLength 1
   */
  status?: string;
}

export interface RawAdminBookingClient {
  /** Id */
  id: number;
  /** First name */
  first_name?: string | null;
  /** Last name */
  last_name?: string | null;
  /** Phone number */
  phone_number?: string | null;
}

export interface RawAdminBookingProperty {
  /**
   * Guid
   * @format uuid
   */
  guid: string;
  /**
   * Title
   * @minLength 1
   */
  title: string;
  /**
   * Property type
   * @minLength 1
   */
  property_type: string;
}

export interface RawAdminBookingList {
  /**
   * Guid
   * @format uuid
   */
  guid: string;
  /**
   * Booking number
   * @minLength 1
   */
  booking_number: string;
  /**
   * Check in
   * @format date
   */
  check_in: string;
  /**
   * Check out
   * @format date
   */
  check_out: string;
  /** Adults */
  adults: number;
  /** Children */
  children: number;
  /** Babies */
  babies: number;
  /**
   * Status
   * @minLength 1
   */
  status: string;
  /** Cancellation reason */
  cancellation_reason?: string | null;
  /**
   * Confirmed at
   * @format date-time
   */
  confirmed_at?: string | null;
  /**
   * Cancelled at
   * @format date-time
   */
  cancelled_at?: string | null;
  /**
   * Completed at
   * @format date-time
   */
  completed_at?: string | null;
  /**
   * Created at
   * @format date-time
   */
  created_at: string;
  client: RawAdminBookingClient;
  property: RawAdminBookingProperty;
  /** Booking price */
  booking_price: string;
}

export interface RawPartnerBooking {
  /** Username */
  username?: string | null;
  /** First name */
  first_name?: string | null;
  /** Last name */
  last_name?: string | null;
  /** Phone number */
  phone_number?: string | null;
}

export interface RawClientBookingList {
  /**
   * Guid
   * @format uuid
   */
  guid: string;
  /** Property */
  property: string;
  partner: RawPartnerBooking;
  /**
   * Status
   * @minLength 1
   */
  status: string;
  /**
   * Check in
   * @format date
   */
  check_in: string;
  /**
   * Check out
   * @format date
   */
  check_out: string;
  /**
   * Confirmed at
   * @format date-time
   */
  confirmed_at?: string | null;
  /**
   * Cancelled at
   * @format date-time
   */
  cancelled_at?: string | null;
  /**
   * Completed at
   * @format date-time
   */
  completed_at?: string | null;
}

export interface RawClientBookingCreate {
  /**
   * Property id
   * @format uuid
   */
  property_id: string;
  /**
   * Card id
   * @minLength 1
   */
  card_id: string;
  /**
   * Check in
   * @format date
   */
  check_in: string;
  /**
   * Check out
   * @format date
   */
  check_out: string;
  /**
   * Adults
   * @min 1
   */
  adults: number;
  /**
   * Children
   * @min 0
   * @default 0
   */
  children?: number;
  /**
   * Babies
   * @min 0
   * @max 5
   * @default 0
   */
  babies?: number;
}

export interface RawClientBookingHistoryList {
  /**
   * Guid
   * @format uuid
   */
  guid: string;
  /**
   * Property type
   * @minLength 1
   */
  property_type: string;
  /** Property */
  property: string;
  /**
   * Status
   * @minLength 1
   */
  status: string;
  /**
   * Created at
   * @format date-time
   */
  created_at: string;
}

export interface HotelBookingCreate {
  /**
   * Hotel guid
   * @minLength 1
   */
  hotel_guid: string;
  /**
   * Room id
   * @min 1
   */
  room_id: number;
  /**
   * Check in
   * @format date
   */
  check_in: string;
  /**
   * Check out
   * @format date
   */
  check_out: string;
  /**
   * Guests
   * @min 1
   */
  guests: number;
  /**
   * Card id
   * @minLength 1
   */
  card_id?: string | null;
}

export interface HotelBookingList {
  /** Id */
  id: number;
  /**
   * Booking number
   * @minLength 1
   */
  booking_number: string;
  /**
   * Status
   * @minLength 1
   */
  status: string;
  /**
   * Check in
   * @format date
   */
  check_in: string;
  /**
   * Check out
   * @format date
   */
  check_out: string;
  /** Adult count */
  adult_count: number;
  /** Child count */
  child_count: number;
  /**
   * Total cost
   * @format decimal
   */
  total_cost: string;
  /**
   * Hold amount
   * @format decimal
   */
  hold_amount: string;
  /**
   * Created at
   * @format date-time
   */
  created_at: string;
  /**
   * Hotel name
   * @minLength 1
   */
  hotel_name: string;
  /**
   * Hotel city
   * @minLength 1
   */
  hotel_city: string;
  /** Hotel star rating */
  hotel_star_rating?: number | null;
  /**
   * Room number
   * @minLength 1
   */
  room_number: string;
  /**
   * Room name
   * @minLength 1
   */
  room_name: string;
  /**
   * Room type name
   * @minLength 1
   */
  room_type_name: string;
  /**
   * Room type preset
   * @minLength 1
   */
  room_type_preset: string;
  /**
   * Room price per night
   * @format decimal
   */
  room_price_per_night: string;
}

export interface HotelBookingDetail {
  /** Id */
  id: number;
  /**
   * Booking number
   * @minLength 1
   */
  booking_number: string;
  /**
   * Status
   * @minLength 1
   */
  status: string;
  /**
   * Check in
   * @format date
   */
  check_in: string;
  /**
   * Check out
   * @format date
   */
  check_out: string;
  /** Adult count */
  adult_count: number;
  /** Child count */
  child_count: number;
  /**
   * Total cost
   * @format decimal
   */
  total_cost: string;
  /**
   * Hold amount
   * @format decimal
   */
  hold_amount: string;
  /**
   * Created at
   * @format date-time
   */
  created_at: string;
  /**
   * Hotel name
   * @minLength 1
   */
  hotel_name: string;
  /**
   * Hotel city
   * @minLength 1
   */
  hotel_city: string;
  /**
   * Hotel address
   * @minLength 1
   */
  hotel_address: string;
  /** Hotel star rating */
  hotel_star_rating?: number | null;
  /**
   * Hotel check in time
   * @minLength 1
   */
  hotel_check_in_time?: string | null;
  /**
   * Hotel check out time
   * @minLength 1
   */
  hotel_check_out_time?: string | null;
  /**
   * Hotel latitude
   * @minLength 1
   */
  hotel_latitude?: string | null;
  /**
   * Hotel longitude
   * @minLength 1
   */
  hotel_longitude?: string | null;
  /** Hotel images */
  hotel_images: object;
  /**
   * Room number
   * @minLength 1
   */
  room_number: string;
  /**
   * Room name
   * @minLength 1
   */
  room_name: string;
  /** Room floor */
  room_floor?: number | null;
  /**
   * Room price per night
   * @format decimal
   */
  room_price_per_night: string;
  /** Room bedroom count */
  room_bedroom_count?: number | null;
  /** Room beds */
  room_beds?: number | null;
  /** Room capacity */
  room_capacity?: number | null;
  /**
   * Room type name
   * @minLength 1
   */
  room_type_name: string;
  /**
   * Room type preset
   * @minLength 1
   */
  room_type_preset: string;
  /**
   * Room meal plan
   * @minLength 1
   */
  room_meal_plan?: string | null;
  /** Room images */
  room_images: object;
}

export interface RawPropertyBooking {
  /**
   * Guid
   * @format uuid
   */
  guid: string;
  /**
   * Title
   * @minLength 1
   */
  title: string;
  /** Img */
  img: string;
}

export interface RawClientBooking {
  /** First name */
  first_name?: string | null;
  /** Last name */
  last_name?: string | null;
}

export interface RawPartnerBookingList {
  /**
   * Guid
   * @format uuid
   */
  guid: string;
  property: RawPropertyBooking;
  client: RawClientBooking;
  /**
   * Check in
   * @format date
   */
  check_in: string;
  /**
   * Check out
   * @format date
   */
  check_out: string;
  /** Adults */
  adults: number;
  /** Children */
  children: number;
  /** Babies */
  babies: number;
  /** Guests over listing standard */
  guests_over_listing_standard: string;
  /** Booking price */
  booking_price: string;
  /**
   * Booking number
   * @minLength 1
   */
  booking_number: string;
  /**
   * Status
   * @minLength 1
   */
  status: string;
  /** Cancellation reason */
  cancellation_reason?: string | null;
  /**
   * Confirmed at
   * @format date-time
   */
  confirmed_at?: string | null;
  /**
   * Cancelled at
   * @format date-time
   */
  cancelled_at?: string | null;
  /**
   * Completed at
   * @format date-time
   */
  completed_at?: string | null;
}

export interface RawCalendarDate {
  /**
   * Date
   * @format date
   */
  date: string;
  /**
   * Status
   * @minLength 1
   */
  status: string;
}

export interface RawPropertyCalendarDateRange {
  /**
   * From date
   * @format date
   */
  from_date: string;
  /**
   * To date
   * @format date
   */
  to_date?: string;
}

export interface ChatMessage {
  /** Id */
  id: number;
  /** Conversation id */
  conversation_id: number;
  /** Sender id */
  sender_id: string;
  /** Receiver id */
  receiver_id: string;
  /** Sender type */
  sender_type: string;
  /** Receiver type */
  receiver_type: string;
  /**
   * Content
   * @minLength 1
   */
  content: string;
  /** Is read */
  is_read?: boolean | null;
  /**
   * Created at
   * @format date-time
   */
  created_at: string;
  /**
   * Updated at
   * @format date-time
   */
  updated_at: string;
}

export interface Document {
  /** Id */
  id: number;
  /**
   * Doc number
   * @minLength 1
   */
  doc_number: string;
  /** Doc type */
  doc_type:
    | "invoice"
    | "agreement"
    | "additional_agreement"
    | "certificate"
    | "reconciliation"
    | "voucher"
    | "power_of_attorney"
    | "other";
  /** Organization id */
  organization_id?: number | null;
  /** Company id */
  company_id?: number | null;
  /** Partner id */
  partner_id?: number | null;
  /** Booking id */
  booking_id?: number | null;
  /** Trip id */
  trip_id?: number | null;
  /**
   * Amount
   * @format decimal
   */
  amount?: string | null;
  /** Status */
  status: "created" | "sent" | "signed" | "rejected";
  /**
   * Pdf url
   * @minLength 1
   */
  pdf_url?: string | null;
  /** Notes */
  notes?: string | null;
  /** Created by */
  created_by?: number | null;
  /**
   * Created at
   * @format date-time
   */
  created_at: string;
  /**
   * Updated at
   * @format date-time
   */
  updated_at: string;
}

export interface DocumentRecipient {
  /** Id */
  id: number;
  /** Document id */
  document_id: number;
  /** Recipient type */
  recipient_type: "client" | "partner" | "hotel" | "b2b";
  /**
   * Inn
   * @maxLength 20
   */
  inn?: string | null;
  /** Org name */
  org_name?: string | null;
  /**
   * Bank details
   * @default {}
   */
  bank_details: Record<string, string | null>;
  /**
   * Created at
   * @format date-time
   */
  created_at: string;
}

export interface DocumentWithRecipients {
  /** Id */
  id: number;
  /**
   * Doc number
   * @minLength 1
   */
  doc_number: string;
  /** Doc type */
  doc_type:
    | "invoice"
    | "agreement"
    | "additional_agreement"
    | "certificate"
    | "reconciliation"
    | "voucher"
    | "power_of_attorney"
    | "other";
  /** Organization id */
  organization_id?: number | null;
  /** Company id */
  company_id?: number | null;
  /** Partner id */
  partner_id?: number | null;
  /** Booking id */
  booking_id?: number | null;
  /** Trip id */
  trip_id?: number | null;
  /**
   * Amount
   * @format decimal
   */
  amount?: string | null;
  /** Status */
  status: "created" | "sent" | "signed" | "rejected";
  /**
   * Pdf url
   * @minLength 1
   */
  pdf_url?: string | null;
  /** Notes */
  notes?: string | null;
  /** Created by */
  created_by?: number | null;
  /**
   * Created at
   * @format date-time
   */
  created_at: string;
  /**
   * Updated at
   * @format date-time
   */
  updated_at: string;
  recipients: DocumentRecipient[];
}

export interface DocumentStatus {
  /** Status */
  status: "created" | "sent" | "signed" | "rejected";
}

export interface HotelDetail {
  /** Id */
  id: number;
  /**
   * Guid
   * @minLength 1
   */
  guid?: string | null;
  /**
   * Organization name
   * @minLength 1
   */
  organization_name?: string | null;
  /**
   * Title
   * @minLength 1
   */
  title: string;
  /**
   * City
   * @minLength 1
   */
  city?: string | null;
  /**
   * Country
   * @minLength 1
   */
  country?: string | null;
  /**
   * Address
   * @minLength 1
   */
  address?: string | null;
  /**
   * Full address
   * @minLength 1
   */
  full_address?: string | null;
  /**
   * Description
   * @minLength 1
   */
  description?: string | null;
  /**
   * Description uz
   * @minLength 1
   */
  description_uz?: string | null;
  /**
   * Description ru
   * @minLength 1
   */
  description_ru?: string | null;
  /**
   * Description en
   * @minLength 1
   */
  description_en?: string | null;
  /** Star rating */
  star_rating?: number | null;
  /**
   * Weel classification
   * @minLength 1
   */
  weel_classification?: string | null;
  /**
   * Is recommended
   * @default false
   */
  is_recommended: boolean;
  /**
   * Is verified
   * @default false
   */
  is_verified: boolean;
  /**
   * Is active
   * @default true
   */
  is_active: boolean;
  /**
   * Is testing
   * @default false
   */
  is_testing: boolean;
  /**
   * Is archived
   * @default false
   */
  is_archived: boolean;
  /**
   * Verification status
   * @minLength 1
   */
  verification_status?: string | null;
  themes: string[];
  /** @default [] */
  amenities: string[];
  /** Legal info */
  legal_info: Record<string, string | null>;
  /**
   * Booking count
   * @default 0
   */
  booking_count: number;
  /**
   * Rating
   * @format decimal
   */
  rating?: string | null;
  /**
   * Review count
   * @default 0
   */
  review_count: number;
  /**
   * Available rooms
   * @default 0
   */
  available_rooms: number;
  /**
   * Total estimated price
   * @format decimal
   */
  total_estimated_price?: string | null;
  matching_rooms?: HotelSearchMatchingRoom[];
  /**
   * Check in time
   * @minLength 1
   */
  check_in_time?: string | null;
  /**
   * Check out time
   * @minLength 1
   */
  check_out_time?: string | null;
  /**
   * Cancellation policy
   * @minLength 1
   */
  cancellation_policy?: string | null;
  /**
   * Policies
   * @default {}
   */
  policies: Record<string, string | null>;
  /**
   * Currency
   * @minLength 1
   */
  currency?: string | null;
  /**
   * Timezone
   * @minLength 1
   */
  timezone?: string | null;
  /** Latitude */
  latitude?: number | null;
  /** Longitude */
  longitude?: number | null;
  /**
   * Min price
   * @format decimal
   */
  min_price?: string | null;
  img: string[];
  /**
   * Is favorite
   * @default false
   */
  is_favorite: boolean;
  /** Organization */
  organization: Record<string, string | null>;
  /** Partner user */
  partner_user?: Record<string, string | null>;
  /** Property detail */
  property_detail: Record<string, string | null>;
  /**
   * Tenant schema
   * @minLength 1
   */
  tenant_schema?: string | null;
  /**
   * Created at
   * @format date-time
   */
  created_at?: string | null;
  /**
   * Updated at
   * @format date-time
   */
  updated_at?: string | null;
  /** @default [] */
  room_types: Record<string, string | null>[];
  /** @default [] */
  reviews: Record<string, string | null>[];
}

export interface HotelCalendar {
  /** Room id */
  room_id: number;
  /**
   * Room name
   * @minLength 1
   */
  room_name?: string | null;
  /**
   * Date
   * @format date
   */
  date: string;
  /**
   * Status
   * @minLength 1
   */
  status: string;
  /** Room type id */
  room_type_id?: number | null;
  /**
   * Room type name
   * @minLength 1
   */
  room_type_name?: string | null;
  /**
   * Room type preset
   * @minLength 1
   */
  room_type_preset?: string | null;
  /** Capacity */
  capacity?: number | null;
  /**
   * Price per night
   * @format decimal
   */
  price_per_night?: string | null;
  /**
   * Sellability
   * @minLength 1
   */
  sellability?: string | null;
  /**
   * Status reason
   * @minLength 1
   */
  status_reason?: string | null;
}

export interface ReviewList {
  /** Id */
  id: number;
  /**
   * Guest name
   * @minLength 1
   */
  guest_name: string;
  /**
   * Rating
   * @format decimal
   */
  rating: string;
  /**
   * Text
   * @minLength 1
   */
  text: string;
  /**
   * Hotel response
   * @minLength 1
   */
  hotel_response?: string | null;
  /**
   * Created at
   * @format date-time
   */
  created_at: string;
}

export interface StayPrice {
  /** Nights */
  nights: number;
  /**
   * Price per night
   * @format decimal
   */
  price_per_night: string;
  /**
   * Total price
   * @format decimal
   */
  total_price: string;
  /**
   * Hold amount
   * @format decimal
   */
  hold_amount: string;
  /**
   * Remaining on arrival
   * @format decimal
   */
  remaining_on_arrival: string;
}

export interface MarkAsRead {
  notification_ids?: string[];
}

export interface ClientDevice {
  /**
   * Fcm token
   * @minLength 1
   * @maxLength 255
   */
  fcm_token: string;
  /** Device type */
  device_type: "ios" | "android";
}

export interface PartnerDevice {
  /**
   * Fcm token
   * @minLength 1
   * @maxLength 255
   */
  fcm_token: string;
  /** Device type */
  device_type: "ios" | "android";
}

export interface PmsOtpSendResponse {
  /**
   * Detail
   * @minLength 1
   */
  detail: string;
  /**
   * Phone number
   * @minLength 1
   */
  phone_number: string;
  /**
   * Expires in
   * @minLength 1
   */
  expires_in: string;
}

export interface PlatformUser {
  /** Id */
  id: number;
  /**
   * Phone number
   * @minLength 1
   */
  phone_number: string;
  /**
   * First name
   * @minLength 1
   */
  first_name?: string | null;
  /**
   * Last name
   * @minLength 1
   */
  last_name?: string | null;
  /** Is active */
  is_active: boolean;
  /**
   * Created at
   * @format date-time
   */
  created_at: string;
}

export type NullableOrganization = {
  /** Id */
  id: number;
  /**
   * Name
   * @minLength 1
   * @maxLength 200
   */
  name: string;
  /**
   * Slug
   * @format slug
   * @minLength 1
   * @maxLength 100
   * @pattern ^[-a-zA-Z0-9_]+$
   */
  slug: string;
  /**
   * Schema name
   * @minLength 1
   */
  schema_name: string;
  /** Is active */
  is_active: boolean;
  /**
   * Created at
   * @format date-time
   */
  created_at: string;
  /**
   * Updated at
   * @format date-time
   */
  updated_at: string;
} | null;

export interface Organization {
  /** Id */
  id: number;
  /**
   * Name
   * @minLength 1
   * @maxLength 200
   */
  name: string;
  /**
   * Slug
   * @format slug
   * @minLength 1
   * @maxLength 100
   * @pattern ^[-a-zA-Z0-9_]+$
   */
  slug: string;
  /**
   * Schema name
   * @minLength 1
   */
  schema_name: string;
  /** Is active */
  is_active: boolean;
  /**
   * Created at
   * @format date-time
   */
  created_at: string;
  /**
   * Updated at
   * @format date-time
   */
  updated_at: string;
}

export interface PmsLoginResponse {
  /**
   * Access
   * @minLength 1
   */
  access: string;
  /**
   * Refresh
   * @minLength 1
   */
  refresh: string;
  user: PlatformUser;
  organization?: NullableOrganization;
  organizations?: Organization[];
  /**
   * Has properties
   * @default false
   */
  has_properties?: boolean;
}

export interface PmsMeResponse {
  user: PlatformUser;
  organization?: NullableOrganization;
  organizations: Organization[];
  /**
   * Has properties
   * @default false
   */
  has_properties?: boolean;
}

export interface PlatformUserUpdate {
  /**
   * First name
   * @maxLength 100
   */
  first_name?: string;
  /**
   * Last name
   * @maxLength 100
   */
  last_name?: string;
  /**
   * Phone
   * @maxLength 32
   */
  phone?: string;
}

export interface AuthenticatedOrgCreate {
  /**
   * Name
   * @minLength 1
   * @maxLength 200
   */
  name: string;
}

export interface OrganizationCreateResponse {
  /** Id */
  id: number;
  /**
   * Name
   * @minLength 1
   * @maxLength 200
   */
  name: string;
  /**
   * Slug
   * @format slug
   * @minLength 1
   * @maxLength 100
   * @pattern ^[-a-zA-Z0-9_]+$
   */
  slug: string;
  /**
   * Schema name
   * @minLength 1
   */
  schema_name: string;
  /** Is active */
  is_active: boolean;
  /**
   * Created at
   * @format date-time
   */
  created_at: string;
  /**
   * Updated at
   * @format date-time
   */
  updated_at: string;
  /**
   * Access
   * @minLength 1
   */
  access: string;
  /**
   * Refresh
   * @minLength 1
   */
  refresh: string;
}

export interface OrganizationUpdate {
  /**
   * Name
   * @maxLength 200
   */
  name?: string;
  /**
   * Slug
   * @maxLength 100
   */
  slug?: string;
}

export interface OrganizationMember {
  /** Id */
  id: number;
  /** User id */
  user_id: number;
  /** Organization id */
  organization_id: number;
  /**
   * Role
   * @minLength 1
   */
  role: string;
  /**
   * Phone number
   * @minLength 1
   */
  phone_number?: string | null;
  /**
   * First name
   * @minLength 1
   */
  first_name?: string | null;
  /**
   * Last name
   * @minLength 1
   */
  last_name?: string | null;
  /**
   * Created at
   * @format date-time
   */
  created_at: string;
}

export interface AddMember {
  /**
   * Phone number
   * @minLength 1
   * @maxLength 32
   */
  phone_number: string;
  /**
   * Role
   * @default "manager"
   */
  role?: "owner" | "admin" | "manager" | "receptionist" | "housekeeping";
}

export interface UpdateMemberRole {
  /** Role */
  role: "owner" | "admin" | "manager" | "receptionist" | "housekeeping";
}

export interface PmsSwitchOrg {
  /** Organization id */
  organization_id: number;
}

export interface PmsSwitchOrgResponse {
  /**
   * Access
   * @minLength 1
   */
  access: string;
  /**
   * Refresh
   * @minLength 1
   */
  refresh: string;
  organization: Organization;
  /**
   * Has properties
   * @default false
   */
  has_properties?: boolean;
}

export interface PmsTokenRefreshResponse {
  /**
   * Access
   * @minLength 1
   */
  access: string;
  /**
   * Refresh
   * @minLength 1
   */
  refresh: string;
}

export interface Guest {
  /** Id */
  id: number;
  /**
   * First name
   * @minLength 1
   * @maxLength 100
   */
  first_name: string;
  /**
   * Last name
   * @maxLength 100
   */
  last_name?: string | null;
  /**
   * Email
   * @format email
   */
  email?: string | null;
  /**
   * Phone
   * @maxLength 32
   */
  phone?: string | null;
  /**
   * Id document
   * @default {}
   */
  id_document: string;
  /**
   * Preferences
   * @default {}
   */
  preferences: string;
  /**
   * Is vip
   * @default false
   */
  is_vip?: boolean;
  /**
   * Is blacklisted
   * @default false
   */
  is_blacklisted?: boolean;
  /** Notes */
  notes?: string | null;
  /**
   * Created at
   * @format date-time
   */
  created_at: string;
  /**
   * Updated at
   * @format date-time
   */
  updated_at: string;
}

export interface BookingComConnection {
  /** Id */
  id?: number;
  /** Property id */
  property_id?: number;
  /**
   * Enabled
   * @default true
   */
  enabled?: boolean;
  /**
   * Bookingcom property id
   * @minLength 1
   * @maxLength 255
   */
  bookingcom_property_id: string;
  /**
   * Api url
   * @minLength 1
   * @maxLength 500
   */
  api_url: string;
  /** Api token */
  api_token?: string | null;
  /** Username */
  username?: string | null;
  /** Password */
  password?: string | null;
  /** Has api token */
  has_api_token?: string;
  /** Has password */
  has_password?: string;
  /**
   * Last successful sync at
   * @format date-time
   */
  last_successful_sync_at?: string | null;
  /**
   * Last synced at
   * @format date-time
   */
  last_synced_at?: string | null;
  /**
   * Last sync status
   * @minLength 1
   */
  last_sync_status?: string | null;
  /**
   * Last error
   * @minLength 1
   */
  last_error?: string | null;
  /**
   * Created at
   * @format date-time
   */
  created_at?: string;
  /**
   * Updated at
   * @format date-time
   */
  updated_at?: string;
}

export interface BookingComRoomMapping {
  /** Id */
  id?: number;
  /** Property id */
  property_id?: number;
  /**
   * External room id
   * @minLength 1
   * @maxLength 255
   */
  external_room_id: string;
  /** Room id */
  room_id?: number | null;
  /** Room type id */
  room_type_id?: number | null;
  /**
   * Is active
   * @default true
   */
  is_active?: boolean;
  /**
   * Created at
   * @format date-time
   */
  created_at?: string;
  /**
   * Updated at
   * @format date-time
   */
  updated_at?: string;
}

export type BookingComSyncRun = {
  /** Id */
  id?: number;
  /** Property id */
  property_id?: number;
  /** Connection id */
  connection_id?: number | null;
  /**
   * Triggered by
   * @minLength 1
   */
  triggered_by?: string;
  /**
   * Status
   * @minLength 1
   */
  status?: string;
  /** Stats */
  stats?: string;
  /**
   * Error message
   * @minLength 1
   */
  error_message?: string | null;
  /**
   * Sync cursor from
   * @format date-time
   */
  sync_cursor_from?: string | null;
  /**
   * Sync cursor to
   * @format date-time
   */
  sync_cursor_to?: string | null;
  /**
   * Started at
   * @format date-time
   */
  started_at?: string | null;
  /**
   * Finished at
   * @format date-time
   */
  finished_at?: string | null;
};

export interface BookingComSyncError {
  /** Id */
  id?: number;
  /** Sync run id */
  sync_run_id?: number;
  /** Property id */
  property_id?: number;
  /**
   * External reservation id
   * @minLength 1
   */
  external_reservation_id?: string | null;
  /**
   * External room id
   * @minLength 1
   */
  external_room_id?: string | null;
  /**
   * Code
   * @minLength 1
   */
  code?: string;
  /**
   * Message
   * @minLength 1
   */
  message?: string;
  /** Payload */
  payload?: string;
  /**
   * Created at
   * @format date-time
   */
  created_at?: string;
}

export interface BookingComStatus {
  connection: BookingComConnection;
  latest_run: BookingComSyncRun;
  recent_errors: BookingComSyncError[];
}

export interface BookingComManualSync {
  /**
   * Full resync
   * @default false
   */
  full_resync?: boolean;
}

export interface BookingHistory {
  /** Id */
  id: number;
  /** Booking id */
  booking_id: number;
  /**
   * Action
   * @minLength 1
   */
  action: string;
  /** Previous value */
  previous_value: string;
  /** New value */
  new_value: string;
  /** User id */
  user_id?: number | null;
  /**
   * Created at
   * @format date-time
   */
  created_at: string;
}

export interface MealPlanChange {
  /** Meal plan */
  meal_plan: "RO" | "BB" | "HB" | "FB" | "AI" | "UAI";
}

export interface MoveBooking {
  /** New room id */
  new_room_id: number;
  /**
   * New check in
   * @format date
   */
  new_check_in?: string | null;
  /**
   * New check out
   * @format date
   */
  new_check_out?: string | null;
}

export interface CalendarSlot {
  /** Id */
  id: number;
  /** Room id */
  room_id: number;
  /**
   * Room number
   * @minLength 1
   */
  room_number?: string | null;
  /**
   * Room type name
   * @minLength 1
   */
  room_type_name?: string | null;
  /**
   * Date
   * @format date
   */
  date: string;
  /**
   * Status
   * @minLength 1
   */
  status: string;
  /**
   * Hold expires at
   * @format date-time
   */
  hold_expires_at?: string | null;
}

export interface RoomIds {
  /** @minItems 1 */
  room_ids: number[];
  /**
   * From date
   * @format date
   */
  from_date: string;
  /**
   * To date
   * @format date
   */
  to_date: string;
  /**
   * Hold duration minutes
   * @default 30
   */
  hold_duration_minutes?: number;
}

export interface PropertyImage {
  /** Id */
  id?: number;
  /** Property id */
  property_id?: number;
  /**
   * Image url
   * @minLength 1
   */
  image_url?: string;
  /**
   * Order
   * @default 0
   */
  order?: number;
  /**
   * Created at
   * @format date-time
   */
  created_at?: string;
}

export interface RoomMassUpdateItem {
  /** Id */
  id: number;
  /**
   * Room number
   * @minLength 1
   * @maxLength 20
   */
  room_number?: string;
  /**
   * Display name
   * @maxLength 200
   */
  display_name?: string | null;
  /** Floor */
  floor?: number;
  /**
   * Area
   * @format decimal
   */
  area?: string | null;
  /** Bedroom count */
  bedroom_count?: number;
  /** Beds */
  beds?: string;
  amenities?: string[];
  /** Condition */
  condition?: "clean" | "dirty" | "inspection" | "maintenance";
  /** Availability */
  availability?: "available" | "occupied" | "blocked";
  /** Capacity */
  capacity?: number;
  /** Meal plan */
  meal_plan?: "RO" | "BB" | "HB" | "FB" | "AI" | "UAI";
  /**
   * Base price
   * @format decimal
   */
  base_price?: string | null;
  /** Currency */
  currency?: string | null;
  /** Cover photo index */
  cover_photo_index?: number;
  /** Is active */
  is_active?: boolean;
}

export type PrefectureDistrictList = {
  /**
   * Guid
   * @format uuid
   */
  guid?: string | null;
  /** Title */
  title?: string | null;
};

export interface PrefectureList {
  /**
   * Guid
   * @format uuid
   */
  guid: string;
  /**
   * Title
   * @minLength 1
   */
  title: string;
  district?: PrefectureDistrictList;
}

export interface ApartmentAdminUpdate {
  /**
   * Title
   * @minLength 1
   */
  title?: string;
  /**
   * Price
   * @format decimal
   */
  price?: string;
  /** Currency */
  currency?: "USD" | "UZS";
  /**
   * Latitude
   * @format decimal
   */
  latitude?: string | null;
  /**
   * Longitude
   * @format decimal
   */
  longitude?: string | null;
  /** City */
  city?: string | null;
  /** Country */
  country?: string | null;
  /** Region id */
  region_id?: number | null;
  /** District id */
  district_id?: number | null;
  /**
   * Prefecture id
   * @format uuid
   */
  prefecture_id?: string | null;
  services?: string[];
  img?: string[];
  /**
   * Description ru
   * @minLength 1
   */
  description_ru?: string;
  /**
   * Description uz
   * @minLength 1
   */
  description_uz?: string;
  /**
   * Description en
   * @minLength 1
   */
  description_en?: string;
  /** Check in */
  check_in?: string;
  /** Check out */
  check_out?: string;
  /** Is allowed alcohol */
  is_allowed_alcohol?: boolean;
  /** Is allowed corporate */
  is_allowed_corporate?: boolean;
  /** Is allowed pets */
  is_allowed_pets?: boolean;
  /** Is quiet hours */
  is_quiet_hours?: boolean;
  /** Apartment number */
  apartment_number?: string;
  /** Home number */
  home_number?: string;
  /** Entrance number */
  entrance_number?: string;
  /** Floor number */
  floor_number?: string;
  /** Pass code */
  pass_code?: string;
  /** Guests */
  guests?: number;
  /** Rooms */
  rooms?: number;
  /** Beds */
  beds?: number;
  /** Bathrooms */
  bathrooms?: number;
  /** Is verified */
  is_verified?: boolean;
  /**
   * Verified at
   * @format date-time
   */
  verified_at?: string | null;
  /** Verification status */
  verification_status?: string;
  /** Is archived */
  is_archived?: boolean;
  /** Is recommended */
  is_recommended?: boolean;
  /** Is testing */
  is_testing?: boolean;
  /** Partner user id */
  partner_user_id?: number | null;
  /** Verified by user id */
  verified_by_user_id?: number | null;
  /**
   * Comment count
   * @min 0
   */
  comment_count?: number;
  /** Legacy property id */
  legacy_property_id?: number | null;
}

export type ApartmentPropertyLocationRegionOutput = {
  /** Id */
  id?: number | null;
  /**
   * Guid
   * @format uuid
   */
  guid?: string | null;
  /** Name */
  name?: string | null;
};

export type ApartmentPropertyLocationDistrictOutput = {
  /** Id */
  id?: number | null;
  /**
   * Guid
   * @format uuid
   */
  guid?: string | null;
  /** Name */
  name?: string | null;
};

export type ApartmentPropertyLocationPrefectureOutput = {
  /** Id */
  id?: string | null;
  /** Name */
  name?: string | null;
};

export interface ApartmentPropertyLocationOutput {
  /** Latitude */
  latitude?: string | null;
  /** Longitude */
  longitude?: string | null;
  /** Country */
  country?: string | null;
  /** City */
  city?: string | null;
  region: ApartmentPropertyLocationRegionOutput;
  district: ApartmentPropertyLocationDistrictOutput;
  prefecture: ApartmentPropertyLocationPrefectureOutput;
}

export interface ApartmentAdminPropertyDetail {
  /**
   * Description ru
   * @minLength 1
   */
  description_ru?: string | null;
  /**
   * Description uz
   * @minLength 1
   */
  description_uz?: string | null;
  /**
   * Description en
   * @minLength 1
   */
  description_en?: string | null;
  /**
   * Apartment number
   * @minLength 1
   */
  apartment_number?: string | null;
  /**
   * Home number
   * @minLength 1
   */
  home_number?: string | null;
  /**
   * Entrance number
   * @minLength 1
   */
  entrance_number?: string | null;
  /**
   * Floor number
   * @minLength 1
   */
  floor_number?: string | null;
  /**
   * Pass code
   * @minLength 1
   */
  pass_code?: string | null;
}

export type ApartmentPartnerUser = {
  /** Id */
  id: number;
  /** Role */
  role?: string | null;
  /** First name */
  first_name?: string | null;
  /** Last name */
  last_name?: string | null;
  /** Phone number */
  phone_number?: string | null;
  /** Email */
  email?: string | null;
  /** Username */
  username?: string | null;
  /** Avatar */
  avatar?: string | null;
  /** Is active */
  is_active: boolean;
  /** Is verified */
  is_verified: boolean;
};

export interface ApartmentAdminList {
  /** Id */
  id?: number;
  /**
   * Guid
   * @format uuid
   */
  guid: string;
  /**
   * Title
   * @minLength 1
   */
  title: string;
  img: string[];
  /**
   * Price
   * @format decimal
   */
  price?: string | null;
  /** Currency */
  currency?: string | null;
  /** Latitude */
  latitude?: string | null;
  /** Longitude */
  longitude?: string | null;
  /** Country */
  country?: string | null;
  /** City */
  city?: string | null;
  property_location?: ApartmentPropertyLocationOutput;
  services: (string | null)[];
  /** Region id */
  region_id?: number | null;
  /** District id */
  district_id?: number | null;
  /** Prefecture id */
  prefecture_id?: string | null;
  /** Guests */
  guests?: number | null;
  /** Rooms */
  rooms?: number | null;
  /** Beds */
  beds?: number | null;
  /** Bathrooms */
  bathrooms?: number | null;
  /** Property room */
  property_room?: Record<string, string | null>;
  /** Apartment number */
  apartment_number?: string | null;
  /** Home number */
  home_number?: string | null;
  /** Entrance number */
  entrance_number?: string | null;
  /** Floor number */
  floor_number?: string | null;
  /** Pass code */
  pass_code?: string | null;
  /** Average rating */
  average_rating?: number | null;
  /** Is favorite */
  is_favorite: boolean;
  /** Is allowed corporate */
  is_allowed_corporate: boolean;
  /**
   * Created at
   * @format date-time
   */
  created_at: string;
  /**
   * Property type id
   * @format uuid
   */
  property_type_id: string;
  /** Property type */
  property_type: Record<string, string | null>;
  /** Verification status */
  verification_status?: string | null;
  /** Is recommended */
  is_recommended?: boolean | null;
  /** Is verified */
  is_verified?: boolean;
  /** Is archived */
  is_archived?: boolean;
  /** Is testing */
  is_testing?: boolean;
  property_detail?: ApartmentAdminPropertyDetail;
  partner_user?: ApartmentPartnerUser;
}

export interface CottageMonthlyPriceItem {
  /**
   * Month from
   * @format date
   */
  month_from?: string | null;
  /**
   * Month to
   * @format date
   */
  month_to?: string | null;
  /**
   * Price per person
   * @format decimal
   */
  price_per_person?: string | null;
  /**
   * Price on working days
   * @format decimal
   */
  price_on_working_days?: string | null;
  /**
   * Price on weekends
   * @format decimal
   */
  price_on_weekends?: string | null;
}

export type CottagePartnerUserUpdate = {
  /** Id */
  id?: number | null;
  /** Role */
  role?: string | null;
  /** First name */
  first_name?: string | null;
  /** Last name */
  last_name?: string | null;
  /** Phone number */
  phone_number?: string | null;
  /** Email */
  email?: string | null;
  /** Username */
  username?: string | null;
  /** Avatar */
  avatar?: string | null;
  /** Is active */
  is_active?: boolean;
  /** Is verified */
  is_verified?: boolean;
};

export interface CottageAdminUpdate {
  /** Title */
  title?: string;
  /** Currency */
  currency?: "USD" | "UZS";
  /**
   * Weekend only sunday inclusive
   * @default false
   */
  weekend_only_sunday_inclusive?: boolean;
  /**
   * Price per person
   * @format decimal
   */
  price_per_person?: string | null;
  /**
   * Price on working days
   * @format decimal
   */
  price_on_working_days?: string | null;
  /**
   * Price on weekends
   * @format decimal
   */
  price_on_weekends?: string | null;
  /**
   * Month from
   * @format date
   */
  month_from?: string | null;
  /**
   * Month to
   * @format date
   */
  month_to?: string | null;
  /**
   * Next month from
   * @format date
   */
  next_month_from?: string | null;
  /**
   * Next month to
   * @format date
   */
  next_month_to?: string | null;
  /** Latitude */
  latitude?: string | null;
  /** Longitude */
  longitude?: string | null;
  /** Country */
  country?: string | null;
  /** City */
  city?: string | null;
  /** Region id */
  region_id?: string | null;
  /** District id */
  district_id?: string | null;
  /** Prefecture id */
  prefecture_id?: string | null;
  /** Description en */
  description_en?: string | null;
  /** Description ru */
  description_ru?: string | null;
  /** Description uz */
  description_uz?: string | null;
  /** Check in */
  check_in?: string | null;
  /** Check out */
  check_out?: string | null;
  /** Is allowed alcohol */
  is_allowed_alcohol?: boolean;
  /** Is allowed corporate */
  is_allowed_corporate?: boolean;
  /** Is allowed pets */
  is_allowed_pets?: boolean;
  /** Is quiet hours */
  is_quiet_hours?: boolean;
  services?: (string | null)[];
  /** Guests */
  guests?: number | null;
  /** Rooms */
  rooms?: number | null;
  /** Beds */
  beds?: number | null;
  /** Bathrooms */
  bathrooms?: number | null;
  img?: string[];
  price?: CottageMonthlyPriceItem[];
  /** Is verified */
  is_verified?: boolean;
  /**
   * Verified at
   * @format date-time
   */
  verified_at?: string | null;
  /** Verification status */
  verification_status?: string | null;
  /** Is archived */
  is_archived?: boolean;
  /** Is recommended */
  is_recommended?: boolean;
  /** Is testing */
  is_testing?: boolean;
  partner_user?: CottagePartnerUserUpdate;
  /** Verified by user id */
  verified_by_user_id?: number | null;
  /**
   * Comment count
   * @min 0
   */
  comment_count?: number;
  /** Legacy property id */
  legacy_property_id?: number | null;
}

export type CottagePropertyLocationRegionOutput = {
  /** Id */
  id?: number | null;
  /**
   * Guid
   * @format uuid
   */
  guid?: string | null;
  /** Name */
  name?: string | null;
};

export type CottagePropertyLocationDistrictOutput = {
  /** Id */
  id?: number | null;
  /**
   * Guid
   * @format uuid
   */
  guid?: string | null;
  /** Name */
  name?: string | null;
};

export type CottagePropertyLocationPrefectureOutput = {
  /** Id */
  id?: string | null;
  /** Name */
  name?: string | null;
};

export interface CottagePropertyLocationOutput {
  /** Latitude */
  latitude?: string | null;
  /** Longitude */
  longitude?: string | null;
  /** Country */
  country?: string | null;
  /** City */
  city?: string | null;
  region: CottagePropertyLocationRegionOutput;
  district: CottagePropertyLocationDistrictOutput;
  prefecture: CottagePropertyLocationPrefectureOutput;
}

export type RawRegion = {
  /** Id */
  id?: number | null;
  /**
   * Guid
   * @format uuid
   */
  guid?: string | null;
  /** Title */
  title?: string | null;
  /** Img */
  img?: string | null;
};

export type RawDistrict = {
  /** Id */
  id?: number | null;
  /** Region id */
  region_id?: number | null;
  /**
   * Guid
   * @format uuid
   */
  guid?: string | null;
  /** Title */
  title?: string | null;
  region?: RawRegion;
};

export interface CottageAdminPropertyDetail {
  /**
   * Description ru
   * @minLength 1
   */
  description_ru?: string | null;
  /**
   * Description uz
   * @minLength 1
   */
  description_uz?: string | null;
  /**
   * Description en
   * @minLength 1
   */
  description_en?: string | null;
  /**
   * Check in
   * @minLength 1
   */
  check_in?: string | null;
  /**
   * Check out
   * @minLength 1
   */
  check_out?: string | null;
  /** Is allowed alcohol */
  is_allowed_alcohol: boolean;
  /** Is allowed corporate */
  is_allowed_corporate: boolean;
  /** Is allowed pets */
  is_allowed_pets: boolean;
  /** Is quiet hours */
  is_quiet_hours: boolean;
}

export type CottagePartnerUser = {
  /** Id */
  id: number;
  /** Role */
  role?: string | null;
  /** First name */
  first_name?: string | null;
  /** Last name */
  last_name?: string | null;
  /** Phone number */
  phone_number?: string | null;
  /** Email */
  email?: string | null;
  /** Username */
  username?: string | null;
  /** Avatar */
  avatar?: string | null;
  /** Is active */
  is_active: boolean;
  /** Is verified */
  is_verified: boolean;
};

export interface CottageAdminList {
  /** Id */
  id?: number;
  /**
   * Guid
   * @format uuid
   */
  guid: string;
  /**
   * Title
   * @minLength 1
   */
  title: string;
  img: string[];
  /**
   * Price per person
   * @format decimal
   */
  price_per_person?: string | null;
  /**
   * Price on working days
   * @format decimal
   */
  price_on_working_days?: string | null;
  /**
   * Price on weekends
   * @format decimal
   */
  price_on_weekends?: string | null;
  /** Currency */
  currency?: string | null;
  /** Latitude */
  latitude?: string | null;
  /** Longitude */
  longitude?: string | null;
  /** Country */
  country?: string | null;
  /** City */
  city?: string | null;
  property_location?: CottagePropertyLocationOutput;
  services: (string | null)[];
  region: RawRegion;
  district: RawDistrict;
  /** Prefecture id */
  prefecture_id?: string | null;
  /** Guests */
  guests?: number | null;
  /** Rooms */
  rooms?: number | null;
  /** Beds */
  beds?: number | null;
  /** Bathrooms */
  bathrooms?: number | null;
  /** Property room */
  property_room?: Record<string, string | null>;
  /** Comment count */
  comment_count: number;
  /** Average rating */
  average_rating?: number | null;
  /** Is favorite */
  is_favorite: boolean;
  /** Is allowed corporate */
  is_allowed_corporate: boolean;
  /**
   * Created at
   * @format date-time
   */
  created_at: string;
  /**
   * Property type id
   * @format uuid
   */
  property_type_id: string;
  /** Property type */
  property_type: Record<string, string | null>;
  price?: (string | null)[];
  /** Verification status */
  verification_status?: string | null;
  /** Weekend only sunday inclusive */
  weekend_only_sunday_inclusive?: boolean | null;
  /** Is recommended */
  is_recommended?: boolean | null;
  /** Is verified */
  is_verified?: boolean;
  /** Is archived */
  is_archived?: boolean;
  /** Is testing */
  is_testing?: boolean;
  /** Description */
  description?: string | null;
  property_detail?: CottageAdminPropertyDetail;
  partner_user?: CottagePartnerUser;
}

export interface DistrictList {
  /** Id */
  id?: number | null;
  /** Region id */
  region_id?: number | null;
  /**
   * Guid
   * @format uuid
   */
  guid?: string | null;
  /** Title */
  title?: string | null;
  region?: RawRegion;
}

export interface PropertyHotelAdminList {
  /** Id */
  id?: number;
  /**
   * Guid
   * @minLength 1
   */
  guid?: string;
  /**
   * Title
   * @minLength 1
   */
  title?: string;
  /**
   * Description
   * @minLength 1
   */
  description?: string | null;
  /**
   * Description uz
   * @minLength 1
   */
  description_uz?: string | null;
  /**
   * Description ru
   * @minLength 1
   */
  description_ru?: string | null;
  /**
   * Description en
   * @minLength 1
   */
  description_en?: string | null;
  /**
   * Address
   * @minLength 1
   */
  address?: string | null;
  /** @default [] */
  img?: string[];
  /** Star rating */
  star_rating?: number | null;
  /**
   * Weel classification
   * @minLength 1
   */
  weel_classification?: string | null;
  /** @default [] */
  themes?: string[];
  /**
   * City
   * @minLength 1
   */
  city?: string | null;
  /**
   * Country
   * @minLength 1
   */
  country?: string | null;
  /** Latitude */
  latitude?: number | null;
  /** Longitude */
  longitude?: number | null;
  /**
   * Min price
   * @format decimal
   */
  min_price?: string | null;
  /** Currency */
  currency?: string | null;
  /** Timezone */
  timezone?: string | null;
  /**
   * Rating
   * @format decimal
   */
  rating?: string | null;
  /**
   * Review count
   * @default 0
   */
  review_count?: number;
  /**
   * Booking count
   * @default 0
   */
  booking_count?: number;
  /**
   * Available rooms
   * @default 0
   */
  available_rooms?: number;
  /** @default [] */
  amenities?: string[];
  /**
   * Legal info
   * @default {}
   */
  legal_info?: Record<string, string | null>;
  /**
   * Check in time
   * @minLength 1
   */
  check_in_time?: string | null;
  /**
   * Check out time
   * @minLength 1
   */
  check_out_time?: string | null;
  /**
   * Cancellation policy
   * @minLength 1
   */
  cancellation_policy?: string | null;
  /**
   * Policies
   * @default {}
   */
  policies?: Record<string, string | null>;
  /** Is favorite */
  is_favorite?: boolean;
  /** Is verified */
  is_verified?: boolean;
  /** Is active */
  is_active?: boolean;
  /** Is testing */
  is_testing?: boolean;
  /** Is archived */
  is_archived?: boolean;
  /** Is recommended */
  is_recommended?: boolean;
  /** Verification status */
  verification_status?: string | null;
  /** Tenant schema */
  tenant_schema?: string | null;
  /**
   * Organization
   * @default {}
   */
  organization?: Record<string, string | null>;
  /**
   * Owner user
   * @default {}
   */
  owner_user?: Record<string, string | null>;
  /**
   * Property detail
   * @default {}
   */
  property_detail?: Record<string, string | null>;
  /**
   * Created at
   * @format date-time
   */
  created_at?: string | null;
  /**
   * Updated at
   * @format date-time
   */
  updated_at?: string | null;
}

export interface HotelAdminPropertyDetail {
  /**
   * Description ru
   * @minLength 1
   */
  description_ru?: string | null;
  /**
   * Description uz
   * @minLength 1
   */
  description_uz?: string | null;
  /**
   * Description en
   * @minLength 1
   */
  description_en?: string | null;
  /** Address */
  address?: string | null;
  /** Check in time */
  check_in_time?: string | null;
  /** Check out time */
  check_out_time?: string | null;
  /** Cancellation policy */
  cancellation_policy?: string | null;
  /** Timezone */
  timezone?: string | null;
  amenities: string[];
  /** Is allowed alcohol */
  is_allowed_alcohol: boolean;
  /** Is allowed pets */
  is_allowed_pets: boolean;
  /** Is quiet hours */
  is_quiet_hours: boolean;
  /** Star rating */
  star_rating?: number | null;
}

export interface HotelAdminUpdate {
  /** Organization id */
  organization_id?: number | null;
  /** Owner user id */
  owner_user_id?: number | null;
  /**
   * Tenant schema
   * @minLength 1
   */
  tenant_schema?: string;
  /**
   * Title
   * @minLength 1
   */
  title?: string;
  /** Description ru */
  description_ru?: string | null;
  /** Description uz */
  description_uz?: string | null;
  /** Description en */
  description_en?: string | null;
  /** Address */
  address?: string | null;
  /** City */
  city?: string | null;
  /** Country */
  country?: string | null;
  /**
   * Latitude
   * @format decimal
   */
  latitude?: string | null;
  /**
   * Longitude
   * @format decimal
   */
  longitude?: string | null;
  /**
   * Star rating
   * @min 1
   * @max 7
   */
  star_rating?: number | null;
  amenities?: string[];
  /** Check in time */
  check_in_time?: string | null;
  /** Check out time */
  check_out_time?: string | null;
  /** Cancellation policy */
  cancellation_policy?: string | null;
  /** Is quiet hours */
  is_quiet_hours?: boolean;
  /** Is allowed alcohol */
  is_allowed_alcohol?: boolean;
  /** Is allowed pets */
  is_allowed_pets?: boolean;
  /** Quiet hours */
  quiet_hours?: boolean;
  /** Alcohol allowed */
  alcohol_allowed?: boolean;
  /** Pets allowed */
  pets_allowed?: boolean;
  /** Timezone */
  timezone?: string | null;
  /** Is active */
  is_active?: boolean;
  /** Is testing */
  is_testing?: boolean;
  /** Is verified */
  is_verified?: boolean;
  /** Is archived */
  is_archived?: boolean;
  /** Is recommended */
  is_recommended?: boolean;
  /** Verification status */
  verification_status?: "waiting" | "accepted" | "cancelled" | null;
  img?: string[];
  /** Legal info */
  legal_info?: Record<string, string | null>;
  /** Currency */
  currency?: string | null;
  property_detail?: HotelAdminPropertyDetail;
}

export interface RegionList {
  /** Id */
  id?: number | null;
  /**
   * Guid
   * @format uuid
   */
  guid?: string | null;
  /** Title */
  title?: string | null;
  /** Img */
  img?: string | null;
}

export interface ApartmentList {
  /** Id */
  id?: number;
  /**
   * Guid
   * @format uuid
   */
  guid: string;
  /**
   * Title
   * @minLength 1
   */
  title: string;
  img: string[];
  /**
   * Price
   * @format decimal
   */
  price?: string | null;
  /** Currency */
  currency?: string | null;
  /** Latitude */
  latitude?: string | null;
  /** Longitude */
  longitude?: string | null;
  /** Country */
  country?: string | null;
  /** City */
  city?: string | null;
  property_location?: ApartmentPropertyLocationOutput;
  services: (string | null)[];
  /** Region id */
  region_id?: number | null;
  /** District id */
  district_id?: number | null;
  /** Prefecture id */
  prefecture_id?: string | null;
  /** Guests */
  guests?: number | null;
  /** Rooms */
  rooms?: number | null;
  /** Beds */
  beds?: number | null;
  /** Bathrooms */
  bathrooms?: number | null;
  /** Property room */
  property_room?: Record<string, string | null>;
  /** Apartment number */
  apartment_number?: string | null;
  /** Home number */
  home_number?: string | null;
  /** Entrance number */
  entrance_number?: string | null;
  /** Floor number */
  floor_number?: string | null;
  /** Pass code */
  pass_code?: string | null;
  /** Average rating */
  average_rating?: number | null;
  /** Is favorite */
  is_favorite: boolean;
  /** Is allowed corporate */
  is_allowed_corporate: boolean;
  /**
   * Created at
   * @format date-time
   */
  created_at: string;
  /**
   * Property type id
   * @format uuid
   */
  property_type_id: string;
  /** Property type */
  property_type: Record<string, string | null>;
}

export interface ApartmentCreate {
  /**
   * Title
   * @minLength 1
   */
  title: string;
  /**
   * Price
   * @format decimal
   */
  price?: string;
  /**
   * Currency
   * @default "UZS"
   */
  currency?: "USD" | "UZS";
  /**
   * Latitude
   * @format decimal
   */
  latitude?: string | null;
  /**
   * Longitude
   * @format decimal
   */
  longitude?: string | null;
  /** Country */
  country?: string | null;
  /** City */
  city?: string | null;
  /** Region id */
  region_id?: number | null;
  /** District id */
  district_id?: number | null;
  /**
   * Prefecture id
   * @format uuid
   */
  prefecture_id?: string | null;
  services?: string[];
  img?: string[];
  /** Apartment number */
  apartment_number: number;
  /** Home number */
  home_number: number;
  /** Entrance number */
  entrance_number: number;
  /** Floor number */
  floor_number: number;
  /** Pass code */
  pass_code: number;
  /**
   * Description ru
   * @minLength 1
   */
  description_ru: string;
  /**
   * Description uz
   * @minLength 1
   */
  description_uz: string;
  /**
   * Description en
   * @minLength 1
   */
  description_en?: string;
  /** Check in */
  check_in: string;
  /** Check out */
  check_out: string;
  /** Is allowed alcohol */
  is_allowed_alcohol: boolean;
  /** Is allowed corporate */
  is_allowed_corporate: boolean;
  /** Is allowed pets */
  is_allowed_pets: boolean;
  /** Is quiet hours */
  is_quiet_hours: boolean;
  /** Guests */
  guests: number;
  /** Rooms */
  rooms: number;
  /** Beds */
  beds: number;
  /** Bathrooms */
  bathrooms: number;
}

export interface ApartmentUpdate {
  /**
   * Title
   * @minLength 1
   */
  title?: string;
  /**
   * Price
   * @format decimal
   */
  price?: string;
  /** Currency */
  currency?: "USD" | "UZS";
  /**
   * Latitude
   * @format decimal
   */
  latitude?: string | null;
  /**
   * Longitude
   * @format decimal
   */
  longitude?: string | null;
  /** City */
  city?: string | null;
  /** Country */
  country?: string | null;
  /** Region id */
  region_id?: number | null;
  /** District id */
  district_id?: number | null;
  /**
   * Prefecture id
   * @format uuid
   */
  prefecture_id?: string | null;
  services?: string[];
  img?: string[];
  /**
   * Description ru
   * @minLength 1
   */
  description_ru?: string;
  /**
   * Description uz
   * @minLength 1
   */
  description_uz?: string;
  /**
   * Description en
   * @minLength 1
   */
  description_en?: string;
  /** Check in */
  check_in?: string;
  /** Check out */
  check_out?: string;
  /** Is allowed alcohol */
  is_allowed_alcohol?: boolean;
  /** Is allowed corporate */
  is_allowed_corporate?: boolean;
  /** Is allowed pets */
  is_allowed_pets?: boolean;
  /** Is quiet hours */
  is_quiet_hours?: boolean;
  /** Apartment number */
  apartment_number?: string;
  /** Home number */
  home_number?: string;
  /** Entrance number */
  entrance_number?: string;
  /** Floor number */
  floor_number?: string;
  /** Pass code */
  pass_code?: string;
  /** Guests */
  guests?: number;
  /** Rooms */
  rooms?: number;
  /** Beds */
  beds?: number;
  /** Bathrooms */
  bathrooms?: number;
}

export interface RawPropertyReviewClient {
  /**
   * Guid
   * @format uuid
   */
  guid?: string | null;
  /** First name */
  first_name?: string | null;
  /** Last name */
  last_name?: string | null;
}

export interface RawPropertyReview {
  /**
   * Guid
   * @format uuid
   */
  guid: string;
  client: RawPropertyReviewClient;
  /**
   * Rating
   * @format decimal
   */
  rating?: string | null;
  /** Comment */
  comment?: string | null;
  /**
   * Created at
   * @format date-time
   */
  created_at: string;
}

export interface RawPropertyReviewCreate {
  /**
   * Rating
   * @format decimal
   */
  rating: string;
  /** Comment */
  comment?: string | null;
}

export interface CottageList {
  /** Id */
  id?: number;
  /**
   * Guid
   * @format uuid
   */
  guid: string;
  /**
   * Title
   * @minLength 1
   */
  title: string;
  img: string[];
  /**
   * Price per person
   * @format decimal
   */
  price_per_person?: string | null;
  /**
   * Price on working days
   * @format decimal
   */
  price_on_working_days?: string | null;
  /**
   * Price on weekends
   * @format decimal
   */
  price_on_weekends?: string | null;
  /** Currency */
  currency?: string | null;
  /** Latitude */
  latitude?: string | null;
  /** Longitude */
  longitude?: string | null;
  /** Country */
  country?: string | null;
  /** City */
  city?: string | null;
  property_location?: CottagePropertyLocationOutput;
  services: (string | null)[];
  region: RawRegion;
  district: RawDistrict;
  /** Prefecture id */
  prefecture_id?: string | null;
  /** Guests */
  guests?: number | null;
  /** Rooms */
  rooms?: number | null;
  /** Beds */
  beds?: number | null;
  /** Bathrooms */
  bathrooms?: number | null;
  /** Property room */
  property_room?: Record<string, string | null>;
  /** Comment count */
  comment_count: number;
  /** Average rating */
  average_rating?: number | null;
  /** Is favorite */
  is_favorite: boolean;
  /** Is allowed corporate */
  is_allowed_corporate: boolean;
  /**
   * Created at
   * @format date-time
   */
  created_at: string;
  /**
   * Property type id
   * @format uuid
   */
  property_type_id: string;
  /** Property type */
  property_type: Record<string, string | null>;
  price?: (string | null)[];
}

export interface PropertyPriceHistogramBucket {
  /**
   * Min price
   * @format decimal
   */
  min_price: string;
  /**
   * Max price
   * @format decimal
   */
  max_price: string;
  /** Count */
  count: number;
}

export interface PropertyPriceHistogram {
  /**
   * Currency
   * @minLength 1
   */
  currency: string;
  /** Total */
  total: number;
  /**
   * Min price
   * @format decimal
   */
  min_price?: string | null;
  /**
   * Max price
   * @format decimal
   */
  max_price?: string | null;
  buckets: PropertyPriceHistogramBucket[];
}

export interface LocationPrefecture {
  /**
   * Guid
   * @format uuid
   */
  guid: string;
  /**
   * Title
   * @minLength 1
   */
  title: string;
}

export interface LocationDistrictList {
  /** Id */
  id?: number | null;
  /**
   * Guid
   * @format uuid
   */
  guid: string;
  /**
   * Title
   * @minLength 1
   */
  title: string;
  prefectures?: LocationPrefecture[];
}

export interface LocationRegionList {
  /** Id */
  id?: number | null;
  /**
   * Guid
   * @format uuid
   */
  guid: string;
  /**
   * Title
   * @minLength 1
   */
  title: string;
  districts?: LocationDistrictList[];
}

export interface RegionsResponse {
  regions: LocationRegionList[];
}

export interface PropertyMapPin {
  /**
   * Guid
   * @minLength 1
   */
  guid: string;
  /**
   * Kind
   * @minLength 1
   */
  kind: string;
  /** Latitude */
  latitude: number;
  /** Longitude */
  longitude: number;
  /**
   * Price
   * @format decimal
   */
  price?: string | null;
  /** Currency */
  currency: string;
  /** Is favorite */
  is_favorite: boolean;
}

export interface PropertyMapCluster {
  /** Latitude */
  latitude: number;
  /** Longitude */
  longitude: number;
  /** Count */
  count: number;
  /**
   * Min price
   * @format decimal
   */
  min_price?: string | null;
  /** Currency */
  currency: string;
}

export interface PropertyMapResponse {
  /** Total */
  total: number;
  /** Truncated */
  truncated: boolean;
  pins: PropertyMapPin[];
  clusters: PropertyMapCluster[];
}

export interface PropertyCard {
  /**
   * Guid
   * @minLength 1
   */
  guid: string;
  /**
   * Kind
   * @minLength 1
   */
  kind: string;
  /**
   * Property type id
   * @minLength 1
   */
  property_type_id?: string | null;
  /** Title */
  title: string;
  img: string[];
  /**
   * Price
   * @format decimal
   */
  price?: string | null;
  /**
   * Price per person
   * @format decimal
   */
  price_per_person?: string | null;
  /** Currency */
  currency: string;
  /** Rating */
  rating?: number | null;
  /** Comment count */
  comment_count: number;
  /** Location label */
  location_label: string;
  /** Guests */
  guests?: number | null;
  /** Star rating */
  star_rating?: number | null;
  /** Latitude */
  latitude?: number | null;
  /** Longitude */
  longitude?: number | null;
  /** Is favorite */
  is_favorite: boolean;
}

export interface ApartmentPartnerList {
  /** Id */
  id?: number;
  /**
   * Guid
   * @format uuid
   */
  guid: string;
  /**
   * Title
   * @minLength 1
   */
  title: string;
  img: string[];
  /**
   * Price
   * @format decimal
   */
  price?: string | null;
  /** Currency */
  currency?: string | null;
  /** Latitude */
  latitude?: string | null;
  /** Longitude */
  longitude?: string | null;
  /** Country */
  country?: string | null;
  /** City */
  city?: string | null;
  property_location?: ApartmentPropertyLocationOutput;
  services: (string | null)[];
  /** Region id */
  region_id?: number | null;
  /** District id */
  district_id?: number | null;
  /** Prefecture id */
  prefecture_id?: string | null;
  /** Guests */
  guests?: number | null;
  /** Rooms */
  rooms?: number | null;
  /** Beds */
  beds?: number | null;
  /** Bathrooms */
  bathrooms?: number | null;
  /** Property room */
  property_room?: Record<string, string | null>;
  /** Apartment number */
  apartment_number?: string | null;
  /** Home number */
  home_number?: string | null;
  /** Entrance number */
  entrance_number?: string | null;
  /** Floor number */
  floor_number?: string | null;
  /** Pass code */
  pass_code?: string | null;
  /** Average rating */
  average_rating?: number | null;
  /** Is favorite */
  is_favorite: boolean;
  /** Is allowed corporate */
  is_allowed_corporate: boolean;
  /**
   * Created at
   * @format date-time
   */
  created_at: string;
  /**
   * Property type id
   * @format uuid
   */
  property_type_id: string;
  /** Property type */
  property_type: Record<string, string | null>;
  /** Verification status */
  verification_status?: string | null;
  /** Is recommended */
  is_recommended?: boolean | null;
}

export interface CottagePartnerList {
  /** Id */
  id?: number;
  /**
   * Guid
   * @format uuid
   */
  guid: string;
  /**
   * Title
   * @minLength 1
   */
  title: string;
  img: string[];
  /**
   * Price per person
   * @format decimal
   */
  price_per_person?: string | null;
  /**
   * Price on working days
   * @format decimal
   */
  price_on_working_days?: string | null;
  /**
   * Price on weekends
   * @format decimal
   */
  price_on_weekends?: string | null;
  /** Currency */
  currency?: string | null;
  /** Latitude */
  latitude?: string | null;
  /** Longitude */
  longitude?: string | null;
  /** Country */
  country?: string | null;
  /** City */
  city?: string | null;
  property_location?: CottagePropertyLocationOutput;
  services: (string | null)[];
  region: RawRegion;
  district: RawDistrict;
  /** Prefecture id */
  prefecture_id?: string | null;
  /** Guests */
  guests?: number | null;
  /** Rooms */
  rooms?: number | null;
  /** Beds */
  beds?: number | null;
  /** Bathrooms */
  bathrooms?: number | null;
  /** Property room */
  property_room?: Record<string, string | null>;
  /** Comment count */
  comment_count: number;
  /** Average rating */
  average_rating?: number | null;
  /** Is favorite */
  is_favorite: boolean;
  /** Is allowed corporate */
  is_allowed_corporate: boolean;
  /**
   * Created at
   * @format date-time
   */
  created_at: string;
  /**
   * Property type id
   * @format uuid
   */
  property_type_id: string;
  /** Property type */
  property_type: Record<string, string | null>;
  price?: (string | null)[];
  /** Verification status */
  verification_status?: string | null;
  /** Weekend only sunday inclusive */
  weekend_only_sunday_inclusive?: boolean | null;
  /** Is recommended */
  is_recommended?: boolean | null;
}

export interface RecommendationItem {
  /**
   * Property guid
   * @format uuid
   */
  property_guid: string;
  /**
   * Property kind
   * @minLength 1
   */
  property_kind: string;
  /** Similarity */
  similarity: number;
}

export interface PropertyServiceList {
  /**
   * Guid
   * @format uuid
   */
  guid?: string | null;
  /** Title */
  title?: string | null;
  /** Icon url */
  icon_url?: string | null;
  /**
   * Category key
   * @minLength 1
   */
  category_key?: string | null;
}

export interface RawPropertyType {
  /**
   * Guid
   * @format uuid
   */
  guid: string;
  /**
   * Title
   * @minLength 1
   */
  title: string;
  /**
   * Icon url
   * @minLength 1
   */
  icon_url?: string | null;
  /**
   * Kind
   * @minLength 1
   */
  kind: string;
}

export interface AdminBanner {
  /**
   * Guid
   * @format uuid
   */
  guid: string;
  /**
   * Html source
   * @minLength 1
   */
  html_source: string;
  /** Image */
  image: string;
  /**
   * Created at
   * @format date-time
   */
  created_at: string;
  /**
   * Updated at
   * @format date-time
   */
  updated_at: string;
}

export interface AdminNews {
  /**
   * Guid
   * @format uuid
   */
  guid: string;
  /** Title */
  title: string;
  /** Body */
  body: string;
  /** Is verified */
  is_verified: boolean;
  /** Verified by user id */
  verified_by_user_id?: number | null;
  /**
   * Verified at
   * @format date-time
   */
  verified_at?: string | null;
  /**
   * Created at
   * @format date-time
   */
  created_at: string;
  /**
   * Updated at
   * @format date-time
   */
  updated_at: string;
  /**
   * Uploaded at
   * @format date-time
   */
  uploaded_at?: string | null;
  /** Views */
  views: number;
  /** Media */
  media: string;
}

export interface AdminStory {
  /**
   * Guid
   * @format uuid
   */
  guid: string;
  /** Property id */
  property_id: string;
  /** Property title */
  property_title: string;
  /** Property kind */
  property_kind: string;
  /** Property img */
  property_img: string;
  /** Partner user id */
  partner_user_id?: number | null;
  /** Partner name */
  partner_name: string;
  /** Is verified */
  is_verified: boolean;
  /** Verified by user id */
  verified_by_user_id?: number | null;
  /**
   * Verified at
   * @format date-time
   */
  verified_at?: string | null;
  /**
   * Created at
   * @format date-time
   */
  created_at: string;
  /**
   * Updated at
   * @format date-time
   */
  updated_at: string;
  /**
   * Expires at
   * @format date-time
   */
  expires_at?: string | null;
  /**
   * Uploaded at
   * @format date-time
   */
  uploaded_at?: string | null;
  /** Views */
  views: number;
  /** Media */
  media: string;
  /** Is platform news */
  is_platform_news: string;
  /** Title */
  title: string;
  /** Body */
  body: string;
}

export interface AdminStoryModerate {
  /** Is verified */
  is_verified: boolean;
}

export interface Story {
  /**
   * Guid
   * @format uuid
   */
  guid: string;
  /** Property id */
  property_id: string;
  /** Property title */
  property_title: string;
  /** Property type guid */
  property_type_guid: string;
  /** Img */
  img: string;
  /** Media */
  media: string;
  /** Is platform news */
  is_platform_news: string;
  /** Title */
  title: string;
  /** Body */
  body: string;
}

export interface PublicBanner {
  /**
   * Guid
   * @format uuid
   */
  guid: string;
  /**
   * Html source
   * @minLength 1
   */
  html_source: string;
  /** Image */
  image: string;
  /**
   * Created at
   * @format date-time
   */
  created_at: string;
  /**
   * Updated at
   * @format date-time
   */
  updated_at: string;
}

export interface StoryDetail {
  /**
   * Guid
   * @format uuid
   */
  guid: string;
  /** Property */
  property: string;
  /** Media */
  media: string;
  /** Views */
  views: string;
}

export interface UserPhoneNumber {
  /**
   * Phone number
   * @minLength 1
   */
  phone_number: string;
}

export interface ResendOTP {
  /**
   * Phone number
   * @minLength 1
   */
  phone_number: string;
}

export interface ClientOTPLoginVerify {
  /**
   * Phone number
   * @minLength 1
   */
  phone_number: string;
  /**
   * Fcm token
   * @minLength 1
   */
  fcm_token?: string | null;
  /** Device type */
  device_type?: "ios" | "android";
  /**
   * Otp code
   * @minLength 4
   * @maxLength 4
   */
  otp_code: string;
}

export interface ClientProfile {
  /** Id */
  id: number;
  /** Guid */
  guid: string;
  /**
   * Phone number
   * @minLength 1
   */
  phone_number: string;
  /**
   * First name
   * @maxLength 255
   */
  first_name?: string;
  /**
   * Last name
   * @maxLength 255
   */
  last_name?: string;
  /** Avatar */
  avatar?: string | null;
  /**
   * Created at
   * @format date-time
   */
  created_at: string;
}

export interface ClientRegister {
  /**
   * Phone number
   * @minLength 1
   */
  phone_number: string;
  /**
   * First name
   * @minLength 2
   * @maxLength 64
   */
  first_name?: string;
  /**
   * Last name
   * @minLength 2
   * @maxLength 64
   */
  last_name?: string;
}

export interface ClientOTPRegistrationVerify {
  /**
   * Phone number
   * @minLength 1
   */
  phone_number: string;
  /**
   * Fcm token
   * @minLength 1
   */
  fcm_token?: string | null;
  /** Device type */
  device_type?: "ios" | "android";
  /**
   * Otp code
   * @minLength 4
   * @maxLength 4
   */
  otp_code: string;
}

export interface PartnerOTPLogin {
  /**
   * Phone number
   * @minLength 1
   */
  phone_number: string;
  /**
   * Fcm token
   * @minLength 1
   */
  fcm_token?: string | null;
  /** Device type */
  device_type?: "ios" | "android";
  /**
   * Otp code
   * @minLength 4
   * @maxLength 4
   */
  otp_code: string;
}

export interface PartnerProfile {
  /** Id */
  id: number;
  /** Guid */
  guid: string;
  /**
   * Username
   * @maxLength 255
   */
  username?: string;
  /**
   * First name
   * @maxLength 255
   */
  first_name?: string;
  /**
   * Last name
   * @maxLength 255
   */
  last_name?: string;
  /**
   * Phone number
   * @minLength 1
   */
  phone_number: string;
  /** Avatar */
  avatar?: string | null;
  /**
   * Created at
   * @format date-time
   */
  created_at: string;
}

export interface PartnerOTPRegister {
  /**
   * Phone number
   * @minLength 1
   */
  phone_number: string;
  /**
   * Username
   * @minLength 2
   */
  username: string;
  /**
   * First name
   * @minLength 2
   * @maxLength 64
   */
  first_name: string;
  /**
   * Last name
   * @minLength 2
   * @maxLength 64
   */
  last_name: string;
  /**
   * Email
   * @format email
   * @minLength 1
   */
  email?: string;
}

export interface PartnerOTPRegisterVerify {
  /**
   * Phone number
   * @minLength 1
   */
  phone_number: string;
  /**
   * Fcm token
   * @minLength 1
   */
  fcm_token?: string | null;
  /** Device type */
  device_type?: "ios" | "android";
  /**
   * Otp code
   * @minLength 4
   * @maxLength 4
   */
  otp_code: string;
}

export interface TokenRefresh {
  /**
   * Refresh
   * @minLength 1
   */
  refresh: string;
}

export type ActivitiesClientActivitiesListData = any;

export type ActivitiesClientActivitiesReadData = any;

export type ActivitiesClientActivitiesAvailabilityListData = any;

export type ActivitiesClientActivitiesBookingsCreateData = any;

export type ActivitiesClientBookingsListData = any;

export type ActivitiesClientBookingsCancelCreateData = any;

export type ActivitiesPartnerActivitiesListData = any;

export type ActivitiesPartnerActivitiesCreateData = any;

export type ActivitiesPartnerActivitiesReadData = any;

export type ActivitiesPartnerActivitiesPartialUpdateData = any;

export type ActivitiesPartnerActivitiesDeleteData = any;

export type ActivitiesPartnerActivitiesCalendarListData = any;

export type ActivitiesPartnerActivitiesImagesListData = any;

export type ActivitiesPartnerActivitiesImagesCreateData = any;

export type ActivitiesPartnerActivitiesImagesDeleteData = any;

export type ActivitiesPartnerActivitiesResourcesListData = any;

export type ActivitiesPartnerActivitiesResourcesCreateData = any;

export type ActivitiesPartnerActivitiesTariffsListData = any;

export type ActivitiesPartnerActivitiesTariffsCreateData = any;

export type ActivitiesPartnerActivitiesWorkingHoursListData = any;

export type ActivitiesPartnerActivitiesWorkingHoursUpdateData = any;

export type ActivitiesPartnerBookingsCompleteCreateData = any;

export type ActivitiesPartnerResourcesPartialUpdateData = any;

export type ActivitiesPartnerResourcesDeleteData = any;

export type ActivitiesPartnerTariffsPartialUpdateData = any;

export type ActivitiesPartnerTariffsDeleteData = any;

export type AdminAuthActivitiesListData = any;

export type AdminAuthActivitiesReadData = any;

export type AdminAuthActivitiesPartialUpdateData = any;

export type AdminAuthActivitiesCalendarListData = any;

export type AdminAuthB2BCompaniesListData = B2BCompany[];

export type AdminAuthB2BCompaniesReadData = B2BCompany;

export type AdminAuthB2BCompaniesUsersListData = B2BUser[];

export type AdminAuthHotelsListData = PropertyHotelCard[];

export type AdminAuthHotelsReadData = Property;

export type AdminAuthHotelsPartialUpdateData = Property;

export type AdminAuthHotelsAnalyticsListData = AnalyticsResponse;

export type AdminAuthHotelsBookingsListData = Booking[];

export type AdminAuthHotelsBookingsCreateCreateData = Booking;

export type AdminAuthHotelsBookingsReadData = Booking;

export type AdminAuthHotelsBookingsPartialUpdateData = Booking;

export type AdminAuthHotelsBookingsAcceptCreateData = Booking;

export type AdminAuthHotelsBookingsCancelCreateData = Booking;

export type AdminAuthHotelsBookingsCheckInCreateData = Booking;

export type AdminAuthHotelsBookingsCheckOutCreateData = Booking;

export type AdminAuthHotelsBookingsMoveCreateData = Booking;

export type AdminAuthHotelsCalendarListData = object[];

export type AdminAuthHotelsClassifyPartialUpdateData = Property;

export type AdminAuthHotelsReviewsListData = Review[];

export type AdminAuthHotelsReviewsHideCreateData = Review;

export type AdminAuthHotelsReviewsRespondCreateData = Review;

export type AdminAuthHotelsRoomTypesListData = RoomType[];

export type AdminAuthHotelsRoomTypesCreateData = RoomType;

export type AdminAuthHotelsRoomsListData = Room[];

export type AdminAuthHotelsRoomsCreateData = Room;

export type AdminAuthHotelsRoomsPartialUpdateData = any;

export type AdminAuthHotelsRoomsImagesCreateData = any;

export type AdminAuthLoginCreateData = any;

export type AdminAuthMeListData = any;

export type AdminAuthRegisterCreateData = AdminUser;

export type AdminAuthTokenRefreshCreateData = any;

export type AdminAuthUsersClientsListData = any;

export type AdminAuthUsersPartnersListData = any;

export type AdminAuthUsersPmsListData = any;

export interface B2BAuthLoginCreateData {
  detail?: string;
  phone?: string;
  expires_in?: string;
}

export interface B2BAuthLoginVerifyCreateData {
  access?: string;
  refresh?: string;
  detail?: string;
  user?: {
    id?: number;
    company_id?: number;
    phone?: string;
    first_name?: string;
    last_name?: string;
    role?: string;
  };
}

export type B2BAuthLogoutCreateData = any;

export interface B2BAuthTokenRefreshCreateData {
  access?: string;
  refresh?: string;
}

export type B2BBudgetRequestsListData = BudgetRequestListResponse;

export type B2BBudgetRequestsCreateData = BudgetRequest;

export type B2BBudgetRequestsReviewCreateData = BudgetRequest;

export type B2BCompanyListData = B2BCompany;

export type B2BCompanyPartialUpdateData = B2BCompany;

export interface B2BDashboardNotificationsListData {
  notifications?: object[];
}

export type B2BDashboardSummaryListData = DashboardSummary;

export type B2BDepartmentsListData = B2BDepartmentSummary[];

export type B2BDepartmentsCreateData = B2BDepartment;

export interface B2BDepartmentsMonthlySpendingListData {
  year?: number;
  month?: number;
  departments?: object[];
}

export type B2BDepartmentsPartialUpdateData = B2BDepartment;

export type B2BDepartmentsDeleteData = any;

export type B2BDepartmentsMoveEmployeesCreateData = any;

export type B2BEmployeesListData = B2BEmployee[];

export type B2BEmployeesCreateData = B2BEmployee;

export type B2BEmployeesLimitsListData = B2BEmployeeLimit[];

export type B2BEmployeesPassportPreviewCreateData = any;

export type B2BEmployeesPassportPreviewReadData = any;

export type B2BEmployeesTopByTripsListData = TopEmployeeByTrips[];

export type B2BEmployeesReadData = B2BEmployee;

export type B2BEmployeesPartialUpdateData = B2BEmployee;

export type B2BEmployeesDeleteData = any;

export type B2BHotelsBookingsListData = HotelBookingRequest[];

export type B2BHotelsBookingsCreateData = HotelBookingRequestDetail;

export type B2BHotelsBookingsReadData = HotelBookingRequestDetail;

export type B2BHotelsBookingsCancelCreateData = HotelBookingRequestDetail;

export type B2BHotelsCitiesListData = HotelCityList;

export type B2BHotelsMonthlySummaryListData = HotelMonthlySummary;

export type B2BHotelsRecommendationsListData = any;

export type B2BHotelsSearchListData = HotelSearchPage;

export type B2BHotelsTopByBookingsListData = TopHotelByBookings[];

export type B2BHotelsCalendarListData = B2BHotelCalendar[];

export type B2BHotelsCardListData = HotelCard;

export type B2BHotelsRoomsListData = RoomAvailability[];

export type B2BLeadRequestsCreateData = B2BLeadRequest;

export type B2BRecentTripsEmployeesListData = RecentTripEmployee[];

export type B2BStatisticsListData = StatisticsResponse;

export type B2BStatisticsChartListData = StatisticsChartResponse;

export type B2BStatisticsMonthlyChartListData = MonthlySpendingChartResponse;

export type B2BStatisticsWeeklyChartListData = WeeklySpendingChartResponse;

export type B2BTransactionsListData = TransactionListResponse;

export type B2BTravelPolicyListData = TravelPolicy;

export type B2BTravelPolicyPartialUpdateData = TravelPolicy;

export type B2BTravelPolicyLimitsListData = TravelPolicyRule[];

export type B2BTravelPolicyLimitsCreateData = TravelPolicyRule;

export type B2BTravelPolicyLimitsPartialUpdateData = TravelPolicyRule;

export type B2BTravelPolicyLimitsDeleteData = any;

export type B2BTripsListData = BusinessTrip[];

export type B2BTripsCreateData = BusinessTrip;

export type B2BTripsActiveEmployeesListData = ActiveTripEmployeesResponse;

export type B2BTripsStatusSummaryListData = TripStatusSummary;

export type B2BTripsReadData = BusinessTrip;

export type B2BTripsPartialUpdateData = BusinessTrip;

export type B2BTripsDeleteData = any;

export type B2BTripsEmployeesListData = TripEmployee[];

export type B2BTripsEmployeesCreateData = TripEmployee;

export type B2BTripsVoucherListData = TravelVoucher;

export type B2BTripsVoucherCreateData = TravelVoucher;

export type B2BWorkspaceAuthLoginCreateData = any;

export type B2BWorkspaceAuthLoginVerifyCreateData = any;

export type B2BWorkspaceAuthLogoutCreateData = any;

export type B2BWorkspaceAuthTokenRefreshCreateData = any;

export type B2BWorkspaceChatsListData = ChatThread[];

export type B2BWorkspaceChatsCreateData = ChatThread;

export type B2BWorkspaceChatsFlagsCreateData = ChatThread;

export type B2BWorkspaceChatsMessagesListData = WorkspaceChatMessage[];

export type B2BWorkspaceChatsMessagesCreateData = WorkspaceChatMessage;

export type B2BWorkspaceChatsReadCreateData = any;

export type B2BWorkspaceEventsListData = CalendarEvent[];

export type B2BWorkspaceEventsCreateData = CalendarEvent;

export type B2BWorkspaceEventsReadData = CalendarEvent;

export type B2BWorkspaceEventsPartialUpdateData = CalendarEvent;

export type B2BWorkspaceEventsDeleteData = any;

export type B2BWorkspaceHotelsListData = any;

export type B2BWorkspaceMeListData = Me;

export type B2BWorkspaceTasksListData = TaskList;

export type B2BWorkspaceTasksCreateData = Task;

export type B2BWorkspaceTasksReadData = Task;

export type B2BWorkspaceTasksPartialUpdateData = Task;

export type B2BWorkspaceTasksDeleteData = any;

export type B2BWorkspaceTasksCommentsCreateData = Task;

export type B2BWorkspaceTasksStatusCreateData = Task;

export type B2BWorkspaceTasksSubtasksToggleCreateData = Task;

export type B2BWorkspaceTeamListData = TeamMember[];

export interface BookingAdminBookingsListData {
  count: number;
  /** @format uri */
  next?: string | null;
  /** @format uri */
  previous?: string | null;
  results: RawAdminBookingList[];
}

export type BookingClientListData = RawClientBookingList[];

export interface BookingClientCreateData {
  /** @format uuid */
  booking_id?: string;
  partner?: {
    username?: string;
    first_name?: string;
    last_name?: string;
    phone_number?: string;
  };
  /** @format date */
  check_in?: string;
  /** @format date */
  check_out?: string;
  property_location?: {
    latitude?: number;
    longitude?: number;
  };
  status?: string;
}

export type BookingClientHistoryListData = RawClientBookingHistoryList[];

export type BookingClientHistoryReadData = any;

export interface CreateHotelBookingData {
  booking_id?: number;
  booking_number?: string;
  status?: string;
  total_cost?: string;
  hold_amount?: string;
  /** @format date */
  check_in?: string;
  /** @format date */
  check_out?: string;
  adult_count?: number;
  child_count?: number;
}

export type ListClientHotelBookingsData = HotelBookingList[];

export type GetClientHotelBookingDetailData = HotelBookingDetail;

export interface CancelClientHotelBookingData {
  detail?: string;
}

export type BookingClientReadData = any;

export type BookingClientCancelCreateData = any;

export type GetHotelCalendarData = {
  room_id?: number;
  room_name?: string;
  /** @format date */
  date?: string;
  status?: string;
}[];

export type ListHotelRoomsData = object[];

export interface GetHotelRoomPriceData {
  nights?: number;
  total?: number;
  hold_amount?: number;
  remaining_on_arrival?: number;
}

export type BookingPartnerListData = RawPartnerBookingList[];

export type BookingPartnerAcceptCreateData = any;

export type BookingPartnerCancelCreateData = any;

export type BookingPartnerCompleteCreateData = any;

export type BookingPartnerNoShowCreateData = any;

export type BookingPropertiesCalendarListData = RawCalendarDate[];

export type BookingPropertiesCalendarBlockCreateData =
  RawPropertyCalendarDateRange;

export type BookingPropertiesCalendarHoldCreateData =
  RawPropertyCalendarDateRange;

export type BookingPropertiesCalendarUnblockCreateData =
  RawPropertyCalendarDateRange;

export type BookingPropertiesCalendarUnholdCreateData =
  RawPropertyCalendarDateRange;

export type ChatConversationsData = ChatMessage[];

export type ChatMessagesData = ChatMessage[];

export type ChatReadMessagesData = ChatMessage;

export type ChatRecipientAdminRecipientData = ChatMessage[];

export type ChatSendData = ChatMessage;

export type DocumentsListData = Document[];

export type DocumentsCreateData = Document;

export type DocumentsReadData = DocumentWithRecipients;

export type DocumentsRecipientsCreateData = DocumentRecipient;

export type DocumentsStatusPartialUpdateData = Document;

export type HotelsSearchListData = HotelSearchPage;

export type HotelsReadData = HotelDetail;

export type HotelsCalendarListData = HotelCalendar[];

export type HotelsReviewsListData = ReviewList[];

export type HotelsRoomsListData = RoomAvailability[];

export type HotelsRoomsPriceListData = StayPrice;

export type LogsFrontendCreateData = any;

export type NotificationClientListData = any;

export type NotificationClientReadAllCreateData = any;

export type NotificationClientReadCreateData = any;

export type NotificationDeviceCreateData = any;

export type NotificationPartnerListData = any;

export type NotificationPartnerDeviceCreateData = any;

export type NotificationPartnerReadAllCreateData = any;

export type NotificationPartnerReadCreateData = any;

export type PaymentExchangeRateListData = any;

export type PlatformLoginCreateData = PmsOtpSendResponse;

export type PlatformLoginVerifyCreateData = PmsLoginResponse;

export type PlatformMeListData = PmsMeResponse;

export type PlatformMePartialUpdateData = PmsMeResponse;

export interface PlatformMeDeleteData {
  detail?: string;
}

export interface PlatformMeDeleteRequestCreateData {
  detail?: string;
  phone_number?: string;
  expires_in?: string;
}

export type PlatformOrganizationListData = Organization;

export type PlatformOrganizationCreateData = OrganizationCreateResponse;

export type PlatformOrganizationPartialUpdateData = Organization;

export type PlatformOrganizationMembersListData = OrganizationMember[];

export type PlatformOrganizationMembersCreateData = OrganizationMember;

export type PlatformOrganizationMembersPartialUpdateData = OrganizationMember;

export type PlatformOrganizationMembersDeleteData = any;

export type PlatformRegisterCreateData = PmsOtpSendResponse;

export type PlatformRegisterVerifyCreateData = PmsLoginResponse;

export type PlatformSwitchOrganizationCreateData = PmsSwitchOrgResponse;

export type PlatformTokenRefreshCreateData = PmsTokenRefreshResponse;

export type PmsGuestsListData = Guest[];

export type PmsGuestsCreateData = Guest;

export type PmsGuestsReadData = Guest;

export type PmsGuestsPartialUpdateData = Guest;

export type PmsPropertiesListData = Property[];

export type PmsPropertiesCreateData = Property;

export type PmsPropertiesReadData = Property;

export type PmsPropertiesPartialUpdateData = Property;

export type PmsPropertiesDeleteData = any;

export type PmsPropertiesAnalyticsListData = AnalyticsResponse;

/** @format binary */
export type PmsPropertiesAnalyticsExportListData = File;

export type PmsPropertiesBookingComConnectionListData = BookingComConnection;

export type PmsPropertiesBookingComConnectionUpdateData = BookingComConnection;

export type PmsPropertiesBookingComConnectionDeleteData = any;

export type PmsPropertiesBookingComMappingsListData = BookingComRoomMapping[];

export type PmsPropertiesBookingComMappingsUpdateData = BookingComRoomMapping[];

export type PmsPropertiesBookingComStatusListData = BookingComStatus;

export type PmsPropertiesBookingComSyncCreateData = BookingComStatus;

export type PmsPropertiesBookingsListData = Booking[];

export type PmsPropertiesBookingsCreateData = Booking;

export type PmsPropertiesBookingsReadData = Booking;

export type PmsPropertiesBookingsPartialUpdateData = Booking;

export type PmsPropertiesBookingsAcceptCreateData = Booking;

export type PmsPropertiesBookingsCancelCreateData = Booking;

export type PmsPropertiesBookingsCheckInCreateData = Booking;

export type PmsPropertiesBookingsCheckOutCreateData = Booking;

export type PmsPropertiesBookingsHistoryListData = BookingHistory[];

export type PmsPropertiesBookingsMealPlanCreateData = Booking;

export type PmsPropertiesBookingsMoveCreateData = Booking;

export type PmsPropertiesBookingsVoucherListData = Booking;

export type PmsPropertiesBookingsVoucherCreateData = Booking;

export type PmsPropertiesCalendarListData = CalendarSlot[];

export type PmsPropertiesCalendarBlockCreateData = CalendarSlot[];

export type PmsPropertiesCalendarHoldCreateData = CalendarSlot[];

export interface PmsPropertiesCalendarUnblockCreateData {
  unblocked?: number;
}

export interface PmsPropertiesCalendarUnholdCreateData {
  unheld?: number;
}

export type PmsPropertiesImagesCreateData = PropertyImage;

export type PmsPropertiesImagesDeleteData = any;

export type PmsPropertiesReviewsListData = Review[];

export type PmsPropertiesReviewsCreateData = Review;

export type PmsPropertiesReviewsComplainCreateData = Review;

export type PmsPropertiesReviewsRespondCreateData = Review;

export type PmsPropertiesRoomTypesListData = RoomType[];

export type PmsPropertiesRoomTypesCreateData = RoomType;

export type PmsPropertiesRoomTypesReadData = RoomType;

export type PmsPropertiesRoomTypesPartialUpdateData = RoomType;

export type PmsPropertiesRoomTypesDeleteData = any;

export type PmsPropertiesRoomsListData = Room[];

export type PmsPropertiesRoomsCreateData = Room;

export type PmsPropertiesRoomsMassUpdateCreateData = Room[];

export type PmsPropertiesRoomsReadData = Room;

export type PmsPropertiesRoomsPartialUpdateData = Room;

export type PmsPropertiesRoomsDeleteData = any;

export interface PmsPropertiesRoomsImagesCreateData {
  image_url?: string;
}

export type ListPrefecturesData = PrefectureList[];

export type PropertyAdminAllListData = {
  /** @format uuid */
  guid?: string;
  title?: string;
  property_type?: object;
  property_location?: {
    latitude?: string | null;
    longitude?: string | null;
    country?: string | null;
    city?: string | null;
    region?: {
      id?: number | null;
      /** @format uuid */
      guid?: string | null;
      name?: string | null;
    };
    district?: {
      id?: number | null;
      /** @format uuid */
      guid?: string | null;
      name?: string | null;
    };
    prefecture?: {
      id?: string | null;
      name?: string | null;
    };
  };
}[];

export type PropertyAdminApartmentsCreateData = ApartmentAdminList;

export type PropertyAdminApartmentsReadData = ApartmentAdminList;

export type PropertyAdminApartmentsPartialUpdateData = ApartmentAdminList;

export type AdminCreatePropertyImageApartmentsData = {
  /** @format uuid */
  guid?: string;
  order?: number;
  is_pending?: boolean;
  image_url?: string;
}[];

export type PropertyAdminCottagesCreateData = CottageAdminList;

export type PropertyAdminCottagesReadData = CottageAdminList;

export type PropertyAdminCottagesPartialUpdateData = CottageAdminList;

export type AdminCreatePropertyImageCottagesData = {
  /** @format uuid */
  guid?: string;
  order?: number;
  is_pending?: boolean;
  image_url?: string;
}[];

export type PropertyAdminDistrictsListData = DistrictList[];

export type PropertyAdminHotelOrganizationsListData = object[];

export type PropertyAdminHotelsListData = PropertyHotelAdminList[];

export type PropertyAdminHotelsCreateData = PropertyHotelAdminList;

export type PropertyAdminHotelsReadData = PropertyHotelAdminList;

export type PropertyAdminHotelsPartialUpdateData = PropertyHotelAdminList;

export type PropertyAdminHotelsDeleteData = any;

export type AdminCreateHotelImageData = object[];

export type AdminDeleteHotelImageData = any;

export type PropertyAdminPrefecturesListData = PrefectureList[];

export type PropertyAdminRegionsListData = RegionList[];

export type AdminListPropertyTypesData = {
  /** @format uuid */
  guid?: string;
  title_en?: string;
  title_ru?: string;
  title_uz?: string;
  icon_url?: string | null;
  kind?: string;
}[];

export interface AdminUploadPropertyTypeIconData {
  /** @format uuid */
  guid?: string;
  icon_url?: string;
}

export type ListApartmentsData = ApartmentList[];

export interface CreateApartmentData {
  detail?: string;
  /** @format uuid */
  property_id?: string;
  status_code?: number;
}

export interface PropertyApartmentsReadData {
  /** @format uuid */
  guid?: string;
  title?: string;
  img?: string[];
  /** @format date-time */
  created_at?: string;
  currency?: string | null;
  /**
   * Apartment price in UZS (converted from USD if needed). Null for cottages.
   * @format decimal
   */
  price?: number | null;
  /**
   * Cottage price per person in UZS. Null for apartments.
   * @format decimal
   */
  price_per_person?: number | null;
  /**
   * Cottage working-day price in UZS. Null for apartments.
   * @format decimal
   */
  price_on_working_days?: number | null;
  /**
   * Cottage weekend price in UZS. Null for apartments.
   * @format decimal
   */
  price_on_weekends?: number | null;
  /** Cottage monthly price breakdown. Empty/null for apartments. */
  monthly_prices?: {
    /**
     * First day of the month (YYYY-MM-DD).
     * @format date
     */
    month_from: string;
    /**
     * Last day of the month (YYYY-MM-DD).
     * @format date
     */
    month_to: string;
    /** @format double */
    price_per_person?: number | null;
    /** @format double */
    price_on_working_days?: number | null;
    /** @format double */
    price_on_weekends?: number | null;
  }[];
  weekend_only_sunday_inclusive?: boolean | null;
  /** Localized description for cottages. */
  description?: string | null;
  /** English description for apartments. */
  description_en?: string | null;
  /** Russian description for apartments. */
  description_ru?: string | null;
  /** Uzbek description for apartments (falls back to en/ru if empty). */
  description_uz?: string | null;
  comment_count?: number;
  /** @format float */
  average_rating?: number | null;
  is_favorite?: boolean;
  /** List of service UUIDs (apartments). */
  services?: string[] | null;
  /** List of service UUIDs (cottages). */
  property_services?: string[] | null;
  region_id?: number | null;
  district_id?: number | null;
  prefecture_id?: string | null;
  latitude?: string | null;
  longitude?: string | null;
  country?: string | null;
  city?: string | null;
  property_location?: {
    latitude?: string | null;
    longitude?: string | null;
    country?: string | null;
    city?: string | null;
    region?: {
      id?: number | null;
      /** @format uuid */
      guid?: string | null;
      name?: string | null;
    };
    district?: {
      id?: number | null;
      /** @format uuid */
      guid?: string | null;
      name?: string | null;
    };
    prefecture?: {
      id?: string | null;
      name?: string | null;
    };
  };
  apartment_number?: string | null;
  home_number?: string | null;
  entrance_number?: string | null;
  floor_number?: string | null;
  pass_code?: string | null;
  /** @format time */
  check_in?: string | null;
  /** @format time */
  check_out?: string | null;
  is_allowed_alcohol?: boolean;
  is_allowed_corporate?: boolean;
  is_allowed_pets?: boolean;
  is_quiet_hours?: boolean;
  guests?: number | null;
  rooms?: number | null;
  beds?: number | null;
  bathrooms?: number | null;
  property_room?: {
    /** @format uuid */
    guid?: string | null;
    guests?: number | null;
    rooms?: number | null;
    beds?: number | null;
    bathrooms?: number | null;
  };
}

export interface FullUpdatePropertyData {
  detail?: string;
  status_code?: number;
  warning?: string | null;
}

export interface CreatePropertyImageApartmentsData {
  detail?: string;
  status?: string;
}

export interface UpdatePropertyImageApartmentsData {
  detail?: string;
  status?: string;
}

export type ListPartnerPropertyReviewsApartmentsData = RawPropertyReview[];

export type ListPropertyReviewsApartmentsData = RawPropertyReview[];

export type CreatePropertyReviewApartmentsData = RawPropertyReview;

export type ListCategoriesData = object[];

export type ListCategoryPropertyRecommendationsData = object[];

export type ListCategoryLatestPropertiesData = object[];

export type ListCottagesData = CottageList[];

export interface CreateCottageData {
  detail?: string;
  /** @format uuid */
  property_id?: string;
  status_code?: number;
}

export interface PropertyCottagesReadData {
  /** @format uuid */
  guid?: string;
  title?: string;
  img?: string[];
  /** @format date-time */
  created_at?: string;
  currency?: string | null;
  /**
   * Apartment price in UZS (converted from USD if needed). Null for cottages.
   * @format decimal
   */
  price?: number | null;
  /**
   * Cottage price per person in UZS. Null for apartments.
   * @format decimal
   */
  price_per_person?: number | null;
  /**
   * Cottage working-day price in UZS. Null for apartments.
   * @format decimal
   */
  price_on_working_days?: number | null;
  /**
   * Cottage weekend price in UZS. Null for apartments.
   * @format decimal
   */
  price_on_weekends?: number | null;
  /** Cottage monthly price breakdown. Empty/null for apartments. */
  monthly_prices?: {
    /**
     * First day of the month (YYYY-MM-DD).
     * @format date
     */
    month_from: string;
    /**
     * Last day of the month (YYYY-MM-DD).
     * @format date
     */
    month_to: string;
    /** @format double */
    price_per_person?: number | null;
    /** @format double */
    price_on_working_days?: number | null;
    /** @format double */
    price_on_weekends?: number | null;
  }[];
  weekend_only_sunday_inclusive?: boolean | null;
  /** Localized description for cottages. */
  description?: string | null;
  /** English description for apartments. */
  description_en?: string | null;
  /** Russian description for apartments. */
  description_ru?: string | null;
  /** Uzbek description for apartments (falls back to en/ru if empty). */
  description_uz?: string | null;
  comment_count?: number;
  /** @format float */
  average_rating?: number | null;
  is_favorite?: boolean;
  /** List of service UUIDs (apartments). */
  services?: string[] | null;
  /** List of service UUIDs (cottages). */
  property_services?: string[] | null;
  region_id?: number | null;
  district_id?: number | null;
  prefecture_id?: string | null;
  latitude?: string | null;
  longitude?: string | null;
  country?: string | null;
  city?: string | null;
  property_location?: {
    latitude?: string | null;
    longitude?: string | null;
    country?: string | null;
    city?: string | null;
    region?: {
      id?: number | null;
      /** @format uuid */
      guid?: string | null;
      name?: string | null;
    };
    district?: {
      id?: number | null;
      /** @format uuid */
      guid?: string | null;
      name?: string | null;
    };
    prefecture?: {
      id?: string | null;
      name?: string | null;
    };
  };
  apartment_number?: string | null;
  home_number?: string | null;
  entrance_number?: string | null;
  floor_number?: string | null;
  pass_code?: string | null;
  /** @format time */
  check_in?: string | null;
  /** @format time */
  check_out?: string | null;
  is_allowed_alcohol?: boolean;
  is_allowed_corporate?: boolean;
  is_allowed_pets?: boolean;
  is_quiet_hours?: boolean;
  guests?: number | null;
  rooms?: number | null;
  beds?: number | null;
  bathrooms?: number | null;
  property_room?: {
    /** @format uuid */
    guid?: string | null;
    guests?: number | null;
    rooms?: number | null;
    beds?: number | null;
    bathrooms?: number | null;
  };
}

export interface PartialUpdateCottageData {
  detail?: string;
  status_code?: number;
  warning?: string | null;
}

export interface CreatePropertyImageCottagesData {
  detail?: string;
  status?: string;
}

export interface UpdatePropertyImageCottagesData {
  detail?: string;
  status?: string;
}

export type ListPartnerPropertyReviewsCottagesData = RawPropertyReview[];

export type ListPropertyReviewsCottagesData = RawPropertyReview[];

export type CreatePropertyReviewCottagesData = RawPropertyReview;

export interface ListSearchDestinationsData {
  nearby?: object[];
  recommended?: object[];
}

export type ListDistrictsData = DistrictList[];

export type GetPropertyFilterMetaData = any;

export type GetPropertyPriceHistogramData = PropertyPriceHistogram;

export type ListHotelsData = PropertyHotelCard[];

export type PropertyHotelsReadData = HotelDetail;

export type ListHotelReviewsData = object[];

export type CreateHotelReviewData = object;

export type ListLocationsData = RegionsResponse;

export type ListPropertyMapPinsData = PropertyMapResponse;

export type ListPropertyMapCardsData = PropertyCard[];

export type ListAllPartnerPropertiesData = {
  /** @format uuid */
  guid?: string;
  title?: string;
  property_type?: object;
  property_location?: {
    latitude?: string | null;
    longitude?: string | null;
    country?: string | null;
    city?: string | null;
    region?: {
      id?: number | null;
      /** @format uuid */
      guid?: string | null;
      name?: string | null;
    };
    district?: {
      id?: number | null;
      /** @format uuid */
      guid?: string | null;
      name?: string | null;
    };
    prefecture?: {
      id?: string | null;
      name?: string | null;
    };
  };
}[];

export type ListPartnerApartmentsData = ApartmentPartnerList[];

export type ListPartnerCottagesData = CottagePartnerList[];

export type ListPartnerPropertiesData = {
  /** @format uuid */
  guid?: string;
  title?: string;
  property_type?: object;
  property_location?: {
    latitude?: string | null;
    longitude?: string | null;
    country?: string | null;
    city?: string | null;
    region?: {
      id?: number | null;
      /** @format uuid */
      guid?: string | null;
      name?: string | null;
    };
    district?: {
      id?: number | null;
      /** @format uuid */
      guid?: string | null;
      name?: string | null;
    };
    prefecture?: {
      id?: string | null;
      name?: string | null;
    };
  };
}[];

export interface GetPropertyAnalyticsData {
  property?: {
    /** @format uuid */
    guid?: string;
    title?: string;
    image_url?: string | null;
    city?: string | null;
  };
  range?: string;
  bookings_overview?: object;
  bookings_activity?: object[];
  income_overview?: {
    balance_amount?: string;
    currency?: string;
    bars?: object[];
  };
}

export type ListPrefecturesPrefecturesData = PrefectureList[];

export type ListPropertiesData = {
  /** @format uuid */
  guid?: string;
  title?: string;
  property_type?: object;
  property_location?: {
    latitude?: string | null;
    longitude?: string | null;
    country?: string | null;
    city?: string | null;
    region?: {
      id?: number | null;
      /** @format uuid */
      guid?: string | null;
      name?: string | null;
    };
    district?: {
      id?: number | null;
      /** @format uuid */
      guid?: string | null;
      name?: string | null;
    };
    prefecture?: {
      id?: string | null;
      name?: string | null;
    };
  };
}[];

export interface CreatePropertyData {
  detail?: string;
  /** @format uuid */
  property_id?: string;
  status_code?: number;
}

export type ListSavedPropertiesData = {
  /** @format uuid */
  guid?: string;
  title?: string;
  property_type?: object;
  property_location?: {
    latitude?: string | null;
    longitude?: string | null;
    country?: string | null;
    city?: string | null;
    region?: {
      id?: number | null;
      /** @format uuid */
      guid?: string | null;
      name?: string | null;
    };
    district?: {
      id?: number | null;
      /** @format uuid */
      guid?: string | null;
      name?: string | null;
    };
    prefecture?: {
      id?: string | null;
      name?: string | null;
    };
  };
}[];

export interface FilterPropertyByLinkData {
  /** @format uuid */
  guid?: string | null;
}

export type ListRecommendationsData = {
  /** @format uuid */
  guid?: string;
  title?: string;
  property_type?: object;
  property_location?: {
    latitude?: string | null;
    longitude?: string | null;
    country?: string | null;
    city?: string | null;
    region?: {
      id?: number | null;
      /** @format uuid */
      guid?: string | null;
      name?: string | null;
    };
    district?: {
      id?: number | null;
      /** @format uuid */
      guid?: string | null;
      name?: string | null;
    };
    prefecture?: {
      id?: string | null;
      name?: string | null;
    };
  };
}[];

export type GetPersonalizedRecommendationsData = RecommendationItem[];

export type ListRegionsData = RegionList[];

export type ListPropertiesByRegionData = {
  /** @format uuid */
  guid?: string;
  title?: string;
  property_type?: object;
  property_location?: {
    latitude?: string | null;
    longitude?: string | null;
    country?: string | null;
    city?: string | null;
    region?: {
      id?: number | null;
      /** @format uuid */
      guid?: string | null;
      name?: string | null;
    };
    district?: {
      id?: number | null;
      /** @format uuid */
      guid?: string | null;
      name?: string | null;
    };
    prefecture?: {
      id?: string | null;
      name?: string | null;
    };
  };
}[];

export type SearchPropertiesData = PropertyCard[];

export type ListPropertyServicesData = PropertyServiceList[];

export type ListPropertyTypesData = RawPropertyType[];

export interface ToggleHotelFavoriteData {
  detail?: string;
  is_favorite?: boolean;
}

export type PropertyFavoriteDeleteData = any;

export interface TogglePropertyFavoriteData {
  detail?: string;
  is_favorite?: boolean;
}

export interface RemovePropertyFavoriteData {
  detail?: string;
  is_favorite?: boolean;
}

export type StoryAdminBannersListData = AdminBanner[];

export type StoryAdminBannersCreateCreateData = AdminBanner;

export type StoryAdminBannersReadData = AdminBanner;

export type StoryAdminBannersUpdatePartialUpdateData = AdminBanner;

export type StoryAdminNewsListData = AdminNews[];

export type StoryAdminNewsCreateCreateData = AdminNews;

export type StoryAdminNewsReadData = AdminNews;

export type StoryAdminNewsUpdatePartialUpdateData = AdminNews;

export type StoryAdminStoriesListData = AdminStory[];

export type StoryAdminStoriesModeratePartialUpdateData = AdminStory;

export type StoryPartnerStoriesListData = Story[];

export type StoryPublicBannersListData = PublicBanner[];

export type StoryPublicBannersReadData = PublicBanner;

export type StoryPublicStoriesListData = Story[];

export type StoryStoriesListData = Story[];

export type StoryStoriesCreateData = Story;

export type StoryStoriesReadData = StoryDetail;

export type StoryStoriesDelete2Data = any;

export interface UserAccountDeleteData {
  detail?: string;
}

export interface UserAccountDeleteRequestCreateData {
  detail?: string;
  phone_number?: string;
  expires_in?: string;
}

export type UserClientCardsListData = any;

export interface UserClientCardsCreateData {
  card_number: string;
  expire_date: string;
  /** Optional. If not provided, uses user's saved phone number */
  phone_number?: string;
}

export type UserClientCardsResendOtpData = any;

export type UserClientCardsVerifyData = any;

export type UserClientCardsDeleteData = any;

export type UserClientLoginCreateData = UserPhoneNumber;

export type UserClientLoginResendCreateData = ResendOTP;

export type UserClientLoginVerifyCreateData = ClientOTPLoginVerify;

export interface UserClientLogoutCreateData {
  /** Refresh token to blacklist */
  refresh: string;
}

export type UserClientProfileListData = any;

export type UserClientProfileUpdateUpdateData = ClientProfile;

export type UserClientProfileUpdatePartialUpdateData = ClientProfile;

export type UserClientRegisterCreateData = ClientRegister;

export type UserClientRegisterResendCreateData = ResendOTP;

export type UserClientRegisterVerifyCreateData = ClientOTPRegistrationVerify;

export type UserPartnerDocumentsPassportCreateData = any;

export type UserPartnerLoginCreateData = UserPhoneNumber;

export type UserPartnerLoginResendCreateData = ResendOTP;

export type UserPartnerLoginVerifyCreateData = PartnerOTPLogin;

export interface UserPartnerLogoutCreateData {
  /** Refresh token to blacklist */
  refresh: string;
}

export type UserPartnerProfileListData = any;

export interface UserPartnerProfileDeleteData {
  detail?: string;
}

export type UserPartnerProfileUpdateUpdateData = PartnerProfile;

export type UserPartnerProfileUpdatePartialUpdateData = PartnerProfile;

export type UserPartnerRegisterCreateData = PartnerOTPRegister;

export type UserPartnerRegisterResendCreateData = ResendOTP;

export type UserPartnerRegisterVerifyCreateData = PartnerOTPRegisterVerify;

export type UserRefreshCreateData = TokenRefresh;

export namespace Activities {
  /**
   * No description
   * @tags api
   * @name ActivitiesClientActivitiesList
   * @request GET:/activities/client/activities/
   * @secure
   */
  export namespace ActivitiesClientActivitiesList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ActivitiesClientActivitiesListData;
  }

  /**
   * No description
   * @tags api
   * @name ActivitiesClientActivitiesRead
   * @request GET:/activities/client/activities/{guid}/
   * @secure
   */
  export namespace ActivitiesClientActivitiesRead {
    export type RequestParams = {
      guid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ActivitiesClientActivitiesReadData;
  }

  /**
   * No description
   * @tags api
   * @name ActivitiesClientActivitiesAvailabilityList
   * @request GET:/activities/client/activities/{guid}/availability/
   * @secure
   */
  export namespace ActivitiesClientActivitiesAvailabilityList {
    export type RequestParams = {
      guid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ActivitiesClientActivitiesAvailabilityListData;
  }

  /**
   * No description
   * @tags api
   * @name ActivitiesClientActivitiesBookingsCreate
   * @request POST:/activities/client/activities/{guid}/bookings/
   * @secure
   */
  export namespace ActivitiesClientActivitiesBookingsCreate {
    export type RequestParams = {
      guid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ActivitiesClientActivitiesBookingsCreateData;
  }

  /**
   * No description
   * @tags api
   * @name ActivitiesClientBookingsList
   * @request GET:/activities/client/bookings/
   * @secure
   */
  export namespace ActivitiesClientBookingsList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ActivitiesClientBookingsListData;
  }

  /**
   * No description
   * @tags api
   * @name ActivitiesClientBookingsCancelCreate
   * @request POST:/activities/client/bookings/{booking_guid}/cancel/
   * @secure
   */
  export namespace ActivitiesClientBookingsCancelCreate {
    export type RequestParams = {
      bookingGuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ActivitiesClientBookingsCancelCreateData;
  }

  /**
   * No description
   * @tags api
   * @name ActivitiesPartnerActivitiesList
   * @request GET:/activities/partner/activities/
   * @secure
   */
  export namespace ActivitiesPartnerActivitiesList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ActivitiesPartnerActivitiesListData;
  }

  /**
   * No description
   * @tags api
   * @name ActivitiesPartnerActivitiesCreate
   * @request POST:/activities/partner/activities/
   * @secure
   */
  export namespace ActivitiesPartnerActivitiesCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ActivitiesPartnerActivitiesCreateData;
  }

  /**
   * No description
   * @tags api
   * @name ActivitiesPartnerActivitiesRead
   * @request GET:/activities/partner/activities/{guid}/
   * @secure
   */
  export namespace ActivitiesPartnerActivitiesRead {
    export type RequestParams = {
      guid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ActivitiesPartnerActivitiesReadData;
  }

  /**
   * No description
   * @tags api
   * @name ActivitiesPartnerActivitiesPartialUpdate
   * @request PATCH:/activities/partner/activities/{guid}/
   * @secure
   */
  export namespace ActivitiesPartnerActivitiesPartialUpdate {
    export type RequestParams = {
      guid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ActivitiesPartnerActivitiesPartialUpdateData;
  }

  /**
   * No description
   * @tags api
   * @name ActivitiesPartnerActivitiesDelete
   * @request DELETE:/activities/partner/activities/{guid}/
   * @secure
   */
  export namespace ActivitiesPartnerActivitiesDelete {
    export type RequestParams = {
      guid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ActivitiesPartnerActivitiesDeleteData;
  }

  /**
   * No description
   * @tags api
   * @name ActivitiesPartnerActivitiesCalendarList
   * @request GET:/activities/partner/activities/{guid}/calendar/
   * @secure
   */
  export namespace ActivitiesPartnerActivitiesCalendarList {
    export type RequestParams = {
      guid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ActivitiesPartnerActivitiesCalendarListData;
  }

  /**
   * No description
   * @tags api
   * @name ActivitiesPartnerActivitiesImagesList
   * @request GET:/activities/partner/activities/{guid}/images/
   * @secure
   */
  export namespace ActivitiesPartnerActivitiesImagesList {
    export type RequestParams = {
      guid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ActivitiesPartnerActivitiesImagesListData;
  }

  /**
   * No description
   * @tags api
   * @name ActivitiesPartnerActivitiesImagesCreate
   * @request POST:/activities/partner/activities/{guid}/images/
   * @secure
   */
  export namespace ActivitiesPartnerActivitiesImagesCreate {
    export type RequestParams = {
      guid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ActivitiesPartnerActivitiesImagesCreateData;
  }

  /**
   * No description
   * @tags api
   * @name ActivitiesPartnerActivitiesImagesDelete
   * @request DELETE:/activities/partner/activities/{guid}/images/{image_id}/
   * @secure
   */
  export namespace ActivitiesPartnerActivitiesImagesDelete {
    export type RequestParams = {
      guid: string;
      imageId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ActivitiesPartnerActivitiesImagesDeleteData;
  }

  /**
   * No description
   * @tags api
   * @name ActivitiesPartnerActivitiesResourcesList
   * @request GET:/activities/partner/activities/{guid}/resources/
   * @secure
   */
  export namespace ActivitiesPartnerActivitiesResourcesList {
    export type RequestParams = {
      guid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ActivitiesPartnerActivitiesResourcesListData;
  }

  /**
   * No description
   * @tags api
   * @name ActivitiesPartnerActivitiesResourcesCreate
   * @request POST:/activities/partner/activities/{guid}/resources/
   * @secure
   */
  export namespace ActivitiesPartnerActivitiesResourcesCreate {
    export type RequestParams = {
      guid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ActivitiesPartnerActivitiesResourcesCreateData;
  }

  /**
   * No description
   * @tags api
   * @name ActivitiesPartnerActivitiesTariffsList
   * @request GET:/activities/partner/activities/{guid}/tariffs/
   * @secure
   */
  export namespace ActivitiesPartnerActivitiesTariffsList {
    export type RequestParams = {
      guid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ActivitiesPartnerActivitiesTariffsListData;
  }

  /**
   * No description
   * @tags api
   * @name ActivitiesPartnerActivitiesTariffsCreate
   * @request POST:/activities/partner/activities/{guid}/tariffs/
   * @secure
   */
  export namespace ActivitiesPartnerActivitiesTariffsCreate {
    export type RequestParams = {
      guid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ActivitiesPartnerActivitiesTariffsCreateData;
  }

  /**
   * No description
   * @tags api
   * @name ActivitiesPartnerActivitiesWorkingHoursList
   * @request GET:/activities/partner/activities/{guid}/working-hours/
   * @secure
   */
  export namespace ActivitiesPartnerActivitiesWorkingHoursList {
    export type RequestParams = {
      guid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ActivitiesPartnerActivitiesWorkingHoursListData;
  }

  /**
   * No description
   * @tags api
   * @name ActivitiesPartnerActivitiesWorkingHoursUpdate
   * @request PUT:/activities/partner/activities/{guid}/working-hours/
   * @secure
   */
  export namespace ActivitiesPartnerActivitiesWorkingHoursUpdate {
    export type RequestParams = {
      guid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody =
      ActivitiesPartnerActivitiesWorkingHoursUpdateData;
  }

  /**
   * No description
   * @tags api
   * @name ActivitiesPartnerBookingsCompleteCreate
   * @request POST:/activities/partner/bookings/{booking_guid}/complete/
   * @secure
   */
  export namespace ActivitiesPartnerBookingsCompleteCreate {
    export type RequestParams = {
      bookingGuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ActivitiesPartnerBookingsCompleteCreateData;
  }

  /**
   * No description
   * @tags api
   * @name ActivitiesPartnerResourcesPartialUpdate
   * @request PATCH:/activities/partner/resources/{resource_guid}/
   * @secure
   */
  export namespace ActivitiesPartnerResourcesPartialUpdate {
    export type RequestParams = {
      resourceGuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ActivitiesPartnerResourcesPartialUpdateData;
  }

  /**
   * No description
   * @tags api
   * @name ActivitiesPartnerResourcesDelete
   * @request DELETE:/activities/partner/resources/{resource_guid}/
   * @secure
   */
  export namespace ActivitiesPartnerResourcesDelete {
    export type RequestParams = {
      resourceGuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ActivitiesPartnerResourcesDeleteData;
  }

  /**
   * No description
   * @tags api
   * @name ActivitiesPartnerTariffsPartialUpdate
   * @request PATCH:/activities/partner/tariffs/{tariff_guid}/
   * @secure
   */
  export namespace ActivitiesPartnerTariffsPartialUpdate {
    export type RequestParams = {
      tariffGuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ActivitiesPartnerTariffsPartialUpdateData;
  }

  /**
   * No description
   * @tags api
   * @name ActivitiesPartnerTariffsDelete
   * @request DELETE:/activities/partner/tariffs/{tariff_guid}/
   * @secure
   */
  export namespace ActivitiesPartnerTariffsDelete {
    export type RequestParams = {
      tariffGuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ActivitiesPartnerTariffsDeleteData;
  }
}

export namespace AdminAuth {
  /**
   * No description
   * @tags api
   * @name AdminAuthActivitiesList
   * @request GET:/admin-auth/activities/
   * @secure
   */
  export namespace AdminAuthActivitiesList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = AdminAuthActivitiesListData;
  }

  /**
   * No description
   * @tags api
   * @name AdminAuthActivitiesRead
   * @request GET:/admin-auth/activities/{guid}/
   * @secure
   */
  export namespace AdminAuthActivitiesRead {
    export type RequestParams = {
      guid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = AdminAuthActivitiesReadData;
  }

  /**
   * @description Admin moderation actions — e.g. deactivating a listing.
   * @tags api
   * @name AdminAuthActivitiesPartialUpdate
   * @request PATCH:/admin-auth/activities/{guid}/
   * @secure
   */
  export namespace AdminAuthActivitiesPartialUpdate {
    export type RequestParams = {
      guid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = AdminAuthActivitiesPartialUpdateData;
  }

  /**
   * No description
   * @tags api
   * @name AdminAuthActivitiesCalendarList
   * @request GET:/admin-auth/activities/{guid}/calendar/
   * @secure
   */
  export namespace AdminAuthActivitiesCalendarList {
    export type RequestParams = {
      guid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = AdminAuthActivitiesCalendarListData;
  }

  /**
   * @description List all B2B companies — admin view
   * @tags api
   * @name AdminAuthB2BCompaniesList
   * @request GET:/admin-auth/b2b/companies/
   * @secure
   */
  export namespace AdminAuthB2BCompaniesList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = AdminAuthB2BCompaniesListData;
  }

  /**
   * No description
   * @tags api
   * @name AdminAuthB2BCompaniesRead
   * @request GET:/admin-auth/b2b/companies/{company_id}/
   * @secure
   */
  export namespace AdminAuthB2BCompaniesRead {
    export type RequestParams = {
      companyId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = AdminAuthB2BCompaniesReadData;
  }

  /**
   * No description
   * @tags api
   * @name AdminAuthB2BCompaniesUsersList
   * @request GET:/admin-auth/b2b/companies/{company_id}/users/
   * @secure
   */
  export namespace AdminAuthB2BCompaniesUsersList {
    export type RequestParams = {
      companyId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = AdminAuthB2BCompaniesUsersListData;
  }

  /**
   * @description List all hotels across all organizations — admin view
   * @tags api
   * @name AdminAuthHotelsList
   * @request GET:/admin-auth/hotels/
   * @secure
   */
  export namespace AdminAuthHotelsList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = AdminAuthHotelsListData;
  }

  /**
   * No description
   * @tags api
   * @name AdminAuthHotelsRead
   * @request GET:/admin-auth/hotels/{property_id}/
   * @secure
   */
  export namespace AdminAuthHotelsRead {
    export type RequestParams = {
      propertyId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = AdminAuthHotelsReadData;
  }

  /**
   * No description
   * @tags api
   * @name AdminAuthHotelsPartialUpdate
   * @request PATCH:/admin-auth/hotels/{property_id}/
   * @secure
   */
  export namespace AdminAuthHotelsPartialUpdate {
    export type RequestParams = {
      propertyId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = Property;
    export type RequestHeaders = {};
    export type ResponseBody = AdminAuthHotelsPartialUpdateData;
  }

  /**
   * @description Analytics data for a property
   * @tags api
   * @name AdminAuthHotelsAnalyticsList
   * @request GET:/admin-auth/hotels/{property_id}/analytics/
   * @secure
   */
  export namespace AdminAuthHotelsAnalyticsList {
    export type RequestParams = {
      propertyId: string;
    };
    export type RequestQuery = {
      /**
       * Start date
       * @format date
       */
      date_from: string;
      /**
       * End date
       * @format date
       */
      date_to: string;
      /** Chart metric */
      metric?: "check_ins" | "revenue" | "bookings" | "occupancy";
      /** Room category filter */
      category?: string;
      /** Floor filter */
      floor?: string;
      /** Room number search */
      search?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = AdminAuthHotelsAnalyticsListData;
  }

  /**
   * @description Admin view of hotel bookings
   * @tags api
   * @name AdminAuthHotelsBookingsList
   * @request GET:/admin-auth/hotels/{property_id}/bookings/
   * @secure
   */
  export namespace AdminAuthHotelsBookingsList {
    export type RequestParams = {
      propertyId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = AdminAuthHotelsBookingsListData;
  }

  /**
   * @description Quick-create a booking
   * @tags api
   * @name AdminAuthHotelsBookingsCreateCreate
   * @request POST:/admin-auth/hotels/{property_id}/bookings/create/
   * @secure
   */
  export namespace AdminAuthHotelsBookingsCreateCreate {
    export type RequestParams = {
      propertyId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = AdminAuthHotelsBookingsCreateCreateData;
  }

  /**
   * @description Get or update a specific booking
   * @tags api
   * @name AdminAuthHotelsBookingsRead
   * @request GET:/admin-auth/hotels/{property_id}/bookings/{booking_id}/
   * @secure
   */
  export namespace AdminAuthHotelsBookingsRead {
    export type RequestParams = {
      propertyId: string;
      bookingId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = AdminAuthHotelsBookingsReadData;
  }

  /**
   * @description Get or update a specific booking
   * @tags api
   * @name AdminAuthHotelsBookingsPartialUpdate
   * @request PATCH:/admin-auth/hotels/{property_id}/bookings/{booking_id}/
   * @secure
   */
  export namespace AdminAuthHotelsBookingsPartialUpdate {
    export type RequestParams = {
      propertyId: string;
      bookingId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = AdminAuthHotelsBookingsPartialUpdateData;
  }

  /**
   * @description Accept a booking
   * @tags api
   * @name AdminAuthHotelsBookingsAcceptCreate
   * @request POST:/admin-auth/hotels/{property_id}/bookings/{booking_id}/accept/
   * @secure
   */
  export namespace AdminAuthHotelsBookingsAcceptCreate {
    export type RequestParams = {
      propertyId: string;
      bookingId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = AdminAuthHotelsBookingsAcceptCreateData;
  }

  /**
   * @description Cancel a booking
   * @tags api
   * @name AdminAuthHotelsBookingsCancelCreate
   * @request POST:/admin-auth/hotels/{property_id}/bookings/{booking_id}/cancel/
   * @secure
   */
  export namespace AdminAuthHotelsBookingsCancelCreate {
    export type RequestParams = {
      propertyId: string;
      bookingId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = AdminAuthHotelsBookingsCancelCreateData;
  }

  /**
   * @description Check in a booking
   * @tags api
   * @name AdminAuthHotelsBookingsCheckInCreate
   * @request POST:/admin-auth/hotels/{property_id}/bookings/{booking_id}/check-in/
   * @secure
   */
  export namespace AdminAuthHotelsBookingsCheckInCreate {
    export type RequestParams = {
      propertyId: string;
      bookingId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = AdminAuthHotelsBookingsCheckInCreateData;
  }

  /**
   * @description Check out a booking
   * @tags api
   * @name AdminAuthHotelsBookingsCheckOutCreate
   * @request POST:/admin-auth/hotels/{property_id}/bookings/{booking_id}/check-out/
   * @secure
   */
  export namespace AdminAuthHotelsBookingsCheckOutCreate {
    export type RequestParams = {
      propertyId: string;
      bookingId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = AdminAuthHotelsBookingsCheckOutCreateData;
  }

  /**
   * @description Move booking to a different room / date range (drag on calendar)
   * @tags api
   * @name AdminAuthHotelsBookingsMoveCreate
   * @request POST:/admin-auth/hotels/{property_id}/bookings/{booking_id}/move/
   * @secure
   */
  export namespace AdminAuthHotelsBookingsMoveCreate {
    export type RequestParams = {
      propertyId: string;
      bookingId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = AdminAuthHotelsBookingsMoveCreateData;
  }

  /**
   * @description Mirrored calendar — uses same PMS availability data
   * @tags api
   * @name AdminAuthHotelsCalendarList
   * @request GET:/admin-auth/hotels/{property_id}/calendar/
   * @secure
   */
  export namespace AdminAuthHotelsCalendarList {
    export type RequestParams = {
      propertyId: string;
    };
    export type RequestQuery = {
      /** @format date */
      from_date?: string;
      /** @format date */
      to_date?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = AdminAuthHotelsCalendarListData;
  }

  /**
   * @description Assign star rating and Weel classification to a hotel
   * @tags api
   * @name AdminAuthHotelsClassifyPartialUpdate
   * @request PATCH:/admin-auth/hotels/{property_id}/classify/
   * @secure
   */
  export namespace AdminAuthHotelsClassifyPartialUpdate {
    export type RequestParams = {
      propertyId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = ClassifyProperty;
    export type RequestHeaders = {};
    export type ResponseBody = AdminAuthHotelsClassifyPartialUpdateData;
  }

  /**
   * No description
   * @tags api
   * @name AdminAuthHotelsReviewsList
   * @request GET:/admin-auth/hotels/{property_id}/reviews/
   * @secure
   */
  export namespace AdminAuthHotelsReviewsList {
    export type RequestParams = {
      propertyId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = AdminAuthHotelsReviewsListData;
  }

  /**
   * @description Admin can hide/complain a review
   * @tags api
   * @name AdminAuthHotelsReviewsHideCreate
   * @request POST:/admin-auth/hotels/{property_id}/reviews/{review_id}/hide/
   * @secure
   */
  export namespace AdminAuthHotelsReviewsHideCreate {
    export type RequestParams = {
      propertyId: string;
      reviewId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = ReviewComplain;
    export type RequestHeaders = {};
    export type ResponseBody = AdminAuthHotelsReviewsHideCreateData;
  }

  /**
   * No description
   * @tags api
   * @name AdminAuthHotelsReviewsRespondCreate
   * @request POST:/admin-auth/hotels/{property_id}/reviews/{review_id}/respond/
   * @secure
   */
  export namespace AdminAuthHotelsReviewsRespondCreate {
    export type RequestParams = {
      propertyId: string;
      reviewId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = ReviewRespond;
    export type RequestHeaders = {};
    export type ResponseBody = AdminAuthHotelsReviewsRespondCreateData;
  }

  /**
   * @description Room type listing and creation for a hotel
   * @tags api
   * @name AdminAuthHotelsRoomTypesList
   * @request GET:/admin-auth/hotels/{property_id}/room-types/
   * @secure
   */
  export namespace AdminAuthHotelsRoomTypesList {
    export type RequestParams = {
      propertyId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = AdminAuthHotelsRoomTypesListData;
  }

  /**
   * @description Room type listing and creation for a hotel
   * @tags api
   * @name AdminAuthHotelsRoomTypesCreate
   * @request POST:/admin-auth/hotels/{property_id}/room-types/
   * @secure
   */
  export namespace AdminAuthHotelsRoomTypesCreate {
    export type RequestParams = {
      propertyId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = RoomType;
    export type RequestHeaders = {};
    export type ResponseBody = AdminAuthHotelsRoomTypesCreateData;
  }

  /**
   * @description Mirrored room inventory — uses same PMS data source
   * @tags api
   * @name AdminAuthHotelsRoomsList
   * @request GET:/admin-auth/hotels/{property_id}/rooms/
   * @secure
   */
  export namespace AdminAuthHotelsRoomsList {
    export type RequestParams = {
      propertyId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = AdminAuthHotelsRoomsListData;
  }

  /**
   * @description Mirrored room inventory — uses same PMS data source
   * @tags api
   * @name AdminAuthHotelsRoomsCreate
   * @request POST:/admin-auth/hotels/{property_id}/rooms/
   * @secure
   */
  export namespace AdminAuthHotelsRoomsCreate {
    export type RequestParams = {
      propertyId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = AdminHotelRoomCreate;
    export type RequestHeaders = {};
    export type ResponseBody = AdminAuthHotelsRoomsCreateData;
  }

  /**
   * @description Update room fields for inspection/editing workflow
   * @tags api
   * @name AdminAuthHotelsRoomsPartialUpdate
   * @request PATCH:/admin-auth/hotels/{property_id}/rooms/{room_id}/
   * @secure
   */
  export namespace AdminAuthHotelsRoomsPartialUpdate {
    export type RequestParams = {
      propertyId: string;
      roomId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = AdminAuthHotelsRoomsPartialUpdateData;
  }

  /**
   * @description Upload an image for a specific room
   * @tags api
   * @name AdminAuthHotelsRoomsImagesCreate
   * @request POST:/admin-auth/hotels/{property_id}/rooms/{room_id}/images/
   * @secure
   */
  export namespace AdminAuthHotelsRoomsImagesCreate {
    export type RequestParams = {
      propertyId: string;
      roomId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = AdminAuthHotelsRoomsImagesCreateData;
  }

  /**
   * @description Admin login endpoint - only for staff/superuser
   * @tags api
   * @name AdminAuthLoginCreate
   * @request POST:/admin-auth/login/
   * @secure
   */
  export namespace AdminAuthLoginCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = AdminAuthLoginCreateData;
  }

  /**
   * @description Get current admin user info
   * @tags api
   * @name AdminAuthMeList
   * @request GET:/admin-auth/me/
   * @secure
   */
  export namespace AdminAuthMeList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = AdminAuthMeListData;
  }

  /**
   * @description Create a new admin user (superuser only).
   * @tags Admin Auth
   * @name AdminAuthRegisterCreate
   * @summary Create admin user (superuser only)
   * @request POST:/admin-auth/register/
   * @secure
   */
  export namespace AdminAuthRegisterCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = AdminCreate;
    export type RequestHeaders = {};
    export type ResponseBody = AdminAuthRegisterCreateData;
  }

  /**
   * @description Refresh admin tokens
   * @tags api
   * @name AdminAuthTokenRefreshCreate
   * @request POST:/admin-auth/token/refresh/
   * @secure
   */
  export namespace AdminAuthTokenRefreshCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = AdminAuthTokenRefreshCreateData;
  }

  /**
   * @description List all clients - admin only
   * @tags api
   * @name AdminAuthUsersClientsList
   * @request GET:/admin-auth/users/clients/
   * @secure
   */
  export namespace AdminAuthUsersClientsList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = AdminAuthUsersClientsListData;
  }

  /**
   * @description List all partners - admin only
   * @tags api
   * @name AdminAuthUsersPartnersList
   * @request GET:/admin-auth/users/partners/
   * @secure
   */
  export namespace AdminAuthUsersPartnersList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = AdminAuthUsersPartnersListData;
  }

  /**
   * @description List all PMS/hotel owner users - admin only
   * @tags api
   * @name AdminAuthUsersPmsList
   * @request GET:/admin-auth/users/pms/
   * @secure
   */
  export namespace AdminAuthUsersPmsList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = AdminAuthUsersPmsListData;
  }
}

export namespace B2B {
  /**
   * No description
   * @tags B2B Auth
   * @name B2BAuthLoginCreate
   * @summary Send OTP to B2B owner/manager phone
   * @request POST:/b2b/auth/login/
   * @secure
   */
  export namespace B2BAuthLoginCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = B2BLoginSendOTP;
    export type RequestHeaders = {};
    export type ResponseBody = B2BAuthLoginCreateData;
  }

  /**
   * No description
   * @tags B2B Auth
   * @name B2BAuthLoginVerifyCreate
   * @summary Verify OTP and get B2B access tokens
   * @request POST:/b2b/auth/login/verify/
   * @secure
   */
  export namespace B2BAuthLoginVerifyCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = B2BLoginVerify;
    export type RequestHeaders = {};
    export type ResponseBody = B2BAuthLoginVerifyCreateData;
  }

  /**
   * @description POST /api/b2b/auth/logout/ — revoke the presented refresh token.
   * @tags B2B Auth
   * @name B2BAuthLogoutCreate
   * @summary Log out and revoke the refresh token
   * @request POST:/b2b/auth/logout/
   * @secure
   */
  export namespace B2BAuthLogoutCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = B2BRefresh;
    export type RequestHeaders = {};
    export type ResponseBody = B2BAuthLogoutCreateData;
  }

  /**
   * @description POST /api/b2b/auth/token/refresh/ Login has always returned a refresh token, but there was no endpoint to redeem it — so B2B sessions (dashboard included) died the moment the access token expired and dumped the user back on the login screen.
   * @tags B2B Auth
   * @name B2BAuthTokenRefreshCreate
   * @summary Exchange a B2B refresh token for a new token pair
   * @request POST:/b2b/auth/token/refresh/
   * @secure
   */
  export namespace B2BAuthTokenRefreshCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = B2BRefresh;
    export type RequestHeaders = {};
    export type ResponseBody = B2BAuthTokenRefreshCreateData;
  }

  /**
   * @description Return all budget requests for the company. Filter with `status=pending` to see requests submitted by performers for an employee or department and waiting for owner approval.
   * @tags api
   * @name B2BBudgetRequestsList
   * @summary List budget requests (owner)
   * @request GET:/b2b/budget-requests/
   * @secure
   */
  export namespace B2BBudgetRequestsList {
    export type RequestParams = {};
    export type RequestQuery = {
      /** Filter by status. For owners this is usually `pending`. */
      status?: "pending" | "approved" | "rejected";
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BBudgetRequestsListData;
  }

  /**
   * @description A performer can request additional budget for either a single employee (`employee_id`) or an entire department (`department_id`), but exactly one of them must be provided. `trip_id` is optional; if present, the request is linked to that business trip. Every request is saved as `pending`, then the owner reviews it via `GET ?status=pending` and approves or rejects it with `POST /budget-requests/<id>/review/`.
   * @tags api
   * @name B2BBudgetRequestsCreate
   * @summary Submit a budget request (employee or department)
   * @request POST:/b2b/budget-requests/
   * @secure
   */
  export namespace B2BBudgetRequestsCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = BudgetRequest;
    export type RequestHeaders = {};
    export type ResponseBody = B2BBudgetRequestsCreateData;
  }

  /**
   * @description The owner marks the budget request as `approved` or `rejected`. `description` is an optional reason for the decision.
   * @tags api
   * @name B2BBudgetRequestsReviewCreate
   * @summary Approve or reject a budget request (owner only)
   * @request POST:/b2b/budget-requests/{request_id}/review/
   * @secure
   */
  export namespace B2BBudgetRequestsReviewCreate {
    export type RequestParams = {
      requestId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = ReviewBudgetRequest;
    export type RequestHeaders = {};
    export type ResponseBody = B2BBudgetRequestsReviewCreateData;
  }

  /**
   * @description Company settings — owner-only. A performer has no business reason to view or change company-wide settings, so this is locked down at the API level too (not just hidden in the sidebar).
   * @tags api
   * @name B2BCompanyList
   * @request GET:/b2b/company/
   * @secure
   */
  export namespace B2BCompanyList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BCompanyListData;
  }

  /**
   * @description Company settings — owner-only. A performer has no business reason to view or change company-wide settings, so this is locked down at the API level too (not just hidden in the sidebar).
   * @tags api
   * @name B2BCompanyPartialUpdate
   * @request PATCH:/b2b/company/
   * @secure
   */
  export namespace B2BCompanyPartialUpdate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = B2BCompany;
    export type RequestHeaders = {};
    export type ResponseBody = B2BCompanyPartialUpdateData;
  }

  /**
   * @description Return the most recent dashboard notifications across 4 event types: `limit_exceeded`, `budget_threshold`, `trip_approved`, `documents_uploaded`. Default `limit=8`, maximum 50.
   * @tags api
   * @name B2BDashboardNotificationsList
   * @summary Dashboard notification feed
   * @request GET:/b2b/dashboard/notifications/
   * @secure
   */
  export namespace B2BDashboardNotificationsList {
    export type RequestParams = {};
    export type RequestQuery = {
      /**
       * Number of notifications to return (1-50). Default 8.
       * @default 8
       */
      limit?: number;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BDashboardNotificationsListData;
  }

  /**
   * @description Return the overall monthly limit (`monthly_limit`), amount spent this month (`spent_this_month`), number of employees on or about to go on a business trip (`active_employees`), and the number of limit increase requests waiting for owner review (`pending_limit_requests`).
   * @tags api
   * @name B2BDashboardSummaryList
   * @summary Four main dashboard statistics
   * @request GET:/b2b/dashboard/summary/
   * @secure
   */
  export namespace B2BDashboardSummaryList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BDashboardSummaryListData;
  }

  /**
   * @description Return each department's owner-defined budget limit (`budget_limit`), used amount (`used_amount`), remaining amount (`remaining_amount`), status (`status`), and assigned employees (`employees`). `status` is derived from the remaining budget: `high` means more than 25% remains, `low` means 25% or less (but not zero), `empty` means nothing remains or the limit was exceeded, and `no_limit` means no limit is set for the department.
   * @tags api
   * @name B2BDepartmentsList
   * @summary List departments
   * @request GET:/b2b/departments/
   * @secure
   */
  export namespace B2BDepartmentsList {
    export type RequestParams = {};
    export type RequestQuery = {
      search?: string;
      /** YYYY-MM; scopes used_amount to that month */
      month?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BDepartmentsListData;
  }

  /**
   * No description
   * @tags api
   * @name B2BDepartmentsCreate
   * @request POST:/b2b/departments/
   * @secure
   */
  export namespace B2BDepartmentsCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = B2BDepartment;
    export type RequestHeaders = {};
    export type ResponseBody = B2BDepartmentsCreateData;
  }

  /**
   * @description Return each department's approved budget-request totals and trip count for the selected month. If `month` is omitted, the current month is used.
   * @tags api
   * @name B2BDepartmentsMonthlySpendingList
   * @summary Monthly spending by department
   * @request GET:/b2b/departments/monthly-spending/
   * @secure
   */
  export namespace B2BDepartmentsMonthlySpendingList {
    export type RequestParams = {};
    export type RequestQuery = {
      /**
       * Month in YYYY-MM format. Defaults to the current month.
       * @format date
       * @example "2026-06"
       */
      month?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BDepartmentsMonthlySpendingListData;
  }

  /**
   * @description PATCH / DELETE /b2b/departments/<id>/ — owner or performer. PATCH renames the department and/or changes its color badge. DELETE removes it, but only once it has no active employees left — the FK is ``ON DELETE SET NULL``, not cascade, so deleting a department that still has people in it would silently orphan them. Use ``POST /b2b/departments/<id>/move-employees/`` to relocate them first.
   * @tags api
   * @name B2BDepartmentsPartialUpdate
   * @summary Rename or recolor a department
   * @request PATCH:/b2b/departments/{department_id}/
   * @secure
   */
  export namespace B2BDepartmentsPartialUpdate {
    export type RequestParams = {
      departmentId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = B2BDepartmentUpdate;
    export type RequestHeaders = {};
    export type ResponseBody = B2BDepartmentsPartialUpdateData;
  }

  /**
   * @description Fails with 400 if the department still has active employees, unless `with_employees=true` is passed — that also deactivates every employee still in it (same as `DELETE /b2b/employees/<id>/` would, just for the whole department at once) before removing the department itself. To keep the employees instead, move them first via `POST /b2b/departments/<id>/move-employees/`.
   * @tags api
   * @name B2BDepartmentsDelete
   * @summary Delete a department
   * @request DELETE:/b2b/departments/{department_id}/
   * @secure
   */
  export namespace B2BDepartmentsDelete {
    export type RequestParams = {
      departmentId: string;
    };
    export type RequestQuery = {
      /** Also deactivate the department's employees instead of blocking the delete. */
      with_employees?: boolean;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BDepartmentsDeleteData;
  }

  /**
   * @description POST /b2b/departments/<id>/move-employees/ — owner or performer. Reassigns every employee of department <id> to `target_department_id`, then deletes <id> — the "delete a department without losing its employees" flow: move everyone out first, source department goes away right after since there's nothing left to keep it around for.
   * @tags api
   * @name B2BDepartmentsMoveEmployeesCreate
   * @summary Move a department's employees out, then delete it
   * @request POST:/b2b/departments/{department_id}/move-employees/
   * @secure
   */
  export namespace B2BDepartmentsMoveEmployeesCreate {
    export type RequestParams = {
      departmentId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = B2BDepartmentMoveEmployees;
    export type RequestHeaders = {};
    export type ResponseBody = B2BDepartmentsMoveEmployeesCreateData;
  }

  /**
   * No description
   * @tags api
   * @name B2BEmployeesList
   * @request GET:/b2b/employees/
   * @secure
   */
  export namespace B2BEmployeesList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BEmployeesListData;
  }

  /**
   * @description Adds a new employee to the company. All of `first_name`, `last_name`, `passport_series`, `passport_pinfl`, `department_id`, `email` and `phone` are required and entered by hand. `first_name` and `last_name` are stored joined as `full_name`.
   * @tags api
   * @name B2BEmployeesCreate
   * @summary Add a new employee
   * @request POST:/b2b/employees/
   * @secure
   */
  export namespace B2BEmployeesCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = {
      /** Surname (required) */
      last_name: string;
      /** Given name (required) */
      first_name: string;
      /** ID card / passport number, format AA1234567 */
      passport_series: string;
      /** PINFL — 14 digits */
      passport_pinfl: string;
      /** Department ID (required) */
      department_id: number;
      /**
       * Email address (required)
       * @format email
       */
      email: string;
      /** Phone number (required) */
      phone: string;
      /**
       * Employee profile photo (jpg, png; max 5MB, optional)
       * @format binary
       */
      photo?: File;
      /** Job title */
      position?: string;
      /** Individual limit for the employee */
      individual_limit?: number;
      /** Employee status (default: available) */
      status?: "available" | "on_trip" | "blocked";
      /** Employee role (default: employee) */
      role?: "owner" | "performer" | "employee";
    };
    export type RequestHeaders = {};
    export type ResponseBody = B2BEmployeesCreateData;
  }

  /**
   * @description Return every active employee who has a personal budget (`individual_limit`) set, together with how much of it has been used (`used_amount`, scoped to `month` when given), the remaining amount, and a status derived the same way as department status: `high` (more than 25% remains), `low` (25% or less), `empty` (nothing remains).
   * @tags api
   * @name B2BEmployeesLimitsList
   * @summary List employees with a personal limit
   * @request GET:/b2b/employees/limits/
   * @secure
   */
  export namespace B2BEmployeesLimitsList {
    export type RequestParams = {};
    export type RequestQuery = {
      search?: string;
      /** YYYY-MM; scopes used_amount to that month */
      month?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BEmployeesLimitsListData;
  }

  /**
   * @description Accepts the front and back scans of an ID document, saves them temporarily, and queues OCR extraction as a background job. Poll GET /b2b/employees/passport-preview/{job_id}/ for the result (full_name, date_of_birth, passport_series, passport_pinfl).
   * @tags api
   * @name B2BEmployeesPassportPreviewCreate
   * @summary Start passport OCR extraction (async)
   * @request POST:/b2b/employees/passport-preview/
   * @secure
   */
  export namespace B2BEmployeesPassportPreviewCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = {
      /**
       * Front side of the ID document
       * @format binary
       */
      passport_upload_front: File;
      /**
       * Back side of the ID document with MRZ code
       * @format binary
       */
      passport_upload_back: File;
    };
    export type RequestHeaders = {};
    export type ResponseBody = B2BEmployeesPassportPreviewCreateData;
  }

  /**
   * @description ``B2BEmployeePassportPreviewView`` navbatga qo'ygan fon vazifasining natijasini so'rash uchun (polling).
   * @tags api
   * @name B2BEmployeesPassportPreviewRead
   * @summary Poll passport OCR job status
   * @request GET:/b2b/employees/passport-preview/{job_id}/
   * @secure
   */
  export namespace B2BEmployeesPassportPreviewRead {
    export type RequestParams = {
      jobId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BEmployeesPassportPreviewReadData;
  }

  /**
   * @description Return the employees with the highest number of business-trip assignments for the company, ordered by `trip_count` descending. Default `limit=5`, maximum 100.
   * @tags api
   * @name B2BEmployeesTopByTripsList
   * @summary Top employees by trip count
   * @request GET:/b2b/employees/top-by-trips/
   * @secure
   */
  export namespace B2BEmployeesTopByTripsList {
    export type RequestParams = {};
    export type RequestQuery = {
      /**
       * Number of employees to return (1-100). Default 5.
       * @default 5
       */
      limit?: number;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BEmployeesTopByTripsListData;
  }

  /**
   * @description A performer can view employees but not modify or remove them — only the owner edits/deletes.
   * @tags api
   * @name B2BEmployeesRead
   * @request GET:/b2b/employees/{employee_id}/
   * @secure
   */
  export namespace B2BEmployeesRead {
    export type RequestParams = {
      employeeId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BEmployeesReadData;
  }

  /**
   * @description The 'owner' role is never assigned (resulting in a 400 error). If a user is designated as the 'performer', the company's current performer is automatically reassigned to the 'employee' role, and the new user becomes the performer.
   * @tags api
   * @name B2BEmployeesPartialUpdate
   * @request PATCH:/b2b/employees/{employee_id}/
   * @secure
   */
  export namespace B2BEmployeesPartialUpdate {
    export type RequestParams = {
      employeeId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = B2BEmployee;
    export type RequestHeaders = {};
    export type ResponseBody = B2BEmployeesPartialUpdateData;
  }

  /**
   * @description A performer can view employees but not modify or remove them — only the owner edits/deletes.
   * @tags api
   * @name B2BEmployeesDelete
   * @request DELETE:/b2b/employees/{employee_id}/
   * @secure
   */
  export namespace B2BEmployeesDelete {
    export type RequestParams = {
      employeeId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BEmployeesDeleteData;
  }

  /**
   * @description Each booking request, including requests with multiple rooms and employees, appears here as a single row with `room_count` and `employee_count`. For the full details, use `GET /b2b/hotels/bookings/<id>/`.
   * @tags B2B / Hotels
   * @name B2BHotelsBookingsList
   * @summary List company booking requests
   * @request GET:/b2b/hotels/bookings/
   * @secure
   */
  export namespace B2BHotelsBookingsList {
    export type RequestParams = {};
    export type RequestQuery = {
      /** Filter by business trip. */
      trip_id?: number;
      /** Filter by status. */
      status?: "pending" | "confirmed" | "rejected" | "cancelled";
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BHotelsBookingsListData;
  }

  /**
   * @description Final step 2 submission: send `hotel_guid`, dates, and the employees assigned to each room (`employee_ids`, 1 or 2 people per room depending on capacity). The server will: (1) re-check availability for each room, (2) create a `pms_booking` for each room in the hotel's tenant schema, and (3) attach employees to the trip's `TripEmployee` rows. The whole process runs in a single transaction, so if any room is unavailable nothing is created. The resulting hotel booking request starts in `pending`; if the hotel accepts it becomes `confirmed`, and if it is rejected it becomes `rejected`.
   * @tags B2B / Hotels
   * @name B2BHotelsBookingsCreate
   * @summary Submit a booking request (rooms + employees, owner or performer)
   * @request POST:/b2b/hotels/bookings/
   * @secure
   */
  export namespace B2BHotelsBookingsCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = HotelBookingRequestCreate;
    export type RequestHeaders = {};
    export type ResponseBody = B2BHotelsBookingsCreateData;
  }

  /**
   * @description GET /b2b/hotels/bookings/<booking_id>/ Bitta bron so'rovining to'liq tafsiloti — bosishda "hammasi ko'rinadi": mehmonxona, sanalar, holat, va har bir xona + unga biriktirilgan xodimlar ro'yxati.
   * @tags B2B / Hotels
   * @name B2BHotelsBookingsRead
   * @summary Get company booking request details
   * @request GET:/b2b/hotels/bookings/{booking_id}/
   * @secure
   */
  export namespace B2BHotelsBookingsRead {
    export type RequestParams = {
      bookingId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BHotelsBookingsReadData;
  }

  /**
   * @description Cancels every active room booking in the request. Only pending or confirmed bookings can be cancelled, and only before check-in.
   * @tags B2B / Hotels
   * @name B2BHotelsBookingsCancelCreate
   * @summary Cancel a grouped hotel booking
   * @request POST:/b2b/hotels/bookings/{booking_id}/cancel/
   * @secure
   */
  export namespace B2BHotelsBookingsCancelCreate {
    export type RequestParams = {
      bookingId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BHotelsBookingsCancelCreateData;
  }

  /**
   * @description Powers the destination suggestions in hotel search. Cities are returned with the number of bookable hotels in each, most first, and follow the same visibility rules as `/b2b/hotels/search/` so a suggested city never yields an empty result.
   * @tags B2B / Executer
   * @name B2BHotelsCitiesList
   * @summary List cities that have bookable hotels
   * @request GET:/b2b/hotels/cities/
   * @secure
   */
  export namespace B2BHotelsCitiesList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BHotelsCitiesListData;
  }

  /**
   * @description `month_spend` is the sum of confirmed hotel bookings' room prices for the current calendar month. `top_hotels` lists up to 5 hotels booked this month, ordered by `booking_count` descending.
   * @tags B2B / Statistics
   * @name B2BHotelsMonthlySummaryList
   * @summary This month's hotel spend + top booked hotels
   * @request GET:/b2b/hotels/monthly-summary/
   * @secure
   */
  export namespace B2BHotelsMonthlySummaryList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BHotelsMonthlySummaryListData;
  }

  /**
   * @description Return up to `limit` recommended hotels (default 4, max 12). `limit_status` is `limit_exceeded` when the hotel's nightly price is above the company's travel-policy limit, otherwise `within_limit`. Without a configured company-wide limit, all hotels are returned as `within_limit`.
   * @tags B2B / Statistics
   * @name B2BHotelsRecommendationsList
   * @summary Hotel recommendations for the dashboard
   * @request GET:/b2b/hotels/recommendations/
   * @secure
   */
  export namespace B2BHotelsRecommendationsList {
    export type RequestParams = {};
    export type RequestQuery = {
      /**
       * Number of hotels to return (1-12). Default 4.
       * @default 4
       */
      limit?: number;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BHotelsRecommendationsListData;
  }

  /**
   * @description Choose a hotel for a business trip. Use `sort_by` for sorting: `popular`, `weel_recommended`, `cheap`, or `expensive`. For map-based selection, provide `lat`, `lon`, and `radius_km`. If `check_in`, `check_out`, and `guests` are provided, only hotels that can accommodate the stay are returned. If one room is not enough, the response includes the best matching room combination for that hotel as `matching_rooms` (for example, two rooms with capacities 3 and 4 for 7 guests). If `budget_max` is provided, the hotel and matching room selection must stay within the total estimated price for the selected dates. Each result includes `total_estimated_price`. `guid` is more reliable than the numeric `id` because the hotel can be searched across multiple tenant schemas.
   * @tags B2B / Executer
   * @name B2BHotelsSearchList
   * @summary Search and filter hotels (owner or performer)
   * @request GET:/b2b/hotels/search/
   * @secure
   */
  export namespace B2BHotelsSearchList {
    export type RequestParams = {};
    export type RequestQuery = {
      city?: string;
      /** @format date */
      check_in?: string;
      /** @format date */
      check_out?: string;
      /**
       * @min 1
       * @default 1
       */
      guests?: number;
      /** @min 1 */
      adults?: number;
      /** @min 0 */
      children?: number;
      /** @min 0 */
      babies?: number;
      /**
       * @min 1
       * @max 5
       */
      star_rating?: number | null;
      weel_classification?:
        | "standard"
        | "essential"
        | "comfort"
        | "comfort_plus"
        | "business"
        | "premium"
        | "signature";
      is_recommended?: boolean | null;
      themes?: string[];
      /** @format decimal */
      price_min?: string | null;
      /** @format decimal */
      price_max?: string | null;
      /** @format decimal */
      budget_max?: string | null;
      room_types?: string;
      room_type_presets?: string;
      rate_plans?: string;
      meal_plans?: string;
      /** @min 1 */
      min_capacity?: number;
      /** @min 1 */
      max_capacity?: number;
      lat?: number | null;
      lon?: number | null;
      /**
       * @min 0.1
       * @default 10
       */
      radius_km?: number;
      /** @default "popular" */
      sort_by?:
        | "popular"
        | "rating"
        | "reviews"
        | "cheap"
        | "expensive"
        | "weel_recommended";
      /**
       * @min 1
       * @default 1
       */
      page?: number;
      /**
       * @min 1
       * @max 100
       * @default 20
       */
      page_size?: number;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BHotelsSearchListData;
  }

  /**
   * @description Return the hotels most frequently booked by the company, ordered by `booking_count` descending. For each hotel, `total_spend` is also returned as the total price of all bookings for that hotel. Default `limit=3`, maximum 100.
   * @tags api
   * @name B2BHotelsTopByBookingsList
   * @summary Top hotels by company booking count
   * @request GET:/b2b/hotels/top-by-bookings/
   * @secure
   */
  export namespace B2BHotelsTopByBookingsList {
    export type RequestParams = {};
    export type RequestQuery = {
      /**
       * Number of hotels to return (1-100). Default 3.
       * @default 3
       */
      limit?: number;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BHotelsTopByBookingsListData;
  }

  /**
   * @description Return the daily occupancy status for each active room in the selected hotel (`hotel_guid`) over the `from_date` to `to_date` range. Each row contains `room_id`, `room_name`, `date`, and `status` (`booked` or `available`). This includes both B2B bookings and bookings made through the hotel's own site, so owners and performers can see the real occupancy state and choose free dates accurately.
   * @tags B2B / Executer
   * @name B2BHotelsCalendarList
   * @summary Hotel occupancy calendar
   * @request GET:/b2b/hotels/{hotel_guid}/calendar/
   * @secure
   */
  export namespace B2BHotelsCalendarList {
    export type RequestParams = {
      /** Hotel GUID identifier. */
      hotelGuid: string;
    };
    export type RequestQuery = {
      /**
       * Start date for the calendar range (YYYY-MM-DD).
       * @format date
       */
      from_date: string;
      /**
       * End date for the calendar range (YYYY-MM-DD).
       * @format date
       */
      to_date: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BHotelsCalendarListData;
  }

  /**
   * @description GET /b2b/hotels/<hotel_guid>/card/ Fetch one hotel's search-result card by GUID — used to reopen the booking flow for an already-known hotel (e.g. clicking a "popular hotel" in analytics) without a fuzzy city/name search.
   * @tags B2B / Executer
   * @name B2BHotelsCardList
   * @summary Fetch a single hotel card by GUID
   * @request GET:/b2b/hotels/{hotel_guid}/card/
   * @secure
   */
  export namespace B2BHotelsCardList {
    export type RequestParams = {
      hotelGuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BHotelsCardListData;
  }

  /**
   * @description For the selected `hotel_guid`, return the available rooms for the same `check_in`/`check_out`/`guests` values chosen in step 1. Each room's `capacity` indicates how many employees can be assigned to it, usually 1 or 2.
   * @tags B2B / Executer
   * @name B2BHotelsRoomsList
   * @summary List hotel rooms (owner or performer, step 2)
   * @request GET:/b2b/hotels/{hotel_guid}/rooms/
   * @secure
   */
  export namespace B2BHotelsRoomsList {
    export type RequestParams = {
      hotelGuid: string;
    };
    export type RequestQuery = {
      /** @format date */
      check_in?: string;
      /** @format date */
      check_out?: string;
      /**
       * @min 1
       * @default 1
       */
      guests?: number;
      room_types?: string;
      room_type_presets?: string;
      rate_plans?: string;
      meal_plans?: string;
      /** @min 1 */
      min_capacity?: number;
      /** @min 1 */
      max_capacity?: number;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BHotelsRoomsListData;
  }

  /**
   * @description A business owner who is not yet a B2B client can submit their name, company name, email, and phone number to request partnership. Authentication is not required.
   * @tags api
   * @name B2BLeadRequestsCreate
   * @summary Submit a partnership request (new business owners)
   * @request POST:/b2b/lead-requests/
   * @secure
   */
  export namespace B2BLeadRequestsCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = B2BLeadRequest;
    export type RequestHeaders = {};
    export type ResponseBody = B2BLeadRequestsCreateData;
  }

  /**
   * @description Return the employees assigned to the company's most recent business trips. Default `limit=5`, maximum 100.
   * @tags api
   * @name B2BRecentTripsEmployeesList
   * @summary Employees assigned to the most recent trips
   * @request GET:/b2b/recent-trips/employees/
   * @secure
   */
  export namespace B2BRecentTripsEmployeesList {
    export type RequestParams = {};
    export type RequestQuery = {
      /**
       * Number of employees to return (1-100). Default 5.
       * @default 5
       */
      limit?: number;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BRecentTripsEmployeesListData;
  }

  /**
   * @description Returns spending summaries grouped by time window (`periods`) and by department (`by_department`). The `period` query parameter selects the window for the department breakdown.
   * @tags B2B / Statistics
   * @name B2BStatisticsList
   * @summary Company spending statistics
   * @request GET:/b2b/statistics/
   * @secure
   */
  export namespace B2BStatisticsList {
    export type RequestParams = {};
    export type RequestQuery = {
      /**
       * Time window: 1h, 1d, 14d, 1m, 3m, 1y, or all (default: all)
       * @default "all"
       */
      period?: "1h" | "1d" | "14d" | "1m" | "3m" | "1y" | "all";
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BStatisticsListData;
  }

  /**
   * @description Returns a date-bucketed approved-spend series for the selected time window, along with the period total and percent change versus the preceding equal-length period.
   * @tags B2B / Statistics
   * @name B2BStatisticsChartList
   * @summary Company spending chart
   * @request GET:/b2b/statistics/chart/
   * @secure
   */
  export namespace B2BStatisticsChartList {
    export type RequestParams = {};
    export type RequestQuery = {
      /**
       * Time window: 1h, 1d, 14d, 1m, 3m, 1y, or all (default: 14d)
       * @default "14d"
       */
      period?: "1h" | "1d" | "14d" | "1m" | "3m" | "1y" | "all";
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BStatisticsChartListData;
  }

  /**
   * @description Return a month-by-month approved-spend series for the last `months` calendar months (default 12), each point carrying its own month-over-month `change_percent`.
   * @tags B2B / Statistics
   * @name B2BStatisticsMonthlyChartList
   * @summary Monthly company spending chart
   * @request GET:/b2b/statistics/monthly-chart/
   * @secure
   */
  export namespace B2BStatisticsMonthlyChartList {
    export type RequestParams = {};
    export type RequestQuery = {
      /**
       * Number of months: 3, 6, or 12 (default: 12)
       * @default 12
       */
      months?: 3 | 6 | 12;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BStatisticsMonthlyChartListData;
  }

  /**
   * @description Return a week-by-week approved-spend series for the selected calendar month, each point carrying its own week-over-week `change_percent`. If `month` is omitted, the current month is used.
   * @tags B2B / Statistics
   * @name B2BStatisticsWeeklyChartList
   * @summary Weekly company spending chart for one month
   * @request GET:/b2b/statistics/weekly-chart/
   * @secure
   */
  export namespace B2BStatisticsWeeklyChartList {
    export type RequestParams = {};
    export type RequestQuery = {
      /**
       * Month in YYYY-MM format. Defaults to the current month.
       * @format date
       * @example "2026-06"
       */
      month?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BStatisticsWeeklyChartListData;
  }

  /**
   * @description Paginated list of budget-request transactions, newest first. `search` filters by employee or department name.
   * @tags B2B / Statistics
   * @name B2BTransactionsList
   * @summary Transaction history
   * @request GET:/b2b/transactions/
   * @secure
   */
  export namespace B2BTransactionsList {
    export type RequestParams = {};
    export type RequestQuery = {
      /** Search by employee/department name. */
      search?: string;
      /** Page number (default 1). */
      page?: number;
      /** Rows per page (default 10, max 100). */
      page_size?: number;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BTransactionsListData;
  }

  /**
   * @description Travel Policy — viewable by owner and performer, but only the owner can change it (performer gets a read-only view on the frontend, and is blocked here too in case the request bypasses the UI).
   * @tags api
   * @name B2BTravelPolicyList
   * @request GET:/b2b/travel-policy/
   * @secure
   */
  export namespace B2BTravelPolicyList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BTravelPolicyListData;
  }

  /**
   * @description Travel Policy — viewable by owner and performer, but only the owner can change it (performer gets a read-only view on the frontend, and is blocked here too in case the request bypasses the UI).
   * @tags api
   * @name B2BTravelPolicyPartialUpdate
   * @request PATCH:/b2b/travel-policy/
   * @secure
   */
  export namespace B2BTravelPolicyPartialUpdate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = TravelPolicy;
    export type RequestHeaders = {};
    export type ResponseBody = B2BTravelPolicyPartialUpdateData;
  }

  /**
   * @description Use `applies_to` to choose which limit rules to return: `all` for all company limits (global, department, and employee), `department` for department rules, and `employee` for individual employee rules.
   * @tags api
   * @name B2BTravelPolicyLimitsList
   * @summary List limit rules
   * @request GET:/b2b/travel-policy/limits/
   * @secure
   */
  export namespace B2BTravelPolicyLimitsList {
    export type RequestParams = {};
    export type RequestQuery = {
      /** Which type of limit rules to return. */
      applies_to: "all" | "department" | "employee";
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BTravelPolicyLimitsListData;
  }

  /**
   * @description `applies_to`: `all` for a company-wide global limit (only one per company; do not send `target_id`); `department` or `employee` with the matching `target_id` (`department_id` or `employee_id`).
   * @tags api
   * @name B2BTravelPolicyLimitsCreate
   * @summary Add a new limit rule
   * @request POST:/b2b/travel-policy/limits/
   * @secure
   */
  export namespace B2BTravelPolicyLimitsCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = TravelPolicyRuleCreate;
    export type RequestHeaders = {};
    export type ResponseBody = B2BTravelPolicyLimitsCreateData;
  }

  /**
   * @description PATCH / DELETE /api/b2b/travel-policy/limits/<rule_id>/ — owner-only.
   * @tags api
   * @name B2BTravelPolicyLimitsPartialUpdate
   * @summary Update a limit rule
   * @request PATCH:/b2b/travel-policy/limits/{rule_id}/
   * @secure
   */
  export namespace B2BTravelPolicyLimitsPartialUpdate {
    export type RequestParams = {
      ruleId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = TravelPolicyRuleUpdate;
    export type RequestHeaders = {};
    export type ResponseBody = B2BTravelPolicyLimitsPartialUpdateData;
  }

  /**
   * @description PATCH / DELETE /api/b2b/travel-policy/limits/<rule_id>/ — owner-only.
   * @tags api
   * @name B2BTravelPolicyLimitsDelete
   * @summary Delete a limit rule
   * @request DELETE:/b2b/travel-policy/limits/{rule_id}/
   * @secure
   */
  export namespace B2BTravelPolicyLimitsDelete {
    export type RequestParams = {
      ruleId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BTravelPolicyLimitsDeleteData;
  }

  /**
   * No description
   * @tags api
   * @name B2BTripsList
   * @request GET:/b2b/trips/
   * @secure
   */
  export namespace B2BTripsList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BTripsListData;
  }

  /**
   * No description
   * @tags api
   * @name B2BTripsCreate
   * @request POST:/b2b/trips/
   * @secure
   */
  export namespace B2BTripsCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = BusinessTrip;
    export type RequestHeaders = {};
    export type ResponseBody = B2BTripsCreateData;
  }

  /**
   * @description Return employees attached to active (`active` or `pending`, plus `completed` for `type=tugagan`) trips whose assignments are not `cancelled` or `checked_out` (unless `status` is given explicitly). `type=yolda` returns employees whose trip dates include today, `type=borgan` returns employees whose trip starts in the future, `type=all` (default) combines both groups, and `type=tugagan` returns the archive of trips that have already ended. Pass `page` to paginate (`count` becomes the total row count across all pages instead of the page size); omit it to keep the legacy behaviour of returning every matching row (optionally capped by `limit`).
   * @tags api
   * @name B2BTripsActiveEmployeesList
   * @summary Employees on a trip, about to depart, or archived
   * @request GET:/b2b/trips/active-employees/
   * @secure
   */
  export namespace B2BTripsActiveEmployeesList {
    export type RequestParams = {};
    export type RequestQuery = {
      /**
       * Filter type: yolda | borgan | all | tugagan (default: all)
       * @default "all"
       */
      type?: "yolda" | "borgan" | "all" | "tugagan";
      /** Filter by employee full name (partial, case-insensitive). */
      search?: string;
      /** Filter to a single department. */
      department_id?: number;
      /** Filter to a single trip-employee status. */
      status?:
        | "invited"
        | "confirmed"
        | "checked_in"
        | "checked_out"
        | "cancelled";
      /** Only include trips ending on/after this date (YYYY-MM-DD). */
      date_from?: string;
      /** Only include trips starting on/before this date (YYYY-MM-DD). */
      date_to?: string;
      /** 1-indexed page number. Enables pagination. */
      page?: number;
      /** Rows per page (1-100, default 10). Only used with `page`. */
      page_size?: number;
      /** Max number of employees to return (1-100). Omit for no limit. Ignored when `page` is set. */
      limit?: number;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BTripsActiveEmployeesListData;
  }

  /**
   * @description Counts distinct employees per trip status for trips starting this calendar month: `active`, `pending`, `completed`, `cancelled`.
   * @tags B2B / Statistics
   * @name B2BTripsStatusSummaryList
   * @summary This month's trip status breakdown
   * @request GET:/b2b/trips/status-summary/
   * @secure
   */
  export namespace B2BTripsStatusSummaryList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BTripsStatusSummaryListData;
  }

  /**
   * No description
   * @tags api
   * @name B2BTripsRead
   * @request GET:/b2b/trips/{trip_id}/
   * @secure
   */
  export namespace B2BTripsRead {
    export type RequestParams = {
      tripId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BTripsReadData;
  }

  /**
   * No description
   * @tags api
   * @name B2BTripsPartialUpdate
   * @request PATCH:/b2b/trips/{trip_id}/
   * @secure
   */
  export namespace B2BTripsPartialUpdate {
    export type RequestParams = {
      tripId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = BusinessTrip;
    export type RequestHeaders = {};
    export type ResponseBody = B2BTripsPartialUpdateData;
  }

  /**
   * No description
   * @tags api
   * @name B2BTripsDelete
   * @request DELETE:/b2b/trips/{trip_id}/
   * @secure
   */
  export namespace B2BTripsDelete {
    export type RequestParams = {
      tripId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BTripsDeleteData;
  }

  /**
   * No description
   * @tags api
   * @name B2BTripsEmployeesList
   * @request GET:/b2b/trips/{trip_id}/employees/
   * @secure
   */
  export namespace B2BTripsEmployeesList {
    export type RequestParams = {
      tripId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BTripsEmployeesListData;
  }

  /**
   * No description
   * @tags api
   * @name B2BTripsEmployeesCreate
   * @request POST:/b2b/trips/{trip_id}/employees/
   * @secure
   */
  export namespace B2BTripsEmployeesCreate {
    export type RequestParams = {
      tripId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = TripEmployee;
    export type RequestHeaders = {};
    export type ResponseBody = B2BTripsEmployeesCreateData;
  }

  /**
   * No description
   * @tags api
   * @name B2BTripsVoucherList
   * @request GET:/b2b/trips/{trip_id}/voucher/
   * @secure
   */
  export namespace B2BTripsVoucherList {
    export type RequestParams = {
      tripId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BTripsVoucherListData;
  }

  /**
   * No description
   * @tags api
   * @name B2BTripsVoucherCreate
   * @request POST:/b2b/trips/{trip_id}/voucher/
   * @secure
   */
  export namespace B2BTripsVoucherCreate {
    export type RequestParams = {
      tripId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BTripsVoucherCreateData;
  }

  /**
   * @description POST /api/b2b/workspace/auth/login/ — send a login code.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceAuthLoginCreate
   * @summary Send a login OTP to an employee's phone
   * @request POST:/b2b/workspace/auth/login/
   * @secure
   */
  export namespace B2BWorkspaceAuthLoginCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = WorkspaceLogin;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceAuthLoginCreateData;
  }

  /**
   * @description POST /api/b2b/workspace/auth/login/verify/ — exchange the code for tokens.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceAuthLoginVerifyCreate
   * @summary Verify the OTP and receive workspace tokens
   * @request POST:/b2b/workspace/auth/login/verify/
   * @secure
   */
  export namespace B2BWorkspaceAuthLoginVerifyCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = WorkspaceLoginVerify;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceAuthLoginVerifyCreateData;
  }

  /**
   * No description
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceAuthLogoutCreate
   * @summary Revoke the refresh token
   * @request POST:/b2b/workspace/auth/logout/
   * @secure
   */
  export namespace B2BWorkspaceAuthLogoutCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = WorkspaceRefresh;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceAuthLogoutCreateData;
  }

  /**
   * No description
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceAuthTokenRefreshCreate
   * @summary Exchange a workspace refresh token for a new pair
   * @request POST:/b2b/workspace/auth/token/refresh/
   * @secure
   */
  export namespace B2BWorkspaceAuthTokenRefreshCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = WorkspaceRefresh;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceAuthTokenRefreshCreateData;
  }

  /**
   * @description GET  /api/b2b/workspace/chats/ — the caller's conversations. POST /api/b2b/workspace/chats/ — open a direct chat, or a group (managers).
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceChatsList
   * @summary List chat threads
   * @request GET:/b2b/workspace/chats/
   * @secure
   */
  export namespace B2BWorkspaceChatsList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceChatsListData;
  }

  /**
   * @description GET  /api/b2b/workspace/chats/ — the caller's conversations. POST /api/b2b/workspace/chats/ — open a direct chat, or a group (managers).
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceChatsCreate
   * @summary Start a chat
   * @request POST:/b2b/workspace/chats/
   * @secure
   */
  export namespace B2BWorkspaceChatsCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = ThreadCreate;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceChatsCreateData;
  }

  /**
   * @description POST /api/b2b/workspace/chats/<id>/flags/ — pin / mute for this member.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceChatsFlagsCreate
   * @summary Pin or mute a chat
   * @request POST:/b2b/workspace/chats/{thread_id}/flags/
   * @secure
   */
  export namespace B2BWorkspaceChatsFlagsCreate {
    export type RequestParams = {
      threadId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = ThreadFlags;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceChatsFlagsCreateData;
  }

  /**
   * @description GET / POST messages in a thread the caller belongs to.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceChatsMessagesList
   * @summary Message history (oldest first, paged from the newest end)
   * @request GET:/b2b/workspace/chats/{thread_id}/messages/
   * @secure
   */
  export namespace B2BWorkspaceChatsMessagesList {
    export type RequestParams = {
      threadId: string;
    };
    export type RequestQuery = {
      before_id?: number;
      limit?: number;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceChatsMessagesListData;
  }

  /**
   * @description GET / POST messages in a thread the caller belongs to.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceChatsMessagesCreate
   * @summary Send a message
   * @request POST:/b2b/workspace/chats/{thread_id}/messages/
   * @secure
   */
  export namespace B2BWorkspaceChatsMessagesCreate {
    export type RequestParams = {
      threadId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = MessageWrite;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceChatsMessagesCreateData;
  }

  /**
   * @description POST /api/b2b/workspace/chats/<id>/read/
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceChatsReadCreate
   * @summary Mark a chat as read
   * @request POST:/b2b/workspace/chats/{thread_id}/read/
   * @secure
   */
  export namespace B2BWorkspaceChatsReadCreate {
    export type RequestParams = {
      threadId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceChatsReadCreateData;
  }

  /**
   * @description GET  /api/b2b/workspace/events/ — the calendar window. POST /api/b2b/workspace/events/ — managers create shared events; employees may create personal ones for themselves.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceEventsList
   * @summary List calendar events
   * @request GET:/b2b/workspace/events/
   * @secure
   */
  export namespace B2BWorkspaceEventsList {
    export type RequestParams = {};
    export type RequestQuery = {
      /** @format date-time */
      start?: string;
      /** @format date-time */
      end?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceEventsListData;
  }

  /**
   * @description GET  /api/b2b/workspace/events/ — the calendar window. POST /api/b2b/workspace/events/ — managers create shared events; employees may create personal ones for themselves.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceEventsCreate
   * @summary Create a calendar event
   * @request POST:/b2b/workspace/events/
   * @secure
   */
  export namespace B2BWorkspaceEventsCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = EventWrite;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceEventsCreateData;
  }

  /**
   * No description
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceEventsRead
   * @summary Event detail
   * @request GET:/b2b/workspace/events/{event_id}/
   * @secure
   */
  export namespace B2BWorkspaceEventsRead {
    export type RequestParams = {
      eventId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceEventsReadData;
  }

  /**
   * No description
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceEventsPartialUpdate
   * @summary Edit an event
   * @request PATCH:/b2b/workspace/events/{event_id}/
   * @secure
   */
  export namespace B2BWorkspaceEventsPartialUpdate {
    export type RequestParams = {
      eventId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = EventPatch;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceEventsPartialUpdateData;
  }

  /**
   * No description
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceEventsDelete
   * @summary Delete an event
   * @request DELETE:/b2b/workspace/events/{event_id}/
   * @secure
   */
  export namespace B2BWorkspaceEventsDelete {
    export type RequestParams = {
      eventId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceEventsDeleteData;
  }

  /**
   * @description GET /api/b2b/workspace/hotels/ — partner hotels, shaped for the phone. A thin projection of the platform hotel card: the mobile list only renders a name, a location, a rating and a starting price, and shipping the full card (policies, rate plans, legal info) over mobile data for a list of 20 would cost far more than it shows.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceHotelsList
   * @summary Partner hotels
   * @request GET:/b2b/workspace/hotels/
   * @secure
   */
  export namespace B2BWorkspaceHotelsList {
    export type RequestParams = {};
    export type RequestQuery = {
      city?: string;
      search?: string;
      limit?: number;
      offset?: number;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceHotelsListData;
  }

  /**
   * @description GET /api/b2b/workspace/me/ — profile plus the permission map the app builds its UI from.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceMeList
   * @summary Signed-in employee and permissions
   * @request GET:/b2b/workspace/me/
   * @secure
   */
  export namespace B2BWorkspaceMeList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceMeListData;
  }

  /**
   * @description GET  /api/b2b/workspace/tasks/ — tasks the caller may see. POST /api/b2b/workspace/tasks/ — managers only.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceTasksList
   * @summary List tasks (employees see only their own)
   * @request GET:/b2b/workspace/tasks/
   * @secure
   */
  export namespace B2BWorkspaceTasksList {
    export type RequestParams = {};
    export type RequestQuery = {
      status?: "todo" | "in_progress" | "review" | "done";
      search?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceTasksListData;
  }

  /**
   * @description GET  /api/b2b/workspace/tasks/ — tasks the caller may see. POST /api/b2b/workspace/tasks/ — managers only.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceTasksCreate
   * @summary Create a task (owner/manager only)
   * @request POST:/b2b/workspace/tasks/
   * @secure
   */
  export namespace B2BWorkspaceTasksCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = TaskWrite;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceTasksCreateData;
  }

  /**
   * @description GET / PATCH / DELETE a single task.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceTasksRead
   * @summary Task detail
   * @request GET:/b2b/workspace/tasks/{task_id}/
   * @secure
   */
  export namespace B2BWorkspaceTasksRead {
    export type RequestParams = {
      taskId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceTasksReadData;
  }

  /**
   * @description GET / PATCH / DELETE a single task.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceTasksPartialUpdate
   * @summary Edit a task (owner/manager only)
   * @request PATCH:/b2b/workspace/tasks/{task_id}/
   * @secure
   */
  export namespace B2BWorkspaceTasksPartialUpdate {
    export type RequestParams = {
      taskId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = TaskPatch;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceTasksPartialUpdateData;
  }

  /**
   * @description GET / PATCH / DELETE a single task.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceTasksDelete
   * @summary Delete a task (owner/manager only)
   * @request DELETE:/b2b/workspace/tasks/{task_id}/
   * @secure
   */
  export namespace B2BWorkspaceTasksDelete {
    export type RequestParams = {
      taskId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceTasksDeleteData;
  }

  /**
   * @description POST /api/b2b/workspace/tasks/<id>/comments/
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceTasksCommentsCreate
   * @summary Comment on a task
   * @request POST:/b2b/workspace/tasks/{task_id}/comments/
   * @secure
   */
  export namespace B2BWorkspaceTasksCommentsCreate {
    export type RequestParams = {
      taskId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = TaskCommentWrite;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceTasksCommentsCreateData;
  }

  /**
   * @description POST /api/b2b/workspace/tasks/<id>/status/ The one write an employee always has: moving a task they were given from todo → in progress → review → done.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceTasksStatusCreate
   * @summary Change a task's status
   * @request POST:/b2b/workspace/tasks/{task_id}/status/
   * @secure
   */
  export namespace B2BWorkspaceTasksStatusCreate {
    export type RequestParams = {
      taskId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = TaskStatus;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceTasksStatusCreateData;
  }

  /**
   * @description POST /api/b2b/workspace/tasks/<id>/subtasks/<sid>/toggle/
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceTasksSubtasksToggleCreate
   * @summary Tick or untick a checklist step
   * @request POST:/b2b/workspace/tasks/{task_id}/subtasks/{subtask_id}/toggle/
   * @secure
   */
  export namespace B2BWorkspaceTasksSubtasksToggleCreate {
    export type RequestParams = {
      taskId: string;
      subtaskId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceTasksSubtasksToggleCreateData;
  }

  /**
   * @description GET /api/b2b/workspace/team/ — the company roster. Everyone can read it: names are needed to render assignees, chat rows and event participants. Editing the roster stays in the web dashboard.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceTeamList
   * @summary Company roster
   * @request GET:/b2b/workspace/team/
   * @secure
   */
  export namespace B2BWorkspaceTeamList {
    export type RequestParams = {};
    export type RequestQuery = {
      search?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceTeamListData;
  }
}

export namespace Booking {
  /**
   * @description Returns a paginated list of all bookings with filtering, search, and ordering support
   * @tags Admin / Booking
   * @name BookingAdminBookingsList
   * @summary List all bookings for admin
   * @request GET:/booking/admin/bookings/
   * @secure
   */
  export namespace BookingAdminBookingsList {
    export type RequestParams = {};
    export type RequestQuery = {
      /** Search by booking number or client phone number */
      search?: string;
      /** Order by field (created_at, check_in, status). Prefix with '-' for descending */
      ordering?: string;
      /** A page number within the paginated result set. */
      page?: number;
      /** Number of results to return per page. */
      page_size?: number;
      /** Filter bookings by status */
      status?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = BookingAdminBookingsListData;
  }

  /**
   * @description Return a list of booking related to the authenticated client
   * @tags Client / Booking
   * @name BookingClientList
   * @summary List client bookings
   * @request GET:/booking/client/
   * @secure
   */
  export namespace BookingClientList {
    export type RequestParams = {};
    export type RequestQuery = {
      /** Filter bookings by status */
      status?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = BookingClientListData;
  }

  /**
   * @description Creates a **PENDING booking** and places a **payment hold (UZS)**
   * @tags Client / Booking
   * @name BookingClientCreate
   * @summary Create booking and payment hold
   * @request POST:/booking/client/
   * @secure
   */
  export namespace BookingClientCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = RawClientBookingCreate;
    export type RequestHeaders = {};
    export type ResponseBody = BookingClientCreateData;
  }

  /**
   * @description Returns a list of history bookings created by the authenticated client
   * @tags Client / Booking
   * @name BookingClientHistoryList
   * @summary Retrieve booking history
   * @request GET:/booking/client/history/
   * @secure
   */
  export namespace BookingClientHistoryList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = BookingClientHistoryListData;
  }

  /**
   * @description Returns detailed information about a specific booking history belonging to the authenticated client
   * @tags Client / Booking
   * @name BookingClientHistoryRead
   * @summary Retrieve history booking details
   * @request GET:/booking/client/history/{booking_id}/
   * @secure
   */
  export namespace BookingClientHistoryRead {
    export type RequestParams = {
      /**
       * Unique booking GUID
       * @format uuid
       */
      bookingId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = BookingClientHistoryReadData;
  }

  /**
   * @description Client-only. Creates a pending hotel booking with payment hold, calendar slots, and notifications.
   * @tags Hotel / Booking
   * @name CreateHotelBooking
   * @summary Create a hotel booking
   * @request POST:/booking/client/hotel/
   * @secure
   */
  export namespace CreateHotelBooking {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = HotelBookingCreate;
    export type RequestHeaders = {};
    export type ResponseBody = CreateHotelBookingData;
  }

  /**
   * @description Returns all hotel bookings for the authenticated client.
   * @tags Hotel / Booking
   * @name ListClientHotelBookings
   * @summary List client hotel bookings
   * @request GET:/booking/client/hotel/list/
   * @secure
   */
  export namespace ListClientHotelBookings {
    export type RequestParams = {};
    export type RequestQuery = {
      /** Filter by status. */
      status?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ListClientHotelBookingsData;
  }

  /**
   * @description Returns detailed information about a specific hotel booking.
   * @tags Hotel / Booking
   * @name GetClientHotelBookingDetail
   * @summary Get hotel booking detail
   * @request GET:/booking/client/hotel/{booking_id}/
   * @secure
   */
  export namespace GetClientHotelBookingDetail {
    export type RequestParams = {
      bookingId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetClientHotelBookingDetailData;
  }

  /**
   * @description Client cancels their hotel booking. Dismisses payment hold and releases calendar slots.
   * @tags Hotel / Booking
   * @name CancelClientHotelBooking
   * @summary Cancel a hotel booking
   * @request POST:/booking/client/hotel/{booking_id}/cancel/
   * @secure
   */
  export namespace CancelClientHotelBooking {
    export type RequestParams = {
      bookingId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CancelClientHotelBookingData;
  }

  /**
   * @description Retrieve information about a specific booking belonging to the authenticated client
   * @tags Client / Booking
   * @name BookingClientRead
   * @summary Retrieve client booking details
   * @request GET:/booking/client/{booking_id}/
   * @secure
   */
  export namespace BookingClientRead {
    export type RequestParams = {
      /**
       * Unique booking GUID
       * @format uuid
       */
      bookingId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = BookingClientReadData;
  }

  /**
   * @description Allows a client to cancel their booking
   * @tags Client / Booking
   * @name BookingClientCancelCreate
   * @summary Cancel booking
   * @request POST:/booking/client/{booking_id}/cancel/
   * @secure
   */
  export namespace BookingClientCancelCreate {
    export type RequestParams = {
      /**
       * Unique booking GUID
       * @format uuid
       */
      bookingId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = BookingClientCancelCreateData;
  }

  /**
   * @description Returns per-room availability for a hotel date range.
   * @tags Hotel / Booking
   * @name GetHotelCalendar
   * @summary Get hotel room calendar
   * @request GET:/booking/hotels/{hotel_guid}/calendar/
   * @secure
   */
  export namespace GetHotelCalendar {
    export type RequestParams = {
      hotelGuid: string;
    };
    export type RequestQuery = {
      /** @format date */
      from_date: string;
      /** @format date */
      to_date: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetHotelCalendarData;
  }

  /**
   * @description Returns available rooms for a hotel by encoded GUID. Query params: check_in, check_out, guests.
   * @tags Hotel / Booking
   * @name ListHotelRooms
   * @summary List available hotel rooms
   * @request GET:/booking/hotels/{hotel_guid}/rooms/
   * @secure
   */
  export namespace ListHotelRooms {
    export type RequestParams = {
      hotelGuid: string;
    };
    export type RequestQuery = {
      /** @format date */
      check_in: string;
      /** @format date */
      check_out: string;
      /** @default 1 */
      guests?: number;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ListHotelRoomsData;
  }

  /**
   * @description Returns server-side price quote for a hotel room: nights, total, hold_amount, remaining_on_arrival.
   * @tags Hotel / Booking
   * @name GetHotelRoomPrice
   * @summary Get room price quote
   * @request GET:/booking/hotels/{hotel_guid}/rooms/{room_id}/price/
   * @secure
   */
  export namespace GetHotelRoomPrice {
    export type RequestParams = {
      hotelGuid: string;
      roomId: number;
    };
    export type RequestQuery = {
      /** @format date */
      check_in: string;
      /** @format date */
      check_out: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetHotelRoomPriceData;
  }

  /**
   * @description Return a list of booking related to the authenticated partner
   * @tags Partner / Booking
   * @name BookingPartnerList
   * @summary List partner bookings
   * @request GET:/booking/partner/
   * @secure
   */
  export namespace BookingPartnerList {
    export type RequestParams = {};
    export type RequestQuery = {
      /** Filter bookings by status */
      status?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = BookingPartnerListData;
  }

  /**
   * @description Allows a partner to accept a booking request
   * @tags Partner / Booking
   * @name BookingPartnerAcceptCreate
   * @summary Accept booking
   * @request POST:/booking/partner/{booking_id}/accept/
   * @secure
   */
  export namespace BookingPartnerAcceptCreate {
    export type RequestParams = {
      /**
       * Unique booking GUID
       * @format uuid
       */
      bookingId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = BookingPartnerAcceptCreateData;
  }

  /**
   * @description A cancellation reason may be provided and the booking status
   * @tags Partner / Booking
   * @name BookingPartnerCancelCreate
   * @summary Cancel booking
   * @request POST:/booking/partner/{booking_id}/cancel/
   * @secure
   */
  export namespace BookingPartnerCancelCreate {
    export type RequestParams = {
      /**
       * Unique booking GUID
       * @format uuid
       */
      bookingId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = BookingPartnerCancelCreateData;
  }

  /**
   * @description Marks as confirmed booking as completed when the user arrives Charges 50% of the hold booking price
   * @tags Partner / Booking
   * @name BookingPartnerCompleteCreate
   * @summary Complete booking
   * @request POST:/booking/partner/{booking_id}/complete/
   * @secure
   */
  export namespace BookingPartnerCompleteCreate {
    export type RequestParams = {
      /**
       * Unique booking GUID
       * @format uuid
       */
      bookingId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = BookingPartnerCompleteCreateData;
  }

  /**
   * @description Marks a confirmed booking as no-show when the user does not arrive
   * @tags Partner / Booking
   * @name BookingPartnerNoShowCreate
   * @summary Mark booking as no-show
   * @request POST:/booking/partner/{booking_id}/no_show/
   * @secure
   */
  export namespace BookingPartnerNoShowCreate {
    export type RequestParams = {
      /**
       * Unique booking GUID
       * @format uuid
       */
      bookingId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = BookingPartnerNoShowCreateData;
  }

  /**
   * @description Returns the calendar for a property within the specified date range
   * @tags Booking / Calendar
   * @name BookingPropertiesCalendarList
   * @summary Retrieve property calendar availability
   * @request GET:/booking/properties/{property_id}/calendar/
   * @secure
   */
  export namespace BookingPropertiesCalendarList {
    export type RequestParams = {
      /**
       * Unique property GUID
       * @format uuid
       */
      propertyId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = BookingPropertiesCalendarListData;
  }

  /**
   * @description Blocks one or more dates in the property calendar
   * @tags Booking / Calendar
   * @name BookingPropertiesCalendarBlockCreate
   * @summary Block dates in property calendar
   * @request POST:/booking/properties/{property_id}/calendar/block/
   * @secure
   */
  export namespace BookingPropertiesCalendarBlockCreate {
    export type RequestParams = {
      /**
       * Unique property GUID
       * @format uuid
       */
      propertyId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = RawPropertyCalendarDateRange;
    export type RequestHeaders = {};
    export type ResponseBody = BookingPropertiesCalendarBlockCreateData;
  }

  /**
   * @description Temporarily holds one or more dates for a client during the booking process. The client has 30 minutes to complete payment.
   * @tags Booking / Calendar
   * @name BookingPropertiesCalendarHoldCreate
   * @summary Temporarily hold dates for 30 minutes
   * @request POST:/booking/properties/{property_id}/calendar/hold/
   * @secure
   */
  export namespace BookingPropertiesCalendarHoldCreate {
    export type RequestParams = {
      /**
       * Unique property GUID
       * @format uuid
       */
      propertyId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = RawPropertyCalendarDateRange;
    export type RequestHeaders = {};
    export type ResponseBody = BookingPropertiesCalendarHoldCreateData;
  }

  /**
   * @description Removes blocked dates from the property calendar
   * @tags Booking / Calendar
   * @name BookingPropertiesCalendarUnblockCreate
   * @summary Unblock dates in property calendar
   * @request POST:/booking/properties/{property_id}/calendar/unblock/
   * @secure
   */
  export namespace BookingPropertiesCalendarUnblockCreate {
    export type RequestParams = {
      /**
       * Unique property GUID
       * @format uuid
       */
      propertyId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = RawPropertyCalendarDateRange;
    export type RequestHeaders = {};
    export type ResponseBody = BookingPropertiesCalendarUnblockCreateData;
  }

  /**
   * @description Releases previously held dates before the 30-minute hold expires
   * @tags Booking / Calendar
   * @name BookingPropertiesCalendarUnholdCreate
   * @summary Release held dates
   * @request POST:/booking/properties/{property_id}/calendar/unhold/
   * @secure
   */
  export namespace BookingPropertiesCalendarUnholdCreate {
    export type RequestParams = {
      /**
       * Unique property GUID
       * @format uuid
       */
      propertyId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = RawPropertyCalendarDateRange;
    export type RequestHeaders = {};
    export type ResponseBody = BookingPropertiesCalendarUnholdCreateData;
  }
}

export namespace Chat {
  /**
   * @description Get all conversations for the current actor.
   * @tags api
   * @name ChatConversations
   * @request GET:/chat/conversations/
   * @secure
   */
  export namespace ChatConversations {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ChatConversationsData;
  }

  /**
   * @description Get all messages with a specific counterpart.
   * @tags api
   * @name ChatMessages
   * @request GET:/chat/messages/{partner_id}/
   * @secure
   */
  export namespace ChatMessages {
    export type RequestParams = {
      partnerId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ChatMessagesData;
  }

  /**
   * No description
   * @tags api
   * @name ChatReadMessages
   * @request POST:/chat/read/
   * @secure
   */
  export namespace ChatReadMessages {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = ChatMessage;
    export type RequestHeaders = {};
    export type ResponseBody = ChatReadMessagesData;
  }

  /**
   * @description Return the single active admin recipient for partner chat.
   * @tags api
   * @name ChatRecipientAdminRecipient
   * @request GET:/chat/recipient/admin/
   * @secure
   */
  export namespace ChatRecipientAdminRecipient {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ChatRecipientAdminRecipientData;
  }

  /**
   * @description Send a message to counterpart actor.
   * @tags api
   * @name ChatSend
   * @request POST:/chat/send/
   * @secure
   */
  export namespace ChatSend {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = ChatMessage;
    export type RequestHeaders = {};
    export type ResponseBody = ChatSendData;
  }
}

export namespace Documents {
  /**
   * No description
   * @tags api
   * @name DocumentsList
   * @request GET:/documents/
   * @secure
   */
  export namespace DocumentsList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = DocumentsListData;
  }

  /**
   * No description
   * @tags api
   * @name DocumentsCreate
   * @request POST:/documents/
   * @secure
   */
  export namespace DocumentsCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = Document;
    export type RequestHeaders = {};
    export type ResponseBody = DocumentsCreateData;
  }

  /**
   * No description
   * @tags api
   * @name DocumentsRead
   * @request GET:/documents/{doc_id}/
   * @secure
   */
  export namespace DocumentsRead {
    export type RequestParams = {
      docId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = DocumentsReadData;
  }

  /**
   * No description
   * @tags api
   * @name DocumentsRecipientsCreate
   * @request POST:/documents/{doc_id}/recipients/
   * @secure
   */
  export namespace DocumentsRecipientsCreate {
    export type RequestParams = {
      docId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = DocumentRecipient;
    export type RequestHeaders = {};
    export type ResponseBody = DocumentsRecipientsCreateData;
  }

  /**
   * No description
   * @tags api
   * @name DocumentsStatusPartialUpdate
   * @request PATCH:/documents/{doc_id}/status/
   * @secure
   */
  export namespace DocumentsStatusPartialUpdate {
    export type RequestParams = {
      docId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = DocumentStatus;
    export type RequestHeaders = {};
    export type ResponseBody = DocumentsStatusPartialUpdateData;
  }
}

export namespace Hotels {
  /**
   * No description
   * @tags api
   * @name HotelsSearchList
   * @request GET:/hotels/search/
   * @secure
   */
  export namespace HotelsSearchList {
    export type RequestParams = {};
    export type RequestQuery = {
      city?: string;
      /** @format date */
      check_in?: string;
      /** @format date */
      check_out?: string;
      /**
       * @min 1
       * @default 1
       */
      guests?: number;
      /** @min 1 */
      adults?: number;
      /** @min 0 */
      children?: number;
      /** @min 0 */
      babies?: number;
      /**
       * @min 1
       * @max 5
       */
      star_rating?: number | null;
      weel_classification?:
        | "standard"
        | "essential"
        | "comfort"
        | "comfort_plus"
        | "business"
        | "premium"
        | "signature";
      is_recommended?: boolean | null;
      themes?: string[];
      /** @format decimal */
      price_min?: string | null;
      /** @format decimal */
      price_max?: string | null;
      /** @format decimal */
      budget_max?: string | null;
      room_types?: string;
      room_type_presets?: string;
      rate_plans?: string;
      meal_plans?: string;
      /** @min 1 */
      min_capacity?: number;
      /** @min 1 */
      max_capacity?: number;
      lat?: number | null;
      lon?: number | null;
      /**
       * @min 0.1
       * @default 10
       */
      radius_km?: number;
      /** @default "popular" */
      sort_by?:
        | "popular"
        | "rating"
        | "reviews"
        | "cheap"
        | "expensive"
        | "weel_recommended";
      /**
       * @min 1
       * @default 1
       */
      page?: number;
      /**
       * @min 1
       * @max 100
       * @default 20
       */
      page_size?: number;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = HotelsSearchListData;
  }

  /**
   * No description
   * @tags api
   * @name HotelsRead
   * @request GET:/hotels/{guid}/
   * @secure
   */
  export namespace HotelsRead {
    export type RequestParams = {
      guid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = HotelsReadData;
  }

  /**
   * @description Return the daily occupancy status for each room in the selected hotel (`guid`) over the `from_date` to `to_date` range. The result contains one row per room × date pair: `room_id`, `room_name`, `date` (YYYY-MM-DD), and `status` (`booked` or `available`).
   * @tags api
   * @name HotelsCalendarList
   * @summary Hotel occupancy calendar
   * @request GET:/hotels/{guid}/calendar/
   * @secure
   */
  export namespace HotelsCalendarList {
    export type RequestParams = {
      /** Property GUID (pms_property.guid). */
      guid: string;
    };
    export type RequestQuery = {
      /**
       * Start date for the calendar range (YYYY-MM-DD).
       * @format date
       */
      from_date: string;
      /**
       * End date for the calendar range (YYYY-MM-DD).
       * @format date
       */
      to_date: string;
      /** Comma-separated room type names. */
      room_types?: string;
      /** Comma-separated room type presets. */
      room_type_presets?: string;
      /**
       * Return a dense matrix summary grouped by date.
       * @default false
       */
      include_summary?: boolean;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = HotelsCalendarListData;
  }

  /**
   * No description
   * @tags api
   * @name HotelsReviewsList
   * @request GET:/hotels/{guid}/reviews/
   * @secure
   */
  export namespace HotelsReviewsList {
    export type RequestParams = {
      /** Property GUID (pms_property.guid). */
      guid: string;
    };
    export type RequestQuery = {
      /** @default 10 */
      limit?: number;
      /** @default 0 */
      offset?: number;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = HotelsReviewsListData;
  }

  /**
   * No description
   * @tags api
   * @name HotelsRoomsList
   * @request GET:/hotels/{guid}/rooms/
   * @secure
   */
  export namespace HotelsRoomsList {
    export type RequestParams = {
      /** Property GUID (pms_property.guid). */
      guid: string;
    };
    export type RequestQuery = {
      /** @format date */
      check_in?: string;
      /** @format date */
      check_out?: string;
      /**
       * @min 1
       * @default 1
       */
      guests?: number;
      room_types?: string;
      room_type_presets?: string;
      rate_plans?: string;
      meal_plans?: string;
      /** @min 1 */
      min_capacity?: number;
      /** @min 1 */
      max_capacity?: number;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = HotelsRoomsListData;
  }

  /**
   * No description
   * @tags api
   * @name HotelsRoomsPriceList
   * @request GET:/hotels/{guid}/rooms/{room_id}/price/
   * @secure
   */
  export namespace HotelsRoomsPriceList {
    export type RequestParams = {
      /** Property GUID (pms_property.guid). */
      guid: string;
      roomId: string;
    };
    export type RequestQuery = {
      /** @format date */
      check_in?: string;
      /** @format date */
      check_out?: string;
      /**
       * @min 1
       * @default 1
       */
      guests?: number;
      room_types?: string;
      room_type_presets?: string;
      rate_plans?: string;
      meal_plans?: string;
      /** @min 1 */
      min_capacity?: number;
      /** @min 1 */
      max_capacity?: number;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = HotelsRoomsPriceListData;
  }
}

export namespace Logs {
  /**
   * @description Frontend (brauzer) loglarini qabul qiladi – Grafana/Loki da ko'rsatiladi.
   * @tags api
   * @name LogsFrontendCreate
   * @request POST:/logs/frontend/
   * @secure
   */
  export namespace LogsFrontendCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = LogsFrontendCreateData;
  }
}

export namespace Notification {
  /**
   * @description Get paginated list of client notifications with read status
   * @tags Notification
   * @name NotificationClientList
   * @summary Get client notifications
   * @request GET:/notification/client/
   * @secure
   */
  export namespace NotificationClientList {
    export type RequestParams = {};
    export type RequestQuery = {
      /**
       * Page number
       * @default 1
       */
      page?: number;
      /**
       * Items per page (max 100)
       * @default 20
       */
      limit?: number;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = NotificationClientListData;
  }

  /**
   * @description Mark all client notifications as read
   * @tags Notification
   * @name NotificationClientReadAllCreate
   * @summary Mark all client notifications as read
   * @request POST:/notification/client/read-all/
   * @secure
   */
  export namespace NotificationClientReadAllCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = NotificationClientReadAllCreateData;
  }

  /**
   * @description Mark specific notifications or all as read
   * @tags Notification
   * @name NotificationClientReadCreate
   * @summary Mark client notifications as read
   * @request POST:/notification/client/read/
   * @secure
   */
  export namespace NotificationClientReadCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = MarkAsRead;
    export type RequestHeaders = {};
    export type ResponseBody = NotificationClientReadCreateData;
  }

  /**
   * @description Update the client's Firebase Cloud Messaging(FCM) token for push notification
   * @tags Notification
   * @name NotificationDeviceCreate
   * @summary Update FCM token
   * @request POST:/notification/device/
   * @secure
   */
  export namespace NotificationDeviceCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = ClientDevice;
    export type RequestHeaders = {};
    export type ResponseBody = NotificationDeviceCreateData;
  }

  /**
   * @description Get paginated list of partner notifications with read status
   * @tags Notification
   * @name NotificationPartnerList
   * @summary Get partner notifications
   * @request GET:/notification/partner/
   * @secure
   */
  export namespace NotificationPartnerList {
    export type RequestParams = {};
    export type RequestQuery = {
      /**
       * Page number
       * @default 1
       */
      page?: number;
      /**
       * Items per page (max 100)
       * @default 20
       */
      limit?: number;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = NotificationPartnerListData;
  }

  /**
   * @description Update the partner's Firebase Cloud Messaging(FCM) token for push notification
   * @tags Notification
   * @name NotificationPartnerDeviceCreate
   * @summary Update partner FCM token
   * @request POST:/notification/partner/device/
   * @secure
   */
  export namespace NotificationPartnerDeviceCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = PartnerDevice;
    export type RequestHeaders = {};
    export type ResponseBody = NotificationPartnerDeviceCreateData;
  }

  /**
   * @description Mark all partner notifications as read
   * @tags Notification
   * @name NotificationPartnerReadAllCreate
   * @summary Mark all notifications as read
   * @request POST:/notification/partner/read-all/
   * @secure
   */
  export namespace NotificationPartnerReadAllCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = NotificationPartnerReadAllCreateData;
  }

  /**
   * @description Mark specific notifications or all as read
   * @tags Notification
   * @name NotificationPartnerReadCreate
   * @summary Mark notifications as read
   * @request POST:/notification/partner/read/
   * @secure
   */
  export namespace NotificationPartnerReadCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = MarkAsRead;
    export type RequestHeaders = {};
    export type ResponseBody = NotificationPartnerReadCreateData;
  }
}

export namespace Payment {
  /**
   * @description Returns the current USD-to-UZS exchange rate.
   * @tags api
   * @name PaymentExchangeRateList
   * @request GET:/payment/exchange-rate/
   * @secure
   */
  export namespace PaymentExchangeRateList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PaymentExchangeRateListData;
  }
}

export namespace Platform {
  /**
   * No description
   * @tags api
   * @name PlatformLoginCreate
   * @request POST:/platform/login/
   * @secure
   */
  export namespace PlatformLoginCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = {
      /** Phone number */
      phone_number: string;
    };
    export type RequestHeaders = {};
    export type ResponseBody = PlatformLoginCreateData;
  }

  /**
   * No description
   * @tags api
   * @name PlatformLoginVerifyCreate
   * @request POST:/platform/login/verify/
   * @secure
   */
  export namespace PlatformLoginVerifyCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = {
      /** Phone number */
      phone_number: string;
      /** OTP code */
      otp_code: string;
      /** Optional: select which organization to log into */
      organization_id?: number;
    };
    export type RequestHeaders = {};
    export type ResponseBody = PlatformLoginVerifyCreateData;
  }

  /**
   * No description
   * @tags api
   * @name PlatformMeList
   * @request GET:/platform/me/
   * @secure
   */
  export namespace PlatformMeList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PlatformMeListData;
  }

  /**
   * No description
   * @tags platform
   * @name PlatformMePartialUpdate
   * @request PATCH:/platform/me/
   * @secure
   */
  export namespace PlatformMePartialUpdate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = PlatformUserUpdate;
    export type RequestHeaders = {};
    export type ResponseBody = PlatformMePartialUpdateData;
  }

  /**
   * @description Soft deactivate the authenticated PMS platform account. Requires OTP verification. Organizations where the user is the last active member will also be deactivated.
   * @tags platform
   * @name PlatformMeDelete
   * @summary Deactivate own platform account
   * @request DELETE:/platform/me/
   * @secure
   */
  export namespace PlatformMeDelete {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = {
      /** OTP code for deletion */
      otp_code: string;
      /** Refresh token to blacklist */
      refresh?: string;
    };
    export type RequestHeaders = {};
    export type ResponseBody = PlatformMeDeleteData;
  }

  /**
   * @description Sends an OTP to the authenticated platform user's phone to confirm account deletion.
   * @tags platform
   * @name PlatformMeDeleteRequestCreate
   * @summary Send OTP for platform account deletion
   * @request POST:/platform/me/delete/request/
   * @secure
   */
  export namespace PlatformMeDeleteRequestCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PlatformMeDeleteRequestCreateData;
  }

  /**
   * No description
   * @tags api
   * @name PlatformOrganizationList
   * @request GET:/platform/organization/
   * @secure
   */
  export namespace PlatformOrganizationList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PlatformOrganizationListData;
  }

  /**
   * No description
   * @tags api
   * @name PlatformOrganizationCreate
   * @request POST:/platform/organization/
   * @secure
   */
  export namespace PlatformOrganizationCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = AuthenticatedOrgCreate;
    export type RequestHeaders = {};
    export type ResponseBody = PlatformOrganizationCreateData;
  }

  /**
   * No description
   * @tags api
   * @name PlatformOrganizationPartialUpdate
   * @request PATCH:/platform/organization/
   * @secure
   */
  export namespace PlatformOrganizationPartialUpdate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = OrganizationUpdate;
    export type RequestHeaders = {};
    export type ResponseBody = PlatformOrganizationPartialUpdateData;
  }

  /**
   * No description
   * @tags api
   * @name PlatformOrganizationMembersList
   * @request GET:/platform/organization/members/
   * @secure
   */
  export namespace PlatformOrganizationMembersList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PlatformOrganizationMembersListData;
  }

  /**
   * No description
   * @tags api
   * @name PlatformOrganizationMembersCreate
   * @request POST:/platform/organization/members/
   * @secure
   */
  export namespace PlatformOrganizationMembersCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = AddMember;
    export type RequestHeaders = {};
    export type ResponseBody = PlatformOrganizationMembersCreateData;
  }

  /**
   * No description
   * @tags api
   * @name PlatformOrganizationMembersPartialUpdate
   * @request PATCH:/platform/organization/members/{member_id}/
   * @secure
   */
  export namespace PlatformOrganizationMembersPartialUpdate {
    export type RequestParams = {
      memberId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = UpdateMemberRole;
    export type RequestHeaders = {};
    export type ResponseBody = PlatformOrganizationMembersPartialUpdateData;
  }

  /**
   * No description
   * @tags api
   * @name PlatformOrganizationMembersDelete
   * @request DELETE:/platform/organization/members/{member_id}/
   * @secure
   */
  export namespace PlatformOrganizationMembersDelete {
    export type RequestParams = {
      memberId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PlatformOrganizationMembersDeleteData;
  }

  /**
   * @description Start PMS registration. This only creates the personal account; the organization is created afterwards via POST /platform/organization/.
   * @tags api
   * @name PlatformRegisterCreate
   * @request POST:/platform/register/
   * @secure
   */
  export namespace PlatformRegisterCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = {
      /** Phone number */
      phone_number: string;
      /** First name */
      first_name?: string;
      /** Last name */
      last_name?: string;
    };
    export type RequestHeaders = {};
    export type ResponseBody = PlatformRegisterCreateData;
  }

  /**
   * @description Finish PMS registration. Creates the personal account only and returns tokens that are not scoped to any organization yet: `organization` is null until the client calls POST /platform/organization/.
   * @tags api
   * @name PlatformRegisterVerifyCreate
   * @request POST:/platform/register/verify/
   * @secure
   */
  export namespace PlatformRegisterVerifyCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = {
      /** Phone number */
      phone_number: string;
      /** OTP code */
      otp_code: string;
    };
    export type RequestHeaders = {};
    export type ResponseBody = PlatformRegisterVerifyCreateData;
  }

  /**
   * No description
   * @tags api
   * @name PlatformSwitchOrganizationCreate
   * @request POST:/platform/switch-organization/
   * @secure
   */
  export namespace PlatformSwitchOrganizationCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = PmsSwitchOrg;
    export type RequestHeaders = {};
    export type ResponseBody = PlatformSwitchOrganizationCreateData;
  }

  /**
   * No description
   * @tags api
   * @name PlatformTokenRefreshCreate
   * @request POST:/platform/token/refresh/
   * @secure
   */
  export namespace PlatformTokenRefreshCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = {
      /** Refresh token */
      refresh: string;
    };
    export type RequestHeaders = {};
    export type ResponseBody = PlatformTokenRefreshCreateData;
  }
}

export namespace Pms {
  /**
   * No description
   * @tags api
   * @name PmsGuestsList
   * @request GET:/pms/guests/
   * @secure
   */
  export namespace PmsGuestsList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PmsGuestsListData;
  }

  /**
   * No description
   * @tags api
   * @name PmsGuestsCreate
   * @request POST:/pms/guests/
   * @secure
   */
  export namespace PmsGuestsCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = Guest;
    export type RequestHeaders = {};
    export type ResponseBody = PmsGuestsCreateData;
  }

  /**
   * No description
   * @tags api
   * @name PmsGuestsRead
   * @request GET:/pms/guests/{guest_id}/
   * @secure
   */
  export namespace PmsGuestsRead {
    export type RequestParams = {
      guestId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PmsGuestsReadData;
  }

  /**
   * No description
   * @tags api
   * @name PmsGuestsPartialUpdate
   * @request PATCH:/pms/guests/{guest_id}/
   * @secure
   */
  export namespace PmsGuestsPartialUpdate {
    export type RequestParams = {
      guestId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = Guest;
    export type RequestHeaders = {};
    export type ResponseBody = PmsGuestsPartialUpdateData;
  }

  /**
   * No description
   * @tags api
   * @name PmsPropertiesList
   * @request GET:/pms/properties/
   * @secure
   */
  export namespace PmsPropertiesList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PmsPropertiesListData;
  }

  /**
   * @description Create a new property
   * @tags api
   * @name PmsPropertiesCreate
   * @request POST:/pms/properties/
   * @secure
   */
  export namespace PmsPropertiesCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = Property;
    export type RequestHeaders = {};
    export type ResponseBody = PmsPropertiesCreateData;
  }

  /**
   * No description
   * @tags api
   * @name PmsPropertiesRead
   * @request GET:/pms/properties/{property_id}/
   * @secure
   */
  export namespace PmsPropertiesRead {
    export type RequestParams = {
      propertyId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PmsPropertiesReadData;
  }

  /**
   * No description
   * @tags api
   * @name PmsPropertiesPartialUpdate
   * @request PATCH:/pms/properties/{property_id}/
   * @secure
   */
  export namespace PmsPropertiesPartialUpdate {
    export type RequestParams = {
      propertyId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = Property;
    export type RequestHeaders = {};
    export type ResponseBody = PmsPropertiesPartialUpdateData;
  }

  /**
   * No description
   * @tags api
   * @name PmsPropertiesDelete
   * @request DELETE:/pms/properties/{property_id}/
   * @secure
   */
  export namespace PmsPropertiesDelete {
    export type RequestParams = {
      propertyId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PmsPropertiesDeleteData;
  }

  /**
   * No description
   * @tags api
   * @name PmsPropertiesAnalyticsList
   * @request GET:/pms/properties/{property_id}/analytics/
   * @secure
   */
  export namespace PmsPropertiesAnalyticsList {
    export type RequestParams = {
      propertyId: string;
    };
    export type RequestQuery = {
      /**
       * Start date
       * @format date
       */
      date_from: string;
      /**
       * End date
       * @format date
       */
      date_to: string;
      /** Chart metric */
      metric?: "check_ins" | "revenue" | "bookings" | "occupancy";
      /** Room category filter */
      category?: string;
      /** Floor filter */
      floor?: string;
      /** Room number search */
      search?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PmsPropertiesAnalyticsListData;
  }

  /**
   * No description
   * @tags api
   * @name PmsPropertiesAnalyticsExportList
   * @request GET:/pms/properties/{property_id}/analytics/export/
   * @secure
   */
  export namespace PmsPropertiesAnalyticsExportList {
    export type RequestParams = {
      propertyId: string;
    };
    export type RequestQuery = {
      /**
       * Start date
       * @format date
       */
      date_from: string;
      /**
       * End date
       * @format date
       */
      date_to: string;
      /** Chart metric */
      metric?: "check_ins" | "revenue" | "bookings" | "occupancy";
      /** Room category filter */
      category?: string;
      /** Floor filter */
      floor?: string;
      /** Room number search */
      search?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PmsPropertiesAnalyticsExportListData;
  }

  /**
   * No description
   * @tags api
   * @name PmsPropertiesBookingComConnectionList
   * @request GET:/pms/properties/{property_id}/booking-com/connection/
   * @secure
   */
  export namespace PmsPropertiesBookingComConnectionList {
    export type RequestParams = {
      propertyId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PmsPropertiesBookingComConnectionListData;
  }

  /**
   * No description
   * @tags api
   * @name PmsPropertiesBookingComConnectionUpdate
   * @request PUT:/pms/properties/{property_id}/booking-com/connection/
   * @secure
   */
  export namespace PmsPropertiesBookingComConnectionUpdate {
    export type RequestParams = {
      propertyId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = BookingComConnection;
    export type RequestHeaders = {};
    export type ResponseBody = PmsPropertiesBookingComConnectionUpdateData;
  }

  /**
   * No description
   * @tags api
   * @name PmsPropertiesBookingComConnectionDelete
   * @request DELETE:/pms/properties/{property_id}/booking-com/connection/
   * @secure
   */
  export namespace PmsPropertiesBookingComConnectionDelete {
    export type RequestParams = {
      propertyId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PmsPropertiesBookingComConnectionDeleteData;
  }

  /**
   * No description
   * @tags api
   * @name PmsPropertiesBookingComMappingsList
   * @request GET:/pms/properties/{property_id}/booking-com/mappings/
   * @secure
   */
  export namespace PmsPropertiesBookingComMappingsList {
    export type RequestParams = {
      propertyId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PmsPropertiesBookingComMappingsListData;
  }

  /**
   * No description
   * @tags api
   * @name PmsPropertiesBookingComMappingsUpdate
   * @request PUT:/pms/properties/{property_id}/booking-com/mappings/
   * @secure
   */
  export namespace PmsPropertiesBookingComMappingsUpdate {
    export type RequestParams = {
      propertyId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = BookingComRoomMapping[];
    export type RequestHeaders = {};
    export type ResponseBody = PmsPropertiesBookingComMappingsUpdateData;
  }

  /**
   * No description
   * @tags api
   * @name PmsPropertiesBookingComStatusList
   * @request GET:/pms/properties/{property_id}/booking-com/status/
   * @secure
   */
  export namespace PmsPropertiesBookingComStatusList {
    export type RequestParams = {
      propertyId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PmsPropertiesBookingComStatusListData;
  }

  /**
   * No description
   * @tags api
   * @name PmsPropertiesBookingComSyncCreate
   * @request POST:/pms/properties/{property_id}/booking-com/sync/
   * @secure
   */
  export namespace PmsPropertiesBookingComSyncCreate {
    export type RequestParams = {
      propertyId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = BookingComManualSync;
    export type RequestHeaders = {};
    export type ResponseBody = PmsPropertiesBookingComSyncCreateData;
  }

  /**
   * No description
   * @tags api
   * @name PmsPropertiesBookingsList
   * @request GET:/pms/properties/{property_id}/bookings/
   * @secure
   */
  export namespace PmsPropertiesBookingsList {
    export type RequestParams = {
      propertyId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PmsPropertiesBookingsListData;
  }

  /**
   * No description
   * @tags api
   * @name PmsPropertiesBookingsCreate
   * @request POST:/pms/properties/{property_id}/bookings/
   * @secure
   */
  export namespace PmsPropertiesBookingsCreate {
    export type RequestParams = {
      propertyId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = Booking;
    export type RequestHeaders = {};
    export type ResponseBody = PmsPropertiesBookingsCreateData;
  }

  /**
   * No description
   * @tags api
   * @name PmsPropertiesBookingsRead
   * @request GET:/pms/properties/{property_id}/bookings/{booking_id}/
   * @secure
   */
  export namespace PmsPropertiesBookingsRead {
    export type RequestParams = {
      propertyId: string;
      bookingId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PmsPropertiesBookingsReadData;
  }

  /**
   * No description
   * @tags api
   * @name PmsPropertiesBookingsPartialUpdate
   * @request PATCH:/pms/properties/{property_id}/bookings/{booking_id}/
   * @secure
   */
  export namespace PmsPropertiesBookingsPartialUpdate {
    export type RequestParams = {
      propertyId: string;
      bookingId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = Booking;
    export type RequestHeaders = {};
    export type ResponseBody = PmsPropertiesBookingsPartialUpdateData;
  }

  /**
   * No description
   * @tags api
   * @name PmsPropertiesBookingsAcceptCreate
   * @request POST:/pms/properties/{property_id}/bookings/{booking_id}/accept/
   * @secure
   */
  export namespace PmsPropertiesBookingsAcceptCreate {
    export type RequestParams = {
      propertyId: string;
      bookingId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PmsPropertiesBookingsAcceptCreateData;
  }

  /**
   * No description
   * @tags api
   * @name PmsPropertiesBookingsCancelCreate
   * @request POST:/pms/properties/{property_id}/bookings/{booking_id}/cancel/
   * @secure
   */
  export namespace PmsPropertiesBookingsCancelCreate {
    export type RequestParams = {
      propertyId: string;
      bookingId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PmsPropertiesBookingsCancelCreateData;
  }

  /**
   * No description
   * @tags api
   * @name PmsPropertiesBookingsCheckInCreate
   * @request POST:/pms/properties/{property_id}/bookings/{booking_id}/check-in/
   * @secure
   */
  export namespace PmsPropertiesBookingsCheckInCreate {
    export type RequestParams = {
      propertyId: string;
      bookingId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PmsPropertiesBookingsCheckInCreateData;
  }

  /**
   * No description
   * @tags api
   * @name PmsPropertiesBookingsCheckOutCreate
   * @request POST:/pms/properties/{property_id}/bookings/{booking_id}/check-out/
   * @secure
   */
  export namespace PmsPropertiesBookingsCheckOutCreate {
    export type RequestParams = {
      propertyId: string;
      bookingId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PmsPropertiesBookingsCheckOutCreateData;
  }

  /**
   * No description
   * @tags api
   * @name PmsPropertiesBookingsHistoryList
   * @request GET:/pms/properties/{property_id}/bookings/{booking_id}/history/
   * @secure
   */
  export namespace PmsPropertiesBookingsHistoryList {
    export type RequestParams = {
      propertyId: string;
      bookingId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PmsPropertiesBookingsHistoryListData;
  }

  /**
   * No description
   * @tags api
   * @name PmsPropertiesBookingsMealPlanCreate
   * @request POST:/pms/properties/{property_id}/bookings/{booking_id}/meal-plan/
   * @secure
   */
  export namespace PmsPropertiesBookingsMealPlanCreate {
    export type RequestParams = {
      propertyId: string;
      bookingId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = MealPlanChange;
    export type RequestHeaders = {};
    export type ResponseBody = PmsPropertiesBookingsMealPlanCreateData;
  }

  /**
   * No description
   * @tags api
   * @name PmsPropertiesBookingsMoveCreate
   * @request POST:/pms/properties/{property_id}/bookings/{booking_id}/move/
   * @secure
   */
  export namespace PmsPropertiesBookingsMoveCreate {
    export type RequestParams = {
      propertyId: string;
      bookingId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = MoveBooking;
    export type RequestHeaders = {};
    export type ResponseBody = PmsPropertiesBookingsMoveCreateData;
  }

  /**
   * @description GET  — read voucher_number for a booking. POST — regenerate / set voucher_number (only when booking is confirmed).
   * @tags api
   * @name PmsPropertiesBookingsVoucherList
   * @request GET:/pms/properties/{property_id}/bookings/{booking_id}/voucher/
   * @secure
   */
  export namespace PmsPropertiesBookingsVoucherList {
    export type RequestParams = {
      propertyId: string;
      bookingId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PmsPropertiesBookingsVoucherListData;
  }

  /**
   * @description GET  — read voucher_number for a booking. POST — regenerate / set voucher_number (only when booking is confirmed).
   * @tags api
   * @name PmsPropertiesBookingsVoucherCreate
   * @request POST:/pms/properties/{property_id}/bookings/{booking_id}/voucher/
   * @secure
   */
  export namespace PmsPropertiesBookingsVoucherCreate {
    export type RequestParams = {
      propertyId: string;
      bookingId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = {
      /** Optional custom voucher number. Auto-generated if omitted. */
      voucher_number?: string;
    };
    export type RequestHeaders = {};
    export type ResponseBody = PmsPropertiesBookingsVoucherCreateData;
  }

  /**
   * No description
   * @tags api
   * @name PmsPropertiesCalendarList
   * @request GET:/pms/properties/{property_id}/calendar/
   * @secure
   */
  export namespace PmsPropertiesCalendarList {
    export type RequestParams = {
      propertyId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PmsPropertiesCalendarListData;
  }

  /**
   * No description
   * @tags api
   * @name PmsPropertiesCalendarBlockCreate
   * @request POST:/pms/properties/{property_id}/calendar/block/
   * @secure
   */
  export namespace PmsPropertiesCalendarBlockCreate {
    export type RequestParams = {
      propertyId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = RoomIds;
    export type RequestHeaders = {};
    export type ResponseBody = PmsPropertiesCalendarBlockCreateData;
  }

  /**
   * No description
   * @tags api
   * @name PmsPropertiesCalendarHoldCreate
   * @request POST:/pms/properties/{property_id}/calendar/hold/
   * @secure
   */
  export namespace PmsPropertiesCalendarHoldCreate {
    export type RequestParams = {
      propertyId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = RoomIds;
    export type RequestHeaders = {};
    export type ResponseBody = PmsPropertiesCalendarHoldCreateData;
  }

  /**
   * No description
   * @tags api
   * @name PmsPropertiesCalendarUnblockCreate
   * @request POST:/pms/properties/{property_id}/calendar/unblock/
   * @secure
   */
  export namespace PmsPropertiesCalendarUnblockCreate {
    export type RequestParams = {
      propertyId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = RoomIds;
    export type RequestHeaders = {};
    export type ResponseBody = PmsPropertiesCalendarUnblockCreateData;
  }

  /**
   * No description
   * @tags api
   * @name PmsPropertiesCalendarUnholdCreate
   * @request POST:/pms/properties/{property_id}/calendar/unhold/
   * @secure
   */
  export namespace PmsPropertiesCalendarUnholdCreate {
    export type RequestParams = {
      propertyId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = RoomIds;
    export type RequestHeaders = {};
    export type ResponseBody = PmsPropertiesCalendarUnholdCreateData;
  }

  /**
   * No description
   * @tags api
   * @name PmsPropertiesImagesCreate
   * @request POST:/pms/properties/{property_id}/images/
   * @secure
   */
  export namespace PmsPropertiesImagesCreate {
    export type RequestParams = {
      propertyId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = {
      /** @format binary */
      image: File;
    };
    export type RequestHeaders = {};
    export type ResponseBody = PmsPropertiesImagesCreateData;
  }

  /**
   * No description
   * @tags api
   * @name PmsPropertiesImagesDelete
   * @request DELETE:/pms/properties/{property_id}/images/{image_id}/
   * @secure
   */
  export namespace PmsPropertiesImagesDelete {
    export type RequestParams = {
      propertyId: string;
      imageId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PmsPropertiesImagesDeleteData;
  }

  /**
   * No description
   * @tags api
   * @name PmsPropertiesReviewsList
   * @request GET:/pms/properties/{property_id}/reviews/
   * @secure
   */
  export namespace PmsPropertiesReviewsList {
    export type RequestParams = {
      propertyId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PmsPropertiesReviewsListData;
  }

  /**
   * No description
   * @tags api
   * @name PmsPropertiesReviewsCreate
   * @request POST:/pms/properties/{property_id}/reviews/
   * @secure
   */
  export namespace PmsPropertiesReviewsCreate {
    export type RequestParams = {
      propertyId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = Review;
    export type RequestHeaders = {};
    export type ResponseBody = PmsPropertiesReviewsCreateData;
  }

  /**
   * No description
   * @tags api
   * @name PmsPropertiesReviewsComplainCreate
   * @request POST:/pms/properties/{property_id}/reviews/{review_id}/complain/
   * @secure
   */
  export namespace PmsPropertiesReviewsComplainCreate {
    export type RequestParams = {
      propertyId: string;
      reviewId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = ReviewComplain;
    export type RequestHeaders = {};
    export type ResponseBody = PmsPropertiesReviewsComplainCreateData;
  }

  /**
   * No description
   * @tags api
   * @name PmsPropertiesReviewsRespondCreate
   * @request POST:/pms/properties/{property_id}/reviews/{review_id}/respond/
   * @secure
   */
  export namespace PmsPropertiesReviewsRespondCreate {
    export type RequestParams = {
      propertyId: string;
      reviewId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = ReviewRespond;
    export type RequestHeaders = {};
    export type ResponseBody = PmsPropertiesReviewsRespondCreateData;
  }

  /**
   * No description
   * @tags api
   * @name PmsPropertiesRoomTypesList
   * @request GET:/pms/properties/{property_id}/room-types/
   * @secure
   */
  export namespace PmsPropertiesRoomTypesList {
    export type RequestParams = {
      propertyId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PmsPropertiesRoomTypesListData;
  }

  /**
   * No description
   * @tags api
   * @name PmsPropertiesRoomTypesCreate
   * @request POST:/pms/properties/{property_id}/room-types/
   * @secure
   */
  export namespace PmsPropertiesRoomTypesCreate {
    export type RequestParams = {
      propertyId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = RoomType;
    export type RequestHeaders = {};
    export type ResponseBody = PmsPropertiesRoomTypesCreateData;
  }

  /**
   * No description
   * @tags api
   * @name PmsPropertiesRoomTypesRead
   * @request GET:/pms/properties/{property_id}/room-types/{room_type_id}/
   * @secure
   */
  export namespace PmsPropertiesRoomTypesRead {
    export type RequestParams = {
      propertyId: string;
      roomTypeId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PmsPropertiesRoomTypesReadData;
  }

  /**
   * No description
   * @tags api
   * @name PmsPropertiesRoomTypesPartialUpdate
   * @request PATCH:/pms/properties/{property_id}/room-types/{room_type_id}/
   * @secure
   */
  export namespace PmsPropertiesRoomTypesPartialUpdate {
    export type RequestParams = {
      propertyId: string;
      roomTypeId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = RoomType;
    export type RequestHeaders = {};
    export type ResponseBody = PmsPropertiesRoomTypesPartialUpdateData;
  }

  /**
   * No description
   * @tags api
   * @name PmsPropertiesRoomTypesDelete
   * @request DELETE:/pms/properties/{property_id}/room-types/{room_type_id}/
   * @secure
   */
  export namespace PmsPropertiesRoomTypesDelete {
    export type RequestParams = {
      propertyId: string;
      roomTypeId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PmsPropertiesRoomTypesDeleteData;
  }

  /**
   * No description
   * @tags api
   * @name PmsPropertiesRoomsList
   * @request GET:/pms/properties/{property_id}/rooms/
   * @secure
   */
  export namespace PmsPropertiesRoomsList {
    export type RequestParams = {
      propertyId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PmsPropertiesRoomsListData;
  }

  /**
   * No description
   * @tags api
   * @name PmsPropertiesRoomsCreate
   * @request POST:/pms/properties/{property_id}/rooms/
   * @secure
   */
  export namespace PmsPropertiesRoomsCreate {
    export type RequestParams = {
      propertyId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = Room;
    export type RequestHeaders = {};
    export type ResponseBody = PmsPropertiesRoomsCreateData;
  }

  /**
   * No description
   * @tags api
   * @name PmsPropertiesRoomsMassUpdateCreate
   * @request POST:/pms/properties/{property_id}/rooms/mass-update/
   * @secure
   */
  export namespace PmsPropertiesRoomsMassUpdateCreate {
    export type RequestParams = {
      propertyId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = RoomMassUpdateItem[];
    export type RequestHeaders = {};
    export type ResponseBody = PmsPropertiesRoomsMassUpdateCreateData;
  }

  /**
   * No description
   * @tags api
   * @name PmsPropertiesRoomsRead
   * @request GET:/pms/properties/{property_id}/rooms/{room_id}/
   * @secure
   */
  export namespace PmsPropertiesRoomsRead {
    export type RequestParams = {
      propertyId: string;
      roomId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PmsPropertiesRoomsReadData;
  }

  /**
   * No description
   * @tags api
   * @name PmsPropertiesRoomsPartialUpdate
   * @request PATCH:/pms/properties/{property_id}/rooms/{room_id}/
   * @secure
   */
  export namespace PmsPropertiesRoomsPartialUpdate {
    export type RequestParams = {
      propertyId: string;
      roomId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = Room;
    export type RequestHeaders = {};
    export type ResponseBody = PmsPropertiesRoomsPartialUpdateData;
  }

  /**
   * No description
   * @tags api
   * @name PmsPropertiesRoomsDelete
   * @request DELETE:/pms/properties/{property_id}/rooms/{room_id}/
   * @secure
   */
  export namespace PmsPropertiesRoomsDelete {
    export type RequestParams = {
      propertyId: string;
      roomId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PmsPropertiesRoomsDeleteData;
  }

  /**
   * No description
   * @tags api
   * @name PmsPropertiesRoomsImagesCreate
   * @request POST:/pms/properties/{property_id}/rooms/{room_id}/images/
   * @secure
   */
  export namespace PmsPropertiesRoomsImagesCreate {
    export type RequestParams = {
      propertyId: string;
      roomId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = {
      /** @format binary */
      image: File;
    };
    export type RequestHeaders = {};
    export type ResponseBody = PmsPropertiesRoomsImagesCreateData;
  }
}

export namespace Property {
  /**
   * @description Returns all prefectures, optionally filtered by district_id or district_guid. Results are cached for 10 minutes.
   * @tags Property / Meta
   * @name ListPrefectures
   * @summary List prefectures
   * @request GET:/property/
   * @secure
   */
  export namespace ListPrefectures {
    export type RequestParams = {};
    export type RequestQuery = {
      /** Filter by district database id. */
      district_id?: number;
      /**
       * Filter by district GUID.
       * @format uuid
       */
      district_guid?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ListPrefecturesData;
  }

  /**
   * @description Returns every apartment, cottage, and hotel in the database, including unverified and archived. Supports the same filters as public list (search, region, price, sort, limit, etc.).
   * @tags Admin / Property
   * @name PropertyAdminAllList
   * @summary List all properties (admin)
   * @request GET:/property/admin/all/
   * @secure
   */
  export namespace PropertyAdminAllList {
    export type RequestParams = {};
    export type RequestQuery = {
      /** Fuzzy text search using pg_trgm trigrams. Matches against property title and city — tolerates typos and partial words. */
      search?: string;
      /**
       * Latitude for geographic radius search. Requires `lon` to be set.
       * @format float
       */
      lat?: number;
      /**
       * Longitude for geographic radius search. Requires `lat` to be set.
       * @format float
       */
      lon?: number;
      /**
       * Search radius in kilometres. Default: 10. Only used when `lat` and `lon` are provided.
       * @format float
       */
      radius?: number;
      /** Location UUID or integer ID. Tried as region GUID → district GUID → prefecture GUID. */
      location_id?: string;
      region_id?: number;
      district_id?: number;
      /** @format uuid */
      prefecture_id?: string;
      corporate?: boolean;
      min_price?: number;
      max_price?: number;
      currency?: string;
      sort?:
        | "price_high"
        | "price_low"
        | "rating_high"
        | "rating_low"
        | "reviews_high"
        | "reviews_low"
        | "title_asc"
        | "title_desc"
        | "corporate_yes"
        | "corporate_no";
      ordering?: string;
      /** @format date */
      from_date?: string;
      limit?: number;
      page?: number;
      /** Optional. Omit to return apartments, cottages, and hotels together. */
      property_type?:
        | "apartment"
        | "cottage"
        | "hotel"
        | "apartments"
        | "cottages"
        | "hotels";
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PropertyAdminAllListData;
  }

  /**
   * @description Admin-only apartment creation endpoint.
   * @tags Admin / Property
   * @name PropertyAdminApartmentsCreate
   * @summary Create apartment (admin)
   * @request POST:/property/admin/apartments/
   * @secure
   */
  export namespace PropertyAdminApartmentsCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = ApartmentAdminUpdate;
    export type RequestHeaders = {};
    export type ResponseBody = PropertyAdminApartmentsCreateData;
  }

  /**
   * @description Returns the full admin view of an apartment by its guid.
   * @tags Admin / Property
   * @name PropertyAdminApartmentsRead
   * @summary Retrieve apartment (admin)
   * @request GET:/property/admin/apartments/{apartment_id}/
   * @secure
   */
  export namespace PropertyAdminApartmentsRead {
    export type RequestParams = {
      apartmentId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PropertyAdminApartmentsReadData;
  }

  /**
   * @description Admin-only full update for every writable field on the apartment table,
   * @tags Admin / Property
   * @name PropertyAdminApartmentsPartialUpdate
   * @summary Patch apartment (Admin)
   * @request PATCH:/property/admin/apartments/{apartment_id}/
   * @secure
   */
  export namespace PropertyAdminApartmentsPartialUpdate {
    export type RequestParams = {
      apartmentId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = ApartmentAdminUpdate;
    export type RequestHeaders = {};
    export type ResponseBody = PropertyAdminApartmentsPartialUpdateData;
  }

  /**
   * @description Admin-only. Uploads image file(s) and appends them to the property's gallery.
   * @tags Admin / Property
   * @name AdminCreatePropertyImageApartments
   * @summary Upload property image(s) (admin)
   * @request POST:/property/admin/apartments/{property_id}/images/
   * @secure
   */
  export namespace AdminCreatePropertyImageApartments {
    export type RequestParams = {
      /**
       * Property GUID.
       * @format uuid
       */
      propertyId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = {
      /** Image file to upload (JPEG/PNG/WebP). */
      image: File;
    };
    export type RequestHeaders = {};
    export type ResponseBody = AdminCreatePropertyImageApartmentsData;
  }

  /**
   * @description Admin-only. Removes a specific image from the property's gallery.
   * @tags Admin / Property
   * @name AdminDeletePropertyImageApartments
   * @summary Delete a specific property image (admin)
   * @request DELETE:/property/admin/apartments/{property_id}/images/{image_id}/
   * @secure
   */
  export namespace AdminDeletePropertyImageApartments {
    export type RequestParams = {
      /**
       * Property GUID.
       * @format uuid
       */
      propertyId: string;
      /** Image URL or stored path of the image to delete. */
      imageId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }

  /**
   * @description Admin-only cottage creation endpoint.
   * @tags Admin / Property
   * @name PropertyAdminCottagesCreate
   * @summary Create cottage (admin)
   * @request POST:/property/admin/cottages/
   * @secure
   */
  export namespace PropertyAdminCottagesCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CottageAdminUpdate;
    export type RequestHeaders = {};
    export type ResponseBody = PropertyAdminCottagesCreateData;
  }

  /**
   * @description Returns the full admin view of a cottage by its guid.
   * @tags Admin / Property
   * @name PropertyAdminCottagesRead
   * @summary Retrieve cottage (admin)
   * @request GET:/property/admin/cottages/{cottage_id}/
   * @secure
   */
  export namespace PropertyAdminCottagesRead {
    export type RequestParams = {
      cottageId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PropertyAdminCottagesReadData;
  }

  /**
   * @description Admin-only partial update for every writable field on the cottage table, including verification/archival/recommendation flags and owner reassignment. Unlike the partner endpoint, this does NOT auto-reset verification on save.
   * @tags Admin / Property
   * @name PropertyAdminCottagesPartialUpdate
   * @summary Patch cottage (admin)
   * @request PATCH:/property/admin/cottages/{cottage_id}/
   * @secure
   */
  export namespace PropertyAdminCottagesPartialUpdate {
    export type RequestParams = {
      cottageId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = CottageAdminUpdate;
    export type RequestHeaders = {};
    export type ResponseBody = PropertyAdminCottagesPartialUpdateData;
  }

  /**
   * @description Admin-only hard delete of a cottage by its guid.
   * @tags Admin / Property
   * @name DeleteAdminCottage
   * @summary Delete cottage (admin)
   * @request DELETE:/property/admin/cottages/{cottage_id}/
   * @secure
   */
  export namespace DeleteAdminCottage {
    export type RequestParams = {
      cottageId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }

  /**
   * @description Admin-only. Uploads image file(s) and appends them to the property's gallery.
   * @tags Admin / Property
   * @name AdminCreatePropertyImageCottages
   * @summary Upload property image(s) (admin)
   * @request POST:/property/admin/cottages/{property_id}/images/
   * @secure
   */
  export namespace AdminCreatePropertyImageCottages {
    export type RequestParams = {
      /**
       * Property GUID.
       * @format uuid
       */
      propertyId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = {
      /** Image file to upload (JPEG/PNG/WebP). */
      image: File;
    };
    export type RequestHeaders = {};
    export type ResponseBody = AdminCreatePropertyImageCottagesData;
  }

  /**
   * @description Admin-only. Removes a specific image from the property's gallery.
   * @tags Admin / Property
   * @name AdminDeletePropertyImageCottages
   * @summary Delete a specific property image (admin)
   * @request DELETE:/property/admin/cottages/{property_id}/images/{image_id}/
   * @secure
   */
  export namespace AdminDeletePropertyImageCottages {
    export type RequestParams = {
      /**
       * Property GUID.
       * @format uuid
       */
      propertyId: string;
      /** Image URL or stored path of the image to delete. */
      imageId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }

  /**
   * @description Returns districts, optionally filtered by region_id or region guid.
   * @tags Admin / Property
   * @name PropertyAdminDistrictsList
   * @summary List districts (admin)
   * @request GET:/property/admin/districts/
   * @secure
   */
  export namespace PropertyAdminDistrictsList {
    export type RequestParams = {};
    export type RequestQuery = {
      /** Optional region id (integer) or region guid. */
      region_id?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PropertyAdminDistrictsListData;
  }

  /**
   * @description Returns PMS tenant organizations available for hotel administration.
   * @tags Admin / Property
   * @name PropertyAdminHotelOrganizationsList
   * @summary List hotel organizations (admin)
   * @request GET:/property/admin/hotel-organizations/
   * @secure
   */
  export namespace PropertyAdminHotelOrganizationsList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PropertyAdminHotelOrganizationsListData;
  }

  /**
   * @description Admin-only list of hotels across all tenant schemas.
   * @tags Admin / Property
   * @name PropertyAdminHotelsList
   * @summary List hotels (admin)
   * @request GET:/property/admin/hotels/
   * @secure
   */
  export namespace PropertyAdminHotelsList {
    export type RequestParams = {};
    export type RequestQuery = {
      search?: string;
      organization_id?: number;
      tenant_schema?: string;
      is_active?: boolean;
      is_verified?: boolean;
      /** @format date */
      created_from?: string;
      /** @format date */
      created_to?: string;
      limit?: number;
      page?: number;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PropertyAdminHotelsListData;
  }

  /**
   * @description Admin-only hotel creation endpoint targeting a PMS tenant schema.
   * @tags Admin / Property
   * @name PropertyAdminHotelsCreate
   * @summary Create hotel (admin)
   * @request POST:/property/admin/hotels/
   * @secure
   */
  export namespace PropertyAdminHotelsCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = HotelAdminUpdate;
    export type RequestHeaders = {};
    export type ResponseBody = PropertyAdminHotelsCreateData;
  }

  /**
   * @description Returns the full admin view of a hotel by its tenant-aware guid.
   * @tags Admin / Property
   * @name PropertyAdminHotelsRead
   * @summary Retrieve hotel (admin)
   * @request GET:/property/admin/hotels/{hotel_id}/
   * @secure
   */
  export namespace PropertyAdminHotelsRead {
    export type RequestParams = {
      hotelId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PropertyAdminHotelsReadData;
  }

  /**
   * @description Admin-only partial update for hotel records stored in PMS tenant schemas.
   * @tags Admin / Property
   * @name PropertyAdminHotelsPartialUpdate
   * @summary Patch hotel (admin)
   * @request PATCH:/property/admin/hotels/{hotel_id}/
   * @secure
   */
  export namespace PropertyAdminHotelsPartialUpdate {
    export type RequestParams = {
      hotelId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = HotelAdminUpdate;
    export type RequestHeaders = {};
    export type ResponseBody = PropertyAdminHotelsPartialUpdateData;
  }

  /**
   * @description Admin-only soft delete for hotel records in PMS tenant schemas.
   * @tags Admin / Property
   * @name PropertyAdminHotelsDelete
   * @summary Delete hotel (admin)
   * @request DELETE:/property/admin/hotels/{hotel_id}/
   * @secure
   */
  export namespace PropertyAdminHotelsDelete {
    export type RequestParams = {
      hotelId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PropertyAdminHotelsDeleteData;
  }

  /**
   * @description Admin-only. Uploads image file(s) and appends them to the hotel's gallery.
   * @tags Admin / Property
   * @name AdminCreateHotelImage
   * @summary Upload hotel image(s) (admin)
   * @request POST:/property/admin/hotels/{property_id}/images/
   * @secure
   */
  export namespace AdminCreateHotelImage {
    export type RequestParams = {
      /** Tenant-aware hotel guid. */
      propertyId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = {
      /** Image file to upload (JPEG/PNG/WebP). */
      image: File;
    };
    export type RequestHeaders = {};
    export type ResponseBody = AdminCreateHotelImageData;
  }

  /**
   * @description Admin-only. Removes a specific image from the hotel's gallery.
   * @tags Admin / Property
   * @name AdminDeleteHotelImage
   * @summary Delete a specific hotel image (admin)
   * @request DELETE:/property/admin/hotels/{property_id}/images/{image_id}/
   * @secure
   */
  export namespace AdminDeleteHotelImage {
    export type RequestParams = {
      /** Tenant-aware hotel guid. */
      propertyId: string;
      /** Image URL or stored path of the image to delete. */
      imageId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = AdminDeleteHotelImageData;
  }

  /**
   * @description Returns prefectures, optionally filtered by district_id or district_guid.
   * @tags Admin / Property
   * @name PropertyAdminPrefecturesList
   * @summary List prefectures (admin)
   * @request GET:/property/admin/prefectures/
   * @secure
   */
  export namespace PropertyAdminPrefecturesList {
    export type RequestParams = {};
    export type RequestQuery = {
      /** Optional district id filter. */
      district_id?: number;
      /** Optional district guid filter. */
      district_guid?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PropertyAdminPrefecturesListData;
  }

  /**
   * @description Returns all regions without caching (admin access).
   * @tags Admin / Property
   * @name PropertyAdminRegionsList
   * @summary List regions (admin)
   * @request GET:/property/admin/regions/
   * @secure
   */
  export namespace PropertyAdminRegionsList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PropertyAdminRegionsListData;
  }

  /**
   * @description Returns all property types with titles in all languages, kind, and current icon URL.
   * @tags Admin / Property
   * @name AdminListPropertyTypes
   * @summary List property types (admin)
   * @request GET:/property/admin/types/
   * @secure
   */
  export namespace AdminListPropertyTypes {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = AdminListPropertyTypesData;
  }

  /**
   * @description Admin-only. Uploads an SVG or PNG icon for the specified property type.
   * @tags Admin / Property
   * @name AdminUploadPropertyTypeIcon
   * @summary Upload icon for a property type
   * @request POST:/property/admin/types/{type_guid}/icon/
   * @secure
   */
  export namespace AdminUploadPropertyTypeIcon {
    export type RequestParams = {
      /**
       * Property type GUID.
       * @format uuid
       */
      typeGuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = {
      /** Icon image file (SVG or PNG). */
      icon: File;
    };
    export type RequestHeaders = {};
    export type ResponseBody = AdminUploadPropertyTypeIconData;
  }

  /**
   * @description Returns verified public apartments. Without `limit` and `page`, all matching rows are returned; with either query param, results are paginated (default page size 20, max `limit` 100). Supports search, filtering, and sorting. `X-Testing-Mode: true` returns only testing apartments; otherwise testing apartments are excluded.
   * @tags Property / Public
   * @name ListApartments
   * @summary List apartments
   * @request GET:/property/apartments/
   * @secure
   */
  export namespace ListApartments {
    export type RequestParams = {};
    export type RequestQuery = {
      /** Fuzzy text search using pg_trgm trigrams. Matches against property title and city — tolerates typos and partial words. */
      search?: string;
      /**
       * Latitude for geographic radius search. Requires `lon` to be set.
       * @format float
       */
      lat?: number;
      /**
       * Longitude for geographic radius search. Requires `lat` to be set.
       * @format float
       */
      lon?: number;
      /**
       * Search radius in kilometres. Default: 10. Only used when `lat` and `lon` are provided.
       * @format float
       */
      radius?: number;
      /** Location UUID or integer ID. Tried as region GUID → district GUID → prefecture GUID. */
      location_id?: string;
      region_id?: number;
      district_id?: number;
      /** @format uuid */
      prefecture_id?: string;
      /** Filter by property kind. Omit in the generic /properties/ endpoint to return all supported kinds. */
      property_type?: "apartment" | "cottage" | "hotel";
      corporate?: boolean;
      min_price?: number;
      max_price?: number;
      currency?: string;
      sort?:
        | "price_high"
        | "price_low"
        | "rating_high"
        | "rating_low"
        | "reviews_high"
        | "reviews_low"
        | "title_asc"
        | "title_desc"
        | "corporate_yes"
        | "corporate_no";
      ordering?: string;
      /** @format date */
      from_date?: string;
      limit?: number;
      page?: number;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** When `true`, return only testing properties. When omitted or false, testing properties are excluded. */
      "X-Testing-Mode"?: boolean;
    };
    export type ResponseBody = ListApartmentsData;
  }

  /**
   * @description Partner-only. Creates a new apartment listing. The property is created with verification_status=waiting.
   * @tags Property / Partner
   * @name CreateApartment
   * @summary Create an apartment
   * @request POST:/property/apartments/
   * @secure
   */
  export namespace CreateApartment {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = ApartmentCreate;
    export type RequestHeaders = {};
    export type ResponseBody = CreateApartmentData;
  }

  /**
   * No description
   * @tags api
   * @name PropertyApartmentsRead
   * @request GET:/property/apartments/{property_id}/
   * @secure
   */
  export namespace PropertyApartmentsRead {
    export type RequestParams = {
      propertyId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PropertyApartmentsReadData;
  }

  /**
   * @description Partner-only full update for an apartment or cottage. Mutating fields resets verification status to waiting.
   * @tags Property / Partner
   * @name FullUpdateProperty
   * @summary Fully update a property
   * @request PATCH:/property/apartments/{property_id}/
   * @secure
   */
  export namespace FullUpdateProperty {
    export type RequestParams = {
      propertyId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = ApartmentUpdate;
    export type RequestHeaders = {};
    export type ResponseBody = FullUpdatePropertyData;
  }

  /**
   * @description Partner-only hard delete of an apartment or cottage.
   * @tags Property / Partner
   * @name DeletePropertyApartments
   * @summary Delete a property
   * @request DELETE:/property/apartments/{property_id}/
   * @secure
   */
  export namespace DeletePropertyApartments {
    export type RequestParams = {
      propertyId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }

  /**
   * @description Partner-only. Uploads image file(s) and appends them to the property's gallery. If the property is not yet verified, the images are marked as pending approval.
   * @tags Property / Partner
   * @name CreatePropertyImageApartments
   * @summary Upload property image(s)
   * @request POST:/property/apartments/{property_id}/images/
   * @secure
   */
  export namespace CreatePropertyImageApartments {
    export type RequestParams = {
      /**
       * Property GUID.
       * @format uuid
       */
      propertyId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = {
      /** Image file to upload (JPEG/PNG/WebP). */
      image: File;
    };
    export type RequestHeaders = {};
    export type ResponseBody = CreatePropertyImageApartmentsData;
  }

  /**
   * @description Partner-only. Replaces a specific image in the property's gallery. If the property is not yet verified, the image is marked as pending approval.
   * @tags Property / Partner
   * @name UpdatePropertyImageApartments
   * @summary Update a specific property image
   * @request PATCH:/property/apartments/{property_id}/images/{image_url}/
   * @secure
   */
  export namespace UpdatePropertyImageApartments {
    export type RequestParams = {
      /**
       * Property GUID.
       * @format uuid
       */
      propertyId: string;
      /** Image URL or stored path of the image to replace. */
      imageUrl: string;
    };
    export type RequestQuery = {};
    export type RequestBody = {
      /** New image file to upload (JPEG/PNG/WebP). */
      image: File;
    };
    export type RequestHeaders = {};
    export type ResponseBody = UpdatePropertyImageApartmentsData;
  }

  /**
   * @description Partner-only. Removes a specific image from the property's gallery.
   * @tags Property / Partner
   * @name DeletePropertyImageApartments
   * @summary Delete a specific property image
   * @request DELETE:/property/apartments/{property_id}/images/{image_url}/
   * @secure
   */
  export namespace DeletePropertyImageApartments {
    export type RequestParams = {
      /**
       * Property GUID.
       * @format uuid
       */
      propertyId: string;
      /** Image URL or stored path of the image to delete. */
      imageUrl: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }

  /**
   * @description Partner-only. Returns all reviews for a property, including hidden ones.
   * @tags Property / Partner
   * @name ListPartnerPropertyReviewsApartments
   * @summary List all reviews for a property (partner)
   * @request GET:/property/apartments/{property_id}/partner/reviews/
   * @secure
   */
  export namespace ListPartnerPropertyReviewsApartments {
    export type RequestParams = {
      /**
       * Property GUID.
       * @format uuid
       */
      propertyId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ListPartnerPropertyReviewsApartmentsData;
  }

  /**
   * @description Returns public reviews for a property. No authentication required.
   * @tags Property / Reviews
   * @name ListPropertyReviewsApartments
   * @summary List property reviews
   * @request GET:/property/apartments/{property_id}/reviews/
   * @secure
   */
  export namespace ListPropertyReviewsApartments {
    export type RequestParams = {
      /**
       * Property GUID.
       * @format uuid
       */
      propertyId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ListPropertyReviewsApartmentsData;
  }

  /**
   * @description Client-only. Creates a review for a property the client has an eligible completed or accepted booking for.
   * @tags Property / Reviews
   * @name CreatePropertyReviewApartments
   * @summary Create a property review
   * @request POST:/property/apartments/{property_id}/reviews/
   * @secure
   */
  export namespace CreatePropertyReviewApartments {
    export type RequestParams = {
      /**
       * Property GUID.
       * @format uuid
       */
      propertyId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = RawPropertyReviewCreate;
    export type RequestHeaders = {};
    export type ResponseBody = CreatePropertyReviewApartmentsData;
  }

  /**
   * @description Returns an empty list. Categories are not yet implemented.
   * @tags Property / Meta
   * @name ListCategories
   * @summary List categories
   * @request GET:/property/categories/
   * @secure
   */
  export namespace ListCategories {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ListCategoriesData;
  }

  /**
   * @description Returns an empty list. Category-based recommendations are not yet implemented.
   * @tags Property / Meta
   * @name ListCategoryPropertyRecommendations
   * @summary List property recommendations by category
   * @request GET:/property/categories/{category_id}/properties/
   * @secure
   */
  export namespace ListCategoryPropertyRecommendations {
    export type RequestParams = {
      categoryId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ListCategoryPropertyRecommendationsData;
  }

  /**
   * @description Returns an empty list. Category-based latest properties are not yet implemented.
   * @tags Property / Meta
   * @name ListCategoryLatestProperties
   * @summary List latest properties by category
   * @request GET:/property/categories/{category_id}/properties/latest/
   * @secure
   */
  export namespace ListCategoryLatestProperties {
    export type RequestParams = {
      categoryId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ListCategoryLatestPropertiesData;
  }

  /**
   * @description Returns verified public cottages. Without `limit` and `page`, all matching rows are returned; with either query param, results are paginated (default page size 20, max `limit` 100). Supports search, filtering, and sorting. `X-Testing-Mode: true` returns only testing cottages; otherwise testing cottages are excluded.
   * @tags Property / Public
   * @name ListCottages
   * @summary List cottages
   * @request GET:/property/cottages/
   * @secure
   */
  export namespace ListCottages {
    export type RequestParams = {};
    export type RequestQuery = {
      /** Fuzzy text search using pg_trgm trigrams. Matches against property title and city — tolerates typos and partial words. */
      search?: string;
      /**
       * Latitude for geographic radius search. Requires `lon` to be set.
       * @format float
       */
      lat?: number;
      /**
       * Longitude for geographic radius search. Requires `lat` to be set.
       * @format float
       */
      lon?: number;
      /**
       * Search radius in kilometres. Default: 10. Only used when `lat` and `lon` are provided.
       * @format float
       */
      radius?: number;
      /** Location UUID or integer ID. Tried as region GUID → district GUID → prefecture GUID. */
      location_id?: string;
      region_id?: number;
      district_id?: number;
      /** @format uuid */
      prefecture_id?: string;
      /** Filter by property kind. Omit in the generic /properties/ endpoint to return all supported kinds. */
      property_type?: "apartment" | "cottage" | "hotel";
      corporate?: boolean;
      min_price?: number;
      max_price?: number;
      currency?: string;
      sort?:
        | "price_high"
        | "price_low"
        | "rating_high"
        | "rating_low"
        | "reviews_high"
        | "reviews_low"
        | "title_asc"
        | "title_desc"
        | "corporate_yes"
        | "corporate_no";
      ordering?: string;
      /** @format date */
      from_date?: string;
      limit?: number;
      page?: number;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** When `true`, return only testing properties. When omitted or false, testing properties are excluded. */
      "X-Testing-Mode"?: boolean;
    };
    export type ResponseBody = ListCottagesData;
  }

  /**
   * @description Partner-only. Creates a new cottage listing. The property is created with verification_status=waiting.
   * @tags Property / Partner
   * @name CreateCottage
   * @summary Create a cottage
   * @request POST:/property/cottages/
   * @secure
   */
  export namespace CreateCottage {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = {
      title: string;
      /** @default "UZS" */
      currency?: "USD" | "UZS";
      /** @default false */
      weekend_only_sunday_inclusive?: boolean;
      /**
       * Per-person price (both months unless you vary via legacy `price` list only).
       * @format double
       */
      price_per_person?: number | null;
      /**
       * Working-day rate.
       * @format double
       */
      price_on_working_days?: number | null;
      /**
       * Weekend rate.
       * @format double
       */
      price_on_weekends?: number | null;
      /**
       * First pricing month: interval start (YYYY-MM-DD). Use with month_to, next_month_from, next_month_to.
       * @format date
       */
      month_from?: string | null;
      /**
       * First pricing month: interval end (YYYY-MM-DD). Should be the last day of that month.
       * @format date
       */
      month_to?: string | null;
      /**
       * Second pricing month: interval start.
       * @format date
       */
      next_month_from?: string | null;
      /**
       * Second pricing month: interval end.
       * @format date
       */
      next_month_to?: string | null;
      latitude?: string | null;
      longitude?: string | null;
      country?: string | null;
      city?: string | null;
      region_id?: string | null;
      district_id?: string | null;
      /** @format uuid */
      prefecture_id?: string | null;
      description_en?: string | null;
      description_ru?: string | null;
      description_uz?: string | null;
      /** @format time */
      check_in?: string | null;
      /** @format time */
      check_out?: string | null;
      /** @default false */
      is_allowed_alcohol?: boolean;
      /** @default false */
      is_allowed_corporate?: boolean;
      /** @default false */
      is_allowed_pets?: boolean;
      /** @default false */
      is_quiet_hours?: boolean;
      /** Service UUIDs (same as legacy `property_services`). */
      services?: string[];
      guests?: number | null;
      rooms?: number | null;
      beds?: number | null;
      bathrooms?: number | null;
      /** Image paths or URLs; a single string is also accepted by the API. */
      img?: string[] | null;
    };
    export type RequestHeaders = {};
    export type ResponseBody = CreateCottageData;
  }

  /**
   * @description Same as `PropertyRetrieveUpdateDestroyView` but Swagger documents cottage PATCH body (flat, like create).
   * @tags api
   * @name PropertyCottagesRead
   * @request GET:/property/cottages/{property_id}/
   * @secure
   */
  export namespace PropertyCottagesRead {
    export type RequestParams = {
      propertyId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PropertyCottagesReadData;
  }

  /**
   * @description Partner-only partial update for a cottage. Request body matches POST /api/property/cottages/ (flat `price_*`, month range fields, location, descriptions, services, rooms); all fields optional.
   * @tags Property / Partner
   * @name PartialUpdateCottage
   * @summary Partially update a cottage
   * @request PATCH:/property/cottages/{property_id}/
   * @secure
   */
  export namespace PartialUpdateCottage {
    export type RequestParams = {
      propertyId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = {
      title?: string;
      /** @default "UZS" */
      currency?: "USD" | "UZS";
      /** @default false */
      weekend_only_sunday_inclusive?: boolean;
      /**
       * Per-person price (both months unless you vary via legacy `price` list only).
       * @format double
       */
      price_per_person?: number | null;
      /**
       * Working-day rate.
       * @format double
       */
      price_on_working_days?: number | null;
      /**
       * Weekend rate.
       * @format double
       */
      price_on_weekends?: number | null;
      /**
       * First pricing month: interval start (YYYY-MM-DD). Use with month_to, next_month_from, next_month_to.
       * @format date
       */
      month_from?: string | null;
      /**
       * First pricing month: interval end (YYYY-MM-DD). Should be the last day of that month.
       * @format date
       */
      month_to?: string | null;
      /**
       * Second pricing month: interval start.
       * @format date
       */
      next_month_from?: string | null;
      /**
       * Second pricing month: interval end.
       * @format date
       */
      next_month_to?: string | null;
      latitude?: string | null;
      longitude?: string | null;
      country?: string | null;
      city?: string | null;
      region_id?: string | null;
      district_id?: string | null;
      /** @format uuid */
      prefecture_id?: string | null;
      description_en?: string | null;
      description_ru?: string | null;
      description_uz?: string | null;
      /** @format time */
      check_in?: string | null;
      /** @format time */
      check_out?: string | null;
      /** @default false */
      is_allowed_alcohol?: boolean;
      /** @default false */
      is_allowed_corporate?: boolean;
      /** @default false */
      is_allowed_pets?: boolean;
      /** @default false */
      is_quiet_hours?: boolean;
      /** Service UUIDs (same as legacy `property_services`). */
      services?: string[];
      guests?: number | null;
      rooms?: number | null;
      beds?: number | null;
      bathrooms?: number | null;
      /** Image paths or URLs; a single string is also accepted by the API. */
      img?: string[] | null;
    };
    export type RequestHeaders = {};
    export type ResponseBody = PartialUpdateCottageData;
  }

  /**
   * @description Partner-only hard delete of an apartment or cottage.
   * @tags Property / Partner
   * @name DeletePropertyCottages
   * @summary Delete a property
   * @request DELETE:/property/cottages/{property_id}/
   * @secure
   */
  export namespace DeletePropertyCottages {
    export type RequestParams = {
      propertyId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }

  /**
   * @description Partner-only. Uploads image file(s) and appends them to the property's gallery. If the property is not yet verified, the images are marked as pending approval.
   * @tags Property / Partner
   * @name CreatePropertyImageCottages
   * @summary Upload property image(s)
   * @request POST:/property/cottages/{property_id}/images/
   * @secure
   */
  export namespace CreatePropertyImageCottages {
    export type RequestParams = {
      /**
       * Property GUID.
       * @format uuid
       */
      propertyId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = {
      /** Image file to upload (JPEG/PNG/WebP). */
      image: File;
    };
    export type RequestHeaders = {};
    export type ResponseBody = CreatePropertyImageCottagesData;
  }

  /**
   * @description Partner-only. Replaces a specific image in the property's gallery. If the property is not yet verified, the image is marked as pending approval.
   * @tags Property / Partner
   * @name UpdatePropertyImageCottages
   * @summary Update a specific property image
   * @request PATCH:/property/cottages/{property_id}/images/{image_url}/
   * @secure
   */
  export namespace UpdatePropertyImageCottages {
    export type RequestParams = {
      /**
       * Property GUID.
       * @format uuid
       */
      propertyId: string;
      /** Image URL or stored path of the image to replace. */
      imageUrl: string;
    };
    export type RequestQuery = {};
    export type RequestBody = {
      /** New image file to upload (JPEG/PNG/WebP). */
      image: File;
    };
    export type RequestHeaders = {};
    export type ResponseBody = UpdatePropertyImageCottagesData;
  }

  /**
   * @description Partner-only. Removes a specific image from the property's gallery.
   * @tags Property / Partner
   * @name DeletePropertyImageCottages
   * @summary Delete a specific property image
   * @request DELETE:/property/cottages/{property_id}/images/{image_url}/
   * @secure
   */
  export namespace DeletePropertyImageCottages {
    export type RequestParams = {
      /**
       * Property GUID.
       * @format uuid
       */
      propertyId: string;
      /** Image URL or stored path of the image to delete. */
      imageUrl: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }

  /**
   * @description Partner-only. Returns all reviews for a property, including hidden ones.
   * @tags Property / Partner
   * @name ListPartnerPropertyReviewsCottages
   * @summary List all reviews for a property (partner)
   * @request GET:/property/cottages/{property_id}/partner/reviews/
   * @secure
   */
  export namespace ListPartnerPropertyReviewsCottages {
    export type RequestParams = {
      /**
       * Property GUID.
       * @format uuid
       */
      propertyId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ListPartnerPropertyReviewsCottagesData;
  }

  /**
   * @description Returns public reviews for a property. No authentication required.
   * @tags Property / Reviews
   * @name ListPropertyReviewsCottages
   * @summary List property reviews
   * @request GET:/property/cottages/{property_id}/reviews/
   * @secure
   */
  export namespace ListPropertyReviewsCottages {
    export type RequestParams = {
      /**
       * Property GUID.
       * @format uuid
       */
      propertyId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ListPropertyReviewsCottagesData;
  }

  /**
   * @description Client-only. Creates a review for a property the client has an eligible completed or accepted booking for.
   * @tags Property / Reviews
   * @name CreatePropertyReviewCottages
   * @summary Create a property review
   * @request POST:/property/cottages/{property_id}/reviews/
   * @secure
   */
  export namespace CreatePropertyReviewCottages {
    export type RequestParams = {
      /**
       * Property GUID.
       * @format uuid
       */
      propertyId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = RawPropertyReviewCreate;
    export type RequestHeaders = {};
    export type ResponseBody = CreatePropertyReviewCottagesData;
  }

  /**
   * @description Powers the `Где?` sheet. Returns `nearby` places ordered by distance when `lat`/`lon` are supplied, and `recommended` destinations (regions and districts with the most listings) otherwise. `search` filters both lists by name.
   * @tags Property / Public
   * @name ListSearchDestinations
   * @summary Search destinations
   * @request GET:/property/destinations/
   * @secure
   */
  export namespace ListSearchDestinations {
    export type RequestParams = {};
    export type RequestQuery = {
      search?: string;
      /** @format float */
      lat?: number;
      /** @format float */
      lon?: number;
      limit?: number;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ListSearchDestinationsData;
  }

  /**
   * @description Returns all districts, optionally filtered by region_id or region GUID. Results are cached for 10 minutes.
   * @tags Property / Meta
   * @name ListDistricts
   * @summary List districts
   * @request GET:/property/districts/
   * @secure
   */
  export namespace ListDistricts {
    export type RequestParams = {};
    export type RequestQuery = {
      /** Filter by region database id or region GUID. */
      region_id?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ListDistrictsData;
  }

  /**
   * @description Returns the amenity list grouped by category, the selectable property types and the min/max bounds for the budget slider and the room steppers. Pass any active filters to scope the price bounds to the current result set.
   * @tags Property / Public
   * @name GetPropertyFilterMeta
   * @summary Filter sheet metadata
   * @request GET:/property/filters/
   * @secure
   */
  export namespace GetPropertyFilterMeta {
    export type RequestParams = {};
    export type RequestQuery = {
      /** Fuzzy text search using pg_trgm trigrams. Matches against property title and city — tolerates typos and partial words. */
      search?: string;
      /**
       * Latitude for geographic radius search. Requires `lon` to be set.
       * @format float
       */
      lat?: number;
      /**
       * Longitude for geographic radius search. Requires `lat` to be set.
       * @format float
       */
      lon?: number;
      /**
       * Search radius in kilometres. Default: 10. Only used when `lat` and `lon` are provided.
       * @format float
       */
      radius?: number;
      /** Location UUID or integer ID. Tried as region GUID → district GUID → prefecture GUID. */
      location_id?: string;
      region_id?: number;
      district_id?: number;
      /** @format uuid */
      prefecture_id?: string;
      /** Filter by property kind. Omit in the generic /properties/ endpoint to return all supported kinds. */
      property_type?: "apartment" | "cottage" | "hotel";
      corporate?: boolean;
      min_price?: number;
      max_price?: number;
      currency?: string;
      sort?:
        | "price_high"
        | "price_low"
        | "rating_high"
        | "rating_low"
        | "reviews_high"
        | "reviews_low"
        | "title_asc"
        | "title_desc"
        | "corporate_yes"
        | "corporate_no";
      ordering?: string;
      /** @format date */
      from_date?: string;
      limit?: number;
      page?: number;
      /** Comma-separated amenity GUIDs (Удобства). Repeatable. */
      services?: string;
      /** `all` (default) requires every selected amenity, `any` requires at least one. */
      services_match?: "all" | "any";
      /** Minimum bedrooms (Спальни). */
      bedrooms?: number;
      /** Minimum beds (Кровати). */
      beds?: number;
      /** Minimum bathrooms (Ванные комнаты). */
      bathrooms?: number;
      /** Minimum guest capacity (Кто). */
      guests?: number;
      allowed_pets?: boolean;
      allowed_alcohol?: boolean;
      /** Minimum hotel star rating. */
      min_stars?: number;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetPropertyFilterMetaData;
  }

  /**
   * @description Returns the nightly-price distribution for the current filter selection as equal-width buckets, so the filter sheet can draw the bar chart above the budget slider. `min_price`/`max_price` are ignored when building the buckets so the chart keeps its full shape while the handles move.
   * @tags Property / Public
   * @name GetPropertyPriceHistogram
   * @summary Budget slider histogram
   * @request GET:/property/filters/price-histogram/
   * @secure
   */
  export namespace GetPropertyPriceHistogram {
    export type RequestParams = {};
    export type RequestQuery = {
      /** Fuzzy text search using pg_trgm trigrams. Matches against property title and city — tolerates typos and partial words. */
      search?: string;
      /**
       * Latitude for geographic radius search. Requires `lon` to be set.
       * @format float
       */
      lat?: number;
      /**
       * Longitude for geographic radius search. Requires `lat` to be set.
       * @format float
       */
      lon?: number;
      /**
       * Search radius in kilometres. Default: 10. Only used when `lat` and `lon` are provided.
       * @format float
       */
      radius?: number;
      /** Location UUID or integer ID. Tried as region GUID → district GUID → prefecture GUID. */
      location_id?: string;
      region_id?: number;
      district_id?: number;
      /** @format uuid */
      prefecture_id?: string;
      /** Filter by property kind. Omit in the generic /properties/ endpoint to return all supported kinds. */
      property_type?: "apartment" | "cottage" | "hotel";
      corporate?: boolean;
      min_price?: number;
      max_price?: number;
      currency?: string;
      sort?:
        | "price_high"
        | "price_low"
        | "rating_high"
        | "rating_low"
        | "reviews_high"
        | "reviews_low"
        | "title_asc"
        | "title_desc"
        | "corporate_yes"
        | "corporate_no";
      ordering?: string;
      /** @format date */
      from_date?: string;
      limit?: number;
      page?: number;
      /** Comma-separated amenity GUIDs (Удобства). Repeatable. */
      services?: string;
      /** `all` (default) requires every selected amenity, `any` requires at least one. */
      services_match?: "all" | "any";
      /** Minimum bedrooms (Спальни). */
      bedrooms?: number;
      /** Minimum beds (Кровати). */
      beds?: number;
      /** Minimum bathrooms (Ванные комнаты). */
      bathrooms?: number;
      /** Minimum guest capacity (Кто). */
      guests?: number;
      allowed_pets?: boolean;
      allowed_alcohol?: boolean;
      /** Minimum hotel star rating. */
      min_stars?: number;
      /** Number of histogram bars. Default 30, max 60. */
      buckets?: number;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetPropertyPriceHistogramData;
  }

  /**
   * @description Returns active public hotels with pricing, rating, and amenity previews. Without `limit` and `page`, all matching rows are returned; with either query param, results are paginated. `X-Testing-Mode: true` returns only testing hotels; otherwise testing hotels are excluded.
   * @tags Property / Public
   * @name ListHotels
   * @summary List hotels
   * @request GET:/property/hotels/
   * @secure
   */
  export namespace ListHotels {
    export type RequestParams = {};
    export type RequestQuery = {
      /** Fuzzy text search using pg_trgm trigrams. Matches against property title and city — tolerates typos and partial words. */
      search?: string;
      /**
       * Latitude for geographic radius search. Requires `lon` to be set.
       * @format float
       */
      lat?: number;
      /**
       * Longitude for geographic radius search. Requires `lat` to be set.
       * @format float
       */
      lon?: number;
      /**
       * Search radius in kilometres. Default: 10. Only used when `lat` and `lon` are provided.
       * @format float
       */
      radius?: number;
      /** Location UUID or integer ID. Tried as region GUID → district GUID → prefecture GUID. */
      location_id?: string;
      region_id?: number;
      district_id?: number;
      /** @format uuid */
      prefecture_id?: string;
      /** Filter by property kind. Omit in the generic /properties/ endpoint to return all supported kinds. */
      property_type?: "apartment" | "cottage" | "hotel";
      corporate?: boolean;
      min_price?: number;
      max_price?: number;
      currency?: string;
      sort?:
        | "price_high"
        | "price_low"
        | "rating_high"
        | "rating_low"
        | "reviews_high"
        | "reviews_low"
        | "title_asc"
        | "title_desc"
        | "corporate_yes"
        | "corporate_no";
      ordering?: string;
      /** @format date */
      from_date?: string;
      limit?: number;
      page?: number;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** When `true`, return only testing properties. When omitted or false, testing properties are excluded. */
      "X-Testing-Mode"?: boolean;
    };
    export type ResponseBody = ListHotelsData;
  }

  /**
   * No description
   * @tags api
   * @name PropertyHotelsRead
   * @request GET:/property/hotels/{hotel_guid}/
   * @secure
   */
  export namespace PropertyHotelsRead {
    export type RequestParams = {
      hotelGuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PropertyHotelsReadData;
  }

  /**
   * @description Returns public reviews for a hotel by encoded GUID.
   * @tags Property / Reviews
   * @name ListHotelReviews
   * @summary List hotel reviews
   * @request GET:/property/hotels/{hotel_guid}/reviews/
   * @secure
   */
  export namespace ListHotelReviews {
    export type RequestParams = {
      /** Encoded hotel GUID. */
      hotelGuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ListHotelReviewsData;
  }

  /**
   * @description Client-only. Creates a review for a hotel after an eligible completed booking.
   * @tags Property / Reviews
   * @name CreateHotelReview
   * @summary Create a hotel review
   * @request POST:/property/hotels/{hotel_guid}/reviews/
   * @secure
   */
  export namespace CreateHotelReview {
    export type RequestParams = {
      /** Encoded hotel GUID. */
      hotelGuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = {
      rating?: number;
      comment?: string;
    };
    export type RequestHeaders = {};
    export type ResponseBody = CreateHotelReviewData;
  }

  /**
   * @description Returns the full hierarchical location tree: regions → districts → prefectures. Results are cached for 10 minutes.
   * @tags Property / Meta
   * @name ListLocations
   * @summary List location tree
   * @request GET:/property/location/
   * @secure
   */
  export namespace ListLocations {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /**
       * Preferred language for localized titles. Defaults to Uzbek.
       * @default "uz"
       */
      "Accept-Language"?: "en" | "ru" | "uz";
    };
    export type ResponseBody = ListLocationsData;
  }

  /**
   * @description Returns lightweight map markers for the current viewport. Below `cluster_max_zoom` nearby properties are merged into clusters; above it every property is returned as a pin carrying its nightly price. Tap handling should fetch the card via `/property/map/cards/`. Accepts every filter supported by `/property/properties/`.
   * @tags Property / Public
   * @name ListPropertyMapPins
   * @summary Map pins and clusters
   * @request GET:/property/map/
   * @secure
   */
  export namespace ListPropertyMapPins {
    export type RequestParams = {};
    export type RequestQuery = {
      /** Fuzzy text search using pg_trgm trigrams. Matches against property title and city — tolerates typos and partial words. */
      search?: string;
      /**
       * Latitude for geographic radius search. Requires `lon` to be set.
       * @format float
       */
      lat?: number;
      /**
       * Longitude for geographic radius search. Requires `lat` to be set.
       * @format float
       */
      lon?: number;
      /**
       * Search radius in kilometres. Default: 10. Only used when `lat` and `lon` are provided.
       * @format float
       */
      radius?: number;
      /** Location UUID or integer ID. Tried as region GUID → district GUID → prefecture GUID. */
      location_id?: string;
      region_id?: number;
      district_id?: number;
      /** @format uuid */
      prefecture_id?: string;
      /** Filter by property kind. Omit in the generic /properties/ endpoint to return all supported kinds. */
      property_type?: "apartment" | "cottage" | "hotel";
      corporate?: boolean;
      min_price?: number;
      max_price?: number;
      currency?: string;
      sort?:
        | "price_high"
        | "price_low"
        | "rating_high"
        | "rating_low"
        | "reviews_high"
        | "reviews_low"
        | "title_asc"
        | "title_desc"
        | "corporate_yes"
        | "corporate_no";
      ordering?: string;
      /** @format date */
      from_date?: string;
      limit?: number;
      page?: number;
      /**
       * South-west corner latitude of the visible map viewport.
       * @format float
       */
      sw_lat?: number;
      /**
       * South-west corner longitude of the visible map viewport.
       * @format float
       */
      sw_lon?: number;
      /**
       * North-east corner latitude of the visible map viewport.
       * @format float
       */
      ne_lat?: number;
      /**
       * North-east corner longitude of the visible map viewport.
       * @format float
       */
      ne_lon?: number;
      /** Viewport as `sw_lat,sw_lon,ne_lat,ne_lon`. Alternative to the four corner params. */
      bbox?: string;
      /** Current map zoom level (0–20). Results are clustered below `cluster_max_zoom` (default 14) and returned as individual pins above it. */
      zoom?: number;
      /** Zoom level from which clustering is disabled. Default 14. */
      cluster_max_zoom?: number;
      /** Comma-separated property kinds: `apartment,cottage,hotel`. Repeatable. */
      property_types?: string;
      /** Comma-separated amenity GUIDs (Удобства). Repeatable. */
      services?: string;
      /** `all` (default) requires every selected amenity, `any` requires at least one. */
      services_match?: "all" | "any";
      /** Minimum bedrooms (Спальни). */
      bedrooms?: number;
      /** Minimum beds (Кровати). */
      beds?: number;
      /** Minimum bathrooms (Ванные комнаты). */
      bathrooms?: number;
      /** Minimum guest capacity (Кто). */
      guests?: number;
      allowed_pets?: boolean;
      allowed_alcohol?: boolean;
      /** Minimum hotel star rating. */
      min_stars?: number;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** When `true`, return only testing properties. When omitted or false, testing properties are excluded. */
      "X-Testing-Mode"?: boolean;
    };
    export type ResponseBody = ListPropertyMapPinsData;
  }

  /**
   * @description Returns the card payload (image, title, rating, nightly price, district line and review count) for up to 20 properties. Used when a map price pin is tapped. Unknown GUIDs are skipped silently.
   * @tags Property / Public
   * @name ListPropertyMapCards
   * @summary Property cards by GUID
   * @request GET:/property/map/cards/
   * @secure
   */
  export namespace ListPropertyMapCards {
    export type RequestParams = {};
    export type RequestQuery = {
      /** Comma-separated property GUIDs (max 20). Repeatable. */
      guids: string;
      /**
       * Reference date used to pick the seasonal price. Defaults to today.
       * @format date
       */
      from_date?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ListPropertyMapCardsData;
  }

  /**
   * @description Admin or Partner. Returns every property owned by the requested owner (or the authenticated owner). Admins can pass owner_id to query another owner's listings.
   * @tags Property / Partner
   * @name ListAllPartnerProperties
   * @summary List all properties for an owner
   * @request GET:/property/partner/all/
   * @secure
   */
  export namespace ListAllPartnerProperties {
    export type RequestParams = {};
    export type RequestQuery = {
      /** Fuzzy text search using pg_trgm trigrams. Matches against property title and city — tolerates typos and partial words. */
      search?: string;
      /**
       * Latitude for geographic radius search. Requires `lon` to be set.
       * @format float
       */
      lat?: number;
      /**
       * Longitude for geographic radius search. Requires `lat` to be set.
       * @format float
       */
      lon?: number;
      /**
       * Search radius in kilometres. Default: 10. Only used when `lat` and `lon` are provided.
       * @format float
       */
      radius?: number;
      /** Location UUID or integer ID. Tried as region GUID → district GUID → prefecture GUID. */
      location_id?: string;
      region_id?: number;
      district_id?: number;
      /** @format uuid */
      prefecture_id?: string;
      /** Filter by property kind. Omit in the generic /properties/ endpoint to return all supported kinds. */
      property_type?: "apartment" | "cottage" | "hotel";
      corporate?: boolean;
      min_price?: number;
      max_price?: number;
      currency?: string;
      sort?:
        | "price_high"
        | "price_low"
        | "rating_high"
        | "rating_low"
        | "reviews_high"
        | "reviews_low"
        | "title_asc"
        | "title_desc"
        | "corporate_yes"
        | "corporate_no";
      ordering?: string;
      /** @format date */
      from_date?: string;
      limit?: number;
      page?: number;
      /** Admin only: target owner user id. Partners ignore this and always use the JWT subject. */
      owner_id?: number;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ListAllPartnerPropertiesData;
  }

  /**
   * @description Partner-only. Returns the authenticated partner's own apartments, including unverified and archived. Supports the same filters as public list.
   * @tags Property / Partner
   * @name ListPartnerApartments
   * @summary List partner apartments
   * @request GET:/property/partner/apartments/
   * @secure
   */
  export namespace ListPartnerApartments {
    export type RequestParams = {};
    export type RequestQuery = {
      /** Fuzzy text search using pg_trgm trigrams. Matches against property title and city — tolerates typos and partial words. */
      search?: string;
      /**
       * Latitude for geographic radius search. Requires `lon` to be set.
       * @format float
       */
      lat?: number;
      /**
       * Longitude for geographic radius search. Requires `lat` to be set.
       * @format float
       */
      lon?: number;
      /**
       * Search radius in kilometres. Default: 10. Only used when `lat` and `lon` are provided.
       * @format float
       */
      radius?: number;
      /** Location UUID or integer ID. Tried as region GUID → district GUID → prefecture GUID. */
      location_id?: string;
      region_id?: number;
      district_id?: number;
      /** @format uuid */
      prefecture_id?: string;
      /** Filter by property kind. Omit in the generic /properties/ endpoint to return all supported kinds. */
      property_type?: "apartment" | "cottage" | "hotel";
      corporate?: boolean;
      min_price?: number;
      max_price?: number;
      currency?: string;
      sort?:
        | "price_high"
        | "price_low"
        | "rating_high"
        | "rating_low"
        | "reviews_high"
        | "reviews_low"
        | "title_asc"
        | "title_desc"
        | "corporate_yes"
        | "corporate_no";
      ordering?: string;
      /** @format date */
      from_date?: string;
      limit?: number;
      page?: number;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ListPartnerApartmentsData;
  }

  /**
   * @description Partner-only. Returns the authenticated partner's own cottages, including unverified and archived. Supports the same filters as public list.
   * @tags Property / Partner
   * @name ListPartnerCottages
   * @summary List partner cottages
   * @request GET:/property/partner/cottages/
   * @secure
   */
  export namespace ListPartnerCottages {
    export type RequestParams = {};
    export type RequestQuery = {
      /** Fuzzy text search using pg_trgm trigrams. Matches against property title and city — tolerates typos and partial words. */
      search?: string;
      /**
       * Latitude for geographic radius search. Requires `lon` to be set.
       * @format float
       */
      lat?: number;
      /**
       * Longitude for geographic radius search. Requires `lat` to be set.
       * @format float
       */
      lon?: number;
      /**
       * Search radius in kilometres. Default: 10. Only used when `lat` and `lon` are provided.
       * @format float
       */
      radius?: number;
      /** Location UUID or integer ID. Tried as region GUID → district GUID → prefecture GUID. */
      location_id?: string;
      region_id?: number;
      district_id?: number;
      /** @format uuid */
      prefecture_id?: string;
      /** Filter by property kind. Omit in the generic /properties/ endpoint to return all supported kinds. */
      property_type?: "apartment" | "cottage" | "hotel";
      corporate?: boolean;
      min_price?: number;
      max_price?: number;
      currency?: string;
      sort?:
        | "price_high"
        | "price_low"
        | "rating_high"
        | "rating_low"
        | "reviews_high"
        | "reviews_low"
        | "title_asc"
        | "title_desc"
        | "corporate_yes"
        | "corporate_no";
      ordering?: string;
      /** @format date */
      from_date?: string;
      limit?: number;
      page?: number;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ListPartnerCottagesData;
  }

  /**
   * @description Partner-only. Returns the authenticated partner's own apartments and cottages, including unverified and archived. Supports the same filters as public list.
   * @tags Property / Partner
   * @name ListPartnerProperties
   * @summary List partner properties
   * @request GET:/property/partner/properties/
   * @secure
   */
  export namespace ListPartnerProperties {
    export type RequestParams = {};
    export type RequestQuery = {
      /** Fuzzy text search using pg_trgm trigrams. Matches against property title and city — tolerates typos and partial words. */
      search?: string;
      /**
       * Latitude for geographic radius search. Requires `lon` to be set.
       * @format float
       */
      lat?: number;
      /**
       * Longitude for geographic radius search. Requires `lat` to be set.
       * @format float
       */
      lon?: number;
      /**
       * Search radius in kilometres. Default: 10. Only used when `lat` and `lon` are provided.
       * @format float
       */
      radius?: number;
      /** Location UUID or integer ID. Tried as region GUID → district GUID → prefecture GUID. */
      location_id?: string;
      region_id?: number;
      district_id?: number;
      /** @format uuid */
      prefecture_id?: string;
      corporate?: boolean;
      min_price?: number;
      max_price?: number;
      currency?: string;
      sort?:
        | "price_high"
        | "price_low"
        | "rating_high"
        | "rating_low"
        | "reviews_high"
        | "reviews_low"
        | "title_asc"
        | "title_desc"
        | "corporate_yes"
        | "corporate_no";
      ordering?: string;
      /** @format date */
      from_date?: string;
      limit?: number;
      page?: number;
      /** Filter by property kind. Omit to return both. */
      property_type?: "apartment" | "cottage";
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ListPartnerPropertiesData;
  }

  /**
   * @description Partner-only. Returns booking statistics, cancellation metrics, and income breakdown for a specific property over a given time range.
   * @tags Property / Partner
   * @name GetPropertyAnalytics
   * @summary Get property analytics
   * @request GET:/property/partner/properties/{property_id}/analytics/
   * @secure
   */
  export namespace GetPropertyAnalytics {
    export type RequestParams = {
      /**
       * Property GUID.
       * @format uuid
       */
      propertyId: string;
    };
    export type RequestQuery = {
      /**
       * Time range for analytics.
       * @default "month"
       */
      range?: "week" | "month" | "quarter" | "year";
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetPropertyAnalyticsData;
  }

  /**
   * @description Returns all prefectures, optionally filtered by district_id or district_guid. Results are cached for 10 minutes.
   * @tags Property / Meta
   * @name ListPrefecturesPrefectures
   * @summary List prefectures
   * @request GET:/property/prefectures/
   * @secure
   */
  export namespace ListPrefecturesPrefectures {
    export type RequestParams = {};
    export type RequestQuery = {
      /** Filter by district database id. */
      district_id?: number;
      /**
       * Filter by district GUID.
       * @format uuid
       */
      district_guid?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ListPrefecturesPrefecturesData;
  }

  /**
   * @description Returns verified public apartments, cottages, and hotels. Use `property_type` or `kind` to filter to one property kind. `X-Testing-Mode: true` returns only testing properties; otherwise testing properties are excluded.
   * @tags Property / Public
   * @name ListProperties
   * @summary List properties
   * @request GET:/property/properties/
   * @secure
   */
  export namespace ListProperties {
    export type RequestParams = {};
    export type RequestQuery = {
      /** Fuzzy text search using pg_trgm trigrams. Matches against property title and city — tolerates typos and partial words. */
      search?: string;
      /**
       * Latitude for geographic radius search. Requires `lon` to be set.
       * @format float
       */
      lat?: number;
      /**
       * Longitude for geographic radius search. Requires `lat` to be set.
       * @format float
       */
      lon?: number;
      /**
       * Search radius in kilometres. Default: 10. Only used when `lat` and `lon` are provided.
       * @format float
       */
      radius?: number;
      /** Location UUID or integer ID. Tried as region GUID → district GUID → prefecture GUID. */
      location_id?: string;
      region_id?: number;
      district_id?: number;
      /** @format uuid */
      prefecture_id?: string;
      /** Filter by property kind. Omit in the generic /properties/ endpoint to return all supported kinds. */
      property_type?: "apartment" | "cottage" | "hotel";
      corporate?: boolean;
      min_price?: number;
      max_price?: number;
      currency?: string;
      sort?:
        | "price_high"
        | "price_low"
        | "rating_high"
        | "rating_low"
        | "reviews_high"
        | "reviews_low"
        | "title_asc"
        | "title_desc"
        | "corporate_yes"
        | "corporate_no";
      ordering?: string;
      /** @format date */
      from_date?: string;
      limit?: number;
      page?: number;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** When `true`, return only testing properties. When omitted or false, testing properties are excluded. */
      "X-Testing-Mode"?: boolean;
    };
    export type ResponseBody = ListPropertiesData;
  }

  /**
   * @description Partner-only compatibility endpoint. Creates an apartment by default, or a cottage when the URL forces cottage mode.
   * @tags Property / Partner
   * @name CreateProperty
   * @summary Create a property
   * @request POST:/property/properties/
   * @secure
   */
  export namespace CreateProperty {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = ApartmentCreate;
    export type RequestHeaders = {};
    export type ResponseBody = CreatePropertyData;
  }

  /**
   * @description Client-only. Returns the authenticated client's favorited properties (apartments and cottages). Supports the same filters as public list.
   * @tags Property / Client
   * @name ListSavedProperties
   * @summary List saved (favorite) properties
   * @request GET:/property/properties/favorites/
   * @secure
   */
  export namespace ListSavedProperties {
    export type RequestParams = {};
    export type RequestQuery = {
      /** Fuzzy text search using pg_trgm trigrams. Matches against property title and city — tolerates typos and partial words. */
      search?: string;
      /**
       * Latitude for geographic radius search. Requires `lon` to be set.
       * @format float
       */
      lat?: number;
      /**
       * Longitude for geographic radius search. Requires `lat` to be set.
       * @format float
       */
      lon?: number;
      /**
       * Search radius in kilometres. Default: 10. Only used when `lat` and `lon` are provided.
       * @format float
       */
      radius?: number;
      /** Location UUID or integer ID. Tried as region GUID → district GUID → prefecture GUID. */
      location_id?: string;
      region_id?: number;
      district_id?: number;
      /** @format uuid */
      prefecture_id?: string;
      /** Filter by property kind. Omit in the generic /properties/ endpoint to return all supported kinds. */
      property_type?: "apartment" | "cottage" | "hotel";
      corporate?: boolean;
      min_price?: number;
      max_price?: number;
      currency?: string;
      sort?:
        | "price_high"
        | "price_low"
        | "rating_high"
        | "rating_low"
        | "reviews_high"
        | "reviews_low"
        | "title_asc"
        | "title_desc"
        | "corporate_yes"
        | "corporate_no";
      ordering?: string;
      /** @format date */
      from_date?: string;
      limit?: number;
      page?: number;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ListSavedPropertiesData;
  }

  /**
   * @description Accepts a property URL or link and returns the matching property GUID if found.
   * @tags Property / Public
   * @name FilterPropertyByLink
   * @summary Filter property by link
   * @request POST:/property/properties/filter-by-link/
   * @secure
   */
  export namespace FilterPropertyByLink {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = {
      url?: string;
      link?: string;
    };
    export type RequestHeaders = {};
    export type ResponseBody = FilterPropertyByLinkData;
  }

  /**
   * @description Returns featured, best-reviewed, or most-booked properties. Supports filtering by kind (apartment, cottage, or both). Results are cached for 60 seconds.
   * @tags Property / Public
   * @name ListRecommendations
   * @summary List recommended properties
   * @request GET:/property/recommendations/
   * @secure
   */
  export namespace ListRecommendations {
    export type RequestParams = {};
    export type RequestQuery = {
      /** Fuzzy text search using pg_trgm trigrams. Matches against property title and city — tolerates typos and partial words. */
      search?: string;
      /**
       * Latitude for geographic radius search. Requires `lon` to be set.
       * @format float
       */
      lat?: number;
      /**
       * Longitude for geographic radius search. Requires `lat` to be set.
       * @format float
       */
      lon?: number;
      /**
       * Search radius in kilometres. Default: 10. Only used when `lat` and `lon` are provided.
       * @format float
       */
      radius?: number;
      /** Location UUID or integer ID. Tried as region GUID → district GUID → prefecture GUID. */
      location_id?: string;
      region_id?: number;
      district_id?: number;
      /** @format uuid */
      prefecture_id?: string;
      /** Filter by property kind. Omit in the generic /properties/ endpoint to return all supported kinds. */
      property_type?: "apartment" | "cottage" | "hotel";
      corporate?: boolean;
      min_price?: number;
      max_price?: number;
      currency?: string;
      sort?:
        | "price_high"
        | "price_low"
        | "rating_high"
        | "rating_low"
        | "reviews_high"
        | "reviews_low"
        | "title_asc"
        | "title_desc"
        | "corporate_yes"
        | "corporate_no";
      ordering?: string;
      /** @format date */
      from_date?: string;
      limit?: number;
      page?: number;
      kind?: "property" | "apartment" | "cottage";
      type?: "featured" | "best-by-reviews" | "most-booked";
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** When `true`, return only testing properties. When omitted or false, testing properties are excluded. */
      "X-Testing-Mode"?: boolean;
    };
    export type ResponseBody = ListRecommendationsData;
  }

  /**
   * @description Returns KNN-based personalized property recommendations for the authenticated client. Uses pgvector cosine similarity on client and property embeddings built from booking history, reviews, and preferences.
   * @tags Property / Recommendations
   * @name GetPersonalizedRecommendations
   * @summary Get personalized property recommendations
   * @request GET:/property/recommendations/personal/
   * @secure
   */
  export namespace GetPersonalizedRecommendations {
    export type RequestParams = {};
    export type RequestQuery = {
      /** Filter by property kind. Defaults to apartment. */
      kind?: "apartment" | "cottage";
      /** Number of recommendations to return (1-50). Defaults to 20. */
      limit?: number;
      /**
       * Reference date for availability filtering (YYYY-MM-DD).
       * @format date
       */
      from_date?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetPersonalizedRecommendationsData;
  }

  /**
   * @description Returns all regions with titles and image URLs. Results are cached for 10 minutes.
   * @tags Property / Meta
   * @name ListRegions
   * @summary List regions
   * @request GET:/property/regions/
   * @secure
   */
  export namespace ListRegions {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ListRegionsData;
  }

  /**
   * @description Returns apartments and cottages filtered by a specific region. Supports the same query filters as the public list. `X-Testing-Mode: true` returns only testing properties; otherwise testing properties are excluded.
   * @tags Property / Public
   * @name ListPropertiesByRegion
   * @summary List properties by region
   * @request GET:/property/regions/{region_id}/properties/
   * @secure
   */
  export namespace ListPropertiesByRegion {
    export type RequestParams = {
      regionId: string;
    };
    export type RequestQuery = {
      /** Fuzzy text search using pg_trgm trigrams. Matches against property title and city — tolerates typos and partial words. */
      search?: string;
      /**
       * Latitude for geographic radius search. Requires `lon` to be set.
       * @format float
       */
      lat?: number;
      /**
       * Longitude for geographic radius search. Requires `lat` to be set.
       * @format float
       */
      lon?: number;
      /**
       * Search radius in kilometres. Default: 10. Only used when `lat` and `lon` are provided.
       * @format float
       */
      radius?: number;
      /** Location UUID or integer ID. Tried as region GUID → district GUID → prefecture GUID. */
      location_id?: string;
      region_id?: number;
      district_id?: number;
      /** @format uuid */
      prefecture_id?: string;
      /** Filter by property kind. Omit in the generic /properties/ endpoint to return all supported kinds. */
      property_type?: "apartment" | "cottage" | "hotel";
      corporate?: boolean;
      min_price?: number;
      max_price?: number;
      currency?: string;
      sort?:
        | "price_high"
        | "price_low"
        | "rating_high"
        | "rating_low"
        | "reviews_high"
        | "reviews_low"
        | "title_asc"
        | "title_desc"
        | "corporate_yes"
        | "corporate_no";
      ordering?: string;
      /** @format date */
      from_date?: string;
      limit?: number;
      page?: number;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** When `true`, return only testing properties. When omitted or false, testing properties are excluded. */
      "X-Testing-Mode"?: boolean;
    };
    export type ResponseBody = ListPropertiesByRegionData;
  }

  /**
   * @description Mixed apartment / cottage / hotel search returning the compact card payload used on the search results screen: image, title, rating, `от X / 1 чел · ночь`, district line and review count. Accepts the full filter set plus `property_types` multi-select.
   * @tags Property / Public
   * @name SearchProperties
   * @summary Search properties (card list)
   * @request GET:/property/search/
   * @secure
   */
  export namespace SearchProperties {
    export type RequestParams = {};
    export type RequestQuery = {
      /** Fuzzy text search using pg_trgm trigrams. Matches against property title and city — tolerates typos and partial words. */
      search?: string;
      /**
       * Latitude for geographic radius search. Requires `lon` to be set.
       * @format float
       */
      lat?: number;
      /**
       * Longitude for geographic radius search. Requires `lat` to be set.
       * @format float
       */
      lon?: number;
      /**
       * Search radius in kilometres. Default: 10. Only used when `lat` and `lon` are provided.
       * @format float
       */
      radius?: number;
      /** Location UUID or integer ID. Tried as region GUID → district GUID → prefecture GUID. */
      location_id?: string;
      region_id?: number;
      district_id?: number;
      /** @format uuid */
      prefecture_id?: string;
      /** Filter by property kind. Omit in the generic /properties/ endpoint to return all supported kinds. */
      property_type?: "apartment" | "cottage" | "hotel";
      corporate?: boolean;
      min_price?: number;
      max_price?: number;
      currency?: string;
      sort?:
        | "price_high"
        | "price_low"
        | "rating_high"
        | "rating_low"
        | "reviews_high"
        | "reviews_low"
        | "title_asc"
        | "title_desc"
        | "corporate_yes"
        | "corporate_no";
      ordering?: string;
      /** @format date */
      from_date?: string;
      limit?: number;
      page?: number;
      /**
       * South-west corner latitude of the visible map viewport.
       * @format float
       */
      sw_lat?: number;
      /**
       * South-west corner longitude of the visible map viewport.
       * @format float
       */
      sw_lon?: number;
      /**
       * North-east corner latitude of the visible map viewport.
       * @format float
       */
      ne_lat?: number;
      /**
       * North-east corner longitude of the visible map viewport.
       * @format float
       */
      ne_lon?: number;
      /** Viewport as `sw_lat,sw_lon,ne_lat,ne_lon`. Alternative to the four corner params. */
      bbox?: string;
      /** Current map zoom level (0–20). Results are clustered below `cluster_max_zoom` (default 14) and returned as individual pins above it. */
      zoom?: number;
      /** Zoom level from which clustering is disabled. Default 14. */
      cluster_max_zoom?: number;
      /** Comma-separated property kinds: `apartment,cottage,hotel`. Repeatable. */
      property_types?: string;
      /** Comma-separated amenity GUIDs (Удобства). Repeatable. */
      services?: string;
      /** `all` (default) requires every selected amenity, `any` requires at least one. */
      services_match?: "all" | "any";
      /** Minimum bedrooms (Спальни). */
      bedrooms?: number;
      /** Minimum beds (Кровати). */
      beds?: number;
      /** Minimum bathrooms (Ванные комнаты). */
      bathrooms?: number;
      /** Minimum guest capacity (Кто). */
      guests?: number;
      allowed_pets?: boolean;
      allowed_alcohol?: boolean;
      /** Minimum hotel star rating. */
      min_stars?: number;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /** When `true`, return only testing properties. When omitted or false, testing properties are excluded. */
      "X-Testing-Mode"?: boolean;
    };
    export type ResponseBody = SearchPropertiesData;
  }

  /**
   * @description Returns all available property services (amenities) with localized titles and icon URLs. Results are cached for 10 minutes.
   * @tags Property / Meta
   * @name ListPropertyServices
   * @summary List property services
   * @request GET:/property/services/
   * @secure
   */
  export namespace ListPropertyServices {
    export type RequestParams = {};
    export type RequestQuery = {
      /** Restrict the list to services that apply to this property type (e.g. hotel, room). */
      property_type?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      /**
       * Preferred language for localized titles. Defaults to Uzbek.
       * @default "uz"
       */
      "Accept-Language"?: "en" | "ru" | "uz";
    };
    export type ResponseBody = ListPropertyServicesData;
  }

  /**
   * @description Returns the public property types with localized titles, icon URLs, and `kind` field. Results are cached for 10 minutes.
   * @tags Property / Meta
   * @name ListPropertyTypes
   * @summary List property types
   * @request GET:/property/types/
   * @secure
   */
  export namespace ListPropertyTypes {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      /**
       * Preferred language for localized titles. Defaults to Uzbek.
       * @default "uz"
       */
      "Accept-Language"?: "en" | "ru" | "uz";
    };
    export type ResponseBody = ListPropertyTypesData;
  }

  /**
   * @description Client-only. Adds/removes a hotel from favorites by encoded GUID.
   * @tags Property / Client
   * @name ToggleHotelFavorite
   * @summary Toggle hotel favorite
   * @request POST:/property/{hotel_guid}/favorite/
   * @secure
   */
  export namespace ToggleHotelFavorite {
    export type RequestParams = {
      /** Encoded hotel GUID. */
      hotelGuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ToggleHotelFavoriteData;
  }

  /**
   * No description
   * @tags api
   * @name PropertyFavoriteDelete
   * @request DELETE:/property/{hotel_guid}/favorite/
   * @secure
   */
  export namespace PropertyFavoriteDelete {
    export type RequestParams = {
      hotelGuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PropertyFavoriteDeleteData;
  }

  /**
   * @description Client-only. Adds the property to favorites if not present, or removes it if already favorited. Returns the new is_favorite state.
   * @tags Property / Client
   * @name TogglePropertyFavorite
   * @summary Toggle property favorite
   * @request POST:/property/{property_id}/favorite/
   * @secure
   */
  export namespace TogglePropertyFavorite {
    export type RequestParams = {
      /**
       * Property GUID.
       * @format uuid
       */
      propertyId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = TogglePropertyFavoriteData;
  }

  /**
   * @description Client-only. Removes a property from the authenticated client's favorites.
   * @tags Property / Client
   * @name RemovePropertyFavorite
   * @summary Remove property from favorites
   * @request DELETE:/property/{property_id}/favorite/
   * @secure
   */
  export namespace RemovePropertyFavorite {
    export type RequestParams = {
      /**
       * Property GUID.
       * @format uuid
       */
      propertyId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = RemovePropertyFavoriteData;
  }
}

export namespace Story {
  /**
   * No description
   * @tags Admin - Banners
   * @name StoryAdminBannersList
   * @summary List all banners
   * @request GET:/story/admin/banners/
   * @secure
   */
  export namespace StoryAdminBannersList {
    export type RequestParams = {};
    export type RequestQuery = {
      /** Search by html_source or GUID */
      search?: string;
      /** Order by field (e.g. -created_at) */
      ordering?: string;
      /** Page number */
      page?: number;
      /** Items per page */
      page_size?: number;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = StoryAdminBannersListData;
  }

  /**
   * No description
   * @tags Admin - Banners
   * @name StoryAdminBannersCreateCreate
   * @summary Create a banner
   * @request POST:/story/admin/banners/create/
   * @secure
   */
  export namespace StoryAdminBannersCreateCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = {
      /** @minLength 1 */
      html_source: string;
      /** @format binary */
      image: File;
    };
    export type RequestHeaders = {};
    export type ResponseBody = StoryAdminBannersCreateCreateData;
  }

  /**
   * No description
   * @tags Admin - Banners
   * @name StoryAdminBannersRead
   * @summary Get banner by GUID
   * @request GET:/story/admin/banners/{banner_guid}/
   * @secure
   */
  export namespace StoryAdminBannersRead {
    export type RequestParams = {
      bannerGuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = StoryAdminBannersReadData;
  }

  /**
   * No description
   * @tags Admin - Banners
   * @name StoryAdminBannersDeleteDelete
   * @summary Delete a banner
   * @request DELETE:/story/admin/banners/{banner_guid}/delete/
   * @secure
   */
  export namespace StoryAdminBannersDeleteDelete {
    export type RequestParams = {
      bannerGuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }

  /**
   * No description
   * @tags Admin - Banners
   * @name StoryAdminBannersUpdatePartialUpdate
   * @summary Update a banner
   * @request PATCH:/story/admin/banners/{banner_guid}/update/
   * @secure
   */
  export namespace StoryAdminBannersUpdatePartialUpdate {
    export type RequestParams = {
      bannerGuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = {
      /** @minLength 1 */
      html_source?: string;
      /** @format binary */
      image?: File;
    };
    export type RequestHeaders = {};
    export type ResponseBody = StoryAdminBannersUpdatePartialUpdateData;
  }

  /**
   * @description List all platform news with search and ordering. Admin only.
   * @tags Admin - News
   * @name StoryAdminNewsList
   * @summary List all platform news
   * @request GET:/story/admin/news/
   * @secure
   */
  export namespace StoryAdminNewsList {
    export type RequestParams = {};
    export type RequestQuery = {
      /** Search by title, body, or GUID */
      search?: string;
      /** Order by field (e.g. -created_at, views) */
      ordering?: string;
      /** Page number */
      page?: number;
      /** Items per page */
      page_size?: number;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = StoryAdminNewsListData;
  }

  /**
   * @description Create a new platform news article. Admin only.
   * @tags Admin - News
   * @name StoryAdminNewsCreateCreate
   * @summary Create platform news
   * @request POST:/story/admin/news/create/
   * @secure
   */
  export namespace StoryAdminNewsCreateCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = {
      /**
       * @minLength 1
       * @maxLength 500
       */
      title: string;
      body?: string | null;
      media_type?: string | null;
      /** @format binary */
      media_file?: File | null;
    };
    export type RequestHeaders = {};
    export type ResponseBody = StoryAdminNewsCreateCreateData;
  }

  /**
   * @description Retrieve a single platform news article. Admin only.
   * @tags Admin - News
   * @name StoryAdminNewsRead
   * @summary Get platform news by GUID
   * @request GET:/story/admin/news/{news_guid}/
   * @secure
   */
  export namespace StoryAdminNewsRead {
    export type RequestParams = {
      newsGuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = StoryAdminNewsReadData;
  }

  /**
   * @description Delete a platform news article. Admin only.
   * @tags Admin - News
   * @name StoryAdminNewsDeleteDelete
   * @summary Delete platform news
   * @request DELETE:/story/admin/news/{news_guid}/delete/
   * @secure
   */
  export namespace StoryAdminNewsDeleteDelete {
    export type RequestParams = {
      newsGuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }

  /**
   * @description Update a platform news article. Admin only.
   * @tags Admin - News
   * @name StoryAdminNewsUpdatePartialUpdate
   * @summary Update platform news
   * @request PATCH:/story/admin/news/{news_guid}/update/
   * @secure
   */
  export namespace StoryAdminNewsUpdatePartialUpdate {
    export type RequestParams = {
      newsGuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = {
      /**
       * @minLength 1
       * @maxLength 500
       */
      title?: string;
      body?: string | null;
      media_type?: string | null;
      /** @format binary */
      media_file?: File | null;
    };
    export type RequestHeaders = {};
    export type ResponseBody = StoryAdminNewsUpdatePartialUpdateData;
  }

  /**
   * @description List all stories with optional filtering by verification status and search. Admin only.
   * @tags Admin - Stories
   * @name StoryAdminStoriesList
   * @summary List all stories
   * @request GET:/story/admin/stories/
   * @secure
   */
  export namespace StoryAdminStoriesList {
    export type RequestParams = {};
    export type RequestQuery = {
      /** Filter by verification status (true/false) */
      is_verified?: boolean;
      /** Search by property title, partner ID, or story GUID */
      search?: string;
      /** Order by field (e.g. -created_at, uploaded_at, expires_at, views) */
      ordering?: string;
      /** Page number */
      page?: number;
      /** Items per page */
      page_size?: number;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = StoryAdminStoriesListData;
  }

  /**
   * @description Delete a story by GUID. Admin only.
   * @tags Admin - Stories
   * @name StoryAdminStoriesDeleteDelete
   * @summary Delete a story
   * @request DELETE:/story/admin/stories/{story_guid}/delete/
   * @secure
   */
  export namespace StoryAdminStoriesDeleteDelete {
    export type RequestParams = {
      storyGuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }

  /**
   * @description Approve or reject a story by setting is_verified. Admin only.
   * @tags Admin - Stories
   * @name StoryAdminStoriesModeratePartialUpdate
   * @summary Moderate a story
   * @request PATCH:/story/admin/stories/{story_guid}/moderate/
   * @secure
   */
  export namespace StoryAdminStoriesModeratePartialUpdate {
    export type RequestParams = {
      storyGuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = AdminStoryModerate;
    export type RequestHeaders = {};
    export type ResponseBody = StoryAdminStoriesModeratePartialUpdateData;
  }

  /**
   * @description Retrieve all stories created by the authenticated partner (including unverified)
   * @tags Stories
   * @name StoryPartnerStoriesList
   * @summary Partner's own stories
   * @request GET:/story/partner/stories/
   * @secure
   */
  export namespace StoryPartnerStoriesList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = StoryPartnerStoriesListData;
  }

  /**
   * No description
   * @tags Banners
   * @name StoryPublicBannersList
   * @summary List public banners
   * @request GET:/story/public/banners/
   * @secure
   */
  export namespace StoryPublicBannersList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = StoryPublicBannersListData;
  }

  /**
   * No description
   * @tags Banners
   * @name StoryPublicBannersRead
   * @summary Get banner by GUID
   * @request GET:/story/public/banners/{banner_guid}/
   * @secure
   */
  export namespace StoryPublicBannersRead {
    export type RequestParams = {
      bannerGuid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = StoryPublicBannersReadData;
  }

  /**
   * @description List public stories. If property_type is provided, filters by type + includes platform news.
   * @tags Stories
   * @name StoryPublicStoriesList
   * @summary Public stories list
   * @request GET:/story/public/stories/
   * @secure
   */
  export namespace StoryPublicStoriesList {
    export type RequestParams = {};
    export type RequestQuery = {
      /** Property type (apartment/cottage). Optional. */
      property_type?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = StoryPublicStoriesListData;
  }

  /**
   * @description For clients property_type is required; request without it returns 404.
   * @tags Stories
   * @name StoryStoriesList
   * @summary Retrieve all stories(non-expired)
   * @request GET:/story/stories/
   * @secure
   */
  export namespace StoryStoriesList {
    export type RequestParams = {};
    export type RequestQuery = {
      /** Property type (apartment/cottage). Required for client/public requests. */
      property_type?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = StoryStoriesListData;
  }

  /**
   * @description Create a new story, only partners can upload stories
   * @tags Stories
   * @name StoryStoriesCreate
   * @summary Create a new story
   * @request POST:/story/stories/
   * @secure
   */
  export namespace StoryStoriesCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = {
      /** @format uuid */
      property_id: string;
      /** @minLength 1 */
      media_type: string;
      /** @format binary */
      media_file: File;
    };
    export type RequestHeaders = {};
    export type ResponseBody = StoryStoriesCreateData;
  }

  /**
   * @description Delete all stories, only partners can delete their own stories
   * @tags Stories
   * @name StoryStoriesDelete1
   * @summary Delete all the stories entirely
   * @request DELETE:/story/stories/{story_id}/
   * @secure
   */
  export namespace StoryStoriesDelete1 {
    export type RequestParams = {
      /**
       * Unique story GUID
       * @format uuid
       */
      storyId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }

  /**
   * @description Retrieve a specific media from a story and count view for authenticated client
   * @tags Story Media
   * @name StoryStoriesRead
   * @summary Retrieve a story(non-expired) media
   * @request GET:/story/stories/{story_id}/{media_id}/
   * @secure
   */
  export namespace StoryStoriesRead {
    export type RequestParams = {
      /**
       * Unique story GUID
       * @format uuid
       */
      storyId: string;
      /**
       * Unique media GUID
       * @format uuid
       */
      mediaId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = StoryStoriesReadData;
  }

  /**
   * @description Delete a specific media from a story, only partners can delete their own stories
   * @tags Story Media
   * @name StoryStoriesDelete2
   * @summary Delete story media
   * @request DELETE:/story/stories/{story_id}/{media_id}/
   * @secure
   */
  export namespace StoryStoriesDelete2 {
    export type RequestParams = {
      /**
       * Unique story GUID
       * @format uuid
       */
      storyId: string;
      /**
       * Unique media GUID
       * @format uuid
       */
      mediaId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = StoryStoriesDelete2Data;
  }
}

export namespace User {
  /**
   * @description Soft deactivate the authenticated client or partner account. Requires OTP verification. The account is deactivated and PII is anonymized. This action is irreversible.
   * @tags Auth - Profile
   * @name UserAccountDelete
   * @summary Deactivate own account (Client or Partner)
   * @request DELETE:/user/account/
   * @secure
   */
  export namespace UserAccountDelete {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = {
      /** OTP code sent for deletion */
      otp_code: string;
      /** Refresh token to blacklist */
      refresh?: string;
    };
    export type RequestHeaders = {};
    export type ResponseBody = UserAccountDeleteData;
  }

  /**
   * @description Sends an OTP to the authenticated user's phone to confirm account deletion.
   * @tags Auth - Profile
   * @name UserAccountDeleteRequestCreate
   * @summary Send OTP for account deletion
   * @request POST:/user/account/delete/request/
   * @secure
   */
  export namespace UserAccountDeleteRequestCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = UserAccountDeleteRequestCreateData;
  }

  /**
   * No description
   * @tags Client Cards
   * @name UserClientCardsList
   * @summary List all cards for the authenticated client
   * @request GET:/user/client/cards/
   * @secure
   */
  export namespace UserClientCardsList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = UserClientCardsListData;
  }

  /**
   * No description
   * @tags Client Cards
   * @name UserClientCardsCreate
   * @summary Add a new card
   * @request POST:/user/client/cards/
   * @secure
   */
  export namespace UserClientCardsCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = {
      card_number: string;
      expire_date: string;
      /** Optional. If not provided, uses user's saved phone number */
      phone_number?: string;
    };
    export type RequestHeaders = {};
    export type ResponseBody = UserClientCardsCreateData;
  }

  /**
   * No description
   * @tags Client Cards
   * @name UserClientCardsResendOtp
   * @summary Resend OTP for card verification
   * @request POST:/user/client/cards/resend/
   * @secure
   */
  export namespace UserClientCardsResendOtp {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = {
      session: string;
    };
    export type RequestHeaders = {};
    export type ResponseBody = UserClientCardsResendOtpData;
  }

  /**
   * No description
   * @tags Client Cards
   * @name UserClientCardsVerify
   * @summary Verify newly added card (OTP check)
   * @request POST:/user/client/cards/verify/
   * @secure
   */
  export namespace UserClientCardsVerify {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = {
      session: string;
      otp: string;
    };
    export type RequestHeaders = {};
    export type ResponseBody = UserClientCardsVerifyData;
  }

  /**
   * No description
   * @tags Client Cards
   * @name UserClientCardsDelete
   * @summary Remove a card by its user_card_id
   * @request DELETE:/user/client/cards/{id}/
   * @secure
   */
  export namespace UserClientCardsDelete {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = UserClientCardsDeleteData;
  }

  /**
   * No description
   * @tags Auth - Login
   * @name UserClientLoginCreate
   * @request POST:/user/client/login/
   * @secure
   */
  export namespace UserClientLoginCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = UserPhoneNumber;
    export type RequestHeaders = {};
    export type ResponseBody = UserClientLoginCreateData;
  }

  /**
   * No description
   * @tags Auth - Login
   * @name UserClientLoginResendCreate
   * @request POST:/user/client/login/resend/
   * @secure
   */
  export namespace UserClientLoginResendCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = ResendOTP;
    export type RequestHeaders = {};
    export type ResponseBody = UserClientLoginResendCreateData;
  }

  /**
   * No description
   * @tags Auth - Login
   * @name UserClientLoginVerifyCreate
   * @request POST:/user/client/login/verify/
   * @secure
   */
  export namespace UserClientLoginVerifyCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = ClientOTPLoginVerify;
    export type RequestHeaders = {};
    export type ResponseBody = UserClientLoginVerifyCreateData;
  }

  /**
   * No description
   * @tags Auth - Logout
   * @name UserClientLogoutCreate
   * @request POST:/user/client/logout/
   * @secure
   */
  export namespace UserClientLogoutCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = {
      /** Refresh token to blacklist */
      refresh: string;
    };
    export type RequestHeaders = {};
    export type ResponseBody = UserClientLogoutCreateData;
  }

  /**
   * No description
   * @tags Auth - Profile
   * @name UserClientProfileList
   * @request GET:/user/client/profile/
   * @secure
   */
  export namespace UserClientProfileList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = UserClientProfileListData;
  }

  /**
   * No description
   * @tags Auth - Profile
   * @name UserClientProfileUpdateUpdate
   * @request PUT:/user/client/profile/update/
   * @secure
   */
  export namespace UserClientProfileUpdateUpdate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = ClientProfile;
    export type RequestHeaders = {};
    export type ResponseBody = UserClientProfileUpdateUpdateData;
  }

  /**
   * No description
   * @tags Auth - Profile
   * @name UserClientProfileUpdatePartialUpdate
   * @request PATCH:/user/client/profile/update/
   * @secure
   */
  export namespace UserClientProfileUpdatePartialUpdate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = ClientProfile;
    export type RequestHeaders = {};
    export type ResponseBody = UserClientProfileUpdatePartialUpdateData;
  }

  /**
   * No description
   * @tags Auth - Register
   * @name UserClientRegisterCreate
   * @request POST:/user/client/register/
   * @secure
   */
  export namespace UserClientRegisterCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = ClientRegister;
    export type RequestHeaders = {};
    export type ResponseBody = UserClientRegisterCreateData;
  }

  /**
   * No description
   * @tags Auth - Register
   * @name UserClientRegisterResendCreate
   * @request POST:/user/client/register/resend/
   * @secure
   */
  export namespace UserClientRegisterResendCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = ResendOTP;
    export type RequestHeaders = {};
    export type ResponseBody = UserClientRegisterResendCreateData;
  }

  /**
   * No description
   * @tags Auth - Register
   * @name UserClientRegisterVerifyCreate
   * @request POST:/user/client/register/verify/
   * @secure
   */
  export namespace UserClientRegisterVerifyCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = ClientOTPRegistrationVerify;
    export type RequestHeaders = {};
    export type ResponseBody = UserClientRegisterVerifyCreateData;
  }

  /**
   * No description
   * @tags Partner Documents
   * @name UserPartnerDocumentsPassportCreate
   * @summary Upload partner passport
   * @request POST:/user/partner/documents/passport/
   * @secure
   */
  export namespace UserPartnerDocumentsPassportCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = {
      /**
       * Passport file (pdf, jpg, png)
       * @format binary
       */
      document: File;
    };
    export type RequestHeaders = {};
    export type ResponseBody = UserPartnerDocumentsPassportCreateData;
  }

  /**
   * No description
   * @tags Auth - Login
   * @name UserPartnerLoginCreate
   * @request POST:/user/partner/login/
   * @secure
   */
  export namespace UserPartnerLoginCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = UserPhoneNumber;
    export type RequestHeaders = {};
    export type ResponseBody = UserPartnerLoginCreateData;
  }

  /**
   * No description
   * @tags Auth - Login
   * @name UserPartnerLoginResendCreate
   * @request POST:/user/partner/login/resend/
   * @secure
   */
  export namespace UserPartnerLoginResendCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = ResendOTP;
    export type RequestHeaders = {};
    export type ResponseBody = UserPartnerLoginResendCreateData;
  }

  /**
   * No description
   * @tags Auth - Login
   * @name UserPartnerLoginVerifyCreate
   * @request POST:/user/partner/login/verify/
   * @secure
   */
  export namespace UserPartnerLoginVerifyCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = PartnerOTPLogin;
    export type RequestHeaders = {};
    export type ResponseBody = UserPartnerLoginVerifyCreateData;
  }

  /**
   * No description
   * @tags Auth - Logout
   * @name UserPartnerLogoutCreate
   * @request POST:/user/partner/logout/
   * @secure
   */
  export namespace UserPartnerLogoutCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = {
      /** Refresh token to blacklist */
      refresh: string;
    };
    export type RequestHeaders = {};
    export type ResponseBody = UserPartnerLogoutCreateData;
  }

  /**
   * No description
   * @tags Auth - Profile
   * @name UserPartnerProfileList
   * @request GET:/user/partner/profile/
   * @secure
   */
  export namespace UserPartnerProfileList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = UserPartnerProfileListData;
  }

  /**
   * @description Soft deactivate the partner account. Requires OTP verification. The account is deactivated and PII is anonymized. This action is irreversible.
   * @tags Auth - Profile
   * @name UserPartnerProfileDelete
   * @summary Deactivate own partner profile
   * @request DELETE:/user/partner/profile/
   * @secure
   */
  export namespace UserPartnerProfileDelete {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = {
      /** OTP code sent for deletion */
      otp_code: string;
      /** Refresh token to blacklist */
      refresh?: string;
    };
    export type RequestHeaders = {};
    export type ResponseBody = UserPartnerProfileDeleteData;
  }

  /**
   * No description
   * @tags Auth - Profile
   * @name UserPartnerProfileUpdateUpdate
   * @request PUT:/user/partner/profile/update/
   * @secure
   */
  export namespace UserPartnerProfileUpdateUpdate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = PartnerProfile;
    export type RequestHeaders = {};
    export type ResponseBody = UserPartnerProfileUpdateUpdateData;
  }

  /**
   * No description
   * @tags Auth - Profile
   * @name UserPartnerProfileUpdatePartialUpdate
   * @request PATCH:/user/partner/profile/update/
   * @secure
   */
  export namespace UserPartnerProfileUpdatePartialUpdate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = PartnerProfile;
    export type RequestHeaders = {};
    export type ResponseBody = UserPartnerProfileUpdatePartialUpdateData;
  }

  /**
   * No description
   * @tags Auth - Register
   * @name UserPartnerRegisterCreate
   * @request POST:/user/partner/register/
   * @secure
   */
  export namespace UserPartnerRegisterCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = PartnerOTPRegister;
    export type RequestHeaders = {};
    export type ResponseBody = UserPartnerRegisterCreateData;
  }

  /**
   * No description
   * @tags Auth - Register
   * @name UserPartnerRegisterResendCreate
   * @request POST:/user/partner/register/resend/
   * @secure
   */
  export namespace UserPartnerRegisterResendCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = ResendOTP;
    export type RequestHeaders = {};
    export type ResponseBody = UserPartnerRegisterResendCreateData;
  }

  /**
   * No description
   * @tags Auth - Register
   * @name UserPartnerRegisterVerifyCreate
   * @request POST:/user/partner/register/verify/
   * @secure
   */
  export namespace UserPartnerRegisterVerifyCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = PartnerOTPRegisterVerify;
    export type RequestHeaders = {};
    export type ResponseBody = UserPartnerRegisterVerifyCreateData;
  }

  /**
   * No description
   * @tags Auth - Refresh
   * @name UserRefreshCreate
   * @request POST:/user/refresh/
   * @secure
   */
  export namespace UserRefreshCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = TokenRefresh;
    export type RequestHeaders = {};
    export type ResponseBody = UserRefreshCreateData;
  }
}
