import Layout from '../components/Layout'
import Image from 'next/image'

const HomePage = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const stats = [
    {
      number: "500+",
      label: "Students Empowered",
      description: "Across high schools and community centers"
    },
    {
      number: "25+",
      label: "Workshop Sessions",
      description: "Interactive learning experiences delivered"
    },
    {
      number: "15+",
      label: "Partner Organizations", 
      description: "Schools, libraries, and community centers"
    },
    {
      number: "95%",
      label: "Student Satisfaction",
      description: "Based on post-workshop feedback"
    }
  ];

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
      ctaVariant: "hero",
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
      ctaVariant: "success",
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
      ctaVariant: "accent",
      icon: "🏫"
    }
  ];

  const contactMethods = [
    {
      icon: "📧",
      title: "Email Us",
      detail: "focusfinance73@gmail.com",
      description: "General inquiries and workshop requests"
    },
    {
      icon: "📱",
      title: "Follow Us",
      detail: "@focusfinance.global",
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
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-dark overflow-hidden">
        <div className="absolute inset-0 bg-gradient-glow opacity-30 animate-pulse" />
        
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
              <button 
                onClick={() => scrollToSection('workshops')}
                className="btn btn-hero btn-lg text-lg px-10 py-8 font-semibold"
              >
                Explore Workshops
              </button>
              <button 
                onClick={() => scrollToSection('join')}
                className="btn btn-glass btn-lg text-lg px-10 py-8 font-semibold"
              >
                Get Started Today
              </button>
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

      {/* About Section */}
      <section id="about" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Building Financial Confidence, 
              <span className="bg-gradient-secondary bg-clip-text text-transparent"> One Student at a Time</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our mission is simple: make financial literacy accessible to every student. 
              Through engaging workshops, real-world examples, and peer-to-peer learning, 
              we're preparing the next generation for financial success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="card text-center p-6 shadow-soft hover:shadow-medium transition-smooth">
                <div className="pt-6">
                  <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-lg font-semibold text-foreground mb-2">
                    {stat.label}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.description}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-subtle rounded-2xl p-8 md:p-12 shadow-medium">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Why Financial Literacy Matters
                </h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    <strong className="text-foreground">70% of Americans</strong> live paycheck to paycheck, 
                    often due to lack of financial education in their formative years.
                  </p>
                  <p>
                    <strong className="text-foreground">Students who receive financial education</strong> are 
                    more likely to have a savings account, budget responsibly, and avoid high-interest debt.
                  </p>
                  <p>
                    <strong className="text-foreground">Early financial habits</strong> formed in high school 
                    can impact lifetime earning potential and financial security.
                  </p>
                </div>
              </div>
              <div className="bg-card rounded-xl p-6 shadow-soft">
                <h4 className="text-xl font-semibold text-foreground mb-4">Our Impact</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Budget Creation Skills</span>
                    <span className="text-secondary font-semibold">+85%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Savings Account Opening</span>
                    <span className="text-secondary font-semibold">+60%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Credit Score Understanding</span>
                    <span className="text-secondary font-semibold">+90%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Investment Awareness</span>
                    <span className="text-secondary font-semibold">+75%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workshops Section */}
      <section id="workshops" className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="bg-card rounded-2xl p-12 md:p-16 shadow-medium max-w-2xl mx-auto">
              <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-primary-foreground text-3xl">⏳</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                Workshops 
                <span className="bg-gradient-accent bg-clip-text text-transparent"> Coming Soon</span>
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

      {/* Get Involved Section */}
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
              <div key={index} className="card shadow-medium hover:shadow-strong transition-smooth transform hover:-translate-y-2">
                <div className="text-center pb-4 pt-8">
                  <div className="w-20 h-20 bg-gradient-subtle rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-4xl">{pathway.icon}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {pathway.title}
                  </h3>
                  <div className="text-primary font-semibold">
                    {pathway.subtitle}
                  </div>
                </div>
                <div className="pt-4 px-6 pb-8">
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

                  <button 
                    className={`btn btn-${pathway.ctaVariant} btn-lg w-full`}
                    onClick={() => {
                      const url = index === 0 
                        ? "https://docs.google.com/forms/d/e/1FAIpQLSclrrXLoOAsZTHioA6y2JEYbafOnKNzJVH6Ee7ywFXxCecjEw/viewform?usp=header"
                        : "https://docs.google.com/forms/d/e/1FAIpQLSc99YQv9E9U6_kQz0f6CDe4oJsnkC4eojOhpFVL7H39q3GWzw/viewform?usp=header";
                      window.open(url, '_blank');
                    }}
                  >
                    {pathway.cta}
                  </button>
                </div>
              </div>
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
                <button 
                  className="btn btn-secondary btn-lg bg-white text-primary hover:bg-white/90 px-8 py-6 text-lg"
                  onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSclrrXLoOAsZTHioA6y2JEYbafOnKNzJVH6Ee7ywFXxCecjEw/viewform?usp=header", '_blank')}
                >
                  Schedule a Workshop
                </button>
                <button className="btn btn-outline btn-lg border-white text-white hover:bg-white hover:text-primary px-8 py-6 text-lg">
                  Learn More About Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
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
              <div key={index} className="card text-center shadow-soft hover:shadow-medium transition-smooth">
                <div className="pt-8 pb-8">
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
                </div>
              </div>
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
                      <div className="text-sm text-muted-foregroound">Begin your financial literacy journey</div>
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
                
                <button className="btn btn-hero btn-lg w-full">
                  Sign Up for Workshop
                </button>
                
                <button className="btn btn-success btn-lg w-full">
                  Apply as Volunteer
                </button>
                
                <button className="btn btn-accent btn-lg w-full">
                  Partner With Us
                </button>
                
                <div className="pt-4 text-center">
                  <div className="text-sm text-muted-foreground">
                    Questions? Email us at
                  </div>
                  <div className="text-primary font-semibold">
                    focusfinance73@gmail.com
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
    </Layout>
  )
}

export default HomePage