import { Container } from "./styles";
import { FiHeart } from 'react-icons/fi'

export function FavoriteButton({ isActive, ...rest }) {
  return (
    <Container $isactive={isActive} {...rest}>
      <input type="checkbox" name="favorite" id="" />
      <FiHeart />
    </Container>
  )
}