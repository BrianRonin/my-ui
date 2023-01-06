import { css, Theme } from '@emotion/react'
import styled from '@emotion/styled'
import { inject_styles } from '../../types/emotion'
let _showMenu = false

const Default = (theme: Theme) => css`
  color: ${theme.colors.white};
  background: ${theme.colors.darkBg};
  box-shadow: 0 10px 25px rgba(0, 0, 0, 1);
  font-size: 1.5rem;
  text-align: left;
`

export const Main = styled.div<{
  showMenu: boolean
  styles?: inject_styles
  _styles?: inject_styles
}>`
  ${({ theme, showMenu, styles, _styles }) => css`
    ${(_showMenu = showMenu)}
    ${Default(theme)}
    position: relative;
    width: 100%;
    &:hover {
      cursor: pointer;
    }
    ${styles && styles(theme)}
    ${_styles && _styles(theme)}
  `}
`
export const Menu = styled.div<{
  styles?: inject_styles
  _styles?: inject_styles
}>`
  ${({ theme, styles, _styles }) => css`
    ${Default(theme)}
    z-index: 1;
    position: absolute;
    &::-webkit-scrollbar {
      width: 3px;
    }
    &::-webkit-scrollbar-track {
      opacity: 100%;
    }
    &::-webkit-scrollbar-thumb {
      background: ${theme.colors.primary};
      border-radius: 100vw;
    }

    @supports (scrollbar-color: red blue) {
      scrollbar-color: #0000000
        ${theme.colors.primary};
      scrollbar-width: thin;
    }
    left: 50%;
    transform: translate(-50%);
    width: 100%;
    overflow: auto;
    max-height: 20rem;
    border-radius: 0 0 1rem 1rem;
    /* ${_showMenu &&
    css`
      padding-bottom: 1.5rem;
    `} */
    ${styles && styles(theme)}
    ${_styles && _styles(theme)}
  `}
`

export const SearchContainer = styled.div<{
  styles?: inject_styles
}>`
  ${({ theme, styles }) => css`
    ${Default(theme)}
    padding-bottom: 0rem;
    width: 100%;
    box-sizing: border-box;
    margin-bottom: 0.5rem;
    padding: 5px;
    border: 1px solid ${theme.colors.primary};
    border-radius: 5px;
    input {
      ${Default(theme)}
      border: none;
      outline: none;
      width: 100%;
      border-radius: 5px;
    }
    ${styles && styles(theme)}
  `}
`

export const ContainerTags = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
  `}
`
export const Tag = styled.div<{
  isActive: boolean
}>`
  ${({ theme, isActive }) => css`
    background-color: #ddd;
    padding: 2px 4px;
    border-radius: 2px;
    display: flex;
    align-items: center;
    ${isActive &&
    css`
      background-color: red;
    `}
  `}
`
export const RemoveTag = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
  `}
`

export const InputContainer = styled.div<{
  styles?: inject_styles
}>`
  ${({ theme, styles }) => css`
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    user-select: none;
    margin-left: 1rem;
    ${styles && styles(theme)}
  `}
`
export const IconContainer = styled.div`
  ${({ theme }) => css`
    svg {
      width: 3rem;
      height: 3rem;
      color: ${theme.colors.primary};
    }
  `}
`

export const Option = styled.div<{
  isActive: boolean
  styles?: inject_styles
}>`
  ${({ theme, isActive, styles }) => css`
    padding: 10px;
    padding-bottom: 8px;
    cursor: pointer;
    ${isActive &&
    css`
      color: ${theme.colors.primary};
    `}
    &:hover {
      transition: border-left 50ms ease-in-out;
      border-left: solid 1rem
        ${theme.colors.primary};
      padding-right: 1rem;
      font-size: 1.8rem;
    }
    &:hover::before {
      content: '';
      margin: 0.5rem;
    }
    ${styles && styles(theme)}
  `}
`
export const SelectedValue = styled.div`
  ${({ theme }) => css`
    //
  `}
`
export const Tools = styled.div`
  ${({ theme }) => css`
    //
  `}
`
export const Tool = styled.div`
  ${({ theme }) => css`
    //
  `}
`
