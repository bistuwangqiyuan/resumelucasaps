/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#E3F2FD',
                    100: '#BBDEFB',
                    200: '#90CAF9',
                    300: '#64B5F6',
                    400: '#42A5F5',
                    500: '#1976D2',
                    600: '#1565C0',
                    700: '#0D47A1',
                    800: '#0A1929',
                    900: '#050E1A'
                },
                accent: {
                    cyan: '#00E5FF',
                    purple: '#A855F7',
                    gold: '#FFB800'
                },
                dark: {
                    bg: '#0A0E1A',
                    surface: '#1A1F35',
                    border: '#2D3748'
                }
            },
            fontFamily: {
                sans: ['Inter Variable', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif']
            }
        }
    },
    plugins: []
};
