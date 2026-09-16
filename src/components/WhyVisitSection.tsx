import { Flame, Sparkles, HeartHandshake, MapPin } from 'lucide-react';
import { WHY_VISIT_POINTS } from '../data/restaurantData';

export function WhyVisitSection() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Flame':
        return <Flame className="w-6 h-6 text-[#B9381E]" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#C98A2C]" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6 text-[#B9381E]" />;
      case 'MapPin':
        return <MapPin className="w-6 h-6 text-[#C98A2C]" />;
      default:
        return <Flame className="w-6 h-6 text-[#B9381E]" />;
    }
  };

  return (
    <section
      id="why-visit"
      aria-label="Why Visit Spice Kitchen G-6"
      className="py-16 sm:py-20 bg-[#F4F0E8] border-t border-b border-[#EAE3D6]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#842A17]">
            Distinctive Dining
          </span>
          <h2
            id="why-visit-title"
            className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#242220] tracking-tight mt-1.5"
          >
            Why Dine With Us
          </h2>
          <p className="mt-2.5 text-sm sm:text-base text-[#686157]">
            Rooted in authentic Pakistani culinary customs and genuine warmth in the capital.
          </p>
        </div>

        <div
          id="why-visit-cards-grid"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {WHY_VISIT_POINTS.map((point) => (
            <div
              key={point.id}
              id={`why-point-${point.id}`}
              className="bg-[#FAF8F5] rounded-xl p-6 border border-[#E5DDD0] shadow-2xs hover:shadow-xs transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white border border-[#EAE3D6] flex items-center justify-center mb-4 shadow-2xs">
                  {getIcon(point.iconName)}
                </div>
                <h3
                  id={`why-title-${point.id}`}
                  className="font-serif-heading text-xl font-bold text-[#242220] tracking-tight"
                >
                  {point.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-[#615B52] leading-relaxed">
                  {point.description}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#EDE6DA] text-[11px] font-medium text-[#842A17]">
                Spice Kitchen G-6
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
