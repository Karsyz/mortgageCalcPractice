import { defineConfig } from 'tailwindcss';
import aspectRatio from '@tailwindcss/aspect-ratio';
import scrollbarHide from 'tailwind-scrollbar-hide';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

export default defineConfig({
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        std: {
          DEFAULT: '#e3d3ba',
          dark: '#d4bc96',
          comp: '#4267A2',
          text: '#e5ebf5',
          red: '#ab0a0a',
          grey: '#F7F7F7',
          turq: '#A6D1CB',
        },
      },
      minHeight: {
        30: '30vh',
      },
      dropShadow: {
        standard: '2px 5px 2px grey',
      },
      animation: {
        reviewFade: 'fadeIn 1s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [aspectRatio, scrollbarHide, forms, typography],
});