/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    fontFamily: {
      primary: "var(--font-lora)",
      fjallaOne: "var(--font-FjallaOne)",
      jetbrain: "var(--font-jetbrainsMono)",
      merriweather: "var(--font-merriweather)",
    },

    extend: {
      colors: {
        light: "#d2d2d2",
        primary: "#25283B",
        accent: {
          DEFAULT: "#fff",
          hover: "#f2f2f2",
        },
      },
      keyframes: {
        scrollLeft: {
          to: { left: "-200px" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        showContent: {
          to: {
            transform: "translateY(0)",
            filter: "blur(0)",
            opacity: 1,
          },
        },
      },
      animation: {
        scrollLeft: "scrollLeft 30s linear infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        showContent: "showContent 0.5s 0.7s ease-in-out forwards",
      },
      backgroundImage: {
        footer: "url('/assets/environment/wave-footer.svg')",
        footer2: "url('/assets/environment/wave-foter2.svg')",
        footer3: "url('/assets/environment/wave-footer3.svg')",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
