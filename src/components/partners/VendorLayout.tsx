import { Navigation } from "@/components/navigation/Navigation";
import { Footer } from "@/components/Footer";
import type { ReactNode } from "react";

interface VendorLayoutProps {
  name: string;
  logo: string;
  overview: string;
  solutions: string[];
  differentiators: string[];
  children?: ReactNode;
  hideHero?: boolean;
  hideSolutions?: boolean;
  hideDifferentiators?: boolean;
  disableAmbient?: boolean;
}

export const VendorLayout = ({
  children,
  hideHero,
  hideSolutions,
  hideDifferentiators,
  disableAmbient,
}: VendorLayoutProps) => {
  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <Navigation />

      {/* Ambient glow (disabled for full-bleed hero pages) */}
      {!disableAmbient && (
        <div
          className="
            pointer-events-none
            absolute top-40 left-1/2 -translate-x-1/2
            w-[700px] h-[700px]
            bg-primary/20 blur-[180px]
            rounded-full
          "
        />
      )}

      <main className="relative z-10">
        {children}
      </main>

      <Footer />
    </div>
  );
};
