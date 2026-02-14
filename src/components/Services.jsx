// import ServiceCardSkeleton from "./skelton/ServiceCardSkeleton";

// import AOS from "aos";
// import "aos/dist/aos.css";
// import { useEffect } from "react";
// import { useState } from "react";
// import { Info } from "lucide-react";
// import {
//   useResidentialMoversPackers,
//   useCommercialMoversPackers,
//   useDeepCleaningResidential,
//   useDeepCleaningCommercial,
//   useElectricalServices,
//   usePlumbingServices,
//   usePaintingServices,
//   useWaterproofingServices,
//   useWaterTankServices,
//   useCarMaintenanceServices,
//   useCivilWorkServices,
//   useCarpentryServices,
//   useSocietyManagementServices,
//   useBuildingMaintenanceServices,
//   useTileGraniteServices,
//   useResidentialPropertyRenovation,
//   useCommercialPropertyRenovation,
// } from "./services/index";

// // Services.jsDeepCleaningx

// // switch socket items

// // reusable counterRow Component

// const scrollToSection = (id) => {
//   const element = document.getElementById(id);
//   if (element) {
//     element.scrollIntoView({
//       behavior: "smooth",
//       block: "start",
//     });
//   }
// };

// const getDrivePreviewUrl = (url, pageNumber) => {
//   if (!url) return null;

//   const match = url.match(/\/d\/([^/]+)/);
//   if (!match) return url;

//   const baseUrl = `https://drive.google.com/file/d/${match[1]}/preview`;

//   const page = Number(pageNumber);

//   return page > 0 ? `${baseUrl}#page=${page}` : baseUrl;
// };

// // for electrical subservices card-
// const ServiceCard = ({ service, sectionBg, onViewDetails }) => {
//   return (
//     <div
//       onClick={() => service?.pdfUrl && onViewDetails(service)}
//       className={`group relative rounded-2xl border border-gray-100
//         px-4 lg:px-5 pt-4 lg:py-4
//         shadow-sm transition-all duration-300
//         hover:-translate-y-1 hover:shadow-md
//         ${sectionBg == "white" ? "bg-[#fbfbfb]" : "bg-white"}
//       `}
//     >
//       {/* Title */}
//       <h4
//         className="mb-1 text-base lg:text-[17px] font-semibold text-gray-900 line-clamp-1"
//         title={service.title}
//       >
//         {service.title}
//       </h4>

//       {/* Details */}
//       <div className="flex justify-between">
//         <button
//           // onClick={() => onViewDetails(pdfUrl)}
//           className="mb-1 flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 transition"
//         >
//           <Info size={18} />
//           View details
//         </button>
//         {/* <p className="flex items-center gap-1 text-[11px] text-black">
//           <i className="fa-solid fa-star text-[8px]" />
//           Conditions apply
//         </p> */}
//       </div>

//       {/* Price */}
//       <div className=" flex justify-between items-center">
//         <p className="text-sm md:text-base  text-gray-500">{service.price}</p>

//         {/* <p className="flex items-center gap-1 text-[11px] text-black">
//           <i className="fa-solid fa-star text-[8px]" />
//         </p> */}
//       </div>
//       <div className="flex justify-end">
//         <p className="flex items-center  text-[11px] text-gray-500">
//           {/* <i className="fa-solid fa-star text-[8px]" /> */}* Conditions
//           apply
//         </p>
//       </div>
//     </div>
//   );
// };

// // subservices reusable component for rendaring sub services

// const ServiceSection = ({ id, data, sectionBg, onViewDetails }) => {
//   const isElectrical = data.mainTitle === "Electrical Services";
//   const [search, setSearch] = useState("");
//   const [showAll, setShowAll] = useState(false);

//   // filter sub-services
//   const trimmedSearch = search.trim().replace(/\s+/g, " ").toLowerCase();

//   const filteredServices =
//     trimmedSearch === ""
//       ? data.services
//       : data.services.filter((service) =>
//           service.title.toLowerCase().includes(trimmedSearch),
//         );

//   // show only first 10 unless "View More" clicked
//   const visibleServices = showAll
//     ? filteredServices
//     : filteredServices.slice(0, 10);

//   return (
//     <div
//       id={id}
//       className="space-y-6   lg:scroll-mt-28 scroll-mt-16 px-4  sm:px-6 lg:px-12"
//     >
//       {/* Header */}
//       <div className="flex flex-col  sm:flex-row sm:items-center justify-between">
//         <h1 className="lg:text-2xl text-lg py-4 font-bold lg:text-[28px]">
//           {data.mainTitle?.split(" - ")[0]}
//           {data.mainTitle?.includes(" - ") && (
//             <span className="text-gray-500 lg:text-[22px] text-[16px]  font-normal italic">
//               {" - "}
//               {data.mainTitle.split(" - ")[1]}
//             </span>
//           )}
//         </h1>

//         {/* Search */}
//         <div className="flex items-center gap-2">
//           <div className="relative w-full sm:w-[280px]">
//             <input
//               type="text"
//               placeholder="Search services..."
//               value={search}
//               onChange={(e) => {
//                 setSearch(e.target.value);
//                 setShowAll(false); // reset view when searching
//               }}
//               className="w-full rounded-xl border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-black"
//             />
//             <i className="fas fa-search absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
//           </div>

//           <button
//             onClick={() => scrollToSection("services")}
//             className="flex items-center gap-2 rounded-xl border border-gray-300 px-4 py-2 text-sm font-medium  transition bg-black text-white whitespace-nowrap"
//           >
//             ← Back to Services
//           </button>
//         </div>
//       </div>
//       {/* Services Grid */}
//       {visibleServices.length > 0 ? (
//         <>
//           <div className="grid gap-6 grid-cols-2 lg:grid-cols-5 overflow-visible">
//             {visibleServices.map((service) => (
//               <ServiceCard
//                 key={service.title}
//                 service={service}
//                 sectionBg={sectionBg}
//                 onViewDetails={onViewDetails}
//               />
//             ))}
//           </div>

//           {/* View More / View Less Button */}
//           {filteredServices.length > 10 && (
//             <div className="flex justify-center mt-6">
//               <button
//                 onClick={() => setShowAll(!showAll)}
//                 className="rounded-xl border border-black px-6 py-2 text-sm font-medium text-black transition hover:bg-black hover:text-white"
//               >
//                 {showAll ? "View Less" : "View More"}
//               </button>
//             </div>
//           )}
//         </>
//       ) : (
//         <p className="text-gray-500 text-sm">No services found.</p>
//       )}
//     </div>
//   );
// };

// const Services = () => {
//   const handleViewDetails = (service) => {
//     console.log("Clicked service:", service);
//     const previewUrl = getDrivePreviewUrl(service.pdfUrl, service.page);

//     setSelectedService(service);
//     setActivePdf(previewUrl);
//     setOpen(true);
//   };

//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       once: false,
//     });
//     AOS.refresh();
//   }, []);

//   const [selectedService, setSelectedService] = useState(null);
//   const [mainSearch, setMainSearch] = useState("");
//   const [showAll, setShowAll] = useState(false);
//   const [services, setServices] = useState([]);
//   const [loaded, setLoaded] = useState(false);
//   const [activePdf, setActivePdf] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [open, setOpen] = useState(false);

//   const { data: residentialMoversPackers = [], isLoading: loading1 } =
//     useResidentialMoversPackers();
//   const { data: residentialPropertyRenovation = [] } =
//     useResidentialPropertyRenovation();

//   const { data: commercialPropertyRenovation = [] } =
//     useCommercialPropertyRenovation();

//   const { data: commercialMoversPackers = [] } = useCommercialMoversPackers();

//   const { data: residentialDeepCleaning = [] } = useDeepCleaningResidential();

//   const { data: commercialDeepCleaning = [] } = useDeepCleaningCommercial();

//   const { data: electricalServices = [] } = useElectricalServices();

//   const { data: plumbingServices = [] } = usePlumbingServices();

//   const { data: paintingServices = [] } = usePaintingServices();

//   const { data: waterproofingServices = [] } = useWaterproofingServices();

//   const { data: waterTankServices = [] } = useWaterTankServices();

//   const { data: carMaintenanceServices = [] } = useCarMaintenanceServices();

//   const { data: civilWorkServices = [] } = useCivilWorkServices();

//   const { data: carpentryServices = [] } = useCarpentryServices();

//   const { data: societyManagementServices = [] } =
//     useSocietyManagementServices();

//   const { data: buildingMaintenanceServices = [] } =
//     useBuildingMaintenanceServices();

//   const { data: tileGraniteServices = [] } = useTileGraniteServices();

//   return (
//     <section id="services" className="  scroll-mt-16 ">
//       {open && (
//         <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60">
//           <div className="relative w-[90%] max-w-4xl rounded-xl bg-white overflow-hidden">
//             {/* Header */}
//             <div className="flex items-center justify-between border-b px-4 py-3">
//               <h3 className="text-sm font-semibold">
//                 {selectedService?.title || "Service Details"}
//               </h3>

//               <button
//                 onClick={() => {
//                   setOpen(false);
//                   setActivePdf(null);
//                   setSelectedService(null);
//                 }}
//                 className="text-gray-500 hover:text-black"
//               >
//                 ✕
//               </button>
//             </div>

//             {/* PDF */}
//             <div className="h-[75vh]">
//               {activePdf ? (
//                 <iframe
//                   src={activePdf}
//                   className="h-full w-full"
//                   title="Service PDF"
//                   allow="autoplay"
//                 />
//               ) : (
//                 <p className="p-4 text-center text-gray-500">
//                   No document available
//                 </p>
//               )}
//             </div>
//           </div>
//         </div>
//       )}

//       {/* main services */}
//       <div className="bg-[#fbfbfb] lg:pb-18 pt-4 md:pt-6 pb-4 md:pb-6 lg:pt-12 px-2">
//         <div className=" sm:px-6 lg:px-12">
//           <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-5  mb-8">
//             {/* Center Heading */}
//             <div className="lg:flex flex-col hidden  justify-center "></div>
//             <div className="flex flex-col  justify-center items-center">
//               <h2 className="text-black text-[22px] sm:text-[26px] lg:text-[38px] font-bold">
//                 Our Services
//               </h2>
//             </div>

//             {/* Right Search */}
//             <div className="ml-auto w-full max-w-md lg:pl-8  lg:ml-0">
//               <div className="relative">
//                 <div className=" lg:pl-12">
//                   <input
//                     type="text"
//                     placeholder="Search services..."
//                     value={mainSearch}
//                     onChange={(e) => setMainSearch(e.target.value)}
//                     className="w-full rounded-xl border border-gray-300 px-6 py-2 text-lg focus:outline-none focus:ring-1 focus:ring-black"
//                   />
//                   <i className="fas fa-search absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Main Services Cards */}
//           <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:px-2">
//             {loading
//               ? Array.from({ length: 8 }).map((_, i) => (
//                   <ServiceCardSkeleton key={i} />
//                 ))
//               : services
//                   .filter((service) =>
//                     service.title
//                       .toLowerCase()
//                       .includes(mainSearch.toLowerCase()),
//                   )
//                   .map((service) => (
//                     <div
//                       id={`#${service.sectionId}`}
//                       key={service.title}
//                       onClick={() => scrollToSection(service.sectionId)}
//                       className="cursor-pointer rounded-md flex flex-col gap-4 transition hover:-translate-y-1 group max-w-[400px] shadow-lg"
//                     >
//                       {/* <div className="">
//                         <img
//                           src={service.img}
//                           alt={service.title}
//                           className=" w-full object-cover rounded-t-xl"
//                         />
//                       </div> */}

//                       {/* Image wrapper */}
//                       <div className="relative w-full h-[340px] overflow-hidden rounded-t-xl">
//                         {/* Skeleton */}
//                         {!loaded && (
//                           <div className="absolute inset-0 animate-pulse bg-gray-200" />
//                         )}

//                         <img
//                           src={service.img}
//                           alt={service.title}
//                           onLoad={() => setLoaded(true)}
//                           className={`w-full h-full lg:object-cover transition-opacity duration-500 ${
//                             loaded ? "opacity-100" : "opacity-0"
//                           }`}
//                         />
//                       </div>

//                       <div className="px-4 pb-4 ">
//                         <h3 className="font-semibold text-[18px] text-[#111D15]">
//                           {service.title}
//                         </h3>
//                         {/* <p className="text-[14px] text-[#666666]">
//                           {service.desc}
//                         </p> */}
//                       </div>
//                     </div>
//                   ))}
//           </div>
//         </div>
//       </div>

//       {/*  servics */}
//       <div className="  ">
//         {/* //! movers & packers subservices */}
//         {/* //! movers & packers – residential */}
//         <div className="lg:py-6 py-4 md:py-6 bg-white">
//           {residentialMoversPackers.map((section, index) => (
//             <ServiceSection
//               key={index}
//               id={`movers-packers`}
//               data={section}
//               sectionBg="white"
//               onViewDetails={handleViewDetails}
//             />
//           ))}
//         </div>

//         {/* //! movers & packers – commercial */}
//         <div className="lg:py-6 py-4 md:py-6 bg-[#fbfbfb]">
//           {commercialMoversPackers.map((section, index) => (
//             <ServiceSection
//               key={index}
//               id={`movers-packers`}
//               data={section}
//               sectionBg="gray"
//               onViewDetails={handleViewDetails}
//             />
//           ))}
//         </div>

//         {/* //!deep cleaning subservices */}
//         <div className="lg:py-6 py-4 md:py-6 bg-white">
//           {residentialDeepCleaning.map((section, index) => (
//             <ServiceSection
//               key={index}
//               id={`deep-cleaning`}
//               data={section}
//               sectionBg="white"
//               onViewDetails={handleViewDetails}
//             />
//           ))}
//         </div>
//         <div className="bg-[#fbfbfb] py-4 lg:py-6 md:py-6">
//           {commercialDeepCleaning.map((section, index) => (
//             <ServiceSection
//               key={index}
//               id={`deep-cleaning`}
//               data={section}
//               onViewDetails={handleViewDetails}
//             />
//           ))}
//         </div>
//         {/* //!electrical repair services  */}
//         {/* <div className=" lg:py-6 md:py-6  py-4 bg-white">
//           <ServiceSection
//             id="electrical-repairs"
//             sectionBg="white"
//             data={electricalRepairs}
//           />
//         </div> */}
//         {/* //! electrical repair services */}
//         <div className="lg:py-6 py-4 md:py-6 bg-white">
//           {electricalServices.map((section, index) => (
//             <ServiceSection
//               key={index}
//               id={`electrical-services-${index}`}
//               data={section}
//               sectionBg="white"
//               onViewDetails={handleViewDetails}
//             />
//           ))}
//         </div>

//         {/* //! plumbing services */}
//         {/* //! plumbing services */}
//         <div className="lg:py-6 py-4 md:py-6 bg-[#fbfbfb]">
//           {plumbingServices.map((section, index) => (
//             <ServiceSection
//               key={index}
//               id={`plumbing`}
//               data={section}
//               onViewDetails={handleViewDetails}
//             />
//           ))}
//         </div>

//         {/*//! water tank services */}
//         {/* <div className=" lg:py-6 md:py-6  py-4 bg-white">
//           <ServiceSection
//             sectionBg="white"
//             id="water-tank-services"
//             data={waterTankServices}
//           />
//         </div> */}
//         {/* //! water tank services */}
//         <div className="lg:py-6 py-4 md:py-6 bg-white">
//           {waterTankServices.map((section, index) => (
//             <ServiceSection
//               key={index}
//               id={`water-tank-services`}
//               data={section}
//               sectionBg="white"
//               onViewDetails={handleViewDetails}
//             />
//           ))}
//         </div>

//         {/*//! painting services */}
//         {/* <div className="bg-[#fbfbfb] lg:py-6 py-4 md:py-6">
//           <>
//             <ServiceSection id="painting-services" data={paintingServices} />
//           </>
//         </div> */}
//         {/* //! painting services */}
//         <div className="lg:py-6 py-4 md:py-6 bg-[#fbfbfb]">
//           {paintingServices.map((section, index) => (
//             <ServiceSection
//               key={index}
//               id={`painting-services`}
//               data={section}
//               onViewDetails={handleViewDetails}
//             />
//           ))}
//         </div>

//         {/*//! waterproof services */}
//         {/* <div className="bg-white lg:py-6 py-4 md:py-6">
//           <ServiceSection
//             id="water-proof-services"
//             sectionBg="white"
//             data={waterProofServices}
//           />
//         </div> */}
//         {/* //! waterproofing services */}
//         <div className="lg:py-6 py-4 md:py-6 bg-white">
//           {waterproofingServices.map((section, index) => (
//             <ServiceSection
//               key={index}
//               id={`water-proof-services`}
//               data={section}
//               sectionBg="white"
//               onViewDetails={handleViewDetails}
//             />
//           ))}
//         </div>

//         {/* //!property renovation resendential  subservices */}
//         {/* <div className="bg-[#fbfbfb] lg:py-6 md:py-6  py-4">
//           <ServiceSection
//             id="property-renovation-all-services"
//             data={residentialPropertyRenovationServices}
//           />
//         </div> */}

//         <div className="lg:py-6 py-4 md:py-6 bg-[#fbfbfb]">
//           {residentialPropertyRenovation.map((section, index) => (
//             <ServiceSection
//               key={index}
//               id={`property-renovation-all-services`}
//               data={section}
//               onViewDetails={handleViewDetails}
//             />
//           ))}
//         </div>
//         {/* //! property renovation – commercial subservices */}
//         {/* <div className=" lg:py-6 md:py-6 py-4 bg-white">
//           <ServiceSection
//             sectionBg="white"
//             id="property-renovation-all-services"
//             data={commercialPropertyRenovationServices}
//           />
//         </div> */}
//         <div className="lg:py-6 py-4 md:py-6 bg-white">
//           {commercialPropertyRenovation.map((section, index) => (
//             <ServiceSection
//               key={index}
//               id={`property-renovation-all-services`}
//               data={section}
//               sectionBg="white"
//               onViewDetails={handleViewDetails}
//             />
//           ))}
//         </div>
//         {/* //! tile and granite services */}
//         <div className="lg:py-6 md:py-6 py-4 bg-[#fbfbfb]">
//           {tileGraniteServices.map((section, index) => (
//             <ServiceSection
//               key={index}
//               id={`tile-and-granite-all-services`}
//               data={section}
//               onViewDetails={handleViewDetails}
//             />
//           ))}
//         </div>

//         {/* <div className=" lg:py-6 md:py-6 py-4 bg-[#fbfbfb]">
//           <ServiceSection
//             id="tile-and-granite-all-services"
//             data={tileAndGraniteServices}
//           />
//         </div> */}
//         {/*//! civil work services */}
//         {/* <div className="bg-white py-4 lg:py-16 md:py-6 ">
//           <ServiceSection
//             id="civil-work"
//             sectionBg="white"
//             data={civilWorkServices}
//           />
//         </div> */}
//         {/* //! civil work services */}
//         <div className="lg:py-6 py-4 md:py-6 bg-white">
//           {civilWorkServices.map((section, index) => (
//             <ServiceSection
//               key={index}
//               id={`civil-work`}
//               data={section}
//               sectionBg="white"
//               onViewDetails={handleViewDetails}
//             />
//           ))}
//         </div>

//         {/* //!carpentary services */}
//         {/* <div className="bg-[#fbfbfb] lg:py-6 py-4 md:py-6">
//           <ServiceSection id="carpentry" data={carpentryServices} />
//         </div> */}
//         {/* //! carpentry services */}
//         <div className="lg:py-6 py-4 md:py-6 bg-[#fbfbfb]">
//           {carpentryServices.map((section, index) => (
//             <ServiceSection
//               key={index}
//               id={`carpentry`}
//               data={section}
//               onViewDetails={handleViewDetails}
//             />
//           ))}
//         </div>

//         {/*//! car maintenance */}
//         {/* <div className="bg-white py-4 lg:py-6 md:py-6">
//           <ServiceSection
//             sectionBg="white"
//             id="car-maintenance"
//             data={carMaintenanceServices}
//           />
//         </div> */}
//         {/* //! car maintenance services */}
//         <div className="lg:py-6 py-4 md:py-6 bg-white">
//           {carMaintenanceServices.map((section, index) => (
//             <ServiceSection
//               key={index}
//               id={`car-maintenance`}
//               data={section}
//               sectionBg="white"
//               onViewDetails={handleViewDetails}
//             />
//           ))}
//         </div>

//         {/*//! building maintenance services */}

//         <div className="bg-[#fbfbfb] lg:py-6 md:py-6 py-4">
//           {buildingMaintenanceServices.map((section, index) => (
//             <ServiceSection
//               key={index}
//               id={`building-maintenance`}
//               data={section}
//               onViewDetails={handleViewDetails}
//             />
//           ))}
//         </div>

//         {/* <div className="bg-[#fbfbfb] lg:py-6 md:py-6  py-4">
//           <ServiceSection
//             id="building-maintenance"
//             data={buildingMaintenanceServices}
//           />
//         </div> */}
//         {/* //! society management services */}
//         <div className="bg-white lg:py-6 py-4 md:py-6">
//           {societyManagementServices.map((section, index) => (
//             <ServiceSection
//               key={index}
//               id={`society-management`}
//               data={section}
//               sectionBg="white"
//               onViewDetails={handleViewDetails}
//             />
//           ))}
//         </div>

//         {/* <div className="bg-white lg:py-6 py-4 md:py-6">
//           <ServiceSection
//             sectionBg="white"
//             id="society-management"
//             data={societyManagementServices}
//           />
//         </div> */}
//       </div>
//     </section>
//   );
// };

// export default Services;

import ServiceCardSkeleton from "./skelton/ServiceCardSkeleton";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useState } from "react";
import { Info } from "lucide-react";

// Services.jsDeepCleaningx

// switch socket items

// reusable counterRow Component

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

const getDrivePreviewUrl = (url, pageNumber) => {
  if (!url) return null;

  const match = url.match(/\/d\/([^/]+)/);
  if (!match) return url;

  const baseUrl = `https://drive.google.com/file/d/${match[1]}/preview`;

  const page = Number(pageNumber);

  return page > 0 ? `${baseUrl}#page=${page}` : baseUrl;
};

// for electrical subservices card-
const ServiceCard = ({ service, sectionBg, onViewDetails }) => {
  return (
    <div
      onClick={() => service?.pdfUrl && onViewDetails(service)}
      className={`group relative rounded-2xl border border-gray-100
        px-4 lg:px-5 pt-4 lg:py-4
        shadow-sm transition-all duration-300
        hover:-translate-y-1 hover:shadow-md
        ${sectionBg == "white" ? "bg-[#fbfbfb]" : "bg-white"}
      `}
    >
      {/* Title */}
      <h4
        className="mb-1 text-base lg:text-[17px] font-semibold text-gray-900 line-clamp-1"
        title={service.title}
      >
        {service.title}
      </h4>

      {/* Details */}
      <div className="flex justify-between">
        <button
          // onClick={() => onViewDetails(pdfUrl)}
          className="mb-1 flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 transition"
        >
          <Info size={18} />
          View details
        </button>
        {/* <p className="flex items-center gap-1 text-[11px] text-black">
          <i className="fa-solid fa-star text-[8px]" />
          Conditions apply
        </p> */}
      </div>

      {/* Price */}
      <div className=" flex justify-between items-center">
        <p className="text-sm md:text-base  text-gray-500">{service.price}</p>

        {/* <p className="flex items-center gap-1 text-[11px] text-black">
          <i className="fa-solid fa-star text-[8px]" />
        </p> */}
      </div>
      <div className="flex justify-end">
        <p className="flex items-center  text-[11px] text-gray-500">
          {/* <i className="fa-solid fa-star text-[8px]" /> */}* Conditions
          apply
        </p>
      </div>
    </div>
  );
};

// subservices reusable component for rendaring sub services

const ServiceSection = ({ id, data, sectionBg, onViewDetails }) => {
  const isElectrical = data.mainTitle === "Electrical Services";
  const [search, setSearch] = useState("");
  const [showAll, setShowAll] = useState(false);

  // filter sub-services
  const trimmedSearch = search.trim().replace(/\s+/g, " ").toLowerCase();

  const filteredServices =
    trimmedSearch === ""
      ? data.services
      : data.services.filter((service) =>
          service.title.toLowerCase().includes(trimmedSearch),
        );

  // show only first 10 unless "View More" clicked
  const visibleServices = showAll
    ? filteredServices
    : filteredServices.slice(0, 10);

  return (
    <div
      id={id}
      className="space-y-6   lg:scroll-mt-28 scroll-mt-16 px-4  sm:px-6 lg:px-12"
    >
      {/* Header */}
      <div className="flex flex-col  sm:flex-row sm:items-center justify-between">
        <h1 className="lg:text-2xl text-lg py-4 font-bold lg:text-[28px]">
          {data.mainTitle?.split(" - ")[0]}
          {data.mainTitle?.includes(" - ") && (
            <span className="text-gray-500 lg:text-[22px] text-[16px]  font-normal italic">
              {" - "}
              {data.mainTitle.split(" - ")[1]}
            </span>
          )}
        </h1>

        {/* Search */}
        <div className="flex items-center gap-2">
          <div className="relative w-full sm:w-[280px]">
            <input
              type="text"
              placeholder="Search services..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setShowAll(false); // reset view when searching
              }}
              className="w-full rounded-xl border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-black"
            />
            <i className="fas fa-search absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>

          <button
            onClick={() => scrollToSection("services")}
            className="flex items-center gap-2 rounded-xl border border-gray-300 px-4 py-2 text-sm font-medium  transition bg-black text-white whitespace-nowrap"
          >
            ← Back to Services
          </button>
        </div>
      </div>
      {/* Services Grid */}
      {visibleServices.length > 0 ? (
        <>
          <div className="grid gap-6 grid-cols-2 lg:grid-cols-5 overflow-visible">
            {visibleServices.map((service) => (
              <ServiceCard
                key={service.title}
                service={service}
                sectionBg={sectionBg}
                onViewDetails={onViewDetails}
              />
            ))}
          </div>

          {/* View More / View Less Button */}
          {filteredServices.length > 10 && (
            <div className="flex justify-center mt-6">
              <button
                onClick={() => setShowAll(!showAll)}
                className="rounded-xl border border-black px-6 py-2 text-sm font-medium text-black transition hover:bg-black hover:text-white"
              >
                {showAll ? "View Less" : "View More"}
              </button>
            </div>
          )}
        </>
      ) : (
        <p className="text-gray-500 text-sm">No services found.</p>
      )}
    </div>
  );
};

const Services = () => {
  const handleViewDetails = (service) => {
    console.log("Clicked service:", service);
    const previewUrl = getDrivePreviewUrl(service.pdfUrl, service.page);

    setSelectedService(service);
    setActivePdf(previewUrl);
    setOpen(true);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
    AOS.refresh();
  }, []);
  const [selectedService, setSelectedService] = useState(null);
  const [mainSearch, setMainSearch] = useState("");
  const [showAll, setShowAll] = useState(false);
  const [services, setServices] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [activePdf, setActivePdf] = useState(null);

  const [residentialDeepCleaning, setresidentialDeepCleaning] = useState([]);
  const [residentialMoversPackers, setResidentialMoversPackers] = useState([]);

  const [commercialDeepCleaning, setCommercialDeepCleaning] = useState([]);
  const [commercialMoversPackers, setCommercialMoversPackers] = useState([]);

  const [residentialPropertyRenovation, setResidentialPropertyRenovation] =
    useState([]);
  const [commercialPropertyRenovation, setCommercialPropertyRenovation] =
    useState([]);

  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);

  const [electricalServices, setElectricalServices] = useState([]);
  const [plumbingServices, setPlumbingServices] = useState([]);
  const [paintingServices, setPaintingServices] = useState([]);
  const [waterproofingServices, setWaterproofingServices] = useState([]);
  const [waterTankServices, setWaterTankServices] = useState([]);
  const [carMaintenanceServices, setCarMaintenanceServices] = useState([]);
  const [civilWorkServices, setCivilWorkServices] = useState([]);
  const [carpentryServices, setCarpentryServices] = useState([]);
  const [societyManagementServices, setSocietyManagementServices] = useState(
    [],
  );
  const [buildingMaintenanceServices, setBuildingMaintenanceServices] =
    useState([]);
  const [tileGraniteServices, setTileGraniteServices] = useState([]);

  //https://api.gpgs24.in/api/services-data
  //! MAIN SERVICES
  function fetchAndSetServices() {
    fetch("https://api.gpgs24.in/api/services-data")
      .then((res) => res.json())
      .then((response) => {
        if (!response?.data) return;

        const formattedServices = response.data.map((item) => ({
          title: item["Title"],
          desc: item["Description"],
          img: item["Image"],
          sectionId: item["Section ID"],
        }));

        setServices(formattedServices);

        // ⏱️ Skeleton delay (controlled)
        setTimeout(() => {
          setLoading(false);
        }, 0);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false); // fail-safe
      });
  }
  //! RESENTIAL DEEP CLEANING
  function fetchDeepCleaningServices() {
    fetch("https://api.gpgs24.in/api/deep-cleaning-data")
      .then((res) => res.json())
      .then((response) => {
        if (!response?.data) return;

        const grouped = {};
        console.log(response.data, "raw data deepresendtial");
        response.data.forEach((item) => {
          const mainTitle = item["Main Title"];

          if (!grouped[mainTitle]) {
            grouped[mainTitle] = {
              mainTitle,
              services: [],
            };
          }

          grouped[mainTitle].services.push({
            title: item["Service Type"],
            time: item["Time"],
            price: item["Price"],
            pdfUrl: item["Pdf Url"],
          });
        });

        // convert object → array
        setresidentialDeepCleaning(Object.values(grouped));

        setTimeout(() => {
          setLoading(false);
        }, 1000);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }
  //! COMMERTIAL DEEP CLEANING
  function fetchCommercialDeepCleaning() {
    fetch("https://api.gpgs24.in/api/deep-cleaning-commercial-data")
      .then((res) => res.json())
      .then((response) => {
        if (!response?.data) return;

        const grouped = {};

        response.data.forEach((item) => {
          const mainTitle = item["Main Title"]; // OK

          if (!grouped[mainTitle]) {
            grouped[mainTitle] = {
              mainTitle,
              services: [],
            };
          }

          grouped[mainTitle].services.push({
            title: item["Title"],
            time: item["Time"],
            price: item["Price"],
            size: item["Size"],
            pdfUrl: item["Pdf Url"],
          });
        });

        setCommercialDeepCleaning(Object.values(grouped));
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }
  //! MOVERS & PACKERS - RESIDENTIAL
  function fetchResidentialMoversPackers() {
    fetch("https://api.gpgs24.in/api/movers-packers-residential-data")
      .then((res) => res.json())
      .then((response) => {
        if (!response?.data) return;

        const grouped = {};

        response.data.forEach((item) => {
          const mainTitle = item["Main Title"];

          if (!grouped[mainTitle]) {
            grouped[mainTitle] = {
              mainTitle,
              services: [],
            };
          }

          grouped[mainTitle].services.push({
            title: item["Title"],
            time: item["Time"],
            price: item["Price"],
            size: item["Size"],
            pdfUrl: item["Pdf Url"],
            page: item["Page Number"],
          });
        });

        setResidentialMoversPackers(Object.values(grouped));
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }
  //! MOVERS & PACKERS - COMMERCIAL
  function fetchCommercialMoversPackers() {
    fetch("https://api.gpgs24.in/api/movers-packers-commercial-data")
      .then((res) => res.json())
      .then((response) => {
        if (!response?.data) return;

        const grouped = {};

        response.data.forEach((item) => {
          const mainTitle = item["Main Title"];

          if (!grouped[mainTitle]) {
            grouped[mainTitle] = {
              mainTitle,
              services: [],
            };
          }

          grouped[mainTitle].services.push({
            title: item["Title"],
            time: item["Time"],
            price: item["Price"],
            size: item["Size"],
            pdfUrl: item["Pdf Url"],
          });
        });

        setCommercialMoversPackers(Object.values(grouped));
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }
  //! PROPERTY RENOVATION - RESIDENTIAL
  function fetchResidentialPropertyRenovation() {
    fetch("https://api.gpgs24.in/api/property-renovation-residential-data")
      .then((res) => res.json())
      .then((response) => {
        if (!response?.data) return;

        const grouped = {};

        response.data.forEach((item) => {
          const mainTitle = item["Main Title"];

          if (!grouped[mainTitle]) {
            grouped[mainTitle] = {
              mainTitle,
              services: [],
            };
          }

          grouped[mainTitle].services.push({
            title: item["Title"],
            time: item["Time"],
            price: item["Price"],
            size: item["Size"],
            pdfUrl: item["Pdf Url"],
          });
        });

        setResidentialPropertyRenovation(Object.values(grouped));
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }

  //! PROPERTY RENOVATION - COMMERCIAL
  function fetchCommercialPropertyRenovation() {
    fetch("https://api.gpgs24.in/api/property-renovation-commercial-data")
      .then((res) => res.json())
      .then((response) => {
        if (!response?.data) return;

        const grouped = {};

        response.data.forEach((item) => {
          const mainTitle = item["Main Title"];

          if (!grouped[mainTitle]) {
            grouped[mainTitle] = {
              mainTitle,
              services: [],
            };
          }

          grouped[mainTitle].services.push({
            title: item["Title"],
            time: item["Time"],
            price: item["Price"],
            size: item["Size"],
            pdfUrl: item["Pdf Url"],
          });
        });

        setCommercialPropertyRenovation(Object.values(grouped));
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }

  //! ELECTRICAL SERVICES
  function fetchElectricalServices() {
    fetch("https://api.gpgs24.in/api/electrical-services-data")
      .then((res) => res.json())
      .then((response) => {
        if (!response?.data) return;

        const grouped = {};

        response.data.forEach((item) => {
          const mainTitle = item["Main Title"];

          if (!grouped[mainTitle]) {
            grouped[mainTitle] = {
              mainTitle,
              services: [],
            };
          }

          grouped[mainTitle].services.push({
            title: item["Title"],
            time: item["Time"],
            price: item["Price"],
            size: item["Size"],
            pdfUrl: item["Pdf Url"],
          });
        });

        setElectricalServices(Object.values(grouped));
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }

  //! PLUMBING SERVICES
  function fetchPlumbingServices() {
    fetch("https://api.gpgs24.in/api/plumbing-services-data")
      .then((res) => res.json())
      .then((response) => {
        if (!response?.data) return;

        const grouped = {};

        response.data.forEach((item) => {
          const mainTitle = item["Main Title"];

          if (!grouped[mainTitle]) {
            grouped[mainTitle] = {
              mainTitle,
              services: [],
            };
          }

          grouped[mainTitle].services.push({
            title: item["Title"],
            time: item["Time"],
            price: item["Price"],
            size: item["Size"],
            pdfUrl: item["Pdf Url"],
          });
        });

        setPlumbingServices(Object.values(grouped));
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }
  //! PAINTING SERVICES
  function fetchPaintingServices() {
    fetch("https://api.gpgs24.in/api/painting-services-data")
      .then((res) => res.json())
      .then((response) => {
        if (!response?.data) return;

        const grouped = {};

        response.data.forEach((item) => {
          const mainTitle = item["Main Title"];

          if (!grouped[mainTitle]) {
            grouped[mainTitle] = { mainTitle, services: [] };
          }

          grouped[mainTitle].services.push({
            title: item["Title"],
            time: item["Time"],
            price: item["Price"],
            size: item["Size"],
            pdfUrl: item["Pdf Url"],
          });
        });

        setPaintingServices(Object.values(grouped));
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }
  //! WATERPROOFING SERVICES
  function fetchWaterproofingServices() {
    fetch("https://api.gpgs24.in/api/waterproofing-services-data")
      .then((res) => res.json())
      .then((response) => {
        if (!response?.data) return;

        const grouped = {};

        response.data.forEach((item) => {
          const mainTitle = item["Main Title"];

          if (!grouped[mainTitle]) {
            grouped[mainTitle] = { mainTitle, services: [] };
          }

          grouped[mainTitle].services.push({
            title: item["Title"],
            time: item["Time"],
            price: item["Price"],
            size: item["Size"],
            pdfUrl: item["Pdf Url"],
          });
        });

        setWaterproofingServices(Object.values(grouped));
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }
  //! WATER TANK SERVICES
  function fetchWaterTankServices() {
    fetch("https://api.gpgs24.in/api/water-tank-services-data")
      .then((res) => res.json())
      .then((response) => {
        if (!response?.data) return;

        const grouped = {};

        response.data.forEach((item) => {
          const mainTitle = item["Main Title"];

          if (!grouped[mainTitle]) {
            grouped[mainTitle] = { mainTitle, services: [] };
          }

          grouped[mainTitle].services.push({
            title: item["Title"],
            time: item["Time"],
            price: item["Price"],
            size: item["Size"],
            pdfUrl: item["Pdf Url"],
          });
        });

        setWaterTankServices(Object.values(grouped));
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }
  //! CAR MAINTENANCE SERVICES
  function fetchCarMaintenanceServices() {
    fetch("https://api.gpgs24.in/api/car-maintenance-services-data")
      .then((res) => res.json())
      .then((response) => {
        if (!response?.data) return;

        const grouped = {};

        response.data.forEach((item) => {
          const mainTitle = item["Main Title"];

          if (!grouped[mainTitle]) {
            grouped[mainTitle] = { mainTitle, services: [] };
          }

          grouped[mainTitle].services.push({
            title: item["Title"],
            time: item["Time"],
            price: item["Price"],
            size: item["Size"],
            pdfUrl: item["Pdf Url"],
          });
        });

        setCarMaintenanceServices(Object.values(grouped));
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }
  //! CIVIL WORK SERVICES
  function fetchCivilWorkServices() {
    fetch("https://api.gpgs24.in/api/civil-work-services-data")
      .then((res) => res.json())
      .then((response) => {
        if (!response?.data) return;

        const grouped = {};

        response.data.forEach((item) => {
          const mainTitle = item["Main Title"];

          if (!grouped[mainTitle]) {
            grouped[mainTitle] = { mainTitle, services: [] };
          }

          grouped[mainTitle].services.push({
            title: item["Title"],
            time: item["Time"],
            price: item["Price"],
            size: item["Size"],
            pdfUrl: item["Pdf Url"],
          });
        });

        setCivilWorkServices(Object.values(grouped));
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }
  //! CARPENTRY SERVICES
  function fetchCarpentryServices() {
    fetch("https://api.gpgs24.in/api/carpentry-services-data")
      .then((res) => res.json())
      .then((response) => {
        if (!response?.data) return;

        const grouped = {};

        response.data.forEach((item) => {
          const mainTitle = item["Main Title"];

          if (!grouped[mainTitle]) {
            grouped[mainTitle] = { mainTitle, services: [] };
          }

          grouped[mainTitle].services.push({
            title: item["Title"],
            time: item["Time"],
            price: item["Price"],
            size: item["Size"],
            pdfUrl: item["Pdf Url"],
          });
        });

        setCarpentryServices(Object.values(grouped));
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }
  //! SOCIETY MANAGEMENT SERVICES
  function fetchSocietyManagementServices() {
    fetch("https://api.gpgs24.in/api/society-management-services-data")
      .then((res) => res.json())
      .then((response) => {
        if (!response?.data) return;

        const grouped = {};

        response.data.forEach((item) => {
          const mainTitle = item["Main Title"];

          if (!grouped[mainTitle]) {
            grouped[mainTitle] = { mainTitle, services: [] };
          }

          grouped[mainTitle].services.push({
            title: item["Title"],
            time: item["Time"],
            price: item["Price"],
            size: item["Size"],
            pdfUrl: item["Pdf Url"],
          });
        });

        setSocietyManagementServices(Object.values(grouped));
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }
  //! BUILDING MAINTENANCE SERVICES
  function fetchBuildingMaintenanceServices() {
    fetch("https://api.gpgs24.in/api/building-maintenance-services-data")
      .then((res) => res.json())
      .then((response) => {
        if (!response?.data) return;

        const grouped = {};

        response.data.forEach((item) => {
          const mainTitle = item["Main Title"];

          if (!grouped[mainTitle]) {
            grouped[mainTitle] = { mainTitle, services: [] };
          }

          grouped[mainTitle].services.push({
            title: item["Title"],
            time: item["Time"],
            price: item["Price"],
            size: item["Size"],
            pdfUrl: item["Pdf Url"],
          });
        });

        setBuildingMaintenanceServices(Object.values(grouped));
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }
  //! TILE & GRANITE SERVICES
  function fetchTileGraniteServices() {
    fetch("https://api.gpgs24.in/api/tile-granite-services-data")
      .then((res) => res.json())
      .then((response) => {
        if (!response?.data) return;

        const grouped = {};

        response.data.forEach((item) => {
          const mainTitle = item["Main Title"];

          if (!grouped[mainTitle]) {
            grouped[mainTitle] = { mainTitle, services: [] };
          }

          grouped[mainTitle].services.push({
            title: item["Title"],
            time: item["Time"],
            price: item["Price"],
            size: item["Size"],
            pdfUrl: item["Pdf Url"],
          });
        });

        setTileGraniteServices(Object.values(grouped));
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }

  // CALL
  useEffect(() => {
    fetchAndSetServices();
    fetchDeepCleaningServices();
    fetchCommercialDeepCleaning();
    fetchResidentialMoversPackers();
    fetchCommercialMoversPackers();
    fetchResidentialPropertyRenovation();
    fetchCommercialPropertyRenovation();
    fetchElectricalServices();
    fetchPlumbingServices();
    fetchPaintingServices();
    fetchWaterproofingServices();
    fetchWaterTankServices();
    fetchCarMaintenanceServices();
    fetchCivilWorkServices();
    fetchCarpentryServices();
    fetchSocietyManagementServices();
    fetchBuildingMaintenanceServices();
    fetchTileGraniteServices();
  }, []);
  console.log(111111, residentialMoversPackers);
  // console.log(222222, commercialDeepCleaning);

  return (
    <section id="services" className="  scroll-mt-16 ">
      {open && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60">
          <div className="relative w-[90%] max-w-4xl rounded-xl bg-white overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between border-b px-4 py-3">
              <h3 className="text-sm font-semibold">
                {selectedService?.title || "Service Details"}
              </h3>

              <button
                onClick={() => {
                  setOpen(false);
                  setActivePdf(null);
                  setSelectedService(null);
                }}
                className="text-gray-500 hover:text-black"
              >
                ✕
              </button>
            </div>

            {/* PDF */}
            <div className="h-[75vh]">
              {activePdf ? (
                <iframe
                  src={activePdf}
                  className="h-full w-full"
                  title="Service PDF"
                  allow="autoplay"
                />
              ) : (
                <p className="p-4 text-center text-gray-500">
                  No document available
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* main services */}
      <div className="bg-[#fbfbfb] lg:pb-18 pt-4 md:pt-6 pb-4 md:pb-6 lg:pt-12 px-2">
        <div className=" sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-5  mb-8">
            {/* Center Heading */}
            <div className="lg:flex flex-col hidden  justify-center "></div>
            <div className="flex flex-col  justify-center items-center">
              <h2 className="text-black text-[22px] sm:text-[26px] lg:text-[38px] font-bold">
                Our Services
              </h2>
            </div>

            {/* Right Search */}
            <div className="ml-auto w-full max-w-md lg:pl-8  lg:ml-0">
              <div className="relative">
                <div className=" lg:pl-12">
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={mainSearch}
                    onChange={(e) => setMainSearch(e.target.value)}
                    className="w-full rounded-xl border border-gray-300 px-6 py-2 text-lg focus:outline-none focus:ring-1 focus:ring-black"
                  />
                  <i className="fas fa-search absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
                </div>
              </div>
            </div>
          </div>

          {/* Main Services Cards */}
          <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:px-2">
            {loading
              ? Array.from({ length: 8 }).map((_, i) => (
                  <ServiceCardSkeleton key={i} />
                ))
              : services
                  .filter((service) =>
                    service.title
                      .toLowerCase()
                      .includes(mainSearch.toLowerCase()),
                  )
                  .map((service) => (
                    <div
                      id={`#${service.sectionId}`}
                      key={service.title}
                      onClick={() => scrollToSection(service.sectionId)}
                      className="cursor-pointer rounded-md flex flex-col gap-4 transition hover:-translate-y-1 group max-w-[400px] shadow-lg"
                    >
                      {/* <div className="">
                        <img
                          src={service.img}
                          alt={service.title}
                          className=" w-full object-cover rounded-t-xl"
                        />
                      </div> */}

                      {/* Image wrapper */}
                      <div className="relative w-full h-[340px] overflow-hidden rounded-t-xl">
                        {/* Skeleton */}
                        {!loaded && (
                          <div className="absolute inset-0 animate-pulse bg-gray-200" />
                        )}

                        <img
                          src={service.img}
                          alt={service.title}
                          onLoad={() => setLoaded(true)}
                          className={`w-full h-full lg:object-cover transition-opacity duration-500 ${
                            loaded ? "opacity-100" : "opacity-0"
                          }`}
                        />
                      </div>

                      <div className="px-4 pb-4 ">
                        <h3 className="font-semibold text-[18px] text-[#111D15]">
                          {service.title}
                        </h3>
                        {/* <p className="text-[14px] text-[#666666]">
                          {service.desc}
                        </p> */}
                      </div>
                    </div>
                  ))}
          </div>
        </div>
      </div>

      {/*  servics */}
      <div className="  ">
        {/* //! movers & packers subservices */}
        {/* //! movers & packers – residential */}
        <div className="lg:py-6 py-4 md:py-6 bg-white">
          {residentialMoversPackers.map((section, index) => (
            <ServiceSection
              key={index}
              id={`movers-packers`}
              data={section}
              sectionBg="white"
              onViewDetails={handleViewDetails}
            />
          ))}
        </div>

        {/* //! movers & packers – commercial */}
        <div className="lg:py-6 py-4 md:py-6 bg-[#fbfbfb]">
          {commercialMoversPackers.map((section, index) => (
            <ServiceSection
              key={index}
              id={`movers-packers`}
              data={section}
              sectionBg="gray"
              onViewDetails={handleViewDetails}
            />
          ))}
        </div>

        {/* //!deep cleaning subservices */}
        <div className="lg:py-6 py-4 md:py-6 bg-white">
          {residentialDeepCleaning.map((section, index) => (
            <ServiceSection
              key={index}
              id={`deep-cleaning`}
              data={section}
              sectionBg="white"
              onViewDetails={handleViewDetails}
            />
          ))}
        </div>
        <div className="bg-[#fbfbfb] py-4 lg:py-6 md:py-6">
          {commercialDeepCleaning.map((section, index) => (
            <ServiceSection
              key={index}
              id={`deep-cleaning`}
              data={section}
              onViewDetails={handleViewDetails}
            />
          ))}
        </div>
        {/* //!electrical repair services  */}
        {/* <div className=" lg:py-6 md:py-6  py-4 bg-white">
          <ServiceSection
            id="electrical-repairs"
            sectionBg="white"
            data={electricalRepairs}
          />
        </div> */}
        {/* //! electrical repair services */}
        <div className="lg:py-6 py-4 md:py-6 bg-white">
          {electricalServices.map((section, index) => (
            <ServiceSection
              key={index}
              id={`electrical-services-${index}`}
              data={section}
              sectionBg="white"
              onViewDetails={handleViewDetails}
            />
          ))}
        </div>

        {/* //! plumbing services */}
        {/* //! plumbing services */}
        <div className="lg:py-6 py-4 md:py-6 bg-[#fbfbfb]">
          {plumbingServices.map((section, index) => (
            <ServiceSection
              key={index}
              id={`plumbing`}
              data={section}
              onViewDetails={handleViewDetails}
            />
          ))}
        </div>

        {/*//! water tank services */}
        {/* <div className=" lg:py-6 md:py-6  py-4 bg-white">
          <ServiceSection
            sectionBg="white"
            id="water-tank-services"
            data={waterTankServices}
          />
        </div> */}
        {/* //! water tank services */}
        <div className="lg:py-6 py-4 md:py-6 bg-white">
          {waterTankServices.map((section, index) => (
            <ServiceSection
              key={index}
              id={`water-tank-services`}
              data={section}
              sectionBg="white"
              onViewDetails={handleViewDetails}
            />
          ))}
        </div>

        {/*//! painting services */}
        {/* <div className="bg-[#fbfbfb] lg:py-6 py-4 md:py-6">
          <>
            <ServiceSection id="painting-services" data={paintingServices} />
          </>
        </div> */}
        {/* //! painting services */}
        <div className="lg:py-6 py-4 md:py-6 bg-[#fbfbfb]">
          {paintingServices.map((section, index) => (
            <ServiceSection
              key={index}
              id={`painting-services`}
              data={section}
              onViewDetails={handleViewDetails}
            />
          ))}
        </div>

        {/*//! waterproof services */}
        {/* <div className="bg-white lg:py-6 py-4 md:py-6">
          <ServiceSection
            id="water-proof-services"
            sectionBg="white"
            data={waterProofServices}
          />
        </div> */}
        {/* //! waterproofing services */}
        <div className="lg:py-6 py-4 md:py-6 bg-white">
          {waterproofingServices.map((section, index) => (
            <ServiceSection
              key={index}
              id={`water-proof-services`}
              data={section}
              sectionBg="white"
              onViewDetails={handleViewDetails}
            />
          ))}
        </div>

        {/* //!property renovation resendential  subservices */}
        {/* <div className="bg-[#fbfbfb] lg:py-6 md:py-6  py-4">
          <ServiceSection
            id="property-renovation-all-services"
            data={residentialPropertyRenovationServices}
          />
        </div> */}

        <div className="lg:py-6 py-4 md:py-6 bg-[#fbfbfb]">
          {residentialPropertyRenovation.map((section, index) => (
            <ServiceSection
              key={index}
              id={`property-renovation-all-services`}
              data={section}
              onViewDetails={handleViewDetails}
            />
          ))}
        </div>
        {/* //! property renovation – commercial subservices */}
        {/* <div className=" lg:py-6 md:py-6 py-4 bg-white">
          <ServiceSection
            sectionBg="white"
            id="property-renovation-all-services"
            data={commercialPropertyRenovationServices}
          />
        </div> */}
        <div className="lg:py-6 py-4 md:py-6 bg-white">
          {commercialPropertyRenovation.map((section, index) => (
            <ServiceSection
              key={index}
              id={`property-renovation-all-services`}
              data={section}
              sectionBg="white"
              onViewDetails={handleViewDetails}
            />
          ))}
        </div>
        {/* //! tile and granite services */}
        <div className="lg:py-6 md:py-6 py-4 bg-[#fbfbfb]">
          {tileGraniteServices.map((section, index) => (
            <ServiceSection
              key={index}
              id={`tile-and-granite-all-services`}
              data={section}
              onViewDetails={handleViewDetails}
            />
          ))}
        </div>

        {/* <div className=" lg:py-6 md:py-6 py-4 bg-[#fbfbfb]">
          <ServiceSection
            id="tile-and-granite-all-services"
            data={tileAndGraniteServices}
          />
        </div> */}
        {/*//! civil work services */}
        {/* <div className="bg-white py-4 lg:py-16 md:py-6 ">
          <ServiceSection
            id="civil-work"
            sectionBg="white"
            data={civilWorkServices}
          />
        </div> */}
        {/* //! civil work services */}
        <div className="lg:py-6 py-4 md:py-6 bg-white">
          {civilWorkServices.map((section, index) => (
            <ServiceSection
              key={index}
              id={`civil-work`}
              data={section}
              sectionBg="white"
              onViewDetails={handleViewDetails}
            />
          ))}
        </div>

        {/* //!carpentary services */}
        {/* <div className="bg-[#fbfbfb] lg:py-6 py-4 md:py-6">
          <ServiceSection id="carpentry" data={carpentryServices} />
        </div> */}
        {/* //! carpentry services */}
        <div className="lg:py-6 py-4 md:py-6 bg-[#fbfbfb]">
          {carpentryServices.map((section, index) => (
            <ServiceSection
              key={index}
              id={`carpentry`}
              data={section}
              onViewDetails={handleViewDetails}
            />
          ))}
        </div>

        {/*//! car maintenance */}
        {/* <div className="bg-white py-4 lg:py-6 md:py-6">
          <ServiceSection
            sectionBg="white"
            id="car-maintenance"
            data={carMaintenanceServices}
          />
        </div> */}
        {/* //! car maintenance services */}
        <div className="lg:py-6 py-4 md:py-6 bg-white">
          {carMaintenanceServices.map((section, index) => (
            <ServiceSection
              key={index}
              id={`car-maintenance`}
              data={section}
              sectionBg="white"
              onViewDetails={handleViewDetails}
            />
          ))}
        </div>

        {/*//! building maintenance services */}

        <div className="bg-[#fbfbfb] lg:py-6 md:py-6 py-4">
          {buildingMaintenanceServices.map((section, index) => (
            <ServiceSection
              key={index}
              id={`building-maintenance`}
              data={section}
              onViewDetails={handleViewDetails}
            />
          ))}
        </div>

        {/* <div className="bg-[#fbfbfb] lg:py-6 md:py-6  py-4">
          <ServiceSection
            id="building-maintenance"
            data={buildingMaintenanceServices}
          />
        </div> */}
        {/* //! society management services */}
        <div className="bg-white lg:py-6 py-4 md:py-6">
          {societyManagementServices.map((section, index) => (
            <ServiceSection
              key={index}
              id={`society-management`}
              data={section}
              sectionBg="white"
              onViewDetails={handleViewDetails}
            />
          ))}
        </div>

        {/* <div className="bg-white lg:py-6 py-4 md:py-6">
          <ServiceSection
            sectionBg="white"
            id="society-management"
            data={societyManagementServices}
          />
        </div> */}
      </div>
    </section>
  );
};

export default Services;
