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
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-dark"></div>
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-primary rounded-full opacity-20 animate-float"></div>
      <div className="absolute bottom-40 right-32 w-24 h-24 bg-gradient-secondary rounded-full opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-10 w-16 h-16 bg-gradient-accent rounded-full opacity-25 animate-float" style={{ animationDelay: '4s' }}></div>

      {/* Content */}
      <div ref={heroRef} className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight">
          <span className="block text-gradient animate-gradient">Creative</span>
          <span className="block text-foreground">Developer</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          I craft digital experiences that push boundaries and create lasting impressions through innovative design and seamless interactions.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-gradient-primary hover:shadow-glow transform hover:scale-105 transition-all duration-300 px-8 py-6 text-lg font-semibold"
            onClick={scrollToWork}
          >
            View My Work
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="glass border-primary/30 hover:bg-primary/10 px-8 py-6 text-lg font-semibold magnetic"
          >
            Let's Connect
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full p-1">
          <div className="w-1 h-3 bg-primary rounded-full mx-auto animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;