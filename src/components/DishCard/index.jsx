import { useState } from "react";
import { Container } from "./styles";
import { AddDishes } from "../AddDishes";
import { Button } from "../Button";
import { FiHeart, FiEdit2, FiChevronRight } from 'react-icons/fi'
import { ButtonText } from '../ButtonText'

import { useNavigate, Link } from "react-router-dom";

export function DishCard({ name, image, description, price, isAdmin = true, ...rest }) {
  const [dishesCount, setDishesCount] = useState(0)

  const navigate = useNavigate();

  const handleAddDishes = () => {
    setDishesCount(prevState => prevState + 1);
  }
  const handleRemoveDishes = () => {
    setDishesCount(prevState => prevState - 1);
  }

  const handleEditDish = () => {
    navigate(`/editdish/1`);
  }
  return (
    <Container {...rest} data-desktop={false}>
      { isAdmin ? <FiEdit2 onClick={handleEditDish}/> : <FiHeart /> }
      <img src={image} alt={name} />
      <ButtonText
        to={`/details/1`}
        title={name}
        icon={FiChevronRight}
      />
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
          <Button title="incluir"/>
        </div>
     }
    </Container>
  )
}