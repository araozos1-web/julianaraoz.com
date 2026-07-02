/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: { bg: "#0E0E0E", accent: "#10B981", line: "rgba(255,255,255,0.14)" },
      fontFamily: {
        display: ["var(--font-clash)", "sans-serif"],
        sans:    ["var(--font-sans)", "system-ui", "sans-serif"],
        mono:    ["Space Mono", "monospace"],
        serif:   ["DM Serif Display", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
}

