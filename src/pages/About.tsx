
import AboutUs from "@/components/AboutUs";
import { Footer } from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background overflow-hidden relative">

      <main className="pt-24 pb-24 relative z-10">
        <AboutUs />
      </main>

      <Footer />
    </div>
  );
};

export default About;
