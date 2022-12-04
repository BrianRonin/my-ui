import {
  Meta,
  Story,
} from '@storybook/react/types-6-0'
import {
  NavMenuSidebar,
  navMenuSidebarProps,
} from './nav_menu_sidebar'
import { mock_nav_menu_sidebar } from './M.nav_menu_sidebar'

export default {
  title: 'components/Menu & Nav/Sidebar',
  component: NavMenuSidebar,
  args: mock_nav_menu_sidebar,
} as Meta
export const Template: Story<navMenuSidebarProps> =
  (args) => <NavMenuSidebar {...args} />

Template.parameters = {
  backgrounds: {
    default: 'light',
  },
}
