import {
  Meta,
  Story,
} from '@storybook/react/types-6-0'
import { S_Container } from '../../Only_Styles/Containers/container_0/S.container'
import {
  ButtonWithIcon,
  buttonWithIconProps,
} from './button_with_icon'
import { mock_button_with_icon } from './M.button_with_icon'

export default {
  title: 'components/Button/Button_with_icon_0',
  component: ButtonWithIcon,
  args: mock_button_with_icon,
  decorators: [
    (Story) => (
      <S_Container
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Story />
      </S_Container>
    ),
  ],
} as Meta

export const Template: Story<buttonWithIconProps> =
  (args) => <ButtonWithIcon {...args} />

Template.parameters = {
  backgrounds: {
    default: 'light',
  },
}
