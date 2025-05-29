
import { Mail, Instagram, DollarSign, Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleEmailClick = () => {
    window.location.href = "mailto:ds.editz3424@gmail.com";
  };

  const handleInstagramClick = () => {
    window.open("https://instagram.com/ds.love_editz", "_blank");
  };

  const handleAirtmClick = () => {
    window.open("https://airtm.me/suryarat4hg18el8", "_blank");
  };

  return (
    <footer id="contact" className="py-16 relative">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-32 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink opacity-20 blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="glass-card p-12 rounded-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Brand Section */}
            <div className="text-center lg:text-left">
              <h3 className="text-3xl font-heading font-bold gradient-text mb-4">
                DS Labs
              </h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                Building the future, one open-source project at a time. 
                Join us in our mission to democratize technology and create amazing solutions.
              </p>
              <div className="flex items-center justify-center lg:justify-start gap-2 text-neon-pink">
                <Heart size={20} />
                <span className="text-sm">Made with love in India</span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="text-center">
              <h4 className="text-xl font-heading font-semibold text-white mb-6">
                Quick Links
              </h4>
              <div className="space-y-3">
                <button 
                  onClick={() => document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" })}
                  className="block mx-auto text-gray-400 hover:text-neon-blue transition-colors duration-300"
                >
                  Home
                </button>
                <button 
                  onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                  className="block mx-auto text-gray-400 hover:text-neon-blue transition-colors duration-300"
                >
                  Projects
                </button>
                <button 
                  onClick={() => document.getElementById("support")?.scrollIntoView({ behavior: "smooth" })}
                  className="block mx-auto text-gray-400 hover:text-neon-blue transition-colors duration-300"
                >
                  Support Us
                </button>
                <button 
                  onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                  className="block mx-auto text-gray-400 hover:text-neon-blue transition-colors duration-300"
                >
                  About
                </button>
              </div>
            </div>

            {/* Contact & Social */}
            <div className="text-center lg:text-right">
              <h4 className="text-xl font-heading font-semibold text-white mb-6">
                Connect With Us
              </h4>
              <div className="space-y-4">
                <button 
                  onClick={handleEmailClick}
                  className="flex items-center justify-center lg:justify-end gap-3 mx-auto lg:mx-0 text-gray-400 hover:text-neon-blue transition-colors duration-300 group"
                >
                  <Mail size={20} className="group-hover:animate-pulse" />
                  <span>ds.editz3424@gmail.com</span>
                </button>
                <button 
                  onClick={handleInstagramClick}
                  className="flex items-center justify-center lg:justify-end gap-3 mx-auto lg:mx-0 text-gray-400 hover:text-neon-pink transition-colors duration-300 group"
                >
                  <Instagram size={20} className="group-hover:animate-pulse" />
                  <span>@ds.love_editz</span>
                </button>
                <button 
                  onClick={handleAirtmClick}
                  className="flex items-center justify-center lg:justify-end gap-3 mx-auto lg:mx-0 text-gray-400 hover:text-neon-green transition-colors duration-300 group"
                >
                  <DollarSign size={20} className="group-hover:animate-pulse" />
                  <span>Support via Airtm</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-center md:text-left">
              © {currentYear} DS Labs. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <button className="text-gray-400 hover:text-neon-blue transition-colors duration-300 text-sm">
                Privacy Policy
              </button>
              <button className="text-gray-400 hover:text-neon-blue transition-colors duration-300 text-sm">
                Terms of Service
              </button>
              <button className="text-gray-400 hover:text-neon-blue transition-colors duration-300 text-sm">
                Open Source
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
