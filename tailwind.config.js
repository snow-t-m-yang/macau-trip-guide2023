/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
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

          warning: "transparent",

          error: "#fff",
        },
      },
    ],
  },
  plugins: [
    "@tailwindcss/typography",
    require("tailwind-scrollbar"),
    require("daisyui"),
  ],
};
