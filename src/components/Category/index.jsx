import { Container, Carrousel } from "./styles.js";
export function Category({ title, children }) {
  return (
    <Container>
      <h2>{title}</h2>
        {children}
    </Container>
  )
}