import React from "react";

const ReadyToGetStarted = () => {
  return (
    <section className="lg:mt-20 mt-0">
      <div className="  bg-black px-6 py-8 lg:py-16 text-center shadow-2xl">
        {/* Heading */}
        <h2 className="text-white text-[30px] sm:text-[36px] lg:text-[42px] font-bold leading-tight">
          Ready to Get Started?
        </h2>

        {/* Subtitle */}
        <p className="mt-4 text-white text-base sm:text-lg lg:text-[20px] max-w-2xl mx-auto leading-relaxed">
          Book your service today and get quality services
          <br className="hidden sm:block" />
          at your doorstep
        </p>

        {/* Button */}
        <div className="mt-8">
          <button className="rounded-full bg-white px-10 py-2 lg:px-14 text-lg font-semibold  shadow-lg transition hover:scale-105">
            <span className="text-black"> Book Now</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReadyToGetStarted;
