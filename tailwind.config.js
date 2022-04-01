module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        17: "69px",
      },
      colors: {
        primary: "#FF9900",
        text: "#4A4A4A",
        orange: "#F68B1E",
        green: "#20AC76",
        body: "#2A2A2A",
      },
      fontFamily: {
        muli: ["muli", "sans-serif"],
        arial: ["Arial", "Helvetica", "sans-serif"],
      },
      fontSize: {
        h1: "2.5rem",
      },
      boxShadow: {
        y: "5px 8px 16px rgb(0 0 0 / 10%)",
        light: "0 2px 6px 0 rgb(0 0 0 / 5%)",
      },
    },
  },
  plugins: [],
};
