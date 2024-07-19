import { Container } from './styles'
import { Logo } from '../../components/Logo'
import { Input } from '../../components/Input'
import { Label } from '../../components/Label'
import { Form } from '../../components/Form'
import { InputWrapper } from '../../components/InputWrapper'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'

import { useNavigate } from 'react-router-dom'
export function SignUp() {
  const navigate = useNavigate()

  const handleBack = () =>{
    navigate('/')
  }

  return(
    <Container>
      <Logo />
      <Form>
        <h1>Crie sua conta</h1>
      <InputWrapper>
          <Label title="Seu nome"/>
          <Input type="email" placeholder="Exemplo: Maria da Silva" />
        </InputWrapper>

        <InputWrapper>
          <Label title="Email"/>
          <Input type="email" placeholder="Exemplo: exemplo@exemplo.com.br" />
        </InputWrapper>
       
        <InputWrapper>
          <Label title="Senha"/>
          <Input type="email" placeholder="No minimo 6 caracteres" />
        </InputWrapper>
        <Button title="Criar conta"/>

        <ButtonText 
        title="Já tenho uma conta"
        onClick={handleBack}
      />
      </Form>
     
    </Container>
  )
}