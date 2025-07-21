# Global Sinergi Kapital

A modern single-page application for Global Sinergi Kapital, an Indonesian financial services company specializing in corporate finance and investment advisory.

## Features

- Multilingual support (English and Indonesian)
- Modern, responsive design
- Service pages for various financial solutions
- Client testimonials and portfolio
- Contact information and team showcase

## Development

### Prerequisites

- Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Getting Started

```sh
# Clone the repository
git clone <repository-url>

# Navigate to the project directory
cd project-global-sinergi-kapital

# Install dependencies
npm install

# Start the development server
npm run dev
```

The development server will run on http://localhost:8080

### Available Scripts

```bash
npm run dev       # Start development server
npm run build     # Create production build
npm run lint      # Run ESLint
npm run preview   # Preview production build locally
```

## Technology Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite with SWC for fast refresh
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Styling**: Tailwind CSS with custom design system
- **Routing**: React Router v6
- **State Management**: React Query (TanStack Query)
- **Forms**: React Hook Form with Zod validation
- **Animations**: Framer Motion

## Project Structure

```
src/
├── components/          # Feature components
│   ├── ui/             # shadcn/ui components
│   ├── Header.tsx      # Navigation header
│   ├── HeroSection.tsx # Landing hero
│   └── ...            # Other sections
├── pages/              # Route-level components
├── hooks/              # Custom React hooks
├── lib/                # Utilities and helpers
└── index.css          # Global styles and design tokens
```

## Services Offered

The application showcases various financial services:

- IPO Compliance Plans
- Bridging Financing
- Management Improvement Plans
- Proforma Financial Reports
- And more...

## Contributing

1. Create a new branch for your feature
2. Make your changes
3. Run `npm run lint` to check for linting errors
4. Submit a pull request

## License

Private repository for Global Sinergi Kapital.
