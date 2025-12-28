import { Shield, Mail, Phone, MapPin } from "lucide-react";
import { NavLink } from "./navigation/NavLink";

export const Footer = () => {
  return (
    <footer className="relative border-t border-border/20 bg-secondary/20">
      <div className="absolute inset-0 cyber-grid opacity-10" />

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-primary rounded flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-glow">CYBERGUARD</span>
            </div>
            <p className="text-muted-foreground">
              Next-generation cyber security solutions protecting organizations
              worldwide.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-primary">Solutions</h3>
            <ul className="space-y-3">
              <li>
                <NavLink
                  to="/enterprise-security"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Enterprise Security
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/network-infrastructure"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Network Infrastructure
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-primary">Company</h3>
            <ul className="space-y-3">
              <li>
                <NavLink
                  to="/about"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/careers"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Careers
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blog"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/partners"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Partners
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-primary">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-muted-foreground">
                <Mail className="w-5 h-5 mt-0.5 text-primary" />
                <span>security@cyberguard.com</span>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <Phone className="w-5 h-5 mt-0.5 text-primary" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="w-5 h-5 mt-0.5 text-primary" />
                <span>San Francisco, CA 94102</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© 2024 CyberGuard. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
