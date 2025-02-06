/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        hpxBlue: {
          DEFAULT: "#4759F5",
          hover: "#3845c0",
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
