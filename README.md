# FlowNation Platform

A React + TailwindCSS multi-page web platform for FlowNation, combining discovery, connect, and dashboard functionality.

## Features

- **React Router DOM**: Full client-side routing with 5 core routes
- **TailwindCSS**: Custom design system with FlowNation branding
- **Responsive Design**: Mobile-first approach with responsive breakpoints
- **Component Architecture**: Clean, reusable components with proper separation
- **PNG Asset Integration**: Ready for Visily-exported background images

## Routes

| Route | Description | Component |
|-------|-------------|-----------|
| `/` | Guest landing page | `Landing` |
| `/guest/:persona` | Persona-specific landing pages | `Persona` |
| `/dashboard` | Registered user dashboard | `Dashboard` |
| `/community` | Community & buddy finder | `Community` |
| `/profile` | User profile & settings | `Profile` |

## Asset Integration

The application is configured to use PNG background images in full-width hero sections:

### Expected Assets in `/public/assets/`:

1. **`landing-hero.png`** - Landing page hero (1920×800px)
2. **`persona-hero.png`** - Persona pages hero (1920×600px)  
3. **`dashboard-hero.png`** - Dashboard header (1920×400px)
4. **`community-hero.png`** - Community header (1920×500px)
5. **`profile-hero.png`** - Profile header (1920×400px)

### Integration Steps:

1. Export PNG files from Visily at recommended dimensions
2. Place files in `/public/assets/` directory
3. Update hero sections in components to use actual backgrounds:

```jsx
// Replace placeholder div with:
<div 
  className="hero-section"
  style={{ backgroundImage: 'url(/assets/landing-hero.png)' }}
>
  <div className="hero-overlay" />
  {/* Content */}
</div>
```

---

## 🚀 Deployment & CI/CD (October 2025)

[![Netlify Status](https://api.netlify.com/api/v1/badges/ee9fb89a-3492-42b8-bd03-11743c4980ab/deploy-status)](https://app.netlify.com/sites/flownation/deploys)

**Deployment status:** ✅ Auto-deploys from the `main` branch via GitHub → Netlify.

**Live site:**  
👉 [https://flownation.netlify.app](https://flownation.netlify.app)

---

```markdown
### 🧩 Environment Variables

All real keys are stored in **Netlify → Site Settings → Environment Variables**.  
`.env.example` (in the repo root) lists the variable names to keep builds consistent.

```bash
VITE_API_BASE_URL=
VITE_FAUNA_SECRET=
VITE_STRAVA_CLIENT_ID=
VITE_STRAVA_CLIENT_SECRET=
VITE_MAPBOX_TOKEN=
