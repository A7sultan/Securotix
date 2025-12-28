import { useState } from "react";
import { DesktopMenu } from "./DesktopMenu";
import { MobileMenu } from "./MobileMenu";
import { navData } from "./navData";
import logo from "../../assets/Frame 1.png";
import { Menu, X } from "lucide-react";

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

          {/* Desktop Menu */}
          <div className="hidden lg:block">
            <DesktopMenu items={navData} />
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
          <MobileMenu
            items={navData}
            onClose={() => setOpen(false)}
          />
        </div>
      )}
    </header>
  );
};
