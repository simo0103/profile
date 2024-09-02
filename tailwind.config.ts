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
    },
}