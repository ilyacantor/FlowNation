import { FlowNationShell } from "@/components/layout/flownation-shell";

const connections = [
  { name: "Strava", status: "Connect" },
  { name: "Garmin Connect", status: "Connected" },
  { name: "Zwift", status: "Connect" },
];

const preferences = [
  { label: "Dark Mode", enabled: true },
  { label: "Make Profile Public", enabled: false },
  { label: "Email Notifications", enabled: true },
];

export default function ProfileSettings() {
  return (
    <FlowNationShell>
      <main className="mx-auto flex max-w-6xl gap-6 px-6 py-12">
        <aside className="hidden w-64 flex-col gap-3 lg:flex">
          {[
            { label: "Profile", active: true },
            { label: "Preferences", active: false },
            { label: "Connections", active: false },
            { label: "Theme", active: false },
          ].map((item) => (
            <button
              key={item.label}
              className={`rounded-2xl px-4 py-3 text-left text-sm font-semibold uppercase tracking-[0.3em] ${
                item.active
                  ? "bg-[#00bcc4] text-black"
                  : "bg-[#10131d] text-white/70"
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="mt-auto space-y-3">
            <button className="w-full rounded-2xl bg-[#ff6f00] px-4 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-black">
              Save Changes
            </button>
            <button className="w-full rounded-2xl bg-[#ff5858] px-4 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white">
              Logout
            </button>
          </div>
        </aside>

        <section className="flex-1 space-y-6">
          <article className="rounded-[2rem] border border-white/10 bg-[#10131d] p-8">
            <h1 className="text-2xl font-semibold text-white">
              Profile Settings
            </h1>
            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <img
                    src="https://api.dicebear.com/7.x/thumbs/svg?seed=Jane"
                    alt="Jane Doe"
                    className="size-16 rounded-full border-4 border-[#161b29]"
                  />
                  <button className="rounded-full bg-[#00bcc4] px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-black">
                    Upload New Photo
                  </button>
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
                    Full Name
                  </label>
                  <input
                    defaultValue="Jane Doe"
                    className="w-full rounded-2xl border border-white/10 bg-[#0f121b] px-4 py-3 text-sm text-white/80 focus:border-[#00bcc4] focus:outline-none"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
                    Email Address
                  </label>
                  <input
                    defaultValue="jane.doe@flow-nation.com"
                    className="w-full rounded-2xl border border-white/10 bg-[#0f121b] px-4 py-3 text-sm text-white/80 focus:border-[#00bcc4] focus:outline-none"
                  />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
                  About Me
                </label>
                <textarea
                  rows={6}
                  defaultValue="Passionate endurance athlete, always looking for the next challenge. Love cycling, running, and exploring new trails. Member of the FlowNation community since 2022."
                  className="w-full rounded-2xl border border-white/10 bg-[#0f121b] px-4 py-3 text-sm text-white/80 focus:border-[#00bcc4] focus:outline-none"
                />
                <div className="space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
                    Favorite Events/Sports
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {"Cycling Triathlon Marathon Trail Running Gravel"
                      .split(" ")
                      .map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-[#101c2a] px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/70"
                        >
                          {tag}
                        </span>
                      ))}
                  </div>
                </div>
                <button className="rounded-full border border-[#00bcc4] px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#00bcc4]">
                  Edit Full Profile
                </button>
              </div>
            </div>
          </article>

          <article className="rounded-[2rem] border border-white/10 bg-[#10131d] p-8">
            <h2 className="text-base font-semibold text-white">
              External Connections
            </h2>
            <div className="mt-6 space-y-4">
              {connections.map((connection) => (
                <div
                  key={connection.name}
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#0f121b] px-4 py-3"
                >
                  <p className="text-sm font-semibold text-white">
                    {connection.name}
                  </p>
                  <button
                    className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] ${
                      connection.status === "Connected"
                        ? "bg-[#00bcc4] text-black"
                        : "bg-[#101c2a] text-white/70"
                    }`}
                  >
                    {connection.status}
                  </button>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-[2rem] border border-white/10 bg-[#10131d] p-8">
            <h2 className="text-base font-semibold text-white">Preferences</h2>
            <div className="mt-6 space-y-4">
              {preferences.map((preference) => (
                <div
                  key={preference.label}
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#0f121b] px-4 py-3"
                >
                  <p className="text-sm font-semibold text-white">
                    {preference.label}
                  </p>
                  <span
                    className={`flex h-6 w-12 items-center rounded-full ${
                      preference.enabled ? "bg-[#00bcc4]/40" : "bg-white/10"
                    }`}
                  >
                    <span
                      className={`size-4 rounded-full ${
                        preference.enabled
                          ? "ml-auto mr-1 bg-[#00bcc4]"
                          : "ml-1 bg-white/40"
                      }`}
                    />
                  </span>
                </div>
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
          <p className="text-xs uppercase tracking-[0.3em]">Profile Settings</p>
        </div>
      </footer>
    </FlowNationShell>
  );
}
