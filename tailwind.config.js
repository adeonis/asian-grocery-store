/** Tailwind config — field guide theme: paper, ink, moss, persimmon.
 *  The "warm" ramp is the paper-to-ink scale used throughout the markup.
 *  Rebuild CSS with: npx tailwindcss@3 -c tailwind.config.js -i tailwind.source.css -o tailwind.css --minify
 */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        cream: '#F7F1E3',
        warm: {
          50: '#FFFDF7',
          100: '#FAF5E9',
          200: '#F0E8D5',
          300: '#D8CDB2',
          400: '#B8AD93',
          500: '#8A7E63',
          600: '#6E6450',
          700: '#5A523F',
          800: '#3D3829',
          900: '#2C2A24'
        },
        accent: '#C75B39',
        moss: '#5C6B3C'
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
        display: ['-apple-system', 'BlinkMacSystemFont', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif']
      }
    }
  }
}
