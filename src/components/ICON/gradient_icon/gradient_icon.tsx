import { ReactNode } from 'react'
import { IconType } from 'react-icons'
import * as S from './S.gradient_icon'

export type gradientIconProps = {
  leftColor: string
  rightColor: string
  offseat: {
    right: string
    left: string
  }
  parameters: {
    x1?: string
    y1?: string
    x2?: string
    y2?: string
  }
  id: string
}

export const GradientIcon = ({
  leftColor,
  rightColor,
  offseat,
  parameters,
  id,
}: gradientIconProps) => {
  return (
    <S.Main>
      <svg width='0' height='0'>
        <linearGradient id={id} {...parameters}>
          <stop
            stopColor={leftColor}
            offset={offseat.left}
          />
          <stop
            stopColor={rightColor}
            offset={offseat.right}
          />
        </linearGradient>
      </svg>
    </S.Main>
  )
}

//<FiCheck style={{ stroke/fill: "url(#blue-gradient)" }} />
