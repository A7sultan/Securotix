import { useState } from "react";
import { NavLink } from "./NavLink";
import { Button } from "./ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import Logo from "@/assets/logo.png";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const menuItems = [
    {
      title: "Corporate",
      items: [
        { name: "About Us", path: "/about" },
        { name: "Careers", path: "/careers" },
      ],
    },
    {
      title: "Solutions",
      items: [
        { name: "Enterprise Security", path: "/enterprise-security" },
        { name: "Network Infrastructure", path: "/network-infrastructure" },
      ],
    },
    { title: "Blog", path: "/blog" },
    { title: "Partners", path: "/partners" },
    { title: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-2 group">
            <img
              src={Logo}
              alt="Securotix Logo"
              className="w-20 h-20 object-contain"
            />
            <span className="text-2xl font-bold text-glow">Securotix</span>
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item) =>
              item.items ? (
                <div
                  key={item.title}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.title)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="px-4 py-2 text-foreground hover:text-primary transition-colors flex items-center gap-1 group">
                    {item.title}
                    <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                  </button>
                  {activeDropdown === item.title && (
                    <div className="absolute top-full left-0 mt-2 w-64 glass rounded-lg border border-primary/20 overflow-hidden animate-fade-in-up">
                      {item.items.map((subItem) => (
                        <NavLink
                          key={subItem.path}
                          to={subItem.path}
                          className="block px-6 py-3 hover:bg-primary/10 hover:border-l-2 hover:border-primary transition-all"
                        >
                          {subItem.name}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  key={item.title}
                  to={item.path!}
                  className="px-4 py-2 text-foreground hover:text-primary transition-colors relative group"
                >
                  {item.title}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                </NavLink>
              )
            )}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground neon-pulse"
            >
              Get a Quote
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-4 animate-slide-in-right">
            {menuItems.map((item) =>
              item.items ? (
                <div key={item.title} className="py-2">
                  <button
                    onClick={() =>
                      setActiveDropdown(
                        activeDropdown === item.title ? null : item.title
                      )
                    }
                    className="w-full text-left px-4 py-2 text-foreground hover:text-primary flex justify-between items-center"
                  >
                    {item.title}
                    <ChevronDown
                      className={cn(
                        "w-4 h-4 transition-transform",
                        activeDropdown === item.title && "rotate-180"
                      )}
                    />
                  </button>
                  {activeDropdown === item.title && (
                    <div className="pl-4">
                      {item.items.map((subItem) => (
                        <NavLink
                          key={subItem.path}
                          to={subItem.path}
                          className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary"
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.name}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  key={item.title}
                  to={item.path!}
                  className="block px-4 py-2 text-foreground hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </NavLink>
              )
            )}
            <div className="px-4 py-4">
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                Get a Quote
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
