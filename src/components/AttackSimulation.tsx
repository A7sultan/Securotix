import { AlertTriangle, Shield, CheckCircle } from "lucide-react";

export const AttackSimulation = () => {
  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-b from-background to-secondary/20">
      <div className="absolute inset-0 cyber-grid opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-glow">Threat Detection</span>
            <br />
            <span className="bg-gradient-to-r from-primary to-cyber-red-glow bg-clip-text text-transparent">
              In Action
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Watch how our system identifies, analyzes, and neutralizes threats in real-time
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1: Attack Detection */}
            <div className="relative">
              <div className="cyber-border rounded-lg p-8 glass text-center space-y-4 hover-lift">
                <div className="w-20 h-20 mx-auto rounded-full bg-destructive/10 flex items-center justify-center mb-4">
                  <AlertTriangle className="w-10 h-10 text-destructive animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold">1. Attack Detected</h3>
                <p className="text-muted-foreground">
                  Suspicious activity identified through behavioral analysis
                </p>
                <div className="pt-4">
                  <div className="h-1 bg-destructive/30 rounded-full overflow-hidden">
                    <div className="h-full bg-destructive w-full animate-slide-in-left" />
                  </div>
                </div>
              </div>
              {/* Connection line */}
              <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary" />
            </div>

            {/* Step 2: Analysis */}
            <div className="relative">
              <div className="cyber-border rounded-lg p-8 glass text-center space-y-4 hover-lift animation-delay-200">
                <div className="w-20 h-20 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="w-10 h-10 text-primary animate-float" />
                </div>
                <h3 className="text-2xl font-bold">2. AI Analysis</h3>
                <p className="text-muted-foreground">
                  Real-time threat assessment and pattern recognition
                </p>
                <div className="pt-4">
                  <div className="h-1 bg-primary/30 rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-full animate-slide-in-left animation-delay-300" />
                  </div>
                </div>
              </div>
              {/* Connection line */}
              <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary" />
            </div>

            {/* Step 3: Neutralized */}
            <div className="cyber-border rounded-lg p-8 glass text-center space-y-4 hover-lift animation-delay-400">
              <div className="w-20 h-20 mx-auto rounded-full bg-green-500/10 flex items-center justify-center mb-4">
                <CheckCircle className="w-10 h-10 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold">3. Threat Blocked</h3>
              <p className="text-muted-foreground">
                Automated response neutralizes threat before damage
              </p>
              <div className="pt-4">
                <div className="h-1 bg-green-500/30 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 w-full animate-slide-in-left animation-delay-600" />
                </div>
              </div>
            </div>
          </div>

          {/* Network visualization */}
          <div className="mt-16 cyber-border rounded-lg p-12 glass relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <svg className="w-full h-full" viewBox="0 0 800 200">
                {/* Network nodes */}
                <circle cx="100" cy="100" r="8" fill="#990100" className="animate-pulse" />
                <circle cx="300" cy="80" r="8" fill="#990100" className="animate-pulse" style={{ animationDelay: "0.2s" }} />
                <circle cx="500" cy="120" r="8" fill="#990100" className="animate-pulse" style={{ animationDelay: "0.4s" }} />
                <circle cx="700" cy="90" r="8" fill="#990100" className="animate-pulse" style={{ animationDelay: "0.6s" }} />
                
                {/* Network connections */}
                <line x1="100" y1="100" x2="300" y2="80" stroke="#990100" strokeWidth="1" opacity="0.5" />
                <line x1="300" y1="80" x2="500" y2="120" stroke="#990100" strokeWidth="1" opacity="0.5" />
                <line x1="500" y1="120" x2="700" y2="90" stroke="#990100" strokeWidth="1" opacity="0.5" />
              </svg>
            </div>
            
            <div className="relative z-10 text-center">
              <p className="text-2xl font-bold text-primary text-glow">
                Real-Time Protection Active
              </p>
              <p className="text-muted-foreground mt-2">
                Monitoring 1,247 endpoints • 0 active threats
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
