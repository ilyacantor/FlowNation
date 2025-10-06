const Profile = () => {
  const userProfile = {
    name: "Alex Johnson",
    title: "Senior Product Designer @ TechCorp",
    bio: "Passionate product designer with 8+ years of experience creating user-centered digital experiences. Specialized in design systems, UX research, and cross-functional collaboration. Love mentoring junior designers and building inclusive products that make a difference.",
    skills: [
      "Figma",
      "User Research",
      "Design Systems",
      "Prototyping",
      "Wireframing",
      "Interaction Design",
      "Accessibility",
      "Design Thinking",
    ],
    tags: ["Product Design", "UX Research", "Design Systems"],
  };

  const experience = [
    {
      title: "Senior Product Designer",
      company: "TechCorp",
      type: "Full-time",
      duration: "Jan 2021 - Present • 2 yrs 11 mos",
      description: "Leading design for the core product suite, managing a team of 4 designers, and establishing design system standards.",
    },
    {
      title: "Product Designer",
      company: "StartupXYZ",
      type: "Full-time",
      duration: "Mar 2018 - Dec 2020 • 2 yrs 10 mos",
      description: "Designed and shipped multiple features for B2B SaaS platform, conducted user research, and collaborated with engineering teams.",
    },
  ];

  const accountSettings = [
    { icon: "🔔", label: "Notifications" },
    { icon: "🔒", label: "Privacy" },
    { icon: "⚙️", label: "Preferences" },
    { icon: "❓", label: "Help & Support" },
  ];

  const profileTasks = [
    { completed: true, task: "Add profile photo" },
    { completed: false, task: "Add portfolio projects" },
    { completed: false, task: "Get 5 endorsements" },
  ];

  return (
    <div>
      {/* Hero Section with PNG Background Placeholder */}
      <section className="relative">
        {/* TODO: Replace with PNG from /public/assets/profile-hero.png */}
        <div className="hero-placeholder" style={{ minHeight: "300px" }}>
          <div className="text-center p-8">
            <p className="text-muted-foreground text-sm mb-2">📸 PNG Background Placeholder</p>
            <p className="text-foreground font-semibold">/public/assets/profile-hero.png</p>
            <p className="text-xs text-muted-foreground mt-2">
              Profile header background (1920×400px recommended)
            </p>
          </div>
        </div>

        {/* Profile Header */}
        <div className="container mx-auto px-4 -mt-24 relative z-10">
          <div className="card-elevated p-6">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="w-32 h-32 bg-gradient-to-br from-primary via-secondary to-accent rounded-full flex items-center justify-center text-6xl">
                👤
              </div>
              <div className="flex-1">
                <h1 className="text-3xl font-bold mb-2">{userProfile.name}</h1>
                <p className="text-lg text-muted-foreground mb-3">{userProfile.title}</p>
                <div className="flex flex-wrap gap-2">
                  {userProfile.tags.map((tag, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 text-sm font-medium rounded-full ${
                        index === 0
                          ? "bg-primary/10 text-primary"
                          : index === 1
                          ? "bg-secondary/10 text-secondary"
                          : "bg-accent/10 text-accent"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <button
                data-testid="button-edit-profile"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Profile Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* About */}
              <div className="card-elevated p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold">About</h2>
                  <button
                    data-testid="button-edit-about"
                    className="text-primary text-sm font-medium hover:underline"
                  >
                    Edit
                  </button>
                </div>
                <p className="text-muted-foreground">{userProfile.bio}</p>
              </div>

              {/* Experience */}
              <div className="card-elevated p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold">Experience</h2>
                  <button
                    data-testid="button-edit-experience"
                    className="text-primary text-sm font-medium hover:underline"
                  >
                    Edit
                  </button>
                </div>
                <div className="space-y-6">
                  {experience.map((exp, index) => (
                    <div key={index} className="flex gap-4">
                      <div
                        className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                          index === 0 ? "bg-primary/10" : "bg-secondary/10"
                        }`}
                      >
                        <span className="text-xl">💼</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold">{exp.title}</h3>
                        <p className="text-muted-foreground text-sm">
                          {exp.company} • {exp.type}
                        </p>
                        <p className="text-muted-foreground text-sm">{exp.duration}</p>
                        <p className="text-sm mt-2">{exp.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills */}
              <div className="card-elevated p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold">Skills</h2>
                  <button
                    data-testid="button-edit-skills"
                    className="text-primary text-sm font-medium hover:underline"
                  >
                    Edit
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {userProfile.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-muted/20 text-foreground rounded-lg font-medium text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Profile Strength */}
              <div className="card-elevated p-6">
                <h3 className="font-bold mb-4">Profile Strength</h3>
                <div className="space-y-3">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Intermediate</span>
                      <span className="text-sm text-muted-foreground">65%</span>
                    </div>
                    <div className="w-full bg-muted/20 rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: "65%" }}></div>
                    </div>
                  </div>
                  <div className="pt-3 border-t border-border">
                    <p className="text-sm text-muted-foreground mb-3">
                      Complete your profile to unlock more opportunities:
                    </p>
                    <ul className="space-y-2 text-sm">
                      {profileTasks.map((task, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <span className={task.completed ? "text-primary" : "text-muted-foreground"}>
                            {task.completed ? "✓" : "○"}
                          </span>
                          <span className={task.completed ? "" : "text-muted-foreground"}>
                            {task.task}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Account Settings */}
              <div className="card-elevated p-6">
                <h3 className="font-bold mb-4">Account Settings</h3>
                <div className="space-y-3">
                  {accountSettings.map((setting, index) => (
                    <button
                      key={index}
                      data-testid={`button-${setting.label.toLowerCase().replace(/\s+/g, '-')}`}
                      className="w-full px-4 py-3 text-left flex items-center justify-between hover:bg-muted/10 rounded-lg transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xl">{setting.icon}</span>
                        <span className="font-medium">{setting.label}</span>
                      </div>
                      <svg
                        className="w-5 h-5 text-muted-foreground"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        ></path>
                      </svg>
                    </button>
                  ))}
                </div>
              </div>

              {/* Danger Zone */}
              <div className="card-elevated p-6 border-destructive/20">
                <h3 className="font-bold text-destructive mb-3">Danger Zone</h3>
                <div className="space-y-2">
                  <button
                    data-testid="button-deactivate-account"
                    className="w-full px-4 py-2 text-sm text-destructive hover:bg-destructive/10 rounded-lg transition-colors text-left"
                  >
                    Deactivate Account
                  </button>
                  <button
                    data-testid="button-delete-account"
                    className="w-full px-4 py-2 text-sm text-destructive hover:bg-destructive/10 rounded-lg transition-colors text-left"
                  >
                    Delete Account
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
