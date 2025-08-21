import { Button } from "./ui/button";

const Navigation = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">FL</span>
          </div>
          <span className="text-lg font-semibold text-foreground">FinLit Workshops</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <button 
            onClick={() => scrollToSection('about')}
            className="text-muted-foreground hover:text-foreground transition-smooth"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('workshops')}
            className="text-muted-foreground hover:text-foreground transition-smooth"
          >
            Workshops
          </button>
          <button 
            onClick={() => scrollToSection('join')}
            className="text-muted-foreground hover:text-foreground transition-smooth"
          >
            Get Involved
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-muted-foreground hover:text-foreground transition-smooth"
          >
            Contact
          </button>
          <Button 
            variant="hero" 
            size="sm"
            onClick={() => scrollToSection('join')}
          >
            Join Now
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;