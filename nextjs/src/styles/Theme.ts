declare module 'styled-components' {
  export interface DefaultTheme {
    // colors
    yellow: 'string',
    mediumOrchard: 'string',
    lavenderIndigo: 'string',

    // neutrals (lightest to darkest)
    white: 'string',
    lightGray: 'string',
    gray: 'string',
    doveGray: 'string',
    shipGray: 'string',
    charcoal: 'string',
    montana: 'string',
    bastille: 'string',
    darkJungleGreen: 'string',
    black: 'string',

    // fonts
    sansSerif: 'string',
    mono: 'string',

    // font weights
    fontBlack: 'string',
    fontBold: 'string',
    fontNormal: 'string',

    // margin, padding, spacing
    pageWidth: 'string',
    mobilePadding: 'string',
    formWidth: 'string',
    betweenTextBlocks: 'string',
  }
}

const Theme = {
  // colors
  yellow: '#FAFF00',
  mediumOrchard: '#bf4efa',
  lavenderIndigo: '#9452ff',

  // neutrals (lightest to darkest)
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

  // fonts
  sansSerif: 'Greycliff',
  mono: 'DankMono',

  // font weights
  fontBlack: '900',
  fontBold: 'bold',
  fontNormal: '400',

  // margin, padding, spacing
  pageWidth: '1300px',
  mobilePadding: '25px',
  formWidth: '580px',
  betweenTextBlocks: '35px',
};

export default Theme;
