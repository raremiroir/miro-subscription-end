import { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      sans: ['"Roobert PRO"', 'Helvetica', 'Arial', 'sans-serif'],
      body: ['"Roobert PRO"', 'Helvetica', 'Arial', 'sans-serif'],
      title: ['"Roobert PRO"', 'Helvetica', 'Arial', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
} satisfies Config;
