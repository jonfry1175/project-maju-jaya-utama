# PT Maju Jaya Utama Lestari.

A modern single-page application for PT Maju Jaya Utama Lestari, an Indonesian converted paper products manufacturer based in Tangerang.

## Features

- Multilingual support (English and Indonesian)
- Manufacturing company profile
- Product and capability highlights
- Sustainability and quality commitments
- Contact and inquiry information

## Development

### Prerequisites

- Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Getting Started

```sh
# Clone the repository
git clone <repository-url>

# Navigate to the project directory
cd project-maju-jaya-utama-lestari

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
└── index.css           # Global styles and design tokens
```

## License

Private repository for PT Maju Jaya Utama Lestari.
