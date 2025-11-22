const partners = [
  "Microsoft", "AWS", "Google Cloud", "IBM", "Cisco",
  "Palo Alto", "Fortinet", "CrowdStrike", "Splunk", "Cloudflare"
];

export const PartnersCarousel = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-muted-foreground">
            Partnering with the world's top technology companies
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex gap-12 animate-slide-in-left">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 cyber-border rounded-lg px-12 py-8 glass hover-glow transition-all"
              >
                <span className="text-xl font-bold text-muted-foreground hover:text-primary transition-colors">
                  {partner}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
