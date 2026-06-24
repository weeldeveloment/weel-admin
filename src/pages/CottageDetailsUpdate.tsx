import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useReducer,
  useState,
} from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { api, fetchExchangeRate } from "@/lib/api";
import { resolveImageUrl, cn } from "@/lib/utils";
import { formatUzbekPhoneNumber, getPhoneHref } from "@/lib/phone";
import { fetchAllPartners, type PartnerDetails } from "@/lib/partners";
import type {
  CottageAdminList,
  CottageAdminUpdate,
  CottageAdminPropertyDetail,
  PropertyServiceList,
  RegionList,
  DistrictList,
  PrefectureList,
} from "@/types/weel-openapi";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PriceInput } from "@/components/ui/price-input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Save,
  GripVertical,
  Trash2,
  Plus,
  Loader2,
  Copy,
  Check,
  Phone,
  Upload,
  ChevronLeft,
} from "lucide-react";

type LocationOption = {
  id: string;
  label: string;
  region_id?: string;
  district_guid?: string;
};

function CopyBlock({ label, data }: { label: string; data: unknown }) {
  const [copied, setCopied] = useReducer(
    (_: boolean, next: boolean) => next,
    false,
  );
  const json = JSON.stringify(data, null, 2);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(json);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div>
      <div className="mb-1 flex items-center justify-between">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          {label}
        </p>
        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          {copied ? (
            <Check className="h-3 w-3 text-green-600" />
          ) : (
            <Copy className="h-3 w-3" />
          )}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre className="max-h-64 overflow-auto rounded-md border bg-black/5 p-3 text-xs">
        {json}
      </pre>
    </div>
  );
}

const MAX_IMAGES = 10;

/* ──────────── helpers ──────────── */

function formatDateTime(value?: string | null) {
  if (!value) return "-";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleString();
}

function getMonthRange(offset: number) {
  const now = new Date();
  const start = new Date(now.getFullYear(), now.getMonth() + offset, 1);
  const end = new Date(now.getFullYear(), now.getMonth() + offset + 1, 0);
  const pad = (n: number) => String(n).padStart(2, "0");
  return {
    from: `${start.getFullYear()}-${pad(start.getMonth() + 1)}-${pad(start.getDate())}`,
    to: `${end.getFullYear()}-${pad(end.getMonth() + 1)}-${pad(end.getDate())}`,
  };
}

function getMonthLabel(offset: number) {
  const date = new Date();
  date.setMonth(date.getMonth() + offset);
  return date.toLocaleString("ru-RU", { month: "long", year: "numeric" });
}

function normalizePriceValue(value: unknown): string {
  if (value === null || value === undefined) return "";
  return String(value);
}

function toPositiveNumber(value: unknown, fallback = 1) {
  const parsed = Number(value);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
}

function normalizeCoordinateForApi(value: string): string | null {
  const parsed = Number.parseFloat(value);
  if (!Number.isFinite(parsed)) return null;
  return parsed.toFixed(8);
}

function extractScalarPrices(priceItems: PriceItem[]) {
  const source = priceItems[0] || {};
  const perPerson = Number.parseFloat(String(source.price_per_person ?? "0"));
  const working = Number.parseFloat(
    String(source.price_on_working_days ?? "0"),
  );
  const weekends = Number.parseFloat(
    String(
      source.price_on_weekends ?? (Number.isFinite(working) ? working : 0),
    ),
  );
  return {
    price_per_person: Number.isFinite(perPerson) ? perPerson : 0,
    price_on_working_days: Number.isFinite(working) ? working : 0,
    price_on_weekends: Number.isFinite(weekends)
      ? weekends
      : Number.isFinite(working)
        ? working
        : 0,
  };
}

function getMutationErrorMessage(error: unknown, fallback: string): string {
  const maybeAxiosLikeError = error as {
    response?: {
      data?: {
        errors?: Array<{ detail?: string | null }> | null;
        detail?: string | null;
      };
    };
  };
  const firstErrorDetail =
    maybeAxiosLikeError.response?.data?.errors?.[0]?.detail;
  if (firstErrorDetail) {
    return firstErrorDetail;
  }
  const responseDetail = maybeAxiosLikeError.response?.data?.detail;
  if (responseDetail) {
    return responseDetail;
  }
  if (error instanceof Error && error.message) {
    return error.message;
  }
  return fallback;
}

/* ──────────── types ──────────── */

type PriceItem = {
  guid?: string;
  month_from?: string;
  month_to?: string;
  price_per_person: string | number;
  price_on_working_days: string | number;
  price_on_weekends: string | number;
};

type CottageAdminListWithPrices = CottageAdminList & {
  price?: PriceItem[] | null;
};

type State = {
  data: CottageAdminList | null;
  hasHydrated: boolean;
  title: string;
  descRu: string;
  descUz: string;
  amenities: string[];
  currency: "USD" | "UZS";
  price: PriceItem[];
  location: {
    latitude: string;
    longitude: string;
    country: string;
    city: string;
    region_id: string | null;
    district_id: string | null;
    prefecture_id: string | null;
  };
  quietHours: "yes" | "no";
  checkTimes: { check_in: string; check_out: string };
  allowedAlcohol: boolean;
  allowedCorp: boolean;
  allowedPets: boolean;
  guests: number;
  rooms: number;
  beds: number;
  bathrooms: number;
  isVerified: boolean;
  isArchived: boolean;
  isRecommended: boolean;
  isTesting: boolean;
  verificationStatus: string | null;
  savedMessage: string | null;
  errorMessage: string | null;
  imageMessage: string | null;
  draggedIndex: number | null;
  dragOverIndex: number | null;
  isDragOver: boolean;
  deleteDialogOpen: boolean;
  deleteConfirmText: string;
};

type Action =
  | { type: "HYDRATE_FROM_API"; payload: CottageAdminList }
  | { type: "SET_HAS_HYDRATED"; payload: boolean }
  | { type: "SET_TITLE"; payload: string }
  | { type: "SET_DESC_RU"; payload: string }
  | { type: "SET_DESC_UZ"; payload: string }
  | { type: "SET_AMENITIES"; payload: string[] }
  | { type: "SET_CURRENCY"; payload: "USD" | "UZS" }
  | { type: "SET_PRICE"; payload: PriceItem[] }
  | { type: "SET_LOCATION"; payload: Partial<State["location"]> }
  | { type: "SET_QUIET_HOURS"; payload: "yes" | "no" }
  | { type: "SET_CHECK_TIMES"; payload: Partial<State["checkTimes"]> }
  | { type: "SET_ALLOWED_ALCOHOL"; payload: boolean }
  | { type: "SET_ALLOWED_CORP"; payload: boolean }
  | { type: "SET_ALLOWED_PETS"; payload: boolean }
  | { type: "SET_GUESTS"; payload: number }
  | { type: "SET_ROOMS"; payload: number }
  | { type: "SET_BEDS"; payload: number }
  | { type: "SET_BATHROOMS"; payload: number }
  | { type: "SET_IS_VERIFIED"; payload: boolean }
  | { type: "SET_IS_ARCHIVED"; payload: boolean }
  | { type: "SET_IS_RECOMMENDED"; payload: boolean }
  | { type: "SET_IS_TESTING"; payload: boolean }
  | { type: "SET_VERIFICATION_STATUS"; payload: string | null }
  | { type: "SET_SAVED_MESSAGE"; payload: string | null }
  | { type: "SET_ERROR_MESSAGE"; payload: string | null }
  | { type: "SET_IMAGE_MESSAGE"; payload: string | null }
  | { type: "SET_DRAGGED_INDEX"; payload: number | null }
  | { type: "SET_DRAG_OVER_INDEX"; payload: number | null }
  | { type: "SET_IS_DRAG_OVER"; payload: boolean }
  | { type: "SET_DELETE_DIALOG_OPEN"; payload: boolean }
  | { type: "SET_DELETE_CONFIRM_TEXT"; payload: string };

const initialState: State = {
  data: null,
  hasHydrated: false,
  title: "",
  descRu: "",
  descUz: "",
  amenities: [],
  currency: "USD",
  price: [
    {
      month_from: getMonthRange(0).from,
      month_to: getMonthRange(0).to,
      price_per_person: "10",
      price_on_working_days: "100",
      price_on_weekends: "100",
    },
    {
      month_from: getMonthRange(1).from,
      month_to: getMonthRange(1).to,
      price_per_person: "10",
      price_on_working_days: "100",
      price_on_weekends: "100",
    },
  ],
  location: {
    latitude: "",
    longitude: "",
    country: "",
    city: "",
    region_id: null,
    district_id: null,
    prefecture_id: null,
  },
  quietHours: "yes",
  checkTimes: { check_in: "19:00:00", check_out: "17:00:00" },
  allowedAlcohol: false,
  allowedCorp: false,
  allowedPets: false,
  guests: 1,
  rooms: 1,
  beds: 1,
  bathrooms: 1,
  isVerified: false,
  isArchived: false,
  isRecommended: false,
  isTesting: false,
  verificationStatus: null,
  savedMessage: null,
  errorMessage: null,
  imageMessage: null,
  draggedIndex: null,
  dragOverIndex: null,
  isDragOver: false,
  deleteDialogOpen: false,
  deleteConfirmText: "",
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "HYDRATE_FROM_API": {
      const merged = action.payload as CottageAdminListWithPrices;
      const detail = (merged.property_detail ||
        {}) as CottageAdminPropertyDetail;
      const currentRange = getMonthRange(0);
      const nextRange = getMonthRange(1);
      const currency = (merged.currency as "USD" | "UZS") || "USD";
      const workValue = normalizePriceValue(merged.price_on_working_days);
      const weekendValue = normalizePriceValue(merged.price_on_weekends);
      const existingPrices = Array.isArray(merged.price) ? merged.price : [];

      const now = new Date();
      const currentMonth = now.getMonth();
      const currentYear = now.getFullYear();
      const nextDate = new Date(currentYear, currentMonth + 1, 1);
      const nextMonth = nextDate.getMonth();
      const nextYear = nextDate.getFullYear();

      const currentItem = existingPrices.find((item: PriceItem) => {
        if (!item.month_from) return false;
        const d = new Date(item.month_from);
        return d.getMonth() === currentMonth && d.getFullYear() === currentYear;
      });

      const nextItem = existingPrices.find((item: PriceItem) => {
        if (!item.month_from) return false;
        const d = new Date(item.month_from);
        return d.getMonth() === nextMonth && d.getFullYear() === nextYear;
      });

      const perPerson = currency === "USD" ? "10" : "100000";

      return {
        ...state,
        data: merged,
        hasHydrated: true,
        title: merged.title || "",
        descRu: detail.description_ru || "",
        descUz: detail.description_uz || "",
        amenities: (merged.services || []).filter(
          (s): s is string => s !== null,
        ),
        currency,
        price: [
          {
            guid: currentItem?.guid,
            month_from: currentItem?.month_from || currentRange.from,
            month_to: currentItem?.month_to || currentRange.to,
            price_per_person:
              normalizePriceValue(currentItem?.price_per_person) || perPerson,
            price_on_working_days:
              normalizePriceValue(currentItem?.price_on_working_days) ||
              workValue,
            price_on_weekends:
              normalizePriceValue(currentItem?.price_on_weekends) ||
              weekendValue,
          },
          {
            guid: nextItem?.guid,
            month_from: nextItem?.month_from || nextRange.from,
            month_to: nextItem?.month_to || nextRange.to,
            price_per_person:
              normalizePriceValue(nextItem?.price_per_person) || perPerson,
            price_on_working_days:
              normalizePriceValue(nextItem?.price_on_working_days) || workValue,
            price_on_weekends:
              normalizePriceValue(nextItem?.price_on_weekends) || weekendValue,
          },
        ],
        location: {
          latitude: String(
            merged.property_location?.latitude ?? merged.latitude ?? "",
          ),
          longitude: String(
            merged.property_location?.longitude ?? merged.longitude ?? "",
          ),
          country: merged.property_location?.country ?? merged.country ?? "",
          city: merged.property_location?.city ?? merged.city ?? "",
          region_id:
            merged.property_location?.region?.id != null
              ? String(merged.property_location.region.id)
              : merged.region?.id != null
                ? String(merged.region.id)
                : null,
          district_id:
            merged.property_location?.district?.id != null
              ? String(merged.property_location.district.id)
              : merged.district?.id != null
                ? String(merged.district.id)
                : null,
          prefecture_id: (() => {
            const prefectureId =
              merged.property_location?.prefecture?.id ?? merged.prefecture_id;
            return prefectureId != null ? String(prefectureId) : null;
          })(),
        },
        quietHours: detail.is_quiet_hours ? "yes" : "no",
        checkTimes: {
          check_in: detail.check_in || "19:00:00",
          check_out: detail.check_out || "17:00:00",
        },
        allowedAlcohol: Boolean(detail.is_allowed_alcohol ?? false),
        allowedCorp: Boolean(detail.is_allowed_corporate ?? false),
        allowedPets: Boolean(detail.is_allowed_pets ?? false),
        guests: toPositiveNumber(merged.guests),
        rooms: toPositiveNumber(merged.rooms),
        beds: toPositiveNumber(merged.beds),
        bathrooms: toPositiveNumber(merged.bathrooms),
        isVerified: merged.is_verified ?? false,
        isArchived: merged.is_archived ?? false,
        isRecommended: merged.is_recommended ?? false,
        isTesting: merged.is_testing ?? false,
        verificationStatus: merged.verification_status ?? null,
      };
    }
    case "SET_HAS_HYDRATED":
      return { ...state, hasHydrated: action.payload };
    case "SET_TITLE":
      return { ...state, title: action.payload };
    case "SET_DESC_RU":
      return { ...state, descRu: action.payload };
    case "SET_DESC_UZ":
      return { ...state, descUz: action.payload };
    case "SET_AMENITIES":
      return { ...state, amenities: action.payload };
    case "SET_CURRENCY":
      return { ...state, currency: action.payload };
    case "SET_PRICE":
      return { ...state, price: action.payload };
    case "SET_LOCATION":
      return { ...state, location: { ...state.location, ...action.payload } };
    case "SET_QUIET_HOURS":
      return { ...state, quietHours: action.payload };
    case "SET_CHECK_TIMES":
      return {
        ...state,
        checkTimes: { ...state.checkTimes, ...action.payload },
      };
    case "SET_ALLOWED_ALCOHOL":
      return { ...state, allowedAlcohol: action.payload };
    case "SET_ALLOWED_CORP":
      return { ...state, allowedCorp: action.payload };
    case "SET_ALLOWED_PETS":
      return { ...state, allowedPets: action.payload };
    case "SET_GUESTS":
      return { ...state, guests: action.payload };
    case "SET_ROOMS":
      return { ...state, rooms: action.payload };
    case "SET_BEDS":
      return { ...state, beds: action.payload };
    case "SET_BATHROOMS":
      return { ...state, bathrooms: action.payload };
    case "SET_IS_VERIFIED":
      return { ...state, isVerified: action.payload };
    case "SET_IS_ARCHIVED":
      return { ...state, isArchived: action.payload };
    case "SET_IS_RECOMMENDED":
      return { ...state, isRecommended: action.payload };
    case "SET_IS_TESTING":
      return { ...state, isTesting: action.payload };
    case "SET_VERIFICATION_STATUS":
      return { ...state, verificationStatus: action.payload };
    case "SET_SAVED_MESSAGE":
      return { ...state, savedMessage: action.payload };
    case "SET_ERROR_MESSAGE":
      return { ...state, errorMessage: action.payload };
    case "SET_IMAGE_MESSAGE":
      return { ...state, imageMessage: action.payload };
    case "SET_DRAGGED_INDEX":
      return { ...state, draggedIndex: action.payload };
    case "SET_DRAG_OVER_INDEX":
      return { ...state, dragOverIndex: action.payload };
    case "SET_IS_DRAG_OVER":
      return { ...state, isDragOver: action.payload };
    case "SET_DELETE_DIALOG_OPEN":
      return { ...state, deleteDialogOpen: action.payload };
    case "SET_DELETE_CONFIRM_TEXT":
      return { ...state, deleteConfirmText: action.payload };
    default:
      return state;
  }
}

/* ──────────── API ──────────── */

const fetchCottage = async (id: string): Promise<CottageAdminList> => {
  const response = await api.get<CottageAdminList>(
    `/property/admin/cottages/${id}/`,
  );
  return response.data;
};

const updateCottage = async (
  id: string,
  payload: CottageAdminUpdate,
): Promise<CottageAdminList> => {
  const response = await api.patch<CottageAdminList>(
    `/property/admin/cottages/${id}/`,
    payload,
  );
  return response.data;
};

const createCottage = async (
  payload: CottageAdminUpdate & { partner_user_id?: number | null },
): Promise<CottageAdminList> => {
  const response = await api.post<CottageAdminList>(
    "/property/admin/cottages/",
    payload,
  );
  return response.data;
};

const deleteCottage = async (id: string): Promise<void> => {
  await api.delete(`/property/admin/cottages/${id}/`);
};

const uploadCottageImage = async (id: string, file: File): Promise<unknown> => {
  const formData = new FormData();
  formData.append("image", file);
  const response = await api.post(
    `/property/admin/cottages/${id}/images/`,
    formData,
    { headers: { "Content-Type": undefined } },
  );
  return response.data;
};

const fetchServices = async (
  propertyTypeId?: string,
): Promise<PropertyServiceList[]> => {
  const params: Record<string, string> = {};
  if (propertyTypeId) {
    params.property_type_id = propertyTypeId;
  }
  const response = await api.get<PropertyServiceList[]>("/property/services/", {
    params,
    headers: { "Accept-Language": "ru" },
  });
  return response.data ?? [];
};

const fetchRegions = async (): Promise<LocationOption[]> => {
  const response = await api.get<RegionList[]>("/property/admin/regions/");
  return (response.data ?? []).map((r) => ({
    id: String(r.id ?? ""),
    label: r.title ?? "",
  }));
};

const fetchDistricts = async (): Promise<LocationOption[]> => {
  const response = await api.get<DistrictList[]>("/property/admin/districts/");
  return (response.data ?? []).map((d) => ({
    id: String(d.id ?? ""),
    label: d.title ?? "",
    region_id: String(d.region_id ?? ""),
  }));
};

const fetchPrefectures = async (): Promise<LocationOption[]> => {
  const response = await api.get<PrefectureList[]>(
    "/property/admin/prefectures/",
  );
  return (response.data ?? []).map((p) => ({
    id: String(p.guid ?? ""),
    label: p.title ?? "",
    district_guid: String(p.district?.guid ?? ""),
  }));
};

/* ──────────── component ──────────── */

export default function CottageDetailsUpdate() {
  const { propertyId } = useParams<{ propertyId: string }>();
  const isCreateMode = propertyId === "create";
  const { t } = useTranslation();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const [state, dispatch] = useReducer(reducer, initialState);
  const [selectedPartnerId, setSelectedPartnerId] = useState<string>("");
  const [partnerSearchTerm, setPartnerSearchTerm] = useState("");
  const [pendingCreateImages, setPendingCreateImages] = useState<
    Array<{ file: File; previewUrl: string }>
  >([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const savedMessageTimerRef = useRef<number | null>(null);
  const imageMessageTimerRef = useRef<number | null>(null);

  const cottageQuery = useQuery({
    queryKey: ["cottage", propertyId],
    queryFn: () => fetchCottage(propertyId!),
    enabled: Boolean(propertyId) && !isCreateMode,
  });

  const regionsQuery = useQuery({
    queryKey: ["regions"],
    queryFn: fetchRegions,
  });

  const districtsQuery = useQuery({
    queryKey: ["districts"],
    queryFn: fetchDistricts,
  });

  const prefecturesQuery = useQuery({
    queryKey: ["prefectures"],
    queryFn: fetchPrefectures,
  });

  const servicesQuery = useQuery({
    queryKey: ["services", state.data?.property_type_id],
    queryFn: () => fetchServices(state.data?.property_type_id),
    enabled: isCreateMode || Boolean(state.data?.property_type_id),
  });

  const partnersQuery = useQuery({
    queryKey: ["adminPartners"],
    queryFn: fetchAllPartners,
  });

  const partnerOptions = useMemo(
    () =>
      (partnersQuery.data ?? [])
        .filter(
          (partner): partner is PartnerDetails & { id: number } =>
            typeof partner.id === "number",
        )
        .sort((a, b) => {
          const nameA =
            a.full_name ||
            [a.first_name, a.last_name].join(" ") ||
            a.username ||
            "";
          const nameB =
            b.full_name ||
            [b.first_name, b.last_name].join(" ") ||
            b.username ||
            "";
          return nameA.localeCompare(nameB);
        }),
    [partnersQuery.data],
  );
  const selectedPartner = useMemo(
    () =>
      partnerOptions.find(
        (partner) => String(partner.id) === selectedPartnerId,
      ) ?? null,
    [partnerOptions, selectedPartnerId],
  );
  const filteredPartnerOptions = useMemo(() => {
    const q = partnerSearchTerm.trim().toLowerCase();
    if (!q) return partnerOptions;
    return partnerOptions.filter((partner) => {
      const fullName =
        partner.full_name ||
        [partner.first_name, partner.last_name].filter(Boolean).join(" ") ||
        "";
      const haystack = [
        fullName,
        partner.username,
        partner.phone_number,
        partner.email,
        String(partner.id),
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [partnerOptions, partnerSearchTerm]);

  /* hydrate once from query */
  useEffect(() => {
    if (cottageQuery.data && !state.hasHydrated) {
      dispatch({ type: "HYDRATE_FROM_API", payload: cottageQuery.data });
    }
  }, [cottageQuery.data, state.hasHydrated]);

  useEffect(() => {
    return () => {
      if (savedMessageTimerRef.current) {
        window.clearTimeout(savedMessageTimerRef.current);
      }
      if (imageMessageTimerRef.current) {
        window.clearTimeout(imageMessageTimerRef.current);
      }
    };
  }, []);

  /* ───── mutations ───── */

  const updateMutation = useMutation({
    mutationFn: async (payload: CottageAdminUpdate) => {
      const result = isCreateMode
        ? await createCottage({
            ...payload,
            partner_user_id: Number(selectedPartnerId),
          })
        : await updateCottage(propertyId!, payload);
      return result;
    },
    onSuccess: async (result) => {
      if (isCreateMode) {
        for (const pending of pendingCreateImages) {
          try {
            await uploadCottageImage(result.guid, pending.file);
          } catch {
            // keep create success; image failures are surfaced as a message
            dispatch({
              type: "SET_ERROR_MESSAGE",
              payload:
                t("propertyDetails.messages.imageUpdateFailed") ??
                "Failed to update image",
            });
          }
        }
        pendingCreateImages.forEach((item) =>
          URL.revokeObjectURL(item.previewUrl),
        );
        setPendingCreateImages([]);
        queryClient.invalidateQueries({ queryKey: ["properties"] });
        navigate(`/properties/cottages/${result.guid}`);
        return;
      }
      dispatch({
        type: "SET_SAVED_MESSAGE",
        payload: t("common.saved") ?? "Saved successfully",
      });
      dispatch({ type: "SET_ERROR_MESSAGE", payload: null });
      if (savedMessageTimerRef.current) {
        window.clearTimeout(savedMessageTimerRef.current);
      }
      savedMessageTimerRef.current = window.setTimeout(() => {
        dispatch({ type: "SET_SAVED_MESSAGE", payload: null });
      }, 3000);
      const updated = await fetchCottage(propertyId!);
      queryClient.setQueryData(["cottage", propertyId], updated);
      dispatch({ type: "HYDRATE_FROM_API", payload: updated });
    },
    onError: (error) => {
      console.error("Cottage update failed:", error);
      dispatch({
        type: "SET_ERROR_MESSAGE",
        payload: getMutationErrorMessage(
          error,
          t("common.saveFailed") ?? "Save failed",
        ),
      });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: () => deleteCottage(propertyId!),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cottages"] });
      navigate("/properties");
    },
    onError: (error) => {
      dispatch({
        type: "SET_ERROR_MESSAGE",
        payload: getMutationErrorMessage(error, t("properties.deleteFailed")),
      });
    },
  });

  const uploadImageMutation = useMutation({
    mutationFn: (file: File) => uploadCottageImage(propertyId!, file),
    onSuccess: async () => {
      dispatch({
        type: "SET_IMAGE_MESSAGE",
        payload:
          t("propertyDetails.messages.imageUpdateSuccess") ??
          "Image updated successfully",
      });
      if (imageMessageTimerRef.current) {
        window.clearTimeout(imageMessageTimerRef.current);
      }
      imageMessageTimerRef.current = window.setTimeout(() => {
        dispatch({ type: "SET_IMAGE_MESSAGE", payload: null });
      }, 3000);
      const updated = await fetchCottage(propertyId!);
      queryClient.setQueryData(["cottage", propertyId], updated);
      dispatch({ type: "HYDRATE_FROM_API", payload: updated });
    },
    onError: (error) => {
      dispatch({
        type: "SET_IMAGE_MESSAGE",
        payload: getMutationErrorMessage(
          error,
          t("propertyDetails.messages.imageUpdateFailed") ??
            "Failed to update image",
        ),
      });
      if (imageMessageTimerRef.current) {
        window.clearTimeout(imageMessageTimerRef.current);
      }
      imageMessageTimerRef.current = window.setTimeout(() => {
        dispatch({ type: "SET_IMAGE_MESSAGE", payload: null });
      }, 3000);
    },
  });

  const imagesUpdateMutation = useMutation({
    mutationFn: (updatedImages: string[]) =>
      updateCottage(propertyId!, { img: updatedImages }),
    onSuccess: async () => {
      dispatch({
        type: "SET_IMAGE_MESSAGE",
        payload:
          t("propertyDetails.messages.imageUpdateSuccess") ??
          "Image updated successfully",
      });
      if (imageMessageTimerRef.current) {
        window.clearTimeout(imageMessageTimerRef.current);
      }
      imageMessageTimerRef.current = window.setTimeout(() => {
        dispatch({ type: "SET_IMAGE_MESSAGE", payload: null });
      }, 3000);
      const updated = await fetchCottage(propertyId!);
      queryClient.setQueryData(["cottage", propertyId], updated);
      dispatch({ type: "HYDRATE_FROM_API", payload: updated });
    },
    onError: (error) => {
      dispatch({
        type: "SET_IMAGE_MESSAGE",
        payload: getMutationErrorMessage(
          error,
          t("propertyDetails.messages.imageUpdateFailed") ??
            "Failed to update image",
        ),
      });
      if (imageMessageTimerRef.current) {
        window.clearTimeout(imageMessageTimerRef.current);
      }
      imageMessageTimerRef.current = window.setTimeout(() => {
        dispatch({ type: "SET_IMAGE_MESSAGE", payload: null });
      }, 3000);
    },
  });

  /* ───── helpers ───── */

  const handleLocationChange = useCallback(
    (field: keyof State["location"], value: string | null) => {
      const update: Partial<State["location"]> = { [field]: value };
      if (field === "region_id") {
        update.district_id = null;
        update.prefecture_id = null;
      }
      if (field === "district_id") {
        update.prefecture_id = null;
      }
      dispatch({ type: "SET_LOCATION", payload: update });
    },
    [],
  );

  const handleServiceToggle = useCallback(
    (serviceGuid: string) => {
      dispatch({
        type: "SET_AMENITIES",
        payload: state.amenities.includes(serviceGuid)
          ? state.amenities.filter((g) => g !== serviceGuid)
          : [...state.amenities, serviceGuid],
      });
    },
    [state.amenities],
  );

  const updatePriceField = useCallback(
    (index: number, field: keyof PriceItem, value: string) => {
      const next = [...state.price];
      next[index] = { ...next[index], [field]: value };
      dispatch({ type: "SET_PRICE", payload: next });
    },
    [state.price],
  );

  const handleCurrencyChange = useCallback(
    async (newCurrency: "USD" | "UZS") => {
      if (state.currency === newCurrency) return;
      dispatch({ type: "SET_SAVED_MESSAGE", payload: null });
      dispatch({ type: "SET_ERROR_MESSAGE", payload: null });
      try {
        const rate = await fetchExchangeRate();
        const convert = (value: string | number) => {
          const num = typeof value === "string" ? Number.parseFloat(value) : value;
          if (!Number.isFinite(num)) return String(value);
          if (state.currency === "USD" && newCurrency === "UZS") {
            return String(Math.round(num * rate));
          }
          if (state.currency === "UZS" && newCurrency === "USD") {
            return String(Math.round(num / rate));
          }
          return String(num);
        };
        const nextPrice = state.price.map((item) => ({
          ...item,
          price_per_person: convert(item.price_per_person),
          price_on_working_days: convert(item.price_on_working_days),
          price_on_weekends: convert(item.price_on_weekends),
        }));
        dispatch({ type: "SET_CURRENCY", payload: newCurrency });
        dispatch({ type: "SET_PRICE", payload: nextPrice });
      } catch {
        dispatch({
          type: "SET_ERROR_MESSAGE",
          payload:
            t("common.actionFailed") ??
            "Failed to fetch exchange rate. Try again.",
        });
      }
    },
    [state.currency, state.price, t],
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!propertyId) return;
    if (isCreateMode && !selectedPartnerId) {
      dispatch({
        type: "SET_ERROR_MESSAGE",
        payload:
          t("properties.partnerSelectRequired") ??
          "Select a partner before creating a property.",
      });
      return;
    }

    const scalarPrices = extractScalarPrices(state.price);

    const normalizedPriceRows = state.price.map((item) => ({
      month_from: item.month_from,
      month_to: item.month_to,
      price_per_person: String(
        item.price_per_person ?? scalarPrices.price_per_person,
      ),
      price_on_working_days: String(
        item.price_on_working_days ?? scalarPrices.price_on_working_days,
      ),
      price_on_weekends: String(
        item.price_on_weekends ?? scalarPrices.price_on_weekends,
      ),
    }));

    if (normalizedPriceRows.length !== 2) {
      dispatch({
        type: "SET_ERROR_MESSAGE",
        payload: "Для дачи нужно указать цены на 2 месяца",
      });
      return;
    }

    const payload: CottageAdminUpdate = {
      title: state.title,
      latitude: normalizeCoordinateForApi(state.location.latitude),
      longitude: normalizeCoordinateForApi(state.location.longitude),
      country: state.location.country || null,
      city: state.location.city || null,
      region_id: state.location.region_id ? state.location.region_id : null,
      district_id: state.location.district_id
        ? state.location.district_id
        : null,
      prefecture_id: state.location.prefecture_id || null,
      services: state.amenities,
      description_ru: state.descRu || null,
      description_uz: state.descUz || null,
      description_en: state.descRu || state.descUz || null,
      check_in: state.checkTimes.check_in,
      check_out: state.checkTimes.check_out,
      is_quiet_hours: state.quietHours === "yes",
      is_allowed_alcohol: state.allowedAlcohol,
      is_allowed_corporate: state.allowedCorp,
      is_allowed_pets: state.allowedPets,
      guests: state.guests,
      rooms: state.rooms,
      beds: state.beds,
      bathrooms: state.bathrooms,
      price: normalizedPriceRows,
      price_per_person: String(scalarPrices.price_per_person),
      price_on_working_days: String(scalarPrices.price_on_working_days),
      price_on_weekends: String(scalarPrices.price_on_weekends),
      currency: state.currency,
      is_verified: state.isVerified,
      is_archived: state.isArchived,
      is_testing: state.isTesting,
      is_recommended: state.isRecommended,
      verification_status: state.verificationStatus,
    };

    updateMutation.mutate(payload);
  };

  /* ───── images ───── */

  const currentImageCount = isCreateMode
    ? pendingCreateImages.length
    : (state.data?.img?.length ?? 0);
  const isMaxImages = currentImageCount >= MAX_IMAGES;
  const imageItems = isCreateMode
    ? pendingCreateImages.map((item) => item.previewUrl)
    : (state.data?.img ?? []);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (isMaxImages) {
      dispatch({
        type: "SET_IMAGE_MESSAGE",
        payload:
          t("properties.maxImagesReached") ??
          `Maximum ${MAX_IMAGES} images allowed.`,
      });
      if (imageMessageTimerRef.current) {
        window.clearTimeout(imageMessageTimerRef.current);
      }
      imageMessageTimerRef.current = window.setTimeout(() => {
        dispatch({ type: "SET_IMAGE_MESSAGE", payload: null });
      }, 3000);
      if (fileInputRef.current) fileInputRef.current.value = "";
      return;
    }
    if (isCreateMode) {
      const previewUrl = URL.createObjectURL(file);
      setPendingCreateImages((prev) => [...prev, { file, previewUrl }]);
      dispatch({ type: "SET_IMAGE_MESSAGE", payload: null });
    } else {
      uploadImageMutation.mutate(file);
    }
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleFileDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch({ type: "SET_IS_DRAG_OVER", payload: false });

    if (isMaxImages) {
      dispatch({
        type: "SET_IMAGE_MESSAGE",
        payload:
          t("properties.maxImagesReached") ??
          `Maximum ${MAX_IMAGES} images allowed.`,
      });
      if (imageMessageTimerRef.current) {
        window.clearTimeout(imageMessageTimerRef.current);
      }
      imageMessageTimerRef.current = window.setTimeout(() => {
        dispatch({ type: "SET_IMAGE_MESSAGE", payload: null });
      }, 3000);
      return;
    }

    const files = Array.from(e.dataTransfer.files).filter((f) =>
      f.type.startsWith("image/"),
    );
    if (files.length === 0) return;

    if (isCreateMode) {
      const newImages = files.map((file) => ({
        file,
        previewUrl: URL.createObjectURL(file),
      }));
      setPendingCreateImages((prev) => [...prev, ...newImages]);
    } else {
      const file = files[0];
      uploadImageMutation.mutate(file);
    }
  };

  const handleDragOverZone = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (!state.isDragOver && !isMaxImages) {
      dispatch({ type: "SET_IS_DRAG_OVER", payload: true });
    }
  };

  const handleDragLeaveZone = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.currentTarget.contains(e.relatedTarget as Node)) return;
    dispatch({ type: "SET_IS_DRAG_OVER", payload: false });
  };

  const handleDragStart = (e: React.DragEvent, index: number) => {
    dispatch({ type: "SET_DRAGGED_INDEX", payload: index });
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/plain", String(index));
  };

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
    if (state.draggedIndex !== index) {
      dispatch({ type: "SET_DRAG_OVER_INDEX", payload: index });
    }
  };

  const handleDrop = (e: React.DragEvent, dropIndex: number) => {
    e.preventDefault();
    const dragIndex = Number(e.dataTransfer.getData("text/plain"));
    if (dragIndex === dropIndex || Number.isNaN(dragIndex)) {
      dispatch({ type: "SET_DRAGGED_INDEX", payload: null });
      dispatch({ type: "SET_DRAG_OVER_INDEX", payload: null });
      return;
    }
    if (isCreateMode) {
      setPendingCreateImages((prev) => {
        const reordered = [...prev];
        const [removed] = reordered.splice(dragIndex, 1);
        reordered.splice(dropIndex, 0, removed);
        return reordered;
      });
    } else {
      const currentImages = state.data?.img ?? [];
      const newImages = [...currentImages];
      const [removed] = newImages.splice(dragIndex, 1);
      newImages.splice(dropIndex, 0, removed);
      imagesUpdateMutation.mutate(newImages);
    }
    dispatch({ type: "SET_DRAGGED_INDEX", payload: null });
    dispatch({ type: "SET_DRAG_OVER_INDEX", payload: null });
  };

  const handleDragEnd = () => {
    dispatch({ type: "SET_DRAGGED_INDEX", payload: null });
    dispatch({ type: "SET_DRAG_OVER_INDEX", payload: null });
  };

  const handleDeleteImage = (index: number) => {
    if (isCreateMode) {
      setPendingCreateImages((prev) => {
        const removed = prev[index];
        if (removed) {
          URL.revokeObjectURL(removed.previewUrl);
        }
        return prev.filter((_, i) => i !== index);
      });
      return;
    }
    const currentImages = state.data?.img ?? [];
    imagesUpdateMutation.mutate(currentImages.filter((_, i) => i !== index));
  };

  /* ───── computed ───── */

  const filteredDistricts = useMemo(() => {
    const all = districtsQuery.data ?? [];
    if (!state.location.region_id) return all;
    return all.filter((d) => d.region_id === state.location.region_id);
  }, [districtsQuery.data, state.location.region_id]);

  const filteredPrefectures = useMemo(() => {
    const all = prefecturesQuery.data ?? [];
    if (!state.location.district_id) return all;
    return all.filter((p) => p.district_guid === state.location.district_id);
  }, [prefecturesQuery.data, state.location.district_id]);

  /* ───── loading / error states ───── */

  if (!isCreateMode && cottageQuery.isLoading) {
    return (
      <div className="h-full overflow-y-auto p-4 md:p-6">
        <Skeleton className="mb-4 h-8 w-64" />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Skeleton className="h-48" />
          <Skeleton className="h-48" />
        </div>
      </div>
    );
  }

  if (!isCreateMode && (cottageQuery.error || !state.data)) {
    return (
      <div className="h-full overflow-y-auto p-4 md:p-6">
        <p className="text-sm text-red-600">
          {t("properties.loadFailed", { type: t("properties.tabs.cottages") })}
        </p>
      </div>
    );
  }

  const cottage =
    state.data ??
    ({
      guid: "",
      title: state.title,
      img: [],
      services: [],
      region: {},
      district: { region: {} },
      is_favorite: false,
      is_allowed_corporate: state.allowedCorp,
      created_at: "",
      property_type_id: "",
      property_type: {},
      average_rating: null,
      partner_user: undefined,
      is_verified: state.isVerified,
      is_archived: state.isArchived,
    } as CottageAdminList);
  const deleteTitleToMatch = (cottage.title ?? "").trim();
  const deleteIsConfirmed =
    state.deleteConfirmText.trim() === deleteTitleToMatch;

  return (
    <div className="h-full overflow-y-auto p-4 md:p-6">
      <div className="mb-4 flex items-center gap-3">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate("/properties")}
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-xl font-bold md:text-2xl">
          {isCreateMode
            ? t("properties.createPageTitle", {
                type: t("properties.tabs.cottages"),
              })
            : cottage.title}
        </h1>
        <div className="ml-auto flex items-center gap-2">
          {isCreateMode ? (
            <Badge variant="outline">{t("properties.createModeBadge")}</Badge>
          ) : null}
          {cottage.is_verified ? (
            <Badge variant="default">{t("properties.verified")}</Badge>
          ) : (
            <Badge variant="outline">{t("properties.unverified")}</Badge>
          )}
          {cottage.is_archived ? (
            <Badge variant="secondary">{t("properties.archived")}</Badge>
          ) : null}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {isCreateMode ? (
          <div className="rounded-md border border-blue-200 bg-blue-50 px-4 py-3 text-sm text-blue-700">
            {t("properties.createModeDescription", {
              type: t("properties.tabs.cottages"),
            })}
          </div>
        ) : null}
        {state.savedMessage && (
          <div className="rounded-md border bg-green-50 px-4 py-2 text-sm text-green-700">
            {state.savedMessage}
          </div>
        )}
        {state.errorMessage && (
          <div className="rounded-md border bg-red-50 px-4 py-2 text-sm text-red-700">
            {state.errorMessage}
          </div>
        )}

        <Tabs defaultValue="basic" className="w-full">
          <TabsList className="flex flex-wrap gap-1">
            <TabsTrigger value="basic">
              {t("properties.tabs.basic")}
            </TabsTrigger>
            <TabsTrigger value="details">
              {t("properties.tabs.details")}
            </TabsTrigger>
            <TabsTrigger value="pricing">
              {t("properties.tabs.pricing")}
            </TabsTrigger>
            <TabsTrigger value="amenities">
              {t("properties.tabs.amenities")}
            </TabsTrigger>
            <TabsTrigger value="location">
              {t("properties.tabs.location")}
            </TabsTrigger>
            <TabsTrigger value="images">
              {t("properties.tabs.images")}
            </TabsTrigger>
            <TabsTrigger value="partner">
              {t("properties.tabs.partner")}
            </TabsTrigger>
            <TabsTrigger value="settings">
              {t("properties.tabs.settings")}
            </TabsTrigger>
          </TabsList>

          {/* ── BASIC ── */}
          <TabsContent value="basic" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">
                  {t("properties.basicInfo")}
                </CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="title">{t("properties.title")}</Label>
                  <Input
                    id="title"
                    value={state.title}
                    onChange={(e) =>
                      dispatch({ type: "SET_TITLE", payload: e.target.value })
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="guests">{t("properties.guests")}</Label>
                  <Input
                    id="guests"
                    type="number"
                    min={1}
                    value={state.guests}
                    onChange={(e) =>
                      dispatch({
                        type: "SET_GUESTS",
                        payload: toPositiveNumber(e.target.value),
                      })
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="rooms">{t("properties.rooms")}</Label>
                  <Input
                    id="rooms"
                    type="number"
                    min={1}
                    value={state.rooms}
                    onChange={(e) =>
                      dispatch({
                        type: "SET_ROOMS",
                        payload: toPositiveNumber(e.target.value),
                      })
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="beds">{t("properties.beds")}</Label>
                  <Input
                    id="beds"
                    type="number"
                    min={1}
                    value={state.beds}
                    onChange={(e) =>
                      dispatch({
                        type: "SET_BEDS",
                        payload: toPositiveNumber(e.target.value),
                      })
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bathrooms">{t("properties.bathrooms")}</Label>
                  <Input
                    id="bathrooms"
                    type="number"
                    min={1}
                    value={state.bathrooms}
                    onChange={(e) =>
                      dispatch({
                        type: "SET_BATHROOMS",
                        payload: toPositiveNumber(e.target.value),
                      })
                    }
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* ── DETAILS ── */}
          <TabsContent value="details" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">
                  {t("properties.tabs.details")}
                </CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="description_uz">
                    {t("properties.descriptionUz")}
                  </Label>
                  <Textarea
                    id="description_uz"
                    value={state.descUz}
                    onChange={(e) =>
                      dispatch({ type: "SET_DESC_UZ", payload: e.target.value })
                    }
                    rows={4}
                    placeholder={t("properties.descriptionUz")}
                  />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="description_ru">
                    {t("properties.descriptionRu")}
                  </Label>
                  <Textarea
                    id="description_ru"
                    value={state.descRu}
                    onChange={(e) =>
                      dispatch({ type: "SET_DESC_RU", payload: e.target.value })
                    }
                    rows={4}
                    placeholder={t("properties.descriptionRu")}
                  />
                </div>

                <Separator className="md:col-span-2" />

                <div className="space-y-2">
                  <Label htmlFor="check_in">{t("properties.checkIn")}</Label>
                  <Input
                    id="check_in"
                    type="time"
                    value={state.checkTimes.check_in.slice(0, 5)}
                    onChange={(e) => {
                      const val = e.target.value;
                      dispatch({
                        type: "SET_CHECK_TIMES",
                        payload: { check_in: val ? `${val}:00` : "19:00:00" },
                      });
                    }}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="check_out">{t("properties.checkOut")}</Label>
                  <Input
                    id="check_out"
                    type="time"
                    value={state.checkTimes.check_out.slice(0, 5)}
                    onChange={(e) => {
                      const val = e.target.value;
                      dispatch({
                        type: "SET_CHECK_TIMES",
                        payload: { check_out: val ? `${val}:00` : "17:00:00" },
                      });
                    }}
                  />
                </div>

                <Separator className="md:col-span-2" />

                <div className="flex items-center gap-2">
                  <Checkbox
                    id="quiet_hours"
                    checked={state.quietHours === "yes"}
                    onCheckedChange={(v) =>
                      dispatch({
                        type: "SET_QUIET_HOURS",
                        payload: Boolean(v) ? "yes" : "no",
                      })
                    }
                  />
                  <Label htmlFor="quiet_hours" className="cursor-pointer">
                    {t("properties.quietHours")}
                  </Label>
                </div>

                <div className="flex items-center gap-2">
                  <Checkbox
                    id="allowed_alcohol"
                    checked={state.allowedAlcohol}
                    onCheckedChange={(v) =>
                      dispatch({
                        type: "SET_ALLOWED_ALCOHOL",
                        payload: Boolean(v),
                      })
                    }
                  />
                  <Label htmlFor="allowed_alcohol" className="cursor-pointer">
                    {t("properties.allowedAlcohol")}
                  </Label>
                </div>

                <div className="flex items-center gap-2">
                  <Checkbox
                    id="allowed_corporate"
                    checked={state.allowedCorp}
                    onCheckedChange={(v) =>
                      dispatch({
                        type: "SET_ALLOWED_CORP",
                        payload: Boolean(v),
                      })
                    }
                  />
                  <Label htmlFor="allowed_corporate" className="cursor-pointer">
                    {t("properties.allowedCorporate")}
                  </Label>
                </div>

                <div className="flex items-center gap-2">
                  <Checkbox
                    id="allowed_pets"
                    checked={state.allowedPets}
                    onCheckedChange={(v) =>
                      dispatch({
                        type: "SET_ALLOWED_PETS",
                        payload: Boolean(v),
                      })
                    }
                  />
                  <Label htmlFor="allowed_pets" className="cursor-pointer">
                    {t("properties.allowedPets")}
                  </Label>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* ── PRICING ── */}
          <TabsContent value="pricing" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">
                  {t("properties.pricing")}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Currency toggle */}
                <div className="flex items-center gap-2">
                  <Button
                    type="button"
                    variant={state.currency === "USD" ? "default" : "outline"}
                    onClick={() => handleCurrencyChange("USD")}
                  >
                    USD
                  </Button>
                  <Button
                    type="button"
                    variant={state.currency === "UZS" ? "default" : "outline"}
                    onClick={() => handleCurrencyChange("UZS")}
                  >
                    UZS
                  </Button>
                </div>

                {/* Current month */}
                <div className="rounded-lg border p-4 space-y-3">
                  <p className="text-sm font-semibold capitalize">
                    {getMonthLabel(0)}
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label className="text-xs text-muted-foreground">
                        {t("properties.priceWorkingDays")}
                      </Label>
                      <PriceInput
                        currency={state.currency}
                        value={String(
                          state.price[0]?.price_on_working_days ?? "",
                        )}
                        onChange={(value) =>
                          updatePriceField(0, "price_on_working_days", value)
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-xs text-muted-foreground">
                        {t("properties.priceWeekends")}
                      </Label>
                      <PriceInput
                        currency={state.currency}
                        value={String(state.price[0]?.price_on_weekends ?? "")}
                        onChange={(value) =>
                          updatePriceField(0, "price_on_weekends", value)
                        }
                      />
                    </div>
                  </div>
                </div>

                {/* Next month */}
                <div className="rounded-lg border p-4 space-y-3">
                  <p className="text-sm font-semibold capitalize">
                    {getMonthLabel(1)}
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label className="text-xs text-muted-foreground">
                        {t("properties.priceWorkingDays")}
                      </Label>
                      <PriceInput
                        currency={state.currency}
                        value={String(
                          state.price[1]?.price_on_working_days ?? "",
                        )}
                        onChange={(value) =>
                          updatePriceField(1, "price_on_working_days", value)
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-xs text-muted-foreground">
                        {t("properties.priceWeekends")}
                      </Label>
                      <PriceInput
                        currency={state.currency}
                        value={String(state.price[1]?.price_on_weekends ?? "")}
                        onChange={(value) =>
                          updatePriceField(1, "price_on_weekends", value)
                        }
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* ── AMENITIES ── */}
          <TabsContent value="amenities" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">
                  {t("properties.amenities")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {servicesQuery.isLoading ? (
                  <div className="flex items-center justify-center py-8">
                    <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
                    <span className="ml-2 text-sm text-muted-foreground">
                      {t("properties.amenitiesLoading")}
                    </span>
                  </div>
                ) : !servicesQuery.data?.length ? (
                  <p className="text-sm text-muted-foreground">
                    {t("properties.amenitiesEmpty")}
                  </p>
                ) : (
                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                    {servicesQuery.data.map((service) => {
                      const guid = service.guid ?? "";
                      const isSelected = state.amenities.includes(guid);
                      return (
                        <button
                          key={guid}
                          type="button"
                          onClick={() => handleServiceToggle(guid)}
                          className={cn(
                            "flex items-center gap-2 rounded-lg border px-3 py-2 text-left text-sm transition-colors",
                            isSelected
                              ? "border-primary bg-primary/10 font-medium text-primary dark:bg-primary/20"
                              : "border-border bg-background text-foreground hover:border-primary/50 dark:hover:border-primary/30",
                          )}
                        >
                          {service.icon_url && (
                            <img
                              src={resolveImageUrl(service.icon_url)}
                              alt=""
                              className="h-4 w-4 shrink-0 dark:brightness-0 dark:invert"
                            />
                          )}
                          <span className="truncate">{service.title}</span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* ── LOCATION ── */}
          <TabsContent value="location" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">
                  {t("properties.location")}
                </CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="country">{t("properties.country")}</Label>
                  <Input
                    id="country"
                    value={state.location.country}
                    onChange={(e) =>
                      handleLocationChange("country", e.target.value || null)
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="city">{t("properties.city")}</Label>
                  <Input
                    id="city"
                    value={state.location.city}
                    onChange={(e) =>
                      handleLocationChange("city", e.target.value || null)
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="latitude">{t("properties.latitude")}</Label>
                  <Input
                    id="latitude"
                    value={state.location.latitude}
                    onChange={(e) =>
                      handleLocationChange("latitude", e.target.value || null)
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="longitude">{t("properties.longitude")}</Label>
                  <Input
                    id="longitude"
                    value={state.location.longitude}
                    onChange={(e) =>
                      handleLocationChange("longitude", e.target.value || null)
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="region_id">{t("properties.region")}</Label>
                  <Select
                    value={state.location.region_id ?? ""}
                    onValueChange={(value) =>
                      handleLocationChange("region_id", value || null)
                    }
                  >
                    <SelectTrigger id="region_id">
                      <SelectValue placeholder={t("properties.selectRegion")} />
                    </SelectTrigger>
                    <SelectContent>
                      {(regionsQuery.data ?? []).map((r) => (
                        <SelectItem key={r.id} value={r.id}>
                          {r.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="district_id">
                    {t("properties.district")}
                  </Label>
                  <Select
                    value={state.location.district_id ?? ""}
                    onValueChange={(value) =>
                      handleLocationChange("district_id", value || null)
                    }
                    disabled={!state.location.region_id}
                  >
                    <SelectTrigger id="district_id">
                      <SelectValue
                        placeholder={
                          state.location.region_id
                            ? t("properties.selectDistrict")
                            : t("properties.placeholders.regionFirst")
                        }
                      />
                    </SelectTrigger>
                    <SelectContent>
                      {filteredDistricts.map((d) => (
                        <SelectItem key={d.id} value={d.id}>
                          {d.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="prefecture_id">
                    {t("properties.prefecture")}
                  </Label>
                  <Select
                    value={state.location.prefecture_id ?? ""}
                    onValueChange={(value) =>
                      handleLocationChange("prefecture_id", value || null)
                    }
                    disabled={!state.location.district_id}
                  >
                    <SelectTrigger id="prefecture_id">
                      <SelectValue
                        placeholder={
                          state.location.district_id
                            ? t("properties.selectPrefecture")
                            : t("properties.placeholders.districtFirst")
                        }
                      />
                    </SelectTrigger>
                    <SelectContent>
                      {filteredPrefectures.map((p) => (
                        <SelectItem key={p.id} value={p.id}>
                          {p.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* ── IMAGES ── */}
          <TabsContent value="images" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">
                  {t("propertyDetails.sections.imageUpdater")}
                  <span className="ml-2 text-xs font-normal text-muted-foreground">
                    ({currentImageCount} / {MAX_IMAGES})
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {state.imageMessage && (
                  <div
                    className={`rounded-md border px-4 py-2 text-sm ${
                      state.imageMessage.includes("success")
                        ? "bg-green-50 text-green-700"
                        : "bg-red-50 text-red-700"
                    }`}
                  >
                    {state.imageMessage}
                  </div>
                )}

                <div
                  className={cn(
                    "relative rounded-lg transition-all",
                    state.isDragOver &&
                      !isMaxImages &&
                      "ring-2 ring-primary ring-offset-2 bg-primary/5",
                  )}
                  onDrop={handleFileDrop}
                  onDragOver={handleDragOverZone}
                  onDragLeave={handleDragLeaveZone}
                >
                  {state.isDragOver && (
                    <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-2 rounded-lg bg-primary/10 pointer-events-none">
                      <Upload className="h-8 w-8 text-primary" />
                      <span className="text-sm font-medium text-primary">
                        {t("common.dropHere") ?? "Drop image here"}
                      </span>
                    </div>
                  )}
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
                    {imageItems.map((src, index) => {
                      const isDragged = state.draggedIndex === index;
                      const isDropTarget =
                        state.dragOverIndex === index &&
                        state.draggedIndex !== index;

                      return (
                        <div
                          key={src}
                          draggable
                          onDragStart={(e) => handleDragStart(e, index)}
                          onDragOver={(e) => handleDragOver(e, index)}
                          onDrop={(e) => handleDrop(e, index)}
                          onDragEnd={handleDragEnd}
                          className={cn(
                            "group relative aspect-[4/3] select-none overflow-hidden rounded-lg border bg-muted transition-all duration-200",
                            isDragged &&
                              "z-0 scale-95 opacity-40 ring-2 ring-primary/50",
                            isDropTarget &&
                              "z-10 scale-105 shadow-lg ring-2 ring-primary",
                            !isDragged &&
                              !isDropTarget &&
                              "hover:ring-1 hover:ring-border",
                          )}
                        >
                          <img
                            src={isCreateMode ? src : resolveImageUrl(src)}
                            alt={`${cottage.title} ${index + 1}`}
                            className="pointer-events-none h-full w-full object-cover"
                            draggable={false}
                          />

                          <div className="absolute left-1.5 top-1.5 z-10 flex h-5 w-5 items-center justify-center rounded-full bg-black/60 text-[10px] font-bold text-white">
                            {index + 1}
                          </div>

                          <div className="absolute right-1.5 top-1.5 z-10 opacity-0 transition-opacity group-hover:opacity-100">
                            <div
                              className="flex h-7 w-7 cursor-grab items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition-colors hover:bg-black/60 active:cursor-grabbing"
                              title={
                                t("properties.dragToReorder") ??
                                "Drag to reorder"
                              }
                            >
                              <GripVertical className="h-3.5 w-3.5" />
                            </div>
                          </div>

                          <button
                            type="button"
                            onClick={() => handleDeleteImage(index)}
                            disabled={imagesUpdateMutation.isPending}
                            className="absolute bottom-1.5 right-1.5 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-black/40 text-white opacity-70 transition-all hover:bg-red-500/90 hover:opacity-100 disabled:opacity-30"
                            title={
                              t("properties.deleteImage") ?? "Delete image"
                            }
                          >
                            <Trash2 className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      );
                    })}

                    {!isMaxImages && (
                      <label
                        className={cn(
                          "flex aspect-[4/3] cursor-pointer flex-col items-center justify-center gap-1.5 rounded-lg border-2 border-dashed border-primary/30 bg-primary/5 transition-colors hover:border-primary/50 hover:bg-primary/10",
                          uploadImageMutation.isPending &&
                            "pointer-events-none opacity-60",
                        )}
                      >
                        <input
                          ref={fileInputRef}
                          type="file"
                          accept="image/*"
                          className="sr-only"
                          onChange={handleFileSelect}
                        />
                        {uploadImageMutation.isPending ? (
                          <Loader2 className="h-5 w-5 animate-spin text-primary" />
                        ) : (
                          <Plus className="h-5 w-5 text-primary" />
                        )}
                        <span className="text-xs font-medium text-primary">
                          {uploadImageMutation.isPending
                            ? t("propertyDetails.actions.updatingImage")
                            : t("propertyDetails.actions.updateImage")}
                        </span>
                      </label>
                    )}
                  </div>
                </div>

                {isMaxImages && (
                  <p className="text-sm font-medium text-amber-600">
                    {t("properties.maxImagesReached", { count: MAX_IMAGES })}
                  </p>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* ── PARTNER ── */}
          <TabsContent value="partner" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">
                  {t("properties.partnerInfo")}
                </CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {isCreateMode ? (
                  <>
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="partner_user_id">
                        {t("properties.partnerInfo")}
                      </Label>
                      <Input
                        value={partnerSearchTerm}
                        onChange={(e) => setPartnerSearchTerm(e.target.value)}
                        placeholder={
                          t("properties.partnerSearchPlaceholder") ??
                          "Search partner by name, username, phone..."
                        }
                      />
                      <Select
                        value={selectedPartnerId}
                        onValueChange={(value) => {
                          setSelectedPartnerId(value);
                          dispatch({
                            type: "SET_ERROR_MESSAGE",
                            payload: null,
                          });
                        }}
                      >
                        <SelectTrigger id="partner_user_id">
                          <SelectValue
                            placeholder={
                              t("properties.selectPartner") ??
                              "Select an existing partner"
                            }
                          />
                        </SelectTrigger>
                        <SelectContent>
                          {filteredPartnerOptions.map((partner) => {
                            const name =
                              partner.full_name ||
                              [partner.first_name, partner.last_name]
                                .filter(Boolean)
                                .join(" ") ||
                              partner.username ||
                              String(partner.id);
                            const phone = partner.phone_number
                              ? ` • ${partner.phone_number}`
                              : "";
                            return (
                              <SelectItem
                                key={partner.id}
                                value={String(partner.id)}
                              >
                                {`${name}${phone}`}
                              </SelectItem>
                            );
                          })}
                        </SelectContent>
                      </Select>
                      {!partnersQuery.isLoading &&
                      !partnersQuery.isError &&
                      filteredPartnerOptions.length === 0 ? (
                        <p className="text-xs text-muted-foreground">
                          {t("properties.noPartnerMatches")}
                        </p>
                      ) : null}
                      {partnersQuery.isLoading ? (
                        <p className="text-xs text-muted-foreground">
                          {t("common.loading")}
                        </p>
                      ) : null}
                      {partnersQuery.isError ? (
                        <p className="text-xs text-red-600">
                          {t("properties.partnerLoadFailed") ??
                            "Failed to load partners."}
                        </p>
                      ) : null}
                    </div>
                    {selectedPartner ? (
                      <div className="space-y-1 md:col-span-2">
                        <p className="text-sm font-medium">
                          {selectedPartner.full_name ||
                            [
                              selectedPartner.first_name,
                              selectedPartner.last_name,
                            ]
                              .filter(Boolean)
                              .join(" ") ||
                            selectedPartner.username ||
                            "-"}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {selectedPartner.phone_number || "-"}
                        </p>
                      </div>
                    ) : null}
                  </>
                ) : cottage.partner_user ? (
                  <>
                    <div className="space-y-1 md:col-span-2">
                      <div className="flex items-center gap-3">
                        {cottage.partner_user.avatar ? (
                          <img
                            src={resolveImageUrl(cottage.partner_user.avatar)}
                            alt=""
                            className="h-12 w-12 rounded-full object-cover"
                          />
                        ) : (
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted text-sm font-bold text-muted-foreground">
                            {(
                              cottage.partner_user.first_name?.[0] ??
                              cottage.partner_user.username?.[0] ??
                              "?"
                            ).toUpperCase()}
                          </div>
                        )}
                        <div>
                          <p className="font-medium">
                            {[
                              cottage.partner_user.first_name,
                              cottage.partner_user.last_name,
                            ]
                              .filter(Boolean)
                              .join(" ") ||
                              cottage.partner_user.username ||
                              "-"}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {cottage.partner_user.username ? (
                              <button
                                type="button"
                                onClick={() => {
                                  const partnerId = cottage.partner_user?.id;
                                  if (partnerId)
                                    navigate(`/partner/${partnerId}`);
                                }}
                                className="text-xs text-primary hover:underline"
                              >
                                @{cottage.partner_user.username}
                              </button>
                            ) : (
                              "-"
                            )}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <Label className="text-xs text-muted-foreground">
                        {t("properties.partnerId")}
                      </Label>
                      <p className="text-sm font-medium">
                        {cottage.partner_user.id}
                      </p>
                    </div>

                    <div className="space-y-1">
                      <Label className="text-xs text-muted-foreground">
                        {t("properties.partnerRole")}
                      </Label>
                      <p className="text-sm font-medium">
                        {cottage.partner_user.role ?? "-"}
                      </p>
                    </div>

                    <div className="space-y-1">
                      <Label className="text-xs text-muted-foreground">
                        {t("properties.partnerPhone")}
                      </Label>
                      {cottage.partner_user.phone_number ? (
                        <a
                          href={getPhoneHref(cottage.partner_user.phone_number)}
                          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                        >
                          <Phone className="h-3.5 w-3.5" />
                          {formatUzbekPhoneNumber(
                            cottage.partner_user.phone_number,
                          )}
                        </a>
                      ) : (
                        <p className="text-sm font-medium">-</p>
                      )}
                    </div>

                    <div className="space-y-1">
                      <Label className="text-xs text-muted-foreground">
                        {t("properties.partnerEmail")}
                      </Label>
                      <p className="text-sm font-medium">
                        {cottage.partner_user.email ?? "-"}
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <Badge
                        variant={
                          cottage.partner_user.is_active
                            ? "default"
                            : "secondary"
                        }
                      >
                        {cottage.partner_user.is_active
                          ? t("properties.partnerActive")
                          : t("properties.partnerInactive")}
                      </Badge>
                      {cottage.partner_user.is_verified && (
                        <Badge variant="outline">
                          {t("properties.partnerVerified")}
                        </Badge>
                      )}
                    </div>
                  </>
                ) : (
                  <p className="text-sm text-muted-foreground md:col-span-2">
                    {t("properties.noPartner")}
                  </p>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* ── SETTINGS ── */}
          <TabsContent value="settings" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">
                  {t("properties.settings")}
                </CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="flex items-center gap-2">
                  <Checkbox
                    id="is_verified"
                    checked={state.isVerified}
                    onCheckedChange={(v) =>
                      dispatch({ type: "SET_IS_VERIFIED", payload: Boolean(v) })
                    }
                  />
                  <Label htmlFor="is_verified" className="cursor-pointer">
                    {t("properties.isVerified")}
                  </Label>
                </div>

                <div className="flex items-center gap-2">
                  <Checkbox
                    id="is_archived"
                    checked={state.isArchived}
                    onCheckedChange={(v) =>
                      dispatch({ type: "SET_IS_ARCHIVED", payload: Boolean(v) })
                    }
                  />
                  <Label htmlFor="is_archived" className="cursor-pointer">
                    {t("properties.isArchived")}
                  </Label>
                </div>

                <div className="flex items-center gap-2">
                  <Checkbox
                    id="is_recommended"
                    checked={state.isRecommended}
                    onCheckedChange={(v) =>
                      dispatch({
                        type: "SET_IS_RECOMMENDED",
                        payload: Boolean(v),
                      })
                    }
                  />
                  <Label htmlFor="is_recommended" className="cursor-pointer">
                    {t("properties.isRecommended")}
                  </Label>
                </div>

                <div className="flex items-center gap-2">
                  <Checkbox
                    id="is_testing"
                    checked={state.isTesting}
                    onCheckedChange={(v) =>
                      dispatch({
                        type: "SET_IS_TESTING",
                        payload: Boolean(v),
                      })
                    }
                  />
                  <Label htmlFor="is_testing" className="cursor-pointer">
                    {t("properties.isTesting")}
                  </Label>
                </div>

                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="verification_status">
                    {t("properties.verificationStatus")}
                  </Label>
                  <Select
                    value={state.verificationStatus ?? ""}
                    onValueChange={(value) =>
                      dispatch({
                        type: "SET_VERIFICATION_STATUS",
                        payload: value || null,
                      })
                    }
                  >
                    <SelectTrigger id="verification_status">
                      <SelectValue
                        placeholder={t("properties.selectVerificationStatus")}
                      />
                    </SelectTrigger>
                    <SelectContent>
                      {(["cancelled", "accepted", "waiting"] as const).map(
                        (status) => (
                          <SelectItem key={status} value={status}>
                            {t(`propertyDetails.status.${status}`)}
                          </SelectItem>
                        ),
                      )}
                    </SelectContent>
                  </Select>
                </div>

                {!isCreateMode ? (
                  <>
                    <Separator className="md:col-span-2" />

                    <div className="space-y-1 text-sm text-muted-foreground md:col-span-2">
                      <p>
                        <span className="font-medium">GUID:</span>{" "}
                        {cottage.guid}
                      </p>
                      <p>
                        <span className="font-medium">
                          {t("properties.createdAt")}:
                        </span>{" "}
                        {formatDateTime(cottage.created_at)}
                      </p>
                      <p>
                        <span className="font-medium">
                          {t("properties.averageRating")}:
                        </span>{" "}
                        {cottage.average_rating ?? "-"}
                      </p>
                      <p>
                        <span className="font-medium">
                          {t("properties.propertyType")}:
                        </span>{" "}
                        {cottage.property_type?.uz ??
                          cottage.property_type?.ru ??
                          cottage.property_type?.en ??
                          "-"}
                      </p>
                    </div>

                    <Separator className="md:col-span-2" />

                    <div className="md:col-span-2">
                      <Button
                        type="button"
                        variant="destructive"
                        onClick={() => {
                          dispatch({
                            type: "SET_DELETE_CONFIRM_TEXT",
                            payload: "",
                          });
                          dispatch({
                            type: "SET_DELETE_DIALOG_OPEN",
                            payload: true,
                          });
                        }}
                        disabled={deleteMutation.isPending}
                      >
                        <Trash2 className="mr-2 h-4 w-4" />
                        {deleteMutation.isPending
                          ? t("properties.deleting")
                          : t("properties.deleteCottage")}
                      </Button>
                    </div>
                  </>
                ) : null}
              </CardContent>
            </Card>

            {!isCreateMode ? (
              <Dialog
                open={state.deleteDialogOpen}
                onOpenChange={(open) => {
                  dispatch({ type: "SET_DELETE_DIALOG_OPEN", payload: open });
                  if (!open) {
                    dispatch({ type: "SET_DELETE_CONFIRM_TEXT", payload: "" });
                  }
                }}
              >
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>
                      {t("properties.deleteConfirmTitle")}
                    </DialogTitle>
                    <DialogDescription>
                      {t("properties.deleteConfirmDescription", {
                        title: cottage.title,
                      })}
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-2">
                    <Label htmlFor="delete-confirm-input">
                      {t("properties.deleteTypeToConfirmLabel")}
                    </Label>
                    <Input
                      id="delete-confirm-input"
                      value={state.deleteConfirmText}
                      onChange={(e) =>
                        dispatch({
                          type: "SET_DELETE_CONFIRM_TEXT",
                          payload: e.target.value,
                        })
                      }
                      placeholder={t(
                        "properties.deleteTypeToConfirmPlaceholder",
                      )}
                      autoComplete="off"
                    />
                    <p className="text-sm text-muted-foreground">
                      {t("properties.deleteTypeToConfirmHint", {
                        title: cottage.title,
                      })}
                    </p>
                  </div>
                  <DialogFooter>
                    <Button
                      variant="outline"
                      onClick={() =>
                        dispatch({
                          type: "SET_DELETE_DIALOG_OPEN",
                          payload: false,
                        })
                      }
                      disabled={deleteMutation.isPending}
                    >
                      {t("common.cancel")}
                    </Button>
                    <Button
                      variant="destructive"
                      onClick={() => deleteMutation.mutate()}
                      disabled={deleteMutation.isPending || !deleteIsConfirmed}
                    >
                      <Trash2 className="mr-2 h-4 w-4" />
                      {deleteMutation.isPending
                        ? t("properties.deleting")
                        : t("properties.confirmDelete")}
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            ) : null}
          </TabsContent>
        </Tabs>

        <div className="flex items-center gap-3">
          <Button type="submit" disabled={updateMutation.isPending}>
            <Save className="mr-2 h-4 w-4" />
            {updateMutation.isPending
              ? isCreateMode
                ? t("common.creating")
                : t("common.saving")
              : isCreateMode
                ? t("common.create")
                : t("common.save")}
          </Button>
        </div>

        <details className="rounded-lg border bg-muted/30">
          <summary className="cursor-pointer px-4 py-2 text-sm font-medium text-muted-foreground">
            {t("propertyDetails.raw.title") ?? "Raw Property Data"} (Debug)
          </summary>
          <div className="space-y-3 p-4 pt-0">
            <CopyBlock label="API Response" data={cottage} />
            <CopyBlock label="Form State" data={state} />
          </div>
        </details>
      </form>
    </div>
  );
}
