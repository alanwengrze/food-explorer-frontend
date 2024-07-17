import { Container, Banner } from './styles'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { DishCard } from '../../components/DishCard'
import { Category } from '../../components/Category'
import bannerImg from '../../assets/bannerImg.png'

const dish = {
  name: 'Salada Bacon',
  role: 'ADMIN',
  image: '/src/assets/bacon.png',
  price: 'R$ 29,90'
}
export function Home({title}){
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

          <Category title='Refeição'>
            <DishCard 
              name={dish.name}
              image={dish.image}
              price={dish.price}
              isAdmin
            />
            <DishCard 
              name={dish.name}
              image={dish.image}
              price={dish.price}
              isAdmin
            />
            <DishCard 
              name={dish.name}
              image={dish.image}
              price={dish.price}
              isAdmin
            />
          </Category>
        </main>
      <Footer />
    </Container>
  )
}