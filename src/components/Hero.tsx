import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-bg.jpg';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const mousePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };
      
      if (heroRef.current) {
        const { clientWidth, clientHeight } = heroRef.current;
        const xPos = (e.clientX / clientWidth - 0.5) * 20;
        const yPos = (e.clientY / clientHeight - 0.5) * 20;
        
        heroRef.current.style.transform = `translate(${xPos}px, ${yPos}px)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToWork = () => {
    const element = document.getElementById('work');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden mesh-bg">
      {/* Enhanced Background Layers */}
      <div className="absolute inset-0 bg-gradient-dark"></div>
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'contrast(1.2) saturation(1.1)',
        }}
      ></div>
      
      {/* Enhanced Floating Elements */}
      <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-primary rounded-full opacity-15 animate-float blur-sm"></div>
      <div className="absolute bottom-40 right-32 w-32 h-32 bg-gradient-secondary rounded-full opacity-20 animate-float-delayed blur-sm"></div>
      <div className="absolute top-1/2 left-10 w-24 h-24 bg-gradient-accent rounded-full opacity-18 animate-float-slow blur-sm"></div>
      <div className="absolute top-32 right-20 w-16 h-16 bg-gradient-primary rounded-full opacity-25 animate-float"></div>
      <div className="absolute bottom-20 left-32 w-20 h-20 bg-gradient-secondary rounded-full opacity-22 animate-float-delayed"></div>

      {/* Content */}
      <div ref={heroRef} className="relative z-10 text-center max-w-5xl mx-auto px-6">
        <div className="reveal">
          <h1 className="text-hero font-black mb-8 text-display">
            <span className="block text-gradient-accent animate-gradient">Creative</span>
            <span className="block text-foreground mt-2">Developer</span>
          </h1>
        </div>
        
        <div className="reveal" style={{ animationDelay: '0.2s' }}>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
            I craft digital experiences that push boundaries and create lasting impressions through innovative design and seamless interactions.
          </p>
        </div>
        
        <div className="reveal flex flex-col sm:flex-row gap-6 justify-center items-center" style={{ animationDelay: '0.4s' }}>
          <Button 
            size="lg" 
            className="btn-premium text-primary-foreground px-10 py-7 text-lg font-bold tracking-wide magnetic-strong interactive-border"
            onClick={scrollToWork}
          >
            View My Work
            <span className="ml-2 text-xl">→</span>
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="glass-intense border-primary/20 hover:bg-primary/5 px-10 py-7 text-lg font-semibold magnetic interactive-border"
          >
            Let's Connect
            <span className="ml-2 opacity-60">✦</span>
          </Button>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 glass border border-primary/30 rounded-full p-2 magnetic">
          <div className="w-2 h-4 bg-gradient-primary rounded-full mx-auto animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;