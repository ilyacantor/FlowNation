import { FlowNationShell } from "@/components/layout/flownation-shell";

const eventFilters = ["Cycling", "Triathlon", "Mehning", "Gravel"];

const events = [
  {
    name: "Coastal Endurance Challenge",
    date: "Sat, Jun 22, 2024",
    distance: "100 km",
    elevation: "1200 m",
  },
  {
    name: "Desert Iron Man",
    date: "Sun, Jul 14, 2024",
    distance: "226 km",
    elevation: "800 m",
  },
  {
    name: "Mountain Trail Marathon",
    date: "Sat, Aug 3, 2024",
    distance: "42 km",
    elevation: "2500 m",
  },
  {
    name: "Urban Cycling Criterium",
    date: "Sat, Sep 7, 2024",
    distance: "50 km",
    elevation: "300 m",
  },
  {
    name: "Forest Gravel Race",
    date: "Sun, Oct 20, 2024",
    distance: "80 km",
    elevation: "1500 m",
  },
];

export default function EventDiscovery() {
  return (
    <FlowNationShell>
      <main className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-12">
        <section className="overflow-hidden rounded-[2.5rem] border border-white/10">
          <div className="relative h-72 w-full bg-[url('https://images.unsplash.com/photo-1507831228884-93d43e8f26d2?auto=format&fit=crop&w=1800&q=80')] bg-cover bg-center">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40" />
            <div className="absolute bottom-6 left-6 space-y-2">
              <span className="rounded-full bg-[#00bcc4]/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[#00bcc4]">
                Coastal Endurance Challenge
              </span>
              <p className="text-sm text-white/80">Sat, Jun 22, 2024</p>
              <p className="text-sm text-white/80">100 km</p>
              <a
                href="#events"
                className="text-sm font-semibold text-[#00bcc4]"
              >
                View Details
              </a>
            </div>
          </div>
        </section>

        <section className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div className="rounded-[2rem] border border-white/10 bg-[#10131d] p-8">
            <h2 className="text-base font-semibold text-white">
              Filter Events
            </h2>
            <div className="mt-6 space-y-6">
              <div className="space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/70">
                  Sport Type
                </p>
                <div className="flex flex-wrap gap-3">
                  {eventFilters.map((filter) => (
                    <button
                      key={filter}
                      className={`rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] ${
                        filter === "Cycling"
                          ? "bg-[#00bcc4] text-black"
                          : "border border-white/10 bg-[#0f121b] text-white/70"
                      }`}
                    >
                      {filter}
                    </button>
                  ))}
                </div>
              </div>
              <div className="space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/70">
                  Max Distance (km)
                </p>
                <input
                  defaultValue="100"
                  className="w-full rounded-2xl border border-white/10 bg-[#0f121b] px-4 py-3 text-sm text-white/80 focus:border-[#00bcc4] focus:outline-none"
                />
              </div>
              <div className="space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/70">
                  Location
                </p>
                <input
                  placeholder="Anywhere"
                  className="w-full rounded-2xl border border-white/10 bg-[#0f121b] px-4 py-3 text-sm text-white/80 focus:border-[#00bcc4] focus:outline-none"
                />
              </div>
              <button className="w-full rounded-full bg-[#00bcc4] px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-black">
                Apply Filters
              </button>
            </div>
          </div>

          <div className="space-y-6" id="events">
            <h2 className="text-base font-semibold text-white">
              Upcoming Events
            </h2>
            <div className="space-y-4">
              {events.map((event) => (
                <article
                  key={event.name}
                  className="rounded-[1.75rem] border border-white/10 bg-[#10131d] px-6 py-6"
                >
                  <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        {event.name}
                      </h3>
                      <p className="text-sm text-white/70">{event.date}</p>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-white/70">
                      <span>{event.distance}</span>
                      <span>{event.elevation}</span>
                    </div>
                    <button className="rounded-full bg-[#ff6f00] px-6 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-black">
                      Register
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="mt-12 bg-gradient-to-r from-[#00bcc4] via-[#00cbe0] to-[#ff6f00] py-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm font-semibold uppercase tracking-[0.3em] text-[#0b0f17] md:flex-row">
          <div className="flex items-center gap-6">
            <span>FlowNation</span>
            <span>Support</span>
            <span>Legal</span>
          </div>
          <p className="text-xs uppercase tracking-[0.3em]">Discover Events</p>
        </div>
      </footer>
    </FlowNationShell>
  );
}
