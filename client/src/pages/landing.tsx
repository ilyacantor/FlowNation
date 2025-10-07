import React from "react";
import { landingContent } from "../data/landingContent";
import HeroSection from "../components/HeroSection";
import FeatureGrid from "../components/FeatureGrid";
import MetricsBand from "../components/MetricsBand";
import BenefitsSection from "../components/BenefitsSection";
import Footer from "../components/Footer";

export default function Landing() {
  const { hero, features, metrics, benefits, footer } = landingContent;
  return (
    <main className="flex flex-col min-h-screen bg-neutral-950">
      <HeroSection hero={hero} />
      <FeatureGrid features={features} />
      <MetricsBand metrics={metrics} />
      <BenefitsSection benefits={benefits} />
      <Footer footer={footer} />
    </main>
  );
}
