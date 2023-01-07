import { css } from '@emotion/react'
import styled from '@emotion/styled'

export const Main = styled.button`
  ${({ theme }) => css`
    --bg: ${theme.colors.primary[4]};
    background: var(--bg);
    border: none;
    color: ${theme.colors.text[0]};
    font-size: ${theme.fonts.sizes.medium};
    padding: ${theme.spacings.xsmall}
      ${theme.spacings.medium};
    cursor: pointer;
    border-radius: ${theme.spacings.tiny};
    transition: ${theme.transitions.fast};
    display: flex;
    align-items: center;
    justify-content: center;
    &:focus {
      outline: none;
      box-shadow: 0 0 ${theme.spacings.tiny}
        var(--bg);
      filter: brightness(110%);
    }
    &:hover {
      filter: brightness(90%);
    }

    &:disabled {
      background: ${theme.colors.bg[2]};
      color: ${theme.colors.bg[2]};
      cursor: not-allowed;
      &:hover {
        filter: none;
      }
    }
    > svg {
      width: 2rem;
      height: 2rem;
      margin-left: 1rem;
    }
  `}
`
