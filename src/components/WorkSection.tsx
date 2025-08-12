import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';
import project3 from '@/assets/project-3.jpg';

const projects = [
  {
    id: 1,
    title: "Nexus Dashboard",
    description: "A comprehensive analytics platform with real-time data visualization and AI-powered insights.",
    image: project1,
    tags: ["React", "TypeScript", "D3.js", "Node.js"],
    github: "#",
    live: "#"
  },
  {
    id: 2,
    title: "SocialConnect App",
    description: "Modern social media platform with advanced messaging and content sharing capabilities.",
    image: project2,
    tags: ["React Native", "Firebase", "GraphQL", "Node.js"],
    github: "#",
    live: "#"
  },
  {
    id: 3,
    title: "LuxeCommerce",
    description: "Premium e-commerce platform with advanced product customization and AR try-on features.",
    image: project3,
    tags: ["Next.js", "Shopify", "Three.js", "Stripe"],
    github: "#",
    live: "#"
  }
];

const WorkSection = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="work" className="py-24 px-6 bg-gradient-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="reveal">
            <h2 className="text-display text-5xl md:text-6xl font-black mb-6">
              <span className="text-gradient-secondary animate-gradient">Featured</span>
              <span className="text-foreground block mt-2">Work</span>
            </h2>
          </div>
          <div className="reveal" style={{ animationDelay: '0.1s' }}>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A collection of projects that showcase my passion for creating exceptional digital experiences that push creative boundaries
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="group relative overflow-hidden glass-intense border-border/30 hover:border-primary/40 transition-all duration-700 magnetic-strong cursor-pointer interactive-border reveal"
              style={{ animationDelay: `${0.1 * project.id}s` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Enhanced Overlay Actions */}
                <div className={`absolute inset-0 flex items-center justify-center space-x-6 transition-all duration-500 ${
                  hoveredProject === project.id ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}>
                  <Button size="sm" className="btn-premium text-primary-foreground px-6 py-3 font-bold magnetic">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button size="sm" variant="outline" className="glass-intense border-primary/40 hover:bg-primary/10 px-6 py-3 font-semibold magnetic">
                    <Github className="w-4 h-4 mr-2" />
                    Source
                  </Button>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 group-hover:text-gradient-accent transition-all duration-500 tracking-tight">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag, index) => (
                    <span
                      key={tag}
                      className="px-4 py-2 text-sm bg-muted/40 text-muted-foreground rounded-full border border-border/30 glass hover:border-primary/30 transition-all duration-300 magnetic"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-20">
          <div className="reveal">
            <Button 
              variant="outline" 
              size="lg"
              className="glass-intense border-primary/30 hover:bg-primary/10 px-12 py-6 text-lg font-semibold magnetic-strong interactive-border"
            >
              View All Projects
              <span className="ml-3 text-xl opacity-60">↗</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;