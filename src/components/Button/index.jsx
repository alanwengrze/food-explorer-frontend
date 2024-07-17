import { Container } from "./styles";
export function Button ({title, icon: Icon, ...rest}) {
  return(
    <Container type="button">
      {Icon && <Icon size={20}/>}
      {title}
    </Container>
  )
}