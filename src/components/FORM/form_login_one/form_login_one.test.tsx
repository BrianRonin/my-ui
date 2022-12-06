import { renderTheme } from '../../../styles/render-theme'
import { FormLoginOne } from './form_login_one'
import { mock_form_login_one } from './M.form_login_one'

describe('<FormLoginOne />', () => {
  it('should render', () => {
    renderTheme(<FormLoginOne { ...mock_form_login_one } />)
  })
})
