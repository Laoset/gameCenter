/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{tsx,ts}"],
  theme: {
    extend: {
      colors: {
        nuevoWhite: "#efefef",
        nuevoOrange: "#de2b2b",
        nuevoGris: "#393737",
        casiFondo: "#1e1e1e",
        otroFondo: "#1f2026",
        colorCards: "#363740",
        nuevoBoton: "#DD936B",
        nuevoBoton2: "#ea7067",
        demas: "#c94b4b",
        nav: "#ff6f3c",
      },
      backgroundImage: {
        nuevoBg:
          "linear-gradient( 177.8deg,  rgba(255,128,0,1) 9.2%, rgba(232,211,59,1) 86.8% )",
      },
    },
  },
  plugins: [],
};
