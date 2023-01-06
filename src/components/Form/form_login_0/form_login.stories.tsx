import {
  Meta,
  Story,
} from '@storybook/react/types-6-0'
import { S_Container } from '../../Only_Styles/Containers/container_0/S.container'
import {
  FormLogin,
  formLoginProps,
} from './form_login'
import { mock_form_login } from './M.form_login'

export default {
  title: 'components/Form/Form_login_0',
  component: FormLogin,
  args: mock_form_login,
} as Meta

export const Template: Story<formLoginProps> = (
  args,
) => (
  <S_Container>
    <FormLogin {...args} />
  </S_Container>
)

Template.parameters = {
  layout: 'fullscren',
  backgrounds: {
    disable: true,
  },
}
