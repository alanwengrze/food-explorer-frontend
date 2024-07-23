import { useState } from "react";
import { useAuth } from "../../hooks/auth";
import { Container } from "./styles";
import { AddDishes } from "../AddDishes";
import { Button } from "../Button";
import { FiHeart, FiEdit2, FiChevronRight } from 'react-icons/fi'
import { ButtonText } from '../ButtonText'


export function DishCard({ name, image, description, price, dish, isAdmin = false, onDetails, onEdit, onCart,...rest }) {
  const [dishesCount, setDishesCount] = useState(0);

  const { user } = useAuth();

  if(user.role === "admin") {
    isAdmin = true;
  }

  const handleAddDishes = () => {
    setDishesCount(prevState => prevState + 1);
  }
  const handleRemoveDishes = () => {
    setDishesCount(prevState => prevState - 1);
  }

  return (
    <Container {...rest}>
      { isAdmin ? <FiEdit2 onClick={onEdit}/> : <FiHeart /> }
      <img src={image} alt={name} />
      
      <button onClick={onDetails} className="btn-name">
        <ButtonText
          onClick={onDetails}
          title={name}
          icon={FiChevronRight}
        />
      </button>
      <p className="description">{description}</p>
      <p>{price}</p>
     {
      !isAdmin && 
        <div className="add-wrapper">
          <AddDishes 
            dishCount={dishesCount}
            handleAdd={handleAddDishes}
            handleRemove={handleRemoveDishes}
          />
          <Button 
            title="incluir"
            onClick={onCart}
          />
        </div>
     }
    </Container>
  )
}