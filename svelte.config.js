import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import { resolve } from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		preprocess({
			postcss: true
		})
	],
	kit: {
		adapter: adapter(),
		vite: {
			resolve: {
				alias: {
					$lib: resolve('./src/lib'),
					$shared: resolve('./src/shared'),
					$types: resolve('./src/types')
				}
			}
		}
	}
};

export default config;
