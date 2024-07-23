import { Container } from './styles'
export function Form({ children }) {
  return(
    <Container encType='multipart/form-data'>
      {children}
    </Container>
  )
}