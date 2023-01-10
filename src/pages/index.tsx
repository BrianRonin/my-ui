import { AiOutlineMail } from 'react-icons/ai'
import { Input } from '../components/Input/input_0'
import { mock_sidebar } from '../components/Sidebar/sidebar_0/sidebar/mock'
import { Sidebar } from '../components/Sidebar/sidebar_0/sidebar'
import { Base } from '../templates/Base'
import { S_Container } from '../components/Container/container_0/styles'
import { Container } from '../components/Container/container_1'
import { Comment } from '../components/Comment/comment_0'

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
        <Container>
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
        </Container>
        <Comment
          comment='ok'
          createdAt='10/10/2010'
          user={{ firstName: 'brian' }}
        ></Comment>
        <Comment
          comment='ok'
          createdAt='10/10/2010'
          user={{ firstName: 'brian' }}
        ></Comment>
        <Comment
          comment='A expressão Lorem ipsum em design gráfico e editoração é um texto padrão em'
          createdAt='10/10/2010'
          user={{ firstName: 'brian' }}
        ></Comment>
        <Comment
          comment='A expressão Lorem ipsum em design gráfico e editoração é um texto padrão em'
          createdAt='10/10/2010'
          user={{ firstName: 'brian' }}
        ></Comment>
        <Comment
          comment='A expressão Lorem ipsum em design gráfico e editoração é um texto padrão em'
          createdAt='10/10/2010'
          user={{ firstName: 'brian' }}
        ></Comment>
        <Comment
          comment='A expressão Lorem ipsum em design gráfico e editoração é um texto padrão em'
          createdAt='10/10/2010'
          user={{ firstName: 'brian' }}
        ></Comment>
        <Comment
          comment='ok'
          createdAt='10/10/2010'
          user={{ firstName: 'brian' }}
        ></Comment>
        <Comment
          comment='ok'
          createdAt='10/10/2010'
          user={{ firstName: 'brian' }}
        ></Comment>
        <Comment
          comment='ok'
          createdAt='10/10/2010'
          user={{ firstName: 'brian' }}
        ></Comment>
      </div>
    </Base>
  )
}
