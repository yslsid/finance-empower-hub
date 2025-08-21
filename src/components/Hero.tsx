import { Button } from "./ui/button";
import heroImage from "../assets/hero-image.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-subtle overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.1
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10 z-10" />
      
      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
            Master Your Money,
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Shape Your Future</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Free financial literacy workshops for students. Learn budgeting, saving, investing, 
            and credit management through interactive sessions with real-world examples.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => scrollToSection('workshops')}
              className="text-lg px-8 py-6"
            >
              Explore Workshops
            </Button>
            <Button 
              variant="success" 
              size="lg"
              onClick={() => scrollToSection('join')}
              className="text-lg px-8 py-6"
            >
              Get Started Today
            </Button>
          </div>
          
          <div className="flex items-center justify-center space-x-8 pt-8 text-muted-foreground">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">500+</div>
              <div className="text-sm">Students Served</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-secondary">100%</div>
              <div className="text-sm">Free Workshops</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent">15+</div>
              <div className="text-sm">Partner Schools</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;