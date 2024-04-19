/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: "class",
	theme: {
		extend: {
			animation: {
				"spin-around": "spin-around calc(var(--speed) * 2) infinite linear",
				slide: "slide var(--speed) ease-in-out infinite alternate",
				"border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
			},
			keyframes: {
				"spin-around": {
					"0%": {
						transform: "translateZ(0) rotate(0)",
					},
					"15%, 35%": {
						transform: "translateZ(0) rotate(90deg)",
					},
					"65%, 85%": {
						transform: "translateZ(0) rotate(270deg)",
					},
					"100%": {
						transform: "translateZ(0) rotate(360deg)",
					},
				},
				slide: {
					to: {
						transform: "translate(calc(100cqw - 100%), 0)",
					},
				},
				"border-beam": {
					"100%": {
						"offset-distance": "100%",
					},
				},
			},
		},
	},
	plugins: [],
}
