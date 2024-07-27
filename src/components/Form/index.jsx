import { Container } from './styles'
export function Form({ children, ...rest }) {
  return(
    <Container onSubmit={(e) => e.preventDefault()}>
      {children}
    </Container>
  )
}