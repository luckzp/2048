module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "cell-black": "#776e65",
        "cell-white": "#f9f6f2",
        "cell-2": "#eee4da",
        "cell-4": "#ede0c8",
        "cell-8": "#f2b179",
        "cell-16": "#f59563",
        "cell-32": "#f67c5f",
        "cell-64": "#f65e3b",
        "cell-128": "#edcf72",
        "cell-256": "#edcc61",
      },
    },
    fontFamily: {
      Roboto: ["Roboto, sans-serif"],
    },
    container: {
      padding: "2rem",
      center: true,
    },
    screens: {
      sm: "640px",
      md: "768px",
    },
  },
  plugins: [],
};
