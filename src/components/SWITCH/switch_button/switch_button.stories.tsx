import { Meta, Story } from '@storybook/react/types-6-0'
import { SwitchButton, switchButtonProps } from './switch_button'
import { mock_switch_button } from './M.switch_button'

export default {
  title: 'components/switch/switch button',
  component: SwitchButton,
  args: mock_switch_button
} as Meta

 export const Template: Story<switchButtonProps > = (args) => <SwitchButton {...args} />

Template.parameters = {
  backgrounds: {
    default: 'light'
  },
}
