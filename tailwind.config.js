/** @type {import('tailwindcss').Config} */
import { fontFamily as _fontFamily } from 'tailwindcss/defaultTheme'

// eslint-disable-next-line no-undef
export const content = [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/ui/**/*.{js,ts,jsx,tsx,mdx}"
]
export const theme = {
    extend: {
        fontFamily: {
            sans: ['Inter var', ..._fontFamily.sans],
        },
    },
}
export const plugins = []  