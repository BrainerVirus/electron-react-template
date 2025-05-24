import MillionLint from '@million/lint';
import tailwindcss from '@tailwindcss/vite';
import viteReact from '@vitejs/plugin-react';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';

import { TanStackRouterVite } from '@tanstack/router-plugin/vite';

// https://vitejs.dev/config/
// Check if we're in test mode
const isTest = process.env.NODE_ENV === 'test' || process.env.VITEST;

export default defineConfig({
	plugins: [
		// Only enable Million Lint when not testing
		!isTest &&
			MillionLint.vite({
				enabled: true,
				filter: {
					include: ['src/**/*.js', 'src/**/*.jsx', 'src/**/*.ts', 'src/**/*.tsx'],
					exclude: ['src/electron/**'],
				},
			}),
		TanStackRouterVite({ autoCodeSplitting: true }),
		viteReact(),
		tailwindcss(),
	],
	base: './',
	test: {
		// environment: 'jsdom',
		// globals: true,
		// Temporarily disable browser testing to test with jsdom only
		browser: {
			enabled: true,
			provider: 'playwright',
			instances: [{ browser: 'chromium' }],
		},
	},
	resolve: {
		alias: {
			'@': resolve(__dirname, './src'),
		},
	},
	build: {
		outDir: 'dist-react',
	},
	server: {
		port: 5123,
		strictPort: true,
	},
});
