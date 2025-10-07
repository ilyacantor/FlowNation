// /src/components/Hero.jsx
import React from "react";

export default function Hero({ image, children }) {
  const resolvedImage = `${window.location.origin}/assets/${image}`;

  return (
    <section
      className="relative w-full flex flex-col items-center justify-start overflow-visible bg-cover bg-top"
      style={{
        backgroundImage: `url(${resolvedImage})`,
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "scroll",
        backgroundPosition: "center top",
        backgroundSize: "100% auto", // maintain full vertical height
      }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 px-6 md:px-12 text-center max-w-5xl space-y-8 pt-48 pb-[25vh]">
        {children || <p className="text-white text-lg">Hero active: {image}</p>}
      </div>
    </section>
  );
}
