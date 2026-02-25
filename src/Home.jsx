import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="h-screen bg-[#0F0F0F] text-[#F5F5F5] flex flex-col">
      {/* ===== Identity Section (Top) ===== */}
      <div className="text-center pt-12">
        <h1 className="text-5xl md:text-6xl tracking-[0.15em] font-serif">
          DILIP BHAKTAVATSALAM
        </h1>

        <p className="mt-4 text-[#A0A0A0] tracking-wide text-sm md:text-base">
          Architect • Entrepreneur • Shooter
        </p>
      </div>

      {/* ===== Split Section (Fills Remaining Space) ===== */}
      <div className="flex-1 flex p-8 gap-8">
        {/* ===== Architect Panel ===== */}
        <div
          className="w-1/2 relative cursor-pointer group overflow-hidden 
                     rounded-2xl border border-neutral-700 
                     hover:border-[#D4AF37] 
                     transition-all duration-500"
          onClick={() => navigate("/business")}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center 
                       transform group-hover:scale-105 
                       transition duration-700"
            style={{ backgroundImage: "url('/architect.jpg')" }}
          ></div>

          {/* Overlay */}
          <div
            className="absolute inset-0 
                       bg-gradient-to-b 
                       from-black/90 via-black/70 to-black/90
                       group-hover:from-black/70 
                       group-hover:via-black/50 
                       group-hover:to-black/70
                       transition-all duration-500"
          ></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col justify-start pt-16 px-12 text-left">
            <h2 className="text-3xl md:text-4xl text-white drop-shadow-lg">
              Architect by Profession
            </h2>

            <p
              className="mt-4 
                         bg-gradient-to-r 
                         from-[#FFD700] via-[#D4AF37] to-[#B8860B] 
                         bg-clip-text text-transparent 
                         text-sm tracking-wide max-w-md"
            >
              Director & Founder of Box & Brix, Bengaluru, Karnataka.
            </p>
          </div>
        </div>

        {/* ===== Sport Panel ===== */}
        <div
          className="w-1/2 relative cursor-pointer group overflow-hidden 
                     rounded-2xl border border-neutral-700 
                     hover:border-[#D4AF37] 
                     transition-all duration-500"
          onClick={() => navigate("/sport")}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center 
                       transform group-hover:scale-105 
                       transition duration-700"
            style={{ backgroundImage: "url('/shooter.jpg')" }}
          ></div>

          {/* Overlay */}
          <div
            className="absolute inset-0 
                       bg-gradient-to-b 
                       from-black/90 via-black/70 to-black/90
                       group-hover:from-black/70 
                       group-hover:via-black/50 
                       group-hover:to-black/70
                       transition-all duration-500"
          ></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col justify-start pt-16 px-12 text-left">
            <h2 className="text-3xl md:text-4xl text-white drop-shadow-lg">
              Sportsperson by Passion
            </h2>

            <p
              className="mt-4 
                         bg-gradient-to-r 
                         from-[#FFD700] via-[#D4AF37] to-[#B8860B] 
                         bg-clip-text text-transparent 
                         text-sm tracking-wide max-w-md"
            >
              National Level Qualified Rifle Shooter from Karnataka.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
