import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { SiteLayout } from "@/components/layout/site-layout";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <SiteLayout>
      <section className="container flex min-h-[60vh] items-center justify-center">
        <div className="w-full max-w-xl rounded-xl border border-white/10 bg-secondary/70 p-12 text-center shadow-card-soft">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">
            Error 404
          </p>
          <h1 className="mt-4 font-display text-3xl text-white">
            Page not found
          </h1>
          <p className="mt-4 text-sm text-foreground/70">
            The route <span className="text-primary">{location.pathname}</span>{" "}
            is outside the FlowNation system guidelines. Navigate back to the
            design system to continue building.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button
              className="rounded-full bg-primary px-6 text-xs font-semibold uppercase tracking-[0.35em] text-primary-foreground hover:bg-primary/90"
              asChild
            >
              <a href="/">Go to design system</a>
            </Button>
            <Button
              variant="ghost"
              className="rounded-full border border-white/10 bg-transparent px-6 text-xs font-semibold uppercase tracking-[0.35em] text-foreground/70 hover:border-primary/40 hover:text-white"
              asChild
            >
              <a href="#components">Browse components</a>
            </Button>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default NotFound;
