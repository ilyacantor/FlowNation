import { Builder } from "@builder.io/react";
import HeroSection from "../components/HeroSection";
import FeatureGrid from "../components/FeatureGrid";
import MetricsBand from "../components/MetricsBand";
import BenefitsSection from "../components/BenefitsSection";
import Footer from "../components/Footer";

Builder.registerComponent(HeroSection, {
  name: "Hero Section",
  inputs: [
    {
      name: "hero",
      type: "object",
      defaultValue: {
        title: "Your World of Endurance, Personalized.",
        subtitle: "Choose your sport and watch your FlowNation come alive — built by athletes, for athletes.",
        button: { label: "See My Flow", link: "/guest" },
        image: "/assets/guest-landing.png",
      },
      subFields: [
        { name: "title", type: "string" },
        { name: "subtitle", type: "text" },
        {
          name: "button",
          type: "object",
          subFields: [
            { name: "label", type: "string" },
            { name: "link", type: "string" },
          ],
        },
        { name: "image", type: "file", allowedFileTypes: ["jpg", "png", "webp"] },
      ],
    },
  ],
});

Builder.registerComponent(FeatureGrid, {
  name: "Feature Grid",
  inputs: [
    {
      name: "features",
      type: "list",
      defaultValue: [
        {
          title: "Road Cycling",
          desc: "Conquer epic climbs and fast descents.",
          icon: "Bike",
          link: "/guest/roadie",
        },
      ],
      subFields: [
        { name: "title", type: "string" },
        { name: "desc", type: "text" },
        { name: "icon", type: "string" },
        { name: "link", type: "string" },
      ],
    },
  ],
});

Builder.registerComponent(MetricsBand, {
  name: "Metrics Band",
  inputs: [
    {
      name: "metrics",
      type: "object",
      defaultValue: {
        headline: "12,000+ athletes worldwide",
        subtext: "Built for the endurance community — by athletes, for athletes.",
      },
      subFields: [
        { name: "headline", type: "string" },
        { name: "subtext", type: "text" },
      ],
    },
  ],
});

Builder.registerComponent(BenefitsSection, {
  name: "Benefits Section",
  inputs: [
    {
      name: "benefits",
      type: "list",
      defaultValue: [
        {
          title: "Connected Ecosystem",
          desc: "Integrate your Strava, Garmin, or Zwift data seamlessly.",
          icon: "Link2",
        },
      ],
      subFields: [
        { name: "title", type: "string" },
        { name: "desc", type: "text" },
        { name: "icon", type: "string" },
      ],
    },
  ],
});

Builder.registerComponent(Footer, {
  name: "Footer",
  inputs: [
    {
      name: "footer",
      type: "object",
      defaultValue: {
        tagline: "Free forever for athletes · No ads · No noise · Just your flow",
        subtext: "© 2025 FlowNation. All rights reserved.",
      },
      subFields: [
        { name: "tagline", type: "string" },
        { name: "subtext", type: "string" },
      ],
    },
  ],
});
