
import { Gift, DollarSign, Heart } from "lucide-react";

export const Support = () => {
  const handleGiftCardSupport = () => {
    const subject = encodeURIComponent("Support DS Labs with a Gift Card");
    const body = encodeURIComponent(
      `Hi DS Labs,

I would like to send a gift card to support your project. Here are the details:

Gift Card Brand: 
Amount: 
Code: 

Keep building awesome tech!`
    );
    window.location.href = `mailto:ds.editz3424@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleAirtmSupport = () => {
    window.open("https://airtm.me/suryarat4hg18el8", "_blank");
  };

  return (
    <section id="support" className="py-20 relative">
      {/* Background Glow Effects */}
      <div className="absolute top-10 left-1/4 w-64 h-64 bg-neon-pink/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-1/4 w-64 h-64 bg-neon-blue/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold gradient-text mb-6">
            Support DS Labs
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Help us continue building amazing open-source projects and educational content. 
            Your support makes a real difference in our mission.
          </p>
        </div>

        {/* Support Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {/* Gift Card Support */}
          <div className="glass-card p-8 rounded-2xl hover:neon-border transition-all duration-300 group">
            <div className="text-neon-pink mb-6 group-hover:animate-pulse">
              <Gift size={48} />
            </div>
            <h3 className="text-2xl font-heading font-semibold text-white mb-4">
              Send Gift Card
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Support us with gift cards from popular platforms. This helps us cover development costs and continue our open-source work.
            </p>
            <button 
              onClick={handleGiftCardSupport}
              className="w-full glass-card px-6 py-3 rounded-full neon-border text-neon-pink hover:bg-neon-pink hover:text-black transition-all duration-300 font-medium group-hover:animate-neon-pulse"
            >
              Send Gift Card
            </button>
          </div>

          {/* Airtm Support */}
          <div className="glass-card p-8 rounded-2xl hover:neon-border transition-all duration-300 group">
            <div className="text-neon-blue mb-6 group-hover:animate-pulse">
              <DollarSign size={48} />
            </div>
            <h3 className="text-2xl font-heading font-semibold text-white mb-4">
              Donate via Airtm
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Make a direct donation through Airtm. Every contribution helps us maintain our projects and create new educational content.
            </p>
            <button 
              onClick={handleAirtmSupport}
              className="w-full glass-card px-6 py-3 rounded-full neon-border text-neon-blue hover:bg-neon-blue hover:text-black transition-all duration-300 font-medium group-hover:animate-neon-pulse"
            >
              Donate via Airtm
            </button>
          </div>
        </div>

        {/* Why Support Section */}
        <div className="glass-card p-8 rounded-2xl max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="text-neon-green mb-4 flex justify-center">
              <Heart size={48} />
            </div>
            <h3 className="text-2xl font-heading font-semibold text-white mb-4">
              Why Your Support Matters
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-neon-blue mb-2">100%</div>
              <div className="text-gray-400">Open Source</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-neon-pink mb-2">Self</div>
              <div className="text-gray-400">Funded</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-neon-purple mb-2">Community</div>
              <div className="text-gray-400">Driven</div>
            </div>
          </div>

          <p className="text-gray-300 text-center mt-6 max-w-2xl mx-auto">
            DS Labs is entirely self-funded and community-supported. We believe in keeping our projects free and accessible to everyone while maintaining the highest quality standards.
          </p>
        </div>

        {/* Bottom Gradient Divider */}
        <div className="mt-20 h-px bg-gradient-to-r from-transparent via-neon-green to-transparent"></div>
      </div>
    </section>
  );
};
