import { AiOutlineMail } from 'react-icons/ai'
import { Input } from '../components/Input/input_0'
import { S_Container } from '../components/Only_Styles/Containers/container_0/S.container'
import { mock_sidebar } from '../components/Sidebar/sidebar_0/sidebar/mock'
import { Sidebar } from '../components/Sidebar/sidebar_0/sidebar'
import { Base } from '../templates/Base'

export default function Home() {
  return (
    <Base>
      <Sidebar
        {...mock_sidebar}
        srcLogo='/avatar.jpg'
      ></Sidebar>
      <div
        style={{
          textAlign: 'center',
          marginTop: '10rem',
        }}
      >
        <S_Container>
          <Input
            errorMessage='Something went wrong, Sorry!'
            value='Something you typed'
            icon={<AiOutlineMail />}
            label='Teste label'
            name='um nome'
          ></Input>
          <Input
            value='Something you typed'
            icon={<AiOutlineMail />}
            label='ok'
            name='um nome'
          ></Input>
          <Input
            value='Something you typed'
            label='ok'
            name='um nome'
          ></Input>
        </S_Container>
      </div>
    </Base>
  )
}
