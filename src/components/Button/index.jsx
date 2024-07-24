import { Container } from "./styles";
import { motion } from "framer-motion";
export function Button ({title, icon: Icon, secundary, ...rest}) {
  return(
    <Container $secundary={secundary} {...rest}>
      {Icon && <Icon size={20}/>}
      {title}
    </Container>
  )
}