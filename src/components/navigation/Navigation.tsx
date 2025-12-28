import { DesktopMenu } from "./DesktopMenu";
import { navData } from "./navData";

export const Navigation = () => {
  return (
    <header className="w-full bg-black text-white border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center h-20 gap-14">
          {/* Logo */}
          <div className="text-xl font-bold tracking-wide">
            SEC<span className="text-red-600">U</span>ROTIX
          </div>

          {/* Menu starts immediately after logo */}
          <DesktopMenu items={navData} />
        </div>
      </div>
    </header>
  );
};
