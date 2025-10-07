import { useState } from "react";
import { Menu, Search, UserRound, X } from "lucide-react";

import { Button } from "@/components/ui/button";

const NAV_ITEMS = [
  { label: "Home", href: "#hero" },
  { label: "Discover", href: "#colors" },
  { label: "Community", href: "#typography" },
  { label: "Dashboard", href: "#components" },
  { label: "Profile", href: "#footer" },
];

export const SiteHeader = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen((prev) => !prev);
  const close = () => setOpen(false);

  return (
    <header className="relative z-40 w-full border-b border-black/10 bg-[#00bcc4] text-black shadow-[0_12px_30px_-20px_rgba(0,0,0,0.45)]">
      <div className="container flex h-16 items-center justify-between gap-4 text-sm font-semibold uppercase tracking-[0.3em]">
        <a
          href="#hero"
          className="flex items-center gap-3 text-black"
          onClick={close}
        >
          <span className="rounded-full bg-black/10 px-3 py-1 text-xs font-bold">
            FN
          </span>
          <span className="font-display text-base tracking-[0.18em]">
            FlowNationUI
          </span>
        </a>
        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <button
            type="button"
            aria-label="Search"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/40 text-black transition hover:border-white/40 hover:text-white"
          >
            <Search className="size-4" />
          </button>
          <button
            type="button"
            aria-label="Account"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/40 text-black transition hover:border-white/40 hover:text-white"
          >
            <UserRound className="size-4" />
          </button>
        </div>
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-black/20 bg-white/40 text-black transition hover:border-white/40 hover:text-white lg:hidden"
          onClick={toggle}
          aria-label={open ? "Close navigation" : "Open navigation"}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      {open ? (
        <div className="border-t border-black/10 bg-[#00bcc4] text-black lg:hidden">
          <div className="container flex flex-col gap-4 py-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="uppercase tracking-[0.3em]"
                onClick={close}
              >
                {item.label}
              </a>
            ))}
            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                className="w-full border border-black/20 bg-white/40 text-xs uppercase tracking-[0.3em] text-black hover:border-white/40 hover:text-white"
                onClick={close}
              >
                Search
              </Button>
              <Button
                variant="ghost"
                className="w-full border border-black/20 bg-white/40 text-xs uppercase tracking-[0.3em] text-black hover:border-white/40 hover:text-white"
                onClick={close}
              >
                Account
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
};
