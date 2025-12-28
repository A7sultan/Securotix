import { useState } from "react";
import type { NavItem } from "./navData";
import { ChevronDown, ChevronUp } from "lucide-react";
import { NavLink } from "./NavLink";
import clsx from "clsx";

interface MobileMenuProps {
  items: NavItem[];
  onClose?: () => void;
}

export const MobileMenu = ({ items, onClose }: MobileMenuProps) => {
  return (
    <nav className="px-6 py-8 space-y-2">
      {items.map((item) => (
        <MobileMenuItem
          key={item.label}
          item={item}
          depth={0}
          onClose={onClose}
        />
      ))}
    </nav>
  );
};

interface ItemProps {
  item: NavItem;
  depth: number;
  onClose?: () => void;
}

const MobileMenuItem = ({ item, depth, onClose }: ItemProps) => {
  const [open, setOpen] = useState(false);
  const hasChildren = !!item.children?.length;

  return (
    <div className={clsx(depth > 0 && "ml-4")}>
      {/* Row */}
      <div
        className={clsx(
          "flex items-center justify-between rounded-md",
          depth === 0
            ? "py-3 text-lg font-semibold"
            : "py-2 text-base",
          "text-white hover:text-primary transition"
        )}
      >
        {/* Link or Label */}
        {item.href ? (
          <NavLink
            to={item.href}
            onClick={onClose}
            className="flex-1"
          >
            {item.label}
          </NavLink>
        ) : (
          <span className="flex-1">{item.label}</span>
        )}

        {/* Toggle */}
        {hasChildren && (
          <button
            onClick={() => setOpen(!open)}
            className="ml-4 text-white/70 hover:text-primary transition"
            aria-label="Toggle submenu"
          >
            {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>
        )}
      </div>

      {/* Children */}
      {hasChildren && open && (
        <div className="mt-1 space-y-1 border-l border-white/10 pl-4">
          {item.children!.map((child) => (
            <MobileMenuItem
              key={child.label}
              item={child}
              depth={depth + 1}
              onClose={onClose}
            />
          ))}
        </div>
      )}
    </div>
  );
};
