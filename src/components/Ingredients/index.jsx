import { Container } from "./styles";
export function Ingredients({ ingredients }) {
  return (
    <Container>
      <li>{ingredients}</li>
    </Container>
  );
}