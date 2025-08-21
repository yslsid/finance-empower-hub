import Navigation from "../components/Navigation";
import Hero from "../components/Hero"; 
import About from "../components/About";
import Workshops from "../components/Workshops";
import GetInvolved from "../components/GetInvolved";
import Contact from "../components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Workshops />
        <GetInvolved />
        <Contact />
      </main>
    </div>
  );
};

export default Index;