import { Navigation } from "@/components/navigation/Navigation";
import { Footer } from "@/components/Footer";
import Partners from "@/components/Vendors";

const Vendors = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background overflow-hidden relative">
      <Navigation />
      <main className="pt-24 pb-24 relative z-10">
        <Partners />
      </main>
      <Footer />
    </div>
  );
};

export default Vendors;
