/** Tailwind config — mirrors the theme previously inlined for the CDN build.
 *  Rebuild CSS with: npx tailwindcss@3 -c tailwind.config.js -i tailwind.source.css -o tailwind.css --minify
 */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        cream: '#FAF8F5',
        warm: {
          50: '#FDFCFA',
          100: '#FAF8F5',
          200: '#F2EDE6',
          300: '#E5DDD2',
          400: '#C9BFB0',
          500: '#A69888',
          600: '#857668',
          700: '#5C5047',
          800: '#3D352E',
          900: '#1F1B17'
        },
        accent: '#D64045'
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif']
      }
    }
  }
}
