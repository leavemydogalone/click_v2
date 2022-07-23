/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontSize: {
      xl: [
        "200px",
        {
          lineHeight: "200px",
        },
      ],
    },
  },
  plugins: [require("daisyui")],
};
