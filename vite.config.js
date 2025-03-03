import { sveltekit } from '@sveltejs/kit/vite'

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	server: {
		fs: {
			allow: ['.']
		}
	},
	build: {
		minify: "esbuild"
	}
};

export default config
