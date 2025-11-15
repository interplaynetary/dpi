# Free Association

Technology for Better Global Coordination - A values-driven resource coordination platform with peer-to-peer architecture.

## 🚀 Quick Start

### Prerequisites

This project uses [Bun](https://bun.sh) - a fast all-in-one JavaScript runtime.

Install Bun:
```bash
curl -fsSL https://bun.sh/install | bash
```

### Installation

```bash
# Install dependencies
bun install

# Start development server
bun run dev
```

The application will be available at `http://localhost:5000`

### Using the Helper Script

For an even easier setup:
```bash
./scripts/dev.sh
```

This script will:
- Check and install Bun if needed
- Install dependencies
- Kill any existing server
- Run type checking
- Start the dev server

## 📁 Project Structure

```
FreeAssociationLink/
├── .github/
│   └── workflows/
│       └── deploy.yml  # GitHub Pages deployment
├── client/              # React frontend
│   ├── public/         # Static assets
│   │   └── .nojekyll   # GitHub Pages config
│   ├── src/
│   │   ├── components/ # React components
│   │   ├── pages/      # Page components
│   │   └── main.tsx    # Client entry point
│   ├── index.html
│   └── 404.html        # SPA routing fallback
├── server/              # Express backend (optional)
│   ├── index.ts        # Server entry point
│   ├── routes.ts       # API routes
│   └── vite.ts         # Vite dev middleware
├── shared/              # Shared types and schemas
├── bunfig.toml          # Bun configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Dependencies and scripts
```

## 🛠️ Available Scripts

### Development
```bash
bun run dev          # Start dev server with hot reload
bun run dev:node     # Start with Node.js (fallback)
bun run check        # Run TypeScript type checking
```

### Building
```bash
bun run build            # Build client and server
bun run build:client     # Build only client (Vite)
bun run build:server     # Build only server (Bun)
bun run build:gh-pages   # Build for GitHub Pages deployment
bun run preview:gh-pages # Preview GitHub Pages build locally
```

### Production
```bash
bun run start        # Run production server (Bun)
bun run start:node   # Run production server (Node.js)
```

### Database
```bash
bun run db:push      # Push database schema
```

### Utilities
```bash
bun run clean        # Remove node_modules, dist, and cache
```

## 🎨 Features

### Frontend
- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **shadcn/ui** components
- **Framer Motion** for animations
- **D3.js** for data visualizations
- **Network Background** with animated nodes
- **Dark Mode** support

### Backend
- **Express** server
- **Drizzle ORM** for database
- **Vite** dev middleware
- **Type-safe** API routes

### Development Experience
- ⚡ **Hot Module Replacement** (HMR)
- 🔄 **Auto-restart** on server changes
- 📝 **TypeScript** throughout
- 🎯 **Path aliases** for clean imports
- 🚀 **Fast** with Bun runtime

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root:
```env
PORT=5000
NODE_ENV=development
# DATABASE_URL=postgresql://...
```

### Bun Configuration

See `bunfig.toml` for Bun-specific settings:
- Package installation behavior
- Module resolution
- Runtime options

### TypeScript Configuration

The `tsconfig.json` is optimized for Bun:
- `moduleResolution: "bundler"`
- `types: ["bun-types", "vite/client"]`
- Path aliases: `@/*` and `@shared/*`

## 🌐 Tech Stack

**Runtime:**
- Bun (development & production)
- Node.js compatible

**Frontend:**
- React 18
- TypeScript
- Tailwind CSS
- Vite
- Wouter (routing)
- TanStack Query

**Backend:**
- Express
- Drizzle ORM
- Passport.js

**UI Components:**
- Radix UI primitives
- shadcn/ui
- Lucide icons
- D3.js for charts

## 📊 Network Visualization

The project includes an animated network visualization background created with Canvas API:
- 80 animated nodes
- Dynamic connections
- Rainbow color-shifting
- Responsive to dark/light mode
- Interactive hover effects

## 🎯 Investment Tracking

- **D3.js Pie Chart** for fund allocation
- **Phase-based Timeline** with emoji indicators
- **Real-time Updates** on progress

## 🌐 Deployment

This project is configured for automatic deployment to GitHub Pages. See [GITHUB_PAGES_SETUP.md](./GITHUB_PAGES_SETUP.md) for detailed deployment instructions.

## 🐛 Troubleshooting

### Port in Use
```bash
# Find process on port 5000
lsof -i :5000

# Kill it
kill -9 <PID>
```

### Dependencies Issues
```bash
# Clean install
rm -rf node_modules bun.lock
bun install
```

### Type Errors
```bash
# Check types
bun run check
```

## 📚 Documentation

- [Design Guidelines](./design_guidelines.md) - UI/UX guidelines
- [GitHub Pages Setup](./GITHUB_PAGES_SETUP.md) - Deployment guide
- [Coalition Pledge](./COALITION_PLEDGE.md) - Join the coalition

## 🤝 Contributing

1. Install dependencies: `bun install`
2. Start dev server: `bun run dev`
3. Make your changes
4. Run type check: `bun run check`
5. Test locally
6. Submit PR

## 📝 License

MIT

## 🔗 Links

- [Local Development](http://localhost:5000)
- [Open Collective](https://opencollective.com/free-association)

---

Built with ❤️ using Bun, React, and TypeScript

