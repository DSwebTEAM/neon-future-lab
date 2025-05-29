
import { Code, Smartphone, Shield, Heart } from "lucide-react";

export const WhatWeDo = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Modern, responsive websites built with cutting-edge technologies and best practices.",
      color: "text-neon-blue"
    },
    {
      icon: Smartphone,
      title: "App Development",
      description: "Cross-platform mobile applications that deliver exceptional user experiences.",
      color: "text-neon-pink"
    },
    {
      icon: Shield,
      title: "Security Education",
      description: "Ethical hacking courses and cybersecurity training for the next generation.",
      color: "text-neon-purple"
    },
    {
      icon: Heart,
      title: "Open Source",
      description: "Contributing to the community with free, open-source projects and tools.",
      color: "text-neon-green"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold gradient-text mb-6">
            What We Do
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're passionate about technology and committed to building solutions that make a difference.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group glass-card p-8 rounded-2xl hover:neon-border transition-all duration-300 hover:scale-105"
            >
              <div className={`${service.color} mb-6 group-hover:animate-pulse`}>
                <service.icon size={48} />
              </div>
              <h3 className="text-xl font-heading font-semibold text-white mb-4">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Gradient Divider */}
        <div className="mt-20 h-px bg-gradient-to-r from-transparent via-neon-blue to-transparent"></div>
      </div>
    </section>
  );
};
