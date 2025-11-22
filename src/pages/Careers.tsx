import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Briefcase, MapPin, Clock } from "lucide-react";

const jobs = [
  {
    title: "Senior Security Engineer",
    location: "San Francisco, CA",
    type: "Full-time",
    description: "Lead security architecture and implementation for enterprise clients.",
  },
  {
    title: "Threat Intelligence Analyst",
    location: "Remote",
    type: "Full-time",
    description: "Analyze emerging threats and develop proactive defense strategies.",
  },
  {
    title: "Penetration Tester",
    location: "New York, NY",
    type: "Full-time",
    description: "Conduct security assessments and vulnerability testing for clients.",
  },
  {
    title: "Security Operations Analyst",
    location: "Austin, TX",
    type: "Full-time",
    description: "Monitor security events and respond to incidents 24/7.",
  },
  {
    title: "Cloud Security Architect",
    location: "Remote",
    type: "Full-time",
    description: "Design and implement secure cloud infrastructure solutions.",
  },
  {
    title: "Security Software Developer",
    location: "Seattle, WA",
    type: "Full-time",
    description: "Build security tools and automation platforms.",
  },
];

const Careers = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Hero */}
          <div className="max-w-4xl mx-auto text-center mb-20 space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold">
              <span className="text-glow">Join Our</span>
              <br />
              <span className="bg-gradient-to-r from-primary to-cyber-red-glow bg-clip-text text-transparent">
                Elite Team
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Shape the future of cyber security with the industry's best talent
            </p>
          </div>

          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            {[
              { title: "Competitive Salary", desc: "Top-tier compensation packages" },
              { title: "Remote Options", desc: "Flexible work arrangements" },
              { title: "Learning & Growth", desc: "Continuous training programs" },
            ].map((benefit, index) => (
              <div key={index} className="cyber-border rounded-lg p-6 glass hover-lift">
                <h3 className="text-xl font-bold mb-2 text-primary">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.desc}</p>
              </div>
            ))}
          </div>

          {/* Job Listings */}
          <div>
            <h2 className="text-3xl font-bold mb-8">
              <span className="text-primary">Open</span> Positions
            </h2>
            <div className="space-y-4">
              {jobs.map((job, index) => (
                <div 
                  key={index} 
                  className="cyber-border rounded-lg p-6 glass hover-lift hover-glow transition-all"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="space-y-3 flex-1">
                      <h3 className="text-2xl font-bold">{job.title}</h3>
                      <p className="text-muted-foreground">{job.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-primary" />
                          {job.location}
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-primary" />
                          {job.type}
                        </div>
                      </div>
                    </div>
                    <Button className="bg-primary text-primary-foreground hover:bg-primary/90 neon-pulse">
                      <Briefcase className="w-4 h-4 mr-2" />
                      Apply Now
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Careers;
