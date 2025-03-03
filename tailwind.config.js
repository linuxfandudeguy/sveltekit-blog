/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			sans: ['Roboto Slab', 'sans-serif'],
			serif: ['Merriweather', 'serif']
		},

		container: {
			center: true,
			screens: {
				sm: '480px', // Decreased from 540px
				md: '640px', // Decreased from 720px
				lg: '750px', // Decreased from 960px
				xl: '800px', // Decreased from 1140px
				'2xl': '1000px' // Decreased from 1320px
			}
		},
		extend: {}
	},
	plugins: []
};
