import React from "react";

export default function Hero({ image, children }) {
  // Correct public path reference for Replit/Vite
  const resolvedImage = `/assets/${image}`;

  return (
    <section
      className="relative w-full flex flex-col items-center justify-center bg-cover bg-center overflow-hidden py-32 md:py-48"
      style={{
        backgroundImage: `url(${resolvedImage})`,
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "scroll",
      }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 px-6 md:px-12 text-center max-w-4xl space-y-6">
        {children}
      </div>
    </section>
  );
}
