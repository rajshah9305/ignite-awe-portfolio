import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import WorkSection from '@/components/WorkSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Add custom cursor effect
    const cursor = document.createElement('div');
    cursor.className = 'cursor-trail';
    document.body.appendChild(cursor);

    const handleMouseMove = (e: MouseEvent) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    };

    document.addEventListener('mousemove', handleMouseMove);

    // Animate skill bars when in view
    const style = document.createElement('style');
    style.textContent = `
      .animate-skill {
        width: var(--width) !important;
      }
      .skill-bar {
        --width: 0%;
      }
      .skill-bar[data-width] {
        --width: attr(data-width);
      }
    `;
    document.head.appendChild(style);

    // Set skill bar widths
    setTimeout(() => {
      const skillBars = document.querySelectorAll('.skill-bar');
      skillBars.forEach((bar) => {
        const width = bar.getAttribute('data-width');
        if (width) {
          (bar as HTMLElement).style.setProperty('--width', width);
        }
      });
    }, 100);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      if (cursor.parentNode) {
        cursor.parentNode.removeChild(cursor);
      }
      if (style.parentNode) {
        style.parentNode.removeChild(style);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <WorkSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
