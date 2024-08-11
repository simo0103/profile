/** @type {import('tailwindcss').Config} */
import { fontFamily as _fontFamily } from 'tailwindcss/defaultTheme';

// eslint-disable-next-line no-undef
export const content = [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
]

export const theme = {
    fontSize: {
        xxs: ['8px'],
        xs: ['12px']
    },
    extend: {
        fontFamily: {
            inter: ['Inter var', ..._fontFamily.sans],
            oswald: ['Oswald', "sans-serif"]
        },
    },
}