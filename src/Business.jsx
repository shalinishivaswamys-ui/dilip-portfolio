import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Business() {
  return (
    <div className="min-h-screen lg:h-screen bg-[#0F0F0F] text-[#F5F5F5] px-4 sm:px-6 md:px-12 lg:px-20 flex flex-col">
      {/* ===== Top Section ===== */}
      <div className="pt-10 mb-8 lg:mb-12">
        <Link
          to="/"
          className="text-[#D4AF37] tracking-wide hover:opacity-80 transition"
        >
          ← Back
        </Link>

        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-serif mt-8 leading-tight">
          Founder & Director of{" "}
          <span className="bg-gradient-to-r from-[#FFD700] via-[#D4AF37] to-[#B8860B] bg-clip-text text-transparent">
            Box & Brix
          </span>
        </h1>
      </div>

      {/* ===== Main Content (Fills Remaining Space) ===== */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* LEFT SIDE — Description */}
        <div className="order-2 lg:order-1">
          <p className="text-[#A0A0A0] leading-relaxed text-lg">
            Since establishing Box & Brix, I have led the practice as an
            integrated architecture, interior design, and construction studio
            committed to rigour, technical accountability, and disciplined
            execution. Over the past decade, my work has spanned residential,
            commercial, and specialised institutional sectors, shaped by a
            belief that enduring architecture emerges from the precise alignment
            of design intent and technical resolution.
          </p>
          <br />
          <p className="text-[#A0A0A0] leading-relaxed text-lg">
            Each commission is approached through careful spatial planning,
            structural clarity, and performance-driven detailing, resulting in
            environments that are composed in expression, efficient in function,
            and resilient over time. Grounded in professional integrity and
            contextual awareness, my practice remains focused on delivering
            architecture of lasting relevance and refined execution.
          </p>

          {/* Gold Highlight Strip */}
          <div className="mt-8 space-y-4 text-sm tracking-wide">
            <p className="bg-gradient-to-r from-[#FFD700] via-[#D4AF37] to-[#B8860B] bg-clip-text text-transparent">
              • Founder & Principal Architect, Box & Brix (Est. 2012, Bengaluru,
              Karnataka)
            </p>
            <p className="bg-gradient-to-r from-[#FFD700] via-[#D4AF37] to-[#B8860B] bg-clip-text text-transparent">
              • Specialised in Premium Residential Architecture & Bespoke
              Interior Environments
            </p>
            <p className="bg-gradient-to-r from-[#FFD700] via-[#D4AF37] to-[#B8860B] bg-clip-text text-transparent">
              • Renowned for Delivering Exemplary Commercial & Specialised
              Institutional Architecture
            </p>
          </div>
        </div>

        {/* RIGHT SIDE — Premium Gallery */}
        <div className="order-1 lg:order-2">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3500 }}
            loop={true}
            className="rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.6)] h-[300px] md:h-[400px] lg:h-[70vh]"
          >
            {/* <SwiperSlide>
              <img
                src="/arch1.jpg"
                alt=""
                className="w-full h-full object-cover"
              />
            </SwiperSlide> */}

            <SwiperSlide>
              <img
                src="/Office_2.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                src="/Office_1.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Business;
