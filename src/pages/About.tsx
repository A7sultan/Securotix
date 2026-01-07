import AboutUs from "@/components/WhoWeAre";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/navigation/Navigation";

const About = () => {
  return (
    <div className="min-h-screen bg-background overflow-hidden relative">
      <Navigation />
      <main className="pt-24 pb-24 relative z-10">
        <AboutUs />
      </main>
      <Footer />
    </div>
  );
};

export default About;
