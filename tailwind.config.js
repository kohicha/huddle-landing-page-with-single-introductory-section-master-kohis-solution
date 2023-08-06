/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    
    fontFamily:{
      PoppinsRegular:'PoppinsRegular',
      PoppinsSemiBold:'PoppinsSemiBold',
      OpenSans:'OpenSans'
    },
    extend: {
      colors:{
       Violet: 'hsl(257, 40%, 49%)',
       SoftMagenta: 'hsl(300, 69%, 71%)'
      },
      filter:{
        magents: 'filter: invert(68%) sepia(88%) saturate(574%) hue-rotate(243deg) brightness(96%) contrast(90%);'
      },

    },
  },
  plugins: [],
}

