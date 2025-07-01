import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'podcast': {
          'primary': '#1B263B',    // Deep navy blue
          'secondary': '#415A77',  // Medium blue-gray
          'accent': '#778DA9',     // Light blue-gray
          'gold': '#E0E1DD',       // Off-white/cream
          'highlight': '#0D1B2A',  // Very dark blue
          'red': '#C5282F',        // Podcast recording red
        }
      },
      fontFamily: {
        'podcast': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
      }
    },
  },
  plugins: [],
} satisfies Config; 