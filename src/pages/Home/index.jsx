import { useState } from 'react'
import { useAuth } from '../../hooks/auth'
import { Container, Banner } from './styles'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Category } from '../../components/Category'
import bannerImg from '../../assets/bannerImg.png'

import { SlideDish } from '../../components/SlideDish'

export const dish = {
  name: 'Salada Bacon',
  role: true,
  image: '/src/assets/bacon.png',
  price: 'R$ 29,90',
  description: 'Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.',
  ingredients: [
    "1 lata de leite",
    "1 lata de creme de leite",
    "bacon",
    "alface",
  ]
}
export function Home(){
  const { user } = useAuth();
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
              <SlideDish />
            </Category>
            <Category title='Sobremesas'>
              <SlideDish />
            </Category>
          </div>
        </main>
      <Footer />
    </Container>
  )
}