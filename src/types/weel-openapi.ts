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

export interface OwnershipRequestDecision {
  /** Action */
  action: "approve" | "reject";
  /**
   * Note
   * @default ""
   */
  note?: string;
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
   * @maxLength 25
   * @pattern ^[A-Za-z][A-Za-z \-']*$
   */
  first_name: string;
  /**
   * Last name
   * @minLength 1
   * @maxLength 25
   * @pattern ^[A-Za-z][A-Za-z \-']*$
   */
  last_name: string;
  /**
   * Middle name
   * @minLength 1
   * @maxLength 25
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
  /** Order note */
  order_note?: "specialbuyercontacts";
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
  role?: "owner" | "performer" | "lider" | "employee" | "guest";
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

export interface WorkspaceRefresh {
  /**
   * Refresh
   * @minLength 1
   */
  refresh: string;
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

export interface Generate {
  /** Period */
  period: "day" | "week" | "month" | "year";
}

export interface Discuss {
  /**
   * Question
   * @maxLength 4000
   */
  question?: string;
}

export interface AiSend {
  /**
   * Text
   * @minLength 1
   * @maxLength 100000
   */
  text: string;
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
   * Photo
   * @minLength 1
   */
  photo?: string | null;
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
   * Checked out at
   * @format date-time
   */
  checked_out_at?: string | null;
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
  /**
   * My checked in at
   * @format date-time
   */
  my_checked_in_at?: string | null;
  /**
   * My checked out at
   * @format date-time
   */
  my_checked_out_at?: string | null;
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

export interface AttendanceCheckOut {
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

export interface CallCreate {
  /**
   * Type
   * @default "video"
   */
  type?: "audio" | "video";
  /**
   * Source module
   * @default "chat"
   */
  source_module?: "chat" | "crm" | "sales";
  /** Thread id */
  thread_id?: number | null;
  /** Target employee id */
  target_employee_id?: number | null;
  /** Lead id */
  lead_id?: number | null;
  /** Customer id */
  customer_id?: number | null;
}

export interface Call {
  /** Id */
  id: number;
  /**
   * Room name
   * @minLength 1
   */
  room_name: string;
  /**
   * Type
   * @minLength 1
   */
  type: string;
  /**
   * Source module
   * @minLength 1
   */
  source_module: string;
  /**
   * Status
   * @minLength 1
   */
  status: string;
  /** Thread id */
  thread_id?: number | null;
  /** Lead id */
  lead_id?: number | null;
  /** Customer id */
  customer_id?: number | null;
  /**
   * Started at
   * @format date-time
   */
  started_at: string;
  /**
   * Answered at
   * @format date-time
   */
  answered_at?: string | null;
  /**
   * Ended at
   * @format date-time
   */
  ended_at?: string | null;
  /** Duration seconds */
  duration_seconds?: number | null;
  /**
   * Server url
   * @minLength 1
   */
  server_url: string;
  /** Ring timeout seconds */
  ring_timeout_seconds: number;
  /**
   * Token
   * @minLength 1
   */
  token?: string | null;
  /**
   * Token expires at
   * @format date-time
   */
  token_expires_at?: string | null;
  /**
   * Guest link
   * @minLength 1
   */
  guest_link?: string | null;
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
  /**
   * Edited at
   * @format date-time
   */
  edited_at?: string | null;
  /** Forwarded from id */
  forwarded_from_id?: number | null;
  /**
   * Forwarded from name
   * @minLength 1
   */
  forwarded_from_name?: string | null;
  /**
   * Pinned at
   * @format date-time
   */
  pinned_at?: string | null;
};

export interface ChatThread {
  /** Id */
  id: number;
  /**
   * Kind
   * @minLength 1
   */
  kind?: string;
  /**
   * Group name
   * @minLength 1
   */
  group_name?: string | null;
  /**
   * Photo
   * @minLength 1
   */
  photo?: string | null;
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

export interface ChatGroupMember {
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
  /**
   * Is online
   * @default false
   */
  is_online?: boolean;
  /**
   * Last seen at
   * @minLength 1
   */
  last_seen_at?: string | null;
  /**
   * Member role
   * @minLength 1
   */
  member_role: string;
}

export interface ChatGroup {
  /** Id */
  id: number;
  /**
   * Group name
   * @minLength 1
   */
  group_name?: string | null;
  /**
   * Photo
   * @minLength 1
   */
  photo?: string | null;
  /** Created by */
  created_by?: number | null;
  /**
   * Created at
   * @minLength 1
   */
  created_at?: string | null;
  /** Member count */
  member_count: number;
  /**
   * My role
   * @minLength 1
   */
  my_role: string;
  /** Can manage */
  can_manage: boolean;
  members: ChatGroupMember[];
}

export interface ThreadMembers {
  member_ids: number[];
}

export interface ThreadMemberRole {
  /** Role */
  role: "admin" | "member";
}

export interface MessageEdit {
  /**
   * Text
   * @minLength 1
   * @maxLength 4000
   */
  text: string;
}

export interface MessageReaction {
  /**
   * Emoji
   * @minLength 1
   * @maxLength 16
   */
  emoji: string;
}

export interface OwnershipRequest {
  /** Kind */
  kind: "transfer" | "close";
  /** Target employee id */
  target_employee_id?: number | null;
  /**
   * Reason
   * @default ""
   */
  reason?: string;
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
    | "lost"
    | "archived";
  /** Status */
  status: "new" | "in_progress" | "completed";
  /** Kind */
  kind?: "lead" | "quick_sale";
  /** Payment method */
  payment_method?:
    | "cash"
    | "card"
    | "transfer"
    | "installment"
    | "other"
    | null;
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

export interface WorkspaceDeleteRequest {
  /**
   * Reason
   * @default ""
   */
  reason?: string;
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

export interface EmployeeOfMonthList {
  results: EmployeeOfMonth[];
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
  employee_ids?: number[];
  /** Employee id */
  employee_id?: number;
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

export interface EmployeeRemove {
  /**
   * Scope
   * @default "workspace"
   */
  scope?: "workspace" | "company";
}

export interface EmployeeStats {
  /** Employee id */
  employee_id: number;
  /** Tasks done */
  tasks_done: number;
  /** Tasks in progress */
  tasks_in_progress: number;
  /** Tasks todo */
  tasks_todo: number;
  /** Tasks overdue */
  tasks_overdue: number;
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

export type MetaSetup = {
  /** Uses own app */
  uses_own_app: boolean;
  /**
   * App id
   * @minLength 1
   */
  app_id?: string | null;
  /**
   * Redirect uri
   * @minLength 1
   */
  redirect_uri: string;
  /**
   * Webhook url
   * @minLength 1
   */
  webhook_url: string;
  /**
   * Verify token
   * @minLength 1
   */
  verify_token?: string | null;
};

export interface IntegrationPage {
  /** Id */
  id: number;
  /**
   * Page id
   * @minLength 1
   */
  page_id: string;
  /**
   * Page name
   * @minLength 1
   */
  page_name: string;
  /** Is active */
  is_active: boolean;
  /** Subscribed */
  subscribed: boolean;
  /** Lead count */
  lead_count: number;
  /**
   * Last lead at
   * @format date-time
   */
  last_lead_at?: string | null;
  /**
   * Last error
   * @minLength 1
   */
  last_error?: string | null;
}

export interface Integration {
  /**
   * Provider
   * @minLength 1
   */
  provider: string;
  /**
   * Name
   * @minLength 1
   */
  name: string;
  /**
   * Status
   * @minLength 1
   */
  status: string;
  /** Connected */
  connected: boolean;
  /**
   * Available
   * Whether the server is configured for this provider at all.
   */
  available: boolean;
  /**
   * Account name
   * @minLength 1
   */
  account_name?: string | null;
  /**
   * Connected at
   * @format date-time
   */
  connected_at?: string | null;
  /**
   * Connected by
   * @minLength 1
   */
  connected_by?: string | null;
  /**
   * Last sync at
   * @format date-time
   */
  last_sync_at?: string | null;
  /**
   * Last error
   * @minLength 1
   */
  last_error?: string | null;
  /** Lead count */
  lead_count: number;
  /**
   * Token expires at
   * @format date-time
   */
  token_expires_at?: string | null;
  setup: MetaSetup;
  pages: IntegrationPage[];
  /** Ai */
  ai?: string;
}

export interface IntegrationList {
  results: Integration[];
  /** Can manage */
  can_manage: boolean;
}

export interface MetaApp {
  /**
   * App id
   * @minLength 1
   * @maxLength 64
   */
  app_id: string;
  /**
   * App secret
   * @minLength 1
   * @maxLength 200
   */
  app_secret: string;
  /**
   * Verify token
   * @maxLength 120
   */
  verify_token?: string;
}

export interface MetaConnect {
  /**
   * Authorize url
   * @minLength 1
   */
  authorize_url: string;
  /**
   * State
   * @minLength 1
   */
  state: string;
  /** Expires in */
  expires_in: number;
}

export interface PageToggle {
  /** Is active */
  is_active: boolean;
}

export interface AiConnect {
  /**
   * Api key
   * @minLength 1
   * @maxLength 400
   */
  api_key: string;
}

export interface AiModel {
  /**
   * Model
   * @minLength 1
   * @maxLength 120
   */
  model: string;
}

export interface AiConversation {
  /** Id */
  id: number;
  /**
   * Title
   * @minLength 1
   */
  title: string;
  /** Project id */
  project_id?: number | null;
  /**
   * Project name
   * @minLength 1
   */
  project_name?: string | null;
  /**
   * Model
   * @minLength 1
   */
  model?: string | null;
  /**
   * Source
   * @minLength 1
   */
  source: string;
  /** Message count */
  message_count: number;
  /**
   * Last message at
   * @format date-time
   */
  last_message_at?: string | null;
  /**
   * Created at
   * @format date-time
   */
  created_at?: string | null;
}

export interface AiConversationList {
  results: AiConversation[];
  /** Count */
  count: number;
}

export interface AiNewConversation {
  /**
   * Title
   * @maxLength 300
   */
  title?: string;
  /** Project id */
  project_id?: number | null;
}

export interface AiMessage {
  /** Id */
  id: number;
  /**
   * Role
   * @minLength 1
   */
  role: string;
  /**
   * Text
   * @minLength 1
   */
  text: string;
  /**
   * Sent at
   * @format date-time
   */
  sent_at?: string | null;
}

export interface AiConversationDetail {
  /** Id */
  id: number;
  /**
   * Title
   * @minLength 1
   */
  title: string;
  /** Project id */
  project_id?: number | null;
  /**
   * Project name
   * @minLength 1
   */
  project_name?: string | null;
  /**
   * Model
   * @minLength 1
   */
  model?: string | null;
  /**
   * Source
   * @minLength 1
   */
  source: string;
  /** Message count */
  message_count: number;
  /**
   * Last message at
   * @format date-time
   */
  last_message_at?: string | null;
  /**
   * Created at
   * @format date-time
   */
  created_at?: string | null;
  messages: AiMessage[];
}

export interface AiImportResult {
  /** Projects */
  projects: number;
  /** Chats created */
  chats_created: number;
  /** Chats updated */
  chats_updated: number;
  /** Messages */
  messages: number;
  integration: Integration;
}

export interface AiProject {
  /** Id */
  id: number;
  /**
   * Name
   * @minLength 1
   */
  name: string;
  /**
   * Description
   * @minLength 1
   */
  description?: string | null;
  /**
   * Instructions
   * @minLength 1
   */
  instructions?: string | null;
  /** Chat count */
  chat_count: number;
  /**
   * Created at
   * @format date-time
   */
  created_at?: string | null;
}

export interface AiProjectList {
  results: AiProject[];
}

export interface Category {
  /** Id */
  id: number;
  /**
   * Name
   * @minLength 1
   */
  name: string;
  /** Parent id */
  parent_id?: number | null;
  /** Position */
  position: number;
  /** Product count */
  product_count?: number;
}

export interface CategoryWrite {
  /**
   * Name
   * @minLength 1
   * @maxLength 200
   */
  name: string;
  /** Parent id */
  parent_id?: number | null;
}

export interface CategoryPatch {
  /**
   * Name
   * @minLength 1
   * @maxLength 200
   */
  name?: string;
  /** Parent id */
  parent_id?: number | null;
  /** Position */
  position?: number;
}

export interface DocumentItem {
  /** Id */
  id: number;
  /** Product id */
  product_id: number;
  /**
   * Product name
   * @minLength 1
   */
  product_name?: string;
  /**
   * Product kind
   * @minLength 1
   */
  product_kind?: string;
  /**
   * Sku
   * @minLength 1
   */
  sku?: string | null;
  /**
   * Unit
   * @minLength 1
   */
  unit?: string;
  /**
   * Quantity
   * @format decimal
   */
  quantity: string;
  /**
   * System quantity
   * @format decimal
   */
  system_quantity?: string | null;
  /**
   * Counted quantity
   * @format decimal
   */
  counted_quantity?: string | null;
  /**
   * Difference
   * @format decimal
   */
  difference?: string;
  /**
   * Unit cost
   * @format decimal
   */
  unit_cost?: string | null;
  /**
   * Old price
   * @format decimal
   */
  old_price?: string | null;
  /**
   * New price
   * @format decimal
   */
  new_price?: string | null;
  /**
   * Old wholesale
   * @format decimal
   */
  old_wholesale?: string | null;
  /**
   * New wholesale
   * @format decimal
   */
  new_wholesale?: string | null;
  /** Lead item id */
  lead_item_id?: number | null;
}

export interface InventoryDocument {
  /** Id */
  id: number;
  /** Kind */
  kind:
    | "receipt"
    | "transfer"
    | "inventory"
    | "write_off"
    | "revaluation"
    | "sale"
    | "return";
  /**
   * Kind label
   * @minLength 1
   */
  kind_label?: string;
  /**
   * Number
   * @minLength 1
   */
  number?: string | null;
  /** Status */
  status: "draft" | "sent" | "pending" | "confirmed" | "cancelled";
  /** Warehouse id */
  warehouse_id?: number | null;
  /**
   * Warehouse name
   * @minLength 1
   */
  warehouse_name?: string | null;
  /** To warehouse id */
  to_warehouse_id?: number | null;
  /**
   * To warehouse name
   * @minLength 1
   */
  to_warehouse_name?: string | null;
  /** Supplier id */
  supplier_id?: number | null;
  /**
   * Supplier name
   * @minLength 1
   */
  supplier_name?: string | null;
  /** Customer id */
  customer_id?: number | null;
  /**
   * Customer name
   * @minLength 1
   */
  customer_name?: string | null;
  /** Lead id */
  lead_id?: number | null;
  /**
   * Currency
   * @minLength 1
   */
  currency: string;
  /**
   * Extra costs
   * @format decimal
   */
  extra_costs: string;
  /**
   * Reason
   * @minLength 1
   */
  reason?: string | null;
  /**
   * Note
   * @minLength 1
   */
  note?: string | null;
  /**
   * Doc date
   * @format date
   */
  doc_date?: string | null;
  /**
   * External number
   * @minLength 1
   */
  external_number?: string | null;
  /** File id */
  file_id?: number | null;
  /** Reversal of */
  reversal_of?: number | null;
  /**
   * Reversal of number
   * @minLength 1
   */
  reversal_of_number?: string | null;
  /**
   * Cancel reason
   * @minLength 1
   */
  cancel_reason?: string | null;
  /** Author id */
  author_id?: number | null;
  /**
   * Author name
   * @minLength 1
   */
  author_name?: string | null;
  /**
   * Confirmed by name
   * @minLength 1
   */
  confirmed_by_name?: string | null;
  /**
   * Confirmed at
   * @format date-time
   */
  confirmed_at?: string | null;
  /**
   * Sent at
   * @format date-time
   */
  sent_at?: string | null;
  /**
   * Received at
   * @format date-time
   */
  received_at?: string | null;
  /**
   * Cancelled at
   * @format date-time
   */
  cancelled_at?: string | null;
  /**
   * Cancelled by name
   * @minLength 1
   */
  cancelled_by_name?: string | null;
  /** Line count */
  line_count: number;
  /**
   * Total
   * @format decimal
   */
  total?: string | null;
  /**
   * Quantity total
   * @format decimal
   */
  quantity_total: string;
  items?: DocumentItem[];
  /**
   * Created at
   * @format date-time
   */
  created_at: string;
}

export interface DocumentList {
  results: InventoryDocument[];
}

export interface DocumentItemWrite {
  /** Product id */
  product_id: number;
  /**
   * Quantity
   * @format decimal
   */
  quantity?: string | null;
  /**
   * Counted quantity
   * @format decimal
   */
  counted_quantity?: string | null;
  /**
   * Unit cost
   * @format decimal
   */
  unit_cost?: string | null;
  /**
   * New price
   * @format decimal
   */
  new_price?: string | null;
  /**
   * New wholesale
   * @format decimal
   */
  new_wholesale?: string | null;
}

export interface DocumentWrite {
  /** Kind */
  kind:
    | "receipt"
    | "transfer"
    | "inventory"
    | "write_off"
    | "revaluation"
    | "sale"
    | "return";
  /** Warehouse id */
  warehouse_id?: number | null;
  /** To warehouse id */
  to_warehouse_id?: number | null;
  /** Supplier id */
  supplier_id?: number | null;
  /** Customer id */
  customer_id?: number | null;
  /** Lead id */
  lead_id?: number | null;
  /**
   * Currency
   * @maxLength 3
   */
  currency?: string;
  /**
   * Extra costs
   * @format decimal
   */
  extra_costs?: string;
  /**
   * Reason
   * @maxLength 30
   */
  reason?: string | null;
  /**
   * Note
   * @maxLength 2000
   */
  note?: string | null;
  /**
   * Doc date
   * @format date
   */
  doc_date?: string | null;
  /**
   * External number
   * @maxLength 100
   */
  external_number?: string | null;
  /** File id */
  file_id?: number | null;
  /**
   * Idempotency key
   * @maxLength 80
   */
  idempotency_key?: string | null;
  items: DocumentItemWrite[];
  /**
   * Confirm
   * @default false
   */
  confirm?: boolean;
}

export interface DocumentPatch {
  /** Kind */
  kind?:
    | "receipt"
    | "transfer"
    | "inventory"
    | "write_off"
    | "revaluation"
    | "sale"
    | "return";
  /** Warehouse id */
  warehouse_id?: number | null;
  /** To warehouse id */
  to_warehouse_id?: number | null;
  /** Supplier id */
  supplier_id?: number | null;
  /** Customer id */
  customer_id?: number | null;
  /** Lead id */
  lead_id?: number | null;
  /**
   * Currency
   * @maxLength 3
   */
  currency?: string;
  /**
   * Extra costs
   * @format decimal
   */
  extra_costs?: string;
  /**
   * Reason
   * @maxLength 30
   */
  reason?: string | null;
  /**
   * Note
   * @maxLength 2000
   */
  note?: string | null;
  /**
   * Doc date
   * @format date
   */
  doc_date?: string | null;
  /**
   * External number
   * @maxLength 100
   */
  external_number?: string | null;
  /** File id */
  file_id?: number | null;
  /**
   * Idempotency key
   * @maxLength 80
   */
  idempotency_key?: string | null;
  items?: DocumentItemWrite[];
  /**
   * Confirm
   * @default false
   */
  confirm?: boolean;
}

export interface Cancel {
  /**
   * Reason
   * @minLength 1
   * @maxLength 1000
   */
  reason: string;
}

export interface StockChange {
  /** Product id */
  product_id: number;
  /**
   * Name
   * @minLength 1
   */
  name: string;
  /**
   * Unit
   * @minLength 1
   */
  unit?: string | null;
  /** Warehouse id */
  warehouse_id: number;
  /**
   * Warehouse name
   * @minLength 1
   */
  warehouse_name?: string | null;
  /**
   * Before
   * @format decimal
   */
  before: string;
  /**
   * After
   * @format decimal
   */
  after: string;
  /**
   * Change
   * @format decimal
   */
  change: string;
}

export interface ImportRow {
  /** Line */
  line?: number | null;
  /**
   * Action
   * @minLength 1
   */
  action: string;
  /** Name */
  name: string;
  /**
   * Kind
   * @minLength 1
   */
  kind?: string | null;
  /** Sku */
  sku?: string | null;
  /** Barcode */
  barcode?: string | null;
  /** Category */
  category?: string | null;
  /** Brand */
  brand?: string | null;
  /** Supplier */
  supplier?: string | null;
  /** Unit */
  unit?: string | null;
  /** Description */
  description?: string | null;
  /** Warehouse */
  warehouse?: string | null;
  /**
   * Purchase price
   * @format decimal
   */
  purchase_price?: string | null;
  /**
   * Sale price
   * @format decimal
   */
  sale_price?: string | null;
  /**
   * Wholesale price
   * @format decimal
   */
  wholesale_price?: string | null;
  /**
   * Min stock
   * @format decimal
   */
  min_stock?: string | null;
  /**
   * Initial quantity
   * @format decimal
   */
  initial_quantity?: string | null;
}

export interface ImportCommit {
  rows: ImportRow[];
  /**
   * Update existing
   * @default true
   */
  update_existing?: boolean;
  update_fields?: string[];
}

export interface Movement {
  /** Id */
  id: number;
  /** Kind */
  kind: "receipt" | "sale" | "write_off" | "transfer" | "adjustment" | "return";
  /** Product id */
  product_id: number;
  /**
   * Product name
   * @minLength 1
   */
  product_name?: string;
  /**
   * Sku
   * @minLength 1
   */
  sku?: string | null;
  /**
   * Unit
   * @minLength 1
   */
  unit?: string;
  /** Warehouse id */
  warehouse_id: number;
  /**
   * Warehouse name
   * @minLength 1
   */
  warehouse_name?: string;
  /** To warehouse id */
  to_warehouse_id?: number | null;
  /**
   * To warehouse name
   * @minLength 1
   */
  to_warehouse_name?: string | null;
  /**
   * Quantity
   * @format decimal
   */
  quantity: string;
  /**
   * Unit cost
   * @format decimal
   */
  unit_cost: string;
  /**
   * Cost price
   * @format decimal
   */
  cost_price?: string | null;
  /**
   * Currency
   * @minLength 1
   */
  currency?: string;
  /**
   * Note
   * @minLength 1
   */
  note?: string | null;
  /** Lead id */
  lead_id?: number | null;
  /** Document id */
  document_id?: number | null;
  /**
   * Document number
   * @minLength 1
   */
  document_number?: string | null;
  /**
   * Document kind
   * @minLength 1
   */
  document_kind?: string | null;
  /**
   * Document reason
   * @minLength 1
   */
  document_reason?: string | null;
  /** Reversal of */
  reversal_of?: number | null;
  /**
   * Supplier name
   * @minLength 1
   */
  supplier_name?: string | null;
  /**
   * Customer name
   * @minLength 1
   */
  customer_name?: string | null;
  /** Author id */
  author_id?: number | null;
  /**
   * Author name
   * @minLength 1
   */
  author_name?: string | null;
  /**
   * Created at
   * @format date-time
   */
  created_at: string;
}

export interface MovementList {
  results: Movement[];
}

export interface MovementWrite {
  /** Kind */
  kind: "receipt" | "sale" | "write_off" | "transfer" | "adjustment" | "return";
  /** Product id */
  product_id: number;
  /** Warehouse id */
  warehouse_id?: number | null;
  /** To warehouse id */
  to_warehouse_id?: number | null;
  /**
   * Quantity
   * @format decimal
   */
  quantity: string;
  /**
   * Unit cost
   * @format decimal
   */
  unit_cost?: string | null;
  /** Reason */
  reason?: "defect" | "loss" | "damage" | "internal_use" | "other" | null;
  /** Supplier id */
  supplier_id?: number | null;
  /**
   * Note
   * @maxLength 1000
   */
  note?: string | null;
  /**
   * Idempotency key
   * @maxLength 80
   */
  idempotency_key?: string | null;
}

export interface StockLine {
  /** Warehouse id */
  warehouse_id: number;
  /**
   * Warehouse name
   * @minLength 1
   */
  warehouse_name: string;
  /**
   * Quantity
   * @format decimal
   */
  quantity: string;
}

export interface Component {
  /** Component id */
  component_id: number;
  /**
   * Quantity
   * @format decimal
   */
  quantity: string;
  /**
   * Name
   * @minLength 1
   */
  name?: string;
  /**
   * Sku
   * @minLength 1
   */
  sku?: string | null;
  /**
   * Unit
   * @minLength 1
   */
  unit?: string;
}

export interface Product {
  /** Id */
  id: number;
  /** Kind */
  kind: "product" | "service" | "bundle";
  /**
   * Name
   * @minLength 1
   */
  name: string;
  /** Category id */
  category_id?: number | null;
  /**
   * Category name
   * @minLength 1
   */
  category_name?: string | null;
  /** Supplier id */
  supplier_id?: number | null;
  /**
   * Supplier name
   * @minLength 1
   */
  supplier_name?: string | null;
  /**
   * Brand
   * @minLength 1
   */
  brand?: string | null;
  /**
   * Sku
   * @minLength 1
   */
  sku?: string | null;
  /**
   * Barcode
   * @minLength 1
   */
  barcode?: string | null;
  /**
   * Unit
   * @minLength 1
   */
  unit: string;
  /**
   * Purchase price
   * @format decimal
   */
  purchase_price?: string | null;
  /**
   * Sale price
   * @format decimal
   */
  sale_price: string;
  /**
   * Wholesale price
   * @format decimal
   */
  wholesale_price?: string;
  /**
   * Markup percent
   * @format decimal
   */
  markup_percent?: string | null;
  /** Allow free price */
  allow_free_price?: boolean;
  /**
   * Min stock
   * @format decimal
   */
  min_stock: string;
  /**
   * Description
   * @minLength 1
   */
  description?: string | null;
  /** Attributes */
  attributes?: Record<string, string | null>;
  /** Parent id */
  parent_id?: number | null;
  /**
   * Parent name
   * @minLength 1
   */
  parent_name?: string | null;
  /**
   * Variant label
   * @minLength 1
   */
  variant_label?: string | null;
  /** Variant count */
  variant_count?: number;
  /**
   * Photo url
   * @minLength 1
   */
  photo_url?: string | null;
  /**
   * Currency
   * @minLength 1
   */
  currency?: string;
  /** Is active */
  is_active: boolean;
  /**
   * Stock total
   * @format decimal
   */
  stock_total: string;
  /**
   * Reserved
   * @format decimal
   */
  reserved: string;
  /**
   * Available
   * @format decimal
   */
  available: string;
  /**
   * Stock value
   * @format decimal
   */
  stock_value?: string | null;
  /** Is low */
  is_low: boolean;
  /** Is out */
  is_out: boolean;
  /**
   * Stock status
   * @minLength 1
   */
  stock_status: string;
  stocks: StockLine[];
  components?: Component[];
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

export interface ProductList {
  results: Product[];
  brands?: string[];
}

export interface ComponentWrite {
  /** Component id */
  component_id: number;
  /**
   * Quantity
   * @format decimal
   */
  quantity: string;
}

export interface ProductWrite {
  /**
   * Name
   * @minLength 1
   * @maxLength 300
   */
  name: string;
  /** Kind */
  kind?: "product" | "service" | "bundle";
  /** Category id */
  category_id?: number | null;
  /** Supplier id */
  supplier_id?: number | null;
  /**
   * Brand
   * @maxLength 200
   */
  brand?: string | null;
  /**
   * Sku
   * @maxLength 100
   */
  sku?: string | null;
  /**
   * Barcode
   * @maxLength 100
   */
  barcode?: string | null;
  /** Generate sku */
  generate_sku?: boolean;
  /** Generate barcode */
  generate_barcode?: boolean;
  /**
   * Unit
   * @maxLength 30
   */
  unit?: string;
  /**
   * Purchase price
   * @format decimal
   */
  purchase_price?: string;
  /**
   * Sale price
   * @format decimal
   */
  sale_price?: string | null;
  /**
   * Markup percent
   * @format decimal
   */
  markup_percent?: string | null;
  /**
   * Wholesale price
   * @format decimal
   */
  wholesale_price?: string;
  /** Allow free price */
  allow_free_price?: boolean;
  /**
   * Min stock
   * @format decimal
   */
  min_stock?: string;
  /** Description */
  description?: string | null;
  /** Attributes */
  attributes?: Record<string, string | null>;
  /** Parent id */
  parent_id?: number | null;
  /**
   * Variant label
   * @maxLength 200
   */
  variant_label?: string | null;
  /**
   * Currency
   * @maxLength 3
   */
  currency?: string;
  components?: ComponentWrite[];
  /**
   * Initial quantity
   * @format decimal
   */
  initial_quantity?: string | null;
  /** Initial warehouse id */
  initial_warehouse_id?: number | null;
}

export interface ProductPatch {
  /**
   * Name
   * @minLength 1
   * @maxLength 300
   */
  name?: string;
  /** Kind */
  kind?: "product" | "service" | "bundle";
  /** Category id */
  category_id?: number | null;
  /** Supplier id */
  supplier_id?: number | null;
  /**
   * Brand
   * @maxLength 200
   */
  brand?: string | null;
  /**
   * Sku
   * @maxLength 100
   */
  sku?: string | null;
  /**
   * Barcode
   * @maxLength 100
   */
  barcode?: string | null;
  /** Generate sku */
  generate_sku?: boolean;
  /** Generate barcode */
  generate_barcode?: boolean;
  /**
   * Unit
   * @maxLength 30
   */
  unit?: string;
  /**
   * Purchase price
   * @format decimal
   */
  purchase_price?: string;
  /**
   * Sale price
   * @format decimal
   */
  sale_price?: string | null;
  /**
   * Markup percent
   * @format decimal
   */
  markup_percent?: string | null;
  /**
   * Wholesale price
   * @format decimal
   */
  wholesale_price?: string;
  /** Allow free price */
  allow_free_price?: boolean;
  /**
   * Min stock
   * @format decimal
   */
  min_stock?: string;
  /** Description */
  description?: string | null;
  /** Attributes */
  attributes?: Record<string, string | null>;
  /** Parent id */
  parent_id?: number | null;
  /**
   * Variant label
   * @maxLength 200
   */
  variant_label?: string | null;
  /**
   * Currency
   * @maxLength 3
   */
  currency?: string;
  components?: ComponentWrite[];
  /**
   * Initial quantity
   * @format decimal
   */
  initial_quantity?: string | null;
  /** Initial warehouse id */
  initial_warehouse_id?: number | null;
  /** Is active */
  is_active?: boolean;
}

export interface PriceHistory {
  /** Id */
  id: number;
  /**
   * Field
   * @minLength 1
   */
  field: string;
  /**
   * Old price
   * @format decimal
   */
  old_price?: string | null;
  /**
   * New price
   * @format decimal
   */
  new_price?: string | null;
  /** Author id */
  author_id?: number | null;
  /**
   * Author name
   * @minLength 1
   */
  author_name?: string | null;
  /** Document id */
  document_id?: number | null;
  /**
   * Document number
   * @minLength 1
   */
  document_number?: string | null;
  /**
   * Created at
   * @format date-time
   */
  created_at: string;
}

export interface Settings {
  /** Allow backorder */
  allow_backorder: boolean;
  /**
   * Base currency
   * @minLength 1
   */
  base_currency: string;
  /**
   * Sku prefix
   * @minLength 1
   */
  sku_prefix: string;
  /**
   * Write off alert
   * @format decimal
   */
  write_off_alert: string;
}

export interface SettingsWrite {
  /** Allow backorder */
  allow_backorder?: boolean;
  /**
   * Base currency
   * @minLength 1
   * @maxLength 3
   */
  base_currency?: string;
  /**
   * Sku prefix
   * @maxLength 10
   */
  sku_prefix?: string;
  /**
   * Write off alert
   * @format decimal
   */
  write_off_alert?: string;
}

export interface DailyPoint {
  /**
   * Day
   * @format date
   */
  day: string;
  /**
   * Revenue
   * @format decimal
   */
  revenue: string;
  /**
   * Purchases
   * @format decimal
   */
  purchases: string;
}

export interface TopProduct {
  /** Product id */
  product_id: number;
  /**
   * Name
   * @minLength 1
   */
  name: string;
  /**
   * Unit
   * @minLength 1
   */
  unit: string;
  /**
   * Sold qty
   * @format decimal
   */
  sold_qty: string;
  /**
   * Revenue
   * @format decimal
   */
  revenue: string;
  /**
   * Profit
   * @format decimal
   */
  profit?: string | null;
}

export interface InventorySummary {
  /**
   * Date from
   * @format date-time
   */
  date_from: string;
  /**
   * Date to
   * @format date-time
   */
  date_to: string;
  /** Product count */
  product_count: number;
  /**
   * Quantity total
   * @format decimal
   */
  quantity_total: string;
  /**
   * Stock value
   * @format decimal
   */
  stock_value?: string | null;
  /**
   * Retail value
   * @format decimal
   */
  retail_value: string;
  /** Low stock count */
  low_stock_count: number;
  /** Out of stock count */
  out_of_stock_count: number;
  /** Sale count */
  sale_count: number;
  /**
   * Sold qty
   * @format decimal
   */
  sold_qty: string;
  /**
   * Revenue
   * @format decimal
   */
  revenue: string;
  /**
   * Cogs
   * @format decimal
   */
  cogs?: string | null;
  /**
   * Profit
   * @format decimal
   */
  profit?: string | null;
  /**
   * Received qty
   * @format decimal
   */
  received_qty: string;
  /**
   * Purchases
   * @format decimal
   */
  purchases?: string | null;
  /**
   * Written off qty
   * @format decimal
   */
  written_off_qty: string;
  /**
   * Write offs
   * @format decimal
   */
  write_offs?: string | null;
  /**
   * Returned qty
   * @format decimal
   */
  returned_qty: string;
  /**
   * Adjusted qty
   * @format decimal
   */
  adjusted_qty: string;
  /** Adjustment count */
  adjustment_count: number;
  /**
   * Turnover ratio
   * @format decimal
   */
  turnover_ratio?: string | null;
  daily: DailyPoint[];
  top_products: TopProduct[];
}

export interface Supplier {
  /** Id */
  id: number;
  /**
   * Name
   * @minLength 1
   */
  name: string;
  /**
   * Kind
   * @minLength 1
   */
  kind: string;
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
   * Requisites
   * @minLength 1
   */
  requisites?: string | null;
  /**
   * Note
   * @minLength 1
   */
  note?: string | null;
  /** Is active */
  is_active: boolean;
  /** Receipt count */
  receipt_count?: number;
  /**
   * Purchases
   * @format decimal
   */
  purchases?: string | null;
  /** Product count */
  product_count?: number;
  /**
   * Last receipt at
   * @format date-time
   */
  last_receipt_at?: string | null;
  /**
   * Created at
   * @format date-time
   */
  created_at: string;
}

export interface SupplierWrite {
  /**
   * Name
   * @minLength 1
   * @maxLength 300
   */
  name: string;
  /** Kind */
  kind?: "company" | "person";
  /**
   * Phone
   * @maxLength 40
   */
  phone?: string | null;
  /**
   * Email
   * @maxLength 254
   */
  email?: string | null;
  /** Requisites */
  requisites?: string | null;
  /** Note */
  note?: string | null;
}

export interface SupplierPatch {
  /**
   * Name
   * @minLength 1
   * @maxLength 300
   */
  name?: string;
  /** Kind */
  kind?: "company" | "person";
  /**
   * Phone
   * @maxLength 40
   */
  phone?: string | null;
  /**
   * Email
   * @maxLength 254
   */
  email?: string | null;
  /** Requisites */
  requisites?: string | null;
  /** Note */
  note?: string | null;
  /** Is active */
  is_active?: boolean;
}

export interface Warehouse {
  /** Id */
  id: number;
  /**
   * Name
   * @minLength 1
   */
  name: string;
  /**
   * Address
   * @minLength 1
   */
  address?: string | null;
  /** Is default */
  is_default: boolean;
  /** Is active */
  is_active: boolean;
  /** Product count */
  product_count?: number;
  /**
   * Quantity total
   * @format decimal
   */
  quantity_total?: string;
  /**
   * Stock value
   * @format decimal
   */
  stock_value?: string | null;
  /**
   * Created at
   * @format date-time
   */
  created_at: string;
}

export interface WarehouseWrite {
  /**
   * Name
   * @minLength 1
   * @maxLength 200
   */
  name: string;
  /** Address */
  address?: string | null;
  /** Is default */
  is_default?: boolean;
}

export interface WarehousePatch {
  /**
   * Name
   * @minLength 1
   * @maxLength 200
   */
  name?: string;
  /** Address */
  address?: string | null;
  /** Is default */
  is_default?: boolean;
  /** Is active */
  is_active?: boolean;
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
    | "lost"
    | "archived";
  /** Source */
  source: "website" | "call" | "referral" | "exhibition" | "manual" | "meta";
  /** Kind */
  kind?: "lead" | "quick_sale";
  /** Payment method */
  payment_method?:
    | "cash"
    | "card"
    | "transfer"
    | "installment"
    | "other"
    | null;
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
  /**
   * Due date
   * @format date-time
   */
  due_date?: string | null;
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
  /** Quality */
  quality?: "good" | "bad" | null;
  /** Customer id */
  customer_id?: number | null;
  /**
   * External id
   * @minLength 1
   */
  external_id?: string | null;
  /**
   * External form name
   * @minLength 1
   */
  external_form_name?: string | null;
  /** External data */
  external_data?: object | null;
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
  /** Product id */
  product_id?: number | null;
  /**
   * Qty
   * @format decimal
   */
  qty?: string | null;
  /** Warehouse id */
  warehouse_id?: number | null;
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
  /**
   * Due date
   * @format date-time
   */
  due_date?: string | null;
  /**
   * Kind
   * @default "lead"
   */
  kind?: "lead" | "quick_sale";
  /** Payment method */
  payment_method?:
    | "cash"
    | "card"
    | "transfer"
    | "installment"
    | "other"
    | null;
  /**
   * Idempotency key
   * @maxLength 80
   */
  idempotency_key?: string | null;
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
  /** Product id */
  product_id?: number | null;
  /**
   * Qty
   * @format decimal
   */
  qty?: string;
  /** Warehouse id */
  warehouse_id?: number | null;
}

export type LeadActivityAttachment = {
  /** Id */
  id: number;
  /**
   * Name
   * @minLength 1
   */
  name: string;
  /** Size */
  size: number;
  /**
   * Content type
   * @minLength 1
   */
  content_type?: string | null;
  /**
   * Url
   * @minLength 1
   */
  url: string;
};

export interface LeadActivity {
  /** Id */
  id: number;
  /** Kind */
  kind:
    | "created"
    | "claimed"
    | "assigned"
    | "stage"
    | "comment"
    | "completed"
    | "due_date"
    | "quality";
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
  attachment?: LeadActivityAttachment;
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

export interface TaskFile {
  /** Id */
  id: number;
  /**
   * Name
   * @minLength 1
   */
  name: string;
  /** Size */
  size: number;
  /**
   * Content type
   * @minLength 1
   */
  content_type?: string | null;
  /**
   * Url
   * @minLength 1
   */
  url: string;
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
  files?: TaskFile[];
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
    | "lost"
    | "archived";
  /** Source */
  source: "website" | "call" | "referral" | "exhibition" | "manual" | "meta";
  /** Kind */
  kind?: "lead" | "quick_sale";
  /** Payment method */
  payment_method?:
    | "cash"
    | "card"
    | "transfer"
    | "installment"
    | "other"
    | null;
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
  /**
   * Due date
   * @format date-time
   */
  due_date?: string | null;
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
  /** Quality */
  quality?: "good" | "bad" | null;
  /** Customer id */
  customer_id?: number | null;
  /**
   * External id
   * @minLength 1
   */
  external_id?: string | null;
  /**
   * External form name
   * @minLength 1
   */
  external_form_name?: string | null;
  /** External data */
  external_data?: object | null;
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

export interface LeadDueDateWrite {
  /**
   * Due date
   * @format date-time
   */
  due_date?: string | null;
}

export interface LeadQualityWrite {
  /** Quality */
  quality?: "good" | "bad" | null;
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

export type NoteVoice = {
  /** Id */
  id: number;
  /**
   * Name
   * @minLength 1
   */
  name: string;
  /** Size */
  size: number;
  /**
   * Content type
   * @minLength 1
   */
  content_type?: string | null;
  /** Duration ms */
  duration_ms?: number | null;
  /**
   * Url
   * @minLength 1
   */
  url: string;
};

export interface Note {
  /** Id */
  id: number;
  /** Kind */
  kind: "text" | "voice";
  /** Title */
  title: string;
  /** Body */
  body: string;
  /** Color */
  color: "green" | "violet" | "blue" | "orange" | "pink" | "red";
  /** Is pinned */
  is_pinned: boolean;
  /** Is shared */
  is_shared: boolean;
  /** Author id */
  author_id: number;
  voice?: NoteVoice;
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
  /** Can edit */
  can_edit: boolean;
}

export interface NoteWrite {
  /**
   * Title
   * @default ""
   */
  title?: string;
  /**
   * Body
   * @default ""
   */
  body?: string;
  /**
   * Kind
   * @default "text"
   */
  kind?: "text" | "voice";
  /**
   * Color
   * @default "green"
   */
  color?: "green" | "violet" | "blue" | "orange" | "pink" | "red";
  /**
   * Is shared
   * @default false
   */
  is_shared?: boolean;
}

export interface NotePatch {
  /** Title */
  title?: string;
  /** Body */
  body?: string;
  /** Color */
  color?: "green" | "violet" | "blue" | "orange" | "pink" | "red";
  /** Is pinned */
  is_pinned?: boolean;
  /** Is shared */
  is_shared?: boolean;
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

export interface ReportPeriod {
  /**
   * Period
   * @minLength 1
   */
  period: string;
  /**
   * Start
   * @format date-time
   */
  start: string;
  /**
   * End
   * @format date-time
   */
  end: string;
  /**
   * Bucket
   * @minLength 1
   */
  bucket: string;
}

export interface SalesStagePoint {
  /**
   * Stage
   * @minLength 1
   */
  stage: string;
  /** Count */
  count: number;
  /**
   * Amount
   * @minLength 1
   */
  amount: string;
}

export interface SalesSourcePoint {
  /**
   * Source
   * @minLength 1
   */
  source: string;
  /** Count */
  count: number;
  /** Won count */
  won_count: number;
  /**
   * Won amount
   * @minLength 1
   */
  won_amount: string;
}

export interface LostReasonPoint {
  /**
   * Reason
   * @minLength 1
   */
  reason: string;
  /** Count */
  count: number;
}

export interface SalesTrendPoint {
  /**
   * Date
   * @format date-time
   */
  date: string;
  /** Created count */
  created_count: number;
  /** Won count */
  won_count: number;
  /**
   * Won amount
   * @minLength 1
   */
  won_amount: string;
}

export interface SalesLeader {
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
  /** Won count */
  won_count: number;
  /**
   * Won amount
   * @minLength 1
   */
  won_amount: string;
}

export type SalesReport = {
  /** Created count */
  created_count: number;
  /** Won count */
  won_count: number;
  /** Lost count */
  lost_count: number;
  /** Open count */
  open_count: number;
  /**
   * Won amount
   * @minLength 1
   */
  won_amount: string;
  /**
   * Open amount
   * @minLength 1
   */
  open_amount: string;
  /** Conversion rate */
  conversion_rate: number;
  /**
   * Average deal
   * @minLength 1
   */
  average_deal: string;
  by_stage: SalesStagePoint[];
  by_source: SalesSourcePoint[];
  lost_reasons: LostReasonPoint[];
  trend: SalesTrendPoint[];
  leaders: SalesLeader[];
} | null;

export interface TaskPriorityPoint {
  /**
   * Priority
   * @minLength 1
   */
  priority: string;
  /** Count */
  count: number;
}

export interface TaskTrendPoint {
  /**
   * Date
   * @format date-time
   */
  date: string;
  /** Created count */
  created_count: number;
  /** Completed count */
  completed_count: number;
}

export interface TaskLeader {
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
  /** Completed count */
  completed_count: number;
  /** On time rate */
  on_time_rate: number;
}

export type TaskReport = {
  /** Created count */
  created_count: number;
  /** Completed count */
  completed_count: number;
  /** Open count */
  open_count: number;
  /** Todo count */
  todo_count: number;
  /** In progress count */
  in_progress_count: number;
  /** Overdue count */
  overdue_count: number;
  /** Due today count */
  due_today_count: number;
  /** On time rate */
  on_time_rate: number;
  by_priority: TaskPriorityPoint[];
  trend: TaskTrendPoint[];
  leaders: TaskLeader[];
} | null;

export interface EventTypePoint {
  /**
   * Event type
   * @minLength 1
   */
  event_type: string;
  /** Count */
  count: number;
}

export interface EventWeekdayPoint {
  /** Weekday */
  weekday: number;
  /** Count */
  count: number;
}

export interface EventTrendPoint {
  /**
   * Date
   * @format date-time
   */
  date: string;
  /** Count */
  count: number;
}

export type CalendarReport = {
  /** Total count */
  total_count: number;
  /** All day count */
  all_day_count: number;
  /** Upcoming count */
  upcoming_count: number;
  /** Hours */
  hours: number;
  by_type: EventTypePoint[];
  by_weekday: EventWeekdayPoint[];
  trend: EventTrendPoint[];
} | null;

export interface WorkspaceReport {
  period: ReportPeriod;
  /**
   * Scope
   * @minLength 1
   */
  scope: string;
  sales: SalesReport;
  tasks: TaskReport;
  calendar: CalendarReport;
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
  /**
   * Is online
   * @default false
   */
  is_online?: boolean;
  /**
   * Last seen at
   * @minLength 1
   */
  last_seen_at?: string | null;
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
   * @default "uzs"
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
  district: PrefectureDistrictList;
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
  region: RawRegion;
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
  region: RawRegion;
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

export type AdminAuthB2BOwnershipRequestsListData = any;

export type AdminAuthB2BOwnershipRequestsDecideCreateData = any;

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

export type B2BWorkspaceAccountTokenRefreshCreateData = any;

export type B2BWorkspaceAccountUsernameCheckListData = any;

export type B2BWorkspaceAccountUsernameSuggestionListData = any;

export type B2BWorkspaceAccountWorkspacesListData = any;

export type B2BWorkspaceAccountWorkspacesCreateData = WorkspaceCreate;

export type B2BWorkspaceAccountWorkspacesSearchListData = any;

export type B2BWorkspaceAccountWorkspacesOpenCreateData = any;

export type B2BWorkspaceAnalystListData = any;

export type B2BWorkspaceAnalystReportsListData = any;

export type B2BWorkspaceAnalystReportsCreateData = Generate;

export type B2BWorkspaceAnalystReportsReadData = any;

export type B2BWorkspaceAnalystReportsDiscussCreateData = Discuss;

export type B2BWorkspaceAnalystSeenCreateData = any;

export type B2BWorkspaceAppVersionListData = any;

export type B2BWorkspaceArchiveListData = any;

export type B2BWorkspaceAssistantListData = any;

export type B2BWorkspaceAssistantMessagesListData = any;

export type B2BWorkspaceAssistantMessagesCreateData = AiSend;

export type B2BWorkspaceAssistantMessagesDeleteData = any;

export type B2BWorkspaceAttendanceListData = AttendanceDay;

export type B2BWorkspaceAttendanceAbsenceCreateData = AttendanceDay;

export type B2BWorkspaceAttendanceCheckInCreateData = AttendanceDay;

export type B2BWorkspaceAttendanceCheckOutCreateData = AttendanceDay;

export type B2BWorkspaceAttendanceLocationListData = AttendanceLocation;

export type B2BWorkspaceAttendanceLocationUpdateData = AttendanceLocation;

export type B2BWorkspaceAttendanceCreateData = AttendanceDay;

export type B2BWorkspaceAuditListData = any;

export type B2BWorkspaceAuthLoginCreateData = any;

export type B2BWorkspaceAuthLoginVerifyCreateData = any;

export type B2BWorkspaceAuthLogoutCreateData = any;

export type B2BWorkspaceAuthTokenRefreshCreateData = any;

export type B2BWorkspaceCallsCreateData = Call;

export type B2BWorkspaceCallsHistoryListData = Call[];

export type B2BWorkspaceCallsIncomingListData = Call;

export type B2BWorkspaceCallsReadData = Call;

export type B2BWorkspaceCallsAcceptCreateData = Call;

export type B2BWorkspaceCallsDeclineCreateData = Call;

export type B2BWorkspaceCallsEndCreateData = Call;

export type B2BWorkspaceCallsTokenListData = Call;

export type B2BWorkspaceChatsListData = ChatThread[];

export type B2BWorkspaceChatsCreateData = ChatThread;

export type B2BWorkspaceChatsFlagsCreateData = ChatThread;

export type B2BWorkspaceChatsGroupListData = ChatGroup;

export type B2BWorkspaceChatsGroupPartialUpdateData = ChatGroup;

export type B2BWorkspaceChatsMembersCreateData = ChatGroup;

export type B2BWorkspaceChatsMembersPartialUpdateData = ChatGroup;

export type B2BWorkspaceChatsMembersDeleteData = ChatGroup;

export type B2BWorkspaceChatsMessagesListData = WorkspaceChatMessage[];

export type B2BWorkspaceChatsMessagesCreateData = WorkspaceChatMessage;

export type B2BWorkspaceChatsMessagesPartialUpdateData = WorkspaceChatMessage;

export type B2BWorkspaceChatsMessagesDeleteData = any;

export type B2BWorkspaceChatsMessagesPinCreateData = WorkspaceChatMessage;

export type B2BWorkspaceChatsMessagesPinDeleteData = WorkspaceChatMessage;

export type B2BWorkspaceChatsMessagesReactionsCreateData = WorkspaceChatMessage;

export type B2BWorkspaceChatsReadCreateData = any;

export type B2BWorkspaceCompanyOwnershipRequestsListData = any;

export type B2BWorkspaceCompanyOwnershipRequestsCreateData = OwnershipRequest;

export type B2BWorkspaceCrmCustomersListData = CrmCustomerList;

export type B2BWorkspaceCrmCustomersReadData = CrmCustomerDetail;

export type B2BWorkspaceCustomersListData = CustomerList;

export type B2BWorkspaceDeleteRequestsListData = any;

export type B2BWorkspaceDeleteRequestsCreate1Data = WorkspaceDeleteRequest;

export type B2BWorkspaceDeleteRequestsCreate2Data = any;

export type B2BWorkspaceEmployeeOfMonthListData = EmployeeOfMonthList;

export type B2BWorkspaceEmployeeOfMonthCreateData = EmployeeOfMonthList;

export type B2BWorkspaceEmployeeOfMonthStatsListData = EmployeeMonthlyStat[];

export type B2BWorkspaceEmployeesAccessListData = any;

export type B2BWorkspaceEmployeesAccessUpdateData = EmployeeAccess;

export type B2BWorkspaceEmployeesRemoveCreateData = EmployeeRemove;

export type B2BWorkspaceEmployeesStatsListData = EmployeeStats;

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

export type B2BWorkspaceIntegrationsListData = IntegrationList;

export type B2BWorkspaceIntegrationsMetaListData = Integration;

export type B2BWorkspaceIntegrationsMetaDeleteData = Integration;

export type B2BWorkspaceIntegrationsMetaAppListData = MetaSetup;

export type B2BWorkspaceIntegrationsMetaAppUpdateData = MetaSetup;

export type B2BWorkspaceIntegrationsMetaAppDeleteData = MetaSetup;

export type B2BWorkspaceIntegrationsMetaConnectCreateData = MetaConnect;

export type B2BWorkspaceIntegrationsMetaPagesPartialUpdateData = Integration;

export type B2BWorkspaceIntegrationsMetaSyncCreateData = any;

export type B2BWorkspaceIntegrationsReadData = Integration;

export type B2BWorkspaceIntegrationsCreateData = Integration;

export type B2BWorkspaceIntegrationsPartialUpdateData = Integration;

export type B2BWorkspaceIntegrationsDeleteData = Integration;

export type B2BWorkspaceIntegrationsConversationsListData = AiConversationList;

export type B2BWorkspaceIntegrationsConversationsCreateData =
  AiConversationDetail;

export type B2BWorkspaceIntegrationsConversationsReadData =
  AiConversationDetail;

export type B2BWorkspaceIntegrationsConversationsDeleteData = any;

export type B2BWorkspaceIntegrationsConversationsMessagesCreateData =
  AiConversationDetail;

export type B2BWorkspaceIntegrationsImportCreateData = AiImportResult;

export type B2BWorkspaceIntegrationsProjectsListData = AiProjectList;

export type B2BWorkspaceInventoryCategoriesListData = Category[];

export type B2BWorkspaceInventoryCategoriesCreateData = Category;

export type B2BWorkspaceInventoryCategoriesPartialUpdateData = Category;

export type B2BWorkspaceInventoryCategoriesDeleteData = any;

export type B2BWorkspaceInventoryDocumentsListData = DocumentList;

export type B2BWorkspaceInventoryDocumentsCreateData = InventoryDocument;

export type B2BWorkspaceInventoryDocumentsPendingListData = DocumentList;

export type B2BWorkspaceInventoryDocumentsReadData = InventoryDocument;

export type B2BWorkspaceInventoryDocumentsPartialUpdateData = InventoryDocument;

export type B2BWorkspaceInventoryDocumentsDeleteData = any;

export type B2BWorkspaceInventoryDocumentsCancelCreateData = InventoryDocument;

export type B2BWorkspaceInventoryDocumentsConfirmCreateData = InventoryDocument;

export type B2BWorkspaceInventoryDocumentsPreviewListData = StockChange[];

export type B2BWorkspaceInventoryDocumentsReceiveCreateData = InventoryDocument;

export type B2BWorkspaceInventoryDocumentsSendCreateData = InventoryDocument;

export type B2BWorkspaceInventoryExportListData = any;

export type B2BWorkspaceInventoryGenerateListData = any;

export type B2BWorkspaceInventoryImportCommitCreateData = ImportCommit;

export type B2BWorkspaceInventoryImportPreviewCreateData = any;

export type B2BWorkspaceInventoryMovementsListData = MovementList;

export type B2BWorkspaceInventoryMovementsCreateData = InventoryDocument;

export type B2BWorkspaceInventoryProductsListData = ProductList;

export type B2BWorkspaceInventoryProductsCreateData = Product;

export type B2BWorkspaceInventoryProductsReadData = Product;

export type B2BWorkspaceInventoryProductsPartialUpdateData = Product;

export type B2BWorkspaceInventoryProductsDeleteData = any;

export type B2BWorkspaceInventoryProductsMovementsListData = MovementList;

export type B2BWorkspaceInventoryProductsPhotoCreateData = Product;

export type B2BWorkspaceInventoryProductsPhotoDeleteData = any;

export type B2BWorkspaceInventoryProductsPricesListData = PriceHistory[];

export type B2BWorkspaceInventorySettingsListData = Settings;

export type B2BWorkspaceInventorySettingsPartialUpdateData = Settings;

export type B2BWorkspaceInventorySummaryListData = InventorySummary;

export type B2BWorkspaceInventorySuppliersListData = Supplier[];

export type B2BWorkspaceInventorySuppliersCreateData = Supplier;

export type B2BWorkspaceInventorySuppliersReadData = Supplier;

export type B2BWorkspaceInventorySuppliersPartialUpdateData = Supplier;

export type B2BWorkspaceInventorySuppliersDeleteData = any;

export type B2BWorkspaceInventoryWarehousesListData = Warehouse[];

export type B2BWorkspaceInventoryWarehousesCreateData = Warehouse;

export type B2BWorkspaceInventoryWarehousesPartialUpdateData = Warehouse;

export type B2BWorkspaceInventoryWarehousesDeleteData = any;

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

export type B2BWorkspaceLeadsDueDateCreateData = Lead;

export type B2BWorkspaceLeadsItemsCreateData = LeadItem;

export type B2BWorkspaceLeadsItemsUpdateData = LeadItem[];

export type B2BWorkspaceLeadsItemsDeleteData = any;

export type B2BWorkspaceLeadsQualityCreateData = Lead;

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

export type B2BWorkspaceMePhotoUpdateData = Me;

export type B2BWorkspaceMePhotoDeleteData = Me;

export type B2BWorkspaceMeProfileUpdateData = Me;

export type B2BWorkspaceMeUsernameUpdateData = Me;

export type B2BWorkspaceNotesListData = Note[];

export type B2BWorkspaceNotesCreateData = Note;

export type B2BWorkspaceNotesPartialUpdateData = Note;

export type B2BWorkspaceNotesDeleteData = any;

export type B2BWorkspaceNotesVoiceCreateData = Note;

export type B2BWorkspaceNotesVoiceDeleteData = Note;

export type B2BWorkspaceNotificationsListData = B2BNotification[];

export type B2BWorkspaceNotificationsReadCreateData = any;

export type B2BWorkspaceOrgPeopleListData = OrgPerson[];

export type B2BWorkspacePresenceListData = any;

export type B2BWorkspaceReportsListData = WorkspaceReport;

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

export type B2BWorkspaceTasksFilesCreateData = Task;

export type B2BWorkspaceTasksFilesDeleteData = Task;

export type B2BWorkspaceTasksStatusCreateData = Task;

export type B2BWorkspaceTasksSubtasksToggleCreateData = Task;

export type B2BWorkspaceTasksVoiceCreateData = Task;

export type B2BWorkspaceTasksVoiceDeleteData = Task;

export type B2BWorkspaceTeamListData = TeamMember[];

export type B2BWorkspaceTrashListData = any;

export type B2BWorkspaceTrashDeleteData = any;

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

export type HotelsCalendarListData = any;

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

export type ListCategoriesData = RawPropertyType[];

export type ListCategoryPropertyRecommendationsData = {
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

export type ListCategoryLatestPropertiesData = {
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
   * @description An owner cannot transfer or close a Company by asking their own workspace — see `WorkspaceOwnershipRequestView` — precisely so that a decision this consequential always has someone outside the company looking at it. This is that someone's inbox.
   * @tags api
   * @name AdminAuthB2BOwnershipRequestsList
   * @summary GET ``/api/admin-auth/b2b/ownership-requests/`` — every company asking to hand itself over or close, waiting on WEEL.
   * @request GET:/admin-auth/b2b/ownership-requests/
   * @secure
   */
  export namespace AdminAuthB2BOwnershipRequestsList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = AdminAuthB2BOwnershipRequestsListData;
  }

  /**
   * @description Approving is what actually moves the `owner` role or closes the company; there is no separate "apply" step, because a request marked approved that had not yet been carried out is exactly the kind of row that survives a crash and quietly never happens.
   * @tags api
   * @name AdminAuthB2BOwnershipRequestsDecideCreate
   * @summary POST ``/api/admin-auth/b2b/ownership-requests/<id>/decide/`` — approve or reject one.
   * @request POST:/admin-auth/b2b/ownership-requests/{request_id}/decide/
   * @secure
   */
  export namespace AdminAuthB2BOwnershipRequestsDecideCreate {
    export type RequestParams = {
      requestId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = OwnershipRequestDecision;
    export type RequestHeaders = {};
    export type ResponseBody = AdminAuthB2BOwnershipRequestsDecideCreateData;
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
   * @description POST /api/b2b/workspace/account/token/refresh/ The account session's half of the refresh above, and its own endpoint rather than a second branch inside it: the two token types are deliberately not interchangeable, and one view that answered for both would be the place that eventually hands a workspace token to a caller holding an account one. Without this the account session could not be renewed at all. It simply died one access lifetime after sign-in, which is what left somebody who had registered but not yet been let into a workspace stuck on "could not load your workspaces" with a Retry button that could never succeed.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceAccountTokenRefreshCreate
   * @summary Exchange an account refresh token for a new pair
   * @request POST:/b2b/workspace/account/token/refresh/
   * @secure
   */
  export namespace B2BWorkspaceAccountTokenRefreshCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = WorkspaceRefresh;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceAccountTokenRefreshCreateData;
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
   * @description GET /analyst/ — the button: whether Weel AI runs here, how many reports are unread, and the latest one.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceAnalystList
   * @summary Weel AI status
   * @request GET:/b2b/workspace/analyst/
   * @secure
   */
  export namespace B2BWorkspaceAnalystList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceAnalystListData;
  }

  /**
   * @description GET  /analyst/reports/?period=&limit= — newest first. POST /analyst/reports/ {period} — write one now.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceAnalystReportsList
   * @summary Weel AI reports
   * @request GET:/b2b/workspace/analyst/reports/
   * @secure
   */
  export namespace B2BWorkspaceAnalystReportsList {
    export type RequestParams = {};
    export type RequestQuery = {
      period?: "day" | "week" | "month" | "year";
      limit?: number;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceAnalystReportsListData;
  }

  /**
   * @description GET  /analyst/reports/?period=&limit= — newest first. POST /analyst/reports/ {period} — write one now.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceAnalystReportsCreate
   * @summary Write a Weel AI report now
   * @request POST:/b2b/workspace/analyst/reports/
   * @secure
   */
  export namespace B2BWorkspaceAnalystReportsCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = Generate;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceAnalystReportsCreateData;
  }

  /**
   * @description GET /analyst/reports/<id>/ — the report, in both languages.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceAnalystReportsRead
   * @summary One Weel AI report
   * @request GET:/b2b/workspace/analyst/reports/{report_id}/
   * @secure
   */
  export namespace B2BWorkspaceAnalystReportsRead {
    export type RequestParams = {
      reportId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceAnalystReportsReadData;
  }

  /**
   * @description POST /analyst/reports/<id>/discuss/ — hand the report to the assistant. The two AIs working together: Weel AI found it, the connected assistant explains how to fix it. The report goes into the caller's assistant chat as a card, their question under it, and the assistant's answer comes back — and the chat is then where the conversation carries on.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceAnalystReportsDiscussCreate
   * @summary Ask the assistant about a report
   * @request POST:/b2b/workspace/analyst/reports/{report_id}/discuss/
   * @secure
   */
  export namespace B2BWorkspaceAnalystReportsDiscussCreate {
    export type RequestParams = {
      reportId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = Discuss;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceAnalystReportsDiscussCreateData;
  }

  /**
   * @description POST /analyst/seen/ — the reader opened the list; the dot goes.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceAnalystSeenCreate
   * @summary Mark Weel AI reports seen
   * @request POST:/b2b/workspace/analyst/seen/
   * @secure
   */
  export namespace B2BWorkspaceAnalystSeenCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceAnalystSeenCreateData;
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
   * @description GET /api/b2b/workspace/archive/ — "История и архив": every completed or deleted task, lead and quick sale, read only. A different door onto rows [WorkspaceTrashView] reads only the deleted half of, open to the whole company rather than gated on the authority to
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceArchiveList
   * @summary Completed and deleted tasks, leads and quick sales
   * @request GET:/b2b/workspace/archive/
   * @secure
   */
  export namespace B2BWorkspaceArchiveList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceArchiveListData;
  }

  /**
   * @description GET /api/b2b/workspace/assistant/ — the row on the chat list: whether an assistant is connected, and the last thing said in the chat.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceAssistantList
   * @summary The AI assistant's row
   * @request GET:/b2b/workspace/assistant/
   * @secure
   */
  export namespace B2BWorkspaceAssistantList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceAssistantListData;
  }

  /**
   * @description GET    /assistant/messages/ — the whole chat. POST   /assistant/messages/ — say something and get the answer. DELETE /assistant/messages/ — start over.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceAssistantMessagesList
   * @summary The assistant chat
   * @request GET:/b2b/workspace/assistant/messages/
   * @secure
   */
  export namespace B2BWorkspaceAssistantMessagesList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceAssistantMessagesListData;
  }

  /**
   * @description GET    /assistant/messages/ — the whole chat. POST   /assistant/messages/ — say something and get the answer. DELETE /assistant/messages/ — start over.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceAssistantMessagesCreate
   * @summary Ask the assistant
   * @request POST:/b2b/workspace/assistant/messages/
   * @secure
   */
  export namespace B2BWorkspaceAssistantMessagesCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = AiSend;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceAssistantMessagesCreateData;
  }

  /**
   * @description GET    /assistant/messages/ — the whole chat. POST   /assistant/messages/ — say something and get the answer. DELETE /assistant/messages/ — start over.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceAssistantMessagesDelete
   * @summary Clear the assistant chat
   * @request DELETE:/b2b/workspace/assistant/messages/
   * @secure
   */
  export namespace B2BWorkspaceAssistantMessagesDelete {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceAssistantMessagesDeleteData;
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
   * @description POST /api/b2b/workspace/attendance/check-out/ — "Ketdim". The other end of the day from check-in. Needs no capability: it only ever writes the caller's own row. The departure time is the server's, not the request's, for the same reason the arrival time is. Unlike check-in, the geofence is not enforced here — the whole point of checking out is that the person is leaving, so being outside the radius is the expected case. Coordinates, if the phone sends them, are stored for audit parity with the check-in pair. You can only check out of a day you checked into: without an arrival on file there is nothing to close, and the tap is refused rather than inventing a departure with no matching arrival.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceAttendanceCheckOutCreate
   * @summary Check yourself out for today
   * @request POST:/b2b/workspace/attendance/check-out/
   * @secure
   */
  export namespace B2BWorkspaceAttendanceCheckOutCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = AttendanceCheckOut;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceAttendanceCheckOutCreateData;
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
   * @description POST /calls/ — start a call and ring the other side.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceCallsCreate
   * @summary Start a video/audio call (Jitsi room + JWT)
   * @request POST:/b2b/workspace/calls/
   * @secure
   */
  export namespace B2BWorkspaceCallsCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CallCreate;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceCallsCreateData;
  }

  /**
   * @description GET /calls/history/?thread_id= | lead_id= | customer_id= — newest first. With no filter, the caller's own calls.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceCallsHistoryList
   * @request GET:/b2b/workspace/calls/history/
   * @secure
   */
  export namespace B2BWorkspaceCallsHistoryList {
    export type RequestParams = {};
    export type RequestQuery = {
      thread_id?: number;
      lead_id?: number;
      customer_id?: number;
      before_id?: number;
      limit?: number;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceCallsHistoryListData;
  }

  /**
   * @description Asked on every app resume. A push can be dropped and a socket can be down; this is the third path, and the one that cannot be missed.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceCallsIncomingList
   * @summary GET /calls/incoming/ — the call ringing at me right now, if any.
   * @request GET:/b2b/workspace/calls/incoming/
   * @secure
   */
  export namespace B2BWorkspaceCallsIncomingList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceCallsIncomingListData;
  }

  /**
   * @description GET /calls/<id>/ — where the call stands now. The phone polls this when its socket is down, and on resume for a ring it may have missed.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceCallsRead
   * @request GET:/b2b/workspace/calls/{call_id}/
   * @secure
   */
  export namespace B2BWorkspaceCallsRead {
    export type RequestParams = {
      callId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceCallsReadData;
  }

  /**
   * No description
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceCallsAcceptCreate
   * @summary Accept an incoming call — returns this side's JWT
   * @request POST:/b2b/workspace/calls/{call_id}/accept/
   * @secure
   */
  export namespace B2BWorkspaceCallsAcceptCreate {
    export type RequestParams = {
      callId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceCallsAcceptCreateData;
  }

  /**
   * No description
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceCallsDeclineCreate
   * @request POST:/b2b/workspace/calls/{call_id}/decline/
   * @secure
   */
  export namespace B2BWorkspaceCallsDeclineCreate {
    export type RequestParams = {
      callId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceCallsDeclineCreateData;
  }

  /**
   * No description
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceCallsEndCreate
   * @summary Hang up (cancels a call that is still ringing)
   * @request POST:/b2b/workspace/calls/{call_id}/end/
   * @secure
   */
  export namespace B2BWorkspaceCallsEndCreate {
    export type RequestParams = {
      callId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceCallsEndCreateData;
  }

  /**
   * @description GET /calls/<id>/token/ — a fresh JWT for a call still in progress.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceCallsTokenList
   * @request GET:/b2b/workspace/calls/{call_id}/token/
   * @secure
   */
  export namespace B2BWorkspaceCallsTokenList {
    export type RequestParams = {
      callId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceCallsTokenListData;
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
   * @description GET   /api/b2b/workspace/chats/<id>/group/ — the group's own screen. PATCH /api/b2b/workspace/chats/<id>/group/ — rename it, or change its picture. The picture arrives as multipart, the same door every other upload uses, so it is quota-checked and accounted for like any other stored object.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceChatsGroupList
   * @summary Group detail with its members
   * @request GET:/b2b/workspace/chats/{thread_id}/group/
   * @secure
   */
  export namespace B2BWorkspaceChatsGroupList {
    export type RequestParams = {
      threadId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceChatsGroupListData;
  }

  /**
   * @description GET   /api/b2b/workspace/chats/<id>/group/ — the group's own screen. PATCH /api/b2b/workspace/chats/<id>/group/ — rename it, or change its picture. The picture arrives as multipart, the same door every other upload uses, so it is quota-checked and accounted for like any other stored object.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceChatsGroupPartialUpdate
   * @summary Rename a group or set its picture
   * @request PATCH:/b2b/workspace/chats/{thread_id}/group/
   * @secure
   */
  export namespace B2BWorkspaceChatsGroupPartialUpdate {
    export type RequestParams = {
      threadId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = {
      /**
       * @minLength 1
       * @maxLength 200
       */
      group_name?: string;
      /** @format binary */
      photo?: File;
    };
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceChatsGroupPartialUpdateData;
  }

  /**
   * @description POST /api/b2b/workspace/chats/<id>/members/ — add people to a group.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceChatsMembersCreate
   * @summary Add members to a group
   * @request POST:/b2b/workspace/chats/{thread_id}/members/
   * @secure
   */
  export namespace B2BWorkspaceChatsMembersCreate {
    export type RequestParams = {
      threadId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = ThreadMembers;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceChatsMembersCreateData;
  }

  /**
   * @description PATCH  /api/b2b/workspace/chats/<id>/members/<employee_id>/ — admin or member. DELETE /api/b2b/workspace/chats/<id>/members/<employee_id>/ — take them out. Removing yourself through this endpoint is how leaving works, and it is the one case that needs no admin rights: nobody can be held in a conversation.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceChatsMembersPartialUpdate
   * @summary Make a member an admin, or an admin an ordinary member
   * @request PATCH:/b2b/workspace/chats/{thread_id}/members/{employee_id}/
   * @secure
   */
  export namespace B2BWorkspaceChatsMembersPartialUpdate {
    export type RequestParams = {
      threadId: string;
      employeeId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = ThreadMemberRole;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceChatsMembersPartialUpdateData;
  }

  /**
   * @description PATCH  /api/b2b/workspace/chats/<id>/members/<employee_id>/ — admin or member. DELETE /api/b2b/workspace/chats/<id>/members/<employee_id>/ — take them out. Removing yourself through this endpoint is how leaving works, and it is the one case that needs no admin rights: nobody can be held in a conversation.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceChatsMembersDelete
   * @summary Remove somebody from a group, or leave it yourself
   * @request DELETE:/b2b/workspace/chats/{thread_id}/members/{employee_id}/
   * @secure
   */
  export namespace B2BWorkspaceChatsMembersDelete {
    export type RequestParams = {
      threadId: string;
      employeeId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceChatsMembersDeleteData;
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
      forward_message_id?: number | null;
      /** @format binary */
      file?: File;
    };
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceChatsMessagesCreateData;
  }

  /**
   * @description PATCH  /api/b2b/workspace/chats/<thread_id>/messages/<message_id>/ DELETE /api/b2b/workspace/chats/<thread_id>/messages/<message_id>/ Your own message, always. Anyone else's only if you run the company — a manager has to be able to take down something posted in a shared room, and an employee must not be able to edit the record of what was said. Editing is narrower than deleting: only the author, never a manager. A manager removing something is a visible act; a manager rewriting what somebody said is a forgery, and no role should be able to do it.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceChatsMessagesPartialUpdate
   * @summary Edit your own message
   * @request PATCH:/b2b/workspace/chats/{thread_id}/messages/{message_id}/
   * @secure
   */
  export namespace B2BWorkspaceChatsMessagesPartialUpdate {
    export type RequestParams = {
      threadId: string;
      messageId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = MessageEdit;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceChatsMessagesPartialUpdateData;
  }

  /**
   * @description PATCH  /api/b2b/workspace/chats/<thread_id>/messages/<message_id>/ DELETE /api/b2b/workspace/chats/<thread_id>/messages/<message_id>/ Your own message, always. Anyone else's only if you run the company — a manager has to be able to take down something posted in a shared room, and an employee must not be able to edit the record of what was said. Editing is narrower than deleting: only the author, never a manager. A manager removing something is a visible act; a manager rewriting what somebody said is a forgery, and no role should be able to do it.
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
   * @description POST   /api/b2b/workspace/chats/<thread_id>/messages/<message_id>/pin/ DELETE the same path — unpin. A pin is about the room, not about the message's author: anybody in it can put something at the top, and anybody in it can take it down again. That is the same rule Telegram uses in a group, and the alternative — only the author may pin their own — makes the feature useless for the case it exists for, which is somebody else's address or meeting time.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceChatsMessagesPinCreate
   * @summary Pin a message
   * @request POST:/b2b/workspace/chats/{thread_id}/messages/{message_id}/pin/
   * @secure
   */
  export namespace B2BWorkspaceChatsMessagesPinCreate {
    export type RequestParams = {
      threadId: string;
      messageId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceChatsMessagesPinCreateData;
  }

  /**
   * @description POST   /api/b2b/workspace/chats/<thread_id>/messages/<message_id>/pin/ DELETE the same path — unpin. A pin is about the room, not about the message's author: anybody in it can put something at the top, and anybody in it can take it down again. That is the same rule Telegram uses in a group, and the alternative — only the author may pin their own — makes the feature useless for the case it exists for, which is somebody else's address or meeting time.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceChatsMessagesPinDelete
   * @summary Unpin a message
   * @request DELETE:/b2b/workspace/chats/{thread_id}/messages/{message_id}/pin/
   * @secure
   */
  export namespace B2BWorkspaceChatsMessagesPinDelete {
    export type RequestParams = {
      threadId: string;
      messageId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceChatsMessagesPinDeleteData;
  }

  /**
   * @description POST /api/b2b/workspace/chats/<thread_id>/messages/<message_id>/reactions/ One endpoint for both directions, because the app has one gesture for
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceChatsMessagesReactionsCreate
   * @summary React to a message, or take the reaction back
   * @request POST:/b2b/workspace/chats/{thread_id}/messages/{message_id}/reactions/
   * @secure
   */
  export namespace B2BWorkspaceChatsMessagesReactionsCreate {
    export type RequestParams = {
      threadId: string;
      messageId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = MessageReaction;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceChatsMessagesReactionsCreateData;
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
   * @description GET/POST /api/b2b/workspace/company/ownership-requests/ — handing the company over, or closing it, neither of which this endpoint ever does itself. Owner only, and on their own company only: an admin or a manager runs a workspace, not the Company it belongs to, and the whole point of routing this through `admin_auth` is that nobody inside the workspace — owner included — can make either thing happen by themselves. See the note on `Role.OWNER` in `access.py`.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceCompanyOwnershipRequestsList
   * @summary This workspace's ownership/closure requests
   * @request GET:/b2b/workspace/company/ownership-requests/
   * @secure
   */
  export namespace B2BWorkspaceCompanyOwnershipRequestsList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceCompanyOwnershipRequestsListData;
  }

  /**
   * @description GET/POST /api/b2b/workspace/company/ownership-requests/ — handing the company over, or closing it, neither of which this endpoint ever does itself. Owner only, and on their own company only: an admin or a manager runs a workspace, not the Company it belongs to, and the whole point of routing this through `admin_auth` is that nobody inside the workspace — owner included — can make either thing happen by themselves. See the note on `Role.OWNER` in `access.py`.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceCompanyOwnershipRequestsCreate
   * @summary Ask to transfer or close the company
   * @request POST:/b2b/workspace/company/ownership-requests/
   * @secure
   */
  export namespace B2BWorkspaceCompanyOwnershipRequestsCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = OwnershipRequest;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceCompanyOwnershipRequestsCreateData;
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
   * @description GET/POST /api/b2b/workspace/delete-requests/ — TZ §4: asking to delete *this one workspace*, as opposed to [WorkspaceOwnershipRequestView]'s company-wide close, which only WEEL's own desk can grant. A leader (or anybody `IsWorkspaceManager` lets through) may ask; only this workspace's own owner may grant it — see [WorkspaceDeleteRequestDecideView].
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceDeleteRequestsList
   * @summary This workspace's deletion requests
   * @request GET:/b2b/workspace/delete-requests/
   * @secure
   */
  export namespace B2BWorkspaceDeleteRequestsList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceDeleteRequestsListData;
  }

  /**
   * @description GET/POST /api/b2b/workspace/delete-requests/ — TZ §4: asking to delete *this one workspace*, as opposed to [WorkspaceOwnershipRequestView]'s company-wide close, which only WEEL's own desk can grant. A leader (or anybody `IsWorkspaceManager` lets through) may ask; only this workspace's own owner may grant it — see [WorkspaceDeleteRequestDecideView].
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceDeleteRequestsCreate1
   * @summary Ask to delete this workspace
   * @request POST:/b2b/workspace/delete-requests/
   * @secure
   */
  export namespace B2BWorkspaceDeleteRequestsCreate1 {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = WorkspaceDeleteRequest;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceDeleteRequestsCreate1Data;
  }

  /**
   * @description POST /api/b2b/workspace/delete-requests/<id>/<approve|reject>/ Owner only, and only on this same workspace's own pending request — the TZ's "Владелец получает запрос... принимает или отклоняет". Approving marks this workspace `is_active = FALSE`; the org above it and its other workspaces are untouched.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceDeleteRequestsCreate2
   * @summary Decide a workspace deletion request
   * @request POST:/b2b/workspace/delete-requests/{request_id}/{action}/
   * @secure
   */
  export namespace B2BWorkspaceDeleteRequestsCreate2 {
    export type RequestParams = {
      requestId: string;
      action: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceDeleteRequestsCreate2Data;
  }

  /**
   * @description GET/POST /api/b2b/workspace/employee-of-month/ Anyone can see this month's pick; only the owner can make or change it.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceEmployeeOfMonthList
   * @summary This month's employees of the month
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
   * @summary Pick this month's employees of the month (owner or administrator)
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
   * @description POST /api/b2b/workspace/employees/<id>/remove/ — end a member's standing. Deactivates rather than deletes: their tasks, leads and history keep the name that was on them.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceEmployeesRemoveCreate
   * @summary Remove a member
   * @request POST:/b2b/workspace/employees/{employee_id}/remove/
   * @secure
   */
  export namespace B2BWorkspaceEmployeesRemoveCreate {
    export type RequestParams = {
      employeeId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = EmployeeRemove;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceEmployeesRemoveCreateData;
  }

  /**
   * @description GET /api/b2b/workspace/employees/<id>/stats/ — what one colleague is carrying. The two numbers on the card the chat opens when you tap somebody's name. Its own call rather than fields on `/team/`: the roster is fetched to label rows all over the app — assignees, chat titles, event participants — and four counts per person would put a join over every task in the company behind every one of those screens, to draw numbers only this one page shows. Readable by anyone in the workspace, like the roster itself. It says how much work somebody has, never what the work is.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceEmployeesStatsList
   * @summary One employee's task counts
   * @request GET:/b2b/workspace/employees/{employee_id}/stats/
   * @secure
   */
  export namespace B2BWorkspaceEmployeesStatsList {
    export type RequestParams = {
      employeeId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceEmployeesStatsListData;
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
   * @description GET /api/b2b/workspace/integrations/ — what can be connected, and what is.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceIntegrationsList
   * @summary List integrations (owner/administrator only)
   * @request GET:/b2b/workspace/integrations/
   * @secure
   */
  export namespace B2BWorkspaceIntegrationsList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceIntegrationsListData;
  }

  /**
   * @description GET  /integrations/meta/ — this workspace's Meta connection. DELETE /integrations/meta/ — unplug it.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceIntegrationsMetaList
   * @summary The Meta connection
   * @request GET:/b2b/workspace/integrations/meta/
   * @secure
   */
  export namespace B2BWorkspaceIntegrationsMetaList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceIntegrationsMetaListData;
  }

  /**
   * @description GET  /integrations/meta/ — this workspace's Meta connection. DELETE /integrations/meta/ — unplug it.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceIntegrationsMetaDelete
   * @summary Disconnect Meta
   * @request DELETE:/b2b/workspace/integrations/meta/
   * @secure
   */
  export namespace B2BWorkspaceIntegrationsMetaDelete {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceIntegrationsMetaDeleteData;
  }

  /**
   * @description GET    /integrations/meta/app/ — what to paste into the Facebook app. PUT    /integrations/meta/app/ — connect through *this workspace's* app. DELETE /integrations/meta/app/ — go back to the deployment's app. The second path, and why it exists: while our own Facebook app is in Meta's review only its listed testers can authorise it, and some customers will not let their advertising data pass through an app they do not own. Both are real, so a workspace may bring its own — and everything below this line stops caring which, because `credentials.for_company` is the one place that decides.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceIntegrationsMetaAppList
   * @summary What to configure in the Facebook app
   * @request GET:/b2b/workspace/integrations/meta/app/
   * @secure
   */
  export namespace B2BWorkspaceIntegrationsMetaAppList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceIntegrationsMetaAppListData;
  }

  /**
   * @description GET    /integrations/meta/app/ — what to paste into the Facebook app. PUT    /integrations/meta/app/ — connect through *this workspace's* app. DELETE /integrations/meta/app/ — go back to the deployment's app. The second path, and why it exists: while our own Facebook app is in Meta's review only its listed testers can authorise it, and some customers will not let their advertising data pass through an app they do not own. Both are real, so a workspace may bring its own — and everything below this line stops caring which, because `credentials.for_company` is the one place that decides.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceIntegrationsMetaAppUpdate
   * @summary Use this workspace's own Facebook app
   * @request PUT:/b2b/workspace/integrations/meta/app/
   * @secure
   */
  export namespace B2BWorkspaceIntegrationsMetaAppUpdate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = MetaApp;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceIntegrationsMetaAppUpdateData;
  }

  /**
   * @description GET    /integrations/meta/app/ — what to paste into the Facebook app. PUT    /integrations/meta/app/ — connect through *this workspace's* app. DELETE /integrations/meta/app/ — go back to the deployment's app. The second path, and why it exists: while our own Facebook app is in Meta's review only its listed testers can authorise it, and some customers will not let their advertising data pass through an app they do not own. Both are real, so a workspace may bring its own — and everything below this line stops caring which, because `credentials.for_company` is the one place that decides.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceIntegrationsMetaAppDelete
   * @summary Stop using this workspace's own app
   * @request DELETE:/b2b/workspace/integrations/meta/app/
   * @secure
   */
  export namespace B2BWorkspaceIntegrationsMetaAppDelete {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceIntegrationsMetaAppDeleteData;
  }

  /**
   * @description POST /api/b2b/workspace/integrations/meta/connect/ — start the login. Answers with a URL for the phone to open in its browser. The rest happens there and comes back through `public_views.MetaOAuthCallbackView`; the app polls the list endpoint when it returns to the foreground. The state is random and short-lived rather than the company id: it is what ties the callback to this workspace, and a guessable one would let anybody who found the callback URL attach *their* Facebook pages to somebody else's funnel.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceIntegrationsMetaConnectCreate
   * @summary Begin the Meta connection
   * @request POST:/b2b/workspace/integrations/meta/connect/
   * @secure
   */
  export namespace B2BWorkspaceIntegrationsMetaConnectCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceIntegrationsMetaConnectCreateData;
  }

  /**
   * @description PATCH /integrations/meta/pages/<id>/ — pause or resume one page.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceIntegrationsMetaPagesPartialUpdate
   * @summary Switch one page's ingest on or off
   * @request PATCH:/b2b/workspace/integrations/meta/pages/{page_row_id}/
   * @secure
   */
  export namespace B2BWorkspaceIntegrationsMetaPagesPartialUpdate {
    export type RequestParams = {
      pageRowId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = PageToggle;
    export type RequestHeaders = {};
    export type ResponseBody =
      B2BWorkspaceIntegrationsMetaPagesPartialUpdateData;
  }

  /**
   * @description POST /integrations/meta/sync/ — fetch recent submissions now. The webhook is how leads arrive; this is the button for the gap it cannot cover — a subscription added after a campaign started, an hour our server was down. Queued rather than run inline: it walks every form on every page and the phone should not hold a request open for it.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceIntegrationsMetaSyncCreate
   * @summary Pull recent Meta leads now
   * @request POST:/b2b/workspace/integrations/meta/sync/
   * @secure
   */
  export namespace B2BWorkspaceIntegrationsMetaSyncCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceIntegrationsMetaSyncCreateData;
  }

  /**
   * @description GET    /integrations/<provider>/ — where the connection stands. POST   /integrations/<provider>/ — connect with an API key. PATCH  /integrations/<provider>/ — pick the model. DELETE /integrations/<provider>/ — forget the key.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceIntegrationsRead
   * @summary The AI connection
   * @request GET:/b2b/workspace/integrations/{provider}/
   * @secure
   */
  export namespace B2BWorkspaceIntegrationsRead {
    export type RequestParams = {
      provider: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceIntegrationsReadData;
  }

  /**
   * @description GET    /integrations/<provider>/ — where the connection stands. POST   /integrations/<provider>/ — connect with an API key. PATCH  /integrations/<provider>/ — pick the model. DELETE /integrations/<provider>/ — forget the key.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceIntegrationsCreate
   * @summary Connect Claude or ChatGPT with an API key
   * @request POST:/b2b/workspace/integrations/{provider}/
   * @secure
   */
  export namespace B2BWorkspaceIntegrationsCreate {
    export type RequestParams = {
      provider: string;
    };
    export type RequestQuery = {};
    export type RequestBody = AiConnect;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceIntegrationsCreateData;
  }

  /**
   * @description GET    /integrations/<provider>/ — where the connection stands. POST   /integrations/<provider>/ — connect with an API key. PATCH  /integrations/<provider>/ — pick the model. DELETE /integrations/<provider>/ — forget the key.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceIntegrationsPartialUpdate
   * @summary Pick the model
   * @request PATCH:/b2b/workspace/integrations/{provider}/
   * @secure
   */
  export namespace B2BWorkspaceIntegrationsPartialUpdate {
    export type RequestParams = {
      provider: string;
    };
    export type RequestQuery = {};
    export type RequestBody = AiModel;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceIntegrationsPartialUpdateData;
  }

  /**
   * @description GET    /integrations/<provider>/ — where the connection stands. POST   /integrations/<provider>/ — connect with an API key. PATCH  /integrations/<provider>/ — pick the model. DELETE /integrations/<provider>/ — forget the key.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceIntegrationsDelete
   * @summary Disconnect
   * @request DELETE:/b2b/workspace/integrations/{provider}/
   * @secure
   */
  export namespace B2BWorkspaceIntegrationsDelete {
    export type RequestParams = {
      provider: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceIntegrationsDeleteData;
  }

  /**
   * @description GET  /integrations/<provider>/conversations/?project=&q=&limit=&offset= POST /integrations/<provider>/conversations/ — start a chat here.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceIntegrationsConversationsList
   * @summary The chats
   * @request GET:/b2b/workspace/integrations/{provider}/conversations/
   * @secure
   */
  export namespace B2BWorkspaceIntegrationsConversationsList {
    export type RequestParams = {
      provider: string;
    };
    export type RequestQuery = {
      project?: number;
      q?: string;
      limit?: number;
      offset?: number;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceIntegrationsConversationsListData;
  }

  /**
   * @description GET  /integrations/<provider>/conversations/?project=&q=&limit=&offset= POST /integrations/<provider>/conversations/ — start a chat here.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceIntegrationsConversationsCreate
   * @summary Start a chat
   * @request POST:/b2b/workspace/integrations/{provider}/conversations/
   * @secure
   */
  export namespace B2BWorkspaceIntegrationsConversationsCreate {
    export type RequestParams = {
      provider: string;
    };
    export type RequestQuery = {};
    export type RequestBody = AiNewConversation;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceIntegrationsConversationsCreateData;
  }

  /**
   * @description GET    /integrations/<provider>/conversations/<id>/ — with its turns. DELETE /integrations/<provider>/conversations/<id>/
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceIntegrationsConversationsRead
   * @summary One chat, with its messages
   * @request GET:/b2b/workspace/integrations/{provider}/conversations/{conversation_id}/
   * @secure
   */
  export namespace B2BWorkspaceIntegrationsConversationsRead {
    export type RequestParams = {
      provider: string;
      conversationId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceIntegrationsConversationsReadData;
  }

  /**
   * @description GET    /integrations/<provider>/conversations/<id>/ — with its turns. DELETE /integrations/<provider>/conversations/<id>/
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceIntegrationsConversationsDelete
   * @summary Delete a chat
   * @request DELETE:/b2b/workspace/integrations/{provider}/conversations/{conversation_id}/
   * @secure
   */
  export namespace B2BWorkspaceIntegrationsConversationsDelete {
    export type RequestParams = {
      provider: string;
      conversationId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceIntegrationsConversationsDeleteData;
  }

  /**
   * @description POST /integrations/<provider>/conversations/<id>/messages/ — say something and get the assistant's answer. Both turns are stored before the answer is returned, the person's first: a vendor that times out must not lose what they typed, and the app can re-read the chat and see the question waiting.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceIntegrationsConversationsMessagesCreate
   * @summary Send a message
   * @request POST:/b2b/workspace/integrations/{provider}/conversations/{conversation_id}/messages/
   * @secure
   */
  export namespace B2BWorkspaceIntegrationsConversationsMessagesCreate {
    export type RequestParams = {
      provider: string;
      conversationId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = AiSend;
    export type RequestHeaders = {};
    export type ResponseBody =
      B2BWorkspaceIntegrationsConversationsMessagesCreateData;
  }

  /**
   * @description POST /integrations/<provider>/import/ — the vendor's data export.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceIntegrationsImportCreate
   * @summary Import a Claude / ChatGPT data export
   * @request POST:/b2b/workspace/integrations/{provider}/import/
   * @secure
   */
  export namespace B2BWorkspaceIntegrationsImportCreate {
    export type RequestParams = {
      provider: string;
    };
    export type RequestQuery = {};
    export type RequestBody = {
      /** @format binary */
      file: File;
    };
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceIntegrationsImportCreateData;
  }

  /**
   * @description GET /integrations/<provider>/projects/
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceIntegrationsProjectsList
   * @summary The assistant's projects
   * @request GET:/b2b/workspace/integrations/{provider}/projects/
   * @secure
   */
  export namespace B2BWorkspaceIntegrationsProjectsList {
    export type RequestParams = {
      provider: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceIntegrationsProjectsListData;
  }

  /**
   * No description
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceInventoryCategoriesList
   * @summary List product categories
   * @request GET:/b2b/workspace/inventory/categories/
   * @secure
   */
  export namespace B2BWorkspaceInventoryCategoriesList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceInventoryCategoriesListData;
  }

  /**
   * No description
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceInventoryCategoriesCreate
   * @summary Create a product category (manage)
   * @request POST:/b2b/workspace/inventory/categories/
   * @secure
   */
  export namespace B2BWorkspaceInventoryCategoriesCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CategoryWrite;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceInventoryCategoriesCreateData;
  }

  /**
   * No description
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceInventoryCategoriesPartialUpdate
   * @summary Edit a product category
   * @request PATCH:/b2b/workspace/inventory/categories/{category_id}/
   * @secure
   */
  export namespace B2BWorkspaceInventoryCategoriesPartialUpdate {
    export type RequestParams = {
      categoryId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = CategoryPatch;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceInventoryCategoriesPartialUpdateData;
  }

  /**
   * No description
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceInventoryCategoriesDelete
   * @summary Delete a product category
   * @request DELETE:/b2b/workspace/inventory/categories/{category_id}/
   * @secure
   */
  export namespace B2BWorkspaceInventoryCategoriesDelete {
    export type RequestParams = {
      categoryId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceInventoryCategoriesDeleteData;
  }

  /**
   * No description
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceInventoryDocumentsList
   * @summary List stock documents
   * @request GET:/b2b/workspace/inventory/documents/
   * @secure
   */
  export namespace B2BWorkspaceInventoryDocumentsList {
    export type RequestParams = {};
    export type RequestQuery = {
      kind?:
        | "receipt"
        | "transfer"
        | "inventory"
        | "write_off"
        | "revaluation"
        | "sale"
        | "return";
      status?: "draft" | "sent" | "pending" | "confirmed" | "cancelled";
      warehouse_id?: number;
      supplier_id?: number;
      customer_id?: number;
      lead_id?: number;
      q?: string;
      from?: string;
      to?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceInventoryDocumentsListData;
  }

  /**
   * No description
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceInventoryDocumentsCreate
   * @summary File a stock document (and confirm it)
   * @request POST:/b2b/workspace/inventory/documents/
   * @secure
   */
  export namespace B2BWorkspaceInventoryDocumentsCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = DocumentWrite;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceInventoryDocumentsCreateData;
  }

  /**
   * No description
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceInventoryDocumentsPendingList
   * @summary Sales waiting for stock (backorders)
   * @request GET:/b2b/workspace/inventory/documents/pending/
   * @secure
   */
  export namespace B2BWorkspaceInventoryDocumentsPendingList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceInventoryDocumentsPendingListData;
  }

  /**
   * No description
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceInventoryDocumentsRead
   * @summary A stock document with its lines
   * @request GET:/b2b/workspace/inventory/documents/{document_id}/
   * @secure
   */
  export namespace B2BWorkspaceInventoryDocumentsRead {
    export type RequestParams = {
      documentId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceInventoryDocumentsReadData;
  }

  /**
   * No description
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceInventoryDocumentsPartialUpdate
   * @summary Edit a draft document
   * @request PATCH:/b2b/workspace/inventory/documents/{document_id}/
   * @secure
   */
  export namespace B2BWorkspaceInventoryDocumentsPartialUpdate {
    export type RequestParams = {
      documentId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = DocumentPatch;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceInventoryDocumentsPartialUpdateData;
  }

  /**
   * No description
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceInventoryDocumentsDelete
   * @summary Delete a draft document
   * @request DELETE:/b2b/workspace/inventory/documents/{document_id}/
   * @secure
   */
  export namespace B2BWorkspaceInventoryDocumentsDelete {
    export type RequestParams = {
      documentId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceInventoryDocumentsDeleteData;
  }

  /**
   * No description
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceInventoryDocumentsCancelCreate
   * @summary Cancel (storno) a document, with a reason
   * @request POST:/b2b/workspace/inventory/documents/{document_id}/cancel/
   * @secure
   */
  export namespace B2BWorkspaceInventoryDocumentsCancelCreate {
    export type RequestParams = {
      documentId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = Cancel;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceInventoryDocumentsCancelCreateData;
  }

  /**
   * No description
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceInventoryDocumentsConfirmCreate
   * @summary Confirm a document — apply it to the ledger
   * @request POST:/b2b/workspace/inventory/documents/{document_id}/confirm/
   * @secure
   */
  export namespace B2BWorkspaceInventoryDocumentsConfirmCreate {
    export type RequestParams = {
      documentId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceInventoryDocumentsConfirmCreateData;
  }

  /**
   * No description
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceInventoryDocumentsPreviewList
   * @summary What confirming would do to each balance
   * @request GET:/b2b/workspace/inventory/documents/{document_id}/preview/
   * @secure
   */
  export namespace B2BWorkspaceInventoryDocumentsPreviewList {
    export type RequestParams = {
      documentId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceInventoryDocumentsPreviewListData;
  }

  /**
   * No description
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceInventoryDocumentsReceiveCreate
   * @summary Receive a sent transfer
   * @request POST:/b2b/workspace/inventory/documents/{document_id}/receive/
   * @secure
   */
  export namespace B2BWorkspaceInventoryDocumentsReceiveCreate {
    export type RequestParams = {
      documentId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceInventoryDocumentsReceiveCreateData;
  }

  /**
   * No description
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceInventoryDocumentsSendCreate
   * @summary Send a transfer (stock leaves the source)
   * @request POST:/b2b/workspace/inventory/documents/{document_id}/send/
   * @secure
   */
  export namespace B2BWorkspaceInventoryDocumentsSendCreate {
    export type RequestParams = {
      documentId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceInventoryDocumentsSendCreateData;
  }

  /**
   * No description
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceInventoryExportList
   * @summary Export the catalogue, balances or ledger as XLSX
   * @request GET:/b2b/workspace/inventory/export/
   * @secure
   */
  export namespace B2BWorkspaceInventoryExportList {
    export type RequestParams = {};
    export type RequestQuery = {
      what?: "catalog" | "stock" | "movements";
      from?: string;
      to?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceInventoryExportListData;
  }

  /**
   * @description GET /inventory/generate/?what=sku|barcode — a fresh article or barcode.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceInventoryGenerateList
   * @summary Generate an article or barcode
   * @request GET:/b2b/workspace/inventory/generate/
   * @secure
   */
  export namespace B2BWorkspaceInventoryGenerateList {
    export type RequestParams = {};
    export type RequestQuery = {
      what?: "sku" | "barcode";
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceInventoryGenerateListData;
  }

  /**
   * No description
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceInventoryImportCommitCreate
   * @summary Write the rows a preview produced
   * @request POST:/b2b/workspace/inventory/import/commit/
   * @secure
   */
  export namespace B2BWorkspaceInventoryImportCommitCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = ImportCommit;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceInventoryImportCommitCreateData;
  }

  /**
   * No description
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceInventoryImportPreviewCreate
   * @summary Read an XLSX and say what importing it would do
   * @request POST:/b2b/workspace/inventory/import/preview/
   * @secure
   */
  export namespace B2BWorkspaceInventoryImportPreviewCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceInventoryImportPreviewCreateData;
  }

  /**
   * @description GET  /inventory/movements/ — the ledger, newest first. POST /inventory/movements/ — one line booked straight away, as a document of the matching kind that is confirmed in the same breath.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceInventoryMovementsList
   * @summary List stock movements
   * @request GET:/b2b/workspace/inventory/movements/
   * @secure
   */
  export namespace B2BWorkspaceInventoryMovementsList {
    export type RequestParams = {};
    export type RequestQuery = {
      product_id?: number;
      warehouse_id?: number;
      kind?:
        | "receipt"
        | "sale"
        | "write_off"
        | "transfer"
        | "adjustment"
        | "return";
      category_id?: number;
      supplier_id?: number;
      customer_id?: number;
      author_id?: number;
      document_id?: number;
      q?: string;
      /** ISO date or datetime, inclusive */
      from?: string;
      /** ISO date (whole day) or datetime, exclusive */
      to?: string;
      limit?: number;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceInventoryMovementsListData;
  }

  /**
   * @description GET  /inventory/movements/ — the ledger, newest first. POST /inventory/movements/ — one line booked straight away, as a document of the matching kind that is confirmed in the same breath.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceInventoryMovementsCreate
   * @summary Book a one-line stock operation
   * @request POST:/b2b/workspace/inventory/movements/
   * @secure
   */
  export namespace B2BWorkspaceInventoryMovementsCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = MovementWrite;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceInventoryMovementsCreateData;
  }

  /**
   * @description GET  /inventory/products/ — the catalogue with stock per warehouse. POST /inventory/products/ — add to it (manage).
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceInventoryProductsList
   * @summary List products with stock
   * @request GET:/b2b/workspace/inventory/products/
   * @secure
   */
  export namespace B2BWorkspaceInventoryProductsList {
    export type RequestParams = {};
    export type RequestQuery = {
      /** Name, article, barcode or brand */
      q?: string;
      category_id?: number;
      supplier_id?: number;
      /** Only products with stock in this warehouse */
      warehouse_id?: number;
      brand?: string;
      kind?: "product" | "service" | "bundle";
      status?: "active" | "inactive" | "low" | "zero" | "archived";
      price_min?: number;
      price_max?: number;
      low_stock?: boolean;
      /** Archived products only */
      all?: boolean;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceInventoryProductsListData;
  }

  /**
   * @description GET  /inventory/products/ — the catalogue with stock per warehouse. POST /inventory/products/ — add to it (manage).
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceInventoryProductsCreate
   * @summary Create a product (manage)
   * @request POST:/b2b/workspace/inventory/products/
   * @secure
   */
  export namespace B2BWorkspaceInventoryProductsCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = ProductWrite;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceInventoryProductsCreateData;
  }

  /**
   * No description
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceInventoryProductsRead
   * @summary Product with stock, components and variants
   * @request GET:/b2b/workspace/inventory/products/{product_id}/
   * @secure
   */
  export namespace B2BWorkspaceInventoryProductsRead {
    export type RequestParams = {
      productId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceInventoryProductsReadData;
  }

  /**
   * No description
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceInventoryProductsPartialUpdate
   * @summary Edit a product (manage; prices need reprice)
   * @request PATCH:/b2b/workspace/inventory/products/{product_id}/
   * @secure
   */
  export namespace B2BWorkspaceInventoryProductsPartialUpdate {
    export type RequestParams = {
      productId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = ProductPatch;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceInventoryProductsPartialUpdateData;
  }

  /**
   * No description
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceInventoryProductsDelete
   * @summary Archive a product (manage)
   * @request DELETE:/b2b/workspace/inventory/products/{product_id}/
   * @secure
   */
  export namespace B2BWorkspaceInventoryProductsDelete {
    export type RequestParams = {
      productId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceInventoryProductsDeleteData;
  }

  /**
   * No description
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceInventoryProductsMovementsList
   * @summary One product's stock history
   * @request GET:/b2b/workspace/inventory/products/{product_id}/movements/
   * @secure
   */
  export namespace B2BWorkspaceInventoryProductsMovementsList {
    export type RequestParams = {
      productId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceInventoryProductsMovementsListData;
  }

  /**
   * No description
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceInventoryProductsPhotoCreate
   * @summary Set a product's photo (manage)
   * @request POST:/b2b/workspace/inventory/products/{product_id}/photo/
   * @secure
   */
  export namespace B2BWorkspaceInventoryProductsPhotoCreate {
    export type RequestParams = {
      productId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceInventoryProductsPhotoCreateData;
  }

  /**
   * No description
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceInventoryProductsPhotoDelete
   * @summary Remove a product's photo (manage)
   * @request DELETE:/b2b/workspace/inventory/products/{product_id}/photo/
   * @secure
   */
  export namespace B2BWorkspaceInventoryProductsPhotoDelete {
    export type RequestParams = {
      productId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceInventoryProductsPhotoDeleteData;
  }

  /**
   * No description
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceInventoryProductsPricesList
   * @summary One product's price history
   * @request GET:/b2b/workspace/inventory/products/{product_id}/prices/
   * @secure
   */
  export namespace B2BWorkspaceInventoryProductsPricesList {
    export type RequestParams = {
      productId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceInventoryProductsPricesListData;
  }

  /**
   * No description
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceInventorySettingsList
   * @summary Stock-room settings
   * @request GET:/b2b/workspace/inventory/settings/
   * @secure
   */
  export namespace B2BWorkspaceInventorySettingsList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceInventorySettingsListData;
  }

  /**
   * No description
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceInventorySettingsPartialUpdate
   * @summary Change stock-room settings (manage)
   * @request PATCH:/b2b/workspace/inventory/settings/
   * @secure
   */
  export namespace B2BWorkspaceInventorySettingsPartialUpdate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = SettingsWrite;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceInventorySettingsPartialUpdateData;
  }

  /**
   * No description
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceInventorySummaryList
   * @summary Stock value and turnover for a period
   * @request GET:/b2b/workspace/inventory/summary/
   * @secure
   */
  export namespace B2BWorkspaceInventorySummaryList {
    export type RequestParams = {};
    export type RequestQuery = {
      from?: string;
      to?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceInventorySummaryListData;
  }

  /**
   * No description
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceInventorySuppliersList
   * @summary List suppliers
   * @request GET:/b2b/workspace/inventory/suppliers/
   * @secure
   */
  export namespace B2BWorkspaceInventorySuppliersList {
    export type RequestParams = {};
    export type RequestQuery = {
      q?: string;
      all?: boolean;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceInventorySuppliersListData;
  }

  /**
   * No description
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceInventorySuppliersCreate
   * @summary Create a supplier (manage)
   * @request POST:/b2b/workspace/inventory/suppliers/
   * @secure
   */
  export namespace B2BWorkspaceInventorySuppliersCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = SupplierWrite;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceInventorySuppliersCreateData;
  }

  /**
   * No description
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceInventorySuppliersRead
   * @summary Supplier with purchase history
   * @request GET:/b2b/workspace/inventory/suppliers/{supplier_id}/
   * @secure
   */
  export namespace B2BWorkspaceInventorySuppliersRead {
    export type RequestParams = {
      supplierId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceInventorySuppliersReadData;
  }

  /**
   * No description
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceInventorySuppliersPartialUpdate
   * @summary Edit a supplier (manage)
   * @request PATCH:/b2b/workspace/inventory/suppliers/{supplier_id}/
   * @secure
   */
  export namespace B2BWorkspaceInventorySuppliersPartialUpdate {
    export type RequestParams = {
      supplierId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = SupplierPatch;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceInventorySuppliersPartialUpdateData;
  }

  /**
   * No description
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceInventorySuppliersDelete
   * @summary Archive a supplier (manage)
   * @request DELETE:/b2b/workspace/inventory/suppliers/{supplier_id}/
   * @secure
   */
  export namespace B2BWorkspaceInventorySuppliersDelete {
    export type RequestParams = {
      supplierId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceInventorySuppliersDeleteData;
  }

  /**
   * No description
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceInventoryWarehousesList
   * @summary List warehouses
   * @request GET:/b2b/workspace/inventory/warehouses/
   * @secure
   */
  export namespace B2BWorkspaceInventoryWarehousesList {
    export type RequestParams = {};
    export type RequestQuery = {
      all?: boolean;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceInventoryWarehousesListData;
  }

  /**
   * No description
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceInventoryWarehousesCreate
   * @summary Create a warehouse (manage)
   * @request POST:/b2b/workspace/inventory/warehouses/
   * @secure
   */
  export namespace B2BWorkspaceInventoryWarehousesCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = WarehouseWrite;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceInventoryWarehousesCreateData;
  }

  /**
   * No description
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceInventoryWarehousesPartialUpdate
   * @summary Edit a warehouse
   * @request PATCH:/b2b/workspace/inventory/warehouses/{warehouse_id}/
   * @secure
   */
  export namespace B2BWorkspaceInventoryWarehousesPartialUpdate {
    export type RequestParams = {
      warehouseId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = WarehousePatch;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceInventoryWarehousesPartialUpdateData;
  }

  /**
   * No description
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceInventoryWarehousesDelete
   * @summary Close a warehouse
   * @request DELETE:/b2b/workspace/inventory/warehouses/{warehouse_id}/
   * @secure
   */
  export namespace B2BWorkspaceInventoryWarehousesDelete {
    export type RequestParams = {
      warehouseId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceInventoryWarehousesDeleteData;
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
   * @description GET /api/b2b/workspace/join-requests/ — who is asking to be let in. Gated on `EMPLOYEE_INVITE`, the permission to let somebody in. TZ v2 §11 gives "invite members" and "accept join requests" the same answer on every row — the owner and the administrator, a manager only "in their own workspace, when permitted", nobody below — so they are one permission rather than two that would have to be kept in step. The same permission picks who is told when a request arrives, see `access_repository.list_employee_invite_recipients`.
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
   * @description POST /api/b2b/workspace/join-requests/<id>/<accept|decline>/ Same audience as the list — see [WorkspaceJoinRequestListView]. What standing the person is let in with is chosen per request; changing a role afterwards is a different act and still needs `EMPLOYEE_CHANGE_ROLE`. TZ v2 §5.2 names the three answers — accept as asked, decline, or change the modules and then accept — and two rules on accepting: a role is always assigned, and it may not exceed the acceptor's own.
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
      quality?: "good" | "bad" | "unmarked";
      kind?: "lead" | "quick_sale" | "any";
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
   * @summary Delete a lead (owner or administrator only)
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
   * @description POST /api/b2b/workspace/leads/<id>/due-date/ — set, move or clear the deal's deadline. The claimant's, like every other write on the deal, and a manager's over their head — a deadline is as often the manager's call as the salesperson's, which is the one place this differs from ``WorkspaceLeadStageView``. A closed lead keeps whatever date it had. Putting a deadline on a deal that is already won or lost sets a clock nothing can run down.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceLeadsDueDateCreate
   * @summary Set or clear a lead's deadline
   * @request POST:/b2b/workspace/leads/{lead_id}/due-date/
   * @secure
   */
  export namespace B2BWorkspaceLeadsDueDateCreate {
    export type RequestParams = {
      leadId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = LeadDueDateWrite;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceLeadsDueDateCreateData;
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
   * @description POST /api/b2b/workspace/leads/<id>/quality/ — mark the enquiry good or bad, or take the mark off. Who may: whoever is working the deal, and a manager over their head — the same pair as the deadline, and for the same reason. The salesperson who rang the number is the one who knows it was a wrong number; the manager reading the board is the one who has to be able to correct a lead written off too quickly. A closed lead is *not* refused here, unlike the deadline. A deadline on a finished deal sets a clock nothing runs down, but "that enquiry was never real" is a judgement most often made about a deal that has already been lost — refusing it there would put the mark out of reach on exactly the leads it is for.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceLeadsQualityCreate
   * @summary Mark a lead good or bad, or clear the mark
   * @request POST:/b2b/workspace/leads/{lead_id}/quality/
   * @secure
   */
  export namespace B2BWorkspaceLeadsQualityCreate {
    export type RequestParams = {
      leadId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = LeadQualityWrite;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceLeadsQualityCreateData;
  }

  /**
   * @description POST /api/b2b/workspace/leads/<id>/stage/ — move the lead along the funnel. The claimant only, and never on a closed lead. Reaching ``won`` or ``lost`` completes it; that rule lives in the repository so this view does not have to know which stages are terminal. Takes JSON or ``multipart/form-data``: a move can carry one document — the signed contract behind "Yutdik", the offer behind "Taklif yuborildi" — and it is filed against the history row the move writes, so the feed shows it beside the event it belongs to rather than loose on the drive.
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
    export type RequestBody = {
      stage:
        | "new"
        | "interested"
        | "proposal"
        | "negotiation"
        | "contract"
        | "won"
        | "lost"
        | "archived";
      lost_reason?:
        | "price"
        | "competitor"
        | "no_budget"
        | "no_response"
        | "not_needed"
        | "postponed"
        | "other";
      /** @maxLength 2000 */
      note?: string | null;
      /**
       * Optional document filed with the move (multipart only).
       * @format binary
       */
      file?: File;
    };
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
   * @description PUT    /api/b2b/workspace/me/photo/ — set your own picture. DELETE /api/b2b/workspace/me/photo/ — go back to initials. Yours alone. There is no path here for changing somebody else's: a photo is the one thing on a roster entry that is unambiguously the person's own, and a workspace that could set it for them is a workspace that can put any face against their name. The bytes go through the same door everything else stored here goes through, so they are checked against the company's quota rather than being a way around it.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceMePhotoUpdate
   * @summary Set your own photo
   * @request PUT:/b2b/workspace/me/photo/
   * @secure
   */
  export namespace B2BWorkspaceMePhotoUpdate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = {
      /** @format binary */
      photo: File;
    };
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceMePhotoUpdateData;
  }

  /**
   * @description PUT    /api/b2b/workspace/me/photo/ — set your own picture. DELETE /api/b2b/workspace/me/photo/ — go back to initials. Yours alone. There is no path here for changing somebody else's: a photo is the one thing on a roster entry that is unambiguously the person's own, and a workspace that could set it for them is a workspace that can put any face against their name. The bytes go through the same door everything else stored here goes through, so they are checked against the company's quota rather than being a way around it.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceMePhotoDelete
   * @summary Remove your photo
   * @request DELETE:/b2b/workspace/me/photo/
   * @secure
   */
  export namespace B2BWorkspaceMePhotoDelete {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceMePhotoDeleteData;
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
   * @description GET  /api/b2b/workspace/notes/ — the strip above the calendar. POST /api/b2b/workspace/notes/ — a typed note, or the empty shell a recording is then attached to. Filed under the calendar module because that is the only screen that shows
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceNotesList
   * @summary List quick notes (own, plus what the workspace shared)
   * @request GET:/b2b/workspace/notes/
   * @secure
   */
  export namespace B2BWorkspaceNotesList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceNotesListData;
  }

  /**
   * @description GET  /api/b2b/workspace/notes/ — the strip above the calendar. POST /api/b2b/workspace/notes/ — a typed note, or the empty shell a recording is then attached to. Filed under the calendar module because that is the only screen that shows
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceNotesCreate
   * @summary Create a quick note
   * @request POST:/b2b/workspace/notes/
   * @secure
   */
  export namespace B2BWorkspaceNotesCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = NoteWrite;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceNotesCreateData;
  }

  /**
   * @description PATCH/DELETE /api/b2b/workspace/notes/<id>/ — the author's own note. There is no GET: the strip loads every note the caller can see in one request and the detail screen is drawn from that, so a per-note fetch would only be a second way for the same row to arrive.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceNotesPartialUpdate
   * @summary Edit a note — text, colour, pinned, shared
   * @request PATCH:/b2b/workspace/notes/{note_id}/
   * @secure
   */
  export namespace B2BWorkspaceNotesPartialUpdate {
    export type RequestParams = {
      noteId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = NotePatch;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceNotesPartialUpdateData;
  }

  /**
   * @description PATCH/DELETE /api/b2b/workspace/notes/<id>/ — the author's own note. There is no GET: the strip loads every note the caller can see in one request and the detail screen is drawn from that, so a per-note fetch would only be a second way for the same row to arrive.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceNotesDelete
   * @summary Delete a note
   * @request DELETE:/b2b/workspace/notes/{note_id}/
   * @secure
   */
  export namespace B2BWorkspaceNotesDelete {
    export type RequestParams = {
      noteId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceNotesDeleteData;
  }

  /**
   * @description POST/DELETE /api/b2b/workspace/notes/<id>/voice/ — the recording. Its own endpoint rather than a field on the create call, for the reason [WorkspaceTaskVoiceView] gives: a note is created as JSON and a clip is multipart. The app posts the note, gets its id, and sends the recording straight after. A note carries at most one clip, and posting a second replaces the first, bytes and all.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceNotesVoiceCreate
   * @summary Attach a recording to a note
   * @request POST:/b2b/workspace/notes/{note_id}/voice/
   * @secure
   */
  export namespace B2BWorkspaceNotesVoiceCreate {
    export type RequestParams = {
      noteId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = {
      /** @format binary */
      file: File;
      duration_ms?: number;
    };
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceNotesVoiceCreateData;
  }

  /**
   * @description POST/DELETE /api/b2b/workspace/notes/<id>/voice/ — the recording. Its own endpoint rather than a field on the create call, for the reason [WorkspaceTaskVoiceView] gives: a note is created as JSON and a clip is multipart. The app posts the note, gets its id, and sends the recording straight after. A note carries at most one clip, and posting a second replaces the first, bytes and all.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceNotesVoiceDelete
   * @summary Remove a note's recording
   * @request DELETE:/b2b/workspace/notes/{note_id}/voice/
   * @secure
   */
  export namespace B2BWorkspaceNotesVoiceDelete {
    export type RequestParams = {
      noteId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceNotesVoiceDeleteData;
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
   * @description GET /api/b2b/workspace/org/people/?search= — anyone in the org. The picker on "So'rov yuborish" searches this rather than `/team/`: it spans every workspace under the same owner, this one included, so a name, handle or phone finds the person wherever they sit. Only the searcher is left out. Restricted to the org — never the whole of WEEL.
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
   * @description GET /api/b2b/workspace/presence/ — who is online right now. The socket says so on connect and pushes every change after that, so this is for the case the socket cannot cover: an app that has just come back to the foreground and wants the current picture before its connection is up.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspacePresenceList
   * @summary Who is online
   * @request GET:/b2b/workspace/presence/
   * @secure
   */
  export namespace B2BWorkspacePresenceList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspacePresenceListData;
  }

  /**
   * @description GET /api/b2b/workspace/reports/ The profile screen's "Hisobot va analitika": the sales funnel, the task board and the calendar over one window, in one response. One endpoint and not three, because the screen is one screen. Three would mean three round trips on open, three spinners, and — since each would take its own `NOW()` — three windows that do not quite line up. Who sees what is decided twice over: * **Scope.** A manager reads the company; everybody else reads their own work. Not a permission check but the honest reading of the question — a salesperson's report is about their month, and a company total on it would be a number they cannot act on. * **Sections.** A guest lent only the sales board gets `sales` and two nulls. `HasModule` guards one module per view and this view spans three, so the gate is applied per section here rather than on the class.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceReportsList
   * @summary Sales, tasks and calendar over one window
   * @request GET:/b2b/workspace/reports/
   * @secure
   */
  export namespace B2BWorkspaceReportsList {
    export type RequestParams = {};
    export type RequestQuery = {
      /** How far back to count. Defaults to 'month'; an unknown value falls back to it rather than failing. */
      period?: "week" | "month" | "quarter" | "year";
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceReportsListData;
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
   * @description POST /api/b2b/workspace/tasks/<id>/files/ — attach a document to a task. Its own endpoint for the same reason the voice note has one: a task is written as JSON and a document is multipart, so the app posts the task, gets its id, and sends the files straight after. Unlike the voice note a task carries as many documents as were attached — a brief, its annexes and a photographed receipt are three files and replacing one with the next would be a data loss, not a correction. One request carries one file; several are several requests, which is what lets the app report and retry them one at a time instead of losing a whole batch to the one that was over the limit.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceTasksFilesCreate
   * @summary Attach a document to a task
   * @request POST:/b2b/workspace/tasks/{task_id}/files/
   * @secure
   */
  export namespace B2BWorkspaceTasksFilesCreate {
    export type RequestParams = {
      taskId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = {
      /** @format binary */
      file: File;
    };
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceTasksFilesCreateData;
  }

  /**
   * @description DELETE /api/b2b/workspace/tasks/<id>/files/<file_id>/ — detach one. The bytes go with the row. There is no trash for a task attachment: the drive is where files are kept, and something attached to a task is part of the task rather than a document in its own right.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceTasksFilesDelete
   * @summary Detach a document from a task
   * @request DELETE:/b2b/workspace/tasks/{task_id}/files/{file_id}/
   * @secure
   */
  export namespace B2BWorkspaceTasksFilesDelete {
    export type RequestParams = {
      taskId: string;
      fileId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceTasksFilesDeleteData;
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
   * @description DELETE /api/b2b/workspace/trash/<kind>/<id>/ — destroy one for good. The other half of a bin. Without it the only way out of the trash was back into the working set, so something deleted by mistake and something deleted on purpose sat in the same list for the life of the company — which is what the screen's "Butunlay o'chirish" is for. Gated on the same permission as deleting and restoring, and — in the repository — on the row already being in the bin. Nothing live can be reached through this endpoint: an id that was never deleted answers 404 exactly as an id that never existed.
   * @tags B2B / Workspace (mobile)
   * @name B2BWorkspaceTrashDelete
   * @summary Permanently delete a binned object
   * @request DELETE:/b2b/workspace/trash/{kind}/{object_id}/
   * @secure
   */
  export namespace B2BWorkspaceTrashDelete {
    export type RequestParams = {
      kind: string;
      objectId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = B2BWorkspaceTrashDeleteData;
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

  /**
   * @description GET /api/hotels/{hotel_id}/calendar/?year=&month=&adults= — a free/occupied dot for every day of one month, for one hotel. Hotelios has no per-day availability endpoint, only `search` for a single date range, so this is one 1-night `search` call per day of the month — run several at a time, but still dozens of round trips to Hotelios for a 30-day month. Genuinely slow on a cold call; the result is cached for `_CACHE_TTL_SECONDS` so the same hotel/month is instant for the next person (or the next open of the drawer) within that window.
   * @tags api
   * @name HotelsCalendarList
   * @request GET:/hotels/{hotel_id}/calendar/
   * @secure
   */
  export namespace HotelsCalendarList {
    export type RequestParams = {
      hotelId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = HotelsCalendarListData;
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
   * @description Returns every apartment and cottage in the database, including unverified and archived. Supports the same filters as public list (search, region, price, sort, limit, etc.).
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
      /** Optional. Omit to return apartments and cottages together. */
      property_type?: "apartment" | "cottage" | "apartments" | "cottages";
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
      property_type?: "apartment" | "cottage";
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
   * @description Returns the public property categories (apartment, cottage) with localized titles and icon URLs. Hotels are excluded — they are served through the separate Bookhara/Hotelios integration. Results are cached for 10 minutes.
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
    export type RequestHeaders = {
      /**
       * Preferred language for localized titles. Defaults to Uzbek.
       * @default "uz"
       */
      "Accept-Language"?: "en" | "ru" | "uz";
    };
    export type ResponseBody = ListCategoriesData;
  }

  /**
   * @description Returns public apartment/cottage listings for the given category guid (the guid returned by /property/categories/). Unknown or hotel category guids return an empty list — hotels are served through the separate Bookhara/Hotelios integration.
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
   * @description Returns the most recently created public apartment/cottage listings for the given category guid, newest first.
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
      property_type?: "apartment" | "cottage";
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
      property_type?: "apartment" | "cottage";
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
      property_type?: "apartment" | "cottage";
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
      property_type?: "apartment" | "cottage";
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
      /** Comma-separated property kinds: `apartment,cottage`. Repeatable. */
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
      property_type?: "apartment" | "cottage";
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
      property_type?: "apartment" | "cottage";
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
      property_type?: "apartment" | "cottage";
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
   * @description Returns verified public apartments and cottages. Use `property_type` or `kind` to filter to one property kind. `X-Testing-Mode: true` returns only testing properties; otherwise testing properties are excluded.
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
      property_type?: "apartment" | "cottage";
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
      property_type?: "apartment" | "cottage";
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
      property_type?: "apartment" | "cottage";
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
      property_type?: "apartment" | "cottage";
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
   * @description Mixed apartment / cottage search returning the compact card payload used on the search results screen: image, title, rating, `от X / 1 чел · ночь`, district line and review count. Accepts the full filter set plus `property_types` multi-select.
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
      property_type?: "apartment" | "cottage";
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
      /** Comma-separated property kinds: `apartment,cottage`. Repeatable. */
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
