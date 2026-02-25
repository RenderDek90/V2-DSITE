/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        // We'll keep semantic names but redefine them for glassmorphism
        'cyber-black': 'var(--bg-primary)',
        'cyber-darker': 'var(--bg-secondary)',
        'neon-cyan': 'var(--accent-primary)',
        'neon-pink': 'var(--accent-secondary)',
        'neon-yellow': '#fcee0a',
        'neon-purple': 'var(--accent-tertiary)',
        'glass-border': 'var(--glass-border)',
        'glass-bg': 'var(--glass-bg)',
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
        // Abstract gradient background instead of grid
        'glass-gradient': 'var(--bg-gradient)',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
        'glass-hover': '0 8px 32px 0 rgba(31, 38, 135, 0.3)',
      },
    },
  },
  plugins: [],
};
