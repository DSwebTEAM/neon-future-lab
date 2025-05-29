
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "glass-card neon-border" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-heading font-bold gradient-text">
            DS Labs
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection("hero")}
              className="text-white hover:text-neon-blue transition-colors duration-300 font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection("projects")}
              className="text-white hover:text-neon-blue transition-colors duration-300 font-medium"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection("support")}
              className="text-white hover:text-neon-blue transition-colors duration-300 font-medium"
            >
              Support
            </button>
            <button 
              onClick={() => scrollToSection("about")}
              className="text-white hover:text-neon-blue transition-colors duration-300 font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="glass-card px-6 py-2 rounded-full neon-border text-neon-blue hover:bg-neon-blue hover:text-black transition-all duration-300 font-medium"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 glass-card rounded-2xl p-6">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection("hero")}
                className="text-white hover:text-neon-blue transition-colors duration-300 font-medium text-left"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection("projects")}
                className="text-white hover:text-neon-blue transition-colors duration-300 font-medium text-left"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection("support")}
                className="text-white hover:text-neon-blue transition-colors duration-300 font-medium text-left"
              >
                Support
              </button>
              <button 
                onClick={() => scrollToSection("about")}
                className="text-white hover:text-neon-blue transition-colors duration-300 font-medium text-left"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection("contact")}
                className="text-white hover:text-neon-blue transition-colors duration-300 font-medium text-left"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
