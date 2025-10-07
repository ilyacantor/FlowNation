import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { Filter, Search } from "lucide-react";

import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Discover", href: "/discover" },
  { label: "Community", href: "/community" },
  { label: "Dashboard", href: "/dashboard" },
  { label: "Persona", href: "/persona" },
  { label: "Profile", href: "/profile" },
];

interface FlowNationShellProps {
  children: ReactNode;
  className?: string;
}

export function FlowNationShell({ children, className }: FlowNationShellProps) {
  const location = useLocation();

  const isActive = (href: string) => {
    if (href === "/") {
      return location.pathname === "/";
    }

    return (
      location.pathname === href || location.pathname.startsWith(`${href}/`)
    );
  };

  return (
    <div className={cn("min-h-screen bg-[#05060b] text-white", className)}>
      <header className="border-b border-white/10 bg-gradient-to-r from-[#03b3d4] via-[#03c5d5] to-[#03d8c6]">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4">
          <Link to="/" className="flex items-center gap-3 text-black">
            <span className="rounded-full bg-white/30 px-3 py-1 text-xs font-bold uppercase tracking-[0.3em]">
              FN
            </span>
            <span className="font-display text-xl font-semibold tracking-[0.2em]">
              FlowNation
            </span>
          </Link>
          <nav className="flex flex-1 items-center justify-center gap-6 text-xs font-semibold uppercase tracking-[0.3em] text-black">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "transition",
                  isActive(item.href) ? "text-white" : "hover:text-white",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <div className="relative hidden sm:block">
              <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-black/50" />
              <input
                placeholder="Search events by name or location..."
                className="h-10 rounded-full bg-white/40 pl-12 pr-4 text-sm text-black placeholder:text-black/60 focus:outline-none"
              />
            </div>
            <button className="flex h-10 w-10 items-center justify-center rounded-full border border-black/20 bg-white/40 text-black">
              <Filter className="size-4" />
            </button>
          </div>
        </div>
      </header>
      {children}
    </div>
  );
}
