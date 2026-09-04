/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#071412',
        secondary: '#0E1F1C',
        accent: '#F5C518',
        cta: '#14B8A6',
        'brand-orange': '#E11D48',
      },
    },
  },
  plugins: [],
}
