import {
  Meta,
  Story,
} from '@storybook/react/types-6-0'
import { GiTechnoHeart } from 'react-icons/gi'
import {
  GradientIcon,
  gradientIconProps,
} from './gradient_icon'
import { mock_gradient_icon } from './M.gradient_icon'

export default {
  title: 'components/icon/gradient icon',
  component: GradientIcon,
  args: mock_gradient_icon,
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
