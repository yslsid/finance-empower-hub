import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

const Contact = () => {
  const contactMethods = [
    {
      icon: "📧",
      title: "Email Us",
      detail: "hello@focusfinance.org",
      description: "General inquiries and workshop requests"
    },
    {
      icon: "📱",
      title: "Follow Us",
      detail: "@FocusFinance",
      description: "Updates, tips, and success stories"
    },
    {
      icon: "💼",
      title: "Connect Professionally", 
      detail: "LinkedIn Profile",
      description: "Partnership and collaboration opportunities"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Let's Build Financial Futures 
            <span className="bg-gradient-secondary bg-clip-text text-transparent"> Together</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Have questions about our workshops? Want to bring financial literacy to your community? 
            Ready to volunteer? We'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactMethods.map((method, index) => (
            <Card key={index} className="text-center shadow-soft hover:shadow-medium transition-smooth">
              <CardContent className="pt-8 pb-8">
                <div className="text-4xl mb-4">{method.icon}</div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {method.title}
                </h3>
                <div className="text-primary font-semibold mb-2">
                  {method.detail}
                </div>
                <p className="text-sm text-muted-foreground">
                  {method.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-card rounded-2xl p-8 md:p-12 shadow-medium max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Ready to Get Started?
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Whether you're a student ready to learn, an educator wanting to volunteer, 
                or an organization looking to partner, taking the first step is easy.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary-foreground text-sm font-bold">1</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Reach Out</div>
                    <div className="text-sm text-muted-foreground">Send us a message with your interest</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gradient-secondary rounded-full flex items-center justify-center mr-4">
                    <span className="text-secondary-foreground text-sm font-bold">2</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Connect</div>
                    <div className="text-sm text-muted-foreground">We'll schedule a brief conversation</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gradient-accent rounded-full flex items-center justify-center mr-4">
                    <span className="text-accent-foreground text-sm font-bold">3</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Get Started</div>
                    <div className="text-sm text-muted-foreground">Begin your financial literacy journey</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="text-center lg:text-left">
                <h4 className="text-lg font-semibold text-foreground mb-4">
                  Quick Actions
                </h4>
              </div>
              
              <Button variant="hero" size="lg" className="w-full">
                Sign Up for Workshop
              </Button>
              
              <Button variant="success" size="lg" className="w-full">
                Apply as Volunteer
              </Button>
              
              <Button variant="accent" size="lg" className="w-full">
                Partner With Us
              </Button>
              
              <div className="pt-4 text-center">
                <div className="text-sm text-muted-foreground">
                  Questions? Email us at
                </div>
                <div className="text-primary font-semibold">
                  hello@focusfinance.org
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            © 2024 FocusFinance. Empowering students through financial education.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;