import type { NavItem } from "./navData";
import { DesktopMenuItem } from "./DesktopMenuItem";

export function DesktopMenu({ items }: { items: NavItem[] }) {
  return (
    <ul className="flex items-center gap-8">
      {items.map((item) => (
        <DesktopMenuItem
          key={item.label}
          item={item}
          depth={0}
        />
      ))}
    </ul>
  );
}
