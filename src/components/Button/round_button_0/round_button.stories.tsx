import {
  Meta,
  Story,
} from '@storybook/react/types-6-0'
import {
  RoundButton,
  roundButtonProps,
} from './round_button'
import { mock_round_button } from './M.round_button'

export default {
  title: 'components/Button/Round_button_0',
  component: RoundButton,
  args: mock_round_button,
} as Meta

export const Template: Story<roundButtonProps> = (
  args,
) => <RoundButton {...args} />

Template.parameters = {
  backgrounds: {
    default: 'light',
  },
}
