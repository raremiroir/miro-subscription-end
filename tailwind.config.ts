import { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      sans: ['"Roobert PRO"', 'Helvetica', 'Arial', 'sans-serif'],
      body: ['"Roobert PRO"', 'Helvetica', 'Arial', 'sans-serif'],
      title: ['"Roobert PRO"', 'Helvetica', 'Arial', 'sans-serif'],
    },
    extend: {
      colors: {
        surface: {
          DEFAULT: '#FBF7EF',
          50: '#FBF7EF',
          100: '#F9F4D8',
        }
      }
    },
  },
  plugins: [],
} satisfies Config;
