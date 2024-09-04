/** @type {import('tailwindcss').Config} */
import { fontFamily as _fontFamily } from 'tailwindcss/defaultTheme';

// eslint-disable-next-line no-undef
export const content = [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
]

export const theme = {
    fontSize: {
        xs: ['8px'],
        s: ['12px'],
        m: ['16px'],
        lg: ['24px'],
        xl: ['32px'],
        xxl: ['48px'],
        mega: ['64px']      
    },
    screens: {
        'mobile': {'max': '1023px'},
        // => @media (max-width: 1023px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
        'wide': '1980px',
        // => @media (min-width: 1980px) { ... }
        '2k': '2560',
        // => @media (min-width: 2560px) { ... }
    },
    extend: {
        fontFamily: {
            inter: ['Inter var', ..._fontFamily.sans],
            oswald: ['Oswald', "sans-serif"],
            steelfish: ['STEELFISH', "sans-serif"],
            steelfishOut: ['STEELFISH-OUT', "sans-serif"],
            steelfishBold: ['STEELFISH-BOLD', "sans-serif"],
            lato: ['LATO', "sans-serif"],
            latoBlack: ['LATO-BLACK', "sans-serif"],
        },
        aspectRatio: {
            '3/2': '3/2',
          },
    },
}