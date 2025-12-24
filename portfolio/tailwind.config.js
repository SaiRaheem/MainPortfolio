/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "cyber-black": "#020205",
        "neon-blue": "#00f3ff",
        "neon-pink": "#ff00ff",
        "neon-green": "#00ff41",
        "neon-purple": "#bc13fe",
      },
      fontFamily: {
        orbitron: ['"Orbitron"', "sans-serif"],
        inter: ['"Inter"', "sans-serif"],
      },
      boxShadow: {
        "neon-blue": "0 0 10px #00f3ff, 0 0 20px #00f3ff",
        "neon-pink": "0 0 10px #ff00ff, 0 0 20px #ff00ff",
        "neon-green": "0 0 10px #00ff41, 0 0 20px #00ff41",
      },
    },
  },
  plugins: [],
}
