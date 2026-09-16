import { Phone, MapPin, Heart } from 'lucide-react';
import { RESTAURANT_DATA, RESTAURANT_IMAGES } from '../data/restaurantData';

export function AboutSection() {
  return (
    <section
      id="about"
      aria-label="About Spice Kitchen G-6"
      className="py-16 sm:py-20 lg:py-24 bg-[#FAF8F5] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split Layout: LEFT = High Quality Image, RIGHT = Short Restaurant Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* LEFT: Distinct High-Quality Restaurant & Dining Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#E7DFC6] shadow-md bg-[#F2EDE4]">
              <img
                id="about-restaurant-image"
                src={RESTAURANT_IMAGES.about}
                alt="Dining table setting at Spice Kitchen G-6 featuring warm rotis, clay vessels and authentic Pakistani dishes in Islamabad"
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-[340px] sm:h-[420px] object-cover object-center"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-[#FAF8F5]/95 backdrop-blur-xs p-3.5 rounded-xl border border-[#EAE3D6] shadow-xs flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold text-[#242220]">Spice Kitchen G-6</p>
                  <p className="text-[11px] text-[#787168]">Khayaban-e-Suhrawardy Road, Islamabad</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#F4ECE0] flex items-center justify-center shrink-0">
                  <Heart className="w-4 h-4 text-[#B9381E]" />
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Short, Authentic Restaurant Introduction */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-5">
            <div>
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#F2EAE0] text-[#842A17] text-xs font-semibold uppercase tracking-wider mb-2">
                <span>Authentic Dining</span>
              </div>
              <h2
                id="about-heading"
                className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#242220] tracking-tight leading-tight"
              >
                Celebrating the Rich Flavours of Pakistan
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#524B43] leading-relaxed">
              Located on Khayaban-e-Suhrawardy Road in Sector G-6, Islamabad, <strong>Spice Kitchen G-6</strong> brings authentic Pakistani flavours directly to your table. We focus on genuine culinary heritage — combining freshly ground spices, slow-cooked gravies, and aromatic clay-oven breads.
            </p>

            <p className="text-sm sm:text-base text-[#524B43] leading-relaxed">
              Whether you are craving a sizzling traditional karahi, fragrant basmati rice dishes, or freshly flame-grilled kababs, we are dedicated to providing fresh and delicious food in a comfortable, welcoming environment for families, friends, and food lovers across the capital.
            </p>

            {/* Quick Highlights based solely on real facts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start space-x-3 p-3 rounded-xl bg-[#F5EFE6] border border-[#E8DFC0]">
                <MapPin className="w-4 h-4 text-[#B9381E] mt-0.5 shrink-0" />
                <div className="text-xs">
                  <span className="font-semibold text-[#242220] block">Islamabad G-6 Sector</span>
                  <span className="text-[#686157]">Easy access via Khayaban-e-Suhrawardy</span>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3 rounded-xl bg-[#F5EFE6] border border-[#E8DFC0]">
                <Phone className="w-4 h-4 text-[#B9381E] mt-0.5 shrink-0" />
                <div className="text-xs">
                  <span className="font-semibold text-[#242220] block">Direct Inquiries</span>
                  <span className="text-[#686157]">{RESTAURANT_DATA.primaryPhone}</span>
                </div>
              </div>
            </div>

            {/* Action Call */}
            <div className="pt-2">
              <a
                id="about-call-cta"
                href={`tel:${RESTAURANT_DATA.primaryPhone.replace(/\s+/g, '')}`}
                className="inline-flex items-center space-x-2 bg-[#B9381E] hover:bg-[#A32B13] text-white px-6 py-3 rounded-full text-sm font-semibold tracking-wide shadow-xs hover:shadow-sm transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Call for Inquiries: {RESTAURANT_DATA.primaryPhone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
