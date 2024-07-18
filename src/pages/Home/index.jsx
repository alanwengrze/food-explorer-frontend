import { Container, Banner } from './styles'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { DishCard } from '../../components/DishCard'
import { Category } from '../../components/Category'
import bannerImg from '../../assets/bannerImg.png'

export const dish = {
  name: 'Salada Bacon',
  role: true,
  image: '/src/assets/bacon.png',
  price: 'R$ 29,90',
  description: 'Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.',
  ingredients: [
    "1 lata de leite",
    "1 lata de creme de leite",
    "bacon",
    "alface",
  ]
}
export function Home({isAdmin = false}){
  return(
    <Container>
      <Header />
        <main>
          <Banner>
            <div className="img-wrapper">
              <img src={bannerImg} alt="" />
            </div>
            <div className="text-wrapper">
              <h2>Sabores inigualáveis</h2>
              <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
            </div>
          </Banner>

          <div className="category-wrapper">
            <Category title='Refeições'>
              <DishCard
                name={dish.name}
                image={dish.image}
                price={dish.price}
                isAdmin={dish.role}
              />
               <DishCard
                name={dish.name}
                image={dish.image}
                price={dish.price}
                isAdmin={dish.role}
              />
              <DishCard
                name={dish.name}
                image={dish.image}
                price={dish.price}
                isAdmin={dish.role}
              />
              <DishCard
                name={dish.name}
                image={dish.image}
                price={dish.price}
                isAdmin={dish.role}
              />
            </Category>
            <Category title='Sobremesas'>
              <DishCard
                name={dish.name}
                image={dish.image}
                price={dish.price}
                isAdmin={dish.role}
              />
              <DishCard
                name={dish.name}
                image={dish.image}
                price={dish.price}
                isAdmin={dish.role}
              />
              <DishCard
                name={dish.name}
                image={dish.image}
                price={dish.price}
                isAdmin={dish.role}
              />
            </Category>
          </div>
        </main>
      <Footer />
    </Container>
  )
}