import { FlowNationShell } from "@/components/layout/flownation-shell";
import {
  Search,
  SlidersHorizontal,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";

const buddies = [
  {
    name: "Alex 'The Pacer' Smith",
    stats: "124 Rides • 28.5km/h Avg. Speed",
    events: "7 Events Together",
    action: "Connect",
  },
  {
    name: "Sarah 'Trailblazer' Lee",
    stats: "89 Rides • 22.1km/h Avg. Speed",
    events: "5 Events Together",
    action: "View Profile",
  },
  {
    name: "Mike 'Powerhouse' Chen",
    stats: "155 Rides • 30.2km/h Avg. Speed",
    events: "11 Events Together",
    action: "Connect",
  },
  {
    name: "Emily 'Speedy' White",
    stats: "98 Rides • 27.8km/h Avg. Speed",
    events: "5 Events Together",
    action: "Connect",
  },
  {
    name: "David 'Enduro' Brown",
    stats: "110 Rides • 25.3km/h Avg. Speed",
    events: "6 Events Together",
    action: "View Profile",
  },
  {
    name: "Jessica 'Summit' Green",
    stats: "72 Rides • 18.9km/h Avg. Speed",
    events: "2 Events Together",
    action: "Connect",
  },
  {
    name: "Chris 'Navigator' Davis",
    stats: "130 Rides • 27.9km/h Avg. Speed",
    events: "8 Events Together",
    action: "Connect",
  },
  {
    name: "Olivia 'Relentless' Taylor",
    stats: "65 Rides • 20.3km/h Avg. Speed",
    events: "4 Events Together",
    action: "View Profile",
  },
  {
    name: "Daniel 'Iron' Rodriguez",
    stats: "140 Rides • 31.5km/h Avg. Speed",
    events: "10 Events Together",
    action: "Connect",
  },
];

const suggestions = [
  {
    name: "Sophia 'Sprinter' King",
    stats: "55 Rides • 24km/h Avg. Speed",
    events: "1 Events Together",
    action: "Connect",
  },
  {
    name: "Lucas 'Climber' Hall",
    stats: "80 Rides • 15.2km/h Avg. Speed",
    events: "2 Events Together",
    action: "Connect",
  },
  {
    name: "Mia 'Zen' Kim",
    stats: "30 Rides • 19.8km/h Avg. Speed",
    events: "0 Events Together",
    action: "View Profile",
  },
];

const chats = [
  {
    name: "Alex Smith",
    message: "Hey, thinking about that long ride next weekend. You in?",
  },
  {
    name: "Sarah Lee",
    message: "Finished my marathon prep run! Feeling strong.",
  },
  {
    name: "Mike Chen",
    message: "Anyone doing the coastal triathlon this year?",
  },
];

const rides = [
  {
    title: "Sunday Morning Gravel Grind",
    schedule: "Sun, Oct 27 • 60km • 8 Riders",
  },
  {
    title: "Wednesday Evening Hill Repeats",
    schedule: "Wed, Oct 30 • 25km • 5 Riders",
  },
];

const avatar = (seed: string) =>
  `https://api.dicebear.com/7.x/thumbs/svg?seed=${encodeURIComponent(seed)}`;

export default function BuddyCommunity() {
  return (
    <FlowNationShell>
      <main className="mx-auto flex max-w-6xl flex-col gap-14 px-6 py-12">
        <section className="flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-4">
            <div className="relative flex-1 min-w-[300px]">
              <Search className="absolute left-5 top-1/2 hidden size-5 -translate-y-1/2 text-white/40 md:block" />
              <input
                placeholder="Search buddies by name or interests..."
                className="h-14 w-full rounded-full border border-white/10 bg-[#0f121b] pl-6 pr-6 text-base text-white placeholder:text-white/40 focus:border-[#00c6e0] focus:outline-none md:pl-16"
              />
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <button className="rounded-full border border-white/10 bg-[#0f121b] px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white/80">
                Ride Type
              </button>
              <button className="rounded-full border border-white/10 bg-[#0f121b] px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white/80">
                Distance
              </button>
              <button className="rounded-full bg-[#00c7e5] px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-black">
                Social Preference
              </button>
            </div>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {buddies.map((buddy) => (
            <article
              key={buddy.name}
              className="rounded-3xl border border-white/8 bg-[#10131d] p-6 shadow-[0_28px_60px_-36px_rgba(0,0,0,0.8)]"
            >
              <img
                src={avatar(buddy.name)}
                alt={buddy.name}
                className="mx-auto size-16 rounded-full border-4 border-[#161b29] bg-[#0f121b]"
              />
              <h3 className="mt-6 text-center text-lg font-semibold text-white">
                {buddy.name}
              </h3>
              <p className="mt-2 text-center text-sm text-white/70">
                {buddy.stats}
              </p>
              <p className="mt-1 text-center text-xs uppercase tracking-[0.3em] text-[#00c7e5]">
                {buddy.events}
              </p>
              <button
                className={`mt-4 w-full rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] ${
                  buddy.action === "View Profile"
                    ? "bg-[#00bcc4] text-black"
                    : "bg-[#ff6f00] text-black"
                }`}
              >
                {buddy.action}
              </button>
            </article>
          ))}
        </section>

        <section className="space-y-6">
          <h2 className="text-lg font-semibold text-[#00c7e5]">
            You might like to ride with...
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {suggestions.map((suggestion) => (
              <article
                key={suggestion.name}
                className="rounded-3xl border border-white/8 bg-[#10131d] p-6 text-center shadow-[0_24px_60px_-34px_rgba(0,0,0,0.8)]"
              >
                <img
                  src={avatar(suggestion.name)}
                  alt={suggestion.name}
                  className="mx-auto size-16 rounded-full border-4 border-[#161b29] bg-[#0f121b]"
                />
                <h3 className="mt-6 text-lg font-semibold text-white">
                  {suggestion.name}
                </h3>
                <p className="mt-2 text-sm text-white/70">{suggestion.stats}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.3em] text-[#00c7e5]">
                  {suggestion.events}
                </p>
                <button
                  className={`mt-4 w-full rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] ${
                    suggestion.action === "View Profile"
                      ? "bg-[#00bcc4] text-black"
                      : "bg-[#ff6f00] text-black"
                  }`}
                >
                  {suggestion.action}
                </button>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-3xl border border-white/8 bg-[#10131d] p-6 shadow-[0_20px_50px_-30px_rgba(0,0,0,0.85)]">
            <header className="flex items-center gap-2">
              <div className="rounded-full bg-[#00c7e5]/10 p-2 text-[#00c7e5]">
                <Search className="size-4" />
              </div>
              <h3 className="text-base font-semibold text-white">
                Recent Chats
              </h3>
            </header>
            <ul className="mt-6 space-y-4">
              {chats.map((chat) => (
                <li key={chat.name} className="flex items-center gap-3">
                  <img
                    src={avatar(chat.name)}
                    alt={chat.name}
                    className="size-10 rounded-full border-2 border-[#161b29]"
                  />
                  <div>
                    <p className="text-sm font-semibold text-white">
                      {chat.name}
                    </p>
                    <p className="text-sm text-white/60">{chat.message}</p>
                  </div>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-3xl border border-white/8 bg-[#10131d] p-6 shadow-[0_20px_50px_-30px_rgba(0,0,0,0.85)]">
            <header className="flex items-center gap-2">
              <div className="rounded-full bg-[#00c7e5]/10 p-2 text-[#00c7e5]">
                <SlidersHorizontal className="size-4" />
              </div>
              <h3 className="text-base font-semibold text-white">
                Upcoming Group Rides
              </h3>
            </header>
            <ul className="mt-6 space-y-4">
              {rides.map((ride) => (
                <li
                  key={ride.title}
                  className="rounded-2xl border border-white/10 bg-[#0f121b] p-4"
                >
                  <p className="text-sm font-semibold text-white">
                    {ride.title}
                  </p>
                  <p className="mt-2 text-xs uppercase tracking-[0.3em] text-white/50">
                    {ride.schedule}
                  </p>
                </li>
              ))}
            </ul>
          </article>
        </section>
      </main>

      <footer className="mt-16 bg-gradient-to-r from-[#00bcc4] via-[#00cbe0] to-[#ff6f00] py-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm font-semibold uppercase tracking-[0.3em] text-[#0b0f17] md:flex-row">
          <div className="flex items-center gap-6">
            <span>FlowNation</span>
            <a href="#support" className="hover:text-white/80">
              Support
            </a>
            <a href="#legal" className="hover:text-white/80">
              Legal
            </a>
          </div>
          <div className="flex items-center gap-4 text-[#0b0f17]">
            <a
              aria-label="Twitter"
              href="https://twitter.com"
              className="transition hover:text-white/80"
            >
              <Twitter className="size-4" />
            </a>
            <a
              aria-label="Instagram"
              href="https://instagram.com"
              className="transition hover:text-white/80"
            >
              <Instagram className="size-4" />
            </a>
            <a
              aria-label="LinkedIn"
              href="https://linkedin.com"
              className="transition hover:text-white/80"
            >
              <Linkedin className="size-4" />
            </a>
            <a
              aria-label="YouTube"
              href="https://youtube.com"
              className="transition hover:text-white/80"
            >
              <Youtube className="size-4" />
            </a>
          </div>
        </div>
      </footer>
    </FlowNationShell>
  );
}
