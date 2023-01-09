import {
  Meta,
  Story,
} from '@storybook/react/types-6-0'
import {
  RatingIcon,
  ratingIconProps,
} from './rating_icon'
import { mock_rating_icon } from './M.rating_icon'
import { S_Container } from '../../Only_Styles/Containers/container_0/S.container'

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
