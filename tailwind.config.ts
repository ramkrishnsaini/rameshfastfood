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
        brand: {
          DEFAULT: "#FF6B00",
          dark: "#E85D00",
          muted: "#FF8F40",
        },
        surface: {
          DEFAULT: "#111827",
          elevated: "#1F2937",
          glass: "rgba(255, 255, 255, 0.06)",
        },
        accent: {
          DEFAULT: "#FACC15",
          soft: "#FDE047",
        },
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "hero-mesh":
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(255, 107, 0, 0.35), transparent), radial-gradient(ellipse 60% 40% at 100% 50%, rgba(250, 204, 21, 0.12), transparent), linear-gradient(180deg, #0B0F1A 0%, #111827 45%, #0F172A 100%)",
        "card-glow":
          "linear-gradient(135deg, rgba(255,107,0,0.15) 0%, rgba(250,204,21,0.08) 50%, transparent 100%)",
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(255, 107, 0, 0.45)",
        "glow-accent": "0 0 32px -8px rgba(250, 204, 21, 0.35)",
        card: "0 25px 50px -12px rgba(0, 0, 0, 0.45)",
      },
      animation: {
        "pulse-soft": "pulse-soft 3s ease-in-out infinite",
      },
      keyframes: {
        "pulse-soft": {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
