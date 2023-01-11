import {
  Meta,
  Story,
} from '@storybook/react/types-6-0'
import {
  DropdownSelect,
  dropdownSelectProps,
} from '.'
import { S_Container } from '../../Container/container_0/styles'
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
  decorators: [
    (Story) => (
      <S_Container>
        <div
          style={{
            justifyContent: 'center',
            display: 'flex',
          }}
        >
          <div style={{ width: '25rem' }}>
            <Story />
          </div>
        </div>
      </S_Container>
    ),
  ],
} as Meta

export const Template: Story<dropdownSelectProps> =
  (args) => <DropdownSelect {...args} />

export const Tags: Story<dropdownSelectProps> = (
  args,
) => (
  <DropdownSelect
    {...args}
    isMulti
    isSearchable
    isCreable
  />
)
