import {
  Meta,
  Story,
} from '@storybook/react/types-6-0'
import {
  RefButton,
  refButtonProps,
} from './index'
import { mock_ref_button } from './mock'

export default {
  title: 'components/Button/ref button',
  component: RefButton,
  args: mock_ref_button,
} as Meta

export const Template: Story<refButtonProps> = (
  args,
) => <RefButton {...args} />

Template.parameters = {
  layout: 'fullscren',
  backgrounds: {
    disable: true,
    default: 'light',
  },
}
