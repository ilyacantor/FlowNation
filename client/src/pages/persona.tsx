import { useParams } from "react-router-dom";
import { useState } from "react";

const personaData = {
  entrepreneur: {
    title: "For Entrepreneurs",
    description: "Connect with fellow entrepreneurs, investors, and mentors to accelerate your startup journey.",
  },
  developer: {
    title: "For Developers",
    description: "Join a community of passionate developers sharing knowledge and building the future.",
  },
  designer: {
    title: "For Designers",
    description: "Connect with creative professionals and showcase your design expertise.",
  },
  investor: {
    title: "For Investors",
    description: "Discover promising startups and connect with innovative entrepreneurs.",
  },
};

const personaBenefits = [
  {
    title: "Curated Network",
    description: "Access a vetted community of professionals aligned with your entrepreneurial goals and industry focus.",
  },
  {
    title: "Expert Resources",
    description: "Get access to exclusive content, workshops, and resources tailored for entrepreneurs at every stage.",
  },
  {
    title: "Growth Opportunities",
    description: "Discover partnerships, funding opportunities, and collaboration prospects to scale your venture.",
  },
];

const Persona = () => {
  const { persona } = useParams<{ persona: string }>();
  const [selectedPersona, setSelectedPersona] = useState(persona || "entrepreneur");

  const currentPersona = personaData[selectedPersona as keyof typeof personaData] || personaData.entrepreneur;

  const personas = [
    { key: "entrepreneur", label: "Entrepreneur" },
    { key: "developer", label: "Developer" },
    { key: "designer", label: "Designer" },
    { key: "investor", label: "Investor" },
  ];

  return (
    <div>
      {/* Hero Section with PNG Background Placeholder */}
      <section className="relative">
        {/* TODO: Replace with PNG from /public/assets/persona-hero.png */}
        <div className="hero-placeholder" style={{ minHeight: "600px" }}>
          <div className="text-center p-8">
            <p className="text-muted-foreground text-sm mb-2">📸 PNG Background Placeholder</p>
            <p className="text-foreground font-semibold">/public/assets/persona-hero.png</p>
            <p className="text-xs text-muted-foreground mt-2">
              Persona-specific hero section (1920×600px recommended)
            </p>
          </div>
        </div>

        {/* Overlay Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Persona
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{currentPersona.title}</h1>
              <p className="text-xl text-muted-foreground">{currentPersona.description}</p>
            </div>

            {/* Persona Selector */}
            <div className="flex flex-wrap gap-3 mb-8">
              {personas.map((p) => (
                <button
                  key={p.key}
                  data-testid={`button-persona-${p.key}`}
                  onClick={() => setSelectedPersona(p.key)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedPersona === p.key
                      ? "bg-primary text-primary-foreground"
                      : "bg-card border border-border text-foreground hover:bg-muted/20"
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Persona Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">What You'll Get</h2>

            <div className="space-y-6">
              {personaBenefits.map((benefit, index) => (
                <div key={index} className="card-elevated p-6 flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-primary-foreground"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-8 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-muted-foreground mb-6">
                Join thousands of {selectedPersona}s already building their network on FlowNation
              </p>
              <button
                data-testid="button-create-profile"
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Create Your Profile
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Persona;
