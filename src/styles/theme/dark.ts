import { DefaultTheme } from './default'

export const dark_theme = {
  ...DefaultTheme,
  name: 'dark',
  colors: {
    primary: '#d3d477',
    text: '#ffffff',
    secondary: '#dc143c',
    primaryBg: '#ffffff',
    bg: '#000000',
    secondaryBg: '#464646',
    mediumGray: '#464646',
    darkGray: '#bcbcbc',
    darkBg: '#dedede',
  },
} as typeof DefaultTheme
