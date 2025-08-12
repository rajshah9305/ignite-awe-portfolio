import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" }
  ];

  return (
    <section id="contact" className="py-24 px-6 bg-gradient-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="reveal">
            <h2 className="text-display text-5xl md:text-6xl font-black mb-6">
              <span className="text-foreground">Let's</span>
              <span className="text-gradient animate-gradient block mt-2">Connect</span>
            </h2>
          </div>
          <div className="reveal" style={{ animationDelay: '0.1s' }}>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Enhanced Contact Info */}
          <div className="space-y-10 reveal">
            <div>
              <h3 className="text-3xl font-bold mb-8 text-gradient-secondary animate-gradient">Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-6 glass p-4 rounded-xl magnetic hover:border-primary/30 transition-all duration-300">
                  <div className="w-14 h-14 bg-gradient-primary rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-foreground font-semibold text-lg">hello@portfolio.dev</p>
                    <p className="text-muted-foreground">Email me anytime</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-6 glass p-4 rounded-xl magnetic hover:border-secondary/30 transition-all duration-300">
                  <div className="w-14 h-14 bg-gradient-secondary rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <p className="text-foreground font-semibold text-lg">+1 (555) 123-4567</p>
                    <p className="text-muted-foreground">Mon-Fri 9am-6pm EST</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-6 glass p-4 rounded-xl magnetic hover:border-accent/30 transition-all duration-300">
                  <div className="w-14 h-14 bg-gradient-accent rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <p className="text-foreground font-semibold text-lg">San Francisco, CA</p>
                    <p className="text-muted-foreground">Available worldwide</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Social Links */}
            <div>
              <h4 className="text-xl font-semibold mb-6">Follow Me</h4>
              <div className="flex space-x-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-14 h-14 glass-intense border-border/30 hover:border-primary/40 rounded-full flex items-center justify-center hover:bg-primary/10 transition-all duration-500 magnetic-strong interactive-border"
                    style={{ animationDelay: `${index * 0.1}s` }}
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced Contact Form */}
          <div className="lg:col-span-2">
            <Card className="glass-intense border-border/30 p-10 reveal interactive-border" style={{ animationDelay: '0.2s' }}>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="name" className="block text-base font-semibold mb-3 text-foreground">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="glass border-border/30 focus:border-primary/60 h-12 text-lg transition-all duration-300"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-base font-semibold mb-3 text-foreground">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="glass border-border/30 focus:border-primary/60 h-12 text-lg transition-all duration-300"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-base font-semibold mb-3 text-foreground">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows={6}
                    className="glass border-border/30 focus:border-primary/60 text-lg transition-all duration-300"
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg"
                  className="w-full btn-premium text-primary-foreground py-6 text-xl font-bold tracking-wide magnetic-strong"
                >
                  Send Message
                  <span className="ml-3 text-2xl">→</span>
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;