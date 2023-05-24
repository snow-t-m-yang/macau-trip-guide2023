/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  daisyui: {
    daisyui: {
      styled: true,
      themes: true,
      base: true,
      utils: true,
      logs: true,
      rtl: false,
      prefix: "daisyui",
      darkTheme: "dark",
    },
    themes: [
      {
        mytheme: {
          primary: "#107562",

          secondary: "#fee01f",

          accent: "#10b981",

          neutral: "#242838",

          "base-100": "#32373E",

          info: "#6BC9F5",

          success: "#78E8C5",

          warning: "#EC3022",

          error: "#fff",
        },
      },
    ],
  },
  plugins: ["@tailwindcss/typography", require("daisyui")],
};
