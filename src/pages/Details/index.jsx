import { useState, useEffect } from 'react';
import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api'

import { FiChevronLeft } from 'react-icons/fi'
import { PiReceipt } from 'react-icons/pi'
import { Container, Dish } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ButtonText } from '../../components/ButtonText'
import { Ingredients } from '../../components/Ingredients'
import { AddDishes } from '../../components/AddDishes'
import { Button } from '../../components/Button'
import { useNavigate, useParams } from 'react-router-dom';

import { motion } from 'framer-motion';


export function Details({isAdmin }){
  const { user } = useAuth();
  const [dishesCount, setDishesCount] = useState(0);
  const [countCart, setCountCart] = useState(0);
  const [dish, setDish] = useState({});

  const navigate = useNavigate();
  const params = useParams();
  
  user.role === "admin" ? isAdmin = true : isAdmin = false;

  const handleAddDishes = () => {
    setDishesCount(prevState => prevState + 1);
  }
  const handleRemoveDishes = () => {
    dishesCount > 0 &&
    setDishesCount(prevState => prevState - 1);
  }

  const handleAddToCart = () => {
    setCountCart(prevState => prevState + dishesCount);
    console.log(countCart);
  }


  const handleEditDish = () => {
    navigate(`/editdish/${params.id}`);
  }
  const handleBack = () => {
    navigate(-1);
  }


  useEffect(() => {
    async function fetchDish(){
      const response = await api.get(`/dishes/${params.id}`);
      setDish(response.data);
    }

    fetchDish();
  }, []);
  return(
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    >
      <Container>
        <Header 
          total={countCart}
        />
        <main>
          <ButtonText
            onClick={handleBack}
            title="voltar"
            icon={FiChevronLeft}
          />

          {
            dish && 
            <Dish>
            <div className="img-wrapper">
            <img src={`${api.defaults.baseURL}/files/${dish.image}`} alt={dish.name} />
            </div>
            <div className="details-wrapper">
              <h2>{dish.name}</h2>
              <p>{dish.description}</p>
              <div className="ingredients">
              {
                dish.ingredients &&
                dish.ingredients.map(ingredient => (
                  <Ingredients
                    key={ingredient.id}
                    ingredients={ingredient.name}
                  />
                ))
              }
              </div>
              {
                isAdmin ?
                <Button
                  title="Editar prato"
                  className="edit-button"
                  onClick={handleEditDish}
                />
                :
                <div className="add-wrapper">
                  <AddDishes 
                    dishCount={dishesCount}
                    handleAdd={handleAddDishes}
                    handleRemove={handleRemoveDishes}
                  />
                  <Button
                    title={`pedir ∙ ${dish.price}`}
                    icon={PiReceipt}
                    onClick={handleAddToCart}
                  />
                    
                </div>
              }
            </div>
          </Dish> 
          }     
        </main>

        <Footer />
      </Container>
    /</motion.div>
  )
}