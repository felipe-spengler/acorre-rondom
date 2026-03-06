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
                    DEFAULT: '#FF4D00',
                    dark: '#CC3D00',
                    light: '#FF7D4D',
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
