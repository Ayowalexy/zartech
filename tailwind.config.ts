import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './public/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        logo: "url('/images/pngs/v_logo.png')"
      },
      colors: {
        primary: 'var(--vinesia-bg-primary)',
        text: {
          primary: 'var(--vinesia-text-secondary)'
        }
      },
      fontFamily: {
        sans: ['var(--font-poppins)'],
        mons: ['var(--font-montserrat)'],
        lato: ['var(--font-lato)']
      },
    },
  },
  plugins: [],
}
export default config
