import { FiChevronLeft } from 'react-icons/fi'
import { PiReceipt } from 'react-icons/pi'
import { Container, Dish } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ButtonText } from '../../components/ButtonText'
import { Ingredients } from '../../components/Ingredients'
import { AddDishes } from '../../components/AddDishes'
import { Button } from '../../components/Button'
import { dish } from '../Home/index.jsx'
import { useNavigate } from 'react-router-dom';
export function Details({isAdmin = false }){

  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  }

  return(
    <Container>
      <Header />
      <main>
        <ButtonText
          onClick={handleBack}
          title="voltar"
          icon={FiChevronLeft}
        />

        <Dish>
          <div className="img-wrapper">
            <img src={dish.image} alt="" />
          </div>
          <div className="details-wrapper">
            <h2>{dish.name}</h2>
            <p>{dish.description}</p>

            <div className="ingredients">
            {
              dish.ingredients.map(ingredient => (
                <Ingredients
                  key={ingredient}
                  ingredients={ingredient}
                />
              ))
            }
            </div>
            {
              isAdmin ?
              <Button
                title="Editar prato"
                className="edit-button"
              />
              :
              <div className="add-wrapper">
                <AddDishes />
                  <Button
                    title={`pedir ∙ ${dish.price}`}
                    icon={PiReceipt}
                  />
              </div>
            }
          </div>
        </Dish>      
      </main>

      <Footer />
    </Container>
  )
}