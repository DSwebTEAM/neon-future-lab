
export const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Gradient Orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-neon-blue/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-neon-pink/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-neon-purple/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Logo/Brand */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-heading font-bold gradient-text mb-4 animate-glow">
            DS Labs
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-neon-blue to-neon-pink mx-auto rounded-full"></div>
        </div>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto font-medium">
          Building the future, one open-source project at a time.
        </p>

        {/* CTA Button */}
        <button 
          onClick={scrollToProjects}
          className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white glass-card neon-border rounded-full overflow-hidden transition-all duration-300 hover:scale-105 animate-neon-pulse"
        >
          <span className="relative z-10">Explore Our Projects</span>
          <div className="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-purple opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
        </button>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="glass-card p-6 rounded-2xl">
            <div className="text-3xl font-bold text-neon-blue mb-2">2024</div>
            <div className="text-gray-400 text-sm">Founded</div>
          </div>
          <div className="glass-card p-6 rounded-2xl">
            <div className="text-3xl font-bold text-neon-pink mb-2">Open</div>
            <div className="text-gray-400 text-sm">Source</div>
          </div>
          <div className="glass-card p-6 rounded-2xl">
            <div className="text-3xl font-bold text-neon-purple mb-2">India</div>
            <div className="text-gray-400 text-sm">Based</div>
          </div>
          <div className="glass-card p-6 rounded-2xl">
            <div className="text-3xl font-bold text-neon-green mb-2">Tech</div>
            <div className="text-gray-400 text-sm">Innovation</div>
          </div>
        </div>
      </div>
    </section>
  );
};
