import { useState } from 'react';
import { Phone, Mail, MapPin, Navigation, Copy, Check, ExternalLink } from 'lucide-react';
import { RESTAURANT_DATA } from '../data/restaurantData';

export function ContactSection() {
  const [copiedPhone, setCopiedPhone] = useState<string | null>(null);

  const copyToClipboard = (text: string, identifier: string) => {
    navigator.clipboard?.writeText(text);
    setCopiedPhone(identifier);
    setTimeout(() => setCopiedPhone(null), 2500);
  };

  const googleMapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    'Spice Kitchen G-6, Khayaban-e-Suhrawardy Road, Islamabad, Pakistan'
  )}`;

  const googleMapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'Khayaban-e-Suhrawardy Road, Islamabad, Pakistan'
  )}`;

  return (
    <section
      id="contact"
      aria-label="Location and Contact Information"
      className="py-16 sm:py-20 lg:py-24 bg-[#FAF8F5] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#EFE7D8] text-[#842A17] text-xs font-semibold uppercase tracking-widest mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>Visit & Contact Us</span>
          </div>
          <h2
            id="contact-title"
            className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#242220] tracking-tight"
          >
            Location & Inquiries
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#686157]">
            Conveniently situated on Khayaban-e-Suhrawardy Road in the heart of Islamabad. Reach out for takeaway orders and daily specials.
          </p>
        </div>

        {/* Two-Column Grid: Contact Information Left, Map Block Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column: Direct Restaurant Details */}
          <div
            id="contact-info-panel"
            className="lg:col-span-5 bg-white rounded-2xl border border-[#EAE3D6] p-6 sm:p-8 shadow-xs flex flex-col justify-between"
          >
            <div className="space-y-6">
              <div>
                <h3 className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#242220]">
                  {RESTAURANT_DATA.name}
                </h3>
                <p className="text-sm text-[#787168] mt-1">
                  Authentic Pakistani cuisine in the Federal Capital
                </p>
              </div>

              {/* Physical Address Block */}
              <div className="flex items-start space-x-3.5 pt-2">
                <div className="w-10 h-10 rounded-xl bg-[#F4EDE2] flex items-center justify-center shrink-0 text-[#B9381E]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase font-semibold text-[#8A8277] tracking-wider">
                    Address
                  </h4>
                  <p className="text-sm sm:text-base font-semibold text-[#242220] mt-0.5">
                    {RESTAURANT_DATA.location}
                  </p>
                  <p className="text-sm text-[#5C564E]">
                    {RESTAURANT_DATA.cityCountry}
                  </p>
                </div>
              </div>

              {/* Telephone Contact Block */}
              <div className="flex items-start space-x-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#F4EDE2] flex items-center justify-center shrink-0 text-[#B9381E]">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xs uppercase font-semibold text-[#8A8277] tracking-wider">
                    Direct Phone Lines
                  </h4>
                  <div className="mt-1 space-y-2">
                    {RESTAURANT_DATA.phones.map((phone, idx) => (
                      <div
                        key={phone}
                        className="flex items-center justify-between bg-[#FAF8F5] px-3 py-2 rounded-lg border border-[#EDE6DA]"
                      >
                        <a
                          href={`tel:${phone.replace(/\s+/g, '')}`}
                          className="text-sm font-semibold text-[#242220] hover:text-[#B9381E] transition-colors"
                        >
                          {phone}
                        </a>
                        <button
                          type="button"
                          onClick={() => copyToClipboard(phone, `phone-${idx}`)}
                          aria-label={`Copy phone number ${phone}`}
                          className="p-1 text-[#787168] hover:text-[#242220] transition-colors"
                        >
                          {copiedPhone === `phone-${idx}` ? (
                            <Check className="w-4 h-4 text-emerald-600" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Email Address Block */}
              <div className="flex items-start space-x-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#F4EDE2] flex items-center justify-center shrink-0 text-[#B9381E]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase font-semibold text-[#8A8277] tracking-wider">
                    Official Email
                  </h4>
                  <a
                    href={`mailto:${RESTAURANT_DATA.email}`}
                    className="text-sm sm:text-base font-semibold text-[#242220] hover:text-[#B9381E] transition-colors mt-0.5 block"
                  >
                    {RESTAURANT_DATA.email}
                  </a>
                </div>
              </div>

              {/* Verified Facebook Community Info */}
              <div className="pt-2 border-t border-[#F0EAE0]">
                <div className="flex items-center justify-between text-xs text-[#686157] bg-[#F7F4EE] p-3 rounded-xl border border-[#E8DFD1]">
                  <div>
                    <span className="font-semibold text-[#242220] block">Official Facebook Page</span>
                    <span>Community of 1.1K Followers</span>
                  </div>
                  <a
                    href={RESTAURANT_DATA.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 text-[#842A17] hover:text-[#B9381E] font-medium"
                  >
                    <span>View</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Action Buttons: [Call Now] & [Get Directions] */}
            <div className="mt-8 pt-5 border-t border-[#EAE3D6] grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                id="contact-call-now-btn"
                href={`tel:${RESTAURANT_DATA.primaryPhone.replace(/\s+/g, '')}`}
                className="inline-flex items-center justify-center space-x-2 bg-[#B9381E] hover:bg-[#A32B13] text-white py-3 px-4 rounded-xl text-sm font-semibold tracking-wide shadow-xs transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </a>

              <a
                id="contact-directions-btn"
                href={googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 bg-white hover:bg-[#FAF8F5] text-[#242220] border border-[#D5CBC0] py-3 px-4 rounded-xl text-sm font-semibold tracking-wide shadow-2xs transition-colors"
              >
                <Navigation className="w-4 h-4 text-[#B9381E]" />
                <span>Get Directions</span>
              </a>
            </div>
          </div>

          {/* Right Column: Clean Embedded Map Container */}
          <div
            id="location-map-container"
            className="lg:col-span-7 bg-white rounded-2xl border border-[#EAE3D6] overflow-hidden shadow-xs flex flex-col min-h-[380px] sm:min-h-[460px]"
          >
            {/* Map Header Bar */}
            <div className="bg-[#FAF8F5] px-5 py-3.5 border-b border-[#EAE3D6] flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-[#B9381E]" />
                <span className="text-xs sm:text-sm font-semibold text-[#242220]">
                  Khayaban-e-Suhrawardy Road • Sector G-6, Islamabad
                </span>
              </div>
              <a
                href={googleMapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#842A17] hover:text-[#B9381E] font-medium inline-flex items-center space-x-1"
              >
                <span>Full Map</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Embedded Interactive Map for Khayaban-e-Suhrawardy Road, Islamabad */}
            <div className="relative flex-1 w-full h-full min-h-[320px] bg-[#EAE3D6]/40">
              <iframe
                title="Spice Kitchen G-6 Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13279.400494951475!2d73.0750!3d33.7144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbf9df159ec39%3A0xb366b26d577e025a!2sKhayaban-e-Suhrawardy%2C%20Islamabad!5e0!3m2!1sen!2spk!4v1710000000000!5m2!1sen!2spk"
                className="w-full h-full border-0 absolute inset-0"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Floating Map Pin Badge */}
              <div className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur-xs border border-[#D5CBC0] rounded-xl p-3 shadow-md pointer-events-none max-w-xs">
                <div className="flex items-center space-x-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#B9381E] animate-pulse" />
                  <span className="font-semibold text-xs text-[#242220]">Spice Kitchen G-6</span>
                </div>
                <p className="text-[11px] text-[#686157] mt-1">
                  Khayaban-e-Suhrawardy Road, Islamabad
                </p>
              </div>
            </div>

            {/* Map Action Footer */}
            <div className="bg-[#FAF8F5] p-4 border-t border-[#EAE3D6] flex flex-wrap items-center justify-between gap-3 text-xs">
              <span className="text-[#686157]">
                Convenient street parking and central access from Blue Area, G-6, and G-7.
              </span>
              <a
                href={googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#842A17] hover:text-[#B9381E] inline-flex items-center space-x-1"
              >
                <span>Navigate on Google Maps</span>
                <Navigation className="w-3.5 h-3.5 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
