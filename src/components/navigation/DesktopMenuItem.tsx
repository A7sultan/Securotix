import type { NavItem } from "./navData";
import { ChevronRight, ChevronDown } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import clsx from "clsx";
import { NavLink } from "./NavLink"

interface Props {
  item: NavItem;
  depth: number;
}

export const DesktopMenuItem = ({ item, depth }: Props) => {
  const [open, setOpen] = useState(false);
  const [openLeft, setOpenLeft] = useState(false);
  const ref = useRef<HTMLLIElement>(null);

  const hasChildren = !!item.children?.length;

  useEffect(() => {
    if (!open || !ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const viewportWidth = window.innerWidth;

    if (rect.right + 280 > viewportWidth) {
      setOpenLeft(true);
    } else {
      setOpenLeft(false);
    }
  }, [open]);

  const dropdownPosition =
    depth === 0
      ? "left-0 top-full mt-2"
      : openLeft
      ? "right-full top-0 mr-2"
      : "left-full top-0 ml-2";

  return (
    <li
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* Trigger */}
     {item.href ? (
  <NavLink
    to={item.href}
    className={clsx(
      "flex items-center gap-2 select-none",
      depth === 0
        ? "text-sm uppercase tracking-wide hover:text-red-500"
        : "px-4 py-3 hover:bg-red-700"
    )}
  >
    {item.label}
    {hasChildren &&
      (depth === 0 ? (
        <ChevronDown className="w-4 h-4 opacity-70" />
      ) : (
        <ChevronRight className="w-4 h-4 opacity-70 ml-auto" />
      ))}
  </NavLink>
) : (
  <div
    className={clsx(
      "flex items-center gap-2 cursor-default select-none",
      depth === 0
        ? "text-sm uppercase tracking-wide"
        : "px-4 py-3 hover:bg-red-700"
    )}
  >
    {item.label}
    {hasChildren &&
      (depth === 0 ? (
        <ChevronDown className="w-4 h-4 opacity-70" />
      ) : (
        <ChevronRight className="w-4 h-4 opacity-70 ml-auto" />
      ))}
  </div>
)}


      {/* Dropdown */}
      {hasChildren && open && (
        <ul
          className={clsx(
            "absolute z-50 min-w-[260px]",
            "bg-black/95 border border-white/10",
            "rounded-md shadow-2xl",
            dropdownPosition
          )}
        >
          {item.children!.map((child) => (
            <DesktopMenuItem
              key={child.label}
              item={child}
              depth={depth + 1}
            />
          ))}
        </ul>
      )}
    </li>
  );
};
