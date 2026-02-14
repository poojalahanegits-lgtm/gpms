import React from "react";
const features = [
  { title: "Experienced Professionals", icon: "⭐" },
  { title: "Quality Guaranteed", icon: "🛡️" },
  { title: "24/7 Availability", icon: "⏰" },
  { title: "Affordable Pricing", icon: "₹" },
];
const Home = () => {
  return (
    <div>
      {/* Feature Cards */}
      <div className="mt-12 mb-8 sm:mt-16  lg:mb-16 grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl lg:mx-auto mx-4">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="bg-[#fbfbfb]  shadow-md rounded-xl p-6 flex flex-col items-center text-center cursor-pointer"
          >
            <div className="text-3xl sm:text-4xl mb-3">{feature.icon}</div>
            <h3 className="font-bold max-w-[140px] text-black lg:text-[20px] text-sm sm:text-base break-words whitespace-normal">
              {feature.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

// // Hero.jsx
// import React from "react";

// const features = [
//   { title: "Experienced Professionals", icon: "⭐" },
//   { title: "Quality Guaranteed", icon: "🛡️" },
//   { title: "24/7 Availability", icon: "⏰" },
//   { title: "Affordable Pricing", icon: "₹" },
// ];

// const Home = () => {
//   return (
//     <section
//       id="/"
//       className="bg-gradient-to-b from-white via-gray-50 to-gray-100 text-center px-4 sm:px-6 lg:px-10 py-14 sm:py-20"
//     >
//       {/* Heading */}
//       <h1 className="bg-radial-purple bg-clip-text text-transparent text-[28px] sm:text-4xl lg:text-[48px] leading-[1.25] sm:leading-[1.3] lg:leading-[1.2] font-bold font-trebuchet mb-4">
//         Transform Your Property With Our <br className="hidden sm:block" />
//         Quality Care and Services
//       </h1>

//       {/* Subheading */}
//       <p className="text-black font-nunito text-base sm:text-lg lg:text-[25px] leading-[1.25] sm:leading-[1.3] lg:leading-[1.5]  lg:max-w-3xl sm:max-w-2xl mx-auto mb-8">
//         Complete quality care services for residential and commercial
//         properties. Book services online with instant quotes!
//       </p>

//       {/* Buttons */}
//       <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
//         <button className="w-full sm:w-auto px-6 lg:px-10 py-3 bg-radial-purple text-white lg:text-[18px] font-bold rounded-[68px] shadow-lg hover:bg-purple-700 transition">
//           Explore Services
//         </button>
//         <button className="w-full sm:w-auto px-6 lg:px-10 py-3 bg-radial-purple text-white font-bold rounded-[68px] shadow-lg hover:bg-purple-500 lg:text-[18px] transition">
//           Get a Quote
//         </button>
//       </div>

//       {/* Feature Cards */}
//       <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
//         {features.map((feature) => (
//           <div
//             key={feature.title}
//             className="bg-radial-gray shadow-md rounded-xl p-6 flex flex-col items-center text-center"
//           >
//             <div className="text-3xl sm:text-4xl mb-3">{feature.icon}</div>
//             <h3 className="font-bold max-w-[140px] text-black lg:text-[20px] text-sm sm:text-base break-words whitespace-normal">
//               {feature.title}
//             </h3>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Home;
