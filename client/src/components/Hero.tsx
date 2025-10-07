import React from "react";

export default function Hero({ image, children }) {
  const resolvedImage = `${window.location.origin}/assets/${image}`;

  return (
    <section
      className="relative w-full min-h-[100vh] flex flex-col items-center justify-center overflow-visible bg-cover bg-top"
      style={{
        backgroundImage: `url(${resolvedImage})`,
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "scroll",
      }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 px-6 md:px-12 text-center max-w-4xl space-y-8 py-40">
        {children || <p className="text-white text-lg">Hero active: {image}</p>}
      </div>
    </section>
  );
}
