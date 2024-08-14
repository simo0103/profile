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
        m: ['16PX'],
        lg: ['24px'],
        xl: ['32px'],
        xxl: ['48px'],
        mega: ['300px']      
    },
    extend: {
        fontFamily: {
            inter: ['Inter var', ..._fontFamily.sans],
            oswald: ['Oswald', "sans-serif"]
        },
    },
}