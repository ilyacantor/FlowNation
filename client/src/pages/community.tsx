import { useState } from "react";

const Community = () => {
  const [activeTab, setActiveTab] = useState("communities");

  const communities = [
    {
      id: 1,
      name: "Startup Founders",
      description: "A community for entrepreneurs building the next big thing",
      members: 2341,
      status: "Active",
      icon: "🚀",
      gradient: "from-primary to-secondary",
    },
    {
      id: 2,
      name: "Tech Innovators",
      description: "Connect with developers, designers, and tech leaders",
      members: 5892,
      status: "Active",
      icon: "💻",
      gradient: "from-secondary to-accent",
    },
    {
      id: 3,
      name: "Creative Professionals",
      description: "For designers, artists, and creative minds",
      members: 1456,
      status: "New",
      icon: "🎨",
      gradient: "from-accent to-primary",
    },
    {
      id: 4,
      name: "Product Managers",
      description: "Share insights and best practices in product management",
      members: 3127,
      status: "Active",
      icon: "💼",
      gradient: "from-primary via-secondary to-accent",
    },
    {
      id: 5,
      name: "Data Scientists",
      description: "For analytics, AI, and machine learning professionals",
      members: 2784,
      status: "Active",
      icon: "📊",
      gradient: "from-secondary to-primary",
    },
    {
      id: 6,
      name: "Remote Workers",
      description: "Connect with digital nomads and remote professionals",
      members: 4512,
      status: "New",
      icon: "🌍",
      gradient: "from-accent to-secondary",
    },
  ];

  const buddyFeatures = [
    {
      title: "Smart Matching",
      description: "AI-powered algorithm finds the perfect buddy based on your profile",
    },
    {
      title: "Mutual Support",
      description: "Build a reciprocal relationship for accountability and growth",
    },
    {
      title: "Flexible Schedule",
      description: "Connect at your own pace with integrated messaging and scheduling",
    },
  ];

  const tabs = [
    { key: "communities", label: "Communities" },
    { key: "buddy", label: "Find a Buddy" },
    { key: "connections", label: "My Connections" },
  ];

  return (
    <div>
      {/* Hero Section with PNG Background Placeholder */}
      <section className="relative">
        {/* TODO: Replace with PNG from /public/assets/community-hero.png */}
        <div className="hero-placeholder" style={{ minHeight: "350px" }}>
          <div className="text-center p-8">
            <p className="text-muted-foreground text-sm mb-2">📸 PNG Background Placeholder</p>
            <p className="text-foreground font-semibold">/public/assets/community-hero.png</p>
            <p className="text-xs text-muted-foreground mt-2">
              Community header background (1920×500px recommended)
            </p>
          </div>
        </div>

        {/* Community Header */}
        <div className="container mx-auto px-4 -mt-20 relative z-10">
          <div className="card-elevated p-8 text-center">
            <h1 className="text-4xl font-bold mb-4">Connect & Collaborate</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join communities, find your buddy, and build meaningful professional relationships
            </p>
          </div>
        </div>
      </section>

      {/* Community Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Tab Navigation */}
          <div className="flex items-center gap-4 mb-8 border-b border-border">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                data-testid={`tab-${tab.key}`}
                onClick={() => setActiveTab(tab.key)}
                className={`px-6 py-3 font-semibold transition-colors ${
                  activeTab === tab.key
                    ? "border-b-2 border-primary text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Communities Grid */}
          {activeTab === "communities" && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {communities.map((community) => (
                <div key={community.id} className="card-elevated p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${community.gradient} rounded-xl flex items-center justify-center text-3xl`}
                    >
                      {community.icon}
                    </div>
                    <span
                      className={`px-3 py-1 text-xs font-medium rounded-full ${
                        community.status === "Active"
                          ? "bg-primary/10 text-primary"
                          : "bg-muted/20 text-muted-foreground"
                      }`}
                    >
                      {community.status}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{community.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{community.description}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="text-sm text-muted-foreground">
                      {community.members.toLocaleString()} members
                    </span>
                    <button
                      data-testid={`button-join-${community.name.toLowerCase().replace(/\s+/g, '-')}`}
                      className="px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:bg-primary/90 transition-colors"
                    >
                      Join
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Buddy Finder Section */}
          {activeTab === "buddy" && (
            <div className="card-elevated p-8">
              <h2 className="text-2xl font-bold mb-6">Find Your Professional Buddy</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-muted-foreground mb-6">
                    Get matched with a professional who shares your goals, interests, and can support
                    your growth journey.
                  </p>
                  <div className="space-y-4">
                    {buddyFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <span>✓</span>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">{feature.title}</h4>
                          <p className="text-sm text-muted-foreground">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 rounded-xl p-6 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-4 flex items-center justify-center text-5xl">
                      🤝
                    </div>
                    <h3 className="text-xl font-bold mb-3">Ready to Find Your Buddy?</h3>
                    <button
                      data-testid="button-start-matching"
                      className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                    >
                      Start Matching
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* My Connections Placeholder */}
          {activeTab === "connections" && (
            <div className="card-elevated p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">My Connections</h2>
              <p className="text-muted-foreground mb-6">
                View and manage your professional connections here.
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-muted/20 rounded-lg">
                <span className="text-2xl">👥</span>
                <span className="text-sm text-muted-foreground">Coming soon...</span>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Community;
