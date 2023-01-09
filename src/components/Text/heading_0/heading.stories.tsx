import {
  Meta,
  Story,
} from '@storybook/react/types-6-0'
import { Heading, HeadingProps } from './heading'

export default {
  title: 'components/Text/Heading_0',
  component: Heading,
  args: {
    children: 'Testando o heading',
  },
  argTypes: {
    children: { type: 'string' },
    light: { type: 'boolean' },
  },
} as Meta

export const Dark: Story<HeadingProps> = (
  args,
) => <Heading {...args} />
export const Light: Story<HeadingProps> = (
  args,
) => <Heading {...args} />

Light.parameters = {
  backgrounds: {
    default: 'light',
  },
}
Light.args = {
  light: false,
}

Dark.parameters = {
  backgrounds: {
    default: 'dark2',
  },
}
Dark.args = {
  light: true,
}
