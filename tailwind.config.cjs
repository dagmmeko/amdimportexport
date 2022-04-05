const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      colors: {
        bgOne: '#f4fafe',
        bgTwo: '#8EAAB4',
        primary: '#1DA0EC'
      }
    },
    screens: {
      vvs: '370px',
      // => @media (min-width: 370px)
      vs: '550px',
      // => @media (min-width: 550px)
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      llg: '1150px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
  },

  plugins: [],
}

module.exports = config
