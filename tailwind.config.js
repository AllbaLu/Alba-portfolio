/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
        safelist: [
        "text-pink-400",
        "text-rose-300",
        "text-emerald-400",
        "text-amber-300"
],
  theme: {
    extend: {
      colors: {
        

        /* Primary (rosa suave elegante) */
        primary: "#e8a0a8",
        "primary-container": "#f5d6d9",
        "primary-fixed": "#f2b8be",
        "primary-fixed-dim": "#e29aa2",
        "on-primary": "#ffffff",
        "on-primary-container": "#3e1f23",

        /* Background & surface */
        background: "#fdfaf9",
        surface: "#ffffff",
        "surface-container-lowest": "#fdfaf9",
        "surface-container-low": "#f7f2f2",
        "surface-container-high": "#f1ecec",
        "surface-container-highest": "#ebe6e6",

        /* Text */
        "on-surface": "#1c1b1f",
        "on-surface-variant": "#6b7280",

        /* Secondary / accents */
        tertiary: "#d8a7b1",
        "tertiary-container": "#f3dce0",
        "on-tertiary-container": "#3e2a2f",
        "on-tertiary-fixed-variant": "#4b3b3f",

        /* UI states */
        outline: "#d1d5db",
        "outline-variant": "#e5e7eb",

        /* Utility */
        error: "#ef4444",
      },

      fontFamily: {
        sans: ["Plus Jakarta Sans", "sans-serif"],
        code: ["Fira Code", "monospace"],
      },

      fontSize: {
        h1: ["3rem", { lineHeight: "1.2", fontWeight: "700" }],
        h2: ["2.25rem", { lineHeight: "1.3", fontWeight: "600" }],
        h3: ["1.5rem", { lineHeight: "1.4", fontWeight: "600" }],
        "body-lg": ["1.125rem", { lineHeight: "1.6" }],
        "body-md": ["1rem", { lineHeight: "1.6" }],
        "label-sm": ["0.875rem", { lineHeight: "1.4", fontWeight: "500" }],
      },

      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.05)",
        glow: "0 10px 25px rgba(232, 160, 168, 0.3)",
      },

      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },


    },
  },
  plugins: [],
};