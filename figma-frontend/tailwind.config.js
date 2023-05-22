module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      sans: ["Plus Jakarta Sans", "sans-serif"],
      pacifico: ["Pacifico", "sans-serif"],
    },
    colors: {
      primary: "#17530D",
      secondary: "#D1E3C5",
      bg: "#B9ECA7",
      grey: "#D9D9D9",



      purple: "#635FC7",
      purpleHover: "#A8A4FF",
      black: "#000112",
      veryDarkGrey: "#20212C",
      darkGrey: "#2B2C37",
      linesDark: "#3E3F4E",
      mediumGrey: "#828FA3",
      linesLight: "#E4EBFA",
      lightGrey: "#F4F7FD",
      white: "#fff",
      red: "#EA5555",
      redHover: "#FF9898",
    },
    // extend: {
    //   backgroundImage: {
    //     'header': "url('/src/assets/background-header.png')",
    //     'footer-texture': "url('/img/footer-texture.png')",
    //   }
    // },
    fontSize: {
      hxl: ["1.3rem", { lineHeight: "2rem" }],
      hl: ["1.125rem", { lineHeight: "2rem" }],
      hm: ["0.938rem", { lineHeight: "1.188rem" }],
      hs: ["0.75rem", { lineHeight: "0.938rem", fontWeight: 700, letterSpacing: "0.15rem" }],
      bodyl: ["0.813rem", { lineHeight: "1.438rem", fontWeight: 500 }],
      bodym: ["0.75rem", { lineHeight: "0.938rem", fontWeight: 500 }],
      '2xl': '4rem',
      '3xl': '1.953rem',
      '4xl': '2rem',
      '5xl': '7rem',
    },
    extend: {
      dropShadow: {
        'xl': '0px 10px 7px rgba(0, 0, 0, 0.3)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      }
    }
  },
  plugins: [],
};
