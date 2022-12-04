import {
  Meta,
  Story,
} from '@storybook/react/types-6-0'
import {
  DropdownSelect,
  dropdownSelectProps,
} from './dropdown_select'
import { mock_dropdownSelect } from './M.dropdown_select'

export default {
  title: 'components/dropdownSelect',
  component: DropdownSelect,
  args: mock_dropdownSelect,
} as Meta

export const Template: Story<dropdownSelectProps> =
  (args) => (
    <div style={{ maxWidth: '20rem' }}>
      <DropdownSelect {...args} />
    </div>
  )

Template.parameters = {
  backgrounds: {
    default: 'light',
  },
}
