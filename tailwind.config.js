/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  corePlugins: {
    // Disable preflight — Webflow's CSS already includes its own normalize, and
    // Tailwind's preflight ("img, video { max-width: 100%; height: auto }") was
    // interfering with the absolutely-positioned flower decorations.
    preflight: false
  },
  theme: {
    extend: {
      colors: {
        background: '#f6f4ec',
        paragraphs: '#6d705e',
        heading: '#545748',
        accent: '#de967d',
        subtitle: '#a0a48e',
        preload: '#ede9db'
      },
      fontFamily: {
        display: ['Marcellus', 'serif'],
        sans: ['Montserrat', 'sans-serif'],
        script: ['"Homemade Apple"', 'cursive']
      }
    }
  },
  plugins: []
}
