import { useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Code2, Palette, Zap, Heart } from 'lucide-react';

const skills = [
  { name: "Frontend Development", level: 95, color: "bg-primary" },
  { name: "UI/UX Design", level: 88, color: "bg-secondary" },
  { name: "Backend Development", level: 82, color: "bg-accent" },
  { name: "Mobile Development", level: 75, color: "bg-primary" }
];

const values = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable code that stands the test of time"
  },
  {
    icon: Palette,
    title: "Design Excellence",
    description: "Creating visually stunning interfaces with attention to every detail"
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimizing for speed and efficiency without compromising quality"
  },
  {
    icon: Heart,
    title: "User Focus",
    description: "Putting user experience at the center of every decision"
  }
];

const AboutSection = () => {
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillBars = entry.target.querySelectorAll('.skill-bar');
            skillBars.forEach((bar, index) => {
              setTimeout(() => {
                bar.classList.add('animate-skill');
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.5 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="reveal">
            <h2 className="text-display text-5xl md:text-6xl font-black mb-6">
              <span className="text-foreground">About</span>
              <span className="text-gradient animate-gradient block mt-2">Me</span>
            </h2>
          </div>
          <div className="reveal" style={{ animationDelay: '0.1s' }}>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Passionate developer with 5+ years of experience creating digital experiences that matter and inspire
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Enhanced Story */}
          <div className="space-y-8 reveal">
            <h3 className="text-3xl font-bold text-gradient-secondary animate-gradient">My Story</h3>
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I started my journey as a curious developer who fell in love with the endless possibilities 
                of web technologies. What began as simple HTML pages has evolved into crafting complex, 
                interactive experiences that push the boundaries of what's possible on the web.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Today, I specialize in creating award-winning digital experiences that combine cutting-edge 
                technology with thoughtful design. Every project is an opportunity to learn something new 
                and create something extraordinary.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 mt-12">
              <div className="text-center glass p-6 rounded-2xl magnetic">
                <div className="text-5xl font-black text-gradient-accent mb-2">50+</div>
                <div className="text-muted-foreground font-medium">Projects Completed</div>
              </div>
              <div className="text-center glass p-6 rounded-2xl magnetic">
                <div className="text-5xl font-black text-gradient-accent mb-2">5+</div>
                <div className="text-muted-foreground font-medium">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Enhanced Skills */}
          <div ref={skillsRef} className="space-y-8 reveal" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-3xl font-bold text-gradient-secondary animate-gradient">Skills</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={skill.name} className="space-y-3 glass p-4 rounded-xl magnetic">
                  <div className="flex justify-between items-center">
                    <span className="text-foreground font-semibold text-lg">{skill.name}</span>
                    <span className="text-muted-foreground font-bold text-lg">{skill.level}%</span>
                  </div>
                  <div className="h-3 bg-muted/30 rounded-full overflow-hidden relative">
                    <div 
                      className={`skill-bar h-full bg-gradient-primary rounded-full transition-all duration-1500 ease-out relative`}
                      style={{ 
                        width: '0%',
                        '--target-width': `${skill.level}%`
                      } as React.CSSProperties}
                      data-width={`${skill.level}%`}
                    >
                      <div className="absolute inset-0 bg-gradient-accent opacity-50 animate-pulse"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <Card 
              key={value.title} 
              className="p-8 glass-intense border-border/30 hover:border-primary/40 transition-all duration-500 magnetic-strong group interactive-border reveal"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="text-primary mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                <value.icon className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-bold mb-4 group-hover:text-gradient-accent transition-all duration-500 tracking-tight">
                {value.title}
              </h4>
              <p className="text-muted-foreground leading-relaxed text-base">
                {value.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;