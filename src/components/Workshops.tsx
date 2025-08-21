import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

const Workshops = () => {
  const workshops = [
    {
      title: "Budgeting 101: Taking Control",
      description: "Learn the fundamentals of creating and sticking to a budget. Master the 50/30/20 rule, track expenses, and build healthy spending habits.",
      duration: "90 minutes",
      level: "Beginner",
      highlights: ["Personal budget creation", "Expense tracking tools", "Emergency fund planning"]
    },
    {
      title: "Saving & Investing Basics", 
      description: "Discover the power of compound interest, different types of savings accounts, and beginner-friendly investment options.",
      duration: "2 hours",
      level: "Intermediate", 
      highlights: ["Compound interest calculator", "Investment account types", "Risk vs. reward concepts"]
    },
    {
      title: "Credit & Loans Demystified",
      description: "Understand credit scores, how loans work, and strategies to build good credit while avoiding debt traps.",
      duration: "90 minutes", 
      level: "Intermediate",
      highlights: ["Credit score factors", "Loan comparison", "Debt management strategies"]
    },
    {
      title: "Finance in Everyday Life",
      description: "Real-world applications including apartment hunting, car purchases, insurance basics, and preparing for college expenses.",
      duration: "2 hours",
      level: "Advanced",
      highlights: ["College cost planning", "Insurance basics", "Major purchase decisions"]
    }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="workshops" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Our 
            <span className="bg-gradient-accent bg-clip-text text-transparent"> Interactive Workshops</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Each session combines theory with hands-on activities, real-world examples, and Q&A discussions. 
            Available both virtually and in-person at partner locations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {workshops.map((workshop, index) => (
            <Card key={index} className="shadow-medium hover:shadow-strong transition-smooth transform hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <CardTitle className="text-xl font-bold text-foreground flex-1">
                    {workshop.title}
                  </CardTitle>
                  <Badge 
                    variant={workshop.level === 'Beginner' ? 'secondary' : workshop.level === 'Intermediate' ? 'default' : 'destructive'}
                    className="ml-2"
                  >
                    {workshop.level}
                  </Badge>
                </div>
                <div className="text-sm text-muted-foreground">
                  Duration: {workshop.duration}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {workshop.description}
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">Key Topics:</h4>
                  <ul className="space-y-1">
                    {workshop.highlights.map((highlight, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-card rounded-2xl p-8 md:p-12 shadow-medium">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Workshop Format & Experience
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Every workshop is designed to be engaging, interactive, and immediately applicable to your daily life.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-foreground text-2xl">💡</span>
                </div>
                <h4 className="font-semibold text-foreground mb-2">Learn</h4>
                <p className="text-sm text-muted-foreground">Interactive presentations with real examples</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-secondary-foreground text-2xl">🎯</span>
                </div>
                <h4 className="font-semibold text-foreground mb-2">Practice</h4>
                <p className="text-sm text-muted-foreground">Hands-on activities and budget simulations</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-accent-foreground text-2xl">🤝</span>
                </div>
                <h4 className="font-semibold text-foreground mb-2">Connect</h4>
                <p className="text-sm text-muted-foreground">Q&A sessions and peer discussions</p>
              </div>
            </div>

            <Button 
              variant="hero" 
              size="lg"
              onClick={() => scrollToSection('join')}
              className="text-lg px-8 py-6"
            >
              Sign Up for a Workshop
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workshops;