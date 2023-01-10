import {
  Meta,
  Story,
} from '@storybook/react/types-6-0'
import {
  DropdownSelect,
  dropdownSelectProps,
} from '.'
import { mock_dropdownSelect } from './mock'

export default {
  title: 'components/Dropdown/Dropdown_select_0',
  component: DropdownSelect,
  args: mock_dropdownSelect,
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
} as Meta

export const Template: Story<dropdownSelectProps> =
  (args) => (
    <div style={{ maxWidth: '20rem' }}>
      <DropdownSelect {...args} />
    </div>
  )

export const Tags: Story<dropdownSelectProps> = (
  args,
) => (
  <div style={{ maxWidth: '20rem' }}>
    <DropdownSelect
      {...args}
      isMulti
      isSearchable
      isCreable
    />
  </div>
)
