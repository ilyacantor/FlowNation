import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      {/* Hero Section with PNG Background Placeholder */}
      <section className="relative">
        {/* TODO: Replace with PNG from /public/assets/landing-hero.png */}
        <div className="hero-placeholder">
          <div className="text-center p-8">
            <p className="text-muted-foreground text-sm mb-2">📸 PNG Background Placeholder</p>
            <p className="text-foreground font-semibold">/public/assets/landing-hero.png</p>
            <p className="text-xs text-muted-foreground mt-2">
              Full-width hero section (1920×800px recommended)
            </p>
          </div>
        </div>

        {/* Overlay Content */}
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              Welcome to{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                FlowNation
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover, connect, and collaborate with a thriving community of professionals. Your
              journey to meaningful connections starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Link
                to="/guest/entrepreneur"
                data-testid="button-explore-personas"
                className="px-8 py-3 text-base font-semibold bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25"
              >
                Explore Personas
              </Link>
              <button
                data-testid="button-learn-more"
                className="px-8 py-3 text-base font-semibold border-2 border-border bg-card text-foreground rounded-lg hover:bg-muted/20 transition-colors"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything You Need</h2>
            <p className="text-muted-foreground text-lg">
              Powerful features to enhance your networking experience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-elevated p-6 space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-xl font-semibold">Smart Discovery</h3>
              <p className="text-muted-foreground">
                Find the right connections based on your interests, skills, and goals using our
                intelligent matching algorithm.
              </p>
            </div>

            <div className="card-elevated p-6 space-y-4">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold">Meaningful Connections</h3>
              <p className="text-muted-foreground">
                Build authentic relationships with professionals who share your vision and can help
                you grow.
              </p>
            </div>

            <div className="card-elevated p-6 space-y-4">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold">Unified Dashboard</h3>
              <p className="text-muted-foreground">
                Manage all your connections, conversations, and opportunities from one central hub.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
