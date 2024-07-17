import { Container } from './styles'
import { Logo } from '../../components/Logo'
import { Input } from '../../components/Input'
import { Label } from '../../components/Label'
import { Form } from '../../components/Form'
import { InputWrapper } from '../../components/InputWrapper'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'

import { Link } from 'react-router-dom'
export function SignIn() {
  return(
    <Container>
      <Logo />
      <Form>
        <InputWrapper>
          <Label title="Email"/>
          <Input type="email" placeholder="Email" />
        </InputWrapper>
       
        <InputWrapper>
          <Label title="Senha"/>
          <Input type="email" placeholder="Senha" />
        </InputWrapper>
        <Button title="Entrar"/>
      </Form>
      <Link to="/signup">
        <ButtonText title="Criar uma conta"/>
      </Link>
    </Container>
  )
}