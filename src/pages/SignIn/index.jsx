import { useState } from "react";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";
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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn } = useAuth();

  const handleSignIn = () => {
    signIn({ email, password });
  }

  return(
    <Container>
      <Logo />
      <Form>
        <h1>Faça login</h1>
        <InputWrapper>
          <Label title="Email"/>
          <Input 
            type="email" 
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </InputWrapper>
       
        <InputWrapper>
          <Label title="Senha"/>
          <Input 
            type="password" 
            placeholder="Senha"
            onChange = {(e) => setPassword(e.target.value)}
          />
        </InputWrapper>
        <Button 
          title="Entrar"
          onClick={handleSignIn}
        />
        <ButtonText
          to="/signup"
          title="Criar uma conta"
          
        />
      </Form>
      
    </Container>
  )
}