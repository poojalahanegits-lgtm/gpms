import React, { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import logo from "../assets/all_icons/GPMS-Logo.png";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Services", href: "#services" },
  { label: "About Us", href: "#about" },
  { label: "Location", href: "#location" },
  { label: "Contact Us", href: "#contact" },
];

const Header = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
    AOS.refresh();
  }, []);

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full font-nunito bg-white shadow-lg sticky top-0 z-50">
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-10 py-1">
        {/* Logo */}
        <a href="#home" className="flex items-center">
          <img
            src={logo}
            alt="Company Logo"
            className="h-20 w-auto object-contain"
          />
        </a>

        {/* ================= Desktop Navigation (md and up) ================= */}
        <nav className="hidden lg:flex items-center space-x-4 lg:space-x-6 xl:space-x-8 flex-shrink-0">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-black font-semibold text-[16px] lg:text-[18px] hover:text-black-600 transition-colors whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}

          {/* Cart */}
          {/* <button className="relative flex items-center gap-2 rounded-xl bg-black px-3 lg:px-4 py-1.5 lg:py-2 text-sm font-semibold text-white transition hover:bg-black-700 whitespace-nowrap">
            <i className="fas fa-cart-plus text-white shrink-0" />
            <span>Cart</span>
            <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs text-white">
              1
            </span>
          </button> */}
        </nav>

        {/* ================= Mobile Menu Button (md and below) ================= */}
        <button
          className="lg:hidden text-black"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-7 w-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-7 w-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* ================= Mobile Navigation (md and below) ================= */}
      {menuOpen && (
        <div
          data-aos="flip-down"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="600"
          className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg"
        >
          <nav className="flex flex-col space-y-4 px-4 py-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-black font-semibold text-[16px] hover:text-black-600 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}

            {/* Cart */}
            {/* <button className="relative w-fit flex items-center gap-2 rounded-xl bg-black px-6 py-2 text-sm font-semibold text-white transition hover:bg-black-700">
              <i className="fas fa-cart-plus text-white shrink-0" />
              <span>Cart</span>
              <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                1
              </span>
            </button> */}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

// import React, { useState } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { useEffect } from "react";
// import logo from "../assets/all_icons/GPMS-Logo.png";
// const navLinks = [
//   { label: "Home", href: "#" },
//   { label: "Services", href: "#services" },
//   { label: "About Us", href: "#about" },
//   { label: "Location", href: "#location" },
//   { label: "Contact Us", href: "#contact" },
// ];

// const Header = () => {
//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       once: false,
//     });
//     AOS.refresh();
//   }, []);
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <header className="w-full font-nunito bg-white shadow-lg sticky top-0 z-50">
//       <div className="flex items-center justify-between px-4    sm:px-6 lg:px-10 py-1">
//         {/* Logo */}
//         <a href="#home" className="flex items-center">
//           <img
//             src={logo}
//             alt="Company Logo"
//             className="h-20  lg:h-20 w-auto object-contain"
//           />
//         </a>

//         {/* ================= Desktop Navigation ================= */}
//         <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 flex-shrink-0">
//           {navLinks.map((link) => (
//             <a
//               key={link.label}
//               href={link.href}
//               className="text-black font-semibold text-[18px] hover:text-black-600 transition-colors"
//             >
//               {link.label}
//             </a>
//           ))}

//           {/* Cart */}
//           <button className="relative flex items-center gap-2 rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white transition hover:bg-black-700">
//             <i className="fas fa-cart-plus text-white  shrink-0" />
//             <span>Cart</span>

//             <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs text-white">
//               1
//             </span>
//           </button>
//         </nav>

//         {/* ================= Mobile Menu Button ================= */}
//         <button
//           className="lg:hidden text-black "
//           onClick={() => setMenuOpen(!menuOpen)}
//           aria-label="Toggle Menu"
//         >
//           {menuOpen ? (
//             // ❌ Cross Icon
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth={2}
//               stroke="currentColor"
//               className="h-7 w-7"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             </svg>
//           ) : (
//             // ☰ Hamburger Icon
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth={2}
//               stroke="currentColor"
//               className="h-7 w-7"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M4 6h16M4 12h16M4 18h16"
//               />
//             </svg>
//           )}
//         </button>
//       </div>

//       {/* ================= Mobile Navigation ================= */}

//       {menuOpen && (
//         <div
//           data-aos="flip-down"
//           data-aos-easing="ease-out-cubic"
//           data-aos-duration="600"
//           className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg"
//         >
//           <nav className="flex flex-col space-y-4 px-4 py-6 p">
//             {navLinks.map((link) => (
//               <a
//                 key={link.label}
//                 href={link.href}
//                 className="text-black font-semibold text-[16px] hover:text-black-600 transition-colors"
//                 onClick={() => setMenuOpen(false)}
//               >
//                 {link.label}
//               </a>
//             ))}

//             {/* Cart */}
//             <button className="relative w-fit flex items-center gap-2 rounded-xl bg-black px-6 py-2 text-sm font-semibold text-white transition hover:bg-black-700">
//               <i className="fas fa-cart-plus text-white  shrink-0" />
//               <span>Cart</span>

//               <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs text-white">
//                 1
//               </span>
//             </button>
//           </nav>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;
