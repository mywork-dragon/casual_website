/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          500: "#99F876",
        },
        text: {
          100: "#2F4857",
          300: "#21282B"
        },
      },
      fontFamily: {
        'inter': ['Inter', 'inter', 'sans-serif'],
        'lora': ['Lora', 'serif'],
      },
      boxShadow: {
        "nav": "0px 4px 5px rgba(0, 0, 0, 0.06)"
      },
      fontSize: {
        "us": "13px",
        "4.5xl": "40px",
        "xxs": "11px",
      },
      lineHeight: {
        "11.5": "45px",
        "12.5": "50px",
        "6.5": "27px",
        "4.5": "18px",
      },
      maxWidth: {
        '401': "401px",
        "3.5xl": "45rem",
        "334": "334px"
      }
    },
  },
  plugins: [],
}