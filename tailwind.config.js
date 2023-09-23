/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    extend: {
      colors: {
        Darkslategrey: "hsl(234, 29%, 20%)",
        Charcoalgrey: "hsl(235, 18%, 26%)",
        Grey: "hsl(231, 7%, 60%)",
        White: "hsl(0, 0%, 100%)",
        Tomato: "hsl(4, 100%, 67%)"
      },
      maxWidth: {
        small: "250px"
      },
      fontSize: {
        required: "18px"
      },
      width: {
        lower: "72%",
        mid: "33%",
        maybe: "36%",
        justfit: "75.3%",
      },
      margin: {
        please: "18.1rem",
      }

    },

  },
  plugins: [],
}

