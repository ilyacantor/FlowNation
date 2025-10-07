import React from "react";

interface MetricsBandProps {
  metrics: {
    headline: string;
    subtext: string;
  };
}

export default function MetricsBand({ metrics }: MetricsBandProps) {
  return (
    <section className="bg-cyan-600 text-white text-center py-12">
      <h2 className="text-3xl font-bold">{metrics.headline}</h2>
      <p className="text-lg opacity-90 mt-2">{metrics.subtext}</p>
    </section>
  );
}
