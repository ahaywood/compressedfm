import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        bg: 'url("/images/bg.png")',
        horizontalDivider: 'url("/images/horizontal-divider.svg")',
        verticalDivider: 'url("/images/vertical-divider.svg")'
      },
      backgroundSize: {
        '100-auto': '100% auto'
      },
      borderWidth: {
        '1': '1px'
      },
      colors: {
        yellow: '#FAFF00',
        mediumOrchard: '#bf4efa',
        lavenderIndigo: '#9452ff',
        white: '#FFF',
        lightGray: '#d4d4d4',
        gray: '#808080',
        doveGray: '#747474',
        shipGray: '#505050',
        charcoal: '#404040',
        montana: '#393939',
        bastille: '#2e2e2e',
        darkJungleGreen: '#1c1c1c',
        black: '#000',
      },
      margin: {
        betweenTextBlocks: '35px'
      },
      maxWidth: {
        formWidth: '580px',
        narrowPageWidth: '950px',
        pageWidth: '1300px'
      },
      padding: {
        mobilePadding: '25px'
      },
      screens: {
        regular: '1300px'
      },
      width: {
        formWidth: '580px',
      },
      zIndex: {
        liveNow: '9999', // 'live now' banner
        hamburger: '9998',
        navigation: '9997',
        button: '5',
        buttonBefore: '4',
        episodeTitle: '3',
        episodeNumber: '2',
        content: '1'
      }
    },
    fontFamily: {
      sans: ['Greycliff', 'sans-serif'],
      mono: ['Dank Mono', 'monospace'],
    },
  },
  plugins: [],
} satisfies Config

