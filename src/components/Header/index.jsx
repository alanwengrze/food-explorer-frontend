import { FiMenu } from 'react-icons/fi'
import { PiReceipt } from 'react-icons/pi'
import { Container, Menu } from './styles'
import { Logo } from '../../components/Logo'
export function Header(){
  return(
    <Container>
      <FiMenu />
      <Logo />
      <PiReceipt />
    </Container>
  )
}