import { renderTheme } from '../../../styles/render-theme'
import { Input } from './input'
import { mock_input } from './M.input'

describe('<Input />', () => {
  it('should render', () => {
    renderTheme(<Input { ...mock_input } />)
  })
})
