// /src/pages/landing.jsx
import React from "react";
import Hero from "../components/Hero";

export default function Landing() {
  return (
    <Hero image="guest-landing.png">
      {/* Remove redundant headline */}
      {/* Transparent clickable zones mapped to Visily boxes */}
      <div
        className="absolute inset-x-0 flex justify-center gap-8"
        style={{ top: "489.018px" }}
      >
        <a
          href="/guest/roadie"
          className="block w-[220px] h-[260px] bg-transparent cursor-pointer"
          title="Road Cycling"
        ></a>
        <a
          href="/guest/mountain"
          className="block w-[220px] h-[260px] bg-transparent cursor-pointer"
          title="Mountain Biking"
        ></a>
        <a
          href="/guest/triathlon"
          className="block w-[220px] h-[260px] bg-transparent cursor-pointer"
          title="Triathlon Training"
        ></a>
        <a
          href="/guest/track"
          className="block w-[220px] h-[260px] bg-transparent cursor-pointer"
          title="Track Cycling"
        ></a>
      </div>
    </Hero>
  );
}
