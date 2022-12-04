import { Meta, Story } from '@storybook/react/types-6-0'
import { RatingIcon, ratingIconProps } from './rating_icon'
import { mock_rating_icon } from './M.rating_icon'

export default {
  title: 'components/icon/rating icon',
  component: RatingIcon,
  args: mock_rating_icon
} as Meta

 export const Template: Story<ratingIconProps > = (args) => <RatingIcon {...args} />

Template.parameters = {
  layout: 'fullscren',
  backgrounds: {
    default: 'light'
  },
}
