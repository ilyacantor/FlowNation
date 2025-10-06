import Hero from "../components/Hero";

export default function Community() {
  return (
    <main className="min-h-screen bg-[#0B0B0D] text-white">
      <Hero image="buddy-community.png">
        <div className="max-w-6xl mx-auto px-6 pt-24">
          <h2 className="text-3xl md:text-5xl font-bold">Buddy Finder & Community</h2>
        </div>
      </Hero>

      <Hero image="community-proof.png">
        <div className="max-w-6xl mx-auto px-6 py-10">
          <h3 className="text-2xl font-semibold">Community Proof</h3>
        </div>
      </Hero>
    </main>
  );
}
