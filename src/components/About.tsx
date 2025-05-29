
import { Calendar, Users, Target, Sparkles } from "lucide-react";

export const About = () => {
  const timeline = [
    {
      date: "Mid 2024",
      title: "The Beginning",
      description: "Started as @ds.love_editz on Instagram, focusing on creative editing and digital content."
    },
    {
      date: "May - Dec 2024",
      title: "Research Phase",
      description: "Deep dive into UI/UX research, studying top websites and learning modern design principles."
    },
    {
      date: "March 2025",
      title: "Development Launch",
      description: "Official launch of DS Labs as a full-fledged tech development group."
    },
    {
      date: "Present",
      title: "Building the Future",
      description: "Actively developing open-source projects and creating educational content."
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-neon-purple/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-neon-green/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold gradient-text mb-6">
            About DS Labs
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From creative editing to cutting-edge development, discover our journey and vision for the future of technology.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="glass-card p-8 rounded-2xl hover:neon-border transition-all duration-300">
            <div className="text-neon-blue mb-6">
              <Target size={48} />
            </div>
            <h3 className="text-2xl font-heading font-semibold text-white mb-4">
              Our Mission
            </h3>
            <p className="text-gray-400 leading-relaxed">
              To democratize technology education and create innovative open-source solutions that empower developers and creators worldwide. We believe in the power of community-driven development and knowledge sharing.
            </p>
          </div>

          <div className="glass-card p-8 rounded-2xl hover:neon-border transition-all duration-300">
            <div className="text-neon-pink mb-6">
              <Sparkles size={48} />
            </div>
            <h3 className="text-2xl font-heading font-semibold text-white mb-4">
              Our Vision
            </h3>
            <p className="text-gray-400 leading-relaxed">
              To become a leading force in open-source innovation, bridging the gap between creative design and robust development while fostering a community of ethical hackers and passionate developers.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <h3 className="text-3xl font-heading font-bold text-center gradient-text mb-12">
            Our Journey
          </h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-neon-blue via-neon-purple to-neon-pink"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="glass-card p-6 rounded-2xl hover:neon-border transition-all duration-300">
                      <div className="text-neon-blue font-semibold mb-2">{item.date}</div>
                      <h4 className="text-xl font-heading font-semibold text-white mb-3">{item.title}</h4>
                      <p className="text-gray-400 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-neon-blue rounded-full animate-pulse"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team & Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="glass-card p-8 rounded-2xl text-center hover:neon-border transition-all duration-300">
            <div className="text-neon-green mb-4 flex justify-center">
              <Users size={48} />
            </div>
            <h4 className="text-xl font-heading font-semibold text-white mb-3">Community First</h4>
            <p className="text-gray-400">Everything we build is for and with the community. Open-source is in our DNA.</p>
          </div>

          <div className="glass-card p-8 rounded-2xl text-center hover:neon-border transition-all duration-300">
            <div className="text-neon-purple mb-4 flex justify-center">
              <Calendar size={48} />
            </div>
            <h4 className="text-xl font-heading font-semibold text-white mb-3">Continuous Learning</h4>
            <p className="text-gray-400">We're always evolving, learning new technologies and improving our skills.</p>
          </div>

          <div className="glass-card p-8 rounded-2xl text-center hover:neon-border transition-all duration-300">
            <div className="text-neon-pink mb-4 flex justify-center">
              <Sparkles size={48} />
            </div>
            <h4 className="text-xl font-heading font-semibold text-white mb-3">Innovation</h4>
            <p className="text-gray-400">Pushing boundaries and creating solutions that make a real difference.</p>
          </div>
        </div>

        {/* Instagram Connection */}
        <div className="glass-card p-8 rounded-2xl text-center max-w-2xl mx-auto">
          <h3 className="text-2xl font-heading font-semibold gradient-text mb-4">
            Follow Our Journey
          </h3>
          <p className="text-gray-400 mb-6">
            Connect with us on Instagram where it all started. See behind-the-scenes content, 
            development updates, and join our growing community.
          </p>
          <a 
            href="https://instagram.com/ds.love_editz" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 glass-card px-6 py-3 rounded-full neon-border text-neon-pink hover:bg-neon-pink hover:text-black transition-all duration-300 font-medium"
          >
            <span>@ds.love_editz</span>
          </a>
        </div>

        {/* Bottom Gradient Divider */}
        <div className="mt-20 h-px bg-gradient-to-r from-transparent via-neon-blue to-transparent"></div>
      </div>
    </section>
  );
};
