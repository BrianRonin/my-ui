import { css, Theme } from '@emotion/react'
import styled from '@emotion/styled'
import { inject_styles } from '../../../types/emotion'
let _showMenu = false

const Default = (theme: Theme) => css`
  color: ${theme.colors.text[4]};
  background: ${theme.colors.bg[1]};
  font-size: 1.5rem;
  text-align: left;
`

export const Main = styled.div<{
  showMenu: boolean
}>`
  ${({ theme, showMenu }) => css`
    ${(_showMenu = showMenu)}
    ${Default(theme)}
    position: relative;
    width: 100%;
    box-shadow: 0 3px 13px ${theme.colors.black[9]};
    &:hover {
      cursor: pointer;
    }
  `}
`
export const Menu = styled.div`
  ${({ theme }) => css`
    ${Default(theme)}
    box-shadow: 0px 13px 13px 1px ${theme.colors.black[9]};
    z-index: 1;
    position: absolute;
    &::-webkit-scrollbar {
      width: 3px;
    }
    &::-webkit-scrollbar-track {
      opacity: 100%;
    }
    &::-webkit-scrollbar-thumb {
      background: ${theme.colors.primary[2]};
      border-radius: 100vw;
    }
    @supports (scrollbar-color: red blue) {
      scrollbar-color: #0000000
        ${theme.colors.primary[2]};
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
  `}
`

export const SearchContainer = styled.div`
  ${({ theme}) => css`
    ${Default(theme)}
    padding-bottom: 0rem;
    width: 100%;
    box-sizing: border-box;
    margin-bottom: 0.5rem;
    padding: 5px;
    border: 1px solid ${theme.colors.primary[2]};
    border-radius: 5px;
    input {
      ${Default(theme)}
      border: none;
      outline: none;
      width: 100%;
      border-radius: 5px;
    }
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
    color: ${theme.colors._text[4]};
    padding: 2px 4px;
    border-radius: 2px;
    display: flex;
    align-items: center;
    ${isActive &&
    css`
      background-color: ${theme.colors._info[0]};
    `}
  `}
`
export const RemoveTag = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    margin-left: 4px;
  `}
`

export const InputContainer = styled.div`
  ${({ theme }) => css`
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    user-select: none;
    margin-left: 1rem;
  `}
`
export const IconContainer = styled.div`
  ${({ theme }) => css`
    svg {
      width: 3rem;
      height: 3rem;
    }
  `}
`

export const Option = styled.div<{
  isActive: boolean
}>`
  ${({ theme, isActive }) => css`
    padding: 10px;
    padding-bottom: 8px;
    cursor: pointer;
    ${isActive &&
    css`
      color: ${theme.colors.primary[2]};
    `}
    &:hover {
      transition: border-left 50ms ease-in-out;
      border-left: solid 1rem
        ${theme.colors.primary[2]};
      font-size: 1.8rem;
    }
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
