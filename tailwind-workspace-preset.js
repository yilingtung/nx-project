const plugin = require('tailwindcss/plugin');

module.exports = {
  theme: {
    colors: {
      primary: {
        darker: '#0053ad',
        dark: '#0169db',
        DEFAULT: '#007aff',
        light: '#3797ff',
        lighter: '#e4f1ff',
      },
      netural: {
        100: '#0d0d0d',
        90: '#262626',
        80: '#383838',
        70: '#6a6a6f',
        60: '#878787',
        50: '#c4c4c4',
        40: '#e2e2e2',
        30: '#eaeaea',
        20: '#f6f6f6',
        10: '#fff',
      },
    },
    borderRadius: { DEFAULT: '4px' },
    extend: {},
  },
  variants: {
    extend: {
      borderColor: ['disabled'],
      backgroundColor: ['disabled'],
      textColor: ['disabled'],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    plugin(function ({ addVariant }) {
      addVariant('not-last', '&:not(:last-child)');
    }),
  ],
};
