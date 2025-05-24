import MillionLint from '@million/lint';
import tailwindcss from '@tailwindcss/vite';
import viteReact from '@vitejs/plugin-react';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';

import { TanStackRouterVite } from '@tanstack/router-plugin/vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
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
		globals: true,
		environment: 'jsdom',
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
