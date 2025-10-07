import type { PropsWithChildren } from "react";

import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

export const SiteLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="pb-24 pt-16">{children}</main>
      <SiteFooter />
    </div>
  );
};
