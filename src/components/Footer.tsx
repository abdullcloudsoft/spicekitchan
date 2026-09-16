import { Phone, Mail, ExternalLink, ArrowUp } from 'lucide-react';
import { RESTAURANT_DATA } from '../data/restaurantData';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="site-footer"
      className="bg-[#211E1B] text-[#E8DFD1] pt-12 pb-8 border-t border-[#36322E]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-[#36322E]/80">
          {/* Brand & Address */}
          <div className="md:col-span-5 space-y-3">
            <h3 className="font-serif-heading text-2xl font-bold text-white tracking-wider">
              {RESTAURANT_DATA.name}
            </h3>
            <p className="text-xs text-[#B5AEA5]">
              Authentic Pakistani Flavours in Islamabad
            </p>
            <p className="text-xs text-[#9E978E] leading-relaxed max-w-sm pt-1">
              {RESTAURANT_DATA.location}, {RESTAURANT_DATA.cityCountry}
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-semibold text-white tracking-widest">
              Navigation
            </h4>
            <nav className="flex flex-col space-y-2 text-xs text-[#B5AEA5]" aria-label="Footer Navigation">
              <a href="#home" className="hover:text-white transition-colors">
                Home
              </a>
              <a href="#menu" className="hover:text-white transition-colors">
                Menu
              </a>
              <a href="#about" className="hover:text-white transition-colors">
                About
              </a>
              <a href="#why-visit" className="hover:text-white transition-colors">
                Why Visit
              </a>
              <a href="#contact" className="hover:text-white transition-colors">
                Contact
              </a>
            </nav>
          </div>

          {/* Contact Lines & Facebook */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs uppercase font-semibold text-white tracking-widest">
              Connect With Us
            </h4>
            <div className="space-y-2 text-xs text-[#B5AEA5]">
              <div className="flex items-center space-x-2">
                <Phone className="w-3.5 h-3.5 text-[#B9381E] shrink-0" />
                <a
                  href={`tel:${RESTAURANT_DATA.primaryPhone.replace(/\s+/g, '')}`}
                  className="hover:text-white transition-colors"
                >
                  {RESTAURANT_DATA.primaryPhone}
                </a>
                <span className="text-[#686157]">•</span>
                <a
                  href={`tel:${RESTAURANT_DATA.phones[1].replace(/\s+/g, '')}`}
                  className="hover:text-white transition-colors"
                >
                  {RESTAURANT_DATA.phones[1]}
                </a>
              </div>

              <div className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-[#B9381E] shrink-0" />
                <a
                  href={`mailto:${RESTAURANT_DATA.email}`}
                  className="hover:text-white transition-colors"
                >
                  {RESTAURANT_DATA.email}
                </a>
              </div>

              <div className="pt-2">
                <a
                  href={RESTAURANT_DATA.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 text-xs text-[#EAE3D6] hover:text-[#B9381E] bg-[#2E2A26] px-3 py-1.5 rounded-lg border border-[#423C36] transition-colors"
                >
                  <span>Facebook ({RESTAURANT_DATA.facebookFollowers} Followers)</span>
                  <ExternalLink className="w-3 h-3 text-[#B5AEA5]" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Copyright and Back-to-Top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#787168] gap-3">
          <p>© Spice Kitchen G-6. All rights reserved.</p>
          <div className="flex items-center space-x-4">
            <span className="text-[11px] text-[#615B52]">
              Khayaban-e-Suhrawardy Road, Islamabad
            </span>
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="p-1.5 rounded-lg bg-[#2E2A26] text-[#B5AEA5] hover:text-white hover:bg-[#3D3731] transition-colors cursor-pointer"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
