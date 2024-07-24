import { useState } from "react";
import { useAuth } from "../../hooks/auth";
import { Container } from './styles'
import { Logo } from '../../components/Logo'
import { Input } from '../../components/Input'
import { Label } from '../../components/Label'
import { Form } from '../../components/Form'
import { InputWrapper } from '../../components/InputWrapper'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'

import { motion } from 'framer-motion'
import { toast } from "react-toastify";

export function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn } = useAuth();

  const handleSignIn = (e) => {
    e.preventDefault();
    signIn({ email, password });
  }

  return(
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    >
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
    </motion.div>
  )
}