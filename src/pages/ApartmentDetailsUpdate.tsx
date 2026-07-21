import { useEffect, useMemo, useReducer, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { api, fetchExchangeRate } from "@/lib/api";
import { resolveImageUrl, cn } from "@/lib/utils";
import { formatUzbekPhoneNumber, getPhoneHref } from "@/lib/phone";
import { fetchAllPartners, type PartnerDetails } from "@/lib/partners";
import type {
  ApartmentAdminList,
  ApartmentAdminUpdate,
  RegionList,
  DistrictList,
  PrefectureList,
} from "@/types/weel-openapi";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PriceInput } from "@/components/ui/price-input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CottageCalendarSection from "@/components/CottageCalendarSection";
import {
  Save,
  GripVertical,
  Trash2,
  Plus,
  Loader2,
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

const MAX_IMAGES = 10;

type ApartmentForm = {
  title: string;
  price: string;
  currency: "USD" | "UZS" | undefined;
  guests: string;
  rooms: string;
  beds: string;
  bathrooms: string;
  latitude: string | null;
  longitude: string | null;
  country: string | null;
  city: string | null;
  region_id: string | null;
  district_id: string | null;
  prefecture_id: string | null;
  apartment_number: string | null;
  home_number: string | null;
  entrance_number: string | null;
  floor_number: string | null;
  pass_code: string | null;
  is_verified: boolean;
  verification_status: string | null;
  is_archived: boolean;
  is_recommended: boolean;
  is_testing: boolean;
  descRu: string;
  descUz: string;
};

const fetchApartment = async (id: string): Promise<ApartmentAdminList> => {
  const response = await api.get<ApartmentAdminList>(
    `/property/admin/apartments/${id}/`,
  );
  return response.data;
};

const updateApartment = async (
  id: string,
  payload: ApartmentAdminUpdate,
): Promise<ApartmentAdminList> => {
  const response = await api.patch<ApartmentAdminList>(
    `/property/admin/apartments/${id}/`,
    payload,
  );
  return response.data;
};

const createApartment = async (
  payload: ApartmentAdminUpdate & { partner_user_id?: number | null },
): Promise<ApartmentAdminList> => {
  const response = await api.post<ApartmentAdminList>(
    "/property/admin/apartments/",
    payload,
  );
  return response.data;
};

const uploadApartmentImage = async (
  id: string,
  file: File,
): Promise<unknown> => {
  const formData = new FormData();
  formData.append("image", file);
  const response = await api.post(
    `/property/admin/apartments/${id}/images/`,
    formData,
  );
  return response.data;
};

const deleteApartmentImage = async (
  id: string,
  imageId: string,
): Promise<void> => {
  const normalizeImageId = (raw: string) => {
    const trimmed = String(raw || "").trim().replace(/\/+$/, "");
    if (!trimmed) return trimmed;
    try {
      const url = new URL(trimmed);
      const path = url.pathname.replace(/\/+$/, "");
      const markers = [
        "/weel-media/property/images/",
        "/property/images/",
        "/media/property/images/",
      ] as const;
      for (const marker of markers) {
        const idx = path.indexOf(marker);
        if (idx >= 0)
          return `${marker.replace(/^\//, "")}${path.slice(idx + marker.length)}`;
      }
      return path.replace(/^\/+/, "");
    } catch {
      const markers = [
        "weel-media/property/images/",
        "property/images/",
        "media/property/images/",
      ] as const;
      for (const marker of markers) {
        const idx = trimmed.indexOf(marker);
        if (idx >= 0) return `${marker}${trimmed.slice(idx + marker.length)}`;
      }
      return trimmed.replace(/^\/+/, "");
    }
  };

  const normalized = normalizeImageId(imageId);
  await api.delete(
    `/property/admin/apartments/${id}/images/${encodeURIComponent(normalized)}/`,
  );
};

const fetchRegions = async (): Promise<LocationOption[]> => {
  const response = await api.get<RegionList[]>("/property/admin/regions/");
  return (response.data ?? [])
    .map((r) => ({ id: String(r.id ?? ""), label: r.title ?? "" }))
    .filter((i) => i.id);
};

const fetchDistricts = async (): Promise<LocationOption[]> => {
  const response = await api.get<DistrictList[]>("/property/admin/districts/");
  return (response.data ?? [])
    .map((d) => ({
      id: String(d.id ?? ""),
      label: d.title ?? "",
      region_id: String(d.region_id ?? ""),
    }))
    .filter((i) => i.id);
};

const fetchPrefectures = async (
  districtId?: string | null,
): Promise<LocationOption[]> => {
  const response = await api.get<PrefectureList[]>("/property/admin/prefectures/", {
    params: districtId ? { district_id: districtId } : undefined,
  });
  return (response.data ?? [])
    .map((p) => ({
      id: String(p.guid ?? ""),
      label: p.title ?? "",
      district_guid: String(p.district?.guid ?? ""),
    }))
    .filter((i) => i.id);
};

function formatDateTime(value?: string | null) {
  if (!value) return "-";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleString();
}

const emptyForm: ApartmentForm = {
  title: "",
  price: "",
  currency: undefined,
  guests: "",
  rooms: "",
  beds: "",
  bathrooms: "",
  latitude: null,
  longitude: null,
  country: null,
  city: null,
  region_id: null,
  district_id: null,
  prefecture_id: null,
  apartment_number: null,
  home_number: null,
  entrance_number: null,
  floor_number: null,
  pass_code: null,
  is_verified: false,
  verification_status: null,
  is_archived: false,
  is_recommended: false,
  is_testing: false,
  descRu: "",
  descUz: "",
};

type PageState = {
  form: ApartmentForm;
  savedMessage: string | null;
  imageMessage: string | null;
  draggedIndex: number | null;
  dragOverIndex: number | null;
  isDragOver: boolean;
};

type PageAction =
  | { type: "loadFromApartment"; apartment: ApartmentAdminList }
  | { type: "setField"; key: keyof ApartmentForm; value: ApartmentForm[keyof ApartmentForm] }
  | { type: "setSavedMessage"; value: string | null }
  | { type: "setImageMessage"; value: string | null }
  | { type: "setDraggedIndex"; value: number | null }
  | { type: "setDragOverIndex"; value: number | null }
  | { type: "setIsDragOver"; value: boolean };

function pageReducer(state: PageState, action: PageAction): PageState {
  switch (action.type) {
    case "loadFromApartment": {
      const apartment = action.apartment;
      const detail = apartment.property_detail;
      return {
        ...state,
        form: {
          title: apartment.title ?? "",
          price: apartment.price == null ? "" : String(apartment.price),
          currency: (apartment.currency as "USD" | "UZS") ?? undefined,
          guests: apartment.guests == null ? "" : String(apartment.guests),
          rooms: apartment.rooms == null ? "" : String(apartment.rooms),
          beds: apartment.beds == null ? "" : String(apartment.beds),
          bathrooms:
            apartment.bathrooms == null ? "" : String(apartment.bathrooms),
          latitude: apartment.latitude ?? null,
          longitude: apartment.longitude ?? null,
          country: apartment.country ?? null,
          city: apartment.city ?? null,
          region_id: apartment.region_id ? String(apartment.region_id) : null,
          district_id: apartment.district_id ? String(apartment.district_id) : null,
          prefecture_id: apartment.prefecture_id ?? null,
          apartment_number: apartment.apartment_number ?? null,
          home_number: apartment.home_number ?? null,
          entrance_number: apartment.entrance_number ?? null,
          floor_number: apartment.floor_number ?? null,
          pass_code: apartment.pass_code ?? null,
          is_verified: apartment.is_verified ?? false,
          verification_status: apartment.verification_status ?? null,
          is_archived: apartment.is_archived ?? false,
          is_recommended: Boolean(apartment.is_recommended),
          is_testing: Boolean(apartment.is_testing),
          descRu: detail?.description_ru ?? "",
          descUz: detail?.description_uz ?? "",
        },
      };
    }
    case "setField": {
      const nextForm = { ...state.form, [action.key]: action.value } as ApartmentForm;
      if (action.key === "region_id") {
        nextForm.district_id = null;
        nextForm.prefecture_id = null;
      }
      if (action.key === "district_id") {
        nextForm.prefecture_id = null;
      }
      return { ...state, form: nextForm };
    }
    case "setSavedMessage":
      return { ...state, savedMessage: action.value };
    case "setImageMessage":
      return { ...state, imageMessage: action.value };
    case "setDraggedIndex":
      return { ...state, draggedIndex: action.value };
    case "setDragOverIndex":
      return { ...state, dragOverIndex: action.value };
    case "setIsDragOver":
      return { ...state, isDragOver: action.value };
    default:
      return state;
  }
}

export default function ApartmentDetailsUpdate() {
  const { propertyId } = useParams<{ propertyId: string }>();
  const isCreateMode = propertyId === "create";
  const navigate = useNavigate();
  const { t } = useTranslation();
  const queryClient = useQueryClient();

  const [state, dispatch] = useReducer(pageReducer, {
    form: emptyForm,
    savedMessage: null,
    imageMessage: null,
    draggedIndex: null,
    dragOverIndex: null,
    isDragOver: false,
  });
  const [selectedPartnerId, setSelectedPartnerId] = useState("");
  const [partnerSearchTerm, setPartnerSearchTerm] = useState("");
  const [pendingCreateImages, setPendingCreateImages] = useState<
    Array<{ file: File; previewUrl: string }>
  >([]);
  const pendingCreateImagesRef = useRef(pendingCreateImages);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const { form, savedMessage, imageMessage, draggedIndex, dragOverIndex, isDragOver } = state;
  const fileInputRef = useRef<HTMLInputElement>(null);

  const apartmentQuery = useQuery({
    queryKey: ["apartment", propertyId],
    queryFn: () => fetchApartment(propertyId!),
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
    queryKey: ["prefectures", form.district_id],
    queryFn: () => fetchPrefectures(form.district_id),
    enabled: Boolean(form.district_id),
  });
  const partnersQuery = useQuery({
    queryKey: ["adminPartners"],
    queryFn: fetchAllPartners,
  });
  const partnerOptions = useMemo(
    () =>
      (partnersQuery.data ?? [])
        .filter((partner): partner is PartnerDetails & { id: number } =>
          typeof partner.id === "number",
        )
        .sort((a, b) => {
          const nameA =
            a.full_name ||
            [a.first_name, a.last_name].filter(Boolean).join(" ") ||
            a.username ||
            "";
          const nameB =
            b.full_name ||
            [b.first_name, b.last_name].filter(Boolean).join(" ") ||
            b.username ||
            "";
          return nameA.localeCompare(nameB);
        }),
    [partnersQuery.data],
  );
  const selectedPartner = useMemo(
    () =>
      partnerOptions.find((partner) => String(partner.id) === selectedPartnerId) ??
      null,
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

  const apartment =
    apartmentQuery.data ??
    ({
      guid: "",
      title: form.title,
      img: [],
      services: [],
      is_favorite: false,
      is_allowed_corporate: false,
      created_at: "",
      property_type_id: "",
      property_type: {},
      average_rating: null,
      partner_user: undefined,
      is_verified: form.is_verified,
      is_archived: form.is_archived,
    } as ApartmentAdminList);

  useEffect(() => {
    if (!apartmentQuery.data) return;
    dispatch({ type: "loadFromApartment", apartment: apartmentQuery.data });
  }, [apartmentQuery.data]);

  useEffect(() => {
    pendingCreateImagesRef.current = pendingCreateImages;
  }, [pendingCreateImages]);

  useEffect(() => {
    return () => {
      pendingCreateImagesRef.current.forEach((item) => URL.revokeObjectURL(item.previewUrl));
    };
  }, []);

  const updateMutation = useMutation({
    mutationFn: (payload: ApartmentAdminUpdate) => {
      if (isCreateMode) {
        return createApartment({
          ...payload,
          partner_user_id: Number(selectedPartnerId),
        });
      }
      return updateApartment(propertyId!, payload);
    },
    onSuccess: async (data) => {
      if (isCreateMode) {
        for (const pending of pendingCreateImages) {
          try {
            await uploadApartmentImage(data.guid, pending.file);
          } catch {
            dispatch({
              type: "setImageMessage",
              value:
                t("propertyDetails.messages.imageUpdateFailed") ??
                "Failed to update image",
            });
          }
        }
        pendingCreateImages.forEach((item) => URL.revokeObjectURL(item.previewUrl));
        setPendingCreateImages([]);
        queryClient.invalidateQueries({ queryKey: ["properties"] });
        navigate(`/properties/apartments/${data.guid}`);
        return;
      }
      queryClient.setQueryData(["apartment", propertyId], data);
      dispatch({
        type: "setSavedMessage",
        value: t("common.saved") ?? "Saved successfully",
      });
      setTimeout(() => dispatch({ type: "setSavedMessage", value: null }), 3000);
    },
    onError: (error) => {
      console.error("Apartment update failed:", error);
    },
  });

  const uploadImageMutation = useMutation({
    mutationFn: (file: File) => uploadApartmentImage(propertyId!, file),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["apartment", propertyId] });
      dispatch({
        type: "setImageMessage",
        value:
          t("propertyDetails.messages.imageUpdateSuccess") ??
          "Image updated successfully",
      });
      setTimeout(() => dispatch({ type: "setImageMessage", value: null }), 3000);
    },
    onError: () => {
      dispatch({
        type: "setImageMessage",
        value:
          t("propertyDetails.messages.imageUpdateFailed") ??
          "Failed to update image",
      });
    },
  });

  const deleteImageMutation = useMutation({
    mutationFn: (imageId: string) => deleteApartmentImage(propertyId!, imageId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["apartment", propertyId] });
      dispatch({
        type: "setImageMessage",
        value:
          t("propertyDetails.messages.imageUpdateSuccess") ??
          "Image updated successfully",
      });
      setTimeout(() => dispatch({ type: "setImageMessage", value: null }), 3000);
    },
    onError: () => {
      dispatch({
        type: "setImageMessage",
        value:
          t("propertyDetails.messages.imageUpdateFailed") ??
          "Failed to update image",
      });
      setTimeout(() => dispatch({ type: "setImageMessage", value: null }), 3000);
    },
  });

  const imagesUpdateMutation = useMutation({
    mutationFn: (updatedImages: string[]) =>
      updateApartment(propertyId!, { img: updatedImages }),
    onMutate: async (updatedImages) => {
      await queryClient.cancelQueries({ queryKey: ["apartment", propertyId] });
      const previous = queryClient.getQueryData<ApartmentAdminList>([
        "apartment",
        propertyId,
      ]);
      queryClient.setQueryData(
        ["apartment", propertyId],
        (old: ApartmentAdminList | undefined) => {
          if (!old) return old;
          return { ...old, img: updatedImages };
        },
      );
      return { previous };
    },
    onError: (_err, _updatedImages, context) => {
      if (context?.previous) {
        queryClient.setQueryData(["apartment", propertyId], context.previous);
      }
      dispatch({
        type: "setImageMessage",
        value:
          t("propertyDetails.messages.imageUpdateFailed") ??
          "Failed to update image",
      });
      setTimeout(() => dispatch({ type: "setImageMessage", value: null }), 3000);
    },
  });

  const deleteApartmentMutation = useMutation({
    mutationFn: () => api.delete(`/property/admin/apartments/${propertyId}/`),
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: ["properties"] });
      navigate("/properties");
    },
    onError: () => {
      dispatch({
        type: "setSavedMessage",
        value:
          t("propertyDetails.messages.deleteFailed") ??
          "Failed to delete apartment",
      });
    },
  });

  const handleChange = <K extends keyof ApartmentForm>(
    key: K,
    value: ApartmentForm[K],
  ) => dispatch({ type: "setField", key, value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!propertyId) return;
    if (isCreateMode && !selectedPartnerId) {
      dispatch({
        type: "setSavedMessage",
        value:
          t("properties.partnerSelectRequired") ??
          "Select a partner before creating a property.",
      });
      return;
    }
    const missing: string[] = [];
    if (!form.title.trim()) missing.push("title");
    if (!form.currency) missing.push("currency");
    if (!form.descRu.trim()) missing.push("description_ru");
    if (!form.descUz.trim()) missing.push("description_uz");
    if (missing.length) {
      dispatch({
        type: "setSavedMessage",
        value: `Missing required fields: ${missing.join(", ")}`,
      });
      setTimeout(() => dispatch({ type: "setSavedMessage", value: null }), 4000);
      return;
    }

    const payload: ApartmentAdminUpdate = {
      title: form.title,
      price: form.price,
      currency: form.currency,
      guests: form.guests ? Number(form.guests) : undefined,
      rooms: form.rooms ? Number(form.rooms) : undefined,
      beds: form.beds ? Number(form.beds) : undefined,
      bathrooms: form.bathrooms ? Number(form.bathrooms) : undefined,
      latitude: form.latitude,
      longitude: form.longitude,
      country: form.country,
      city: form.city,
      region_id: form.region_id ? Number(form.region_id) : null,
      district_id: form.district_id ? Number(form.district_id) : null,
      prefecture_id: form.prefecture_id,
      apartment_number: form.apartment_number || undefined,
      home_number: form.home_number || undefined,
      entrance_number: form.entrance_number || undefined,
      floor_number: form.floor_number || undefined,
      pass_code: form.pass_code || undefined,
      is_verified: form.is_verified,
      verification_status: form.verification_status || undefined,
      is_archived: form.is_archived,
      is_testing: form.is_testing,
      is_recommended: form.is_recommended,
      description_ru: form.descRu.trim(),
      description_uz: form.descUz.trim(),
      check_in: "14:00:00",
      check_out: "12:00:00",
      is_allowed_alcohol: false,
      is_allowed_corporate: false,
      is_allowed_pets: false,
      is_quiet_hours: false,
      description_en:
        form.descRu.trim() || form.descUz.trim()
          ? form.descRu.trim() || form.descUz.trim()
          : undefined,
    };
    updateMutation.mutate(payload);
  };

  const currentImageCount = isCreateMode
    ? pendingCreateImages.length
    : (apartment?.img?.length ?? 0);
  const isMaxImages = currentImageCount >= MAX_IMAGES;
  const imageItems = isCreateMode
    ? pendingCreateImages.map((item) => item.previewUrl)
    : (apartment.img ?? []);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (isMaxImages) {
      dispatch({
        type: "setImageMessage",
        value:
          t("properties.maxImagesReached") ??
          `Maximum ${MAX_IMAGES} images allowed.`,
      });
      setTimeout(() => dispatch({ type: "setImageMessage", value: null }), 3000);
      if (fileInputRef.current) fileInputRef.current.value = "";
      return;
    }
    if (isCreateMode) {
      const previewUrl = URL.createObjectURL(file);
      setPendingCreateImages((prev) => [...prev, { file, previewUrl }]);
      dispatch({ type: "setImageMessage", value: null });
    } else {
      uploadImageMutation.mutate(file);
    }
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleFileDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch({ type: "setIsDragOver", value: false });

    if (isMaxImages) {
      dispatch({
        type: "setImageMessage",
        value:
          t("properties.maxImagesReached") ??
          `Maximum ${MAX_IMAGES} images allowed.`,
      });
      setTimeout(() => dispatch({ type: "setImageMessage", value: null }), 3000);
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
    if (!isDragOver && !isMaxImages) {
      dispatch({ type: "setIsDragOver", value: true });
    }
  };

  const handleDragLeaveZone = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.currentTarget.contains(e.relatedTarget as Node)) return;
    dispatch({ type: "setIsDragOver", value: false });
  };

  const handleDragStart = (e: React.DragEvent, index: number) => {
    dispatch({ type: "setDraggedIndex", value: index });
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/plain", String(index));
  };

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
    if (draggedIndex !== index) {
      dispatch({ type: "setDragOverIndex", value: index });
    }
  };

  const handleDrop = (e: React.DragEvent, dropIndex: number) => {
    e.preventDefault();
    const dragIndex = Number(e.dataTransfer.getData("text/plain"));
    if (dragIndex === dropIndex || Number.isNaN(dragIndex)) {
      dispatch({ type: "setDraggedIndex", value: null });
      dispatch({ type: "setDragOverIndex", value: null });
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
      const currentImages = apartment?.img ?? [];
      const newImages = [...currentImages];
      const [removed] = newImages.splice(dragIndex, 1);
      newImages.splice(dropIndex, 0, removed);
      imagesUpdateMutation.mutate(newImages);
    }
    dispatch({ type: "setDraggedIndex", value: null });
    dispatch({ type: "setDragOverIndex", value: null });
  };

  const handleDragEnd = () => {
    dispatch({ type: "setDraggedIndex", value: null });
    dispatch({ type: "setDragOverIndex", value: null });
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
    const currentImages = apartment?.img ?? [];
    const imageId = currentImages[index];
    if (!imageId) return;
    deleteImageMutation.mutate(imageId);
  };

  const filteredDistricts = useMemo(() => {
    const all = districtsQuery.data ?? [];
    if (!form.region_id) return all;
    return all.filter((d) => d.region_id === form.region_id);
  }, [districtsQuery.data, form.region_id]);

  const filteredPrefectures = useMemo(
    () => prefecturesQuery.data ?? [],
    [prefecturesQuery.data],
  );

  if (!isCreateMode && apartmentQuery.isLoading) {
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

  if (!isCreateMode && (apartmentQuery.error || !apartment)) {
    return (
      <div className="h-full overflow-y-auto p-4 md:p-6">
        <p className="text-sm text-red-600">
          {t("properties.loadFailed", {
            type: t("properties.tabs.apartments"),
          })}
        </p>
      </div>
    );
  }

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
                type: t("properties.tabs.apartments"),
              })
            : apartment.title}
        </h1>
        <div className="ml-auto flex items-center gap-2">
          {isCreateMode ? (
            <Badge variant="outline">{t("properties.createModeBadge")}</Badge>
          ) : null}
          {apartment.is_verified ? (
            <Badge variant="default">{t("properties.verified")}</Badge>
          ) : (
            <Badge variant="outline">{t("properties.unverified")}</Badge>
          )}
          {apartment.is_archived ? (
            <Badge variant="secondary">{t("properties.archived")}</Badge>
          ) : null}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {isCreateMode ? (
          <div className="rounded-md border border-blue-200 bg-blue-50 px-4 py-3 text-sm text-blue-700">
            {t("properties.createModeDescription", {
              type: t("properties.tabs.apartments"),
            })}
          </div>
        ) : null}
        {savedMessage && (
          <div className="rounded-md border bg-green-50 px-4 py-2 text-sm text-green-700">
            {savedMessage}
          </div>
        )}
        {updateMutation.isError && (
          <div className="rounded-md border bg-red-50 px-4 py-2 text-sm text-red-700">
            {t("common.saveFailed")}
          </div>
        )}

        <Tabs defaultValue="basic" className="w-full">
          <TabsList>
            <TabsTrigger value="basic">
              {t("properties.tabs.basic")}
            </TabsTrigger>
            <TabsTrigger value="pricing">
              {t("properties.tabs.pricing")}
            </TabsTrigger>
            <TabsTrigger value="location">
              {t("properties.tabs.location")}
            </TabsTrigger>
            {!isCreateMode ? (
              <TabsTrigger value="calendar">
                {t("properties.tabs.calendar")}
              </TabsTrigger>
            ) : null}
            <TabsTrigger value="details">
              {t("properties.tabs.details")}
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
                    value={form.title}
                    onChange={(e) => handleChange("title", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="guests">{t("properties.guests")}</Label>
                  <Input
                    id="guests"
                    type="number"
                    min={0}
                    value={form.guests}
                    onChange={(e) => handleChange("guests", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="rooms">{t("properties.rooms")}</Label>
                  <Input
                    id="rooms"
                    type="number"
                    min={0}
                    value={form.rooms}
                    onChange={(e) => handleChange("rooms", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="beds">{t("properties.beds")}</Label>
                  <Input
                    id="beds"
                    type="number"
                    min={0}
                    value={form.beds}
                    onChange={(e) => handleChange("beds", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bathrooms">{t("properties.bathrooms")}</Label>
                  <Input
                    id="bathrooms"
                    type="number"
                    min={0}
                    value={form.bathrooms}
                    onChange={(e) => handleChange("bathrooms", e.target.value)}
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="pricing" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">
                  {t("properties.pricing")}
                </CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="price">
                    {t("propertyDetails.fields.pricePerNight")}
                  </Label>
                  <PriceInput
                    id="price"
                    currency={form.currency ?? "USD"}
                    value={form.price}
                    onChange={(value) => handleChange("price", value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="currency">{t("properties.currency")}</Label>
                    <Select
                    value={form.currency ?? ""}
                    onValueChange={async (value) => {
                      const newCurrency = value as "USD" | "UZS";
                      if (form.currency === newCurrency || !form.price) {
                        handleChange("currency", newCurrency);
                        return;
                      }
                      try {
                        const rate = await fetchExchangeRate();
                        const currentPrice = Number.parseFloat(form.price);
                        if (Number.isFinite(currentPrice)) {
                          const converted =
                            form.currency === "USD" && newCurrency === "UZS"
                              ? String(Math.round(currentPrice * rate))
                              : form.currency === "UZS" && newCurrency === "USD"
                                ? String(Math.round(currentPrice / rate))
                                : form.price;
                          handleChange("price", converted);
                        }
                      } catch {
                        /* rate fetch failed — change currency without converting */
                      }
                      handleChange("currency", newCurrency);
                    }}
                  >
                    <SelectTrigger id="currency">
                      <SelectValue
                        placeholder={t("properties.selectCurrency")}
                      />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="USD">USD</SelectItem>
                      <SelectItem value="UZS">UZS</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

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
                    value={form.country ?? ""}
                    onChange={(e) =>
                      handleChange("country", e.target.value || null)
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="city">{t("properties.city")}</Label>
                  <Input
                    id="city"
                    value={form.city ?? ""}
                    onChange={(e) =>
                      handleChange("city", e.target.value || null)
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="latitude">{t("properties.latitude")}</Label>
                  <Input
                    id="latitude"
                    value={form.latitude ?? ""}
                    onChange={(e) =>
                      handleChange("latitude", e.target.value || null)
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="longitude">{t("properties.longitude")}</Label>
                  <Input
                    id="longitude"
                    value={form.longitude ?? ""}
                    onChange={(e) =>
                      handleChange("longitude", e.target.value || null)
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="region_id">{t("properties.region")}</Label>
                  <Select
                    value={form.region_id ?? ""}
                    onValueChange={(value) =>
                      handleChange("region_id", value || null)
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
                    value={form.district_id ?? ""}
                    onValueChange={(value) =>
                      handleChange("district_id", value || null)
                    }
                    disabled={!form.region_id}
                  >
                    <SelectTrigger id="district_id">
                      <SelectValue
                        placeholder={
                          form.region_id
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
                    value={form.prefecture_id ?? ""}
                    onValueChange={(value) =>
                      handleChange("prefecture_id", value || null)
                    }
                    disabled={!form.district_id}
                  >
                    <SelectTrigger id="prefecture_id">
                      <SelectValue
                        placeholder={
                          form.district_id
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

          {!isCreateMode ? (
            <TabsContent value="calendar" className="space-y-4">
              <CottageCalendarSection
                propertyId={apartment.guid}
                isVerified={Boolean(apartment.is_verified)}
              />
            </TabsContent>
          ) : null}

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
                    value={form.descUz}
                    onChange={(e) => handleChange("descUz", e.target.value)}
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
                    value={form.descRu}
                    onChange={(e) => handleChange("descRu", e.target.value)}
                    rows={4}
                    placeholder={t("properties.descriptionRu")}
                  />
                </div>

                <Separator className="md:col-span-2" />

                <div className="space-y-2">
                  <Label htmlFor="apartment_number">
                    {t("propertyDetails.fields.apartmentNumber")}
                  </Label>
                  <Input
                    id="apartment_number"
                    value={form.apartment_number ?? ""}
                    onChange={(e) =>
                      handleChange("apartment_number", e.target.value || null)
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="home_number">
                    {t("propertyDetails.fields.homeNumber")}
                  </Label>
                  <Input
                    id="home_number"
                    value={form.home_number ?? ""}
                    onChange={(e) =>
                      handleChange("home_number", e.target.value || null)
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="entrance_number">
                    {t("propertyDetails.fields.entranceNumber")}
                  </Label>
                  <Input
                    id="entrance_number"
                    value={form.entrance_number ?? ""}
                    onChange={(e) =>
                      handleChange("entrance_number", e.target.value || null)
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="floor_number">
                    {t("propertyDetails.fields.floorNumber")}
                  </Label>
                  <Input
                    id="floor_number"
                    value={form.floor_number ?? ""}
                    onChange={(e) =>
                      handleChange("floor_number", e.target.value || null)
                    }
                  />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="pass_code">
                    {t("propertyDetails.fields.passCode")}
                  </Label>
                  <Input
                    id="pass_code"
                    value={form.pass_code ?? ""}
                    onChange={(e) =>
                      handleChange("pass_code", e.target.value || null)
                    }
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

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
                {imageMessage && (
                  <div
                    className={`rounded-md border px-4 py-2 text-sm ${
                      imageMessage.includes(
                        t("propertyDetails.messages.imageUpdateSuccess") ??
                          "success",
                      )
                        ? "bg-green-50 text-green-700"
                        : "bg-red-50 text-red-700"
                    }`}
                  >
                    {imageMessage}
                  </div>
                )}

                <div
                  className={cn(
                    "relative rounded-lg transition-all",
                    isDragOver && !isMaxImages && "ring-2 ring-primary ring-offset-2 bg-primary/5",
                  )}
                  onDrop={handleFileDrop}
                  onDragOver={handleDragOverZone}
                  onDragLeave={handleDragLeaveZone}
                >
                  {isDragOver && (
                    <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-2 rounded-lg bg-primary/10 pointer-events-none">
                      <Upload className="h-8 w-8 text-primary" />
                      <span className="text-sm font-medium text-primary">
                        {t("common.dropHere") ?? "Drop image here"}
                      </span>
                    </div>
                  )}
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
                  {imageItems.map((src, index) => {
                    const isDragged = draggedIndex === index;
                    const isDropTarget =
                      dragOverIndex === index && draggedIndex !== index;

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
                          alt={`${apartment.title} ${index + 1}`}
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
                              t("properties.dragToReorder") ?? "Drag to reorder"
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
                          title={t("properties.deleteImage") ?? "Delete image"}
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
                          dispatch({ type: "setSavedMessage", value: null });
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
                            [selectedPartner.first_name, selectedPartner.last_name]
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
                ) : apartment.partner_user ? (
                  <>
                    <div className="space-y-1 md:col-span-2">
                      <div className="flex items-center gap-3">
                        {apartment.partner_user.avatar ? (
                          <img
                            src={resolveImageUrl(apartment.partner_user.avatar)}
                            alt=""
                            className="h-12 w-12 rounded-full object-cover"
                          />
                        ) : (
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted text-sm font-bold text-muted-foreground">
                            {(
                              apartment.partner_user.first_name?.[0] ??
                              apartment.partner_user.username?.[0] ??
                              "?"
                            ).toUpperCase()}
                          </div>
                        )}
                        <div>
                          <p className="font-medium">
                            {[
                              apartment.partner_user.first_name,
                              apartment.partner_user.last_name,
                            ]
                              .filter(Boolean)
                              .join(" ") ||
                              apartment.partner_user.username ||
                              "-"}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {apartment.partner_user.username ? (
                              <button
                                type="button"
                                onClick={() => {
                                  const partnerId = apartment.partner_user?.id;
                                  if (partnerId) navigate(`/partner/${partnerId}`);
                                }}
                                className="text-xs text-primary hover:underline"
                              >
                                @{apartment.partner_user.username}
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
                        {apartment.partner_user.id}
                      </p>
                    </div>

                    <div className="space-y-1">
                      <Label className="text-xs text-muted-foreground">
                        {t("properties.partnerRole")}
                      </Label>
                      <p className="text-sm font-medium">
                        {apartment.partner_user.role ?? "-"}
                      </p>
                    </div>

                    <div className="space-y-1">
                      <Label className="text-xs text-muted-foreground">
                        {t("properties.partnerPhone")}
                      </Label>
                      {apartment.partner_user.phone_number ? (
                        <a
                          href={getPhoneHref(apartment.partner_user.phone_number)}
                          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                        >
                          <Phone className="h-3.5 w-3.5" />
                          {formatUzbekPhoneNumber(apartment.partner_user.phone_number)}
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
                        {apartment.partner_user.email ?? "-"}
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <Badge
                        variant={
                          apartment.partner_user.is_active
                            ? "default"
                            : "secondary"
                        }
                      >
                        {apartment.partner_user.is_active
                          ? t("properties.partnerActive")
                          : t("properties.partnerInactive")}
                      </Badge>
                      {apartment.partner_user.is_verified && (
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
                    checked={form.is_verified}
                    onCheckedChange={(v) =>
                      handleChange("is_verified", Boolean(v))
                    }
                  />
                  <Label htmlFor="is_verified" className="cursor-pointer">
                    {t("properties.isVerified")}
                  </Label>
                </div>

                <div className="flex items-center gap-2">
                  <Checkbox
                    id="is_archived"
                    checked={form.is_archived}
                    onCheckedChange={(v) =>
                      handleChange("is_archived", Boolean(v))
                    }
                  />
                  <Label htmlFor="is_archived" className="cursor-pointer">
                    {t("properties.isArchived")}
                  </Label>
                </div>

                <div className="flex items-center gap-2">
                  <Checkbox
                    id="is_testing"
                    checked={form.is_testing}
                    onCheckedChange={(v) =>
                      handleChange("is_testing", Boolean(v))
                    }
                  />
                  <Label htmlFor="is_testing" className="cursor-pointer">
                    {t("properties.isTesting")}
                  </Label>
                </div>

                <div className="flex items-center gap-2">
                  <Checkbox
                    id="is_recommended"
                    checked={form.is_recommended}
                    onCheckedChange={(v) =>
                      handleChange("is_recommended", Boolean(v))
                    }
                  />
                  <Label htmlFor="is_recommended" className="cursor-pointer">
                    {t("properties.isRecommended")}
                  </Label>
                </div>

                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="verification_status">
                    {t("properties.verificationStatus")}
                  </Label>
                  <Select
                    value={form.verification_status ?? ""}
                    onValueChange={(value) =>
                      handleChange("verification_status", value || null)
                    }
                  >
                    <SelectTrigger id="verification_status">
                      <SelectValue
                        placeholder={t("properties.selectVerificationStatus")}
                      />
                    </SelectTrigger>
                    <SelectContent>
                      {(
                        [
                          "waiting",
                          "accepted",
                          "cancelled",
                        ] as const
                      ).map((status) => (
                        <SelectItem key={status} value={status}>
                          {t(`properties.verificationStatuses.${status}`, status)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <Separator className="md:col-span-2" />

                <div className="space-y-1 text-sm text-muted-foreground md:col-span-2">
                  <p>
                    <span className="font-medium">GUID:</span> {apartment.guid}
                  </p>
                  <p>
                    <span className="font-medium">
                      {t("properties.createdAt")}:
                    </span>{" "}
                    {formatDateTime(apartment.created_at)}
                  </p>
                  <p>
                    <span className="font-medium">
                      {t("properties.averageRating")}:
                    </span>{" "}
                    {apartment.average_rating ?? "-"}
                  </p>
                  <p>
                    <span className="font-medium">
                      {t("properties.propertyType")}:
                    </span>{" "}
                    {apartment.property_type?.uz ??
                      apartment.property_type?.ru ??
                      apartment.property_type?.en ??
                      "-"}
                  </p>
                </div>

                <Separator className="md:col-span-2" />

                {!isCreateMode && (
                  <div className="md:col-span-2">
                    <Button
                      type="button"
                      variant="destructive"
                      onClick={() => setDeleteDialogOpen(true)}
                      disabled={deleteApartmentMutation.isPending}
                    >
                      <Trash2 className="mr-2 h-4 w-4" />
                      {deleteApartmentMutation.isPending
                        ? t("properties.deleting")
                        : t("properties.deleteApartment")}
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
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

        {!isCreateMode && (
          <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
            <DialogContent className="max-w-sm">
              <DialogHeader>
                <DialogTitle>{t("properties.deleteDialog.title")}</DialogTitle>
                <DialogDescription>
                  {t("properties.deleteDialog.description", {
                    title: apartment.title ?? "",
                  })}
                </DialogDescription>
              </DialogHeader>
              <DialogFooter className="flex flex-col gap-2 sm:flex-row">
                <Button
                  variant="outline"
                  onClick={() => setDeleteDialogOpen(false)}
                  disabled={deleteApartmentMutation.isPending}
                >
                  {t("common.cancel")}
                </Button>
                <Button
                  variant="destructive"
                  onClick={() => deleteApartmentMutation.mutate()}
                  disabled={deleteApartmentMutation.isPending}
                >
                  <Trash2 className="mr-2 h-4 w-4" />
                  {deleteApartmentMutation.isPending
                    ? t("properties.deleting")
                    : t("properties.confirmDelete")}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        )}
      </form>
    </div>
  );
}
