import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		port: 7772
	},
	define: {
    APP_VERSION: JSON.stringify(process.env.npm_package_version),
  },
});
