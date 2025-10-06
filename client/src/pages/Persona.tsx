import { useParams } from "react-router-dom";
import Hero from "../components/Hero";

export default function Persona() {
  const { persona = "roadie" } = useParams();
  return (
    <>
      <Hero image="persona-demo.png">
        <h2 className="text-3xl md:text-5xl font-bold">Welcome to Your FlowNation Experience, {persona}.</h2>
        <p className="mt-3 text-white/85">Discover events, buddies, gear, and integrations tailored to you.</p>
      </Hero>

      <Hero image="event-discovery.png">
        <h3 className="text-2xl font-semibold">Event & Map Discovery</h3>
      </Hero>
    </>
  );
}
