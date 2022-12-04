import { css } from '@emotion/react'
import styled from '@emotion/styled'

export const Main = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    display: block;
    text-decoration: none;
    margin-bottom: ${theme.spacings.small};
    font-size: 1.8rem;
    border-right: 0.5rem solid ${theme.colors.bg};

    &:hover {
      color: ${theme.colors.secondary};
      border-right-color: ${theme.colors
        .secondary};
    }
  `}
`
