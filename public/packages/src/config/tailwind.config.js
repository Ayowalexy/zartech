/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "../ui/**/*.{js,ts,jsx,tsx}",
    "apps/web/**/*.{js,ts,jsx,tsx}",
    "../../apps/web/app/**/*.{js,ts,jsx,tsx}",
    "../../packages/ui/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "logo": "url('/images/pngs/v_logo.png')"
      },
      colors:{
        primary: 'var(--vinesia-bg-primary)'
      }
    },
  },
  plugins: [],
}

