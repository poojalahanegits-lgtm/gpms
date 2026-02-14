import React from "react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const services = [
  "Deep Cleaning",
  "Movers & Packers",
  "Electrical Repairs",
  "Plumbing Services",
];

const Footer = () => {
  return (
    <footer className="bg-black py-12 px-4 text-white">
      <div className="mx-auto max-w-7xl">
        {/* ================= Top Section ================= */}
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4 mb-8">
          {/* Brand */}
          <div>
            <h3 className="mb-4 text-2xl font-bold">Elite Property Care</h3>
            <p className="text-purple-100 leading-relaxed">
              Your trusted partner for complete property maintenance and
              management solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-xl font-bold">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-purple-100 transition hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-xl font-bold">Services</h4>
            <ul className="space-y-2 text-purple-100">
              {services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-xl font-bold">Contact Us</h4>
            <p className="text-purple-100">+91 98765 43210</p>
            <p className="text-purple-100">info@eliteproperty.care</p>
            <p className="mt-2 text-purple-100">Delhi NCR, India</p>
          </div>
        </div>

        {/* ================= Bottom Bar ================= */}
        <div className="border-t border-purple-400 pt-8 text-center text-sm md:text-base text-purple-100">
          <p>
            &copy; 2026 Elite Property Care. All rights reserved. | Designed for
            Excellence
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// import React from "react";

// const quickLinks = [
//   { label: "Home", href: "#home" },
//   { label: "Services", href: "#services" },
//   { label: "About Us", href: "#about" },
//   { label: "Contact", href: "#contact" },
// ];

// const services = [
//   "Deep Cleaning",
//   "Movers & Packers",
//   "Electrical Repairs",
//   "Plumbing Services",
// ];

// const Footer = () => {
//   return (
//     <footer className="bg-gradient-to-br from-purple-700 to-pink-600 py-12 px-4 text-white">
//       <div className="mx-auto max-w-7xl">
//         {/* ================= Top Section ================= */}
//         <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4 mb-8">
//           {/* Brand */}
//           <div>
//             <h3 className="mb-4 text-2xl font-bold">Elite Property Care</h3>
//             <p className="text-purple-100 leading-relaxed">
//               Your trusted partner for complete property maintenance and
//               management solutions.
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4 className="mb-4 text-xl font-bold">Quick Links</h4>
//             <ul className="space-y-2">
//               {quickLinks.map((link) => (
//                 <li key={link.label}>
//                   <a
//                     href={link.href}
//                     className="text-purple-100 transition hover:text-white"
//                   >
//                     {link.label}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Services */}
//           <div>
//             <h4 className="mb-4 text-xl font-bold">Services</h4>
//             <ul className="space-y-2 text-purple-100">
//               {services.map((service) => (
//                 <li key={service}>{service}</li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact */}
//           <div>
//             <h4 className="mb-4 text-xl font-bold">Contact Us</h4>
//             <p className="text-purple-100">+91 98765 43210</p>
//             <p className="text-purple-100">info@eliteproperty.care</p>
//             <p className="mt-2 text-purple-100">Delhi NCR, India</p>
//           </div>
//         </div>

//         {/* ================= Bottom Bar ================= */}
//         <div className="border-t border-purple-400 pt-8 text-center text-sm md:text-base text-purple-100">
//           <p>
//             &copy; 2026 Elite Property Care. All rights reserved. | Designed for
//             Excellence
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
