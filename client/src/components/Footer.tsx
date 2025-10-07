import React from "react";

interface FooterProps {
  footer: {
    tagline: string;
    subtext: string;
  };
}

export default function Footer({ footer }: FooterProps) {
  return (
    <footer className="bg-neutral-900 text-center text-white py-10 space-y-2">
      <p className="text-sm opacity-90">{footer.tagline}</p>
      <p className="text-xs opacity-70">{footer.subtext}</p>
    </footer>
  );
}
