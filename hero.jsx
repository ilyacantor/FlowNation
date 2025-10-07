import React from "react";

export default function Hero({ image, children }) {
  if (!image) {
    console.warn("⚠️ Hero called without image prop.");
  }

  const resolvedImage = new URL(`../assets/${image}`, import.meta.url).href;

  return (
    <section
      className="relative w-full h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `url(${resolvedImage})`,
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "scroll",
      }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 px-6 md:px-12 text-center max-w-4xl">
        {children || <p className="text-white">[Hero placeholder]</p>}
      </div>
    </section>
  );
}
