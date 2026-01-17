import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./content/**/*.{md,mdx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary": "#27C4B7",
                "primary-dark": "#1FA69A",
                "secondary": "#0E2A47",
                "surface-light": "#ffffff",
                "surface-dark": "#151e29",
                "off-white": "#f8f9fa",
            },
            fontFamily: {
                "display": ["var(--font-playfair)", "serif"],
                "body": ["var(--font-dm-sans)", "sans-serif"],
            },
            letterSpacing: {
                'editorial': '-0.03em',
            },
            animation: {
                'ken-burns': 'kenburns 40s ease infinite alternate',
                'float': 'float 6s ease-in-out infinite',
                'spin-slow': 'spin 12s linear infinite',
                'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
            },
            keyframes: {
                kenburns: {
                    '0%': { transform: 'scale(1) translate(0, 0)' },
                    '100%': { transform: 'scale(1.2) translate(-2%, -2%)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
                    '50%': { transform: 'translateY(-20px) rotate(2deg)' },
                },
                fadeInUp: {
                    'from': { opacity: '0', transform: 'translateY(20px)' },
                    'to': { opacity: '1', transform: 'translateY(0)' },
                }
            }
        },
    },
    plugins: [],
};
export default config;
