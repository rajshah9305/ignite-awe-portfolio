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
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            <span className="text-foreground">About</span>
            <span className="text-gradient block">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate developer with 5+ years of experience creating digital experiences that matter
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Story */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gradient-secondary">My Story</h3>
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
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center">
                <div className="text-4xl font-black text-gradient">50+</div>
                <div className="text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-gradient">5+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div ref={skillsRef} className="space-y-6">
            <h3 className="text-3xl font-bold text-gradient-secondary">Skills</h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-foreground font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      className={`skill-bar h-full ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: '0%' }}
                      data-width={`${skill.level}%`}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card 
              key={value.title} 
              className="p-6 glass border-border/50 hover:border-primary/30 transition-all duration-300 magnetic group"
            >
              <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                <value.icon className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold mb-3 group-hover:text-gradient transition-colors duration-300">
                {value.title}
              </h4>
              <p className="text-muted-foreground leading-relaxed">
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