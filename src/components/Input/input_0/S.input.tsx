import { css, Theme } from '@emotion/react'
import styled from '@emotion/styled'
import { inputProps } from './input'

const onInputError = (
  theme: Theme,
  errorMessage: string,
) => css`
  border: ${theme.spacings.xxtiny} solid
    ${theme.colors.warning[5]};
  box-shadow: 0 0 ${theme.spacings.xtiny} 0
    ${theme.colors.warning[5]};
  &:focus {
    border: ${theme.spacings.xxtiny} solid
      ${theme.colors.warning[3]};
    box-shadow: 0 0 ${theme.spacings.xtiny} 0
      ${theme.colors.warning[3]};
  }
  ${!!errorMessage &&
  css`
    &:focus
      + ${Label},
      &:not(:placeholder-shown)
      + ${Label} {
      color: ${theme.colors.warning[0]};
      background: ${theme.colors.warning[4]};
    }
  `}
`

export const Main = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.large};
    box-sizing: border-box;
  `}
`

export const inputContainer = styled.div<{
  errorMesage: string
  hasIcon: boolean
}>`
  ${({ theme, errorMesage, hasIcon }) => css`
    position: relative;
    display: flex;
    > svg {
      pointer-events: none;
      position: absolute;
      top: 50%;
      transform: translate(0, -50%);
      right: 13px;
      width: 2.5rem;
      height: 2.5rem;
      color: ${theme.colors.text[2]};
      z-index: ${theme.layers.layer1};
      ${!!errorMesage &&
      css`
        color: ${theme.colors.warning[3]};
      `}
    }

    *:focus ~ svg {
      color: ${theme.colors.primary[4]};
      ${!!errorMesage && css`
        color: ${theme.colors.warning[4]};
      `}
    }
    *:disabled ~ svg {
      color: ${theme.colors.white[4]};
    }

    ${!hasIcon && css`
      > svg {
        pointer-events: all;
        &:hover {
          z-index: ${theme.layers.layer2};
          cursor: pointer;
          color: ${theme.colors.warning[5]};
        }
      }
    `}
  `}
`

type StyledInputType = Pick<
  inputProps,
  'errorMessage' | 'as' | 'type'
>

export const Input = styled.input<StyledInputType>`
  ${({ theme, errorMessage, as }) => css`
    border: 1px solid ${theme.colors.black[10]};
    width: 100%;
    font-size: ${theme.fonts.sizes.normal};
    padding: ${theme.spacings.small} ${theme.spacings.xsmall};
    background: ${theme.colors.bg[1]};
    padding-right: 4rem;
    border-radius: ${theme.spacings.tiny};
    outline: none;
    color: ${theme.colors.text[4]};
    &::placeholder {
      visibility: hidden;
      opacity: 0;
    }

    &:focus {
      border: ${theme.spacings.xxtiny} solid
        ${theme.colors.primary[3]};
      box-shadow: 0 0 ${theme.spacings.xtiny} 0
        ${theme.colors.primary[4]};
    }

    &:focus
      + ${Label},
      &:not(:placeholder-shown)
      + ${Label},
      &:-webkit-autofill
      + ${Label} {
      top: 0;
      transform: translate(0, -50%);
      font-size: ${theme.fonts.sizes.xsmall};
      color: ${theme.colors.info[4]};
      background: ${theme.colors.info[0]};
      filter: none;
      ${as === 'textarea' &&
      css`
        transform: translate(0, -50%);
      `}
    }

    ${as === 'textarea' &&
    css`
      min-height: ${theme.frameSizes.xsmall};
      padding-right: ${theme.spacings.xsmall};
    `}

    ${!!errorMessage &&
    onInputError(theme, errorMessage)}
  `}
`

export const Label = styled.label<{
  element: string
}>`
  ${({ theme, element }) => css`
    display: inline;
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    left: ${theme.spacings.xsmall};
    font-size: ${theme.fonts.sizes.small};
    height: ${theme.fonts.sizes.small};
    transition: ${theme.transitions.fast};
    background: ${theme.colors.white[2]};
    padding: 0.5rem 1rem;
    display: flex;
    align-items: center;
    line-height: 1;
    pointer-events: none;
    z-index: ${theme.layers.layer1};
    color: ${theme.colors.text[3]};
    border-radius: ${theme.spacings.tiny};
    ${element === 'textarea' &&
    css`
      top: ${theme.spacings.large};
      transform: translate(0, -50%);
    `}
  `}
`
export const ErrorMessage = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.warning[5]};
    margin: ${theme.spacings.xxsmall} 0
      ${theme.spacings.large};
  `}
`
