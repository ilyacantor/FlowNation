import React from "react";
import { landingContent } from "../data/landingContent";
import Header from "../components/layout/header";
import Footer from "../components/layout/footer";
import HeroSection from "../components/HeroSection";
import FeatureGrid from "../components/FeatureGrid";
import MetricsBand from "../components/MetricsBand";
import BenefitsSection from "../components/BenefitsSection";

export default function Landing() {
  const { hero, features, metrics, benefits } = landingContent;
  return (
    <>
      <Header />
      <main className="flex flex-col min-h-screen bg-neutral-950">
        <HeroSection hero={hero} />
        <FeatureGrid features={features} />
        <MetricsBand metrics={metrics} />
        <BenefitsSection benefits={benefits} />
      </main>
      <Footer />
    </>
  );
}
