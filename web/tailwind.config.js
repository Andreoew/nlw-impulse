module.exports = {
  content: ["./src/**/*.tsx"],
  // darkMode: 'class',
  theme: {
    extend: {      
      // backgroundColor:{
      //   primary: 'var(--color-bg-primary)',

      // },
      // textColor:{
      //   primary: 'var(--color-text-primary)'
      // },
      colors: {
        brand: {
          300: '#996DFF',
          500: '#8257e6',
          // bk: '#000000',
          // wt: '#ffffff'
        }
      },
      borderRadius: {
        md: '4px'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar'),
  ],
}
