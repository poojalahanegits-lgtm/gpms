import React from "react";

const services = [
  "Deep Cleaning",
  "Movers & Packers",
  "Electrical Repairs",
  "Plumbing Services",
  "Carpentry Services",
  "Civil Work",
  "Car Maintenance",
  "Society Management",
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-gradient-to-br from-gray-50 to-purple-50 py-20 px-4 scroll-mt-12"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <h2 className="mb-4 text-center text-4xl md:text-5xl font-bold">
          <span className=" text-black">Get In Touch</span>
        </h2>

        <p className="mb-16 text-center text-base md:text-xl text-gray-600">
          We&apos;re here to help with all your property maintenance needs
        </p>

        {/* Grid Layout */}
        <div className="grid gap-12 md:grid-cols-2">
          {/* ================= Contact Form ================= */}
          <div className="rounded-3xl bg-white p-8 shadow-xl">
            <h3 className="mb-6 text-2xl font-bold text-black">
              Send Us a Message
            </h3>

            <form className="space-y-4">
              {/* Name */}
              <div>
                <label className="mb-2 block font-medium text-gray-700">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
                />
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block font-medium text-gray-700">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="mb-2 block font-medium text-gray-700">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
                />
              </div>

              {/* Service */}
              <div>
                <label className="mb-2 block font-medium text-gray-700">
                  Service Interested In
                </label>
                <select className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-200">
                  <option value="">Select a service</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="mb-2 block font-medium text-gray-700">
                  Message *
                </label>
                <textarea
                  rows="4"
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full rounded-lg bg-black px-6 py-4 text-lg font-semibold text-white transition hover:bg-black-700"
              >
                Send Message <i className="fas fa-paper-plane ml-2"></i>
              </button>
            </form>
          </div>

          {/* ================= Contact Info ================= */}
          <div className="space-y-6">
            {/* Info Card */}
            <div className="rounded-3xl bg-white p-8 shadow-xl">
              <h3 className="mb-6 text-2xl font-bold text-black">
                Contact Information
              </h3>

              <div className="space-y-6">
                {/* Phone */}
                <InfoItem
                  icon="fa-phone"
                  title="Phone"
                  lines={["+91 98765 43210", "+91 98765 43211"]}
                />

                {/* Email */}
                <InfoItem
                  icon="fa-envelope"
                  title="Email"
                  lines={[
                    "info@eliteproperty.care",
                    "support@eliteproperty.care",
                  ]}
                />

                {/* Address */}
                <InfoItem
                  icon="fa-map-marker-alt"
                  title="Head Office"
                  lines={[
                    "123 Business Park, Sector 15",
                    "Delhi NCR, India - 110001",
                  ]}
                />

                {/* Hours */}
                <InfoItem
                  icon="fa-clock"
                  title="Working Hours"
                  lines={[
                    "Mon - Sat: 8:00 AM - 8:00 PM",
                    "Sun: 9:00 AM - 6:00 PM",
                    "24/7 Emergency Service",
                  ]}
                  highlightLast
                />
              </div>
            </div>

            {/* Social Media */}
            <div className="rounded-3xl bg-black p-8 text-white shadow-xl">
              <h3 className="mb-4 text-2xl font-bold">Follow Us</h3>
              <p className="mb-6 ">Stay connected for updates and offers</p>

              <div className="flex flex-wrap gap-4">
                {[
                  "facebook-f",
                  "instagram",
                  "twitter",
                  "linkedin-in",
                  "whatsapp",
                ].map((icon) => (
                  <a
                    key={icon}
                    href="#"
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-black transition hover:bg-purple-100"
                  >
                    <i className={`fab fa-${icon} text-xl`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ================= Reusable Info Item ================= */
const InfoItem = ({ icon, title, lines, highlightLast }) => (
  <div className="flex items-start">
    <i className={`fas ${icon} mr-4 mt-1 text-2xl `}></i>
    <div>
      <h4 className="text-lg font-bold">{title}</h4>
      {lines.map((line, i) => (
        <p
          key={i}
          className={`${
            highlightLast && i === lines.length - 1
              ? "font-medium "
              : "text-gray-600"
          }`}
        >
          {line}
        </p>
      ))}
    </div>
  </div>
);

export default Contact;
