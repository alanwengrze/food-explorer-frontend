import { Container } from './styles'
import { Logo } from '../../components/Logo'
export function Footer() {
  return (
    <Container>
      <Logo 
        isAdmin={false}
      />
      <span>Copyright © 2024. Todos os direitos reservados.</span>
    </Container>
  )
}