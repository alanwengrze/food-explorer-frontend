import { useState } from "react";
import { Container } from "./styles";
import { AddDishes } from "../AddDishes";
import { Button } from "../Button";
import { FiHeart, FiEdit2 } from 'react-icons/fi'

export function DishCard({ name, image, description, price, isAdmin = false, ...rest }) {
  const [dishesCount, setDishesCount] = useState(0)

  const handleAddDishes = () => {
    setDishesCount(prevState => prevState + 1);
  }
  const handleRemoveDishes = () => {
    setDishesCount(prevState => prevState - 1);
  }
  return (
    <Container {...rest} data-desktop={false}>
      { isAdmin ? <FiEdit2 /> : <FiHeart /> }
      <img src={image} alt={name} />
      <span>{name}</span>
      <p>{price}</p>
     {
      !isAdmin && 
        <div className="add-wrapper">
          <AddDishes 
            dishCount={dishesCount}
            handleAdd={handleAddDishes}
            handleRemove={handleRemoveDishes}
          />
          <Button title="incluir"/>
        </div>
     }
    </Container>
  )
}