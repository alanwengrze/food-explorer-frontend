import { Container } from "./styles";
export function Button ({title, icon: Icon, secundary, ...rest}) {
  return(
    <Container type="button" $secundary={secundary} {...rest}>
      {Icon && <Icon size={20}/>}
      {title}
    </Container>
  )
}