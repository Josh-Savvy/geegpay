import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
	darkMode: "class",
	lightMode: "class",
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		screens: {
			xs: "475px",
			...defaultTheme.screens,
		},

		extend: {
			fontSize: {
				xxs: ".625rem", // for 10px, as 10/16 = 0.625
				xsm: ".75rem", // for 12px, as 12/16 = 0.75
				sm: ".875rem", // for 14px, as 14/16 = 0.875
			},
			colors: {
				success: "#34CAA5",
				danger: "#FF4A55",
				secondary: "#3A3F51",
				tertiary: "#0D062D",
				primary: "#BB372F",
				dark_bg: "#0C0A09",
				dark_fg: "#181818",
				warning: "#FFB74A",
			},
		},
	},
	plugins: [],
};
export default config;
