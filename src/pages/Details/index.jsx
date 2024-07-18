import { FiChevronLeft } from 'react-icons/fi'
import { PiReceipt } from 'react-icons/pi'
import { Container } from "./styles";
import { Header } from "../../components/Header";
import { Dish } from '../../components/Dish';
import { Footer } from "../../components/Footer";
import { ButtonText } from '../../components/ButtonText'
import { Ingredients } from '../../components/Ingredients'
import { AddDishes } from '../../components/AddDishes'
import { Button } from '../../components/Button'
import { dish } from '../Home/index.jsx'
export function Details({isAdmin = true}){
  return(
    <Container>
      <Header />
      <main>
        <ButtonText
          title="voltar"
          icon={FiChevronLeft}
        />
          <Dish
            name={dish.name}
            image={dish.image}
            description={dish.description}
            isAdmin
          />

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
      </main>

      <Footer />
    </Container>
  )
}