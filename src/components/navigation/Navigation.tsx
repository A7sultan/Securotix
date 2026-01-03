import { useState } from "react";
import { DesktopMenu } from "./DesktopMenu";
import { MobileMenu } from "./MobileMenu";
import { navData } from "./navData";
import logo from "../../assets/Frame 1.png";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

export const Navigation = () => {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="
        fixed top-0 left-0 right-0 z-50
        bg-black/90 backdrop-blur
        border-b border-white/10
      "
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center justify-between h-24 lg:h-32">
          {/* Logo */}
          <Link to="/" aria-label="Go to Home">
            <img
              src={logo}
              alt="Securotix Logo"
              className="
      h-20 sm:h-22 lg:h-28
      w-auto
      object-contain
      brightness-125
      shrink-0
    "
            />
          </Link>

          {/* Desktop Menu */}
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

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setOpen((o) => !o)}
            className="lg:hidden text-white"
            aria-label="Toggle Menu"
          >
            {open ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile / Tablet Menu */}
      {open && (
        <div className="lg:hidden bg-black/95 border-t border-white/10">
          <MobileMenu items={navData} onClose={() => setOpen(false)} />
        </div>
      )}
    </header>
  );
};
