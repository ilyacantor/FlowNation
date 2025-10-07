// src/components/FlowNationLanding.tsx
import React from "react";
import {
  Bike,
  Mountain,
  Activity,
  Users,
  Shield,
  Zap,
  Globe,
} from "lucide-react";

export default function FlowNationLanding() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      {/* ─── NAVBAR ───────────────────────────────────────────────────── */}
      <nav className="flex justify-between items-center px-6 py-4 bg-black/70 backdrop-blur-md fixed top-0 w-full z-50 border-b border-white/10">
        <div className="text-2xl font-bold text-cyan-400">FlowNation</div>
        <div className="flex gap-6 text-sm">
          <a href="#features" className="hover:text-orange-400">
            Features
          </a>
          <a href="#benefits" className="hover:text-orange-400">
            Benefits
          </a>
          <a href="#contact" className="hover:text-orange-400">
            Contact
          </a>
          <button className="bg-cyan-500 hover:bg-orange-500 text-black font-semibold px-4 py-1 rounded-full transition">
            Sign In
          </button>
        </div>
      </nav>

      {/* ─── HERO ─────────────────────────────────────────────────────── */}
      <section
        className="flex flex-col justify-center items-center text-center py-40 px-6 bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=1600')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90" />
        <div className="relative z-10 max-w-3xl space-y-6">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Your World of Endurance,
            <span className="text-cyan-400"> Personalized.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            Join FlowNation — where every athlete finds their tribe, discovers
            new events, and unlocks smarter training insights.
          </p>
          <a
            href="#features"
            className="inline-block bg-cyan-500 hover:bg-orange-500 text-black px-8 py-3 rounded-full font-semibold shadow-lg transition"
          >
            See My Flow
          </a>
        </div>
      </section>

      {/* ─── FEATURES ─────────────────────────────────────────────────── */}
      <section
        id="features"
        className="py-24 bg-gradient-to-b from-neutral-950 via-black to-neutral-950"
      >
        <h2 className="text-center text-3xl font-bold mb-16">
          Explore Your Potential
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-8">
          {[
            { title: "Road Cycling", icon: Bike },
            { title: "Gravel", icon: Mountain },
            { title: "Triathlon", icon: Activity },
            { title: "Community", icon: Users },
          ].map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={i}
                className="flex flex-col items-center text-center bg-neutral-900 p-8 rounded-2xl border border-white/10 hover:border-cyan-400 transition"
              >
                <Icon className="w-10 h-10 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
                <p className="text-gray-400 text-sm">
                  Discover events, connect with athletes, and train smarter.
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ─── STATS ────────────────────────────────────────────────────── */}
      <section className="py-16 bg-cyan-600 text-black text-center">
        <h3 className="text-3xl font-bold mb-2">12,000+ Athletes Worldwide</h3>
        <p className="opacity-80">
          Built by athletes. Trusted by endurance communities everywhere.
        </p>
      </section>

      {/* ─── BENEFITS ─────────────────────────────────────────────────── */}
      <section
        id="benefits"
        className="py-24 bg-gradient-to-b from-black via-neutral-950 to-black"
      >
        <h2 className="text-center text-3xl font-bold mb-16">
          Why Athletes Choose FlowNation
        </h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-8">
          {[
            {
              icon: Zap,
              title: "Smart Integrations",
              desc: "Seamlessly sync with Strava, Garmin, Zwift, and more.",
            },
            {
              icon: Shield,
              title: "Privacy First",
              desc: "Your data belongs to you — always protected and never sold.",
            },
            {
              icon: Globe,
              title: "Global Community",
              desc: "Connect with athletes worldwide who share your passion.",
            },
          ].map((b, i) => {
            const Icon = b.icon;
            return (
              <div
                key={i}
                className="bg-neutral-900 p-10 rounded-2xl border border-white/10 hover:border-orange-400 transition text-center"
              >
                <Icon className="w-10 h-10 text-orange-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{b.title}</h3>
                <p className="text-gray-400 text-sm">{b.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ─── FOOTER ──────────────────────────────────────────────────── */}
      <footer
        id="contact"
        className="py-10 bg-neutral-950 text-center border-t border-white/10"
      >
        <p className="text-sm text-gray-400">
          Free forever for athletes · No ads · No noise · Just your flow
        </p>
        <div className="flex justify-center gap-6 mt-4 text-gray-400">
          <a href="#" className="hover:text-cyan-400">
            Twitter
          </a>
          <a href="#" className="hover:text-orange-400">
            Instagram
          </a>
          <a href="#" className="hover:text-cyan-400">
            LinkedIn
          </a>
        </div>
        <p className="text-xs text-gray-500 mt-6">
          © {new Date().getFullYear()} FlowNation. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
