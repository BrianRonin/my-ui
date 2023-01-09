import { ReactNode } from 'react'
import { ToggleTheme } from '../../components/Switch/toggle_theme/toggle_theme'
import * as S from './S.Base'

export type baseProps = {
  children: ReactNode
}

export const Base = ({ children }: baseProps) => {
  return (
    <S.Main>
      <ToggleTheme />
      {children}
    </S.Main>
  )
}
