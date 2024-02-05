/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      screens: {
        // creating a new breakpoint
        laptop: "600px",
        // overriding the default breakpoint lg
        lg: "900px",
      },
      colors: {
        primary: "#4F7942",
        secondary: {
          100: "#f5f0e8",
          200: "#ebe0d0",
        },
      },
      fontFamily: {
        chef: " 'Shadows Into Light', cursive",
      },
    },
  },
  plugins: [],
};

//"./src/**/*", "./public/**/*.{html,js}", "./src/**/*.{html,js}"
