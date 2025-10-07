import { FlowNationShell } from "@/components/layout/flownation-shell";
import { ArrowRight } from "lucide-react";

const features = [
  {
    title: "Road Cycling",
    description:
      "Conquer epic climbs and swift descents on challenging road routes.",
  },
  {
    title: "Mountain Biking",
    description:
      "Navigate technical trails and breathtaking landscapes off-road.",
  },
  {
    title: "Triathlon Training",
    description:
      "Master multi-sport events with integrated cycling, running, and swimming plans.",
  },
  {
    title: "Track Cycling",
    description:
      "Experience the adrenaline of high-speed racing on velodrome tracks.",
  },
];

const benefits = [
  {
    title: "Global Community",
    description:
      "Connect with thousands of athletes worldwide, share your journey, and find inspiration.",
  },
  {
    title: "Personalized Training",
    description:
      "AI-powered plans adapt to your performance, helping you reach peak condition faster.",
  },
  {
    title: "Expert Coaching",
    description:
      "Access insights and guidance from professional coaches and sports scientists.",
  },
];

export default function Index() {
  return (
    <FlowNationShell>
      <main className="mx-auto flex max-w-6xl flex-col gap-16 px-6 py-16">
        <section className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#121626] px-8 py-16 sm:px-16">
          <div className="absolute inset-0 -z-10 bg-[url('https://images.unsplash.com/photo-1529429617124-aeea22425632?auto=format&fit=crop&w=1800&q=80')] bg-cover bg-center" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/80 via-black/65 to-black/30" />
          <div className="max-w-xl space-y-6">
            <h1 className="text-4xl font-semibold sm:text-5xl">
              Unleash Your Inner Cyclist
            </h1>
            <p className="text-base text-white/80">
              Join the FlowNation and redefine your limits on two wheels.
              Experience personalized training, connect with a global community,
              and achieve your cycling dreams.
            </p>
            <a
              id="start"
              href="/community-proof"
              className="inline-flex items-center gap-3 rounded-full bg-[#4b5bfe] px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white"
            >
              Start Your Journey
              <ArrowRight className="size-4" />
            </a>
          </div>
        </section>

        <section className="space-y-10">
          <header className="text-center">
            <h2 className="text-3xl font-semibold">Explore Your Potential</h2>
          </header>
          <div className="grid gap-6 md:grid-cols-2">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="rounded-3xl border border-white/10 bg-[#0f121b] p-6"
              >
                <h3 className="text-lg font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm text-white/70">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-[2rem] border border-white/10 bg-gradient-to-r from-[#1c1f30] via-[#151826] to-[#10131d] px-10 py-12 text-center">
          <h2 className="text-3xl font-semibold text-white">
            Over 60 Athletes Joined This Week!
          </h2>
          <p className="mt-4 text-base text-white/70">
            Become part of a global movement, push your boundaries, and achieve
            your cycling dreams with FlowNation.
          </p>
        </section>

        <section className="space-y-10">
          <header className="space-y-4 text-center">
            <h2 className="text-3xl font-semibold">Why FlowNation?</h2>
          </header>
          <div className="grid gap-6 md:grid-cols-3">
            {benefits.map((benefit) => (
              <article
                key={benefit.title}
                className="rounded-3xl border border-white/10 bg-[#0f121b] p-8"
              >
                <h3 className="text-lg font-semibold text-white">
                  {benefit.title}
                </h3>
                <p className="mt-3 text-sm text-white/70">
                  {benefit.description}
                </p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="mt-12 border-t border-white/10 bg-black/40">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-6 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <span className="font-semibold text-white">Company</span>
            <span>Resources</span>
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
