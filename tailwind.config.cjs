const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      colors: {
        bgOne: '#f4fafe',
        bgTwo: '#8EAAB4',
        primary: '#1DA0EC',
        secondary: '#EC691D'
      }
    },
    screens: {
      vvvs: '320px',
      // => @media (min-width: 320px) 
      vvs: '370px',
      // => @media (min-width: 370px)
      vss: '400px',
      vsss: '450px',
      vs: '550px',
      // => @media (min-width: 550px)
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      mmd: '850px',
      // => @media (min-width: 850px) { ... }
      mdd: '920px',
      lg: '1024px',
      // => @media (min-width: 1024px) { ... }
      lgg: '1090px',
      llg: '1150px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1350px',
      // => @media (min-width: 1536px) { ... }
    },
  },

  plugins: [ require('tailwindcss'),
  require('autoprefixer'),],
}

module.exports = config
