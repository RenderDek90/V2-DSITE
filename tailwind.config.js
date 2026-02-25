/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'cyber-black': '#0a0a0b',
        'cyber-darker': '#050505',
        'neon-cyan': '#00f3ff',
        'neon-pink': '#ff003c',
        'neon-yellow': '#fcee0a',
        'neon-purple': '#b026ff',
      },
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui'],
        serif: ['ui-serif', 'Georgia'],
        mono: ['ui-monospace', 'SFMono-Regular'],
        display: ['Poppins'],
        body: ['"Open Sans"'],
      },
      backgroundImage: {
        prof: "url('./images/background-rpof.png')",
        'cyber-grid': "linear-gradient(transparent 95%, #00f3ff 100%), linear-gradient(90deg, transparent 95%, #00f3ff 100%)",
      },
      boxShadow: {
        'neon-cyan': '0 0 10px #00f3ff, 0 0 20px #00f3ff',
        'neon-pink': '0 0 10px #ff003c, 0 0 20px #ff003c',
        'neon-purple': '0 0 10px #b026ff, 0 0 20px #b026ff',
      },
      dropShadow: {
        'neon-cyan': '0 0 10px rgba(0, 243, 255, 0.8)',
        'neon-pink': '0 0 10px rgba(255, 0, 60, 0.8)',
      }
    },
  },
  plugins: [],
};
