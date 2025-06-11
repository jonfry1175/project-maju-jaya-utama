# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
npm run dev       # Start development server on http://localhost:8080
npm run build     # Create production build
npm run lint      # Run ESLint
npm run preview   # Preview production build locally
```

## Project Architecture

This is a React + TypeScript single-page application for Global Sinergi Kapital, an Indonesian financial services company.

### Technology Stack
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite with SWC for fast refresh
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Styling**: Tailwind CSS with custom design system
- **Routing**: React Router v6
- **State Management**: React Query (TanStack Query)
- **Forms**: React Hook Form with Zod validation

### Code Structure
- **Pages**: `/src/pages/` - Route-level components (Index, NotFound)
- **Components**: `/src/components/` - Feature components (Header, HeroSection, AboutSection, etc.)
- **UI Library**: `/src/components/ui/` - Reusable shadcn/ui components
- **Hooks**: `/src/hooks/` - Custom React hooks
- **Utilities**: `/src/lib/utils.ts` - Helper functions including `cn()` for className merging

### Import Conventions
- Use `@/` alias for src directory imports (e.g., `import { Button } from "@/components/ui/button"`)
- Components use PascalCase naming
- File extensions: `.tsx` for React components, `.ts` for utilities

### Styling Approach
- Tailwind CSS with CSS variables for theming
- Design tokens defined in `/src/index.css` (colors, radius, etc.)
- Custom animations: fade-in, slide-in variants, accordion animations
- Responsive design with mobile-first approach

### Key Configuration Notes
- TypeScript is configured with relaxed type checking (no strict mode)
- ESLint is configured but unused variables rule is disabled
- No test infrastructure is currently set up
- Development server runs on port 8080 (not the default 5173)