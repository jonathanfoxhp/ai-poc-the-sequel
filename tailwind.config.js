/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  important: false,

  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        hardFadeOut: {
          "0%": { opacity: "1" },
          "10%": {
            opacity: "0",
            display: "none",
            backgroundColor: "transparent !important",
            color: "transparent !important",
          },
          "100%": {
            opacity: "0",
            display: "none",
            backgroundColor: "transparent !important",
            color: "transparent !important",
          },
        },

        searchSlideOut: {
          "0%": {
            opacity: "1",
            transform: "translateY(0)",
            maxHeight: "124px",
            borderRadius: "8px",
            backgroundColor: "transparent",
            width: "124px",
            height: "124px",
            borderRadius: "100%",
            backgroundColor: "white",
          },

          "30%": {
            opacity: "0.5",
            transform: "translateY(210px)",
            borderRadius: "100%",
            backgroundColor: "#E0DBFD", // Ensures it turns white
            width: "124px",
            height: "124px",
            border: "solid 5px white",
            backgroundColor: "transparent",
            overflow: "hidden",
          },
          "50%": {
            opacity: "0.35",
            transform: "translateY(210px)",
            borderRadius: "100%",
            backgroundColor: "#E0DBFD", // Ensures it turns white
            width: "124px",
            height: "124px",
            border: "solid 5px #E0DBFD",
            backgroundColor: "transparent",
            overflow: "hidden",
          },

          "60%": {
            opacity: "0.25",
            padding: "none !important",
            transform: "translateY(210px)",
            width: "124px",
            height: "124px",
          },

          "70%": {
            opacity: "0.15",
            padding: "none !important",
            transform: "translateY(210px)",
            width: "124px",
            height: "124px",
          },
          "80%": {
            opacity: "0.05",
            padding: "none !important",
            transform: "translateY(210px)",
            width: "124px",
            height: "124px",
          },
          "100%": {
            opacity: "0",
            padding: "none !important",
            transform: "translateY(210px)",
            width: "124px",
            height: "124px",
            overflow: "hidden",

            visibility: "hidden",
            display: "none",
          },
        },

        contractFadeOut: {
          "0%": {
            width: "100%",
            opacity: "1",
          },

          "100%": {
            width: "60%",
            opacity: "0",
          },
        },

        fadeSlideOut: {
          "0%": {
            opacity: "1",
            transform: "translateY(0)",
            maxHeight: "100px",
          },
          "90%": {
            opacity: "0",
            transform: "translateY(72px)",
            maxHeight: "124px",
          },
          "100%": {
            marginTop: "0px",
            marginBottom: "0px",
            opacity: "0",
            transform: "translateY(72px)",
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
        fadeSlideUpAndOut: {
          "0%": {
            opacity: "1",
            transform: "translateY(0)",
            maxHeight: "100px",
          },
          "90%": {
            opacity: "0",
            transform: "translateY(-120px)",
            maxHeight: "124px",
          },
          "100%": {
            marginTop: "0px",
            marginBottom: "0px",
            opacity: "0",
            transform: "translateY(-120px)",
            // maxHeight: "0px",
            overflow: "hidden",
            visibility: "hidden",
          },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-in-out",
        fadeOut: "fadeOut 0.5s ease-in-out 1s",
        hardFadeOut: "hardFadeOut 0.25s ease-in-out 0.6s",
        contractFadeOut: "contractFadeOut 0.75s ease-in-out forwards",

        searchSlideOut:
          "searchSlideOut 3.4s cubic-bezier(0.22, 1, 0.36, 1) 0.75s forwards",

        fadeSlideOut: "fadeSlideOut 0.5s ease-in-out forwards",
        fadeSlideOutDelay1: "fadeSlideOut 0.5s ease-in-out 0.15s forwards",
        fadeSlideOutDelay2: "fadeSlideOut 0.5s ease-in-out 0.3s forwards",
        fadeSlideOutDelay3: "fadeSlideOut 0.5s ease-in-out 0.45s forwards",
        fadeSlideOutDelay4: "fadeSlideOut 0.5s ease-in-out 0.6s forwards",

        fadeSlideIn: "fadeSlideIn 0.5s ease-in-out forwards",
        fadeSlideInDelay1: "fadeSlideIn 0.3125s ease-in-out 0.20s forwards",
        fadeSlideInDelay2: "fadeSlideIn 0.3125s ease-in-out 0.40s forwards",
        fadeSlideInDelay3: "fadeSlideIn 0.3125s ease-in-out 0.60s forwards",
        fadeSlideInDelay4: "fadeSlideIn 0.3125s ease-in-out 1s forwards",
        fadeSlideInDelay5: "fadeSlideIn 0.3125s ease-in-out 1.5s forwards",

        fadeSlideUpAndOut: "fadeSlideUpAndOut 0.5s ease-in-out forwards",

        // accordionSlideDown: "accordionSlideDown 0.1s ease-out forwards",
        // accordionSlideUp: "accordionSlideUp 0.25s ease-out forwards",
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
