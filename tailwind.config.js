/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        monserrat: ["Montserrat"],
      },
      fontSize: {
        text12: "12px",
        text14: "14px",
        text16: "16px",
        text18: "18px",
        text20: "20px",
        text22: "22px",
        text24: "24px",
        text28: "28px",
        text32: "32px",
        text36: "36px",
        text40: "40px",
        text44: "44px",
        text48: "48px",
        text52: "52px",
        text56: "56px",
        text60: "60px",
        text64: "64px",
        text68: "68px",
      },
      backgroundColor: {
        bgAzulFondo: "#040c44",
      },
    },
    screens: {
      xs: "320px",
      "2xs": "370px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
