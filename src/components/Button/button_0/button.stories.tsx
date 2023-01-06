import { CgAddR } from 'react-icons/cg'
import {
  Meta,
  Story,
} from '@storybook/react/types-6-0'
import { Button, buttonProps } from './button'
import { mock_button } from './M.button'

export default {
  title: 'components/Button/Button_0',
  component: Button,
  args: mock_button,
} as Meta

export const Template: Story<buttonProps> = (
  args,
) => <Button {...args} />

export const WithIcon: Story<buttonProps> = (
  args,
) => <Button {...args} icon={<CgAddR />} />

Template.parameters = {
  layout: 'fullscren',
  background: {
    disable: true,
  },
}
