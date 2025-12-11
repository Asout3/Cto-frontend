import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backdropBlur: {
        xs: "2px",
      },
      backgroundColor: {
        glass: "rgba(255, 255, 255, 0.1)",
        "glass-dark": "rgba(0, 0, 0, 0.1)",
      },
      borderColor: {
        glass: "rgba(255, 255, 255, 0.2)",
        "glass-dark": "rgba(0, 0, 0, 0.2)",
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        "glass-dark": "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
      },
      animation: {
        fade: "fade 0.5s ease-in-out",
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-in-from-left": "slideInFromLeft 0.5s ease-out",
        "slide-in-from-right": "slideInFromRight 0.5s ease-out",
        "slide-in-from-top": "slideInFromTop 0.5s ease-out",
      },
      keyframes: {
        fade: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        slideInFromLeft: {
          from: {
            opacity: "0",
            transform: "translate3d(-100%, 0, 0)",
          },
          to: {
            opacity: "1",
            transform: "translate3d(0, 0, 0)",
          },
        },
        slideInFromRight: {
          from: {
            opacity: "0",
            transform: "translate3d(100%, 0, 0)",
          },
          to: {
            opacity: "1",
            transform: "translate3d(0, 0, 0)",
          },
        },
        slideInFromTop: {
          from: {
            opacity: "0",
            transform: "translate3d(0, -100%, 0)",
          },
          to: {
            opacity: "1",
            transform: "translate3d(0, 0, 0)",
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
