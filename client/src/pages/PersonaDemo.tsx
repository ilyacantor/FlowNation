import { FlowNationShell } from "@/components/layout/flownation-shell";

const marquee = [
  "Sarah just completed a 100km road ride!",
  "New event: Mountain Epic added near you",
  "Alex joined the 'Morning Runners' group",
  "FlowNation now supports custom routes!",
];

const localEvents = [
  {
    title: "Sunday Morning Group Ride",
    location: "City Park, Anyplace",
    date: "Sun, Jul 7, 2024",
  },
  {
    title: "Spring Triathlon Challenge",
    location: "Lakeside Recreation Area",
    date: "Sat, May 20, 2024",
  },
  {
    title: "Gravel Grinder Classic",
    location: "Wyoming Peaks Forest",
    date: "Sat, Aug 10, 2024",
  },
  {
    title: "Coastal Century Ride",
    location: "Coastland Loop",
    date: "Sat, Jul 13, 2024",
  },
];

const tribe = [
  { name: "Sarah Chen", label: "Road Cycling • Sprinter" },
  { name: "Miguel Ramirez", label: "Gravel • Endurance" },
  { name: "Emily White", label: "Triathlon • Strategist" },
  { name: "David Jones", label: "Trail Running • Explorer" },
];

const gear = [
  {
    title: "Road Cycling Shoes 'Speedster X'",
    description:
      "Unmatched power transfer and comfort for long-distance rides with responsive carbon soles.",
    label: "Read Review",
  },
  {
    title: "Gravel Helmet 'Trailblazer'",
    description:
      "Designed for speed, offering superior protection and aerodynamic ventilation.",
    label: "Read Review",
  },
];

const integrations = [
  { name: "Strava", status: "Connected" },
  { name: "Garmin Connect", status: "Connected" },
  { name: "Zwift", status: "Disconnected" },
];

export default function PersonaDemo() {
  return (
    <FlowNationShell>
      <main className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-12">
        <section className="space-y-8">
          <div className="rounded-[2.5rem] border border-white/10 bg-[url('https://images.unsplash.com/photo-1523419409543-0c1df022bdd6?auto=format&fit=crop&w=1800&q=80')] bg-cover bg-center p-12">
            <div className="max-w-2xl space-y-6 bg-black/50 p-8 backdrop-blur">
              <h1 className="text-3xl font-semibold text-white sm:text-4xl">
                Welcome to Your Personalized FlowNation Experience
              </h1>
              <p className="text-base text-white/80">
                Discover the best paved routes, join spirited group rides, and
                track your performance with precision. FlowNation connects you
                to a vibrant community passionate about the open road.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Road", "Gravel", "Triathlete"].map((option) => (
                  <button
                    key={option}
                    className={`rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] ${
                      option === "Road"
                        ? "bg-[#00bcc4] text-black"
                        : "border border-white/10 bg-black/40 text-white/70"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-4 rounded-full border border-white/10 bg-[#10131d] px-6 py-3 text-sm text-white/70">
            {marquee.map((item) => (
              <span key={item} className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-[#00bcc4]" />
                {item}
              </span>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-white">Local Scene</h2>
            <div className="flex gap-3">
              <button className="rounded-full bg-[#00bcc4] px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-black">
                Nearby
              </button>
              <button className="rounded-full border border-white/10 bg-[#0f121b] px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                Upcoming
              </button>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {localEvents.map((event) => (
              <article
                key={event.title}
                className="flex flex-col rounded-[1.75rem] border border-white/10 bg-[#10131d]"
              >
                <div className="h-32 rounded-t-[1.75rem] bg-[url('https://images.unsplash.com/photo-1529429617124-aeea22425632?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center" />
                <div className="flex flex-1 flex-col gap-3 px-5 py-5">
                  <h3 className="text-lg font-semibold text-white">
                    {event.title}
                  </h3>
                  <p className="text-sm text-white/60">{event.location}</p>
                  <p className="text-sm text-white/60">{event.date}</p>
                  <div className="mt-auto flex gap-3">
                    <button className="flex-1 rounded-full border border-white/10 bg-[#0f121b] px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                      View Details
                    </button>
                    <button className="flex-1 rounded-full bg-[#00bcc4] px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-black">
                      Register
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <article className="rounded-[2rem] border border-white/10 bg-[#10131d] p-8">
            <h2 className="text-base font-semibold text-white">
              Connect with Your Tribe
            </h2>
            <div className="mt-6 space-y-4">
              {tribe.map((member) => (
                <div
                  key={member.name}
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#0f121b] px-4 py-3"
                >
                  <div>
                    <p className="text-sm font-semibold text-white">
                      {member.name}
                    </p>
                    <p className="text-sm text-white/60">{member.label}</p>
                  </div>
                  <button className="rounded-full bg-[#ff6f00] px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-black">
                    Connect
                  </button>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-[2rem] border border-white/10 bg-[#10131d] p-8">
            <h2 className="text-base font-semibold text-white">
              Gear & Reviews
            </h2>
            <div className="mt-6 space-y-4">
              {gear.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-[#0f121b] px-4 py-4"
                >
                  <p className="text-sm font-semibold text-white">
                    {item.title}
                  </p>
                  <p className="mt-2 text-sm text-white/60">
                    {item.description}
                  </p>
                  <button className="mt-3 rounded-full border border-white/10 bg-[#101c2a] px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                    {item.label}
                  </button>
                </div>
              ))}
            </div>
          </article>
        </section>

        <section className="rounded-[2rem] border border-white/10 bg-[#10131d] p-8">
          <h2 className="text-base font-semibold text-white">
            Training Integrations
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {integrations.map((integration) => (
              <div
                key={integration.name}
                className="rounded-2xl border border-white/10 bg-[#0f121b] px-4 py-4 text-center"
              >
                <p className="text-sm font-semibold text-white">
                  {integration.name}
                </p>
                <span
                  className={`mt-3 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] ${
                    integration.status === "Disconnected"
                      ? "bg-[#ff5858] text-white"
                      : "bg-[#00bcc4] text-black"
                  }`}
                >
                  {integration.status}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-[2.5rem] border border-white/10 bg-gradient-to-r from-[#00bcc4] via-[#00cbe0] to-[#6f89ff] px-10 py-12 text-center text-[#0b0f17]">
          <h2 className="text-3xl font-semibold">
            Join the FlowNation Community Today!
          </h2>
          <p className="mt-4 text-base">
            Unlock your full potential, connect with athletes worldwide, and
            achieve your goals with FlowNation's personalized experience.
          </p>
          <form className="mt-6 grid gap-4 md:grid-cols-[1fr_1fr_auto]">
            <input
              placeholder="Your Name"
              className="rounded-full bg-white/80 px-6 py-3 text-sm text-[#0b0f17] placeholder:text-[#0b0f17]/60 focus:outline-none"
            />
            <input
              placeholder="Your Email"
              className="rounded-full bg-white/80 px-6 py-3 text-sm text-[#0b0f17] placeholder:text-[#0b0f17]/60 focus:outline-none"
            />
            <button className="rounded-full bg-[#ff6f00] px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-black">
              Join FlowNation
            </button>
          </form>
          <p className="mt-4 text-xs uppercase tracking-[0.3em]">
            Trusted by thousands of athletes worldwide.
          </p>
        </section>
      </main>

      <footer className="mt-12 border-t border-white/10 bg-black/40">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-6 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <span className="font-semibold text-white">Resources</span>
            <span>Company</span>
            <span>Legal</span>
          </div>
          <p className="text-xs uppercase tracking-[0.3em] text-white/40">
            © FlowNation. All rights reserved.
          </p>
        </div>
      </footer>
    </FlowNationShell>
  );
}
