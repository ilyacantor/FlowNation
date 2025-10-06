import { Link } from "react-router-dom";

const Dashboard = () => {
  const dashboardStats = [
    { label: "Total Connections", value: "248", change: "+12 this week", icon: "👥" },
    { label: "Active Chats", value: "42", change: "8 unread", icon: "💬" },
    { label: "Opportunities", value: "15", change: "3 new matches", icon: "🎯" },
    { label: "Events", value: "7", change: "2 upcoming", icon: "📅" },
  ];

  const recentActivity = [
    {
      type: "connection",
      message: "Sarah Chen accepted your connection request",
      time: "2 hours ago",
      icon: "👤",
    },
    {
      type: "opportunity",
      message: "New opportunity: Senior Product Manager at TechCorp",
      time: "5 hours ago",
      icon: "💼",
    },
    {
      type: "event",
      message: "You were invited to Tech Leaders Networking Event",
      time: "1 day ago",
      icon: "🎉",
    },
  ];

  const suggestedConnections = [
    {
      name: "Michael Rodriguez",
      title: "Product Designer",
      mutualConnections: 5,
      avatar: "primary",
    },
    {
      name: "Emma Thompson",
      title: "Tech Entrepreneur",
      mutualConnections: 3,
      avatar: "secondary",
    },
  ];

  const upcomingEvents = [
    { name: "Startup Pitch Night", time: "Tomorrow, 6:00 PM", icon: "📅" },
    { name: "Product Design Workshop", time: "Dec 15, 2:00 PM", icon: "🎯" },
  ];

  return (
    <div>
      {/* Hero Section with PNG Background Placeholder */}
      <section className="relative">
        {/* TODO: Replace with PNG from /public/assets/dashboard-hero.png */}
        <div className="hero-placeholder" style={{ minHeight: "300px" }}>
          <div className="text-center p-8">
            <p className="text-muted-foreground text-sm mb-2">📸 PNG Background Placeholder</p>
            <p className="text-foreground font-semibold">/public/assets/dashboard-hero.png</p>
            <p className="text-xs text-muted-foreground mt-2">
              Dashboard header background (1920×400px recommended)
            </p>
          </div>
        </div>

        {/* Dashboard Header */}
        <div className="container mx-auto px-4 -mt-16 relative z-10">
          <div className="card-elevated p-6 mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold mb-2">Welcome back, Alex! 👋</h1>
                <p className="text-muted-foreground">Here's what's happening with your network today</p>
              </div>
              <button
                data-testid="button-new-connection"
                className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                New Connection
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Content */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          {/* Stats Grid */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            {dashboardStats.map((stat, index) => (
              <div key={index} className="card-elevated p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-muted-foreground text-sm font-medium">{stat.label}</span>
                  <span className="text-2xl">{stat.icon}</span>
                </div>
                <div className="text-3xl font-bold" data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}>
                  {stat.value}
                </div>
                <p className="text-sm text-muted-foreground mt-1">{stat.change}</p>
              </div>
            ))}
          </div>

          {/* Main Dashboard Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Recent Activity */}
            <div className="lg:col-span-2 space-y-6">
              <div className="card-elevated p-6">
                <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 pb-4 border-b border-border last:border-0"
                    >
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-lg">{activity.icon}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium">{activity.message}</p>
                        <p className="text-sm text-muted-foreground">{activity.time}</p>
                      </div>
                      <button
                        data-testid={`button-view-activity-${index}`}
                        className="text-primary text-sm font-medium hover:underline"
                      >
                        View
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Suggested Connections */}
              <div className="card-elevated p-6">
                <h2 className="text-xl font-bold mb-4">Suggested Connections</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {suggestedConnections.map((connection, index) => (
                    <div
                      key={index}
                      className="p-4 border border-border rounded-lg hover:border-primary transition-colors"
                    >
                      <div className="flex items-start gap-3 mb-3">
                        <div
                          className={`w-12 h-12 bg-gradient-to-br ${
                            connection.avatar === "primary"
                              ? "from-primary to-secondary"
                              : "from-secondary to-accent"
                          } rounded-full`}
                        ></div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold truncate">{connection.name}</h3>
                          <p className="text-sm text-muted-foreground">{connection.title}</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        {connection.mutualConnections} mutual connections
                      </p>
                      <button
                        data-testid={`button-connect-${connection.name.toLowerCase().replace(/\s+/g, '-')}`}
                        className="w-full px-3 py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:bg-primary/90 transition-colors"
                      >
                        Connect
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Actions */}
              <div className="card-elevated p-6">
                <h3 className="font-bold mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <button
                    data-testid="button-discover-people"
                    className="w-full px-4 py-3 bg-primary/10 text-primary rounded-lg font-medium hover:bg-primary/20 transition-colors text-left flex items-center gap-3"
                  >
                    <span className="text-xl">🔍</span>
                    <span>Discover People</span>
                  </button>
                  <button
                    data-testid="button-send-message"
                    className="w-full px-4 py-3 bg-secondary/10 text-secondary rounded-lg font-medium hover:bg-secondary/20 transition-colors text-left flex items-center gap-3"
                  >
                    <span className="text-xl">📨</span>
                    <span>Send Message</span>
                  </button>
                  <Link
                    to="/community"
                    data-testid="link-browse-events"
                    className="w-full px-4 py-3 bg-accent/10 text-accent rounded-lg font-medium hover:bg-accent/20 transition-colors text-left flex items-center gap-3"
                  >
                    <span className="text-xl">📅</span>
                    <span>Browse Events</span>
                  </Link>
                </div>
              </div>

              {/* Upcoming Events */}
              <div className="card-elevated p-6">
                <h3 className="font-bold mb-4">Upcoming Events</h3>
                <div className="space-y-4">
                  {upcomingEvents.map((event, index) => (
                    <div key={index} className="p-3 bg-muted/20 rounded-lg">
                      <div className="flex items-start gap-3">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-xl">{event.icon}</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm mb-1">{event.name}</h4>
                          <p className="text-xs text-muted-foreground">{event.time}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
