import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const Header = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/guest/entrepreneur", label: "Personas" },
    { path: "/dashboard", label: "Dashboard" },
    { path: "/community", label: "Community" },
    { path: "/profile", label: "Profile" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">F</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              FlowNation
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                data-testid={`nav-${item.label.toLowerCase()}`}
                className={cn(
                  "nav-link",
                  (location.pathname === item.path ||
                    (item.path.includes("guest") && location.pathname.startsWith("/guest"))) &&
                    "active"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <button
              data-testid="button-signin"
              className="hidden md:inline-flex px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Sign In
            </button>
            <button
              data-testid="button-get-started"
              className="px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
