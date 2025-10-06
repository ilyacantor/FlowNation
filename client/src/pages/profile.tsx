import Hero from "../components/Hero";

export default function Profile() {
  return (
    <main className="min-h-screen bg-[#0B0B0D] text-white">
      <Hero image="profile-settings.png" height="min-h-[45vh]">
        <div className="max-w-6xl mx-auto px-6 pt-24">
          <h2 className="text-3xl md:text-5xl font-bold">Profile & Settings</h2>
        </div>
      </Hero>
    </main>
  );
}
