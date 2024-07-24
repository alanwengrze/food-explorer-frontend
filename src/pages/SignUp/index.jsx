import { useState } from 'react'
import { api } from '../../services/api'

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion'

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
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSignUp = (e) =>{
    e.preventDefault();

    api.post("/users", { name, email, password })
    .then(()=>{
      toast.success("Conta criada com sucesso", {
        position: "top-center",
        autoClose: 1500,
        pauseOnHover: false
      })
      navigate('/')
    }).catch(error => {
      if(error.response){
        toast.error(error.response.data.message)
      }else{
        toast.error("Não foi possível criar sua conta")
      }
    })
    console.log(name, email, password)
  }

  const handleBack = (e) =>{
    e.preventDefault();
    navigate(-1)
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
          <h1>Crie sua conta</h1>
        <InputWrapper>
            <Label title="Seu nome"/>
            <Input 
              type="text" 
              placeholder="Exemplo: Maria da Silva" 
              onChange={(e) => setName(e.target.value)}
            />
          </InputWrapper>

          <InputWrapper>
            <Label title="Email"/>
            <Input 
              type="email" 
              placeholder="Exemplo: exemplo@exemplo.com.br"
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputWrapper>
        
          <InputWrapper>
            <Label title="Senha"/>
            <Input 
              type="password" 
              placeholder="No minimo 6 caracteres"
              onChange = {(e) => setPassword(e.target.value)}
            />
          </InputWrapper>
          <Button 
            title="Criar conta"
            onClick={handleSignUp}
          />

          <ButtonText 
          title="Já tenho uma conta"
          onClick={handleBack}
        />
        </Form>
      
      </Container>
    </motion.div>
  )
}