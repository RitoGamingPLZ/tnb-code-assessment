/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-900": "#173C0E",
        "primary-750": "#47763B",
        "primary-700": "#48773C",
        "primary-500": "#88A680",
        "primary-100": "#DAE3D7",
        "neutral-900": "#1D1E1F",
        "neutral-800": "#424547",
        "neutral-400": "#9FA2A4",
        "neutral-100": "#ECEDEE",
        "neutral-50": "#F6F6F6",
      },
      borderRadius: {
        4: "4px",
      },
      borderWidth: {
        6: "6px",
      },
      spacing: {
        17.5: "70px",
      },
    },
  },
  plugins: [],
};
