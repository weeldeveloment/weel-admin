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

export interface SupportThread {
  /** Employee id */
  employee_id: number;
  /**
   * Full name
   * @minLength 1
   */
  full_name: string;
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
  /** Company id */
  company_id: number;
  /**
   * Company name
   * @minLength 1
   */
  company_name?: string | null;
  /** Message count */
  message_count: number;
  /** Unread count */
  unread_count: number;
  /**
   * Last message
   * @minLength 1
   */
  last_message?: string | null;
  /**
   * Last message at
   * @format date-time
   */
  last_message_at?: string | null;
}

export interface SupportMessage {
  /** Id */
  id: number;
  /**
   * Text
   * @minLength 1
   */
  text: string;
  /** Is staff */
  is_staff: boolean;
  /**
   * Created at
   * @format date-time
   */
  created_at: string;
}

export interface SupportMessageCreate {
  /**
   * Text
   * @minLength 1
   * @maxLength 4000
   */
  text: string;
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

export interface AviaBookingPassenger {
  /** Id */
  id?: number;
  /**
   * Passenger key
   * @minLength 1
   */
  passenger_key?: string;
  /**
   * First name
   * @minLength 1
   */
  first_name?: string;
  /**
   * Last name
   * @minLength 1
   */
  last_name?: string;
  /**
   * Middle name
   * @minLength 1
   */
  middle_name?: string | null;
  /**
   * Age group
   * @minLength 1
   */
  age_group?: string;
  /**
   * Gender
   * @minLength 1
   */
  gender?: string | null;
  /**
   * Birthdate
   * @format date
   */
  birthdate?: string | null;
  /**
   * Citizenship
   * @minLength 1
   */
  citizenship?: string | null;
  /**
   * Doc type
   * @minLength 1
   */
  doc_type?: string | null;
  /**
   * Doc number
   * @minLength 1
   */
  doc_number?: string | null;
  /**
   * Doc expire
   * @format date
   */
  doc_expire?: string | null;
  /**
   * Price
   * @format decimal
   */
  price?: string | null;
  /** Tickets */
  tickets?: object;
  /**
   * Itinerary receipt url
   * @minLength 1
   */
  itinerary_receipt_url?: string | null;
}

export interface AviaBooking {
  /** Id */
  id?: number;
  /**
   * Guid
   * @format uuid
   */
  guid?: string;
  /**
   * Provider booking id
   * @minLength 1
   */
  provider_booking_id?: string;
  /**
   * Booking number
   * @minLength 1
   */
  booking_number?: string | null;
  /**
   * Status
   * @minLength 1
   */
  status?: string;
  /**
   * Offer type
   * @minLength 1
   */
  offer_type?: string | null;
  /**
   * Flight type
   * @minLength 1
   */
  flight_type?: string | null;
  /**
   * Fare family type
   * @minLength 1
   */
  fare_family_type?: string | null;
  /** Is charter */
  is_charter?: boolean;
  /** Refund availability */
  refund_availability?: boolean;
  /**
   * Amount
   * @format decimal
   */
  amount?: string | null;
  /**
   * Prev amount
   * @format decimal
   */
  prev_amount?: string | null;
  /**
   * Currency
   * @minLength 1
   */
  currency?: string | null;
  /**
   * Payer name
   * @minLength 1
   */
  payer_name?: string | null;
  /**
   * Payer email
   * @minLength 1
   */
  payer_email?: string | null;
  /**
   * Payer tel
   * @minLength 1
   */
  payer_tel?: string | null;
  /** B2b trip id */
  b2b_trip_id?: number | null;
  /** B2b employee id */
  b2b_employee_id?: number | null;
  /**
   * Provider created at
   * @format date-time
   */
  provider_created_at?: string | null;
  /**
   * Expires at
   * @format date-time
   */
  expires_at?: string | null;
  /** Directions */
  directions?: object;
  /** Information for clients */
  information_for_clients?: object;
  /** Additional services */
  additional_services?: object | null;
  /** Fiscalization */
  fiscalization?: object | null;
  passengers?: AviaBookingPassenger[];
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

export interface Passenger {
  /**
   * First name
   * @minLength 1
   * @maxLength 120
   */
  first_name: string;
  /**
   * Last name
   * @minLength 1
   * @maxLength 120
   */
  last_name: string;
  /**
   * Middle name
   * @minLength 1
   * @maxLength 120
   */
  middle_name?: string | null;
  /** Age */
  age: "adt" | "chd" | "inf" | "ins";
  /**
   * Birthdate
   * @format date
   */
  birthdate: string;
  /** Gender */
  gender: "F" | "M";
  /**
   * Citizenship
   * @minLength 2
   * @maxLength 2
   */
  citizenship: string;
  /**
   * Tel
   * @minLength 1
   * @maxLength 32
   */
  tel: string;
  /**
   * Doc type
   * @minLength 1
   * @maxLength 8
   * @default "A"
   */
  doc_type?: string;
  /**
   * Doc number
   * @minLength 1
   * @maxLength 64
   */
  doc_number: string;
  /**
   * Doc expire
   * @format date
   */
  doc_expire: string;
}

export interface B2BCreateBooking {
  /**
   * Payer name
   * @minLength 1
   * @maxLength 255
   */
  payer_name: string;
  /**
   * Payer email
   * @format email
   * @minLength 1
   */
  payer_email: string;
  /**
   * Payer tel
   * @minLength 1
   * @pattern ^\+\d{9,15}$
   */
  payer_tel: string;
  /**
   * Order note
   * @maxLength 64
   */
  order_note?: string;
  passengers: Passenger[];
  additional_services?: string[];
  /** Trip id */
  trip_id?: number | null;
  /** Employee id */
  employee_id?: number | null;
}

export interface Direction {
  /**
   * Departure airport
   * @minLength 3
   * @maxLength 3
   */
  departure_airport: string;
  /**
   * Arrival airport
   * @minLength 3
   * @maxLength 3
   */
  arrival_airport: string;
  /**
   * Date
   * @format date
   */
  date: string;
}

export interface OfferSearch {
  directions: Direction[];
  /**
   * Service class
   * @default "E"
   */
  service_class?: "A" | "B" | "E";
  /**
   * Adults
   * @min 1
   * @max 9
   */
  adults: number;
  /**
   * Children
   * @min 0
   * @max 9
   * @default 0
   */
  children?: number;
  /**
   * Infants
   * @min 0
   * @max 9
   * @default 0
   */
  infants?: number;
  /**
   * Infants with seat
   * @min 0
   * @max 9
   * @default 0
   */
  infants_with_seat?: number;
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
  role?: "owner" | "performer" | "lider" | "employee";
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

export interface RoleAccess {
  modules: string[];
  permissions: string[];
}

export interface JoinRequest {
  /**
   * Slug
   * @minLength 1
   * @maxLength 50
   */
  slug: string;
  /**
   * Message
   * @maxLength 1000
   */
  message?: string;
  modules?: string[] | null;
}

export interface Profile {
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
  last_name?: string;
  /**
   * Username
   * @minLength 1
   * @maxLength 50
   */
  username: string;
}

export interface WorkspaceCreate {
  /**
   * Name
   * @minLength 1
   * @maxLength 200
   */
  name: string;
  /** Org id */
  org_id?: number | null;
  /**
   * Description
   * @maxLength 500
   */
  description?: string;
  /**
   * Icon
   * @maxLength 20
   */
  icon?: string | null;
  /**
   * Workspace name
   * @maxLength 200
   */
  workspace_name?: string;
  /**
   * Tax id
   * @maxLength 20
   */
  tax_id?: string;
}

export interface AttendanceEntry {
  /** Employee id */
  employee_id: number;
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
   * Department name
   * @minLength 1
   */
  department_name?: string | null;
  /**
   * Status
   * @minLength 1
   */
  status?: string | null;
  /**
   * Checked in at
   * @format date-time
   */
  checked_in_at?: string | null;
  /**
   * Reason
   * @minLength 1
   */
  reason?: string | null;
  /** Marked by id */
  marked_by_id?: number | null;
}

export interface AttendanceDay {
  /**
   * Date
   * @format date
   */
  date: string;
  /** Present */
  present: number;
  /** Absent */
  absent: number;
  /** Unmarked */
  unmarked: number;
  /**
   * My status
   * @minLength 1
   */
  my_status?: string | null;
  /**
   * My reason
   * @minLength 1
   */
  my_reason?: string | null;
  entries: AttendanceEntry[];
}

export interface AttendanceSelfAbsence {
  /**
   * Reason
   * @minLength 1
   * @maxLength 200
   */
  reason: string;
  /**
   * Date
   * @format date
   */
  date?: string;
}

export interface AttendanceCheckIn {
  /** Latitude */
  latitude?: number | null;
  /** Longitude */
  longitude?: number | null;
}

export interface AttendanceLocation {
  /** Is enabled */
  is_enabled: boolean;
  /** Latitude */
  latitude?: number | null;
  /** Longitude */
  longitude?: number | null;
  /** Radius meters */
  radius_meters: number;
  /**
   * Updated at
   * @format date-time
   */
  updated_at?: string | null;
}

export interface AttendanceLocationUpdate {
  /** Is enabled */
  is_enabled: boolean;
  /** Latitude */
  latitude?: number | null;
  /** Longitude */
  longitude?: number | null;
  /**
   * Radius meters
   * @min 10
   * @max 5000
   */
  radius_meters?: number;
}

export interface AttendanceMark {
  /** Status */
  status: "present" | "absent" | "late" | "remote";
  /**
   * Reason
   * @maxLength 200
   */
  reason?: string | null;
  /**
   * Date
   * @format date
   */
  date?: string;
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
  /** Text */
  text: string;
  /** Reply to id */
  reply_to_id?: number | null;
  /**
   * Created at
   * @format date-time
   */
  created_at: string;
};

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

export interface CrmCustomer {
  /** Id */
  id: number;
  /**
   * Full name
   * @minLength 1
   */
  full_name: string;
  /**
   * Phone
   * @minLength 1
   */
  phone: string;
  /**
   * Company name
   * @minLength 1
   */
  company_name?: string | null;
  /**
   * Position
   * @minLength 1
   */
  position?: string | null;
  /** Deal count */
  deal_count: number;
  /**
   * Total amount
   * @format decimal
   */
  total_amount: string;
  /**
   * Last activity at
   * @format date-time
   */
  last_activity_at?: string | null;
  /** Is active */
  is_active: boolean;
}

export interface CrmCustomerList {
  results: CrmCustomer[];
}

export interface CrmMonthlyAmount {
  /**
   * Month
   * @minLength 1
   */
  month: string;
  /**
   * Amount
   * @format decimal
   */
  amount: string;
}

export interface CrmDeal {
  /** Id */
  id: number;
  /**
   * Amount
   * @format decimal
   */
  amount: string;
  /** Stage */
  stage:
    | "new"
    | "interested"
    | "proposal"
    | "negotiation"
    | "contract"
    | "won"
    | "lost";
  /** Status */
  status: "new" | "in_progress" | "completed";
  /**
   * Created at
   * @format date-time
   */
  created_at: string;
  /**
   * Completed at
   * @format date-time
   */
  completed_at?: string | null;
}

export interface CrmCustomerDetail {
  /** Id */
  id: number;
  /**
   * Full name
   * @minLength 1
   */
  full_name: string;
  /**
   * Phone
   * @minLength 1
   */
  phone: string;
  /**
   * Company name
   * @minLength 1
   */
  company_name?: string | null;
  /**
   * Position
   * @minLength 1
   */
  position?: string | null;
  /** Deal count */
  deal_count: number;
  /**
   * Total amount
   * @format decimal
   */
  total_amount: string;
  /**
   * Last activity at
   * @format date-time
   */
  last_activity_at?: string | null;
  /** Is active */
  is_active: boolean;
  /**
   * Email
   * @minLength 1
   */
  email?: string | null;
  /**
   * Address
   * @minLength 1
   */
  address?: string | null;
  /**
   * Top manager name
   * @minLength 1
   */
  top_manager_name?: string | null;
  monthly_amounts: CrmMonthlyAmount[];
  deals: CrmDeal[];
}

export interface Customer {
  /** Id */
  id: number;
  /**
   * Full name
   * @minLength 1
   */
  full_name: string;
  /**
   * Phone
   * @minLength 1
   */
  phone: string;
  /**
   * Company name
   * @minLength 1
   */
  company_name?: string | null;
  /**
   * Position
   * @minLength 1
   */
  position?: string | null;
  /** Deal count */
  deal_count: number;
  /**
   * Created at
   * @format date-time
   */
  created_at: string;
}

export interface CustomerList {
  results: Customer[];
}

export interface EmployeeOfMonth {
  /** Employee id */
  employee_id: number;
  /**
   * Full name
   * @minLength 1
   */
  full_name: string;
  /**
   * Photo
   * @minLength 1
   */
  photo?: string | null;
  /** Year */
  year: number;
  /** Month */
  month: number;
  /**
   * Selected at
   * @format date-time
   */
  selected_at: string;
}

export interface EmployeeOfMonthSelect {
  /** Employee id */
  employee_id: number;
}

export interface EmployeeMonthlyStat {
  /** Employee id */
  employee_id: number;
  /**
   * Full name
   * @minLength 1
   */
  full_name: string;
  /**
   * Photo
   * @minLength 1
   */
  photo?: string | null;
  /**
   * Position
   * @minLength 1
   */
  position?: string | null;
  /**
   * Department name
   * @minLength 1
   */
  department_name?: string | null;
  /** Deals count */
  deals_count: number;
  /** Completed count */
  completed_count: number;
  /** Due count */
  due_count: number;
  /** On time count */
  on_time_count: number;
  /** On time rate */
  on_time_rate?: number | null;
  /** Present days */
  present_days: number;
  /** Absent days */
  absent_days: number;
  /** Unexcused days */
  unexcused_days: number;
  /** Attendance rate */
  attendance_rate?: number | null;
}

export interface EmployeeAccess {
  /** Role */
  role?: "owner" | "admin" | "manager" | "employee" | "guest";
  modules?: string[] | null;
  permissions?: string[] | null;
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

export interface WorkspaceFile {
  /** Id */
  id: number;
  /**
   * Name
   * @minLength 1
   */
  name: string;
  /** Size */
  size: number;
  /** Author id */
  author_id: number;
  /**
   * Created at
   * @format date-time
   */
  created_at: string;
  /**
   * Url
   * @minLength 1
   */
  url: string;
}

export interface WorkspaceFileList {
  results: WorkspaceFile[];
}

export interface WorkspaceFilePatch {
  /**
   * Name
   * @minLength 1
   * @maxLength 300
   */
  name?: string;
  /** Folder id */
  folder_id?: number | null;
}

export interface WorkspaceFolder {
  /** Id */
  id: number;
  /**
   * Name
   * @minLength 1
   */
  name: string;
  /** Author id */
  author_id: number;
  /** File count */
  file_count: number;
  /** Size bytes */
  size_bytes: number;
  /**
   * Created at
   * @format date-time
   */
  created_at: string;
}

export interface WorkspaceFolderList {
  results: WorkspaceFolder[];
}

export interface WorkspaceFolderWrite {
  /**
   * Name
   * @minLength 1
   * @maxLength 120
   */
  name: string;
}

export interface InviteCreate {
  /** Role */
  role: "owner" | "admin" | "manager" | "employee" | "guest";
  modules?: string[] | null;
  permissions?: string[] | null;
  /**
   * Days
   * @min 1
   * @max 30
   */
  days?: number;
  /** Thread id */
  thread_id?: number | null;
}

export interface JoinDecision {
  /** Role */
  role?: "owner" | "admin" | "manager" | "employee" | "guest";
  modules?: string[] | null;
  /**
   * Reason
   * @maxLength 1000
   */
  reason?: string;
}

export interface Lead {
  /** Id */
  id: number;
  /**
   * Company name
   * @minLength 1
   */
  company_name: string;
  /**
   * Contact full name
   * @minLength 1
   */
  contact_full_name?: string | null;
  /**
   * Contact phone
   * @minLength 1
   */
  contact_phone?: string | null;
  /**
   * Contact position
   * @minLength 1
   */
  contact_position?: string | null;
  /**
   * Contact email
   * @minLength 1
   */
  contact_email?: string | null;
  /**
   * Contact address
   * @minLength 1
   */
  contact_address?: string | null;
  /**
   * Product name
   * @minLength 1
   */
  product_name: string;
  /**
   * Quantity
   * @format decimal
   */
  quantity: string;
  /**
   * Amount
   * @format decimal
   */
  amount: string;
  /**
   * Status
   * @minLength 1
   */
  status: string;
  /** Stage */
  stage:
    | "new"
    | "interested"
    | "proposal"
    | "negotiation"
    | "contract"
    | "won"
    | "lost";
  /** Source */
  source: "website" | "call" | "referral" | "exhibition" | "manual";
  /** Author id */
  author_id: number;
  /** Claimed by id */
  claimed_by_id?: number | null;
  /**
   * Claimed at
   * @format date-time
   */
  claimed_at?: string | null;
  /**
   * Completed at
   * @format date-time
   */
  completed_at?: string | null;
  /** Lost reason */
  lost_reason?:
    | "price"
    | "competitor"
    | "no_budget"
    | "no_response"
    | "not_needed"
    | "postponed"
    | "other"
    | null;
  /**
   * Lost note
   * @minLength 1
   */
  lost_note?: string | null;
  /** Customer id */
  customer_id?: number | null;
  /**
   * Created at
   * @format date-time
   */
  created_at: string;
  /** Can claim */
  can_claim: boolean;
  /** Can complete */
  can_complete: boolean;
  /** Can view details */
  can_view_details: boolean;
  /** Can work */
  can_work?: boolean;
  /** Can change stage */
  can_change_stage?: boolean;
  /** Can assign */
  can_assign?: boolean;
  /** Can delete */
  can_delete?: boolean;
  /** Item count */
  item_count?: number;
  /** Task count */
  task_count?: number;
}

export interface LeadList {
  results: Lead[];
}

export interface LeadItemWrite {
  /**
   * Name
   * @minLength 1
   * @maxLength 300
   */
  name: string;
  /**
   * Unit
   * @maxLength 100
   */
  unit?: string;
  /**
   * Amount
   * @format decimal
   */
  amount?: string;
}

export interface LeadWrite {
  /** Customer id */
  customer_id?: number | null;
  /**
   * Company name
   * @maxLength 300
   */
  company_name?: string;
  /**
   * Contact full name
   * @minLength 1
   * @maxLength 300
   */
  contact_full_name: string;
  /**
   * Contact phone
   * @minLength 1
   * @maxLength 20
   */
  contact_phone: string;
  /**
   * Product name
   * @maxLength 300
   */
  product_name?: string;
  /**
   * Quantity
   * @format decimal
   */
  quantity?: string;
  /**
   * Amount
   * @format decimal
   */
  amount?: string;
  /**
   * Note
   * @maxLength 2000
   */
  note?: string | null;
  /**
   * Assign to me
   * @default true
   */
  assign_to_me?: boolean;
  /**
   * Contact position
   * @maxLength 200
   */
  contact_position?: string | null;
  /**
   * Contact email
   * @format email
   * @maxLength 254
   */
  contact_email?: string | null;
  /** Contact address */
  contact_address?: string | null;
  /** Source */
  source?: "website" | "call" | "referral" | "exhibition" | "manual";
  items?: LeadItemWrite[];
}

export interface LeadItem {
  /** Id */
  id: number;
  /**
   * Name
   * @minLength 1
   */
  name: string;
  /** Unit */
  unit: string;
  /**
   * Amount
   * @format decimal
   */
  amount: string;
  /** Position */
  position: number;
}

export interface LeadActivity {
  /** Id */
  id: number;
  /** Kind */
  kind: "created" | "claimed" | "assigned" | "stage" | "comment" | "completed";
  /** Text */
  text: string;
  /** Author id */
  author_id?: number | null;
  /**
   * Author name
   * @minLength 1
   */
  author_name?: string | null;
  /**
   * Author photo
   * @minLength 1
   */
  author_photo?: string | null;
  /**
   * Created at
   * @format date-time
   */
  created_at: string;
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

export interface LeadDetail {
  /** Id */
  id: number;
  /**
   * Company name
   * @minLength 1
   */
  company_name: string;
  /**
   * Contact full name
   * @minLength 1
   */
  contact_full_name?: string | null;
  /**
   * Contact phone
   * @minLength 1
   */
  contact_phone?: string | null;
  /**
   * Contact position
   * @minLength 1
   */
  contact_position?: string | null;
  /**
   * Contact email
   * @minLength 1
   */
  contact_email?: string | null;
  /**
   * Contact address
   * @minLength 1
   */
  contact_address?: string | null;
  /**
   * Product name
   * @minLength 1
   */
  product_name: string;
  /**
   * Quantity
   * @format decimal
   */
  quantity: string;
  /**
   * Amount
   * @format decimal
   */
  amount: string;
  /**
   * Status
   * @minLength 1
   */
  status: string;
  /** Stage */
  stage:
    | "new"
    | "interested"
    | "proposal"
    | "negotiation"
    | "contract"
    | "won"
    | "lost";
  /** Source */
  source: "website" | "call" | "referral" | "exhibition" | "manual";
  /** Author id */
  author_id: number;
  /** Claimed by id */
  claimed_by_id?: number | null;
  /**
   * Claimed at
   * @format date-time
   */
  claimed_at?: string | null;
  /**
   * Completed at
   * @format date-time
   */
  completed_at?: string | null;
  /** Lost reason */
  lost_reason?:
    | "price"
    | "competitor"
    | "no_budget"
    | "no_response"
    | "not_needed"
    | "postponed"
    | "other"
    | null;
  /**
   * Lost note
   * @minLength 1
   */
  lost_note?: string | null;
  /** Customer id */
  customer_id?: number | null;
  /**
   * Created at
   * @format date-time
   */
  created_at: string;
  /** Can claim */
  can_claim: boolean;
  /** Can complete */
  can_complete: boolean;
  /** Can view details */
  can_view_details: boolean;
  /** Can work */
  can_work?: boolean;
  /** Can change stage */
  can_change_stage?: boolean;
  /** Can assign */
  can_assign?: boolean;
  /** Can delete */
  can_delete?: boolean;
  /** Item count */
  item_count?: number;
  /** Task count */
  task_count?: number;
  items: LeadItem[];
  activity: LeadActivity[];
  tasks: Task[];
}

export interface LeadAssignWrite {
  /** Employee id */
  employee_id: number;
}

export interface LeadCommentWrite {
  /**
   * Text
   * @minLength 1
   * @maxLength 2000
   */
  text: string;
}

export interface LeadStageWrite {
  /** Stage */
  stage:
    | "new"
    | "interested"
    | "proposal"
    | "negotiation"
    | "contract"
    | "won"
    | "lost";
  /** Lost reason */
  lost_reason?:
    | "price"
    | "competitor"
    | "no_budget"
    | "no_response"
    | "not_needed"
    | "postponed"
    | "other"
    | null;
  /**
   * Note
   * @maxLength 2000
   */
  note?: string | null;
}

export interface TaskWrite {
  /**
   * Title
   * @minLength 1
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
  status?: "todo" | "in_progress" | "done";
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

export interface MailAccount {
  /** Id */
  id: number;
  /**
   * Address
   * @minLength 1
   */
  address: string;
  /**
   * Display name
   * @minLength 1
   */
  display_name?: string | null;
  /**
   * Provider
   * @minLength 1
   */
  provider: string;
  /**
   * Auth type
   * @minLength 1
   */
  auth_type: string;
  /**
   * Imap host
   * @minLength 1
   */
  imap_host: string;
  /**
   * Smtp host
   * @minLength 1
   */
  smtp_host: string;
  /** Is active */
  is_active: boolean;
  /**
   * Last sync at
   * @format date-time
   */
  last_sync_at?: string | null;
  /**
   * Sync error
   * @minLength 1
   */
  sync_error?: string | null;
  /** Unread */
  unread?: number;
}

export interface MailAccountConnect {
  /**
   * Address
   * @format email
   * @minLength 1
   */
  address: string;
  /**
   * Password
   * @minLength 1
   */
  password: string;
  /**
   * Display name
   * @maxLength 200
   */
  display_name?: string;
  /**
   * Imap host
   * @maxLength 253
   */
  imap_host?: string;
  /**
   * Imap port
   * @min 1
   * @max 65535
   */
  imap_port?: number;
  /**
   * Smtp host
   * @maxLength 253
   */
  smtp_host?: string;
  /**
   * Smtp port
   * @min 1
   * @max 65535
   */
  smtp_port?: number;
}

export interface MailAccountPatch {
  /**
   * Display name
   * @maxLength 200
   */
  display_name?: string;
}

export interface MailSend {
  /** Account id */
  account_id?: number | null;
  to: string[];
  /** @default [] */
  cc?: string[];
  /** @default [] */
  bcc?: string[];
  /**
   * Subject
   * @maxLength 500
   * @default ""
   */
  subject?: string;
  /**
   * Body text
   * @default ""
   */
  body_text?: string;
  /**
   * Body html
   * @default ""
   */
  body_html?: string;
  /** Reply to message id */
  reply_to_message_id?: number | null;
  /** @default [] */
  attachment_ids?: number[];
}

export interface MailRecipient {
  /**
   * Kind
   * @minLength 1
   */
  kind: string;
  /**
   * Address
   * @minLength 1
   */
  address: string;
  /** Name */
  name: string;
}

export interface MailAttachment {
  /** Id */
  id: number;
  /**
   * Filename
   * @minLength 1
   */
  filename: string;
  /**
   * Content type
   * @minLength 1
   */
  content_type: string;
  /** Size bytes */
  size_bytes: number;
  /**
   * Download url
   * @minLength 1
   */
  download_url?: string;
}

export interface MailMessage {
  /** Id */
  id: number;
  /** Thread id */
  thread_id: number;
  /**
   * Direction
   * @minLength 1
   */
  direction: string;
  /**
   * Status
   * @minLength 1
   */
  status: string;
  /**
   * From address
   * @minLength 1
   */
  from_address: string;
  /** From name */
  from_name: string;
  /** Subject */
  subject: string;
  /** Body text */
  body_text: string;
  /** Body html */
  body_html: string;
  /** Has attachments */
  has_attachments: boolean;
  /** Is read */
  is_read: boolean;
  /**
   * Error
   * @minLength 1
   */
  error?: string | null;
  /**
   * Sent at
   * @format date-time
   */
  sent_at?: string | null;
  recipients?: MailRecipient[];
  attachments?: MailAttachment[];
}

export interface MailProviderHint {
  /**
   * Provider
   * @minLength 1
   */
  provider: string;
  /**
   * Label
   * @minLength 1
   */
  label: string;
  /**
   * Imap host
   * @minLength 1
   */
  imap_host: string;
  /** Imap port */
  imap_port: number;
  /**
   * Smtp host
   * @minLength 1
   */
  smtp_host: string;
  /** Smtp port */
  smtp_port: number;
  /** Requires app password */
  requires_app_password: boolean;
  /**
   * Help url
   * @minLength 1
   */
  help_url?: string | null;
  /** Supports oauth */
  supports_oauth: boolean;
}

export interface MailThread {
  /** Id */
  id: number;
  /** Account id */
  account_id: number;
  /**
   * Subject
   * @minLength 1
   */
  subject: string;
  /**
   * Snippet
   * @minLength 1
   */
  snippet: string;
  /**
   * Folder
   * @minLength 1
   */
  folder: string;
  /**
   * Participants
   * @minLength 1
   */
  participants: string;
  /** Message count */
  message_count: number;
  /** Unread count */
  unread_count: number;
  /** Is starred */
  is_starred: boolean;
  /**
   * Last message at
   * @format date-time
   */
  last_message_at?: string | null;
}

export interface MailThreadFlags {
  /** Is starred */
  is_starred?: boolean;
  /** Folder */
  folder?: "inbox" | "archive" | "trash";
}

export interface Me {
  /** Id */
  id: number;
  /**
   * Username
   * @minLength 1
   */
  username?: string | null;
  /** Company id */
  company_id: number;
  /**
   * Company name
   * @minLength 1
   */
  company_name?: string | null;
  /** Org id */
  org_id?: number | null;
  /**
   * Org name
   * @minLength 1
   */
  org_name?: string | null;
  /**
   * Org join code
   * @minLength 1
   */
  org_join_code?: string | null;
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
  /** Completed this month */
  completed_this_month: number;
  /** Permissions */
  permissions: Record<string, boolean>;
  /**
   * Is guest
   * @default false
   */
  is_guest?: boolean;
  modules?: string[] | null;
  /**
   * Guest until
   * @format date-time
   */
  guest_until?: string | null;
}

export interface OwnProfile {
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
  last_name?: string;
  /**
   * Email
   * @format email
   */
  email?: string;
}

export interface Username {
  /**
   * Username
   * @maxLength 50
   */
  username: string;
}

export interface B2BNotification {
  /** Id */
  id: number;
  /**
   * Kind
   * @minLength 1
   */
  kind: string;
  /**
   * Title
   * @minLength 1
   */
  title: string;
  /** Body */
  body: string;
  /** Payload */
  payload: object;
  /** Is read */
  is_read: boolean;
  /**
   * Created at
   * @format date-time
   */
  created_at: string;
}

export interface NotificationRead {
  /** @default [] */
  ids?: number[];
}

export interface OrgPerson {
  /** Id */
  id: number;
  /**
   * Full name
   * @minLength 1
   */
  full_name: string;
  /**
   * Username
   * @minLength 1
   */
  username?: string | null;
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
   * Photo
   * @minLength 1
   */
  photo?: string | null;
  /**
   * Role
   * @minLength 1
   */
  role?: string;
  /** Company id */
  company_id: number;
  /**
   * Company name
   * @minLength 1
   */
  company_name?: string | null;
}

export interface SecondmentRequest {
  /** Id */
  id: number;
  /** Company id */
  company_id: number;
  /**
   * Company name
   * @minLength 1
   */
  company_name?: string | null;
  /** From employee id */
  from_employee_id: number;
  /**
   * From full name
   * @minLength 1
   */
  from_full_name?: string | null;
  /**
   * From position
   * @minLength 1
   */
  from_position?: string | null;
  /**
   * From photo
   * @minLength 1
   */
  from_photo?: string | null;
  /** To employee id */
  to_employee_id: number;
  /**
   * To full name
   * @minLength 1
   */
  to_full_name?: string | null;
  /**
   * To position
   * @minLength 1
   */
  to_position?: string | null;
  /**
   * To photo
   * @minLength 1
   */
  to_photo?: string | null;
  /**
   * To company name
   * @minLength 1
   */
  to_company_name?: string | null;
  /** Message */
  message?: string;
  /**
   * Role
   * @minLength 1
   */
  role: string;
  modules?: string[];
  /**
   * Starts at
   * @format date-time
   */
  starts_at?: string | null;
  /**
   * Ends at
   * @format date-time
   */
  ends_at?: string | null;
  /**
   * Status
   * @minLength 1
   */
  status: string;
  /**
   * Decline reason
   * @minLength 1
   */
  decline_reason?: string | null;
  /**
   * Responded at
   * @format date-time
   */
  responded_at?: string | null;
  /**
   * Created at
   * @format date-time
   */
  created_at?: string;
}

export interface SecondmentRequestCreate {
  /** To employee id */
  to_employee_id: number;
  /**
   * Message
   * @maxLength 2000
   */
  message?: string;
  /** Role */
  role: "lider" | "manager" | "employee" | "ghost";
  modules?: ("chat" | "savdo" | "vazifa" | "taqvim" | "fayllar")[];
  /**
   * Starts at
   * @format date-time
   */
  starts_at?: string | null;
  /**
   * Ends at
   * @format date-time
   */
  ends_at?: string | null;
}

export interface SecondmentDecline {
  /**
   * Reason
   * @minLength 1
   * @maxLength 1000
   */
  reason: string;
}

export interface StorageKindUsage {
  /** Bytes */
  bytes: number;
  /** Files */
  files: number;
}

export interface StorageUsage {
  /** Used bytes */
  used_bytes: number;
  /** Quota bytes */
  quota_bytes: number;
  /** Available bytes */
  available_bytes: number;
  /** Used percent */
  used_percent: number;
  /** Max upload bytes */
  max_upload_bytes: number;
  /** By kind */
  by_kind: Record<string, StorageKindUsage>;
}

export interface TaskList {
  results: Task[];
  /** Counters */
  counters: Record<string, number>;
}

export interface TaskPatch {
  /**
   * Title
   * @minLength 1
   */
  title?: string;
  /** Description */
  description?: string;
  /** Status */
  status?: "todo" | "in_progress" | "done";
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
  status: "todo" | "in_progress" | "done";
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
   * Username
   * @minLength 1
   */
  username?: string | null;
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
  /**
   * Is guest
   * @default false
   */
  is_guest?: boolean;
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
  recipient_type: "client" | "partner" | "b2b";
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

export interface Hotel {
  /** Id */
  id?: number;
  /** Hotel type id */
  hotel_type_id?: number | null;
  /** City id */
  city_id?: number | null;
  /** Star id */
  star_id?: number | null;
  /**
   * Currency
   * @minLength 1
   */
  currency?: string | null;
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
   * Postal code
   * @minLength 1
   */
  postal_code?: string | null;
  /** Names */
  names?: object;
  /** Address */
  address?: object;
  /** Description */
  description?: object;
  /** Check in */
  check_in?: object;
  /** Check out */
  check_out?: object;
  /** Guest age rules */
  guest_age_rules?: object;
  /** Facilities */
  facilities?: object;
  /** Photos */
  photos?: object;
  /** Nearby places */
  nearby_places?: object;
  /** Services in room */
  services_in_room?: object;
  /**
   * Synced at
   * @format date-time
   */
  synced_at?: string;
}

export interface HotelBookingRoom {
  /** Id */
  id?: number;
  /**
   * Option ref id
   * @minLength 1
   */
  option_ref_id?: string | null;
  /** Room type id */
  room_type_id?: number | null;
  /**
   * Room type name
   * @minLength 1
   */
  room_type_name?: string | null;
  /** Rate plan id */
  rate_plan_id?: number | null;
  /**
   * Meal plan
   * @minLength 1
   */
  meal_plan?: string | null;
  /** Included meal options */
  included_meal_options?: object;
  /** Extra bed added */
  extra_bed_added?: boolean;
  /** Cancellation policy */
  cancellation_policy?: object | null;
  /**
   * Price
   * @format decimal
   */
  price?: string | null;
  /** Price breakdown */
  price_breakdown?: object | null;
  /** Guests */
  guests?: object;
  /** B2b employee id */
  b2b_employee_id?: number | null;
}

export interface HotelBooking {
  /** Id */
  id?: number;
  /**
   * Guid
   * @format uuid
   */
  guid?: string;
  /**
   * External id
   * @minLength 1
   */
  external_id?: string;
  /**
   * Provider booking id
   * @minLength 1
   */
  provider_booking_id?: string | null;
  /** Hotel id */
  hotel_id?: number | null;
  /**
   * Status
   * @minLength 1
   */
  status?: string;
  /**
   * Check in
   * @format date-time
   */
  check_in?: string | null;
  /**
   * Check out
   * @format date-time
   */
  check_out?: string | null;
  /** Is resident */
  is_resident?: boolean;
  /**
   * Price
   * @format decimal
   */
  price?: string | null;
  /**
   * Currency
   * @minLength 1
   */
  currency?: string | null;
  /**
   * Comment
   * @minLength 1
   */
  comment?: string | null;
  /**
   * Hotel confirmation number
   * @minLength 1
   */
  hotel_confirmation_number?: string | null;
  /** Additional information */
  additional_information?: object | null;
  /** B2b trip id */
  b2b_trip_id?: number | null;
  /**
   * Provider created at
   * @format date-time
   */
  provider_created_at?: string | null;
  rooms?: HotelBookingRoom[];
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

export interface Guest {
  /** Person title */
  person_title: "CHILD" | "MR" | "MRS";
  /**
   * First name
   * @minLength 1
   * @maxLength 120
   */
  first_name: string;
  /**
   * Last name
   * @minLength 1
   * @maxLength 120
   */
  last_name: string;
  /**
   * Nationality
   * @minLength 2
   * @maxLength 2
   */
  nationality: string;
  /**
   * Age
   * @min 0
   * @max 17
   */
  age?: number | null;
}

export interface BookingRoom {
  /**
   * Option ref id
   * @minLength 1
   * @maxLength 512
   */
  option_ref_id: string;
  /**
   * Price
   * @format decimal
   */
  price: string;
  /**
   * Currency
   * @minLength 1
   * @maxLength 8
   */
  currency?: string;
  guests: Guest[];
  /** Employee id */
  employee_id?: number | null;
}

export interface DeltaPrice {
  /**
   * Amount
   * @format decimal
   */
  amount?: string;
  /**
   * Percent
   * @format decimal
   */
  percent?: string;
  /**
   * Matches
   * @default "ALL"
   */
  matches?: "ALL" | "ANY";
}

export interface CreateHotelBooking {
  /**
   * Quote id
   * @minLength 1
   * @maxLength 64
   */
  quote_id: string;
  /** Hotel id */
  hotel_id: number;
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
  booking_rooms: BookingRoom[];
  /**
   * Comment
   * @maxLength 1000
   */
  comment?: string;
  delta_price?: DeltaPrice;
  /**
   * Nationality
   * @minLength 2
   * @maxLength 2
   */
  nationality?: string;
  /**
   * Residence
   * @minLength 2
   * @maxLength 2
   */
  residence?: string;
  /**
   * Is resident
   * @default false
   */
  is_resident?: boolean;
  /** Trip id */
  trip_id?: number | null;
}

export interface City {
  /** Id */
  id?: number;
  /** Region id */
  region_id?: number | null;
  /** Names */
  names?: object;
  /** Hotel count */
  hotel_count?: number;
}

export interface TopHotel {
  /** Hotel id */
  hotel_id?: number;
  /** Names */
  names?: object;
  /**
   * Name en
   * @minLength 1
   */
  name_en?: string | null;
  /** Photos */
  photos?: object;
  /** Star id */
  star_id?: number | null;
  /** City id */
  city_id?: number | null;
  /** Bookings count */
  bookings_count?: number;
  /**
   * Spend
   * @format decimal
   */
  spend?: string | null;
}

export interface MonthlySummary {
  /** Year */
  year?: number;
  /** Month */
  month?: number;
  /**
   * Month spend
   * @format decimal
   */
  month_spend?: string;
  top_hotels?: TopHotel[];
}

export interface Quote {
  /**
   * @maxItems 20
   * @minItems 1
   */
  option_ref_ids: string[];
}

export interface RecommendedHotel {
  /** Id */
  id?: number;
  /** City id */
  city_id?: number | null;
  /** Star id */
  star_id?: number | null;
  /** Names */
  names?: object;
  /** Photos */
  photos?: object;
  /** Address */
  address?: object;
}

export interface Occupancy {
  /**
   * Adults
   * @min 1
   * @max 10
   */
  adults: number;
  /** @maxItems 10 */
  children_ages?: number[];
}

export interface HotelSearch {
  /** City id */
  city_id?: number | null;
  /** @maxItems 200 */
  hotel_ids?: number[];
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
  occupancies: Occupancy[];
  /**
   * Currency
   * @minLength 1
   * @maxLength 8
   * @default "uzs"
   */
  currency?: string;
  /**
   * Nationality
   * @minLength 2
   * @maxLength 2
   */
  nationality?: string;
  /**
   * Residence
   * @minLength 2
   * @maxLength 2
   */
  residence?: string;
  /**
   * Price min
   * @format decimal
   */
  price_min?: string;
  /**
   * Price max
   * @format decimal
   */
  price_max?: string;
  stars?: number[];
  facilities?: number[];
  equipments?: number[];
  /** Cancellation type */
  cancellation_type?: "rf" | "nrf" | "all";
  meal_plans?: ("BB" | "FB" | "HB" | "RO")[];
  hotel_types?: number[];
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

export type AdminAuthB2BCompaniesCreateData = B2BCompany;

export type AdminAuthB2BCompaniesReadData = B2BCompany;

export type AdminAuthB2BCompaniesUsersListData = B2BUser[];

export type AdminAuthB2BCompaniesUsersCreateData = B2BUser;

export type AdminAuthB2BSupportListData = SupportThread[];

export type AdminAuthB2BSupportReadData = SupportMessage[];

export type AdminAuthB2BSupportCreateData = SupportMessage;

export type AdminAuthLoginCreateData = any;

export type AdminAuthMeListData = any;

export type AdminAuthRegisterCreateData = AdminUser;

export type AdminAuthTokenRefreshCreateData = any;

export type AdminAuthUsersClientsListData = any;

export type AdminAuthUsersPartnersListData = any;

export type AviaBalanceListData = any;

export type AviaBookingsListData = AviaBooking[];

export type AviaBookingsCreateData = AviaBooking;

export type AviaBookingsReadData = AviaBooking;

export type AviaBookingsCancelCreateData = any;

export type AviaBookingsCancelDeleteData = AviaBooking;

export type AviaBookingsCheckPriceListData = any;

export type AviaBookingsEventsListData = any;

export type AviaBookingsFiscalizationListData = any;

export type AviaBookingsPaymentPermissionListData = any;

export type AviaBookingsPaymentCreateData = AviaBooking;

export type AviaBookingsReceiptListData = any;

export type AviaBookingsRefreshCreateData = any;

export type AviaBookingsRefundAmountListData = any;

export type AviaBookingsRulesListData = any;

export type AviaCallbackStatusCreateData = any;

export type AviaOffersSearchCreateData = OfferSearch;

export type AviaOffersReadData = any;

export type AviaOffersFareFamilyListData = any;

export type AviaOffersRulesListData = any;

export type AviaScheduleListData = any;

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

export type B2BWorkspaceAccessCatalogueListData = any;

export type B2BWorkspaceAccessRolesListData = any;

export type B2BWorkspaceAccessRolesUpdateData = RoleAccess;

export type B2BWorkspaceAccountDeviceTokenCreateData = any;

export type B2BWorkspaceAccountInvitesReadData = any;

export type B2BWorkspaceAccountInvitesCreateData = any;

export type B2BWorkspaceAccountJoinCodeListData = any;

export type B2BWorkspaceAccountJoinRequestsListData = any;

export type B2BWorkspaceAccountJoinRequestsCreateData = JoinRequest;

export type B2BWorkspaceAccountMeListData = any;

export type B2BWorkspaceAccountMeUpdateData = Profile;

export type B2BWorkspaceAccountMeDeleteData = any;

export type B2BWorkspaceAccountMeDeletionListData = any;

export type B2BWorkspaceAccountOrgsWorkspacesListData = any;

export type B2BWorkspaceAccountUsernameCheckListData = any;

export type B2BWorkspaceAccountUsernameSuggestionListData = any;

export type B2BWorkspaceAccountWorkspacesListData = any;

export type B2BWorkspaceAccountWorkspacesCreateData = WorkspaceCreate;

export type B2BWorkspaceAccountWorkspacesSearchListData = any;

export type B2BWorkspaceAccountWorkspacesOpenCreateData = any;

export type B2BWorkspaceAppVersionListData = any;

export type B2BWorkspaceAttendanceListData = AttendanceDay;

export type B2BWorkspaceAttendanceAbsenceCreateData = AttendanceDay;

export type B2BWorkspaceAttendanceCheckInCreateData = AttendanceDay;

export type B2BWorkspaceAttendanceLocationListData = AttendanceLocation;

export type B2BWorkspaceAttendanceLocationUpdateData = AttendanceLocation;

export type B2BWorkspaceAttendanceCreateData = AttendanceDay;

export type B2BWorkspaceAuditListData = any;

export type B2BWorkspaceAuthLoginCreateData = any;

export type B2BWorkspaceAuthLoginVerifyCreateData = any;

export type B2BWorkspaceAuthLogoutCreateData = any;

export type B2BWorkspaceAuthTokenRefreshCreateData = any;

export type B2BWorkspaceChatsListData = ChatThread[];

export type B2BWorkspaceChatsCreateData = ChatThread;

export type B2BWorkspaceChatsFlagsCreateData = ChatThread;

export type B2BWorkspaceChatsMessagesListData = WorkspaceChatMessage[];

export type B2BWorkspaceChatsMessagesCreateData = WorkspaceChatMessage;

export type B2BWorkspaceChatsMessagesDeleteData = any;

export type B2BWorkspaceChatsReadCreateData = any;

export type B2BWorkspaceCrmCustomersListData = CrmCustomerList;

export type B2BWorkspaceCrmCustomersReadData = CrmCustomerDetail;

export type B2BWorkspaceCustomersListData = CustomerList;

export type B2BWorkspaceEmployeeOfMonthListData = EmployeeOfMonth;

export type B2BWorkspaceEmployeeOfMonthCreateData = EmployeeOfMonth;

export type B2BWorkspaceEmployeeOfMonthStatsListData = EmployeeMonthlyStat[];

export type B2BWorkspaceEmployeesAccessListData = any;

export type B2BWorkspaceEmployeesAccessUpdateData = EmployeeAccess;

export type B2BWorkspaceEventsListData = CalendarEvent[];

export type B2BWorkspaceEventsCreateData = CalendarEvent;

export type B2BWorkspaceEventsReadData = CalendarEvent;

export type B2BWorkspaceEventsPartialUpdateData = CalendarEvent;

export type B2BWorkspaceEventsDeleteData = any;

export type B2BWorkspaceFilesListData = WorkspaceFileList;

export type B2BWorkspaceFilesCreateData = WorkspaceFile;

export type B2BWorkspaceFilesPartialUpdateData = WorkspaceFile;

export type B2BWorkspaceFilesDeleteData = any;

export type B2BWorkspaceFoldersListData = WorkspaceFolderList;

export type B2BWorkspaceFoldersCreateData = WorkspaceFolder;

export type B2BWorkspaceFoldersDeleteData = any;

export type B2BWorkspaceInvitesListData = any;

export type B2BWorkspaceInvitesCreateData = InviteCreate;

export type B2BWorkspaceInvitesRevokeCreateData = any;

export type B2BWorkspaceJoinRequestsListData = any;

export type B2BWorkspaceJoinRequestsCreateData = JoinDecision;

export type B2BWorkspaceLeadsListData = LeadList;

export type B2BWorkspaceLeadsCreateData = Lead;

export type B2BWorkspaceLeadsReadData = LeadDetail;

export type B2BWorkspaceLeadsDeleteData = any;

export type B2BWorkspaceLeadsAssignCreateData = Lead;

export type B2BWorkspaceLeadsClaimCreateData = Lead;

export type B2BWorkspaceLeadsCommentsCreateData = LeadActivity;

export type B2BWorkspaceLeadsCompleteCreateData = Lead;

export type B2BWorkspaceLeadsItemsCreateData = LeadItem;

export type B2BWorkspaceLeadsItemsUpdateData = LeadItem[];

export type B2BWorkspaceLeadsItemsDeleteData = any;

export type B2BWorkspaceLeadsStageCreateData = Lead;

export type B2BWorkspaceLeadsTasksCreateData = Task;

export type B2BWorkspaceMailAccountsListData = MailAccount[];

export type B2BWorkspaceMailAccountsCreateData = MailAccount;

export type B2BWorkspaceMailAccountsPartialUpdateData = MailAccount;

export type B2BWorkspaceMailAccountsDeleteData = any;

export type B2BWorkspaceMailAccountsReconnectCreateData = MailAccount;

export type B2BWorkspaceMailAttachmentsCreateData = any;

export type B2BWorkspaceMailAttachmentsReadData = any;

export type B2BWorkspaceMailMessagesCreateData = MailMessage;

export type B2BWorkspaceMailOauthGoogleListData = any;

export type B2BWorkspaceMailOauthGoogleCallbackCreateData = MailAccount;

export type B2BWorkspaceMailProvidersListData = MailProviderHint;

export type B2BWorkspaceMailSyncCreateData = any;

export type B2BWorkspaceMailThreadsListData = MailThread[];

export type B2BWorkspaceMailThreadsFlagsCreateData = MailThread;

export type B2BWorkspaceMailThreadsMessagesListData = MailMessage[];

export type B2BWorkspaceMailThreadsReadCreateData = any;

export type B2BWorkspaceMeListData = Me;

export type B2BWorkspaceMeDeviceTokenCreateData = any;

export type B2BWorkspaceMeProfileUpdateData = Me;

export type B2BWorkspaceMeUsernameUpdateData = Me;

export type B2BWorkspaceNotificationsListData = B2BNotification[];

export type B2BWorkspaceNotificationsReadCreateData = any;

export type B2BWorkspaceOrgPeopleListData = OrgPerson[];

export type B2BWorkspaceRequestsListData = SecondmentRequest[];

export type B2BWorkspaceRequestsCreate1Data = SecondmentRequest;

export type B2BWorkspaceRequestsCreate2Data = SecondmentRequest;

export type B2BWorkspaceStorageListData = StorageUsage;

export type B2BWorkspaceSupportListData = SupportMessage[];

export type B2BWorkspaceSupportCreateData = SupportMessage;

export type B2BWorkspaceSwitchListData = any;

export type B2BWorkspaceSwitchCreateData = any;

export type B2BWorkspaceTasksListData = TaskList;

export type B2BWorkspaceTasksCreateData = Task;

export type B2BWorkspaceTasksActivityListData = any;

export type B2BWorkspaceTasksReadData = Task;

export type B2BWorkspaceTasksPartialUpdateData = Task;

export type B2BWorkspaceTasksDeleteData = any;

export type B2BWorkspaceTasksCommentsCreateData = Task;

export type B2BWorkspaceTasksStatusCreateData = Task;

export type B2BWorkspaceTasksSubtasksToggleCreateData = Task;

export type B2BWorkspaceTasksVoiceCreateData = Task;

export type B2BWorkspaceTasksVoiceDeleteData = Task;

export type B2BWorkspaceTeamListData = TeamMember[];

export type B2BWorkspaceTrashListData = any;

export type B2BWorkspaceTrashRestoreCreateData = any;

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

export type HotelsListData = Hotel[];

export type HotelsBalanceListData = any;

export type HotelsBookingsListData = HotelBooking[];

export type HotelsBookingsCreateData = HotelBooking;

export type HotelsBookingsReadData = HotelBooking;

export type HotelsBookingsCancelCreateData = any;

export type HotelsBookingsCancelDeleteData = HotelBooking;

export type HotelsBookingsConfirmCreateData = HotelBooking;

export type HotelsBookingsEventsListData = any;

export type HotelsBookingsRefreshCreateData = any;

export type HotelsBookingsRoomsListData = HotelBookingRoom[];

export type HotelsCitiesListData = City[];

export type HotelsMonthlySummaryListData = MonthlySummary;

export type HotelsQuoteCreateData = Quote;

export type HotelsRecommendationsListData = RecommendedHotel[];

export type HotelsReferenceReadData = any;

export type HotelsSearchCreateData = HotelSearch;

export type HotelsSyncStatusListData = any;

export type HotelsTopByBookingsListData = TopHotel[];

export type HotelsReadData = Hotel;

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

export type GetPersonalizedRecommendationsData = RecommendationItem[];

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
   * @description List/create B2B companies — admin view
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
   * @description List/create B2B companies — admin view
   * @tags api
   * @name AdminAuthB2BCompaniesCreate
   * @request POST:/admin-auth/b2b/companies/
   * @secure
   */
  export namespace AdminAuthB2BCompaniesCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = B2BCompany;
    export type RequestHeaders = {};
    export type ResponseBody = AdminAuthB2BCompaniesCreateData;
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
   * No description
   * @tags api
   * @name AdminAuthB2BCompaniesUsersCreate
   * @request POST:/admin-auth/b2b/companies/{company_id}/users/
   * @secure
   */
  export namespace AdminAuthB2BCompaniesUsersCreate {
    export type RequestParams = {
      companyId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = B2BUser;
    export type RequestHeaders = {};
    export type ResponseBody = AdminAuthB2BCompaniesUsersCreateData;
  }

  /**
   * @description One row per employee who has written in, newest first, with the count of their own lines nobody has answered yet. Across every company: this is WEEL's own desk, not a company's.
   * @tags api
   * @name AdminAuthB2BSupportList
   * @summary GET ``/api/admin-auth/b2b/support/`` — the inbox.
   * @request GET:/admin-auth/b2b/support/
   * @secure
   */
  export namespace AdminAuthB2BSupportList {
    export type RequestParams = {};
    export type RequestQuery = {
      /** Employee name, company name or phone. */
      search?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = AdminAuthB2BSupportListData;
  }

  /**
   * @description Reading marks the employee's lines answered, which is what clears them off the inbox counter. A reply is stored with ``is_staff`` set here rather than taken from the body, the same way the app cannot claim to be support.
   * @tags api
   * @name AdminAuthB2BSupportRead
   * @summary GET/POST ``/api/admin-auth/b2b/support/<employee_id>/`` — one conversation, and the reply into it.
   * @request GET:/admin-auth/b2b/support/{employee_id}/
   * @secure
   */
  export namespace AdminAuthB2BSupportRead {
    export type RequestParams = {
      employeeId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = AdminAuthB2BSupportReadData;
  }

  /**
   * @description Reading marks the employee's lines answered, which is what clears them off the inbox counter. A reply is stored with ``is_staff`` set here rather than taken from the body, the same way the app cannot claim to be support.
   * @tags api
   * @name AdminAuthB2BSupportCreate
   * @summary GET/POST ``/api/admin-auth/b2b/support/<employee_id>/`` — one conversation, and the reply into it.
   * @request POST:/admin-auth/b2b/support/{employee_id}/
   * @secure
   */
  export namespace AdminAuthB2BSupportCreate {
    export type RequestParams = {
      employeeId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = SupportMessageCreate;
    export type RequestHeaders = {};
    export type ResponseBody = AdminAuthB2BSupportCreateData;
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
}

export namespace Avia {
  /**
   * @description Staff-facing: an exhausted deposit stops every payment, so this needs to be visible before the first customer discovers it.
   * @tags api
   * @name AviaBalanceList
   * @summary GET /api/avia/balance/ — the deposit ticketing draws on.
   * @request GET:/avia/balance/
   * @secure
   */
  export namespace AviaBalanceList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = AviaBalanceListData;
  }

  /**
   * @description GET/POST /api/avia/bookings/ — this caller's orders, and new ones.
   * @tags api
   * @name AviaBookingsList
   * @request GET:/avia/bookings/
   * @secure
   */
  export namespace AviaBookingsList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = AviaBookingsListData;
  }

  /**
   * @description GET/POST /api/avia/bookings/ — this caller's orders, and new ones.
   * @tags api
   * @name AviaBookingsCreate
   * @request POST:/avia/bookings/
   * @secure
   */
  export namespace AviaBookingsCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = B2BCreateBooking;
    export type RequestHeaders = {};
    export type ResponseBody = AviaBookingsCreateData;
  }

  /**
   * @description GET /api/avia/bookings/{guid}/ — the local copy, optionally refreshed.
   * @tags api
   * @name AviaBookingsRead
   * @request GET:/avia/bookings/{guid}/
   * @secure
   */
  export namespace AviaBookingsRead {
    export type RequestParams = {
      guid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = AviaBookingsReadData;
  }

  /**
   * @description Same operation for clients that cannot issue a DELETE.
   * @tags api
   * @name AviaBookingsCancelCreate
   * @request POST:/avia/bookings/{guid}/cancel/
   * @secure
   */
  export namespace AviaBookingsCancelCreate {
    export type RequestParams = {
      guid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = AviaBookingsCancelCreateData;
  }

  /**
   * @description Which call to make depends on where the order is, and getting it wrong either fails or costs a penalty that did not have to be paid: * unpaid          → cancel-unpaid, free * paid / ticketed → void, a full refund with no penalty when the fare allows it, otherwise auto-cancel with the penalty * neither         → manual-refund, which raises it with Bookhara's call centre `mode` forces one of them; by default the cheapest applicable one is used.
   * @tags api
   * @name AviaBookingsCancelDelete
   * @summary DELETE /api/avia/bookings/{guid}/ — cancel or refund, whichever applies.
   * @request DELETE:/avia/bookings/{guid}/cancel/
   * @secure
   */
  export namespace AviaBookingsCancelDelete {
    export type RequestParams = {
      guid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = AviaBookingsCancelDeleteData;
  }

  /**
   * @description GET /api/avia/bookings/{guid}/check-price/ — has the fare moved?
   * @tags api
   * @name AviaBookingsCheckPriceList
   * @request GET:/avia/bookings/{guid}/check-price/
   * @secure
   */
  export namespace AviaBookingsCheckPriceList {
    export type RequestParams = {
      guid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = AviaBookingsCheckPriceListData;
  }

  /**
   * @description GET /api/avia/bookings/{guid}/events/ — the status history we recorded.
   * @tags api
   * @name AviaBookingsEventsList
   * @request GET:/avia/bookings/{guid}/events/
   * @secure
   */
  export namespace AviaBookingsEventsList {
    export type RequestParams = {
      guid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = AviaBookingsEventsListData;
  }

  /**
   * @description GET /api/avia/bookings/{guid}/fiscalization/ — receipt data for the OFD.
   * @tags api
   * @name AviaBookingsFiscalizationList
   * @request GET:/avia/bookings/{guid}/fiscalization/
   * @secure
   */
  export namespace AviaBookingsFiscalizationList {
    export type RequestParams = {
      guid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = AviaBookingsFiscalizationListData;
  }

  /**
   * @description GET /api/avia/bookings/{guid}/payment-permission/.
   * @tags api
   * @name AviaBookingsPaymentPermissionList
   * @request GET:/avia/bookings/{guid}/payment-permission/
   * @secure
   */
  export namespace AviaBookingsPaymentPermissionList {
    export type RequestParams = {
      guid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = AviaBookingsPaymentPermissionListData;
  }

  /**
   * @description This is the point of no return: it moves real money and hands the order to the carrier for issuing. The price is re-checked first, and a change stops the payment with a 409 so a person can agree to the new amount.
   * @tags api
   * @name AviaBookingsPaymentCreate
   * @summary POST /api/avia/bookings/{guid}/payment/ — charge the deposit and ticket.
   * @request POST:/avia/bookings/{guid}/payment/
   * @secure
   */
  export namespace AviaBookingsPaymentCreate {
    export type RequestParams = {
      guid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = AviaBookingsPaymentCreateData;
  }

  /**
   * @description GET /api/avia/bookings/{guid}/receipt/ — itinerary PDFs, per passenger.
   * @tags api
   * @name AviaBookingsReceiptList
   * @request GET:/avia/bookings/{guid}/receipt/
   * @secure
   */
  export namespace AviaBookingsReceiptList {
    export type RequestParams = {
      guid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = AviaBookingsReceiptListData;
  }

  /**
   * @description POST /api/avia/bookings/{guid}/refresh/ — re-read from Bookhara.
   * @tags api
   * @name AviaBookingsRefreshCreate
   * @request POST:/avia/bookings/{guid}/refresh/
   * @secure
   */
  export namespace AviaBookingsRefreshCreate {
    export type RequestParams = {
      guid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = AviaBookingsRefreshCreateData;
  }

  /**
   * @description GET /api/avia/bookings/{guid}/refund-amount/ — refund minus penalty.
   * @tags api
   * @name AviaBookingsRefundAmountList
   * @request GET:/avia/bookings/{guid}/refund-amount/
   * @secure
   */
  export namespace AviaBookingsRefundAmountList {
    export type RequestParams = {
      guid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = AviaBookingsRefundAmountListData;
  }

  /**
   * @description GET /api/avia/bookings/{guid}/rules/ — fare conditions after booking.
   * @tags api
   * @name AviaBookingsRulesList
   * @request GET:/avia/bookings/{guid}/rules/
   * @secure
   */
  export namespace AviaBookingsRulesList {
    export type RequestParams = {
      guid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = AviaBookingsRulesListData;
  }

  /**
   * @description The endpoint is unauthenticated in the usual sense — Bookhara has no token of ours — so the `X-Auth` header is the whole of the authentication, and it is checked before the body is looked at.
   * @tags api
   * @name AviaCallbackStatusCreate
   * @summary POST /api/avia/callback/status/ — Bookhara telling us an order moved.
   * @request POST:/avia/callback/status/
   * @secure
   */
  export namespace AviaCallbackStatusCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = AviaCallbackStatusCreateData;
  }

  /**
   * @description POST /api/avia/offers/search — priced itineraries for a route.
   * @tags api
   * @name AviaOffersSearchCreate
   * @request POST:/avia/offers/search/
   * @secure
   */
  export namespace AviaOffersSearchCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = OfferSearch;
    export type RequestHeaders = {};
    export type ResponseBody = AviaOffersSearchCreateData;
  }

  /**
   * @description Offers live for hours, not days. A 404 here means the offer aged out and the caller has to search again — which is what the response says.
   * @tags api
   * @name AviaOffersRead
   * @summary GET /api/avia/offers/{offer_id} — re-check seats and price.
   * @request GET:/avia/offers/{offer_id}/
   * @secure
   */
  export namespace AviaOffersRead {
    export type RequestParams = {
      offerId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = AviaOffersReadData;
  }

  /**
   * @description GET /api/avia/offers/{offer_id}/fare-family — the upsell ladder.
   * @tags api
   * @name AviaOffersFareFamilyList
   * @request GET:/avia/offers/{offer_id}/fare-family/
   * @secure
   */
  export namespace AviaOffersFareFamilyList {
    export type RequestParams = {
      offerId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = AviaOffersFareFamilyListData;
  }

  /**
   * @description GET /api/avia/offers/{offer_id}/rules — fare conditions per direction.
   * @tags api
   * @name AviaOffersRulesList
   * @request GET:/avia/offers/{offer_id}/rules/
   * @secure
   */
  export namespace AviaOffersRulesList {
    export type RequestParams = {
      offerId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = AviaOffersRulesListData;
  }

  /**
   * @description GET /api/avia/schedule — published flights, without prices.
   * @tags api
   * @name AviaScheduleList
   * @request GET:/avia/schedule/
   * @secure
   */
  export namespace AviaScheduleList {
    export type RequestParams = {};
    export type RequestQuery = {
      /** @format date */
      departure_from: string;
      /** @format date */
      departure_to: string;
      /**
       * @minLength 3
       * @maxLength 3
       */
      airport_from?: string;
      /**
       * @minLength 3
       * @maxLength 3
       */
      airport_to?: string;
      airlines?: string[];
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = AviaScheduleListData;
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
      role?: "owner" | "performer" | "lider" | "employee";
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
   * @description GET /api/b2b/workspace/access/catalogue/ — every role, module and permission this build knows about, with the labels to draw them. Read-only and the same for every workspace: it is the vocabulary, not the policy. The app renders the role editor from this rather than from its own hard-coded list, so a permission added on the server appears in the editor without an app release.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceAccessCatalogueList
   * @summary Roles, modules and permissions
   * @request GET:/b2b/workspace/access/catalogue/
   * @secure
   */
  export namespace B2BWorkspaceAccessCatalogueList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceAccessCatalogueListData;
  }

  /**
   * @description GET /api/b2b/workspace/access/roles/ — what each role may do here.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceAccessRolesList
   * @summary This workspace's role configuration
   * @request GET:/b2b/workspace/access/roles/
   * @secure
   */
  export namespace B2BWorkspaceAccessRolesList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceAccessRolesListData;
  }

  /**
   * @description PUT /api/b2b/workspace/access/roles/<code>/ — change what a role may do. Roles themselves cannot be created or removed — the TZ forbids it for the MVP — so there is no POST and no DELETE here. What a role *is* stays; what it may do is this workspace's to decide.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceAccessRolesUpdate
   * @summary Set a role's modules and permissions
   * @request PUT:/b2b/workspace/access/roles/{code}/
   * @secure
   */
  export namespace B2BWorkspaceAccessRolesUpdate {
    export type RequestParams = {
      code: string;
    };
    export type RequestQuery = {};
    export type RequestBody = RoleAccess;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceAccessRolesUpdateData;
  }

  /**
   * @description POST /api/b2b/workspace/account/device-token/ — address this phone. The account-session twin of `/me/device-token/`. Registered as soon as registration finishes, before there is any workspace to belong to, so that somebody waiting on a join request can be told when it is answered — the roster's token cannot reach them, because they are not on a roster. An empty token clears the row, which is what signing out sends.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceAccountDeviceTokenCreate
   * @summary Register this phone (account)
   * @request POST:/b2b/workspace/account/device-token/
   * @secure
   */
  export namespace B2BWorkspaceAccountDeviceTokenCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceAccountDeviceTokenCreateData;
  }

  /**
   * @description GET  /api/b2b/workspace/account/invites/<token>/ — what this link offers. POST /api/b2b/workspace/account/invites/<token>/ — take it.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceAccountInvitesRead
   * @summary Preview an invite
   * @request GET:/b2b/workspace/account/invites/{token}/
   * @secure
   */
  export namespace B2BWorkspaceAccountInvitesRead {
    export type RequestParams = {
      token: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceAccountInvitesReadData;
  }

  /**
   * @description GET  /api/b2b/workspace/account/invites/<token>/ — what this link offers. POST /api/b2b/workspace/account/invites/<token>/ — take it.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceAccountInvitesCreate
   * @summary Accept an invite
   * @request POST:/b2b/workspace/account/invites/{token}/
   * @secure
   */
  export namespace B2BWorkspaceAccountInvitesCreate {
    export type RequestParams = {
      token: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceAccountInvitesCreateData;
  }

  /**
   * @description GET /api/b2b/workspace/account/join-code/?code= — what this string is. One field on the app, two things it can hold, and the server decides which — not the client. The two are genuinely different offers and telling them apart by shape is exactly the kind of rule that goes stale: * a **workspace invite link** was minted for one room, with a role and a set of modules already chosen. Taking it is immediate. * a **company join code** decides nothing. It names a company and lists the rooms inside it, and every one of them still has to be asked through. A string that is neither is one answer — `404` — whichever it failed to be. Guessing at five characters must not be able to learn that a code exists but its company is closed, or that a token was real but expired.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceAccountJoinCodeList
   * @summary Resolve an invite link or company code
   * @request GET:/b2b/workspace/account/join-code/
   * @secure
   */
  export namespace B2BWorkspaceAccountJoinCodeList {
    export type RequestParams = {};
    export type RequestQuery = {
      /** An invite link, an invite token, or a company code. */
      code?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceAccountJoinCodeListData;
  }

  /**
   * @description GET  /api/b2b/workspace/account/join-requests/ — what I have asked for. POST /api/b2b/workspace/account/join-requests/ — ask to be let in.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceAccountJoinRequestsList
   * @summary My join requests
   * @request GET:/b2b/workspace/account/join-requests/
   * @secure
   */
  export namespace B2BWorkspaceAccountJoinRequestsList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceAccountJoinRequestsListData;
  }

  /**
   * @description GET  /api/b2b/workspace/account/join-requests/ — what I have asked for. POST /api/b2b/workspace/account/join-requests/ — ask to be let in.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceAccountJoinRequestsCreate
   * @summary Ask to join a workspace
   * @request POST:/b2b/workspace/account/join-requests/
   * @secure
   */
  export namespace B2BWorkspaceAccountJoinRequestsCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = JoinRequest;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceAccountJoinRequestsCreateData;
  }

  /**
   * @description GET  /api/b2b/workspace/account/me/ — who this is, and where they work. PUT  /api/b2b/workspace/account/me/ — finish registration.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceAccountMeList
   * @summary The Weel account
   * @request GET:/b2b/workspace/account/me/
   * @secure
   */
  export namespace B2BWorkspaceAccountMeList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceAccountMeListData;
  }

  /**
   * @description GET  /api/b2b/workspace/account/me/ — who this is, and where they work. PUT  /api/b2b/workspace/account/me/ — finish registration.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceAccountMeUpdate
   * @summary Set name and username
   * @request PUT:/b2b/workspace/account/me/
   * @secure
   */
  export namespace B2BWorkspaceAccountMeUpdate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = Profile;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceAccountMeUpdateData;
  }

  /**
   * @description Erase the person, keep the work. Required of any app that lets somebody sign up — App Store guideline 5.1.1(v) — and it has to be reachable from inside the app rather than by writing to support. It always succeeds. Owning a company cannot be handed over anywhere in this product, so refusing while somebody owns one would be refusing for good; instead the companies they solely own are closed with them, and `GET` on this endpoint is what lets the screen say which ones before anybody presses anything.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceAccountMeDelete
   * @summary Delete this account
   * @request DELETE:/b2b/workspace/account/me/
   * @secure
   */
  export namespace B2BWorkspaceAccountMeDelete {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceAccountMeDeleteData;
  }

  /**
   * @description GET /api/b2b/workspace/account/me/deletion/ — what deleting would cost. Separate from the delete itself so the confirmation can be specific. "This cannot be undone" is a sentence people press through; naming the company that closes and the number of colleagues who lose their workspace is not.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceAccountMeDeletionList
   * @summary What deleting this account closes
   * @request GET:/b2b/workspace/account/me/deletion/
   * @secure
   */
  export namespace B2BWorkspaceAccountMeDeletionList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceAccountMeDeletionListData;
  }

  /**
   * @description GET /api/b2b/workspace/account/orgs/<org_id>/workspaces/ — every workspace under this company, for the "Workspace'lar" screen. Gated the same way `POST /account/workspaces/` gates opening one inside an org: holding any active roster row in it. An org's workspaces are already visible sideways to anyone on one of them — see `WorkspaceOrgPeopleView` — this is that same boundary applied to the list of workspaces rather than the list of people.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceAccountOrgsWorkspacesList
   * @summary A company's workspaces
   * @request GET:/b2b/workspace/account/orgs/{org_id}/workspaces/
   * @secure
   */
  export namespace B2BWorkspaceAccountOrgsWorkspacesList {
    export type RequestParams = {
      orgId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceAccountOrgsWorkspacesListData;
  }

  /**
   * @description GET /api/b2b/workspace/account/username-check/?username=xusan_design Whether a handle is free, and what else to try if it is not. Answered as the field is typed rather than only on submit. A uniqueness rule that is enforced at the end of a form is a form people fill in twice, and the handle is the last screen of registration — the worst place to send somebody back to. Reading this tells the caller whether *some* handle exists, which is exactly what the screen after it does anyway; it needs an account session, so it is not an open directory probe.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceAccountUsernameCheckList
   * @summary Is this username free?
   * @request GET:/b2b/workspace/account/username-check/
   * @secure
   */
  export namespace B2BWorkspaceAccountUsernameCheckList {
    export type RequestParams = {};
    export type RequestQuery = {
      /** The handle to test, with or without its @. */
      username?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceAccountUsernameCheckListData;
  }

  /**
   * @description GET /api/b2b/workspace/account/username-suggestion/ The TZ says the system may propose a free handle. Offering one is most of what gets somebody past this screen — a blank field with a uniqueness rule is where registrations stop.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceAccountUsernameSuggestionList
   * @summary A free username
   * @request GET:/b2b/workspace/account/username-suggestion/
   * @secure
   */
  export namespace B2BWorkspaceAccountUsernameSuggestionList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceAccountUsernameSuggestionListData;
  }

  /**
   * @description GET  /api/b2b/workspace/account/workspaces/ — where this account works. POST /api/b2b/workspace/account/workspaces/ — open a new one.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceAccountWorkspacesList
   * @summary My workspaces
   * @request GET:/b2b/workspace/account/workspaces/
   * @secure
   */
  export namespace B2BWorkspaceAccountWorkspacesList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceAccountWorkspacesListData;
  }

  /**
   * @description GET  /api/b2b/workspace/account/workspaces/ — where this account works. POST /api/b2b/workspace/account/workspaces/ — open a new one.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceAccountWorkspacesCreate
   * @summary Create a workspace
   * @request POST:/b2b/workspace/account/workspaces/
   * @secure
   */
  export namespace B2BWorkspaceAccountWorkspacesCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = WorkspaceCreate;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceAccountWorkspacesCreateData;
  }

  /**
   * @description GET /api/b2b/workspace/account/workspaces/search/?q= — find a workspace to ask to join. The one screen an account that belongs to nothing may look outward from, so it is kept to exactly that: at least two characters, a capped number of rows, and nothing on a row that is not already on the card the app draws. Workspaces this account is already on are filtered out on the way.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceAccountWorkspacesSearchList
   * @summary Search workspaces
   * @request GET:/b2b/workspace/account/workspaces/search/
   * @secure
   */
  export namespace B2BWorkspaceAccountWorkspacesSearchList {
    export type RequestParams = {};
    export type RequestQuery = {
      /** Workspace name or handle, at least 2 characters. */
      q?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceAccountWorkspacesSearchListData;
  }

  /**
   * @description POST /api/b2b/workspace/account/workspaces/<employee_id>/open/
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceAccountWorkspacesOpenCreate
   * @summary Open a workspace session
   * @request POST:/b2b/workspace/account/workspaces/{employee_id}/open/
   * @secure
   */
  export namespace B2BWorkspaceAccountWorkspacesOpenCreate {
    export type RequestParams = {
      employeeId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceAccountWorkspacesOpenCreateData;
  }

  /**
   * @description GET /api/b2b/workspace/app-version/ — may this build still run? The one endpoint in the workspace API that answers before there is a
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceAppVersionList
   * @summary Whether the installed mobile build may still run
   * @request GET:/b2b/workspace/app-version/
   * @secure
   */
  export namespace B2BWorkspaceAppVersionList {
    export type RequestParams = {};
    export type RequestQuery = {
      platform: "android" | "ios";
      /** The installed version name, e.g. 1.1.0 */
      version: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceAppVersionListData;
  }

  /**
   * @description GET /api/b2b/workspace/attendance/ — today's roll call. Readable by everyone: it is on the chat home screen, and the point of it is knowing who is around. `?date=YYYY-MM-DD` reads another day.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceAttendanceList
   * @summary Attendance for a day
   * @request GET:/b2b/workspace/attendance/
   * @secure
   */
  export namespace B2BWorkspaceAttendanceList {
    export type RequestParams = {};
    export type RequestQuery = {
      /** YYYY-MM-DD, defaults to today */
      date?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceAttendanceListData;
  }

  /**
   * @description POST /api/b2b/workspace/attendance/absence/ — "I am not coming in". The other half of the check-in button. Somebody outside the geofence cannot mark themselves present, and the alternative to letting them say why is a day that stays unmarked — which reads as nobody having looked at them rather than as an absence they declared. Needs no capability for the same reason check-in does not: it only ever writes the caller's own row. `marked_by_id` stays null, which is what tells this apart from a manager marking them absent. No coordinates are taken. The point of this endpoint is that the person is somewhere else, and recording where they were when they said so would collect a location for no purpose it serves.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceAttendanceAbsenceCreate
   * @summary Report yourself absent, with a reason
   * @request POST:/b2b/workspace/attendance/absence/
   * @secure
   */
  export namespace B2BWorkspaceAttendanceAbsenceCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = AttendanceSelfAbsence;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceAttendanceAbsenceCreateData;
  }

  /**
   * @description POST /api/b2b/workspace/attendance/check-in/ — "I'm here". Needs no capability: it only ever writes the caller's own row. The arrival time is taken from the server rather than the request, so a wrong device clock cannot become an arrival time nobody can argue with. When the company has a geofence on, the phone's coordinates are checked against it *here*, server-side — a client-side "close enough" is a check a modified app could always pass.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceAttendanceCheckInCreate
   * @summary Check yourself in for today
   * @request POST:/b2b/workspace/attendance/check-in/
   * @secure
   */
  export namespace B2BWorkspaceAttendanceCheckInCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = AttendanceCheckIn;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceAttendanceCheckInCreateData;
  }

  /**
   * @description GET / PUT ``attendance/location/`` — the office geofence. Read by everyone: the app needs `is_enabled` before it knows whether a check-in has to carry coordinates at all. Only the owner may change it — gated by `can_manage_attendance_location` rather than the manager-level `can_manage_attendance`, since this is company policy, not one person's day.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceAttendanceLocationList
   * @summary The office geofence attendance is checked against
   * @request GET:/b2b/workspace/attendance/location/
   * @secure
   */
  export namespace B2BWorkspaceAttendanceLocationList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceAttendanceLocationListData;
  }

  /**
   * @description GET / PUT ``attendance/location/`` — the office geofence. Read by everyone: the app needs `is_enabled` before it knows whether a check-in has to carry coordinates at all. Only the owner may change it — gated by `can_manage_attendance_location` rather than the manager-level `can_manage_attendance`, since this is company policy, not one person's day.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceAttendanceLocationUpdate
   * @summary Set or toggle the office geofence
   * @request PUT:/b2b/workspace/attendance/location/
   * @secure
   */
  export namespace B2BWorkspaceAttendanceLocationUpdate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = AttendanceLocationUpdate;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceAttendanceLocationUpdateData;
  }

  /**
   * @description POST /api/b2b/workspace/attendance/<employee_id>/ — record someone's day. A manager's screen. Marking yourself goes through check-in instead, which is why this does not special-case it.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceAttendanceCreate
   * @summary Mark an employee present or absent
   * @request POST:/b2b/workspace/attendance/{employee_id}/
   * @secure
   */
  export namespace B2BWorkspaceAttendanceCreate {
    export type RequestParams = {
      employeeId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = AttendanceMark;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceAttendanceCreateData;
  }

  /**
   * @description GET /api/b2b/workspace/audit/ — role changes, access changes, deletions.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceAuditList
   * @summary The workspace's audit log
   * @request GET:/b2b/workspace/audit/
   * @secure
   */
  export namespace B2BWorkspaceAuditList {
    export type RequestParams = {};
    export type RequestQuery = {
      limit?: number;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceAuditListData;
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
   * @summary Send a message, optionally with a photo or video
   * @request POST:/b2b/workspace/chats/{thread_id}/messages/
   * @secure
   */
  export namespace B2BWorkspaceChatsMessagesCreate {
    export type RequestParams = {
      threadId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = {
      /**
       * @maxLength 4000
       * @default ""
       */
      text?: string;
      reply_to_id?: number | null;
      /** @format binary */
      file?: File;
    };
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceChatsMessagesCreateData;
  }

  /**
   * @description DELETE /api/b2b/workspace/chats/<thread_id>/messages/<message_id>/ Your own message, always. Anyone else's only if you run the company — a manager has to be able to take down something posted in a shared room, and an employee must not be able to edit the record of what was said.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceChatsMessagesDelete
   * @summary Delete a message
   * @request DELETE:/b2b/workspace/chats/{thread_id}/messages/{message_id}/
   * @secure
   */
  export namespace B2BWorkspaceChatsMessagesDelete {
    export type RequestParams = {
      threadId: string;
      messageId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceChatsMessagesDeleteData;
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
   * @description GET /api/b2b/workspace/crm/customers/ — the CRM directory. Every customer the company has ever raised a lead against, with their deal count, lifetime value and last-touched date, so the CRM list screen can render straight off one response.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceCrmCustomersList
   * @summary List CRM customers
   * @request GET:/b2b/workspace/crm/customers/
   * @secure
   */
  export namespace B2BWorkspaceCrmCustomersList {
    export type RequestParams = {};
    export type RequestQuery = {
      /** Name, company or phone. */
      q?: string;
      /** Faol mijozlar / Nofaol mijozlar. Omit for Barchasi. */
      active?: "active" | "inactive";
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceCrmCustomersListData;
  }

  /**
   * @description GET /api/b2b/workspace/crm/customers/<id>/ — one customer's CRM card. The contact card, the lifetime totals, the trailing six months of deal value for the chart, and the deal history — everything the detail screen draws, in one response.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceCrmCustomersRead
   * @summary CRM customer detail
   * @request GET:/b2b/workspace/crm/customers/{customer_id}/
   * @secure
   */
  export namespace B2BWorkspaceCrmCustomersRead {
    export type RequestParams = {
      customerId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceCrmCustomersReadData;
  }

  /**
   * @description GET /api/b2b/workspace/customers/?q= — the company's customer directory. What step 1 of the "Yangi lead" sheet searches. Any employee may look a customer up: the point of the search is to stop the same buyer being typed in twice, and a directory only half the company can see would not. Deliberately not paged. It answers a search box the moment somebody stops typing, and twenty matches is already more than anyone reads before narrowing the query.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceCustomersList
   * @summary Search the customer directory
   * @request GET:/b2b/workspace/customers/
   * @secure
   */
  export namespace B2BWorkspaceCustomersList {
    export type RequestParams = {};
    export type RequestQuery = {
      /** Name, company or phone. Blank returns the most recent. */
      q?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceCustomersListData;
  }

  /**
   * @description GET/POST /api/b2b/workspace/employee-of-month/ Anyone can see this month's pick; only the owner can make or change it.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceEmployeeOfMonthList
   * @summary This month's employee of the month
   * @request GET:/b2b/workspace/employee-of-month/
   * @secure
   */
  export namespace B2BWorkspaceEmployeeOfMonthList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceEmployeeOfMonthListData;
  }

  /**
   * @description GET/POST /api/b2b/workspace/employee-of-month/ Anyone can see this month's pick; only the owner can make or change it.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceEmployeeOfMonthCreate
   * @summary Pick this month's employee of the month (owner only)
   * @request POST:/b2b/workspace/employee-of-month/
   * @secure
   */
  export namespace B2BWorkspaceEmployeeOfMonthCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = EmployeeOfMonthSelect;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceEmployeeOfMonthCreateData;
  }

  /**
   * @description GET /api/b2b/workspace/employee-of-month/stats/ — owner only. Every active employee's completed-task count and on-time rate for the current calendar month, sorted best-first — what the owner picks the winner from.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceEmployeeOfMonthStatsList
   * @summary Monthly task stats per employee (owner only)
   * @request GET:/b2b/workspace/employee-of-month/stats/
   * @secure
   */
  export namespace B2BWorkspaceEmployeeOfMonthStatsList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceEmployeeOfMonthStatsListData;
  }

  /**
   * @description GET/PUT /api/b2b/workspace/employees/<id>/access/ — one person's standing.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceEmployeesAccessList
   * @summary What one employee may do
   * @request GET:/b2b/workspace/employees/{employee_id}/access/
   * @secure
   */
  export namespace B2BWorkspaceEmployeesAccessList {
    export type RequestParams = {
      employeeId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceEmployeesAccessListData;
  }

  /**
   * @description GET/PUT /api/b2b/workspace/employees/<id>/access/ — one person's standing.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceEmployeesAccessUpdate
   * @summary Set one employee's role and access
   * @request PUT:/b2b/workspace/employees/{employee_id}/access/
   * @secure
   */
  export namespace B2BWorkspaceEmployeesAccessUpdate {
    export type RequestParams = {
      employeeId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = EmployeeAccess;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceEmployeesAccessUpdateData;
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
   * @description GET/POST /api/b2b/workspace/files/ — the company's shared folder. Everyone may read and add; nothing here is scoped to a role, so a driver can send a photographed waybill without asking anyone to do it for them.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceFilesList
   * @summary List files
   * @request GET:/b2b/workspace/files/
   * @secure
   */
  export namespace B2BWorkspaceFilesList {
    export type RequestParams = {};
    export type RequestQuery = {
      /** file (default), chat, or voucher */
      kind?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceFilesListData;
  }

  /**
   * @description GET/POST /api/b2b/workspace/files/ — the company's shared folder. Everyone may read and add; nothing here is scoped to a role, so a driver can send a photographed waybill without asking anyone to do it for them.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceFilesCreate
   * @summary Upload a file
   * @request POST:/b2b/workspace/files/
   * @secure
   */
  export namespace B2BWorkspaceFilesCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = {
      /** @format binary */
      file: File;
    };
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceFilesCreateData;
  }

  /**
   * @description PATCH / DELETE /api/b2b/workspace/files/<id>/
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceFilesPartialUpdate
   * @summary Rename a file or move it to another folder
   * @request PATCH:/b2b/workspace/files/{file_id}/
   * @secure
   */
  export namespace B2BWorkspaceFilesPartialUpdate {
    export type RequestParams = {
      fileId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = WorkspaceFilePatch;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceFilesPartialUpdateData;
  }

  /**
   * @description PATCH / DELETE /api/b2b/workspace/files/<id>/
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceFilesDelete
   * @summary Delete a file
   * @request DELETE:/b2b/workspace/files/{file_id}/
   * @secure
   */
  export namespace B2BWorkspaceFilesDelete {
    export type RequestParams = {
      fileId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceFilesDeleteData;
  }

  /**
   * @description GET/POST /api/b2b/workspace/folders/ — the drive's own folders. Anyone in the company may make one, the same as anyone may add a file: the drive is shared, and a folder is how somebody decided to arrange it.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceFoldersList
   * @summary List folders
   * @request GET:/b2b/workspace/folders/
   * @secure
   */
  export namespace B2BWorkspaceFoldersList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceFoldersListData;
  }

  /**
   * @description GET/POST /api/b2b/workspace/folders/ — the drive's own folders. Anyone in the company may make one, the same as anyone may add a file: the drive is shared, and a folder is how somebody decided to arrange it.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceFoldersCreate
   * @summary Create a folder
   * @request POST:/b2b/workspace/folders/
   * @secure
   */
  export namespace B2BWorkspaceFoldersCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = WorkspaceFolderWrite;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceFoldersCreateData;
  }

  /**
   * @description DELETE /api/b2b/workspace/folders/<id>/ The folder goes; the files in it go back to the drive. Deleting somebody's arrangement is not deleting the company's documents, and the two should never be the same tap.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceFoldersDelete
   * @summary Delete a folder (its files return to the drive)
   * @request DELETE:/b2b/workspace/folders/{folder_id}/
   * @secure
   */
  export namespace B2BWorkspaceFoldersDelete {
    export type RequestParams = {
      folderId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceFoldersDeleteData;
  }

  /**
   * @description GET/POST /api/b2b/workspace/invites/
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceInvitesList
   * @summary Invite links
   * @request GET:/b2b/workspace/invites/
   * @secure
   */
  export namespace B2BWorkspaceInvitesList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceInvitesListData;
  }

  /**
   * @description GET/POST /api/b2b/workspace/invites/
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceInvitesCreate
   * @summary Create an invite link
   * @request POST:/b2b/workspace/invites/
   * @secure
   */
  export namespace B2BWorkspaceInvitesCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = InviteCreate;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceInvitesCreateData;
  }

  /**
   * @description POST /api/b2b/workspace/invites/<id>/revoke/
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceInvitesRevokeCreate
   * @summary Revoke an invite link
   * @request POST:/b2b/workspace/invites/{invite_id}/revoke/
   * @secure
   */
  export namespace B2BWorkspaceInvitesRevokeCreate {
    export type RequestParams = {
      inviteId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceInvitesRevokeCreateData;
  }

  /**
   * @description GET /api/b2b/workspace/join-requests/ — who is asking to be let in.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceJoinRequestsList
   * @summary Join requests
   * @request GET:/b2b/workspace/join-requests/
   * @secure
   */
  export namespace B2BWorkspaceJoinRequestsList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceJoinRequestsListData;
  }

  /**
   * @description POST /api/b2b/workspace/join-requests/<id>/<accept|decline>/
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceJoinRequestsCreate
   * @summary Answer a join request
   * @request POST:/b2b/workspace/join-requests/{request_id}/{action}/
   * @secure
   */
  export namespace B2BWorkspaceJoinRequestsCreate {
    export type RequestParams = {
      requestId: string;
      action: string;
    };
    export type RequestQuery = {};
    export type RequestBody = JoinDecision;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceJoinRequestsCreateData;
  }

  /**
   * @description GET  /api/b2b/workspace/leads/ — every lead in the company, any employee may see the board and claim an open one. POST /api/b2b/workspace/leads/ — owner/performer only.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceLeadsList
   * @summary List leads
   * @request GET:/b2b/workspace/leads/
   * @secure
   */
  export namespace B2BWorkspaceLeadsList {
    export type RequestParams = {};
    export type RequestQuery = {
      status?: "new" | "in_progress" | "completed";
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceLeadsListData;
  }

  /**
   * @description GET  /api/b2b/workspace/leads/ — every lead in the company, any employee may see the board and claim an open one. POST /api/b2b/workspace/leads/ — owner/performer only.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceLeadsCreate
   * @summary Create a lead (owner/manager only)
   * @request POST:/b2b/workspace/leads/
   * @secure
   */
  export namespace B2BWorkspaceLeadsCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = LeadWrite;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceLeadsCreateData;
  }

  /**
   * @description GET /api/b2b/workspace/leads/<id>/ — the whole lead in one response. The detail screen shows the lead, its priced lines, its history and the tasks raised off it all at once, so it fetches them together: four small queries on the server beats four round trips from a phone.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceLeadsRead
   * @summary Lead detail with items, activity and linked tasks
   * @request GET:/b2b/workspace/leads/{lead_id}/
   * @secure
   */
  export namespace B2BWorkspaceLeadsRead {
    export type RequestParams = {
      leadId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceLeadsReadData;
  }

  /**
   * @description GET /api/b2b/workspace/leads/<id>/ — the whole lead in one response. The detail screen shows the lead, its priced lines, its history and the tasks raised off it all at once, so it fetches them together: four small queries on the server beats four round trips from a phone.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceLeadsDelete
   * @summary Delete a lead (owner or manager)
   * @request DELETE:/b2b/workspace/leads/{lead_id}/
   * @secure
   */
  export namespace B2BWorkspaceLeadsDelete {
    export type RequestParams = {
      leadId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceLeadsDeleteData;
  }

  /**
   * @description POST /api/b2b/workspace/leads/<id>/assign/ — hand the lead to somebody. Managers only, and distinct from claiming: claiming is first-come and self-service, this takes a lead off one employee and gives it to another.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceLeadsAssignCreate
   * @summary Reassign a lead (managers only)
   * @request POST:/b2b/workspace/leads/{lead_id}/assign/
   * @secure
   */
  export namespace B2BWorkspaceLeadsAssignCreate {
    export type RequestParams = {
      leadId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = LeadAssignWrite;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceLeadsAssignCreateData;
  }

  /**
   * @description POST /api/b2b/workspace/leads/<id>/claim/ — any employee takes a 'new' lead.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceLeadsClaimCreate
   * @summary Claim a lead
   * @request POST:/b2b/workspace/leads/{lead_id}/claim/
   * @secure
   */
  export namespace B2BWorkspaceLeadsClaimCreate {
    export type RequestParams = {
      leadId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceLeadsClaimCreateData;
  }

  /**
   * @description POST /api/b2b/workspace/leads/<id>/comments/ — add a note to the history. The claimant's alone. Management reads the history — that is the point of it — but the account of the calls is written by the person who made them.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceLeadsCommentsCreate
   * @summary Comment on a lead
   * @request POST:/b2b/workspace/leads/{lead_id}/comments/
   * @secure
   */
  export namespace B2BWorkspaceLeadsCommentsCreate {
    export type RequestParams = {
      leadId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = LeadCommentWrite;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceLeadsCommentsCreateData;
  }

  /**
   * @description POST /api/b2b/workspace/leads/<id>/complete/ — the claiming employee marks it resolved.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceLeadsCompleteCreate
   * @summary Complete a lead
   * @request POST:/b2b/workspace/leads/{lead_id}/complete/
   * @secure
   */
  export namespace B2BWorkspaceLeadsCompleteCreate {
    export type RequestParams = {
      leadId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceLeadsCompleteCreateData;
  }

  /**
   * @description POST   /api/b2b/workspace/leads/<id>/items/ — add a priced line. PUT    /api/b2b/workspace/leads/<id>/items/ — replace the whole list. Either way the lead's ``amount`` is re-totalled, so the board's money never disagrees with the lines it came from.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceLeadsItemsCreate
   * @summary Add a line item to a lead
   * @request POST:/b2b/workspace/leads/{lead_id}/items/
   * @secure
   */
  export namespace B2BWorkspaceLeadsItemsCreate {
    export type RequestParams = {
      leadId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = LeadItemWrite;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceLeadsItemsCreateData;
  }

  /**
   * @description POST   /api/b2b/workspace/leads/<id>/items/ — add a priced line. PUT    /api/b2b/workspace/leads/<id>/items/ — replace the whole list. Either way the lead's ``amount`` is re-totalled, so the board's money never disagrees with the lines it came from.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceLeadsItemsUpdate
   * @summary Replace a lead's line items
   * @request PUT:/b2b/workspace/leads/{lead_id}/items/
   * @secure
   */
  export namespace B2BWorkspaceLeadsItemsUpdate {
    export type RequestParams = {
      leadId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = LeadItemWrite[];
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceLeadsItemsUpdateData;
  }

  /**
   * @description DELETE /api/b2b/workspace/leads/<id>/items/<item_id>/.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceLeadsItemsDelete
   * @summary Delete a lead's line item
   * @request DELETE:/b2b/workspace/leads/{lead_id}/items/{item_id}/
   * @secure
   */
  export namespace B2BWorkspaceLeadsItemsDelete {
    export type RequestParams = {
      leadId: string;
      itemId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceLeadsItemsDeleteData;
  }

  /**
   * @description POST /api/b2b/workspace/leads/<id>/stage/ — move the lead along the funnel. The claimant only, and never on a closed lead. Reaching ``won`` or ``lost`` completes it; that rule lives in the repository so this view does not have to know which stages are terminal.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceLeadsStageCreate
   * @summary Change a lead's funnel stage
   * @request POST:/b2b/workspace/leads/{lead_id}/stage/
   * @secure
   */
  export namespace B2BWorkspaceLeadsStageCreate {
    export type RequestParams = {
      leadId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = LeadStageWrite;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceLeadsStageCreateData;
  }

  /**
   * @description POST /api/b2b/workspace/leads/<id>/tasks/ — raise a task off this lead. Deliberately not gated on `can_create_task`: the point of the button on the lead screen is that the person working the deal can write down the next thing they have to do, and that is an employee more often than a manager. The task is created assigned to them.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceLeadsTasksCreate
   * @summary Create a task linked to a lead
   * @request POST:/b2b/workspace/leads/{lead_id}/tasks/
   * @secure
   */
  export namespace B2BWorkspaceLeadsTasksCreate {
    export type RequestParams = {
      leadId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = TaskWrite;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceLeadsTasksCreateData;
  }

  /**
   * @description GET / POST /api/b2b/workspace/mail/accounts/ — the caller's own inboxes.
   * @tags B2B / Mail
   * @name B2BWorkspaceMailAccountsList
   * @summary List the inboxes this person has connected
   * @request GET:/b2b/workspace/mail/accounts/
   * @secure
   */
  export namespace B2BWorkspaceMailAccountsList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceMailAccountsListData;
  }

  /**
   * @description GET / POST /api/b2b/workspace/mail/accounts/ — the caller's own inboxes.
   * @tags B2B / Mail
   * @name B2BWorkspaceMailAccountsCreate
   * @summary Connect an inbox with an app password
   * @request POST:/b2b/workspace/mail/accounts/
   * @secure
   */
  export namespace B2BWorkspaceMailAccountsCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = MailAccountConnect;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceMailAccountsCreateData;
  }

  /**
   * @description PATCH / DELETE /api/b2b/workspace/mail/accounts/<id>/
   * @tags B2B / Mail
   * @name B2BWorkspaceMailAccountsPartialUpdate
   * @summary Rename a connected inbox
   * @request PATCH:/b2b/workspace/mail/accounts/{account_id}/
   * @secure
   */
  export namespace B2BWorkspaceMailAccountsPartialUpdate {
    export type RequestParams = {
      accountId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = MailAccountPatch;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceMailAccountsPartialUpdateData;
  }

  /**
   * @description PATCH / DELETE /api/b2b/workspace/mail/accounts/<id>/
   * @tags B2B / Mail
   * @name B2BWorkspaceMailAccountsDelete
   * @summary Disconnect an inbox
   * @request DELETE:/b2b/workspace/mail/accounts/{account_id}/
   * @secure
   */
  export namespace B2BWorkspaceMailAccountsDelete {
    export type RequestParams = {
      accountId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceMailAccountsDeleteData;
  }

  /**
   * @description POST /api/b2b/workspace/mail/accounts/<id>/reconnect/ — new password.
   * @tags B2B / Mail
   * @name B2BWorkspaceMailAccountsReconnectCreate
   * @summary Replace a stored app password
   * @request POST:/b2b/workspace/mail/accounts/{account_id}/reconnect/
   * @secure
   */
  export namespace B2BWorkspaceMailAccountsReconnectCreate {
    export type RequestParams = {
      accountId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = MailAccountConnect;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceMailAccountsReconnectCreateData;
  }

  /**
   * @description POST /api/b2b/workspace/mail/attachments/ — upload before composing.
   * @tags B2B / Mail
   * @name B2BWorkspaceMailAttachmentsCreate
   * @summary Upload a file to attach to a message
   * @request POST:/b2b/workspace/mail/attachments/
   * @secure
   */
  export namespace B2BWorkspaceMailAttachmentsCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = {
      /** @format binary */
      file: File;
    };
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceMailAttachmentsCreateData;
  }

  /**
   * @description GET /api/b2b/workspace/mail/attachments/<id>/ — redirect to the file.
   * @tags B2B / Mail
   * @name B2BWorkspaceMailAttachmentsRead
   * @summary Download an attachment
   * @request GET:/b2b/workspace/mail/attachments/{attachment_id}/
   * @secure
   */
  export namespace B2BWorkspaceMailAttachmentsRead {
    export type RequestParams = {
      attachmentId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceMailAttachmentsReadData;
  }

  /**
   * @description POST /api/b2b/workspace/mail/messages/ — compose and send.
   * @tags B2B / Mail
   * @name B2BWorkspaceMailMessagesCreate
   * @summary Send an email
   * @request POST:/b2b/workspace/mail/messages/
   * @secure
   */
  export namespace B2BWorkspaceMailMessagesCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = MailSend;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceMailMessagesCreateData;
  }

  /**
   * @description GET /api/b2b/workspace/mail/oauth/google/ — where to send the browser.
   * @tags B2B / Mail
   * @name B2BWorkspaceMailOauthGoogleList
   * @summary Begin Google sign-in
   * @request GET:/b2b/workspace/mail/oauth/google/
   * @secure
   */
  export namespace B2BWorkspaceMailOauthGoogleList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceMailOauthGoogleListData;
  }

  /**
   * @description POST /api/b2b/workspace/mail/oauth/google/callback/ — finish sign-in.
   * @tags B2B / Mail
   * @name B2BWorkspaceMailOauthGoogleCallbackCreate
   * @summary Complete Google sign-in
   * @request POST:/b2b/workspace/mail/oauth/google/callback/
   * @secure
   */
  export namespace B2BWorkspaceMailOauthGoogleCallbackCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceMailOauthGoogleCallbackCreateData;
  }

  /**
   * @description GET /api/b2b/workspace/mail/providers/?address=… — what to show next. Lets the connect screen say "Gmail needs an app password, here is the link" the moment an address is typed, instead of after a failed attempt.
   * @tags B2B / Mail
   * @name B2BWorkspaceMailProvidersList
   * @summary Guess a provider's settings from an address
   * @request GET:/b2b/workspace/mail/providers/
   * @secure
   */
  export namespace B2BWorkspaceMailProvidersList {
    export type RequestParams = {};
    export type RequestQuery = {
      address: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceMailProvidersListData;
  }

  /**
   * @description POST /api/b2b/workspace/mail/sync/ — pull-to-refresh.
   * @tags B2B / Mail
   * @name B2BWorkspaceMailSyncCreate
   * @summary Check for new mail now
   * @request POST:/b2b/workspace/mail/sync/
   * @secure
   */
  export namespace B2BWorkspaceMailSyncCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceMailSyncCreateData;
  }

  /**
   * @description GET /api/b2b/workspace/mail/threads/ — the conversation list. With no ``account_id`` the caller's accounts are merged into one list, so somebody with a personal and a work inbox sees a single stream.
   * @tags B2B / Mail
   * @name B2BWorkspaceMailThreadsList
   * @summary List mail threads
   * @request GET:/b2b/workspace/mail/threads/
   * @secure
   */
  export namespace B2BWorkspaceMailThreadsList {
    export type RequestParams = {};
    export type RequestQuery = {
      /** Omit to merge every connected inbox */
      account_id?: number;
      /** inbox | sent | archive | trash */
      folder?: string;
      q?: string;
      unread?: boolean;
      starred?: boolean;
      limit?: number;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceMailThreadsListData;
  }

  /**
   * @description POST /api/b2b/workspace/mail/threads/<id>/flags/ — star, archive, trash.
   * @tags B2B / Mail
   * @name B2BWorkspaceMailThreadsFlagsCreate
   * @summary Star or move a thread
   * @request POST:/b2b/workspace/mail/threads/{thread_id}/flags/
   * @secure
   */
  export namespace B2BWorkspaceMailThreadsFlagsCreate {
    export type RequestParams = {
      threadId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = MailThreadFlags;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceMailThreadsFlagsCreateData;
  }

  /**
   * @description GET /api/b2b/workspace/mail/threads/<id>/messages/
   * @tags B2B / Mail
   * @name B2BWorkspaceMailThreadsMessagesList
   * @summary Messages in a thread (oldest first)
   * @request GET:/b2b/workspace/mail/threads/{thread_id}/messages/
   * @secure
   */
  export namespace B2BWorkspaceMailThreadsMessagesList {
    export type RequestParams = {
      threadId: string;
    };
    export type RequestQuery = {
      before_id?: number;
      limit?: number;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceMailThreadsMessagesListData;
  }

  /**
   * @description POST /api/b2b/workspace/mail/threads/<id>/read/
   * @tags B2B / Mail
   * @name B2BWorkspaceMailThreadsReadCreate
   * @summary Mark a thread as read
   * @request POST:/b2b/workspace/mail/threads/{thread_id}/read/
   * @secure
   */
  export namespace B2BWorkspaceMailThreadsReadCreate {
    export type RequestParams = {
      threadId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceMailThreadsReadCreateData;
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
   * @description POST /api/b2b/workspace/me/device-token/ — register this device for push.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceMeDeviceTokenCreate
   * @summary Register the FCM token for push notifications
   * @request POST:/b2b/workspace/me/device-token/
   * @secure
   */
  export namespace B2BWorkspaceMeDeviceTokenCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceMeDeviceTokenCreateData;
  }

  /**
   * @description PUT /api/b2b/workspace/me/profile/ — correct your own entry. Yours alone, and only the parts that are actually yours: the name people see and the address they write to. The position, the department and the role are the workspace's account of what you do here and are set by whoever runs it, so the app draws them greyed out with that said in words rather than leaving them off the screen — somebody looking for the field that fixes their job title should find the answer, not an absence. The phone is not editable here either. It is what the login is checked against, and moving it is a different act with an OTP behind it.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceMeProfileUpdate
   * @summary Edit your own profile
   * @request PUT:/b2b/workspace/me/profile/
   * @secure
   */
  export namespace B2BWorkspaceMeProfileUpdate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = OwnProfile;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceMeProfileUpdateData;
  }

  /**
   * @description PUT /api/b2b/workspace/me/username/ — pick the handle people find you by. Yours alone. A roster is imported from passports and phone numbers, and a handle is the one part of somebody's entry they choose for themselves — which is also why nothing here lets one person set another's.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceMeUsernameUpdate
   * @summary Set your own username
   * @request PUT:/b2b/workspace/me/username/
   * @secure
   */
  export namespace B2BWorkspaceMeUsernameUpdate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = Username;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceMeUsernameUpdateData;
  }

  /**
   * @description GET /api/b2b/workspace/notifications/ — the real, server-stored feed. Replaces the feed both clients used to synthesise from whatever data they happened to have loaded, which could not show anything that arrived while the app was closed.
   * @tags B2B / Mail
   * @name B2BWorkspaceNotificationsList
   * @summary List notifications
   * @request GET:/b2b/workspace/notifications/
   * @secure
   */
  export namespace B2BWorkspaceNotificationsList {
    export type RequestParams = {};
    export type RequestQuery = {
      before_id?: number;
      limit?: number;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceNotificationsListData;
  }

  /**
   * @description POST /api/b2b/workspace/notifications/read/ — mark some or all read.
   * @tags B2B / Mail
   * @name B2BWorkspaceNotificationsReadCreate
   * @summary Mark notifications read
   * @request POST:/b2b/workspace/notifications/read/
   * @secure
   */
  export namespace B2BWorkspaceNotificationsReadCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = NotificationRead;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceNotificationsReadCreateData;
  }

  /**
   * @description GET /api/b2b/workspace/org/people/?search= — who else is in the org. The picker on "So'rov yuborish" searches this rather than `/team/`: the whole point is to reach somebody who is *not* in this workspace. Restricted to the org, so a workspace can only ever ask people who share an owner with it — never the whole of WEEL.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceOrgPeopleList
   * @summary Search people in the org's other workspaces
   * @request GET:/b2b/workspace/org/people/
   * @secure
   */
  export namespace B2BWorkspaceOrgPeopleList {
    export type RequestParams = {};
    export type RequestQuery = {
      search?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceOrgPeopleListData;
  }

  /**
   * @description GET  /api/b2b/workspace/requests/ — the inbox and the sent list. POST /api/b2b/workspace/requests/ — ask somebody to come and help.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceRequestsList
   * @summary Requests received and sent
   * @request GET:/b2b/workspace/requests/
   * @secure
   */
  export namespace B2BWorkspaceRequestsList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceRequestsListData;
  }

  /**
   * @description GET  /api/b2b/workspace/requests/ — the inbox and the sent list. POST /api/b2b/workspace/requests/ — ask somebody to come and help.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceRequestsCreate1
   * @summary Ask somebody from another workspace for help
   * @request POST:/b2b/workspace/requests/
   * @secure
   */
  export namespace B2BWorkspaceRequestsCreate1 {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = SecondmentRequestCreate;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceRequestsCreate1Data;
  }

  /**
   * @description POST /api/b2b/workspace/requests/<id>/<accept|decline|cancel>/
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceRequestsCreate2
   * @summary Accept, decline or cancel a request
   * @request POST:/b2b/workspace/requests/{request_id}/{action}/
   * @secure
   */
  export namespace B2BWorkspaceRequestsCreate2 {
    export type RequestParams = {
      requestId: string;
      action: string;
    };
    export type RequestQuery = {};
    export type RequestBody = SecondmentDecline;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceRequestsCreate2Data;
  }

  /**
   * @description GET /api/b2b/workspace/storage/ — how much of the 5 GB is gone. Read by everyone, not just the owner: an employee about to upload a video needs to know it will be refused before they spend the data sending it.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceStorageList
   * @summary Company storage usage and quota
   * @request GET:/b2b/workspace/storage/
   * @secure
   */
  export namespace B2BWorkspaceStorageList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceStorageListData;
  }

  /**
   * @description GET/POST ``support/`` — the employee's own thread with WEEL support. No capability and no thread id. Every employee has exactly one conversation, it is scoped to whoever is calling, and it is created by the first message rather than by an explicit "open a ticket" step — a help desk that asks you to file a ticket before you can describe the problem is one people give up on. Reading it also marks support's replies seen, because opening the screen is what seeing them means; there is no separate "read" call for the app to forget to make.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceSupportList
   * @summary The caller's support conversation
   * @request GET:/b2b/workspace/support/
   * @secure
   */
  export namespace B2BWorkspaceSupportList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceSupportListData;
  }

  /**
   * @description GET/POST ``support/`` — the employee's own thread with WEEL support. No capability and no thread id. Every employee has exactly one conversation, it is scoped to whoever is calling, and it is created by the first message rather than by an explicit "open a ticket" step — a help desk that asks you to file a ticket before you can describe the problem is one people give up on. Reading it also marks support's replies seen, because opening the screen is what seeing them means; there is no separate "read" call for the app to forget to make.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceSupportCreate
   * @summary Write to support
   * @request POST:/b2b/workspace/support/
   * @secure
   */
  export namespace B2BWorkspaceSupportCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = SupportMessageCreate;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceSupportCreateData;
  }

  /**
   * @description GET  /api/b2b/workspace/switch/ — the workspaces this person can open. POST /api/b2b/workspace/switch/ — tokens for one of them. Signing in always lands on the workspace that hired you; this is how somebody gets to one they were lent to. A separate token per workspace rather than one token that carries a workspace header: every row in this schema references `b2b_employee(id)`, so "which workspace am I in" and "which employee am I" are the same question, and answering it once at sign-in is what keeps the other two hundred queries honest.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceSwitchList
   * @summary Workspaces this person can open
   * @request GET:/b2b/workspace/switch/
   * @secure
   */
  export namespace B2BWorkspaceSwitchList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceSwitchListData;
  }

  /**
   * @description GET  /api/b2b/workspace/switch/ — the workspaces this person can open. POST /api/b2b/workspace/switch/ — tokens for one of them. Signing in always lands on the workspace that hired you; this is how somebody gets to one they were lent to. A separate token per workspace rather than one token that carries a workspace header: every row in this schema references `b2b_employee(id)`, so "which workspace am I in" and "which employee am I" are the same question, and answering it once at sign-in is what keeps the other two hundred queries honest.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceSwitchCreate
   * @summary Get tokens for another workspace
   * @request POST:/b2b/workspace/switch/
   * @secure
   */
  export namespace B2BWorkspaceSwitchCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceSwitchCreateData;
  }

  /**
   * @description GET  /api/b2b/workspace/tasks/ — the company's whole board, whatever the caller's role; the app's "Menikilar" toggle narrows it client-side. POST /api/b2b/workspace/tasks/ — managers only.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceTasksList
   * @summary List tasks (every role sees the whole company board)
   * @request GET:/b2b/workspace/tasks/
   * @secure
   */
  export namespace B2BWorkspaceTasksList {
    export type RequestParams = {};
    export type RequestQuery = {
      status?: "todo" | "in_progress" | "done";
      search?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceTasksListData;
  }

  /**
   * @description GET  /api/b2b/workspace/tasks/ — the company's whole board, whatever the caller's role; the app's "Menikilar" toggle narrows it client-side. POST /api/b2b/workspace/tasks/ — managers only.
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
   * @description GET /api/b2b/workspace/tasks/activity/ The company-wide feed the tasks page shows: every create/edit/status/ assign/delete across every task, newest first — including tasks since deleted, since the log outlives the row it was written about. Everyone sees everyone's actions, the same boundary ``list_tasks`` draws for the task list itself (see ``WorkspaceUser.task_scope``).
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceTasksActivityList
   * @summary Company-wide task activity feed
   * @request GET:/b2b/workspace/tasks/activity/
   * @secure
   */
  export namespace B2BWorkspaceTasksActivityList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceTasksActivityListData;
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
   * @description POST /api/b2b/workspace/tasks/<id>/status/ The one write an employee always has: moving a task they were given from todo → in progress → done.
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
   * @description POST/DELETE /api/b2b/workspace/tasks/<id>/voice/ — the task's voice note. Its own endpoint rather than a field on the create call: a task is created as JSON and a clip is multipart, and folding the two together would mean every task write carried a file parser it does not need. The app posts the task, gets its id, and sends the recording straight after. A task carries at most one clip. Posting a second replaces the first, bytes and all — re-recording is the common case, and leaving the earlier attempt on the company's quota is not what "replace" means.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceTasksVoiceCreate
   * @summary Attach a voice note to a task
   * @request POST:/b2b/workspace/tasks/{task_id}/voice/
   * @secure
   */
  export namespace B2BWorkspaceTasksVoiceCreate {
    export type RequestParams = {
      taskId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = {
      /** @format binary */
      file: File;
      duration_ms?: number;
    };
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceTasksVoiceCreateData;
  }

  /**
   * @description POST/DELETE /api/b2b/workspace/tasks/<id>/voice/ — the task's voice note. Its own endpoint rather than a field on the create call: a task is created as JSON and a clip is multipart, and folding the two together would mean every task write carried a file parser it does not need. The app posts the task, gets its id, and sends the recording straight after. A task carries at most one clip. Posting a second replaces the first, bytes and all — re-recording is the common case, and leaving the earlier attempt on the company's quota is not what "replace" means.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceTasksVoiceDelete
   * @summary Remove a task's voice note
   * @request DELETE:/b2b/workspace/tasks/{task_id}/voice/
   * @secure
   */
  export namespace B2BWorkspaceTasksVoiceDelete {
    export type RequestParams = {
      taskId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceTasksVoiceDeleteData;
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

  /**
   * @description GET /api/b2b/workspace/trash/ — what has been deleted and can come back. Behind a permission of its own rather than shown to everybody: the TZ says an ordinary user does not see deleted objects at all, and a bin that anybody can read is a way to see the deal somebody removed this morning.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceTrashList
   * @summary Deleted tasks and deals
   * @request GET:/b2b/workspace/trash/
   * @secure
   */
  export namespace B2BWorkspaceTrashList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceTrashListData;
  }

  /**
   * @description POST /api/b2b/workspace/trash/<kind>/<id>/restore/ — put one back.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceTrashRestoreCreate
   * @summary Restore a deleted object
   * @request POST:/b2b/workspace/trash/{kind}/{object_id}/restore/
   * @secure
   */
  export namespace B2BWorkspaceTrashRestoreCreate {
    export type RequestParams = {
      kind: string;
      objectId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceTrashRestoreCreateData;
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
   * @description GET /api/hotels/ — browse the catalogue without checking availability.
   * @tags api
   * @name HotelsList
   * @request GET:/hotels/
   * @secure
   */
  export namespace HotelsList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = HotelsListData;
  }

  /**
   * @description Hotelios refuses a booking with error 4303 once balance plus allowed credit runs out, so this needs to be visible before a guest finds out for us.
   * @tags api
   * @name HotelsBalanceList
   * @summary GET /api/hotels/balance/ — the credit bookings are drawn against.
   * @request GET:/hotels/balance/
   * @secure
   */
  export namespace HotelsBalanceList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = HotelsBalanceListData;
  }

  /**
   * @description POST holds the rooms; it does not send them to the hotel. That is the separate confirm step, which is what a completed payment triggers.
   * @tags api
   * @name HotelsBookingsList
   * @summary GET/POST /api/hotels/bookings/ — this caller's bookings, and new holds.
   * @request GET:/hotels/bookings/
   * @secure
   */
  export namespace HotelsBookingsList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = HotelsBookingsListData;
  }

  /**
   * @description POST holds the rooms; it does not send them to the hotel. That is the separate confirm step, which is what a completed payment triggers.
   * @tags api
   * @name HotelsBookingsCreate
   * @summary GET/POST /api/hotels/bookings/ — this caller's bookings, and new holds.
   * @request POST:/hotels/bookings/
   * @secure
   */
  export namespace HotelsBookingsCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CreateHotelBooking;
    export type RequestHeaders = {};
    export type ResponseBody = HotelsBookingsCreateData;
  }

  /**
   * @description GET /api/hotels/bookings/{guid}/ — with `?refresh=1` to re-read upstream.
   * @tags api
   * @name HotelsBookingsRead
   * @request GET:/hotels/bookings/{guid}/
   * @secure
   */
  export namespace HotelsBookingsRead {
    export type RequestParams = {
      guid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = HotelsBookingsReadData;
  }

  /**
   * @description Same operation for clients that cannot issue a DELETE.
   * @tags api
   * @name HotelsBookingsCancelCreate
   * @request POST:/hotels/bookings/{guid}/cancel/
   * @secure
   */
  export namespace HotelsBookingsCancelCreate {
    export type RequestParams = {
      guid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = HotelsBookingsCancelCreateData;
  }

  /**
   * @description Whether it costs anything is decided by the room's cancellation policy, which was recorded on the room line when the booking was made.
   * @tags api
   * @name HotelsBookingsCancelDelete
   * @summary DELETE /api/hotels/bookings/{guid}/cancel/ — cancel with the provider.
   * @request DELETE:/hotels/bookings/{guid}/cancel/
   * @secure
   */
  export namespace HotelsBookingsCancelDelete {
    export type RequestParams = {
      guid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = HotelsBookingsCancelDeleteData;
  }

  /**
   * @description Works exactly once, and is the step that makes the reservation real.
   * @tags api
   * @name HotelsBookingsConfirmCreate
   * @summary POST /api/hotels/bookings/{guid}/confirm/ — send it to the hotel.
   * @request POST:/hotels/bookings/{guid}/confirm/
   * @secure
   */
  export namespace HotelsBookingsConfirmCreate {
    export type RequestParams = {
      guid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = HotelsBookingsConfirmCreateData;
  }

  /**
   * @description GET /api/hotels/bookings/{guid}/events/ — the status history.
   * @tags api
   * @name HotelsBookingsEventsList
   * @request GET:/hotels/bookings/{guid}/events/
   * @secure
   */
  export namespace HotelsBookingsEventsList {
    export type RequestParams = {
      guid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = HotelsBookingsEventsListData;
  }

  /**
   * @description POST /api/hotels/bookings/{guid}/refresh/.
   * @tags api
   * @name HotelsBookingsRefreshCreate
   * @request POST:/hotels/bookings/{guid}/refresh/
   * @secure
   */
  export namespace HotelsBookingsRefreshCreate {
    export type RequestParams = {
      guid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = HotelsBookingsRefreshCreateData;
  }

  /**
   * @description GET /api/hotels/bookings/{guid}/rooms/ — the priced room lines.
   * @tags api
   * @name HotelsBookingsRoomsList
   * @request GET:/hotels/bookings/{guid}/rooms/
   * @secure
   */
  export namespace HotelsBookingsRoomsList {
    export type RequestParams = {
      guid: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = HotelsBookingsRoomsListData;
  }

  /**
   * @description GET /api/hotels/cities/ — cities that actually have bookable hotels.
   * @tags api
   * @name HotelsCitiesList
   * @request GET:/hotels/cities/
   * @secure
   */
  export namespace HotelsCitiesList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = HotelsCitiesListData;
  }

  /**
   * @description GET /api/hotels/monthly-summary/?year=&month= — B2B only.
   * @tags api
   * @name HotelsMonthlySummaryList
   * @request GET:/hotels/monthly-summary/
   * @secure
   */
  export namespace HotelsMonthlySummaryList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = HotelsMonthlySummaryListData;
  }

  /**
   * @description Mandatory before booking, and the `quote_id` it returns is only good for about an hour, so this belongs immediately before the payment screen.
   * @tags api
   * @name HotelsQuoteCreate
   * @summary POST /api/hotels/quote/ — confirm price and availability, open a quote.
   * @request POST:/hotels/quote/
   * @secure
   */
  export namespace HotelsQuoteCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = Quote;
    export type RequestHeaders = {};
    export type ResponseBody = HotelsQuoteCreateData;
  }

  /**
   * @description Hotels in cities this company has booked before, top-rated first, minus hotels it's currently staying at. A company with no history yet gets the overall top-rated catalogue instead of an empty widget.
   * @tags api
   * @name HotelsRecommendationsList
   * @summary GET /api/hotels/recommendations/?limit= — B2B only.
   * @request GET:/hotels/recommendations/
   * @secure
   */
  export namespace HotelsRecommendationsList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = HotelsRecommendationsListData;
  }

  /**
   * @description GET /api/hotels/reference/{name}/ — a synced lookup list.
   * @tags api
   * @name HotelsReferenceRead
   * @request GET:/hotels/reference/{name}/
   * @secure
   */
  export namespace HotelsReferenceRead {
    export type RequestParams = {
      name: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = HotelsReferenceReadData;
  }

  /**
   * @description The result carries only hotel ids and room options, so the hotel cards are joined in from our synced copy: that is the whole point of the sync, and it saves the apps a second round trip per result.
   * @tags api
   * @name HotelsSearchCreate
   * @summary POST /api/hotels/search/ — live availability and prices.
   * @request POST:/hotels/search/
   * @secure
   */
  export namespace HotelsSearchCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = HotelSearch;
    export type RequestHeaders = {};
    export type ResponseBody = HotelsSearchCreateData;
  }

  /**
   * @description GET /api/hotels/sync-status/ — how the inventory imports are going.
   * @tags api
   * @name HotelsSyncStatusList
   * @request GET:/hotels/sync-status/
   * @secure
   */
  export namespace HotelsSyncStatusList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = HotelsSyncStatusListData;
  }

  /**
   * @description GET /api/hotels/top-by-bookings/?limit= — B2B only.
   * @tags api
   * @name HotelsTopByBookingsList
   * @request GET:/hotels/top-by-bookings/
   * @secure
   */
  export namespace HotelsTopByBookingsList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = HotelsTopByBookingsListData;
  }

  /**
   * @description GET /api/hotels/{hotel_id}/ — the hotel card, with its room types.
   * @tags api
   * @name HotelsRead
   * @request GET:/hotels/{hotel_id}/
   * @secure
   */
  export namespace HotelsRead {
    export type RequestParams = {
      hotelId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = HotelsReadData;
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

export namespace Property {
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
