import guestLandingImg from "../assets/guest-landing.png";
import personaDemoImg from "../assets/persona-demo.png";
import eventDiscoveryImg from "../assets/event-discovery.png";
import buddyCommunityImg from "../assets/buddy-community.png";
import communityProofImg from "../assets/community-proof.png";
import dashboardInsightsImg from "../assets/dashboard-insights.png";
import yourFlownationImg from "../assets/your-flownation.png";
import profileSettingsImg from "../assets/profile-settings.png";

const imageMap: Record<string, string> = {
  "guest-landing.png": guestLandingImg,
  "persona-demo.png": personaDemoImg,
  "event-discovery.png": eventDiscoveryImg,
  "buddy-community.png": buddyCommunityImg,
  "community-proof.png": communityProofImg,
  "dashboard-insights.png": dashboardInsightsImg,
  "your-flownation.png": yourFlownationImg,
  "profile-settings.png": profileSettingsImg,
};

export default function Hero({ image, children }: { image: string; children: React.ReactNode }) {
  const resolvedImage = imageMap[image];
  
  return (
    <section
      className="relative flex items-center justify-center w-full h-screen overflow-hidden"
      style={{
        backgroundImage: `url(${resolvedImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/45" />
      <div className="relative z-10 w-full px-6 max-w-6xl text-center">{children}</div>
    </section>
  );
}
