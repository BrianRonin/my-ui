import {
  Meta,
  Story,
} from '@storybook/react/types-6-0'
import { RatingIcon, ratingIconProps } from '.'
import { S_Container } from '../../Container/container_0/styles'
import { mock_rating_icon } from './mock'

export default {
  title: 'components/Icon/Rating_icon_0',
  component: RatingIcon,
  args: mock_rating_icon,
  decorators: [
    (Story) => (
      <S_Container>
        <Story />
      </S_Container>
    ),
  ],
} as Meta

export const Template: Story<ratingIconProps> = (
  args,
) => <RatingIcon {...args} />

Template.parameters = {
  layout: 'fullscren',
  backgrounds: {
    default: 'light',
  },
}
