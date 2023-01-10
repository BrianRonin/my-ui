import {
  forwardRef,
  LegacyRef,
  ReactNode,
} from 'react'
import * as S from './styles'

export type refButtonProps = {
  children: ReactNode
  disabled?: boolean
  onClick?: () => any
  iconOnly?: boolean
  icon?: any
  type?: string
  size?: 'normal' | 'small'
  outlined?: boolean
  custom: {
    color: string
    bg: string
  }
}

export const RefButton = forwardRef(
  function refButton(
    {
      children = '',
      disabled = false,
      onClick,
      iconOnly,
      icon,
      outlined,
      size = 'normal',
      type,
      custom,
      ...rest
    }: refButtonProps,
    ref: LegacyRef<HTMLButtonElement>,
  ) {
    return (
      <S.Main
        disabled={disabled}
        onClick={onClick}
        iconOnly={!!iconOnly}
        outlined={!!outlined}
        size={size}
        custom={custom}
        ref={ref}
        {...rest}
      >
        {children}
      </S.Main>
    )
  },
)
