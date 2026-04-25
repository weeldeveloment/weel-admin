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
  password: string;
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
  id?: number;
  /**
   * Email
   * @format email
   * @minLength 1
   */
  email?: string | null;
  /** Full name */
  full_name?: string;
  /** Is staff */
  is_staff?: string;
  /** Is superuser */
  is_superuser?: string;
}

export interface RawAdminBookingClient {
  /** Id */
  id?: number;
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
  guid?: string;
  /**
   * Title
   * @minLength 1
   */
  title?: string;
  /**
   * Property type
   * @minLength 1
   */
  property_type?: string;
}

export interface RawAdminBookingList {
  /**
   * Guid
   * @format uuid
   */
  guid?: string;
  /**
   * Booking number
   * @minLength 1
   */
  booking_number?: string;
  /**
   * Check in
   * @format date
   */
  check_in?: string;
  /**
   * Check out
   * @format date
   */
  check_out?: string;
  /** Adults */
  adults?: number;
  /** Children */
  children?: number;
  /** Babies */
  babies?: number;
  /**
   * Status
   * @minLength 1
   */
  status?: string;
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
  created_at?: string;
  client?: RawAdminBookingClient;
  property?: RawAdminBookingProperty;
  /** Booking price */
  booking_price?: string;
}

export interface RawPropertyBooking {
  /**
   * Guid
   * @format uuid
   */
  guid?: string;
  /**
   * Title
   * @minLength 1
   */
  title?: string;
  /** Img */
  img?: string;
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
  guid?: string;
  property?: RawPropertyBooking;
  partner?: RawPartnerBooking;
  /**
   * Status
   * @minLength 1
   */
  status?: string;
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

export interface RawPropertyBookingHistory {
  /**
   * Guid
   * @format uuid
   */
  guid?: string;
  /**
   * Title
   * @minLength 1
   */
  title?: string;
  /** Image url */
  image_url?: string;
}

export interface RawClientBookingHistoryList {
  /**
   * Guid
   * @format uuid
   */
  guid?: string;
  /**
   * Property type
   * @minLength 1
   */
  property_type?: string;
  property?: RawPropertyBookingHistory;
  /**
   * Status
   * @minLength 1
   */
  status?: string;
  /**
   * Created at
   * @format date-time
   */
  created_at?: string;
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
  guid?: string;
  property?: RawPropertyBooking;
  client?: RawClientBooking;
  /**
   * Check in
   * @format date
   */
  check_in?: string;
  /**
   * Check out
   * @format date
   */
  check_out?: string;
  /** Adults */
  adults?: number;
  /** Children */
  children?: number;
  /** Babies */
  babies?: number;
  /** Booking price */
  booking_price?: string;
  /**
   * Booking number
   * @minLength 1
   */
  booking_number?: string;
  /**
   * Status
   * @minLength 1
   */
  status?: string;
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
  sender_id?: string;
  /** Receiver id */
  receiver_id?: string;
  /** Sender type */
  sender_type?: string;
  /** Receiver type */
  receiver_type?: string;
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

export interface MarkAsRead {
  notification_ids?: string[];
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
  /** Is verified */
  is_verified?: boolean;
  /** Is archived */
  is_archived?: boolean;
  partner_user?: ApartmentPartnerUser;
}

export type ApartmentPartnerUserUpdate = {
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

export interface ApartmentAdminUpdate {
  /** Title */
  title?: string;
  /**
   * Price
   * @format decimal
   */
  price?: string;
  /** Currency */
  currency?: "USD" | "UZS";
  /**
   * Minimum weekend day stay
   * @default false
   */
  minimum_weekend_day_stay?: boolean;
  /**
   * Weekend only sunday inclusive
   * @default false
   */
  weekend_only_sunday_inclusive?: boolean;
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
  services?: (string | null)[];
  /** Region id */
  region_id?: string | null;
  /** District id */
  district_id?: string | null;
  /**
   * Prefecture id
   * @format uuid
   */
  prefecture_id?: string | null;
  /** Guests */
  guests?: number | null;
  /** Rooms */
  rooms?: number | null;
  /** Beds */
  beds?: number | null;
  /** Bathrooms */
  bathrooms?: number | null;
  /** Img */
  img?: object;
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
  partner_user?: ApartmentPartnerUserUpdate;
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
  /** Is verified */
  is_verified?: boolean;
  /** Is archived */
  is_archived?: boolean;
  partner_user?: CottagePartnerUser;
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
  /**
   * Price per person
   * @format decimal
   */
  price_per_person?: string;
  /**
   * Price on working days
   * @format decimal
   */
  price_on_working_days?: string;
  /**
   * Price on weekends
   * @format decimal
   */
  price_on_weekends?: string;
  /** Currency */
  currency?: "USD" | "UZS";
  /**
   * Minimum weekend day stay
   * @default false
   */
  minimum_weekend_day_stay?: boolean;
  /**
   * Weekend only sunday inclusive
   * @default false
   */
  weekend_only_sunday_inclusive?: boolean;
  price?: (string | null)[];
  /** Property room */
  property_room?: Record<string, string | null>;
  /** Guests */
  guests?: number | null;
  /** Rooms */
  rooms?: number | null;
  /** Beds */
  beds?: number | null;
  /** Bathrooms */
  bathrooms?: number | null;
  /** Region */
  region?: string | null;
  /** District */
  district?: string | null;
  /** Region id */
  region_id?: string | null;
  /** District id */
  district_id?: string | null;
  /**
   * Prefecture id
   * @format uuid
   */
  prefecture_id?: string | null;
  img?: string[];
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
  services?: (string | null)[];
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
  /** Title */
  title?: string;
  /**
   * Price
   * @format decimal
   */
  price?: string;
  /** Currency */
  currency?: "USD" | "UZS";
  /**
   * Minimum weekend day stay
   * @default false
   */
  minimum_weekend_day_stay?: boolean;
  /**
   * Weekend only sunday inclusive
   * @default false
   */
  weekend_only_sunday_inclusive?: boolean;
  /** Property location */
  property_location?: Record<string, string | null>;
  /** Property detail */
  property_detail?: Record<string, string | null>;
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
  services?: (string | null)[];
  /** Region id */
  region_id?: string | null;
  /** District id */
  district_id?: string | null;
  /**
   * Prefecture id
   * @format uuid
   */
  prefecture_id?: string | null;
  /** Guests */
  guests?: number | null;
  /** Rooms */
  rooms?: number | null;
  /** Beds */
  beds?: number | null;
  /** Bathrooms */
  bathrooms?: number | null;
  /** Img */
  img?: object;
  /**
   * Apartment number
   * @minLength 1
   */
  apartment_number: string;
  /**
   * Home number
   * @minLength 1
   */
  home_number: string;
  /**
   * Entrance number
   * @minLength 1
   */
  entrance_number: string;
  /**
   * Floor number
   * @minLength 1
   */
  floor_number: string;
  /**
   * Pass code
   * @minLength 1
   */
  pass_code: string;
}

export interface CottageList {
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

export interface CottageCreate {
  /** Title */
  title?: string;
  /**
   * Price per person
   * @format decimal
   */
  price_per_person?: string;
  /**
   * Price on working days
   * @format decimal
   */
  price_on_working_days?: string;
  /**
   * Price on weekends
   * @format decimal
   */
  price_on_weekends?: string;
  /** Currency */
  currency?: "USD" | "UZS";
  /**
   * Minimum weekend day stay
   * @default false
   */
  minimum_weekend_day_stay?: boolean;
  /**
   * Weekend only sunday inclusive
   * @default false
   */
  weekend_only_sunday_inclusive?: boolean;
  price?: (string | null)[];
  /** Property location */
  property_location?: Record<string, string | null>;
  /** Property detail */
  property_detail?: Record<string, string | null>;
  property_services?: (string | null)[];
  /** Property room */
  property_room?: Record<string, string | null>;
  /** Guests */
  guests?: number | null;
  /** Rooms */
  rooms?: number | null;
  /** Beds */
  beds?: number | null;
  /** Bathrooms */
  bathrooms?: number | null;
  /** Region */
  region?: string | null;
  /** District */
  district?: string | null;
  /** Region id */
  region_id?: string | null;
  /** District id */
  district_id?: string | null;
  /**
   * Prefecture id
   * @format uuid
   */
  prefecture_id?: string | null;
  /** Img */
  img?: object;
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

export interface ApartmentPartnerList {
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
}

export interface CottagePartnerList {
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
}

export interface Story {
  /**
   * Guid
   * @format uuid
   */
  guid: string;
  /** Property id */
  property_id?: string;
  /** Property title */
  property_title?: string;
  /** Property type guid */
  property_type_guid?: string;
  /** Img */
  img?: string;
  /** Media */
  media?: string;
}

export interface StoryDetail {
  /**
   * Guid
   * @format uuid
   */
  guid: string;
  /** Property */
  property?: string;
  /** Media */
  media?: string;
  /** Views */
  views?: string;
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
  id?: number;
  /** Guid */
  guid?: string;
  /**
   * Phone number
   * @minLength 1
   */
  phone_number?: string;
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
  id?: number;
  /** Guid */
  guid?: string;
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
  phone_number?: string;
  /** Avatar */
  avatar?: string | null;
  /**
   * Created at
   * @format date-time
   */
  created_at?: string;
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

export type AdminAuthLoginCreateData = any;

export type AdminAuthMeListData = any;

export type AdminAuthRegisterCreateData = AdminUser;

export type AdminAuthTokenRefreshCreateData = any;

export type AdminAuthUsersClientsListData = any;

export type AdminAuthUsersPartnersListData = any;

export interface BookingAdminBookingsListData {
  count: number;
  /** @format uri */
  next?: string | null;
  /** @format uri */
  previous?: string | null;
  results: RawAdminBookingList[];
}

export type BookingClientListData = RawClientBookingList[];

export type BookingClientCreateData = RawClientBookingCreate;

export type BookingClientHistoryListData = RawClientBookingHistoryList[];

export type BookingClientHistoryReadData = any;

export type BookingClientReadData = any;

export type BookingClientCancelCreateData = any;

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

export type LogsFrontendCreateData = any;

export type NotificationDeviceCreateData = any;

export type NotificationPartnerListData = any;

export type NotificationPartnerDeviceCreateData = any;

export type NotificationPartnerReadAllCreateData = any;

export type NotificationPartnerReadCreateData = any;

export type PropertyListData = PrefectureList[];

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

export type PropertyAdminApartmentsReadData = ApartmentAdminList;

export type PropertyAdminApartmentsPartialUpdateData = ApartmentAdminList;

export type PropertyAdminCottagesReadData = CottageAdminList;

export type PropertyAdminCottagesPartialUpdateData = CottageAdminList;

export type PropertyAdminDistrictsListData = DistrictList[];

export type PropertyAdminPrefecturesListData = PrefectureList[];

export type PropertyAdminRegionsListData = RegionList[];

export type PropertyApartmentListData = ApartmentList[];

export interface PropertyApartmentCreateData {
  detail?: string;
  /** @format uuid */
  property_id?: string;
  status_code?: number;
}

export type PropertyApartmentsListData = ApartmentList[];

export interface PropertyApartmentsCreateData {
  detail?: string;
  /** @format uuid */
  property_id?: string;
  status_code?: number;
}

export interface PropertyApartmentsReadData {
  /** @format uuid */
  guid?: string;
  title?: string;
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
}

export type PropertyApartmentsUpdateData = any;

export type PropertyApartmentsPartialUpdateData = any;

export type PropertyApartmentsDeleteData = any;

export type PropertyApartmentsImagesCreateData = any;

export type PropertyApartmentsImagesPartialUpdateData = any;

export type PropertyApartmentsImagesDeleteData = any;

export type PropertyApartmentsPartnerReviewsListData = any;

export type PropertyApartmentsReviewsListData = any;

export type PropertyApartmentsReviewsCreateData = any;

export type PropertyCategoriesListData = any;

export type PropertyCategoriesPropertiesListData = any;

export type PropertyCategoriesPropertiesLatestListData = any;

export type PropertyCottagesListData = CottageList[];

export interface PropertyCottagesCreateData {
  detail?: string;
  /** @format uuid */
  property_id?: string;
  status_code?: number;
}

export interface PropertyCottagesReadData {
  /** @format uuid */
  guid?: string;
  title?: string;
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
}

export type PropertyCottagesUpdateData = any;

export type PropertyCottagesPartialUpdateData = any;

export type PropertyCottagesDeleteData = any;

export type PropertyCottagesImagesCreateData = any;

export type PropertyCottagesImagesPartialUpdateData = any;

export type PropertyCottagesImagesDeleteData = any;

export type PropertyCottagesPartnerReviewsListData = any;

export type PropertyCottagesReviewsListData = any;

export type PropertyCottagesReviewsCreateData = any;

export type PropertyDistrictsListData = DistrictList[];

export type PropertyLocationListData = RegionsResponse;

export type PropertyPartnerAllListData = {
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

export type PropertyPartnerApartmentsListData = ApartmentPartnerList[];

export type PropertyPartnerCottagesListData = CottagePartnerList[];

export type PropertyPartnerPropertiesListData = {
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

export type PropertyPartnerPropertiesAnalyticsListData = any;

export type PropertyPrefecturesListData = PrefectureList[];

export type PropertyPropertiesListData = {
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

export type PropertyPropertiesCreateData = any;

export type PropertyPropertiesFavoritesListData = {
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

export interface PropertyPropertiesFilterByLinkCreateData {
  url?: string;
  link?: string;
}

export type PropertyRecommendationsListData = {
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

export type PropertyRegionsListData = RegionList[];

export type PropertyRegionsPropertiesListData = {
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

export type PropertyServicesListData = PropertyServiceList[];

export type PropertyTypesListData = any;

export type PropertyFavoriteCreateData = any;

export type PropertyFavoriteDeleteData = any;

export type StoryPartnerStoriesListData = Story[];

export type StoryPublicStoriesListData = Story[];

export type StoryStoriesListData = Story[];

export type StoryStoriesCreateData = Story;

export type StoryStoriesReadData = StoryDetail;

export type StoryStoriesDelete2Data = any;

export interface UserAccountDeleteData {
  detail?: string;
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

export namespace AdminAuth {
  /**
   * @description Admin login endpoint - only for staff/superuser
   * @tags admin-auth
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
   * @tags admin-auth
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
   * @tags admin-auth
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
   * @tags admin-auth
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
   * @tags admin-auth
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
   * @tags chat
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
   * @tags chat
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
   * @tags chat
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
   * @tags chat
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
   * @tags chat
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

export namespace Logs {
  /**
   * @description Frontend (brauzer) loglarini qabul qiladi – Grafana/Loki da ko'rsatiladi.
   * @tags logs
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

export namespace Property {
  /**
   * No description
   * @tags property
   * @name PropertyList
   * @request GET:/property/ /
   * @secure
   */
  export namespace PropertyList {
    export type RequestParams = {};
    export type RequestQuery = {
      district_id?: number;
      district_guid?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PropertyListData;
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
      search?: string;
      region_id?: number;
      district_id?: number;
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
   * @description Admin-only partial update for every writable field on the apartment table, including verification/archival/recommendation flags and owner reassignment. Unlike the partner endpoint, this does NOT auto-reset verification on save.
   * @tags Admin / Property
   * @name PropertyAdminApartmentsPartialUpdate
   * @summary Patch apartment (admin)
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
   * No description
   * @tags property
   * @name PropertyApartmentList
   * @request GET:/property/apartment/
   * @secure
   */
  export namespace PropertyApartmentList {
    export type RequestParams = {};
    export type RequestQuery = {
      search?: string;
      region_id?: number;
      district_id?: number;
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
    export type ResponseBody = PropertyApartmentListData;
  }

  /**
   * No description
   * @tags property
   * @name PropertyApartmentCreate
   * @request POST:/property/apartment/
   * @secure
   */
  export namespace PropertyApartmentCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = ApartmentCreate;
    export type RequestHeaders = {};
    export type ResponseBody = PropertyApartmentCreateData;
  }

  /**
   * No description
   * @tags property
   * @name PropertyApartmentsList
   * @request GET:/property/apartments/
   * @secure
   */
  export namespace PropertyApartmentsList {
    export type RequestParams = {};
    export type RequestQuery = {
      search?: string;
      region_id?: number;
      district_id?: number;
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
    export type ResponseBody = PropertyApartmentsListData;
  }

  /**
   * No description
   * @tags property
   * @name PropertyApartmentsCreate
   * @request POST:/property/apartments/
   * @secure
   */
  export namespace PropertyApartmentsCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = ApartmentCreate;
    export type RequestHeaders = {};
    export type ResponseBody = PropertyApartmentsCreateData;
  }

  /**
   * No description
   * @tags property
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
   * No description
   * @tags property
   * @name PropertyApartmentsUpdate
   * @request PUT:/property/apartments/{property_id}/
   * @secure
   */
  export namespace PropertyApartmentsUpdate {
    export type RequestParams = {
      propertyId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PropertyApartmentsUpdateData;
  }

  /**
   * No description
   * @tags property
   * @name PropertyApartmentsPartialUpdate
   * @request PATCH:/property/apartments/{property_id}/
   * @secure
   */
  export namespace PropertyApartmentsPartialUpdate {
    export type RequestParams = {
      propertyId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PropertyApartmentsPartialUpdateData;
  }

  /**
   * No description
   * @tags property
   * @name PropertyApartmentsDelete
   * @request DELETE:/property/apartments/{property_id}/
   * @secure
   */
  export namespace PropertyApartmentsDelete {
    export type RequestParams = {
      propertyId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PropertyApartmentsDeleteData;
  }

  /**
   * No description
   * @tags property
   * @name PropertyApartmentsImagesCreate
   * @request POST:/property/apartments/{property_id}/images/
   * @secure
   */
  export namespace PropertyApartmentsImagesCreate {
    export type RequestParams = {
      propertyId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PropertyApartmentsImagesCreateData;
  }

  /**
   * No description
   * @tags property
   * @name PropertyApartmentsImagesPartialUpdate
   * @request PATCH:/property/apartments/{property_id}/images/{image_id}/
   * @secure
   */
  export namespace PropertyApartmentsImagesPartialUpdate {
    export type RequestParams = {
      propertyId: string;
      imageId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PropertyApartmentsImagesPartialUpdateData;
  }

  /**
   * No description
   * @tags property
   * @name PropertyApartmentsImagesDelete
   * @request DELETE:/property/apartments/{property_id}/images/{image_id}/
   * @secure
   */
  export namespace PropertyApartmentsImagesDelete {
    export type RequestParams = {
      propertyId: string;
      imageId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PropertyApartmentsImagesDeleteData;
  }

  /**
   * No description
   * @tags property
   * @name PropertyApartmentsPartnerReviewsList
   * @request GET:/property/apartments/{property_id}/partner/reviews/
   * @secure
   */
  export namespace PropertyApartmentsPartnerReviewsList {
    export type RequestParams = {
      propertyId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PropertyApartmentsPartnerReviewsListData;
  }

  /**
   * No description
   * @tags property
   * @name PropertyApartmentsReviewsList
   * @request GET:/property/apartments/{property_id}/reviews/
   * @secure
   */
  export namespace PropertyApartmentsReviewsList {
    export type RequestParams = {
      propertyId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PropertyApartmentsReviewsListData;
  }

  /**
   * No description
   * @tags property
   * @name PropertyApartmentsReviewsCreate
   * @request POST:/property/apartments/{property_id}/reviews/
   * @secure
   */
  export namespace PropertyApartmentsReviewsCreate {
    export type RequestParams = {
      propertyId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PropertyApartmentsReviewsCreateData;
  }

  /**
   * No description
   * @tags property
   * @name PropertyCategoriesList
   * @request GET:/property/categories/
   * @secure
   */
  export namespace PropertyCategoriesList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PropertyCategoriesListData;
  }

  /**
   * No description
   * @tags property
   * @name PropertyCategoriesPropertiesList
   * @request GET:/property/categories/{category_id}/properties/
   * @secure
   */
  export namespace PropertyCategoriesPropertiesList {
    export type RequestParams = {
      categoryId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PropertyCategoriesPropertiesListData;
  }

  /**
   * No description
   * @tags property
   * @name PropertyCategoriesPropertiesLatestList
   * @request GET:/property/categories/{category_id}/properties/latest/
   * @secure
   */
  export namespace PropertyCategoriesPropertiesLatestList {
    export type RequestParams = {
      categoryId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PropertyCategoriesPropertiesLatestListData;
  }

  /**
   * No description
   * @tags property
   * @name PropertyCottagesList
   * @request GET:/property/cottages/
   * @secure
   */
  export namespace PropertyCottagesList {
    export type RequestParams = {};
    export type RequestQuery = {
      search?: string;
      region_id?: number;
      district_id?: number;
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
    export type ResponseBody = PropertyCottagesListData;
  }

  /**
   * No description
   * @tags property
   * @name PropertyCottagesCreate
   * @request POST:/property/cottages/
   * @secure
   */
  export namespace PropertyCottagesCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CottageCreate;
    export type RequestHeaders = {};
    export type ResponseBody = PropertyCottagesCreateData;
  }

  /**
   * No description
   * @tags property
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
   * No description
   * @tags property
   * @name PropertyCottagesUpdate
   * @request PUT:/property/cottages/{property_id}/
   * @secure
   */
  export namespace PropertyCottagesUpdate {
    export type RequestParams = {
      propertyId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PropertyCottagesUpdateData;
  }

  /**
   * No description
   * @tags property
   * @name PropertyCottagesPartialUpdate
   * @request PATCH:/property/cottages/{property_id}/
   * @secure
   */
  export namespace PropertyCottagesPartialUpdate {
    export type RequestParams = {
      propertyId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PropertyCottagesPartialUpdateData;
  }

  /**
   * No description
   * @tags property
   * @name PropertyCottagesDelete
   * @request DELETE:/property/cottages/{property_id}/
   * @secure
   */
  export namespace PropertyCottagesDelete {
    export type RequestParams = {
      propertyId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PropertyCottagesDeleteData;
  }

  /**
   * No description
   * @tags property
   * @name PropertyCottagesImagesCreate
   * @request POST:/property/cottages/{property_id}/images/
   * @secure
   */
  export namespace PropertyCottagesImagesCreate {
    export type RequestParams = {
      propertyId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PropertyCottagesImagesCreateData;
  }

  /**
   * No description
   * @tags property
   * @name PropertyCottagesImagesPartialUpdate
   * @request PATCH:/property/cottages/{property_id}/images/{image_id}/
   * @secure
   */
  export namespace PropertyCottagesImagesPartialUpdate {
    export type RequestParams = {
      propertyId: string;
      imageId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PropertyCottagesImagesPartialUpdateData;
  }

  /**
   * No description
   * @tags property
   * @name PropertyCottagesImagesDelete
   * @request DELETE:/property/cottages/{property_id}/images/{image_id}/
   * @secure
   */
  export namespace PropertyCottagesImagesDelete {
    export type RequestParams = {
      propertyId: string;
      imageId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PropertyCottagesImagesDeleteData;
  }

  /**
   * No description
   * @tags property
   * @name PropertyCottagesPartnerReviewsList
   * @request GET:/property/cottages/{property_id}/partner/reviews/
   * @secure
   */
  export namespace PropertyCottagesPartnerReviewsList {
    export type RequestParams = {
      propertyId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PropertyCottagesPartnerReviewsListData;
  }

  /**
   * No description
   * @tags property
   * @name PropertyCottagesReviewsList
   * @request GET:/property/cottages/{property_id}/reviews/
   * @secure
   */
  export namespace PropertyCottagesReviewsList {
    export type RequestParams = {
      propertyId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PropertyCottagesReviewsListData;
  }

  /**
   * No description
   * @tags property
   * @name PropertyCottagesReviewsCreate
   * @request POST:/property/cottages/{property_id}/reviews/
   * @secure
   */
  export namespace PropertyCottagesReviewsCreate {
    export type RequestParams = {
      propertyId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PropertyCottagesReviewsCreateData;
  }

  /**
   * No description
   * @tags property
   * @name PropertyDistrictsList
   * @request GET:/property/districts/
   * @secure
   */
  export namespace PropertyDistrictsList {
    export type RequestParams = {};
    export type RequestQuery = {
      region_id?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PropertyDistrictsListData;
  }

  /**
   * No description
   * @tags property
   * @name PropertyLocationList
   * @request GET:/property/location/
   * @secure
   */
  export namespace PropertyLocationList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PropertyLocationListData;
  }

  /**
   * No description
   * @tags property
   * @name PropertyPartnerAllList
   * @request GET:/property/partner/all/
   * @secure
   */
  export namespace PropertyPartnerAllList {
    export type RequestParams = {};
    export type RequestQuery = {
      /** Admin only: target partner user id. Partners ignore this and always use the JWT subject. */
      partner_id?: number;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PropertyPartnerAllListData;
  }

  /**
   * No description
   * @tags property
   * @name PropertyPartnerApartmentsList
   * @request GET:/property/partner/apartments/
   * @secure
   */
  export namespace PropertyPartnerApartmentsList {
    export type RequestParams = {};
    export type RequestQuery = {
      search?: string;
      region_id?: number;
      district_id?: number;
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
    export type ResponseBody = PropertyPartnerApartmentsListData;
  }

  /**
   * No description
   * @tags property
   * @name PropertyPartnerCottagesList
   * @request GET:/property/partner/cottages/
   * @secure
   */
  export namespace PropertyPartnerCottagesList {
    export type RequestParams = {};
    export type RequestQuery = {
      search?: string;
      region_id?: number;
      district_id?: number;
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
    export type ResponseBody = PropertyPartnerCottagesListData;
  }

  /**
   * No description
   * @tags property
   * @name PropertyPartnerPropertiesList
   * @request GET:/property/partner/properties/
   * @secure
   */
  export namespace PropertyPartnerPropertiesList {
    export type RequestParams = {};
    export type RequestQuery = {
      search?: string;
      region_id?: number;
      district_id?: number;
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
      property_type?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PropertyPartnerPropertiesListData;
  }

  /**
   * No description
   * @tags property
   * @name PropertyPartnerPropertiesAnalyticsList
   * @request GET:/property/partner/properties/{property_id}/analytics/
   * @secure
   */
  export namespace PropertyPartnerPropertiesAnalyticsList {
    export type RequestParams = {
      propertyId: string;
    };
    export type RequestQuery = {
      range?: "week" | "month" | "quarter" | "year";
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PropertyPartnerPropertiesAnalyticsListData;
  }

  /**
   * No description
   * @tags property
   * @name PropertyPrefecturesList
   * @request GET:/property/prefectures/
   * @secure
   */
  export namespace PropertyPrefecturesList {
    export type RequestParams = {};
    export type RequestQuery = {
      district_id?: number;
      district_guid?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PropertyPrefecturesListData;
  }

  /**
   * No description
   * @tags property
   * @name PropertyPropertiesList
   * @request GET:/property/properties/
   * @secure
   */
  export namespace PropertyPropertiesList {
    export type RequestParams = {};
    export type RequestQuery = {
      search?: string;
      region_id?: number;
      district_id?: number;
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
    export type ResponseBody = PropertyPropertiesListData;
  }

  /**
   * No description
   * @tags property
   * @name PropertyPropertiesCreate
   * @request POST:/property/properties/
   * @secure
   */
  export namespace PropertyPropertiesCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PropertyPropertiesCreateData;
  }

  /**
   * No description
   * @tags property
   * @name PropertyPropertiesFavoritesList
   * @request GET:/property/properties/favorites/
   * @secure
   */
  export namespace PropertyPropertiesFavoritesList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PropertyPropertiesFavoritesListData;
  }

  /**
   * No description
   * @tags property
   * @name PropertyPropertiesFilterByLinkCreate
   * @request POST:/property/properties/filter-by-link/
   * @secure
   */
  export namespace PropertyPropertiesFilterByLinkCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = {
      url?: string;
      link?: string;
    };
    export type RequestHeaders = {};
    export type ResponseBody = PropertyPropertiesFilterByLinkCreateData;
  }

  /**
   * No description
   * @tags property
   * @name PropertyRecommendationsList
   * @request GET:/property/recommendations/
   * @secure
   */
  export namespace PropertyRecommendationsList {
    export type RequestParams = {};
    export type RequestQuery = {
      search?: string;
      region_id?: number;
      district_id?: number;
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
    export type RequestHeaders = {};
    export type ResponseBody = PropertyRecommendationsListData;
  }

  /**
   * No description
   * @tags property
   * @name PropertyRegionsList
   * @request GET:/property/regions/
   * @secure
   */
  export namespace PropertyRegionsList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PropertyRegionsListData;
  }

  /**
   * No description
   * @tags property
   * @name PropertyRegionsPropertiesList
   * @request GET:/property/regions/{region_id}/properties/
   * @secure
   */
  export namespace PropertyRegionsPropertiesList {
    export type RequestParams = {
      regionId: string;
    };
    export type RequestQuery = {
      search?: string;
      region_id?: number;
      district_id?: number;
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
    export type ResponseBody = PropertyRegionsPropertiesListData;
  }

  /**
   * No description
   * @tags property
   * @name PropertyServicesList
   * @request GET:/property/services/
   * @secure
   */
  export namespace PropertyServicesList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PropertyServicesListData;
  }

  /**
   * No description
   * @tags property
   * @name PropertyTypesList
   * @request GET:/property/types/
   * @secure
   */
  export namespace PropertyTypesList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PropertyTypesListData;
  }

  /**
   * No description
   * @tags property
   * @name PropertyFavoriteCreate
   * @request POST:/property/{property_id}/favorite/
   * @secure
   */
  export namespace PropertyFavoriteCreate {
    export type RequestParams = {
      propertyId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PropertyFavoriteCreateData;
  }

  /**
   * No description
   * @tags property
   * @name PropertyFavoriteDelete
   * @request DELETE:/property/{property_id}/favorite/
   * @secure
   */
  export namespace PropertyFavoriteDelete {
    export type RequestParams = {
      propertyId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PropertyFavoriteDeleteData;
  }
}

export namespace Story {
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
   * @description Request without parameters returns 404. property_type must be sent.
   * @tags Stories
   * @name StoryPublicStoriesList
   * @summary Public stories list
   * @request GET:/story/public/stories/
   * @secure
   */
  export namespace StoryPublicStoriesList {
    export type RequestParams = {};
    export type RequestQuery = {
      /** Property type (apartment/cottage) */
      property_type: string;
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
   * @name StoryStoriesDelete
   * @summary Delete all the stories entirely
   * @request DELETE:/story/stories/{story_id}/
   * @secure
   */
  export namespace StoryStoriesDelete {
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
   * @originalName storyStoriesDelete
   * @duplicate
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
   * @description Hard delete the authenticated client or partner account and related records. This action is irreversible.
   * @tags Auth - Profile
   * @name UserAccountDelete
   * @summary Permanently delete own account (Client or Partner)
   * @request DELETE:/user/account/
   * @secure
   */
  export namespace UserAccountDelete {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = {
      /** Refresh token to blacklist */
      refresh?: string;
    };
    export type RequestHeaders = {};
    export type ResponseBody = UserAccountDeleteData;
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
   * @description Hard delete partner account and related records. This action is irreversible.
   * @tags Auth - Profile
   * @name UserPartnerProfileDelete
   * @summary Permanently delete own partner profile
   * @request DELETE:/user/partner/profile/
   * @secure
   */
  export namespace UserPartnerProfileDelete {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = {
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
