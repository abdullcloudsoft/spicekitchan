import { Phone, Utensils, MapPin } from 'lucide-react';
import { RESTAURANT_DATA, RESTAURANT_IMAGES } from '../data/restaurantData';

export function Hero() {
  return (
    <section
      id="home"
      aria-label="Hero Introduction"
      className="relative pt-24 sm:pt-28 pb-12 lg:pb-16 overflow-hidden bg-[#FAF8F5]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Single Full-Bleed High-Definition Hero Food Photography Showcase */}
        <div
          id="hero-showcase-container"
          className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-[#E7DFC6]/60 group min-h-[460px] sm:min-h-[520px] lg:min-h-[580px] flex items-end"
        >
          {/* SINGLE HERO IMAGE - No carousel, no slider, no video background */}
          <img
            id="hero-single-food-image"
            src={RESTAURANT_IMAGES.hero}
            alt="Authentic Pakistani copper karahi with tender chicken, fresh ginger juliennes and warm tandoori naan at Spice Kitchen G-6 Islamabad"
            referrerPolicy="no-referrer"
            loading="eager"
            fetchPriority="high"
            className="absolute inset-0 w-full h-full object-cover object-center transform group-hover:scale-102 transition-transform duration-700 ease-out"
          />

          {/* 
            Subtle optical text protection ONLY at the bottom-left text anchor.
            No heavy gradient over the whole photo, no grey sheet, no cream card, no milky wash.
            The food photo remains completely vibrant, sharp, and visible.
          */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-[#140D0B]/85 via-[#140D0B]/35 to-transparent"
          />

          {/* Hero Content Overlay */}
          <div
            id="hero-content-block"
            className="relative z-10 w-full p-6 sm:p-10 lg:p-14 max-w-3xl"
          >
            {/* Location Pill Badge */}
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#FAF8F5]/95 text-[#242220] text-xs font-semibold tracking-wide mb-3 shadow-xs">
              <MapPin className="w-3.5 h-3.5 text-[#B9381E]" />
              <span>Khayaban-e-Suhrawardy Road, Islamabad</span>
            </div>

            {/* Main Restaurant Name */}
            <h1
              id="hero-title"
              className="font-serif-heading text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight drop-shadow-md"
            >
              SPICE KITCHEN G-6
            </h1>

            {/* Tagline */}
            <p
              id="hero-tagline"
              className="mt-2.5 sm:mt-3 text-lg sm:text-2xl text-[#F9F6F0] font-medium tracking-wide drop-shadow-sm max-w-xl"
            >
              Authentic Pakistani Flavours in Islamabad
            </p>

            {/* Minimalist Subtext */}
            <p className="mt-1 text-sm sm:text-base text-[#D7CEC3] max-w-lg font-normal">
              Traditional recipes, fresh aromatic spices, and warm Pakistani dining hospitality.
            </p>

            {/* Action Buttons */}
            <div
              id="hero-cta-group"
              className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3 sm:gap-4"
            >
              <a
                id="hero-explore-menu-btn"
                href="#menu"
                className="inline-flex items-center justify-center space-x-2 bg-[#FAF8F5] hover:bg-[#FFFFFF] text-[#242220] px-6 py-3.5 rounded-full text-sm sm:text-base font-semibold tracking-wide shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
              >
                <Utensils className="w-4 h-4 text-[#B9381E]" />
                <span>Explore Menu</span>
              </a>

              <a
                id="hero-call-now-btn"
                href={`tel:${RESTAURANT_DATA.primaryPhone.replace(/\s+/g, '')}`}
                className="inline-flex items-center justify-center space-x-2 bg-[#B9381E] hover:bg-[#A32B13] text-white px-6 py-3.5 rounded-full text-sm sm:text-base font-semibold tracking-wide shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
              >
                <Phone className="w-4 h-4 text-white" />
                <span>Call Now</span>
              </a>
            </div>
          </div>
        </div>

        {/* Quick Micro-Banner Info Strip */}
        <div
          id="hero-info-strip"
          className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4"
        >
          <div className="bg-white/80 border border-[#EAE3D6] rounded-xl p-4 flex items-center space-x-3.5 shadow-xs">
            <div className="w-10 h-10 rounded-full bg-[#F5ECE0] flex items-center justify-center shrink-0">
              <Utensils className="w-5 h-5 text-[#B9381E]" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-[#787168] font-medium">Pakistani Cuisine</div>
              <div className="text-sm font-semibold text-[#242220]">Traditional Slow Cooking</div>
            </div>
          </div>

          <div className="bg-white/80 border border-[#EAE3D6] rounded-xl p-4 flex items-center space-x-3.5 shadow-xs">
            <div className="w-10 h-10 rounded-full bg-[#F5ECE0] flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5 text-[#B9381E]" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-[#787168] font-medium">Prime Location</div>
              <div className="text-sm font-semibold text-[#242220]">Sector G-6, Islamabad</div>
            </div>
          </div>

          <div className="bg-white/80 border border-[#EAE3D6] rounded-xl p-4 flex items-center space-x-3.5 shadow-xs">
            <div className="w-10 h-10 rounded-full bg-[#F5ECE0] flex items-center justify-center shrink-0">
              <Phone className="w-5 h-5 text-[#B9381E]" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-[#787168] font-medium">Direct Inquiries</div>
              <div className="text-sm font-semibold text-[#242220]">{RESTAURANT_DATA.primaryPhone}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
