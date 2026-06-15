/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        void: "#050506",
        bunker: "#0d0d10",
        plate: "#141419",
        "plate-alt": "#1b1b22",
        oxide: {
          DEFAULT: "#ff4d00",
          glow: "#ff6b2c"
        },
        signal: {
          DEFAULT: "#2dd4bf",
          glow: "#5eead4"
        },
        pearl: "#e4e4e7",
        mist: "#a1a1aa",
        dust: "#52525b"
      },
      fontFamily: {
        display: ["'Chiron Hei HK'", "system-ui", "sans-serif"],
        body: ["'Spline Sans'", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"]
      },
      backgroundImage: {
        grid: "linear-gradient(to right, rgba(255,77,0,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,77,0,0.06) 1px, transparent 1px)"
      },
      animation: {
        "pulse-slow": "pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        scan: "scan 8s linear infinite"
      },
      keyframes: {
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" }
        }
      }
    }
  },
  plugins: []
}
