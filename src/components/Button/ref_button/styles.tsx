
import { css, Theme } from '@emotion/react'
import styled from '@emotion/styled'
import { transparentize, lighten, darken } from 'polished';

type Custom = {
  color: string
  bg: string
}

type mainProps = {
  disabled: boolean
  outlined: boolean
  iconOnly: boolean
  size: 'normal' | 'small'
  custom: Custom
}

const filledStyles = (theme: Theme, custom: Custom) => css`
  background: ${custom.bg};
  color: ${theme.colors.white};
  &:hover {
    background: ${darken(0.05, custom.bg)};
    color: ${theme.colors.white};
  }
  &:focus {
    background: ${darken(0.07, custom.bg)};
    box-shadow: 0 0 5px ${transparentize(0.5, custom.bg)};
    color: ${theme.colors.white};
  }
  &:active {
    background: ${lighten(0.03, custom.bg)};
    box-shadow: 0 0 8px ${transparentize(0.5, custom.bg)};
    transform: translate(1px, 0) scale(0.99, 0.99);
    color: ${theme.colors.white};
  }
`;

const outlinedStyles = (theme: Theme, custom: Custom) => css`
  background: none;
  box-shadow: inset 0 0 0 ${theme.spacings.xtiny} ${custom.bg};
  color: ${custom.color};
  &:hover {
    background: none;
    box-shadow: inset 0 0 0 ${theme.spacings.xtiny}
        ${lighten(0.1, custom.bg)},
      inset 0 0 ${theme.spacings.huge}
        ${transparentize(0.95, custom.bg)},
      0 0 ${theme.spacings.tiny} ${transparentize(0.7, custom.bg)};
    color: ${custom.bg};
  }
  &:focus {
    background: none;
    box-shadow: inset 0 0 0 ${theme.spacings.xtiny}
        ${lighten(0.15, custom.bg)},
      inset 0 0 ${theme.spacings.huge}
        ${transparentize(0.95, custom.bg)},
      0 0 ${theme.spacings.xsmall} ${transparentize(0.8, custom.bg)};
    color: ${custom.bg};
  }
  &:active {
    background: none;
    box-shadow: inset 0 0 0 ${theme.spacings.xtiny}
        ${lighten(0, custom.bg)},
      inset 0 0 ${theme.spacings.huge}
        ${transparentize(0.95, custom.bg)},
      0 0 ${theme.spacings.xsmall} ${transparentize(0.5, custom.bg)};
    color: ${lighten(0, custom.bg)};
    transform: translate(1px, 0) scale(0.99, 0.99);
    color: ${custom.bg};
  }
`;

/**
 * @param {import('styled-components').DefaultTheme} theme
 */
const buttonSizeSmall = (theme: Theme) => css`
  font-size: ${theme.fonts.sizes.xxsmall};
  padding: ${theme.spacings.tiny} ${theme.spacings.xsmall};
  > svg {
    margin-right: 0;
  }
`;



export const Main = styled.button<mainProps>`
  ${({
    theme,
    disabled,
    outlined,
    iconOnly,
    size = 'normal',
    custom
  }) => css`
    border: none;
    padding: ${theme.spacings.xxsmall}
      ${theme.spacings[iconOnly ? 'xsmall' : 'medium']};
    font-size: ${theme.fonts.sizes.medium};
    font-weight: ${theme.fonts.weight.semiBold};
    border-radius: ${theme.radius.small};
    transition: background-color 300ms ease-in-out, box-shadow 300ms ease-in-out,
      transform 50ms ease-in-out, color 300ms ease-in-out;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    text-decoration: none;
    ${!disabled && filledStyles(theme, custom)};
    ${!disabled && outlined && outlinedStyles(theme, custom)};
    &:disabled {
      background: ${theme.colors.white[3]};
      color: ${theme.colors.white[3]};
      cursor: not-allowed;
    }
    > svg {
      width: ${theme.fonts.sizes.medium};
      height: ${theme.fonts.sizes.medium};
      ${!iconOnly &&
      css`
        margin-right: ${theme.spacings.xxsmall};
        transform: translateX(${theme.spacings.xtiny});
      `}
    }
    ${size === 'small' && buttonSizeSmall(theme)};
  `}
`;
