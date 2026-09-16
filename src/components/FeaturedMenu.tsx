import { useState } from 'react';
import { Phone, Info, Sparkles, X } from 'lucide-react';
import { FEATURED_MENU, RESTAURANT_DATA } from '../data/restaurantData';
import { MenuItem } from '../types';

export function FeaturedMenu() {
  const [selectedDish, setSelectedDish] = useState<MenuItem | null>(null);
  const [fullMenuModalOpen, setFullMenuModalOpen] = useState(false);

  return (
    <section
      id="menu"
      aria-label="Featured Menu"
      className="py-16 sm:py-20 lg:py-24 bg-[#F7F4EE] border-t border-b border-[#EAE3D6]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#EFE7D8] text-[#842A17] text-xs font-semibold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curated Culinary Highlights</span>
          </div>
          <h2
            id="menu-section-title"
            className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#242220] tracking-tight"
          >
            Featured Specialities
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#686157] leading-relaxed">
            A small curated selection of authentic Pakistani dishes prepared with traditional recipes, fragrant hand-ground spices, and fresh cuts.
          </p>

          {/* Pricing transparency disclosure */}
          <div className="mt-3 inline-flex items-center space-x-1.5 text-xs text-[#8A8277] bg-[#EAE3D6]/50 px-3 py-1 rounded-md">
            <Info className="w-3.5 h-3.5 text-[#842A17]" />
            <span>Prices vary with daily market-fresh cuts. Call directly for daily rates.</span>
          </div>
        </div>

        {/* 
          COMPACT MENU CARDS:
          Desktop: 3-column / 4-column layout
          Mobile: compact 1-column or 2-column cards
          Small neatly cropped images.
        */}
        <div
          id="featured-menu-grid"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5"
        >
          {FEATURED_MENU.map((item) => (
            <article
              key={item.id}
              id={`menu-card-${item.id}`}
              className="bg-white rounded-xl border border-[#EAE3D6] overflow-hidden shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col group hover:-translate-y-0.5"
            >
              {/* SMALL cropped image container */}
              <div className="relative h-36 sm:h-40 w-full overflow-hidden bg-[#EFE9DE]">
                <img
                  id={`dish-img-${item.id}`}
                  src={item.image}
                  alt={item.name}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-300"
                />
                {item.highlight && (
                  <span className="absolute top-2.5 left-2.5 bg-[#FAF8F5]/90 backdrop-blur-xs text-[#842A17] text-[11px] font-semibold px-2 py-0.5 rounded-sm shadow-2xs">
                    {item.highlight}
                  </span>
                )}
                <span className="absolute bottom-2 right-2 bg-black/65 backdrop-blur-xs text-white text-[10px] uppercase tracking-wider font-medium px-2 py-0.5 rounded-sm">
                  {item.category}
                </span>
              </div>

              {/* Compact Card Details */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3
                    id={`dish-title-${item.id}`}
                    className="font-serif-heading text-lg sm:text-xl font-bold text-[#242220] tracking-tight group-hover:text-[#B9381E] transition-colors"
                  >
                    {item.name}
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-[13px] text-[#686157] line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#F0EBE1] flex items-center justify-between text-xs">
                  <span className="text-[#842A17] font-semibold">
                    {item.price ? item.price : 'Daily Market Price'}
                  </span>
                  <button
                    type="button"
                    onClick={() => setSelectedDish(item)}
                    className="text-[#4D4740] hover:text-[#B9381E] font-medium underline underline-offset-2 transition-colors cursor-pointer"
                  >
                    Quick View
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View Full Menu Action */}
        <div className="mt-10 sm:mt-12 text-center flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            id="view-full-menu-btn"
            type="button"
            onClick={() => setFullMenuModalOpen(true)}
            className="inline-flex items-center space-x-2 bg-white hover:bg-[#FAF8F5] text-[#242220] border border-[#D5CBC0] px-6 py-3 rounded-full text-sm font-semibold tracking-wide shadow-xs hover:shadow-sm transition-all"
          >
            <span>View Full Menu Information</span>
          </button>

          <a
            id="menu-call-orders-btn"
            href={`tel:${RESTAURANT_DATA.primaryPhone.replace(/\s+/g, '')}`}
            className="inline-flex items-center space-x-2 bg-[#B9381E] hover:bg-[#A32B13] text-white px-6 py-3 rounded-full text-sm font-semibold tracking-wide shadow-xs hover:shadow-sm transition-all"
          >
            <Phone className="w-4 h-4" />
            <span>Call for Daily Specials</span>
          </a>
        </div>
      </div>

      {/* Quick View Dish Modal */}
      {selectedDish && (
        <div
          id="dish-quickview-modal"
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs"
        >
          <div className="bg-[#FAF8F5] rounded-2xl max-w-md w-full overflow-hidden border border-[#EAE3D6] shadow-xl animate-in zoom-in-95 duration-150">
            <div className="relative h-48 w-full bg-[#EFE9DE]">
              <img
                src={selectedDish.image}
                alt={selectedDish.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => setSelectedDish(null)}
                aria-label="Close modal"
                className="absolute top-3 right-3 p-1.5 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-5 sm:p-6">
              <span className="text-xs uppercase font-semibold tracking-wider text-[#842A17]">
                {selectedDish.category}
              </span>
              <h3 className="font-serif-heading text-2xl font-bold text-[#242220] mt-1">
                {selectedDish.name}
              </h3>
              <p className="mt-2 text-sm text-[#5C564E] leading-relaxed">
                {selectedDish.description}
              </p>

              <div className="mt-4 p-3 bg-[#F2EDE4] rounded-xl text-xs text-[#686157] space-y-1">
                <p>
                  <strong>Preparation:</strong> Freshly cooked to order using genuine Pakistani spices.
                </p>
                <p>
                  <strong>Availability:</strong> Contact our kitchen directly at{' '}
                  <span className="font-semibold text-[#242220]">{RESTAURANT_DATA.primaryPhone}</span> for today's daily servings.
                </p>
              </div>

              <div className="mt-5 flex items-center space-x-3">
                <a
                  href={`tel:${RESTAURANT_DATA.primaryPhone.replace(/\s+/g, '')}`}
                  className="flex-1 inline-flex items-center justify-center space-x-2 bg-[#B9381E] hover:bg-[#A32B13] text-white py-2.5 px-4 rounded-xl text-sm font-semibold transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call to Inquire</span>
                </a>
                <button
                  type="button"
                  onClick={() => setSelectedDish(null)}
                  className="px-4 py-2.5 rounded-xl border border-[#D5CBC0] text-sm font-medium text-[#4D4740] hover:bg-[#EAE3D6] transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Full Menu Information Modal */}
      {fullMenuModalOpen && (
        <div
          id="full-menu-info-modal"
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs"
        >
          <div className="bg-[#FAF8F5] rounded-2xl max-w-lg w-full p-6 sm:p-7 border border-[#EAE3D6] shadow-xl animate-in zoom-in-95 duration-150">
            <div className="flex items-start justify-between pb-3 border-b border-[#EAE3D6]">
              <div>
                <h3 className="font-serif-heading text-2xl font-bold text-[#242220]">
                  Full Dining & Daily Menu
                </h3>
                <p className="text-xs text-[#787168] mt-0.5">Spice Kitchen G-6 • Islamabad</p>
              </div>
              <button
                type="button"
                onClick={() => setFullMenuModalOpen(false)}
                aria-label="Close modal"
                className="p-1 rounded-lg text-[#787168] hover:bg-[#EAE3D6] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-4 space-y-3.5 text-sm text-[#4D4740]">
              <p className="leading-relaxed">
                At <strong>Spice Kitchen G-6</strong>, we believe in authentic flavours made with fresh, handpicked spices. Our full menu features seasonal handi preparations, charcoal-grilled skewers, slow-simmered daal, freshly baked tandoori naans, and traditional desserts.
              </p>

              <div className="p-4 bg-[#F4EFE6] rounded-xl border border-[#E2D8C9] space-y-2 text-xs">
                <div className="flex items-center text-[#842A17] font-semibold">
                  <Info className="w-4 h-4 mr-1.5 shrink-0" />
                  <span>Transparent Menu Policy</span>
                </div>
                <p className="text-[#686157]">
                  To guarantee accurate, up-to-date pricing and fresh daily meat cuts, please call our kitchen line. We are happy to share today's available items, special handis, and family platters.
                </p>
              </div>

              <div className="pt-2 space-y-2">
                <div className="flex items-center justify-between text-xs text-[#686157]">
                  <span>Primary Telephone:</span>
                  <a href={`tel:${RESTAURANT_DATA.phones[0].replace(/\s+/g, '')}`} className="font-semibold text-[#B9381E] hover:underline">
                    {RESTAURANT_DATA.phones[0]}
                  </a>
                </div>
                <div className="flex items-center justify-between text-xs text-[#686157]">
                  <span>Secondary Telephone:</span>
                  <a href={`tel:${RESTAURANT_DATA.phones[1].replace(/\s+/g, '')}`} className="font-semibold text-[#B9381E] hover:underline">
                    {RESTAURANT_DATA.phones[1]}
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#EAE3D6] flex items-center justify-end space-x-3">
              <button
                type="button"
                onClick={() => setFullMenuModalOpen(false)}
                className="px-4 py-2.5 rounded-xl border border-[#D5CBC0] text-xs font-medium text-[#4D4740] hover:bg-[#EAE3D6] transition-colors"
              >
                Close
              </button>
              <a
                href={`tel:${RESTAURANT_DATA.primaryPhone.replace(/\s+/g, '')}`}
                className="inline-flex items-center space-x-2 bg-[#B9381E] hover:bg-[#A32B13] text-white py-2.5 px-5 rounded-xl text-xs font-semibold shadow-xs"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Kitchen Now</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
