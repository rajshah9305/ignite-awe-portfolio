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
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            <span className="text-gradient-secondary">Featured</span>
            <span className="text-foreground block">Work</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of projects that showcase my passion for creating exceptional digital experiences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="group relative overflow-hidden glass border-border/50 hover:border-primary/30 transition-all duration-500 transform hover:scale-105 cursor-pointer"
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
                
                {/* Overlay Actions */}
                <div className={`absolute inset-0 flex items-center justify-center space-x-4 transition-all duration-300 ${
                  hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <Button size="sm" className="bg-primary/90 hover:bg-primary">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live
                  </Button>
                  <Button size="sm" variant="outline" className="glass border-primary/30">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-gradient transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm bg-muted/50 text-muted-foreground rounded-full border border-border/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button 
            variant="outline" 
            size="lg"
            className="glass border-primary/30 hover:bg-primary/10 px-8 py-4 text-lg magnetic"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;