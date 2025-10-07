// /src/components/Hero.jsx
import React from "react";

export default function Hero({ image, children }) {
  const resolvedImage = `${window.location.origin}/assets/${image}`;

  return (
    <section
      className="relative w-full flex flex-col items-center justify-start overflow-visible bg-no-repeat bg-top"
      style={{
        backgroundImage: `url(${resolvedImage})`,
        backgroundSize: "contain",
        backgroundPosition: "top center",
        aspectRatio: "1440 / 2412",  // match Visily export
      }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 px-6 md:px-12 text-center max-w-5xl space-y-8 pt-[18vh] pb-[12vh]">
        {children}
      </div>
    </section>
  );
}
