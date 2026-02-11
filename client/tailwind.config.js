module.exports = {
  content: ["./**/*.{html,js,css}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#39E079",
        "background-light": "#f6f8f7",
        "background-dark": "#122017",
      },
      fontFamily: { display: "Lexend" },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },
    },
  },
};
