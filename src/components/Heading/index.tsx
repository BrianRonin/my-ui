import { ReactNode } from 'react'
import { inject_styles } from '../../types/theme_emotion'
import { Title } from './styles'

export type HeadingProps = {
  children: ReactNode
  light?: boolean
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  size?: 'huge' | 'big' | 'medium' | 'small'
  uppercase?: boolean
  styles?: inject_styles
}

export const Heading = ({
  children = 'testando componente',
  light = false,
  as = 'h2',
  size = 'huge',
  uppercase = false,
  styles,
}: HeadingProps) => {
  return (
    <Title
      light={light}
      as={as}
      size={size}
      uppercase={uppercase}
      styles={styles}
    >
      {children}
    </Title>
  )
}
