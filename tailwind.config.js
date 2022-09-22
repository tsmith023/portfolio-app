module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // colors: {
      //   success: '#0070f3',
      //   primaryLight: '#9a77d0',
      //   primary: '#6E3CBC',
      //   primaryDark: '#4d2a84',
      //   secondaryLight: '#cdecf5',
      //   secondary: '#B8E4F0',
      //   secondaryDark: '#81a0a8',
      //   tertiary: '#7267CB',
      //   quaternary: '#98BAE7'
      // }
      colors: {
        success: '#3a347f',
        // Jet black
        primaryLight: '#000401',
        primary: '#000401',
        primaryDark: '#000401',
        // Gunmetal Gray
        secondaryLight: '#4E545C',
        secondary: '#4E545C',
        secondaryDark: '#4E545C',
        // Pewter
        tertiaryLight: '#8D9797',
        tertiary: '#8D9797',
        tertiaryDark: '#8D9797',
        // White
        quaternaryLight: '#E5E8E8',
        quaternary: '#E5E8E8',
        quaternaryDark: '#E5E8E8'
      },
      fontFamily: {
        sans: "Montserrat",
        serif: "Montserrat"
      },
    },
  },
  screens: {
    xs: { max: '575px' }, // Mobile (iPhone 3 - iPhone XS Max).
    sm: { min: '576px', max: '897px' }, // Mobile (matches max: iPhone 11 Pro Max landscape @ 896px).
    md: { min: '898px', max: '1199px' }, // Tablet (matches max: iPad Pro @ 1112px).
    lg: { min: '1200px' }, // Desktop smallest.
    xl: { min: '1159px' }, // Desktop wide.
    xxl: { min: '1359px' } // Desktop widescreen.
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("daisyui")
  ],
}
