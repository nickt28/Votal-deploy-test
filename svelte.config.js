import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';
import twObfuscator from 'tailwind-obfuscator';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	},
	// preprocess: vitePreprocess(),
	preprocess: [
		vitePreprocess({}),
		twObfuscator({
		  enable: true, // Set to true to enable class obfuscation (default is true)
		}),
	],
};

export default config;
