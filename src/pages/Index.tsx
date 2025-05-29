
import { Hero } from "@/components/Hero";
import { Navigation } from "@/components/Navigation";
import { WhatWeDo } from "@/components/WhatWeDo";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { Support } from "@/components/Support";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      {/* Floating Particles Background */}
      <div className="floating-particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>
      
      <Navigation />
      <Hero />
      <WhatWeDo />
      <FeaturedProjects />
      <Support />
      <About />
      <Footer />
    </div>
  );
};

export default Index;
