import { css, Theme } from '@emotion/react'
import styled from '@emotion/styled'
import { HeadingProps } from '.'

const titleSize = {
  small: (theme: Theme) => css`
    font-size: ${theme.sizes.medium};
  `,
  medium: (theme: Theme) => css`
    font-size: ${theme.sizes.large};
  `,
  big: (theme: Theme) => css`
    font-size: ${theme.sizes.xlarge};
    @media ${theme.media.medium} {
      font-size: ${theme.sizes.large};
    }
  `,
  huge: (theme: Theme) => css`
    font-size: ${theme.sizes.xhuge};
    ${mediaFont(theme)}
  `,
}

const mediaFont = (theme: Theme) => css`
  @media ${theme.media.medium} {
    font-size: ${theme.sizes.xlarge};
  }
`

export const Title = styled.h1<
  Pick<
    HeadingProps,
    'light' | 'size' | 'uppercase' | 'styles'
  >
>`
  ${({
    theme,
    light,
    size,
    uppercase,
    styles,
  }) => css`
    color: ${light
      ? theme.colors.white
      : theme.colors.primary[3]};
    text-transform: ${uppercase
      ? 'uppercase'
      : 'none'};
    ${!!size && titleSize[size](theme)};
    ${styles && styles(theme)}
  `}
`
