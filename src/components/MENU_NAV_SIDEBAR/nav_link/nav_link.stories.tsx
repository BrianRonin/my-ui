import { useTheme } from '@emotion/react'
import {
  Meta,
  Story,
} from '@storybook/react/types-6-0'
import { NavLink, navLinkProps } from './nav_link'

export default {
  title: 'components/Menu & Nav/Nav link',
  component: NavLink,
  args: {
    text: 'children',
    link: 'google.com',
  },
  argTypes: {
    children: { type: 'string' },
  },
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
} as Meta

export const Template: Story<navLinkProps> = (
  args,
) => {
  return (
    <div
      style={{
        maxWidth: '320px',
        background: 'black',
        padding: '5rem',
      }}
    >
      <NavLink {...args} />
      <NavLink {...args} />
      <NavLink {...args} />
      <NavLink {...args} />
      <NavLink {...args} />
    </div>
  )
}
