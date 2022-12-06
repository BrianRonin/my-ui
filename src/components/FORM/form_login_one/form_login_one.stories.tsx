import { Meta, Story } from '@storybook/react/types-6-0'
import { FormLoginOne, formLoginOneProps } from './form_login_one'
import { mock_form_login_one } from './M.form_login_one'

export default {
  title: 'components/form/form login one',
  component: FormLoginOne,
  args: mock_form_login_one
} as Meta

 export const Template: Story<formLoginOneProps > = (args) => <FormLoginOne {...args} />

Template.parameters = {
  layout: 'fullscren',
  backgrounds: {
    disable: true
  },
}
