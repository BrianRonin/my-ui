import {
  hslProps,
  makeHsl,
} from '../../utils/make-hsl'

// ? para fazer uma cor boa escolha bastante tons
// ? hsl(matriz, saturação, brilho, alpha)
// ? as cores quentes estão perto de amarelo e frias de azul
// ? Cores quentes 0 <-- 250 --> 360 afastão de 250
// ? Cores frias  0 --> 250 <-- 360 aproximão de 250
// * 1) matriz +6 fria, brilho +20%
// * 2) matriz +3 fria, brilho +10%
// * 3) cor primaria
// * 4) matriz +3 quente, brilho -10%
// * 5) matriz +6 quente, brilho -20%
// ? isso que eu desenvolvi não é uma regra, é uma ideia

export const cl_primary = {
  color: 'hsl(53, 35%, 50%)',
  length: 5,
  position: 'middle',
  incMatrix: 10,
  incLight: 22,
} as hslProps

export const cl_secondary = {
  color: 'hsl(296, 30%, 44%)',
  length: 5,
  position: 'middle',
  incMatrix: 10,
  incLight: 14,
} as hslProps

export const cl_text = {
  color: 'hsl(52, 20%, 90%)',
  length: 5,
  position: 'start',
  incMatrix: 3,
  incLight: 21,
  incSaturation: 5,
} as hslProps

export const cl_bg = {
  color: '#ffffff',
  length: 5,
  position: 'start',
  incLight: 20,
  orderLight: true,
} as hslProps

export const cl_warning = {
  color: 'hsl(41, 50%, 53%)',
  length: 5,
  position: 'middle',
  incLight: 10,
  incSaturation: 15,
  incMatrix: 3,
} as hslProps

export const cl_success = {
  color: 'hsl(148, 51%, 60%)',
  length: 5,
  position: 'middle',
  incLight: 10,
  incSaturation: 15,
  incMatrix: 3,
} as hslProps

export const cl_info = {
  color: 'hsl(286, 55%, 61%)',
  length: 5,
  position: 'middle',
  incLight: 15,
  incSaturation: 15,
  incMatrix: 3,
} as hslProps

export const cl_black = {
  color: 'hsl(0, 0%, 0%)',
  length: 21,
  position: 'start',
  orderLight: true,
  incLight: 5,
} as hslProps

export const cl_white = {
  color: 'hsl(0, 0%, 100%)',
  length: 21,
  position: 'start',
  incLight: 5,
} as hslProps

export const DefaultTheme = {
  name: 'default',
  colors: {
    // 'hsl(73, 35%, 94%, 1)',
    // 'hsl(63, 35%, 72%, 1)',
    // 'hsl(53, 35%, 50%)',
    // 'hsl(43, 35%, 28%, 1)',
    // 'hsl(33, 35%, 6%, 1)',

    primary: makeHsl(cl_primary),

    // 'hsl(292, 30%, 72%, 1)',
    // 'hsl(294, 30%, 58%, 1)',
    // 'hsl(296, 30%, 44%)',
    // 'hsl(298, 30%, 30%, 1)',
    // 'hsl(300, 30%, 16%, 1)'

    secondary: makeHsl(cl_secondary),

    // 'hsl(52, 20%, 90%)',
    // 'hsl(49, 15%, 69%, 1)',
    // 'hsl(46, 10%, 48%, 1)',
    // 'hsl(43, 5%, 27%, 1)',
    // 'hsl(40, 0%, 6%, 1)'

    text: makeHsl(cl_text),

    //   'hsl(0, 0%, 100%)',
    //   'hsl(0, 0%, 70%, 1)',
    //   'hsl(0, 0%, 40%, 1)',
    //   'hsl(0, 0%, 10%, 1)',
    //   'hsl(0, 0%, 0%, 1)'

    bg: makeHsl(cl_bg),

    // 'hsl(47, 80%, 73%, 1)',
    // 'hsl(44, 65%, 63%, 1)',
    // 'hsl(41, 50%, 53%)',
    // 'hsl(38, 35%, 43%, 1)',
    // 'hsl(35, 20%, 33%, 1)'

    warning: makeHsl(cl_warning),

    // 'hsl(154, 81%, 80%, 1)',
    // 'hsl(151, 66%, 70%, 1)',
    // 'hsl(148, 51%, 60%)',
    // 'hsl(145, 36%, 50%, 1)',
    // 'hsl(142, 21%, 40%, 1)'

    success: makeHsl(cl_success),

    // 'hsl(280, 85%, 81%, 1)',
    // 'hsl(283, 70%, 71%, 1)',
    // 'hsl(286, 55%, 61%)',
    // 'hsl(289, 40%, 51%, 1)',
    // 'hsl(292, 25%, 41%, 1)'

    info: makeHsl(cl_info),

    black: makeHsl(cl_black),
    white: makeHsl(cl_white),
  },
  fonts: {
    family: {
      default:
        'Zen Dots, roboto, Open Sans, sans-serif',
      secondary: "'Montserrat', sans-serif",
    },
    sizes: {
      xxsmall: '1rem',
      xsmall: '1.2rem',
      small: '1.6rem',
      normal: '1.8rem',
      medium: '2.4rem',
      large: '3.2rem',
      xlarge: '4.0rem',
      xxlarge: '4.8rem',
      huge: '5.6rem',
      xhuge: '6.4rem',
      xxhuge: '7.2rem',
      hero: '8.0rem',
      xhero: '8.8rem',
      xxhero: '9.6rem',
    },
  },
  sizes: {
    xsmall: '8rem',
    small: '1.6rem',
    medium: '2.4rem',
    large: '3.2rem',
    xlarge: '4.0rem',
    xxlarge: '4.8rem',
    huge: '5.6rem',
    xhuge: '6.4rem',
    max: '96rem',
    content: '80rem',
  },
  media: {
    lSmallest: '(max-width: 320px)',
    lSmall: '(max-width: 576px)',
    lMedium: '(max-width: 768px)',
    lLarge: '(max-width: 992px)',
    gSmallest: '(min-width: 320px)',
    gSmall: '(min-width: 576px)',
    gMedium: '(min-width: 768px)',
    gLarge: '(min-width: 992px)',
  },
  spacings: {
    xxtiny: '0.1rem',
    xtiny: '0.2rem',
    tiny: '0.4rem',
    xxsmall: '0.8rem',
    xsmall: '1.2rem',
    small: '1.6rem',
    mediumSmall: '2.0rem',
    medium: '2.4rem',
    mediumLarge: '2.8rem',
    large: '3.2rem',
    xlarge: '3.6rem',
    xxlarge: '4.0rem',
    huge: '4.4rem',
    xhuge: '4.8rem',
    xxhuge: '5.6rem',
    hero: '6.4rem',
    xhero: '7.2rem',
    xxhero: '8.0rem',
  },
  frameSizes: {
    xxsmall: '8rem',
    xsmall: '12rem',
    small: '24rem',
    smallMedium: '32rem',
    medium: '40rem',
    largeMedium: '56rem',
    large: '64rem',
    xlarge: '80rem',
    xxlarge: '104rem',
    max: '120rem',
  },
  transitions: {
    fastest: 'all 100ms ease-in-out',
    faster: 'all 200ms ease-in-out',
    fast: 'all 300ms ease-in-out',
    normal: 'all 500ms ease-in-out',
    slow: 'all 600ms ease-in-out',
    slower: 'all 800ms ease-in-out',
    slowest: 'all 1s ease-in-out',
  },
  layers: {
    normal: 0,
    layer1: 1,
    layer2: 2,
    layer3: 3,
    layer4: 4,
    layer5: 5,
    layer6: 6,
    layer7: 7,
    layer8: 8,
    layer9: 9,
    aboveAll: 10,
  },
}
