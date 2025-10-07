import React from "react";
import { Button } from "@/components/ui/button";

export default function HeroSection({ hero }) {
  return (
    <section
      className="relative w-full bg-cover bg-center flex flex-col items-center justify-center text-center text-white py-32 md:py-48"
      style={{ backgroundImage: `url(${hero.image})` }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 max-w-3xl px-6 space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold">{hero.title}</h1>
        <p className="text-lg md:text-xl opacity-90">{hero.subtitle}</p>
        <Button asChild className="bg-cyan-500 hover:bg-orange-500 text-white px-6 py-3 text-lg rounded-xl shadow-lg">
          <a href={hero.button.link}>{hero.button.label}</a>
        </Button>
      </div>
    </section>
  );
}
