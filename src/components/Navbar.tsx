import { useState, useEffect } from 'react';
import { Phone, Menu as MenuIcon, X } from 'lucide-react';
import { RESTAURANT_DATA } from '../data/restaurantData';

interface NavbarProps {
  onOpenMenuModal?: () => void;
}

export function Navbar({ onOpenMenuModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Menu', href: '#menu' },
    { name: 'About', href: '#about' },
    { name: 'Why Us', href: '#why-visit' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-xs border-b border-[#EAE3D6] py-3.5'
          : 'bg-[#FAF8F5]/90 backdrop-blur-sm border-b border-[#EAE3D6]/70 py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand Name */}
          <a
            id="nav-logo"
            href="#home"
            className="group flex flex-col focus:outline-hidden"
          >
            <span className="font-serif-heading text-xl sm:text-2xl font-bold tracking-wider text-[#242220] group-hover:text-[#B9381E] transition-colors">
              SPICE KITCHEN G-6
            </span>
            <span className="text-[10px] sm:text-[11px] uppercase tracking-widest text-[#787168] -mt-0.5">
              Islamabad • Authentic Flavours
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav id="desktop-nav" aria-label="Primary" className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                id={`nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                href={link.href}
                className="text-sm font-medium text-[#4D4740] hover:text-[#B9381E] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#B9381E] after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Side Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              id="nav-call-btn-desktop"
              href={`tel:${RESTAURANT_DATA.primaryPhone.replace(/\s+/g, '')}`}
              className="inline-flex items-center space-x-2 bg-[#B9381E] hover:bg-[#A32B13] active:bg-[#8F240F] text-white px-5 py-2.5 rounded-full text-sm font-medium tracking-wide shadow-xs transition-all duration-150 transform hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4 text-white" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center space-x-2">
            <a
              id="nav-call-btn-mobile-quick"
              href={`tel:${RESTAURANT_DATA.primaryPhone.replace(/\s+/g, '')}`}
              aria-label="Call restaurant directly"
              className="p-2.5 text-[#B9381E] bg-[#F4EDE2] rounded-full hover:bg-[#EBE2D4] transition-colors"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-[#332F2B] hover:bg-[#EFEAE2] transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-[#242220]" />
              ) : (
                <MenuIcon className="w-6 h-6 text-[#242220]" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Collapse Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-dropdown-menu"
          className="md:hidden bg-[#FAF8F5] border-b border-[#EAE3D6] px-4 pt-3 pb-6 space-y-3 shadow-md animate-in fade-in slide-in-from-top-2 duration-150"
        >
          <nav className="flex flex-col space-y-2 pt-1" aria-label="Mobile Primary">
            {navLinks.map((link) => (
              <a
                key={link.name}
                id={`mobile-nav-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 text-base font-medium text-[#332F2B] hover:bg-[#EFEAE2] rounded-md transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="pt-3 border-t border-[#EAE3D6] space-y-2">
            <a
              id="mobile-drawer-call-btn"
              href={`tel:${RESTAURANT_DATA.primaryPhone.replace(/\s+/g, '')}`}
              className="w-full flex items-center justify-center space-x-2 bg-[#B9381E] text-white py-3 rounded-xl font-medium text-sm shadow-xs"
            >
              <Phone className="w-4 h-4" />
              <span>Call {RESTAURANT_DATA.primaryPhone}</span>
            </a>
            <p className="text-center text-xs text-[#787168] pt-1">
              Khayaban-e-Suhrawardy Road, Islamabad
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
