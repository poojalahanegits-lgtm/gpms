import deepImg from "@/assetss/heroSectionImages/DeepCleaning.png";

import plumbingImg from "@/assetss/heroSectionImages/Plumbing.png";
import electricalImg from "@/assetss/heroSectionImages/ElectricalRepairs.png";
import moversImg from "@/assetss/heroSectionImages/Movers&Packers-1.png";
import carMaintenanceImg from "@/assetss/heroSectionImages/CarMaintenance.png";
import carPentaryImg from "@/assetss/heroSectionImages/Carpentry.png";
import civilWorkImg from "@/assetss/heroSectionImages/CivilWork&BrickWork.png";
import societyManageImg from "@/assetss/heroSectionImages/SocietyManagement.png";

import tileworkImg from "@/assetss/heroSectionImages/TileWork.png";
import paintingImg from "@/assetss/heroSectionImages/Painting.png";
import wanterTankImg from "@/assetss/heroSectionImages/WaterTankServices.png";
import bhangarImg from "@/assetss/heroSectionImages/Bhangarwala.png";
import buildingImg from "@/assetss/heroSectionImages/buildingmaintanance.png";
import PropertyRenovationImg from "@/assetss/heroSectionImages/PropertyRenovation.png";
import WaterProofingImg from "@/assetss/heroSectionImages/WaterProofing.png";

import h1 from "@/assetss/heroSectionImages/h1.png";
import h2 from "@/assetss/heroSectionImages/h2.png";
import h3 from "@/assetss/heroSectionImages/h3.png";
import h4 from "@/assetss/heroSectionImages/h4.png";
import h5 from "@/assetss/heroSectionImages/h5.png";
import h6 from "@/assetss/heroSectionImages/h6.png";
import h7 from "@/assetss/heroSectionImages/h7.png";
import h8 from "@/assetss/heroSectionImages/h8.png";
import h9 from "@/assetss/heroSectionImages/h9.png";

// import h1 from "@/assetss/heroSectionImages/h1.jpeg";
// import h2 from "@/assetss/heroSectionImages/h2.jpeg";
// import h3 from "@/assetss/heroSectionImages/h3.jpeg";
// import h4 from "@/assetss/heroSectionImages/h4.jpeg";
// import h5 from "@/assetss/heroSectionImages/h5.jpeg";
// import h6 from "@/assetss/heroSectionImages/h6.jpeg";
// import h7 from "@/assetss/heroSectionImages/h7.jpeg";
// import h8 from "@/assetss/heroSectionImages/h8.jpeg";
// import h9 from "@/assetss/heroSectionImages/h9.jpeg";

import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
// Right-side hero image (unchanged)
import { heroImg } from "@/assets/images";
import HeroRightImage from "./HeroImageRight";

const rightImages = [h1, h2, h3, h4, h5, h6, h7];
// const rightImages = [
//   deepImg,
//   plumbingImg,
//   electricalImg,
//   moversImg,
//   carMaintenanceImg,
//   carPentaryImg,
//   civilWorkImg,
//   societyManageImg,
//   tileworkImg,
//   paintingImg,
//   wanterTankImg,
//   bhangarImg,
//   PropertyRenovationImg,
//   WaterProofingImg,
//   buildingImg,
// ];

export default function Hero() {
  return (
    <>
      <section className="bg-[#fbfbfb] relative   lg:h-screen md:h-[380px] w-full overflow-hidden ">
        <div>
          <div
            className="  mx-auto max-w-7xl px-4 
        grid grid-cols-1 md:grid-cols-2 
         gap-8 lg:gap-12    
        py-2   h-full"
          >
            {/* Left Content */}

            <section
              id="/"
              className=" md:mt-0 md:pb-8 md:pt-16 pt-4 lg:mt-2-12 px-4 sm:px-6  lg:pt-40   "
            >
              {/* Heading */}
              <h1 className=" text-black text-[26px] md:text-[28px]  lg:text-[40px] md:leading-[1.3]  lg:leading-[1.2] font-bold  md:mb-4 ">
                Transform Your Property With Our Quality Care & Services
              </h1>
              <br />
              {/* Subheading */}
              <p className="text-gray-400 text-base lg:text-[20px] leading-[1.25] sm:leading-[1.3] lg:leading-[1.5] lg:max-w-3xl sm:max-w-2xl mx-auto mb-8 italic">
                “Make Life Easier and More Comfortable with Trusted, Quality
                Services.”
              </p>

              {/* Buttons */}
              <div
                id="#services"
                className="flex whitespace-nowrap md:flex-row  gap-4 sm:gap-6"
              >
                <button className="w-full sm:w-auto px-6 md:px-2 lg:px-10 py-3 bg-black text-white lg:text-[18px] font-bold rounded-[68px] shadow-lg hover:bg-black-700 transition">
                  <a href="#services">Explore Services</a>
                </button>
                <button className="w-full sm:w-auto px-6 lg:px-10 py-3 bg-black text-white font-bold rounded-[68px] shadow-lg hover:bg-black-500 lg:text-[18px] transition">
                  Get in Touch
                </button>
              </div>
            </section>

            {/* Right Image */}
            <div className="   ">
              <HeroRightImage rightImages={rightImages} />
            </div>

            {/* <div className="relative">
          <img
            src={heroImg}
            alt="Cleaning Team"
            className="w-full rounded-xl"
          />
        </div> */}
          </div>
        </div>
      </section>
      {/* Sticky 3D WhatsApp & Call icons */}
      <div
        className="fixed bottom-8  right-4 z-50 flex flex-col space-y-4"
        data-aos="fade-left"
      >
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/9326262292"
          target="_blank"
          rel="noopener noreferrer"
          className="w-auto min-w-[20px]  h-8 lg:h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg text-white text-2xl
      transform transition-transform duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-2xl
      active:scale-95 active:shadow-md animate-bounce"
          title="Chat with us on WhatsApp"
          aria-label="WhatsApp Chat"
        >
          <FaWhatsapp className=" text-xl lg:text-4xl" />
        </a>

        {/* Call Button */}
        <a
          href="tel:9326262292"
          className="w-auto min-w-[20px] px-3 h-8 lg:h-12 bg-blue-500 rounded-full flex items-center justify-center shadow-lg text-white text-2xl
      transform transition-transform duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-2xl
      active:scale-95 active:shadow-md animate-bounce"
          title="Call us"
          aria-label="Call Us"
        >
          <FaPhoneAlt className=" text-xl lg:text-2xl" />
        </a>
      </div>
    </>
  );
}

// import { useRef } from "react";
// import Autoplay from "embla-carousel-autoplay";

// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";

// import img1 from "@/assets/service-1.png";
// import img2 from "@/assets/service-2.png";
// import img3 from "@/assets/service-3.png";

// // Right-side hero image (unchanged)
// import { heroImg } from "@/assets/images";
// import HeroRightImage from "./HeroImageRight";

// const images = [img1, img2, img3];
// const rightImages = [heroImg, img1];

// export default function Hero() {
//   // 🔹 Autoplay setup
//   const autoplay = useRef(
//     Autoplay({
//       delay: 4000, // 4 seconds
//       stopOnInteraction: false, // keep autoplay after manual click
//     }),
//   );

//   return (
//     <section className="bg-gray-500 relative h-screen lg:h-[600px] md:h-[356px] w-full overflow-hidden">
//       <div>
//         {/* 🔹 Background Carousel */}
//         <Carousel
//           opts={{ loop: true }}
//           plugins={[autoplay.current]}
//           className="absolute inset-0 z-0 w-full h-full "
//         >
//           <CarouselContent>
//             {images.map((src, index) => (
//               <CarouselItem
//                 key={index}
//                 className="w-full shrink-0 grow-0 basis-full"
//               >
//                 <div
//                   className="h-screen lg:h-[600px] md:h-[356px] w-full bg-cover bg-center"
//                   style={{ backgroundImage: `url(${src})` }}
//                 />
//               </CarouselItem>
//             ))}
//           </CarouselContent>

//           {/* ✅ Navigation Buttons (still work with autoplay) */}
//           {/* <CarouselPrevious className="left-4 z-30 pointer-events-auto bg-black/50 text-white hover:bg-black/70" />
//         <CarouselNext className="right-4 z-30 pointer-events-auto bg-black/50 text-white hover:bg-black/70" /> */}
//         </Carousel>

//         {/* 🔹 Overlay (does NOT block clicks) */}
//         <div className="absolute inset-0 bg-white/60 z-10 pointer-events-none" />

//         {/* 🔹 Hero Content */}
//         <div
//           className="relative z-20 mx-auto max-w-7xl px-4
//         grid grid-cols-1 md:grid-cols-2
//         items-center gap-8 lg:gap-12
//         py-8 md:py-10 lg:py-0 h-full mt-12 md:mt-0"
//         >
//           {/* Left Content */}

//           <section id="/" className="  px-4 sm:px-6 lg:px-10 py-14 sm:py-20">
//             {/* Heading */}
//             <h1 className=" text-black text-[28px] sm:text-[30px] lg:text-[40px] leading-[1.1]  lg:leading-[1.2] font-bold  mb-4">
//               Transform Your Property With Our Quality Care and Services
//             </h1>

//             {/* Subheading */}
//             <p className="text-gray-600 font-nunito text-base  lg:text-[23px] leading-[1.25] sm:leading-[1.3] lg:leading-[1.5]  lg:max-w-3xl sm:max-w-2xl mx-auto mb-8">
//               Complete quality care services for residential and commercial
//               properties. Book services online with instant quotes!
//             </p>

//             {/* Buttons */}
//             <div className="flex flex-col sm:flex-row  gap-4 sm:gap-6">
//               <button className="w-full sm:w-auto px-6 lg:px-10 py-3 bg-black text-white lg:text-[18px] font-bold rounded-[68px] shadow-lg hover:bg-black-700 transition">
//                 Explore Services
//               </button>
//               <button className="w-full sm:w-auto px-6 lg:px-10 py-3 bg-black text-white font-bold rounded-[68px] shadow-lg hover:bg-black-500 lg:text-[18px] transition">
//                 Get a Quote
//               </button>
//             </div>
//           </section>

//           {/* Right Image */}
//           <div className="relative">
//             <HeroRightImage rightImages={rightImages} />
//           </div>

//           {/* <div className="relative">
//           <img
//             src={heroImg}
//             alt="Cleaning Team"
//             className="w-full rounded-xl"
//           />
//         </div> */}
//         </div>
//       </div>
//     </section>
//   );
// }
