import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        void: "#080810",
        "void-mid": "#0e0e1a",
        surface: "#12121e",
        border: "#ffffff0f",
        muted: "#ffffff33",
        subtle: "#ffffff66",
        bright: "#ffffffcc",
        full: "#ffffff",
        // Category colors
        socialverse: "#8b5cf6",
        commerceverse: "#f97316",
        bannerverse: "#3b82f6",
        festivalverse: "#eab308",
        productverse: "#94a3b8",
        uxverse: "#06b6d4",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.2em",
      },
    },
  },
  plugins: [],
};
export default config;
