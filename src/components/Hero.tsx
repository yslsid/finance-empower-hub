import { Button } from "./ui/button";
import heroImage from "../assets/hero-image.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-dark overflow-hidden">
      {/* Animated background effects */}
      <div className="absolute inset-0 bg-gradient-glow opacity-30 animate-pulse" />
      
      {/* Background Image with dark overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-5"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center">
        <div className="max-w-5xl mx-auto space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight tracking-tight">
            Master Your Money,
            <span className="bg-gradient-primary bg-clip-text text-transparent block mt-2"> Shape Your Future</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
            Free financial literacy workshops for students. Learn budgeting, saving, investing, 
            and credit management through interactive sessions with real-world examples.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => scrollToSection('workshops')}
              className="text-lg px-10 py-8 font-semibold"
            >
              Explore Workshops
            </Button>
            <Button 
              variant="glass" 
              size="lg"
              onClick={() => scrollToSection('join')}
              className="text-lg px-10 py-8 font-semibold"
            >
              Get Started Today
            </Button>
          </div>
          
          <div className="flex items-center justify-center space-x-12 pt-12 text-muted-foreground">
            <div className="text-center group">
              <div className="text-3xl font-bold text-primary group-hover:text-secondary transition-glow">500+</div>
              <div className="text-sm font-medium tracking-wide">Students Served</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl font-bold text-secondary group-hover:text-accent transition-glow">100%</div>
              <div className="text-sm font-medium tracking-wide">Free Workshops</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl font-bold text-accent group-hover:text-primary transition-glow">15+</div>
              <div className="text-sm font-medium tracking-wide">Partner Schools</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;