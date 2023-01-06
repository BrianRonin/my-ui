import { renderTheme } from '../../../../styles/render-theme'
import { FormLogin } from './form_login'
import { mock_form_login } from './M.form_login'

describe('<FormLogin />', () => {
  it('should render', () => {
    renderTheme(
      <FormLogin {...mock_form_login} />,
    )
  })
})
