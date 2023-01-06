import { FC, useState } from 'react'
import { inject_styles } from '../../../types/emotion'
import {
  buttonWithIconProps,
  buttonWithIconStyles,
} from '../../Button/button_with_icon_0/button_with_icon'
import { roundButtonProps } from '../../Button/round_button_0/round_button'
import * as S from './S.switch_button'

type Buttons =
  | buttonWithIconProps
  | roundButtonProps

export type switchButtonProps = {
  styles?: inject_styles
  stylesChecked?: inject_styles
  onChange?: (values: any) => any
  preSelect?: number
  choices: Array<Buttons>
  choicesWhenActive: Array<Buttons>
  values: Array<any>
  Button: FC<Buttons> | any
}

export const SwitchButton = ({
  styles,
  stylesChecked,
  choices,
  choicesWhenActive,
  values,
  preSelect,
  Button,
  onChange,
}: switchButtonProps) => {
  const [choice, setChoice] = useState(preSelect)

  return (
    <S.Main
      styles={styles}
      stylesChecked={stylesChecked}
    >
      {choices.map((props, i) => {
        const _props =
          choice === i
            ? choicesWhenActive[i]
            : props
        return (
          <div
            key={i}
            onClick={() => {
              setChoice(i)
              onChange && onChange(values[i])
            }}
          >
            <input
              type={'checkbox'}
              checked={choice === i}
              style={{ display: 'none' }}
            ></input>
            <div>
              <Button {..._props} />
            </div>
          </div>
        )
      })}
    </S.Main>
  )
}
