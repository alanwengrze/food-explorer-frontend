import { FiPlus, FiMinus } from 'react-icons/fi'
import { Container } from "./styles";
import { ButtonText } from "../ButtonText";
export function AddDishes({ dishCount, handleAdd, handleRemove, ...rest }) {
  return (
    <Container {...rest}>
      <ButtonText 
        icon={FiMinus}
        onClick={handleRemove}
      />
      <span>{dishCount}</span>
      <ButtonText 
        icon={FiPlus}
        onClick={handleAdd}
      />
    </Container>
  )
}