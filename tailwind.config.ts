import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				success: "#34CAA5",
				danger: "#FF4A55",
				secondary: "#3A3F51",
				tertiary: "#0D062D",
				primary: "#BB372F",
				warning: "#FFB74A",
			},
		},
	},
	plugins: [],
};
export default config;
