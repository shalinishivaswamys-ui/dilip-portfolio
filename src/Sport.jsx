import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Sport() {
  return (
    <div className="h-screen bg-[#0F0F0F] text-[#F5F5F5] px-8 md:px-20 flex flex-col">
      {/* Top Section */}
      <div className="pt-10">
        <Link
          to="/"
          className="text-[#D4AF37] tracking-wide hover:opacity-80 transition"
        >
          ← Back
        </Link>

        <h1 className="text-4xl md:text-6xl font-serif mt-8 leading-tight">
          State & National Level Competitive{" "}
          <span className="bg-gradient-to-r from-[#FFD700] via-[#D4AF37] to-[#B8860B] bg-clip-text text-transparent">
            Shooter
          </span>
        </h1>
      </div>

      {/* Main Content Fills Remaining Space */}
      <div className="flex-1 grid md:grid-cols-2 gap-16 items-center">
        {/* LEFT SIDE */}
        <div>
          <p className="text-[#A0A0A0] leading-relaxed text-lg">
            Beyond my architectural practice, I pursue competitive shooting from
            a deep respect for the discipline and technical precision the sport
            requires. Representing Karnataka, I qualified as a National-Level
            Shooter in 2025. I continue to compete across four pistol
            disciplines — 25m Standard Pistol, 25m Sports Pistol, 25m Centre
            Fire Pistol, and 50m Free Pistol approaching each with sustained
            concentration and composure.
          </p>
          <br />
          <p className="text-[#A0A0A0] leading-relaxed text-lg">
            Extending my involvement beyond individual competition, I serve as
            co-owner of Sniper Squad in the Karnataka Shooting League,
            supporting structured participation and contributing to the
            continued development of the sport within the state.
          </p>

          <div className="mt-8 space-y-4 text-sm tracking-wide">
            <p className="bg-gradient-to-r from-[#FFD700] via-[#D4AF37] to-[#B8860B] bg-clip-text text-transparent">
              • Gold Medalist – Four Competitive Shooting Categories, Karnataka
            </p>
            <p className="bg-gradient-to-r from-[#FFD700] via-[#D4AF37] to-[#B8860B] bg-clip-text text-transparent">
              • Co-Owner, Sniper Squad – Karnataka Shooting League
            </p>
            <p className="bg-gradient-to-r from-[#FFD700] via-[#D4AF37] to-[#B8860B] bg-clip-text text-transparent">
              • Qualified National-Level Shooter (2025)
            </p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3500 }}
            loop={true}
            className="rounded-2xl overflow-hidden h-[70vh]"
          >
            {/* <SwiperSlide>
              <img
                src="/sport1.jpg"
                alt=""
                className="w-full h-full object-cover"
              />
            </SwiperSlide> */}

            <SwiperSlide>
              <img
                src="/Shooting_1.jpg"
                alt=""
                className="w-full h-full object-cover"
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                src="/TeamOwner.jpg"
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

export default Sport;
