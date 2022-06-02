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
        primaryLight: '#9a77d0',
        primary: '#09015F',
        primaryDark: '#07014c',
        secondaryLight: '#bf3387',
        secondary: '#AF0069',
        secondaryDark: '#8c0054',
        tertiaryLight: '#77c2c1',
        tertiary: '#55B3B1',
        tertiaryDark: '#448f8e',
        quaternaryLight: '#f8cd84',
        quaternary: '#F6C065',
        quaternaryDark: '#c59a51'
      }
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
    // require("@tailwindcss/typography"),
    require("daisyui")
  ],
}
