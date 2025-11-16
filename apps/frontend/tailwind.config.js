/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'tea-green-light': '#c5efcb',
        'tea-green-dark': '#c6dec6',
        'dusty-olive-light': '#758173',
        'dusty-olive-dark': '#647a67',
        'black-primary': '#020402',
        'carbon-black': '#1f241f',
        'charcoal-brown': '#3c433b',
        'muted-teal': '#8fa38a',
        'celadon-light': '#a9c5a0',
        'celadon-dark': '#b8d2b3',
        'magical-neon-pink': '#FFB2E6',
        'magical-neon-purple-light': '#F7AEF8',
        'magical-neon-purple-medium': '#E382F9',
        'magical-neon-purple-dark': '#B388EB',
        'magical-neon-purple-vibrant': '#9A52FF',
        'magical-neon-purple-deep': '#8447FF',
        'magical-neon-blue': '#72DDF7',
      },
    },
  },
  plugins: [],
};
