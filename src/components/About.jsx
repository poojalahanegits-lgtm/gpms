import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-white py-20 px-4 scroll-mt-12">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <h2 className="mb-16 text-center text-4xl md:text-5xl font-bold">
          <span className=" text-black">About Us</span>
        </h2>

        {/* Who Are We */}
        <div className="mb-16 rounded-3xl bg-gradient-to-br from-purple-50 to-pink-50 p-8 md:p-12">
          <div className="mb-6 flex items-center">
            <i className="fas fa-users mr-6 text-4xl md:text-5xl text-purple-600"></i>
            <h3 className="text-2xl md:text-3xl font-bold text-black">
              Who Are We?
            </h3>
          </div>
          <p className="text-base md:text-lg leading-relaxed text-gray-400">
            Elite Property Care is a leading property maintenance and management
            company dedicated to delivering exceptional quality services for
            residential and commercial properties. With years of expertise and a
            team of certified professionals, we have become the most trusted
            name in comprehensive property care solutions. We don&apos;t just
            maintain properties — we transform them into healthier, cleaner, and
            more efficient spaces.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="mb-16 grid gap-8 md:grid-cols-2">
          {/* Mission */}
          <div className="rounded-3xl bg-gradient-to-br from-blue-50 to-purple-50 p-8">
            <div className="mb-6 flex items-center">
              <i className="fas fa-bullseye mr-6 text-4xl md:text-5xl text-blue-600"></i>
              <h3 className="text-2xl md:text-3xl font-bold text-black">
                Our Mission
              </h3>
            </div>
            <p className="text-base md:text-lg leading-relaxed text-gray-700">
              To revolutionize property maintenance by providing world-class,
              eco-friendly services that prioritize health, hygiene, and
              customer satisfaction while building lasting relationships with
              our clients.
            </p>
          </div>

          {/* Vision */}
          <div className="rounded-3xl bg-gradient-to-br from-pink-50 to-purple-50 p-8">
            <div className="mb-6 flex items-center">
              <i className="fas fa-eye mr-6 text-4xl md:text-5xl text-pink-600"></i>
              <h3 className="text-2xl md:text-3xl font-bold text-black">
                Our Vision
              </h3>
            </div>
            <p className="text-base md:text-lg leading-relaxed text-gray-700">
              To become the nation&apos;s most trusted and innovative property
              care provider, setting new standards in quality, sustainability,
              and customer service.
            </p>
          </div>
        </div>

        {/* Equipment */}
        <div className="rounded-3xl bg-gradient-to-br from-purple-50 to-blue-50 p-8 md:p-12">
          <div className="mb-8 flex items-center">
            <i className="fas fa-tools mr-6 text-4xl md:text-5xl text-purple-600"></i>
            <h3 className="text-2xl md:text-3xl font-bold text-black">
              Professional Equipment & Technology
            </h3>
          </div>

          <p className="mb-8 text-base md:text-lg leading-relaxed text-gray-700">
            We invest in the latest professional-grade equipment and
            eco-friendly products to deliver superior results.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              [
                "fas fa-spray-can",
                "Industrial Cleaners",
                "High-powered machines",
              ],
              ["fas fa-leaf", "Eco Products", "Biodegradable solutions"],
              ["fas fa-microscope", "Testing Equipment", "Safety tools"],
              ["fas fa-cogs", "Professional Tools", "Specialized gear"],
            ].map(([icon, title, desc]) => (
              <div
                key={title}
                className="rounded-2xl bg-white p-6 text-center shadow-md"
              >
                <i className={`${icon} mb-4 text-4xl text-purple-600`}></i>
                <h4 className="mb-1 font-bold">{title}</h4>
                <p className="text-sm text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
