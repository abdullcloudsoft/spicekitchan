import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedMenu } from './components/FeaturedMenu';
import { AboutSection } from './components/AboutSection';
import { WhyVisitSection } from './components/WhyVisitSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Chatbot } from './components/Chatbot';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#242220] selection:bg-[#B9381E] selection:text-white">
      {/* Sticky Top Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main id="main-content" className="flex-grow">
        {/* Single High-Resolution Food Hero Section */}
        <Hero />

        {/* Curated Featured Menu (7 Specialities with Compact Cards) */}
        <FeaturedMenu />

        {/* Authentic About Section (Split Layout with Unique Dining Photo) */}
        <AboutSection />

        {/* Why Visit Highlights (4 Concise Real Value Points) */}
        <WhyVisitSection />

        {/* Verified Contact & Embedded Islamabad Location Map */}
        <ContactSection />
      </main>

      {/* Compact Site Footer */}
      <Footer />

      {/* Floating Verified Information Restaurant Assistant */}
      <Chatbot />
    </div>
  );
}
