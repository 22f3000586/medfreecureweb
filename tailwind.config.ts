import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#0b5b50',
          light: '#147a6c',
          dark: '#07463e'
        },
        accent: '#f0b429'
      }
    }
  },
  plugins: []
} satisfies Config
