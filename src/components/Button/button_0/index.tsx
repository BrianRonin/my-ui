import {
  ButtonHTMLAttributes,
  ReactNode,
} from 'react'
import * as S from './styles'

export type buttonProps = {
  children: ReactNode
  disabled?: boolean
  onClick?: () => void
  icon?: ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({
  children,
  disabled,
  onClick,
  icon,
}: buttonProps) => {
  return (
    <S.Main disabled={disabled} onClick={onClick}>
      {children}
      {!!icon && icon}
    </S.Main>
  )
}
