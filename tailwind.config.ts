import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: {
          50: '#f2f2f2',
          100: '#e6e6e6',
          200: '#cccccc',
          300: '#b3b3b3',
          400: '#999999',
          500: '#808080', // Urban Concrete
          600: '#666666',
          700: '#4d4d4d',
          800: '#333333',
          900: '#1a1a1a',
          DEFAULT: '#808080',
        },
        secondary: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#f0f0f0',
          300: '#ebebeb',
          400: '#e6e6e6',
          500: '#e1e1e1', // Mist
          600: '#cfcfcf',
          700: '#bdbdbd',
          800: '#ababab',
          900: '#999999',
          DEFAULT: '#e1e1e1',
        },
        accent: {
          50: '#f0f8ff',
          100: '#e1f1ff',
          200: '#c3e3ff',
          300: '#a5d6ff',
          400: '#87c8ff',
          500: '#69bbff', // Neon Silver
          600: '#58a2e6',
          700: '#4789cc',
          800: '#366fb3',
          900: '#255499',
          DEFAULT: '#69bbff',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'Inter', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
}

export default config
