import { LogoLink } from '../logo_link/logo_link'
import * as S from './S.nav_menu_sidebar'
import {
  NavLink,
  navLinkProps,
} from '../nav_link/nav_link'
import { MouseEvent, useState } from 'react'
import { useTheme } from '@emotion/react'
import { VscChromeClose } from 'react-icons/vsc'
import { VscMenu } from 'react-icons/vsc'
import { IconContext } from 'react-icons'

export type navMenuSidebarProps = {
  links?: navLinkProps[]
  title: string
  srcLogo?: string
}

export const NavMenuSidebar = ({
  links = [],
  title,
  srcLogo,
}: navMenuSidebarProps) => {
  const [sideBarVisible, setSideBarVisible] =
    useState(false)
  const thema = useTheme()
  function handleButtonOpenCloseSidebar(
    e: MouseEvent,
  ) {
    e.preventDefault()
    setSideBarVisible((visible) => !visible)
  }

  return (
    <>
      <IconContext.Provider
        value={{
          style: {
            color: 'white',
            fontSize: '2rem',
            marginTop: '0.5rem',
            marginLeft: '0.5rem',
          },
        }}
      >
        <S.OpenCloseSidebar
          sidebarVisible={sideBarVisible}
          href='#'
          aria-label='Open or close sidebar'
          title='Open or close sidebar'
          onClick={handleButtonOpenCloseSidebar}
          theme={thema}
        >
          {sideBarVisible && <VscChromeClose />}
          {!sideBarVisible && <VscMenu />}
        </S.OpenCloseSidebar>
        <S.Main
          aria-hidden={!sideBarVisible}
          sidebarVisible={sideBarVisible}
          theme={thema}
        >
          <S.Nav>
            <S.Logo>
              <LogoLink
                link='/'
                text={title}
                srcImg={srcLogo}
              />
            </S.Logo>
            {links.map((link, i) => (
              <NavLink
                key={
                  'key-react-nav-menu-sidebar-' +
                  i
                }
                link={link.link}
                newTab={link.newTab}
                text={link.text}
                visible={sideBarVisible}
              />
            ))}
          </S.Nav>
        </S.Main>
      </IconContext.Provider>
    </>
  )
}
