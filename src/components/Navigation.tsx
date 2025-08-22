import { Button } from "./ui/button";

const Navigation = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 w-full bg-card/5 backdrop-blur-xl border-b border-primary/10 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center shadow-glow">
            <span className="text-primary-foreground font-bold text-sm">FF</span>
          </div>
          <span className="text-xl font-semibold text-foreground tracking-tight">FocusFinance</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('about')}
            className="text-muted-foreground hover:text-primary transition-glow font-medium"
          >
            About
          </button>
          <button 
            onClick={() => window.location.href = '/team'}
            className="text-muted-foreground hover:text-primary transition-glow font-medium"
          >
            Team
          </button>
          <button 
            onClick={() => scrollToSection('workshops')}
            className="text-muted-foreground hover:text-primary transition-glow font-medium"
          >
            Workshops
          </button>
          <button 
            onClick={() => scrollToSection('join')}
            className="text-muted-foreground hover:text-primary transition-glow font-medium"
          >
            Get Involved
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-muted-foreground hover:text-primary transition-glow font-medium"
          >
            Contact
          </button>
          <Button 
            variant="glass" 
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