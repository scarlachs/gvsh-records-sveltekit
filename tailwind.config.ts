import { fontFamily } from "tailwindcss/defaultTheme";
import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["selector"],
	content: ["./src/**/*.{html,js,svelte,ts}"],
	safelist: ["dark"],
	theme: {
		fontFamily: {
			sans: ["Montserrat Variable", ...fontFamily.sans]
		},
		colors: ({ colors }) => ({
			primary: {
				50: "#fae3e0",
				100: "#f6d0ca",
				200: "#efa89f",
				300: "#e88274",
				400: "#e15a47",
				500: "#d23823",
				600: "#a62c1c",
				700: "#7b2114",
				800: "#4f150d",
				900: "#230906",
				950: "#0d0302"
			},
			slate: colors.slate,
			white: colors.white,
			zinc: {
				50: colors.zinc["50"],
				950: colors.zinc["950"]
			}
		}),
		container: ({ theme }) => ({
			center: true,
			padding: {
				DEFAULT: "1rem",
				sm: "2rem"
			},
			screens: {
				...theme("screens"),
				"2xl": "1400px"
			}
		}),
		extend: {
			colors: {
				border: "hsl(var(--border) / <alpha-value>)",
				input: "hsl(var(--input) / <alpha-value>)",
				ring: "hsl(var(--ring) / <alpha-value>)",
				background: "hsl(var(--background) / <alpha-value>)",
				foreground: "hsl(var(--foreground) / <alpha-value>)",
				primary: {
					DEFAULT: "hsl(var(--primary) / <alpha-value>)",
					foreground: "hsl(var(--primary-foreground) / <alpha-value>)"
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary) / <alpha-value>)",
					foreground: "hsl(var(--secondary-foreground) / <alpha-value>)"
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
					foreground: "hsl(var(--destructive-foreground) / <alpha-value>)"
				},
				muted: {
					DEFAULT: "hsl(var(--muted) / <alpha-value>)",
					foreground: "hsl(var(--muted-foreground) / <alpha-value>)"
				},
				accent: {
					DEFAULT: "hsl(var(--accent) / <alpha-value>)",
					foreground: "hsl(var(--accent-foreground) / <alpha-value>)"
				},
				popover: {
					DEFAULT: "hsl(var(--popover) / <alpha-value>)",
					foreground: "hsl(var(--popover-foreground) / <alpha-value>)"
				},
				card: {
					DEFAULT: "hsl(var(--card) / <alpha-value>)",
					foreground: "hsl(var(--card-foreground) / <alpha-value>)"
				}
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)"
			}
		}
	},
	plugins: [require("@tailwindcss/typography")]
};

export default config;
