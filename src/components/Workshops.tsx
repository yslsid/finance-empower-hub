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
        <div className="text-center">
          <div className="bg-card rounded-2xl p-12 md:p-16 shadow-medium max-w-2xl mx-auto">
            <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-primary-foreground text-3xl">⏳</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Workshops 
              <span className="bg-gradient-accent bg-clip-text text-transparent">Coming Soon</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              We're crafting something special for you. Interactive financial literacy workshops 
              designed to empower students with real-world money management skills.
            </p>
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-muted/30 border border-primary/20">
              <div className="w-2 h-2 bg-primary rounded-full mr-3 animate-pulse"></div>
              <span className="text-sm text-muted-foreground font-medium">Stay tuned for updates</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workshops;