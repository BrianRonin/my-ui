import { CgAddR } from 'react-icons/cg'
import {
  Meta,
  Story,
} from '@storybook/react/types-6-0'
import { Button, buttonProps } from './button'
import { mock_button } from './M.button'
import { S_Container } from '../../Only_Styles/Containers/container_0/S.container'

export default {
  title: 'components/Button/Button_0',
  component: Button,
  args: mock_button,
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
