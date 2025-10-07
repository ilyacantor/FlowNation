import { FlowNationShell } from "@/components/layout/flownation-shell";

const metrics = [
  { label: "Functional Threshold Power", value: "285W" },
  { label: "Average Speed", value: "28.5 km/h" },
  { label: "Rides Completed", value: "124" },
];

const mileage = [120, 135, 150, 180, 160];
const mileageLabels = ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"];

const power = [220, 240, 230, 260, 280];
const powerLabels = ["Jan", "Feb", "Mar", "Apr", "May"];

const events = [
  {
    event: "Sunrise Century Ride",
    date: "2024-05-18",
    type: "Cycling",
    distance: "160km",
    result: "4h 32m",
  },
  {
    event: "Lakeside Triathlon",
    date: "2024-04-22",
    type: "Triathlon",
    distance: "Olympic",
    result: "2h 45m",
  },
  {
    event: "Urban Marathon",
    date: "2024-03-10",
    type: "Running",
    distance: "42.2km",
    result: "3h 15m",
  },
  {
    event: "Mountain Gravel Race",
    date: "2024-02-15",
    type: "Gravel",
    distance: "80km",
    result: "3h 05m",
  },
  {
    event: "Winter Duathlon",
    date: "2024-01-05",
    type: "Duathlon",
    distance: "Sprint",
    result: "1h 28m",
  },
];

const badges = [
  "Centurion",
  "King of the Mountain",
  "Iron Will",
  "Eco Rider",
  "Consistent Climber",
  "Marathon Finisher",
];

export default function DashboardInsights() {
  return (
    <FlowNationShell>
      <main className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-12">
        <section className="rounded-[2rem] border border-white/10 bg-[#10131d] p-8">
          <div className="flex items-center gap-4">
            <img
              src="https://api.dicebear.com/7.x/thumbs/svg?seed=Alex"
              alt="Alex"
              className="size-20 rounded-full border-4 border-[#161b29]"
            />
            <div>
              <h1 className="text-3xl font-semibold text-white">Alex</h1>
              <p className="text-sm text-white/70">
                Functional Threshold Power
              </p>
            </div>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-2xl border border-white/10 bg-[#0f121b] px-4 py-6 text-center"
              >
                <p className="text-2xl font-semibold text-white">
                  {metric.value}
                </p>
                <p className="mt-2 text-xs uppercase tracking-[0.3em] text-white/60">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-[2rem] border border-white/10 bg-[#10131d] p-8">
            <header className="flex items-center justify-between">
              <h2 className="text-base font-semibold text-white">
                Weekly Mileage
              </h2>
              <span className="text-xs uppercase tracking-[0.3em] text-white/50">
                Mileage (km)
              </span>
            </header>
            <div className="mt-8 flex h-56 items-end justify-between">
              {mileage.map((value, index) => (
                <div
                  key={mileageLabels[index]}
                  className="flex w-full flex-col items-center"
                >
                  <div className="relative flex h-full w-full items-end justify-center">
                    <div
                      className="w-12 rounded-t-full bg-gradient-to-t from-[#03d8c6] to-[#03b3d4]"
                      style={{
                        height: `${(value / Math.max(...mileage)) * 100}%`,
                      }}
                    />
                  </div>
                  <p className="mt-3 text-xs uppercase tracking-[0.3em] text-white/50">
                    {mileageLabels[index]}
                  </p>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-[2rem] border border-white/10 bg-[#10131d] p-8">
            <header className="flex items-center justify-between">
              <h2 className="text-base font-semibold text-white">
                Average Power Trend
              </h2>
              <span className="text-xs uppercase tracking-[0.3em] text-white/50">
                Average Power (W)
              </span>
            </header>
            <div className="mt-8 grid h-56 grid-cols-5 items-end gap-4">
              {power.map((value, index) => (
                <div
                  key={powerLabels[index]}
                  className="flex flex-col items-center"
                >
                  <div
                    className="w-full rounded-t-xl bg-[#ff6f00]"
                    style={{ height: `${(value / Math.max(...power)) * 100}%` }}
                  />
                  <p className="mt-3 text-xs uppercase tracking-[0.3em] text-white/50">
                    {powerLabels[index]}
                  </p>
                </div>
              ))}
            </div>
          </article>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-[2rem] border border-white/10 bg-[#10131d] p-8">
            <h2 className="text-base font-semibold text-white">
              Weekly Mileage
            </h2>
            <div className="mt-8 flex h-56 items-end justify-between">
              {mileage.map((value, index) => (
                <div
                  key={mileageLabels[index]}
                  className="flex w-full flex-col items-center"
                >
                  <div className="relative flex h-full w-full items-end justify-center">
                    <div
                      className="w-12 rounded-t-full bg-gradient-to-t from-[#03d8c6] to-[#03b3d4]"
                      style={{
                        height: `${(value / Math.max(...mileage)) * 100}%`,
                      }}
                    />
                  </div>
                  <p className="mt-3 text-xs uppercase tracking-[0.3em] text-white/50">
                    {mileageLabels[index]}
                  </p>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-[2rem] border border-white/10 bg-[#10131d] p-8">
            <h2 className="text-base font-semibold text-white">
              Average Power Trend
            </h2>
            <div className="mt-8 grid h-56 grid-cols-5 items-end gap-4">
              {power.map((value, index) => (
                <div
                  key={powerLabels[index]}
                  className="flex flex-col items-center"
                >
                  <div
                    className="w-full rounded-t-xl bg-[#ff6f00]"
                    style={{ height: `${(value / Math.max(...power)) * 100}%` }}
                  />
                  <p className="mt-3 text-xs uppercase tracking-[0.3em] text-white/50">
                    {powerLabels[index]}
                  </p>
                </div>
              ))}
            </div>
          </article>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-[2rem] border border-white/10 bg-[#10131d] p-8">
            <h2 className="text-base font-semibold text-white">
              Recent Event Results
            </h2>
            <div className="mt-6 space-y-4">
              {events.map((event) => (
                <div
                  key={event.event}
                  className="grid gap-4 rounded-2xl border border-white/10 bg-[#0f121b] px-4 py-4 sm:grid-cols-5"
                >
                  <p className="text-sm font-semibold text-white sm:col-span-2">
                    {event.event}
                  </p>
                  <p className="text-sm text-white/60">{event.date}</p>
                  <p className="text-sm text-white/60">{event.type}</p>
                  <div className="flex items-center justify-between text-sm text-white/60 sm:flex-col sm:items-start sm:gap-1">
                    <span>{event.distance}</span>
                    <span>{event.result}</span>
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-[2rem] border border-white/10 bg-[#10131d] p-8">
            <h2 className="text-base font-semibold text-white">
              Badges & Achievements
            </h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {badges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full bg-[#ff6f00] px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-black"
                >
                  {badge}
                </span>
              ))}
            </div>
          </article>
        </section>
      </main>

      <footer className="mt-16 bg-gradient-to-r from-[#00bcc4] via-[#00cbe0] to-[#ff6f00] py-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm font-semibold uppercase tracking-[0.3em] text-[#0b0f17] md:flex-row">
          <div className="flex items-center gap-6">
            <span>FlowNation</span>
            <span>Support</span>
            <span>Legal</span>
          </div>
          <p className="text-xs uppercase tracking-[0.3em]">Performance Hub</p>
        </div>
      </footer>
    </FlowNationShell>
  );
}
