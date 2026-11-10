/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx}',
    './public/**/*.html'
  ],
  theme: {
    extend: {
      colors: {
        pastel: {
          DEFAULT: '#FFF9E9',
          alt: '#F5F7FF'
        },
        offwhite: { DEFAULT: '#FAFAF7' },
        accent: { DEFAULT: '#FFB020' }
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        geist: ['IBM Plex Sans', 'sans-serif'],
        'dm-mono': ['"JetBrains Mono"', 'monospace'],
        instrument: ['"JetBrains Mono"', 'monospace']
      },
      boxShadow: {
        soft: '0 4px 12px rgba(0,0,0,0.08)'
      }
    }
  },
  plugins: []
};
