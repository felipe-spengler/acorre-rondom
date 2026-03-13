/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#10B981',
                    dark: '#059669',
                    light: '#34D399',
                },
                dark: {
                    DEFAULT: '#0A0A0A',
                    lighter: '#1A1A1A',
                }
            },
            fontFamily: {
                outfit: ['Outfit', 'sans-serif'],
            },
            backgroundImage: {
                'hero-gradient': 'linear-gradient(to bottom, rgba(10, 10, 10, 0.4), rgba(10, 10, 10, 1))',
            }
        },
    },
    plugins: [],
}
