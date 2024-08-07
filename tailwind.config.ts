/** @type {import('tailwindcss').Config} */
import { fontFamily as _fontFamily } from 'tailwindcss/defaultTheme';

// eslint-disable-next-line no-undef
export const content = [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
]

export const theme = {
    extend: {
        fontFamily: {
            sans: ['Inter var', ..._fontFamily.sans],
        },
    },
}