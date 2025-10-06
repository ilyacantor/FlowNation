import Hero from "../components/Hero";

export default function Dashboard() {
  return (
    <>
      <Hero image="your-flownation.png">
        <div className="max-w-6xl mx-auto px-6 pt-20">
          <h2 className="text-3xl md:text-5xl font-bold">Your FlowNation</h2>
          <p className="mt-2 text-white/85">Today's summary, events, buddies, and insights at a glance.</p>
        </div>
      </Hero>

      <Hero image="dashboard-insights.png">
        <div className="max-w-6xl mx-auto px-6 py-10">
          <h3 className="text-2xl font-semibold">Dashboard & Insights</h3>
        </div>
      </Hero>
    </>
  );
}
