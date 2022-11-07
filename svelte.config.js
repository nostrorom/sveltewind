import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		preprocess({
			postcss: true
		})
	],

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
