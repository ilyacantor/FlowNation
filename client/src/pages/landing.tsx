import { Link } from "react-router-dom";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0B0D] text-white">
      <Hero image="/assets/guest-landing.png" height="min-h-[86vh]">
        <div className="max-w-5xl mx-auto px-6 pt-28 text-center">
          <h1 className="text-4xl md:text-6xl font-bold">Your world of endurance, <span className="text-cyan-300">personalized.</span></h1>
          <p className="mt-4 text-white/85">Choose your sport(s) and watch your FlowNation come alive.</p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {["roadie","graveler","mtbear","downhiller","triathlete","ebiker","runner","all"].map(p => (
              <Link key={p} to={`/guest/${p}`} className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15">
                {p}
              </Link>
            ))}
          </div>

          <p className="mt-10 text-white/80">Free forever for athletes · No ads · No noise · Just your flow.</p>
        </div>
      </Hero>
    </main>
  );
}
