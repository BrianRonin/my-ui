import {
  Meta,
  Story,
} from '@storybook/react/types-6-0'
import { Toggle, toggleProps } from '.'
import { mock_toggle } from './mock'

export default {
  title: 'components/Toggle/Toggle_0',
  component: Toggle,
  args: mock_toggle,
} as Meta

export const Template: Story<toggleProps> = (
  args,
) => (
  <div>
    <Toggle {...args} />
  </div>
)

Template.parameters = {
  backgrounds: {
    default: 'light',
  },
}
