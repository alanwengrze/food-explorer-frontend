import { Container } from './styles'
export function Form({ children }) {
  return(
    <Container onSubmit={(e) => e.preventDefault()}>
      {children}
    </Container>
  )
}