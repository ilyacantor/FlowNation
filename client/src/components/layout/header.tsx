import { Link, useLocation } from "react-router-dom";

const links = [
  { to: "/", label: "FlowNation" },
  { to: "/guest/roadie", label: "Guest Persona" },
  { to: "/dashboard", label: "Dashboard" },
  { to: "/community", label: "Community" },
  { to: "/profile", label: "Profile" },
];

export default function Header() {
  const { pathname } = useLocation();
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-md border-b border-white/10">
      <nav className="max-w-6xl mx-auto px-4 h-14 flex items-center gap-5">
        {links.map(l => (
          <Link
            key={l.to}
            to={l.to}
            className={`text-sm ${pathname===l.to ? "text-white font-semibold" : "text-white/80 hover:text-white"}`}
          >
            {l.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
