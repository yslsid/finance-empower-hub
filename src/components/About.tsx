import { Card, CardContent } from "./ui/card";

const About = () => {
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

  return (
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
            <Card key={index} className="text-center p-6 shadow-soft hover:shadow-medium transition-smooth">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-foreground mb-2">
                  {stat.label}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.description}
                </div>
              </CardContent>
            </Card>
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
  );
};

export default About;