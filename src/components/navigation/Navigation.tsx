import { useState, useEffect } from "react";
import { DesktopMenu } from "./DesktopMenu";
import { MobileMenu } from "./MobileMenu";
import { navData } from "./navData";
import logo from "../../assets/Frame 1.png";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

export const Navigation = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20); 
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-500
        ${scrolled 
          ? "bg-black/90 backdrop-blur border-b border-white/10" 
          : "bg-transparent"
        }
      `}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center justify-between h-24 lg:h-32">

          {/* Logo */}
          <Link to="/" aria-label="Go to Home">
            <img
              src={logo}
              alt="Securotix Logo"
              className="h-20 lg:h-28 object-contain brightness-125"
            />
          </Link>

          {/* Desktop */}
          <div className="hidden lg:flex items-center gap-8">
            <DesktopMenu items={navData} />

            <a href="/contact">
              <Button
                size="lg"
                className="
                  bg-primary
                  text-primary-foreground
                  hover:bg-primary/90
                  neon-pulse
                  text-lg
                  px-8
                  py-6
                "
              >
                Get a Quote
              </Button>
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(o => !o)}
            className="lg:hidden text-white"
          >
            {open ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile */}
      {open && (
        <div className="lg:hidden bg-black/95 border-t border-white/10">
          <MobileMenu items={navData} onClose={() => setOpen(false)} />
        </div>
      )}
    </header>
  );
};
