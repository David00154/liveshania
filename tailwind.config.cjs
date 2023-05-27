/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			screens:{
				"mxd":{"max":"767px"},
				"mxs":{"max":"640px"},
				"mxxs":{"max":"550px"},
			  }
		},
	},
	plugins: [],
}
