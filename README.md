# FlowNation Platform

A React + TailwindCSS multi-page web platform for FlowNation, combining discovery, connect, and dashboard functionality.

## Features

- **React Router DOM**: Full client-side routing with 5 core routes  
- **TailwindCSS**: Custom design system with FlowNation branding  
- **Responsive Design**: Mobile-first approach with responsive breakpoints  
- **Component Architecture**: Clean, reusable components with proper separation  
- **PNG Asset Integration**: Ready for Visily-exported background images  

---

## Routes

| Route | Description | Component |
|-------|-------------|-----------|
| `/` | Guest landing page | `Landing` |
| `/guest/:persona` | Persona-specific landing pages | `Persona` |
| `/dashboard` | Registered user dashboard | `Dashboard` |
| `/community` | Community & buddy finder | `Community` |
| `/profile` | User profile & settings | `Profile` |

---

## Asset Integration

The application is configured to use PNG background images in full-width hero sections.

### Expected Assets in `/public/assets/`

1. **`landing-hero.png`** – Landing page hero (1920×800px)  
2. **`persona-hero.png`** – Persona pages hero (1920×600px)  
3. **`dashboard-hero.png`** – Dashboard header (1920×400px)  
4. **`community-hero.png`** – Community header (1920×500px)  
5. **`profile-hero.png`** – Profile header (1920×400px)  

### Integration Steps

1. Export PNG files from Visily at recommended dimensions.  
2. Place files in the `/public/assets/` directory.  
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
