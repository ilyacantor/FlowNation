# FlowNation Platform

## Overview

FlowNation is a professional networking and community platform built with React and Express. The application enables users to discover opportunities, connect with professionals, and engage with communities based on different personas (entrepreneurs, developers, designers, investors). The platform features a guest discovery flow and authenticated user experiences including dashboards, community browsing, and profile management.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Routing**
- React 18 with TypeScript for type-safe component development
- React Router DOM for client-side routing with 5 core routes (landing, persona-specific pages, dashboard, community, profile)
- Mobile-first responsive design using TailwindCSS

**UI Component System**
- Radix UI primitives for accessible, unstyled components (dialogs, dropdowns, navigation, forms, etc.)
- shadcn/ui component library configured with "New York" style variant
- Custom design system with CSS variables for theming (primary, secondary, accent colors with gradient support)
- Component path aliases configured via TypeScript for clean imports (`@/components`, `@/lib`, `@/hooks`)

**State Management**
- TanStack Query (React Query) for server state management and data fetching
- Custom query client with automatic error handling and 401 response handling
- React Hook Form with Zod resolvers for form validation

**Asset Management**
- PNG background images intended for hero sections across pages
- Assets served from `/public/assets/` directory
- Vite alias configuration for `@assets` path

### Backend Architecture

**Server Framework**
- Express.js server with TypeScript
- Development mode with Vite middleware for HMR
- Production build using esbuild for server bundling

**API Design**
- RESTful API routes prefixed with `/api`
- Request/response logging middleware for debugging
- JSON body parsing with raw body capture for webhooks
- Session-based authentication ready (credentials: include)

**Storage Layer**
- Interface-based storage abstraction (`IStorage`) for flexible backend swapping
- In-memory storage implementation (`MemStorage`) for development
- Designed to support database integration via Drizzle ORM
- PostgreSQL schema defined with Drizzle using Neon serverless driver

**Database Schema**
- Users table with UUID primary keys, username, and password fields
- DrizzleKit configured for schema migrations
- Connection ready for PostgreSQL via `DATABASE_URL` environment variable

### External Dependencies

**UI & Styling**
- Radix UI component primitives (@radix-ui/react-*)
- TailwindCSS with PostCSS for utility-first styling
- class-variance-authority for component variant management
- Lucide React for iconography

**Data & Forms**
- TanStack Query for async state management
- React Hook Form for form handling
- Zod for schema validation
- drizzle-zod for schema-to-validation conversion

**Database & ORM**
- Drizzle ORM for type-safe database queries
- @neondatabase/serverless for PostgreSQL connection
- connect-pg-simple for PostgreSQL session store

**Development Tools**
- Vite for frontend build and dev server
- tsx for TypeScript execution
- esbuild for production bundling
- Replit-specific plugins for development experience

**Date & Utilities**
- date-fns for date manipulation
- clsx and tailwind-merge for className utilities
- nanoid for ID generation