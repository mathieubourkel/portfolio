import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1440px',
      "3xl": "2000px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
        xl: "2rem",
        '2xl': "0rem"
      }
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        prim: {
          1: "rgb(79, 72, 112, 1)",
          2: "rgb(79, 72, 112, 0.7)",
          3: "rgb(79, 72, 112, 0.4)",
          4: "rgb(79, 72, 112, 0.1)",
        },
        sec: {
          1: "rgb(72, 86, 112, 1)",
          2: "rgb(72, 86, 112, 0.7)",
          3: "rgb(72, 86, 112, 0.4)",
          4: "rgb(72, 86, 112, 0.1)",
        },
        accent: {
          1: "rgb(223, 198, 83, 1)",
          2: "rgb(223, 198, 83, 0.7)",
          3: "rgb(223, 198, 83, 0.4)",
          4: "rgb(223, 198, 83, 0.1)",
        },
        text: {
          1: "rgb(237, 236, 232)",
        },
        bg: {
          1: "rgb(30, 30, 30)",
          2: "rgb(23, 23, 23)",
          3: "rgb(30, 30, 30, 0.5)",
          4: "rgb(30, 30, 30, 0.2)",
          5: "rgb(30, 30, 30, 0.9)",
          6: "rgb(0, 0, 0, 0.9)",
        },
        gradient: {
          1: "rgba(55, 52, 52, 0.618)",
        }
      },
      animation: {
        first: "moveVertical 30s ease infinite",
        second: "moveInCircle 20s reverse infinite",
        third: "moveInCircle 40s linear infinite",
        fourth: "moveHorizontal 40s ease infinite",
        fifth: "moveInCircle 20s ease infinite",
        scroll: "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        moveHorizontal: {
          "0%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
          "50%": {
            transform: "translateX(50%) translateY(10%)",
          },
          "100%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
        },
        moveInCircle: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "50%": {
            transform: "rotate(180deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        moveVertical: {
          "0%": {
            transform: "translateY(-50%)",
          },
          "50%": {
            transform: "translateY(50%)",
          },
          "100%": {
            transform: "translateY(-50%)",
          },
        },
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },

      },
    },
  },
  plugins: [],
};
export default config;
