import { css, Theme } from '@emotion/react'
import styled from '@emotion/styled'

type typeSidebarBehavior = {
  sidebarVisible: boolean
  theme: Theme
}

const Default = (theme: Theme) => css``

const buttonSidebarBehavior = ({
  sidebarVisible,
  theme,
}: typeSidebarBehavior) => css`
  left: ${sidebarVisible ? '26rem' : '1rem'};
  color: ${sidebarVisible
    ? theme.colors.secondary
    : theme.colors.white};

  @media ${theme.media.lMedium} {
    left: ${sidebarVisible ? '26rem' : '-0.5rem'};
  }
`

const sidebarBehavior = ({
  sidebarVisible,
  theme,
}: typeSidebarBehavior) => css`
  left: ${sidebarVisible ? '-0rem' : '-30rem'};
  overflow-y: ${sidebarVisible
    ? 'hidden'
    : 'auto'};

  @media ${theme.media.lMedium} {
    left: ${sidebarVisible ? '0' : '-32rem'};
  }
`

export const Main = styled.div<typeSidebarBehavior>`
  ${({ theme, sidebarVisible }) => css`
    ${Default(theme)}
    z-index: 3;
    background: ${theme.colors.darkBg};
    padding: ${theme.spacings.large};
    display: flex;
    position: fixed;
    width: 100%;
    max-width: 32rem;
    height: 100vh;
    top: 0;
    left: -30rem;
    transition: all 300ms ease-in-out;
    overflow-y: auto;
    ${sidebarBehavior({ theme, sidebarVisible })}
  `}
`

export const Nav = styled.nav`
  ${({ theme }) => css`
    margin: auto;
    width: 100%;
  `}
`

export const Logo = styled.div`
  ${({ theme }) => css`
    h2 {
      display: flex;
      justify-content: center;
      margin: 0;
      margin-bottom: ${theme.spacings.huge};
      align-items: center;
      align-content: center;
      justify-items: center;
    }
  `}
`
export const bg_white = styled.div`
  ${({ theme }) => css`
    border-radius: 50%;
    width: 6rem;
    background: white;
    scale: 200%;
    margin: 0 auto;
  `}
`

export const OpenCloseSidebar = styled.a<typeSidebarBehavior>`
  ${({ theme, sidebarVisible }) => css`
    ${Default(theme)}
    z-index: 4;
    position: fixed;
    top: ${theme.spacings.medium};
    color: ${theme.colors.white};
    background-color: ${theme.colors.darkBg};
    height: 3rem;
    width: 3rem;
    left: 26rem;
    transition: all 300ms ease-in-out;

    ${buttonSidebarBehavior({
      theme,
      sidebarVisible,
    })}
  `}
`
