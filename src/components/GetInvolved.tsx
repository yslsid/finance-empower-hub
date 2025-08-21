import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

const GetInvolved = () => {
  const pathways = [
    {
      title: "For Students",
      subtitle: "Join Free Workshops",
      description: "Sign up for upcoming workshops in your area. Learn essential financial skills that will benefit you for life.",
      benefits: [
        "100% free workshops",
        "Interactive learning experience", 
        "Real-world applications",
        "Certificate of completion",
        "Peer networking opportunities"
      ],
      cta: "Sign Up for Workshop",
      ctaVariant: "hero" as const,
      icon: "🎓"
    },
    {
      title: "For Volunteers", 
      subtitle: "Become a Tutor",
      description: "College and high school students with finance interest can apply to help teach and mentor other students.",
      benefits: [
        "Gain teaching experience",
        "Build leadership skills",
        "Community service hours", 
        "Resume enhancement",
        "Make a real impact"
      ],
      cta: "Apply as Volunteer",
      ctaVariant: "success" as const,
      icon: "🤝"
    },
    {
      title: "For Organizations",
      subtitle: "Partner With Us", 
      description: "Schools, libraries, and nonprofits can host workshops to bring financial literacy directly to their community.",
      benefits: [
        "No cost to host",
        "Flexible scheduling",
        "Custom curriculum",
        "Professional facilitators",
        "Student outcome tracking"
      ],
      cta: "Become a Partner",
      ctaVariant: "accent" as const,
      icon: "🏫"
    }
  ];

  return (
    <section id="join" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Get Involved & 
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Make an Impact</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Whether you're looking to learn, teach, or host, there's a place for you in our 
            mission to make financial literacy accessible to everyone.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {pathways.map((pathway, index) => (
            <Card key={index} className="shadow-medium hover:shadow-strong transition-smooth transform hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 bg-gradient-subtle rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl">{pathway.icon}</span>
                </div>
                <CardTitle className="text-2xl font-bold text-foreground mb-2">
                  {pathway.title}
                </CardTitle>
                <div className="text-primary font-semibold">
                  {pathway.subtitle}
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {pathway.description}
                </p>
                
                <div className="space-y-3 mb-6">
                  {pathway.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-secondary rounded-full mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  variant={pathway.ctaVariant}
                  className="w-full"
                  size="lg"
                >
                  {pathway.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-hero rounded-2xl p-8 md:p-12 text-center shadow-strong">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Financial Futures?
            </h3>
            <p className="text-white/90 text-lg mb-8 leading-relaxed">
              Join our community of learners, educators, and partners working together to build 
              a financially literate generation. Every workshop, every student, every partnership 
              creates ripple effects that last a lifetime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary" 
                size="lg"
                className="bg-white text-primary hover:bg-white/90 px-8 py-6 text-lg"
              >
                Schedule a Workshop
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary px-8 py-6 text-lg"
              >
                Learn More About Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;