import { IconType } from 'react-icons'
import { ReactNode } from 'react'
import * as S from './S.rating_icon'
import {
  GradientIcon,
  gradientIconProps,
} from '../gradient_icon_0/gradient_icon'

export type ratingIconProps = {
  icon: IconType
  max: number
  value: number
  gradient?: Partial<gradientIconProps>
  id?: string
  className?: string
}

type IconsSetting = {
  icon: IconType
  isFull: boolean
  isLast: boolean
}

export const RatingIcon = ({
  icon,
  gradient,
  value,
  className,
  id,
}: ratingIconProps) => {
  const Icons: IconsSetting[] = []
  const calc = value / 2
  const isInteger = Number.isInteger(calc)
  for (let i = 0; i < 5; i++) {
    const isFull: boolean = calc >= i && calc > 0
    const isLast =
      Math.floor(calc) === i && !isInteger

    if (isLast) {
      Icons.push({
        icon,
        isFull: true,
        isLast: true,
      })
    } else {
      Icons.push({
        icon,
        isFull,
        isLast: false,
      })
    }
  }

  const DefaultGradientProps = {
    leftColor: 'red',
    rightColor: 'blue',
    offseat: {
      right: '100%',
      left: '100%',
    },
    parameters: {
      x1: '0%',
      x2: '50%',
    },
  }
  const hasId = id ? { id } : {}
  return (
    <>
      <GradientIcon
        {...(gradient || id
          ? {
              ...DefaultGradientProps,
              ...gradient,
              ...hasId,
              id: 'gradientIconRating',
            }
          : {
              ...DefaultGradientProps,
              id: 'gradientIconRating',
            })}
      />
      <S.Main
        className={className ? className : ''}
      >
        {Icons.map((Icon, i) => (
          <Icon.icon
            key={i}
            style={
              !isInteger && Icon.isLast
                ? {
                    fill: `url(#${
                      id
                        ? id
                        : 'gradientIconRating'
                    })`,
                  }
                : Icon.isFull
                ? { color: gradient?.leftColor }
                : { color: gradient?.rightColor }
            }
          />
        ))}
      </S.Main>
    </>
  )
}
