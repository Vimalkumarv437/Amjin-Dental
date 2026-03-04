import Navbar from "./components/dental/Navbar";
import HeroSection from "./components/dental/HeroSection";
import ServicesSection from "./components/dental/ServicesSection";
import AboutSection from "./components/dental/AboutSection";
import ProcessSection from "./components/dental/ProcessSection";
import StatsSection from "./components/dental/StatsSection";
import TeamSection from "./components/dental/TeamSection";
import TestimonialsSection from "./components/dental/TestimonialsSection";
import CTASection from "./components/dental/CTASection";
import BlogSection from "./components/dental/BlogSection";
import Footer from "./components/dental/Footer";

const Index = () => {
  return (
    <div style={{ minHeight: '100vh' }}>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ProcessSection />
      <StatsSection />
      <TeamSection />
      <TestimonialsSection />
      <CTASection />
      <BlogSection />
      <Footer />
    </div>
  );
};

export default Index;
