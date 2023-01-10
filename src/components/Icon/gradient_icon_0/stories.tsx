import {
  Meta,
  Story,
} from '@storybook/react/types-6-0'
import { GiTechnoHeart } from 'react-icons/gi'
import {
  GradientIcon,
  gradientIconProps,
} from '.'
import { S_Container } from '../../Container/container_0/styles'
import { mock_gradient_icon } from './mock'

export default {
  title: 'components/Icon/Gradient_icon_0',
  component: GradientIcon,
  args: mock_gradient_icon,
  decorators: [
    (Story) => (
      <S_Container>
        <Story />
      </S_Container>
    ),
  ],
} as Meta

export const Template: Story<gradientIconProps> =
  (args) => (
    <div style={{ margin: '4rem' }}>
      <GiTechnoHeart
        style={{ fill: 'url(#teste)' }}
      />
      <GradientIcon {...args} />
    </div>
  )

Template.parameters = {
  layout: 'fullscren',
  backgrounds: {
    default: 'light',
  },
}
