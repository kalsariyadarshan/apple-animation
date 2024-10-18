/** @type {import('tailwindcss').Config} */
const lineClamp = require('@tailwindcss/line-clamp');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      Alliance: 'Alliance No.1',
    },
    extend: {
      colors: {
        base: {
          50: '#241D38',
          75: '#B6B8BC',
          100: '#0C1015',
          125: '#241D38',
          175: '#293241',
          185: '#161B22',
          195: 'linear-gradient(119deg, #A771FF 9.37%, #FC5CFF 35.25%, #FF4747 93.55%)',
          205: '#9382FF',
          200: '#1f2328',
        },
        gray: {
          100: '#a5a7a9',
          200: '#cecfd0',
        },
      },
      spacing: {
        '14px': '14px',
        '18px': '18px',
      },
      lineHeight: {
        19: '76px',
      },

      backgroundImage: {
        'button-primary':
          'linear-gradient(63deg, #45C4F9 0%, #8920FE 32.18%, #FF0BE5 70.04%, #FFC800 97.84%)',
        'text-primary':
          'linear-gradient(119deg, #A771FF 9.37%, #FC5CFF 35.25%, #FF4747 93.55%)',
        'text-light':
          'linear-gradient(180deg, #FFF 0%, rgba(255, 255, 255, 0.70) 100%)',
        'section-background': "url('/assets/images/123.gif')",
      },

      width: {
        151: '604px',
        88: '350px',
        174: '694px',
      },

      height: {
        107: '428px',
        134: '536px',
      },
    },
  },
  plugins: [lineClamp],
};
