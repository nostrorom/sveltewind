import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(),
		alias: {
			$admin: '/src/admin',
			$data: '/src/data',
			$json: '/src/json',
			$types: '/src/types',
			$shared: '/src/shared'
		}
	}
};

export default config;
