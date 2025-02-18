/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeSlideOut: {
          "0%": {
            opacity: "1",
            transform: "translateY(0)",
            maxHeight: "100px",
          },
          "90%": {
            opacity: "0",
            transform: "translateY(32px)",
            maxHeight: "100px",
          },
          "100%": {
            marginTop: "0px",
            marginBottom: "0px",
            opacity: "0",
            transform: "translateY(32px)",
            maxHeight: "0px",
            overflow: "hidden",
            visibility: "hidden",
          },
        },
        fadeSlideIn: {
          "0%": { transform: "translateY(32px)", opacity: "0" },
          "100%": {
            transform: "translateY(0px)",
            opacity: "1",
          },
        },
        accordionSlideDown: {
          "0%": { transform: "scaleY(0)", opacity: "0" },
          "100%": { transform: "scaleY(1)", opacity: "1" },
        },
        accordionSlideUp: {
          "0%": { transform: "scaleY(1)", opacity: "1" },
          "100%": { transform: "scaleY(0)", opacity: "0" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-in-out",
        fadeSlideOut: "fadeSlideOut 1s ease-in-out forwards",
        fadeSlideOutDelay1: "fadeSlideOut 0.625s ease-in-out 0.25s forwards",
        fadeSlideOutDelay2: "fadeSlideOut 0.625s ease-in-out 0.5s forwards",
        fadeSlideOutDelay3: "fadeSlideOut 0.625s ease-in-out 0.75s forwards",
        fadeSlideOutDelay4: "fadeSlideOut 0.625s ease-in-out 1s forwards",

        fadeSlideIn: "fadeSlideIn 0.5s ease-in-out forwards",
        fadeSlideInDelay1: "fadeSlideIn 0.625s ease-in-out 0.25s forwards",
        fadeSlideInDelay2: "fadeSlideIn 0.625s ease-in-out 0.50s forwards",
        fadeSlideInDelay3: "fadeSlideIn 0.625s ease-in-out 0.75s forwards",

        accordionSlideDown: "accordionSlideDown 0.1s ease-out forwards",
        accordionSlideUp: "accordionSlideUp 0.25s ease-out forwards",
      },
      colors: {
        hpxBlue: {
          DEFAULT: "#4759F5",
          hover: "#3543C0",
          active: "#2C3798",
        },
        hpxWhite: {
          DEFAULT: "#F5F6FF",
          hover: "#EBEDFF",
        },
        hpxGrey: {
          DEFAULT: "#D1D2E4",
          hover: "#B7B9D5",
        },
        hpxMediumGrey: {
          DEFAULT: "#828398",
          hover: "#9292a6",
        },
        hpxCharcoal: {
          DEFAULT: "#292A35",
          hover: "#111115",
        },
        hpxLightBlue: {
          DEFAULT: "#E9EBFB",
          hover: "#BBC0E6",
        },
      },
    },
  },
  plugins: [],
};
