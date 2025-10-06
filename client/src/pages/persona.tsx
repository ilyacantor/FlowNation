import { useParams } from "react-router-dom";
import Hero from "../components/Hero";

export default function Persona() {
  const { persona = "roadie" } = useParams();
  return (
    <main className="min-h-screen bg-[#0B0B0D] text-white">
      <Hero image="persona-demo.png" height="min-h-[60vh]">
        <div className="max-w-6xl mx-auto px-6 pt-24">
          <h2 className="text-3xl md:text-5xl font-bold">Welcome to Your FlowNation Experience, {persona}.</h2>
          <p className="mt-3 text-white/85">Discover events, buddies, gear, and integrations tailored to you.</p>
        </div>
      </Hero>

      <Hero image="event-discovery.png" height="min-h-[50vh]">
        <div className="max-w-6xl mx-auto px-6 py-10">
          <h3 className="text-2xl font-semibold">Event & Map Discovery</h3>
        </div>
      </Hero>
    </main>
  );
}
