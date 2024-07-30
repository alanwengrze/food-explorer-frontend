import { Container } from "./styles";
import { FiHeart } from 'react-icons/fi'
import { useState } from "react";
export function FavoriteButton({ isActive=false, ...rest }) {
  const [isFav, setIsFav] = useState(false);
  const handleFavorite = () => {
    setIsFav(prevState => !prevState);
  }
  return (
    <Container $isactive={isFav} {...rest} onClick={handleFavorite}>
      <input type="checkbox" name="favorite" id="" />
      <FiHeart />
    </Container>
  )
}