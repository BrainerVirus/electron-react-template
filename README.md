# Electron React Template

A modern, feature-rich template for building cross-platform desktop applications with Electron, React, TypeScript, and Tailwind CSS.

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

## 🔄 Using This Template

This repository is designed to be used as a template for building Electron applications with React. There are two ways to use it:

### Option 1: GitHub Template (Recommended)

1. Click the "Use this template" button at the top of the repository
2. Select "Create a new repository"
3. Choose the owner and name for your new repository
4. Click "Create repository from template"
5. Clone your new repository:
   ```bash
   git clone https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
   cd YOUR-REPO-NAME
   ```
6. Install dependencies:
   ```bash
   npm install
   ```

**Benefits:** Creates a fresh repository without commit history, ready for your project.

### Option 2: Clone and Customize

```bash
# Clone the repository
git clone https://github.com/BrainerVirus/electron-react-template.git my-app

# Enter project directory
cd my-app

# Reset Git history
rm -rf .git
git init
git add .
git commit -m "Initial commit from template"

# Install dependencies
npm install
```

### Required Post-Template Setup

After creating your project using either method above, you'll need to:

1. **Update package.json**:

   - Change the name, description, and version
   - Update the repository URL to your new repo
   - Adjust any dependencies as needed

2. **Configure GitHub Actions**:
   - Keep or modify release.yml based on your needs:
     - For a template/library: Use the simpler template release workflow
     - For an application: Use the full Electron build workflow (see below)

## 🚀 Development Workflow

### Prerequisites

- Node.js 22.x or higher
- npm (required, pnpm has compatibility issues with Electron)

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

## 👨‍💻 Development Guide

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

## 🛠️ CI/CD Configuration

### Option 1: Template/Library Release Workflow

For templates, libraries, or projects that don't need platform-specific builds:

```yaml
# .github/workflows/release.yml
name: Release

on:
  push:
    branches: [main]

jobs:
  release:
    name: Release
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0
      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '22'
          cache: 'npm'
      - name: Install dependencies
        run: npm ci
      - name: Lint
        run: npm run lint
      - name: Release
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        run: npx semantic-release
```

### Option 2: Full Electron Application Workflow

For projects that need platform-specific Electron builds:

```yaml
# .github/workflows/release.yml
name: Build and Release

on:
  push:
    branches: [main]
    tags:
      - 'v*'

jobs:
  release:
    name: Create Release
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0
      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '22'
          cache: 'npm'
      - name: Install dependencies
        run: npm ci
      - name: Lint
        run: npm run lint
      - name: Release
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        run: npx semantic-release

  build-electron:
    needs: release
    strategy:
      matrix:
        os: [ubuntu-latest, windows-latest, macos-latest]
        include:
          - os: ubuntu-latest
            build_command: npm run dist:linux
            artifact_path: dist/*.AppImage
          - os: windows-latest
            build_command: npm run dist:win
            artifact_path: dist/*.{exe,msi}
          - os: macos-latest
            build_command: npm run dist:mac
            artifact_path: dist/*.dmg

    name: Build (${{ matrix.os }})
    runs-on: ${{ matrix.os }}
    steps:
      - uses: actions/checkout@v4
        with:
          ref: main
      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '22'
          cache: 'npm'
      - name: Install dependencies
        run: npm ci
      - name: Build app
        run: ${{ matrix.build_command }}
      - name: Upload artifacts to release
        uses: softprops/action-gh-release@v1
        if: startsWith(github.ref, 'refs/tags/')
        with:
          files: ${{ matrix.artifact_path }}
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

### Understanding the CI Setup

- **For Template/Library**:

  - Simple workflow that just runs linting and creates semantic releases
  - No platform-specific builds needed

- **For Applications**:
  - Two-job workflow with release creation and platform builds
  - Builds Windows, macOS, and Linux packages
  - Attaches artifacts to GitHub releases when tags are pushed

### Triggering Releases

For semantic-release to create a new version:

1. Make commits following [Conventional Commits](https://www.conventionalcommits.org/)

   - `feat: add new feature` - Triggers minor version bump
   - `fix: resolve bug` - Triggers patch version bump
   - `BREAKING CHANGE: major change` - Triggers major version bump

2. Push to the main branch:

   ```bash
   git push origin main
   ```

3. The workflow will automatically:
   - Determine the next version from your commits
   - Update the CHANGELOG.md
   - Create a GitHub release with notes
   - Build platform-specific binaries (if using App workflow)

## 🌐 Electron Configuration

This template includes a basic Electron configuration in main.ts:

- Development mode loads from `http://localhost:5123`
- Production mode loads from index.html

To customize Electron functionality, modify the [main.ts](./src/electron/main.ts) file.

## 🔧 Configuration Files

- **[tsconfig.json (main)](./tsconfig.json)** - Main TypeScript configuration
- **[tsconfig.json (electron)](./src/electron/tsconfig.json)** - Electron process TypeScript configuration
- **[vite.config.js](./vite.config.js)** - Vite bundler configuration
- **[electron-builder.json](./electron-builder.json)** - Electron builder configuration
- **[eslint.config.js](./eslint.config.js)** - ESLint rules configuration
- **[prettier.config.js](./prettier.config.js)** - Prettier formatting rules

## 📚 Useful Resources

- [Electron Documentation](https://www.electronjs.org/docs/latest)
- [React Documentation](https://react.dev/)
- [TanStack Router Documentation](https://tanstack.com/router/latest)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Shadcn UI Components](https://ui.shadcn.com/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Vite Documentation](https://vitejs.dev/guide/)

## 📄 License

This project is licensed under the MIT License - see the license.md file for details.

## ✨ Acknowledgments

- [TanStack](https://tanstack.com/)
- [Shadcn](https://ui.shadcn.com/)
- [Electron](https://www.electronjs.org/)
- [Vite](https://vitejs.dev/)

---

Made with ❤️ by [Cristhofer Pincetti](https://github.com/BrainerVirus)
