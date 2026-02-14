import { useQuery } from "@tanstack/react-query";
import axios from "axios";

/* ================= AXIOS CLIENT ================= */

const apiClient = axios.create({
  baseURL: "https://api.gpgs24.in/api",
});

/* =========================================================
   GENERIC SERVICE FETCHER
========================================================= */

const fetchServiceGroup = async (endpoint) => {
  const res = await apiClient.get(endpoint);

  if (!res.data?.data) return [];

  const grouped = {};

  res.data.data.forEach((item) => {
    const mainTitle = item["Main Title"];

    if (!grouped[mainTitle]) {
      grouped[mainTitle] = {
        mainTitle,
        services: [],
      };
    }

    grouped[mainTitle].services.push({
      title: item["Title"] || item["Service Type"],
      time: item["Time"],
      price: item["Price"],
      size: item["Size"],
      pdfUrl: item["Pdf Url"],
      page: item["Page Number"],
    });
  });

  return Object.values(grouped);
};

/* =========================================================
   HOOKS FOR EACH SERVICE
========================================================= */

export const useResidentialMoversPackers = () =>
  useQuery({
    queryKey: ["residential-movers-packers"],
    queryFn: () => fetchServiceGroup("/movers-packers-residential-data"),
  });

export const useCommercialMoversPackers = () =>
  useQuery({
    queryKey: ["commercial-movers-packers"],
    queryFn: () => fetchServiceGroup("/movers-packers-commercial-data"),
  });

export const useDeepCleaningResidential = () =>
  useQuery({
    queryKey: ["deep-cleaning-residential"],
    queryFn: () => fetchServiceGroup("/deep-cleaning-data"),
  });

export const useDeepCleaningCommercial = () =>
  useQuery({
    queryKey: ["deep-cleaning-commercial"],
    queryFn: () => fetchServiceGroup("/deep-cleaning-commercial-data"),
  });

export const useElectricalServices = () =>
  useQuery({
    queryKey: ["electrical-services"],
    queryFn: () => fetchServiceGroup("/electrical-services-data"),
  });

export const usePlumbingServices = () =>
  useQuery({
    queryKey: ["plumbing-services"],
    queryFn: () => fetchServiceGroup("/plumbing-services-data"),
  });

export const usePaintingServices = () =>
  useQuery({
    queryKey: ["painting-services"],
    queryFn: () => fetchServiceGroup("/painting-services-data"),
  });

export const useWaterproofingServices = () =>
  useQuery({
    queryKey: ["waterproofing-services"],
    queryFn: () => fetchServiceGroup("/waterproofing-services-data"),
  });

export const useWaterTankServices = () =>
  useQuery({
    queryKey: ["water-tank-services"],
    queryFn: () => fetchServiceGroup("/water-tank-services-data"),
  });

export const useCarMaintenanceServices = () =>
  useQuery({
    queryKey: ["car-maintenance-services"],
    queryFn: () => fetchServiceGroup("/car-maintenance-services-data"),
  });

export const useCivilWorkServices = () =>
  useQuery({
    queryKey: ["civil-work-services"],
    queryFn: () => fetchServiceGroup("/civil-work-services-data"),
  });

export const useCarpentryServices = () =>
  useQuery({
    queryKey: ["carpentry-services"],
    queryFn: () => fetchServiceGroup("/carpentry-services-data"),
  });

export const useSocietyManagementServices = () =>
  useQuery({
    queryKey: ["society-management-services"],
    queryFn: () => fetchServiceGroup("/society-management-services-data"),
  });

export const useBuildingMaintenanceServices = () =>
  useQuery({
    queryKey: ["building-maintenance-services"],
    queryFn: () => fetchServiceGroup("/building-maintenance-services-data"),
  });

export const useTileGraniteServices = () =>
  useQuery({
    queryKey: ["tile-granite-services"],
    queryFn: () => fetchServiceGroup("/tile-granite-services-data"),
  });
export const useResidentialPropertyRenovation = () =>
  useQuery({
    queryKey: ["residential-property-renovation"],
    queryFn: () => fetchServiceGroup("/property-renovation-residential-data"),
  });

export const useCommercialPropertyRenovation = () =>
  useQuery({
    queryKey: ["commercial-property-renovation"],
    queryFn: () => fetchServiceGroup("/property-renovation-commercial-data"),
  });
