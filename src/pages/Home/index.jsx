import { Container, Banner } from './styles'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import bannerImg from '../../assets/bannerImg.png'
export function Home(){
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
        </main>
      <Footer />
    </Container>
  )
}