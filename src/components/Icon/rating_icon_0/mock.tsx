import { GiTechnoHeart } from 'react-icons/gi'
import { ratingIconProps } from '.'

export const mock_rating_icon = {
  icon: GiTechnoHeart,
  max: 5,
  value: 3,
  gradient: {
    leftColor: 'gray',
    rightColor: 'red',
  },
} as ratingIconProps
