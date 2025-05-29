
import { ExternalLink, Github } from "lucide-react";

export const FeaturedProjects = () => {
  const projects = [
    {
      title: "Portfolio Website Builder",
      description: "An open-source tool that helps developers create stunning portfolio websites with minimal effort.",
      status: "In Development",
      tech: ["React", "TypeScript", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      demoLink: "#",
      githubLink: "#"
    },
    {
      title: "Secure Chat Application",
      description: "End-to-end encrypted messaging platform showcasing cybersecurity best practices.",
      status: "Beta",
      tech: ["Node.js", "WebSocket", "Encryption"],
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop",
      demoLink: "#",
      githubLink: "#"
    },
    {
      title: "Learning Management System",
      description: "Educational platform designed for our ethical hacking and development courses.",
      status: "Coming Soon",
      tech: ["Next.js", "PostgreSQL", "Prisma"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      demoLink: "#",
      githubLink: "#"
    },
    {
      title: "API Security Toolkit",
      description: "Collection of tools and utilities for testing and securing REST APIs.",
      status: "Planning",
      tech: ["Python", "FastAPI", "Security"],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
      demoLink: "#",
      githubLink: "#"
    },
    {
      title: "Mobile Task Manager",
      description: "Cross-platform productivity app with advanced features and beautiful UI.",
      status: "Prototype",
      tech: ["React Native", "Firebase", "Redux"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
      demoLink: "#",
      githubLink: "#"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Beta": return "bg-neon-green/20 text-neon-green";
      case "In Development": return "bg-neon-blue/20 text-neon-blue";
      case "Coming Soon": return "bg-neon-purple/20 text-neon-purple";
      case "Planning": return "bg-neon-pink/20 text-neon-pink";
      case "Prototype": return "bg-yellow-500/20 text-yellow-400";
      default: return "bg-gray-500/20 text-gray-400";
    }
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold gradient-text mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our latest innovations and open-source contributions that are shaping the future of technology.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group glass-card rounded-2xl overflow-hidden hover:neon-border transition-all duration-300 hover:scale-105"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-heading font-semibold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-white/10 text-gray-300 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-4">
                  <a 
                    href={project.demoLink}
                    className="flex items-center gap-2 text-neon-blue hover:text-white transition-colors duration-300"
                  >
                    <ExternalLink size={18} />
                    <span className="text-sm font-medium">Demo</span>
                  </a>
                  <a 
                    href={project.githubLink}
                    className="flex items-center gap-2 text-neon-pink hover:text-white transition-colors duration-300"
                  >
                    <Github size={18} />
                    <span className="text-sm font-medium">Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center">
          <button className="glass-card px-8 py-3 rounded-full neon-border text-neon-blue hover:bg-neon-blue hover:text-black transition-all duration-300 font-medium">
            View All Projects
          </button>
        </div>

        {/* Bottom Gradient Divider */}
        <div className="mt-20 h-px bg-gradient-to-r from-transparent via-neon-purple to-transparent"></div>
      </div>
    </section>
  );
};
