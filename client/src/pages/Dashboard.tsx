import Hero from "../components/Hero";

export default function Dashboard() {
  return (
    <>
      <Hero image="your-flownation.png">
        <h2 className="text-3xl md:text-5xl font-bold">Your FlowNation</h2>
        <p className="mt-2 text-white/85">Today's summary, events, buddies, and insights at a glance.</p>
      </Hero>

      <Hero image="dashboard-insights.png">
        <h3 className="text-2xl font-semibold">Dashboard & Insights</h3>
      </Hero>
    </>
  );
}
