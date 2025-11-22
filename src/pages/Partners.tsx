import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

const partners = [
  { name: "Microsoft", tier: "Strategic" },
  { name: "AWS", tier: "Strategic" },
  { name: "Google Cloud", tier: "Strategic" },
  { name: "IBM Security", tier: "Technology" },
  { name: "Cisco", tier: "Technology" },
  { name: "Palo Alto Networks", tier: "Technology" },
  { name: "Fortinet", tier: "Technology" },
  { name: "CrowdStrike", tier: "Technology" },
  { name: "Splunk", tier: "Technology" },
  { name: "Cloudflare", tier: "Technology" },
  { name: "Okta", tier: "Technology" },
  { name: "Zscaler", tier: "Technology" },
];

const Partners = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Hero */}
          <div className="max-w-4xl mx-auto text-center mb-20 space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold">
              <span className="text-glow">Our</span>
              <br />
              <span className="bg-gradient-to-r from-primary to-cyber-red-glow bg-clip-text text-transparent">
                Partners
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Collaborating with industry leaders to deliver world-class security solutions
            </p>
          </div>

          {/* Global Presence */}
          <div className="mb-20">
            <div className="cyber-border rounded-lg p-12 glass relative overflow-hidden">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Global Service Footprint</h2>
                <p className="text-muted-foreground">Protecting organizations across 6 continents</p>
              </div>
              <div className="flex justify-center">
                <Globe className="w-64 h-64 text-primary opacity-20 animate-float" />
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                {[
                  { region: "North America", clients: "200+" },
                  { region: "Europe", clients: "150+" },
                  { region: "Asia Pacific", clients: "100+" },
                  { region: "Middle East", clients: "50+" },
                ].map((region, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-primary">{region.clients}</div>
                    <div className="text-sm text-muted-foreground">{region.region}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Partner Grid */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">
              <span className="text-primary">Technology</span> Partners
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {partners.map((partner, index) => (
                <div 
                  key={index}
                  className="cyber-border rounded-lg p-6 glass hover-lift hover-glow transition-all text-center"
                >
                  <div className="text-xl font-bold mb-2">{partner.name}</div>
                  <div className="text-xs text-muted-foreground">{partner.tier} Partner</div>
                </div>
              ))}
            </div>
          </div>

          {/* Become a Partner CTA */}
          <div className="cyber-border rounded-lg p-12 glass text-center space-y-6 holographic">
            <h2 className="text-3xl md:text-4xl font-bold">
              Become a Partner
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join our partner ecosystem and deliver cutting-edge security solutions
              to your clients.
            </p>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 neon-pulse">
              Apply for Partnership
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Partners;
