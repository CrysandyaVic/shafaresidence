import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#e8eaf2',
          100: '#c5cbe0',
          200: '#9fa9cc',
          300: '#7987b8',
          400: '#5c6da8',
          500: '#3f5398',
          600: '#394c90',
          700: '#314285',
          800: '#29397b',
          900: '#1e2749', // Deep Navy
          950: '#0A1128', // Darkest Navy - Base
        },
        gold: {
          50: '#fefcf3',
          100: '#fdf7e0',
          200: '#fbedc2',
          300: '#f8e29f',
          400: '#f5d77d',
          500: '#f2cc5b',
          600: '#D4AF37', // Metallic Gold - Primary Accent
          700: '#b8962e',
          800: '#9b7d25',
          900: '#7e641b',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Poppins', 'Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-navy': 'linear-gradient(135deg, #0A1128 0%, #1e2749 50%, #394c90 100%)',
        'gradient-navy-overlay': 'linear-gradient(to bottom, rgba(10, 17, 40, 0.7), rgba(30, 39, 73, 0.3))',
      },
    },
  },
  plugins: [],
};

export default config;
