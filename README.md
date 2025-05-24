![License](https://img.shields.io/badge/license-MIT-blue.svg)

## 📋 Overview

This template provides a solid foundation for developing Electron applications with a modern React frontend. It comes pre-configured with TypeScript, Tailwind CSS, TanStack Router, and Shadcn UI components to help you build beautiful, type-safe desktop applications quickly.

## ✨ Features

- **Electron** - Cross-platform desktop application framework
- **React 19** - Latest React with modern features
- **TypeScript** - Type safety throughout the codebase
- **Tailwind CSS** - Utility-first CSS framework
- **TanStack Router** - File-based routing with type safety
- **Shadcn UI** - High-quality, customizable UI components
- **ESLint & Prettier** - Code linting and formatting
- **Vite** - Fast development and build tooling
- **Vitest** - Unit testing framework
- **Million.js** - Performance optimization for React
- **Cross-platform** - Build for Windows, macOS, and Linux

## 🚀 Quick Start

### Prerequisites

- Node.js 22.x or higher
- npm (required, pnpm has compatibility issues with Electron)

### Installation

```bash
# Clone the repository
git git@github.com:BrainerVirus/electron-react-template.git
cd electron-react-template

# Install dependencies
npm install
```

### Development

```bash
# Start the development server (React + Electron)
npm run dev
```

### Building for Production

```bash
# Build for your current platform
npm run build

# Build for specific platforms
npm run dist:win    # Windows
npm run dist:mac    # macOS
npm run dist:linux  # Linux
npm run dist:all    # All platforms
```

## 📁 Project Structure

```
electron-react-template/
├── dist-electron/       # Compiled Electron main process code
├── dist-react/          # Compiled React application
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   └── ui/          # Shadcn UI components
│   ├── electron/        # Electron main process code
│   │   ├── main.ts      # Main entry point for Electron
│   │   ├── util.ts      # Electron utilities
│   │   └── tsconfig.json # TypeScript config for Electron
│   ├── hooks/           # React custom hooks
│   ├── lib/             # Shared utilities
│   ├── routes/          # TanStack Router routes
│   │   ├── __root.tsx   # Root route layout
│   │   └── index.tsx    # Home page route
│   ├── main.tsx         # React entry point
│   └── styles.css       # Global styles
├── .eslintrc.js         # ESLint configuration
├── .prettierrc          # Prettier configuration
├── electron-builder.json # Electron build configuration
├── index.html           # HTML template
├── package.json         # Project dependencies and scripts
├── tsconfig.json        # TypeScript configuration
└── vite.config.js       # Vite configuration
```

## 📝 Available Scripts

- `npm run dev` - Start the development server (React + Electron)
- `npm run dev:react` - Start the React development server only
- `npm run dev:electron` - Start the Electron development server only
- `npm run build` - Build the production application
- `npm run serve` - Preview the built application
- `npm run test` - Run tests with Vitest
- `npm run lint` - Run ESLint
- `npm run format` - Run Prettier
- `npm run check` - Run both ESLint and Prettier
- `npm run dist:win` - Build for Windows
- `npm run dist:mac` - Build for macOS (ARM64)
- `npm run dist:linux` - Build for Linux
- `npm run dist:all` - Build for all platforms

## 🛠 Development

### Adding Shadcn UI Components

```bash
pnpx shadcn@latest add button
pnpx shadcn@latest add dialog
# Add more components as needed
```

### Adding Routes

Create new files in the routes directory:

```tsx
// src/routes/about.tsx
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/about')({
  component: About,
});

function About() {
  return (
    <div>
      <h1>About Page</h1>
    </div>
  );
}
```

### Adding Links for Navigation

```tsx
import { Link } from '@tanstack/react-router';

// In your component
<Link to="/about">About</Link>;
```

## 🌐 Electron Configuration

This template includes a basic Electron configuration in main.ts:

- Development mode loads from `http://localhost:5123`
- Production mode loads from index.html

To customize Electron functionality, modify the main.ts file.

## 🔧 Configuration Files

- **tsconfig.json** - Main TypeScript configuration
- **tsconfig.json** - Electron process TypeScript configuration
- **vite.config.js** - Vite bundler configuration
- **electron-builder.json** - Electron builder configuration
- **eslint.config.js** - ESLint rules configuration
- **prettier.config.js** - Prettier formatting rules

## 📚 Useful Resources

- [Electron Documentation](https://www.electronjs.org/docs/latest)
- [React Documentation](https://react.dev/)
- [TanStack Router Documentation](https://tanstack.com/router/latest)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Shadcn UI Components](https://ui.shadcn.com/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Vite Documentation](https://vitejs.dev/guide/)

## 📄 License

This project is licensed under the [MIT License](./license.md) - see the license.md file for details.

## ✨ Acknowledgments

- [TanStack](https://tanstack.com/)
- [Shadcn](https://ui.shadcn.com/)
- [Electron](https://www.electronjs.org/)
- [Vite](https://vitejs.dev/)

---

Made with ❤️ by [Cristhofer Pincetti](https://github.com/BrainerVirus)
