import { useState, useEffect } from 'react'
import { api } from '../../services/api'
import { useNavigate, useParams } from 'react-router-dom'
import { Container, Banner } from './styles'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Category } from '../../components/Category'
import bannerImg from '../../assets/bannerImg.png'

import { SlideDish } from '../../components/SlideDish'
import { SwiperSlide } from 'swiper/react';
import { DishCard } from '../../components/DishCard';

export function Home(){

  const [search, setSearch] = useState('');
  const [dishes, setDishes] = useState([]);
  const [countCart, setCountCart] = useState(0);

  const navigate = useNavigate();
  const handleDish = (id) => {
    navigate(`/details/${id}`);
  }

  const handleEditDish = (id) => {
    navigate(`/editdish/${id}`);
  }

  const handleAddToCart = () => {
    setCountCart(prevState => prevState + 1);
    console.log(countCart);
  }

  useEffect(() => {
    async function fetchDishes(){
      const response = await api.get(`/dishes?name=${search}&ingredients=${search}`);
      setDishes(response.data);
    }

    fetchDishes();
  }, [search]);

  useEffect(() => {
    async function fetchDishes(){
      const response = await api.get('/dishes');
      setDishes(response.data);
    }

    fetchDishes();
  }, []);
  return(
    <Container>
      <Header 
        onSearch={(e) => setSearch(e.target.value)}
        total={countCart}
      />
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
              <SlideDish>
                {
                  dishes.filter(dish => dish.category === "meal" ).map((dish, index) => (
                    <SwiperSlide key={index}>
                      <DishCard
                        onEdit={() => handleEditDish(dish.id)}
                        onDetails={() => handleDish(dish.id)}
                        name={dish.name}
                        image={`${api.defaults.baseURL}/files/${dish.image}`}
                        description={dish.description}
                        price={`R$ ${dish.price}`}

                        onCart={handleAddToCart}
                      />
                    </SwiperSlide>
                  ))
                }
              </SlideDish>
            </Category>
            <Category title='Sobremesas'>
              <SlideDish>
                {
                  dishes.filter(dish => dish.category === "dessert" ).map((dish, index)=> (
                    <SwiperSlide key={index}>
                      <DishCard
                        name={dish.name}
                        image={`${api.defaults.baseURL}/files/${dish.image}`}
                        description={dish.description}
                        price={`R$ ${dish.price}`}

                        onCart={handleAddToCart}
                      />
                    </SwiperSlide>
                  ))
                }
              </SlideDish>
            </Category>
            <Category title='Bebidas'>
              <SlideDish>
                {
                  dishes.filter(dish => dish.category === "drink" ).map((dish, index) => (
                    <SwiperSlide key={index}>
                      <DishCard
                        onDetails={() => handleDish(dish.id)}
                        name={dish.name}
                        image={`${api.defaults.baseURL}/files/${dish.image}`}
                        description={dish.description}
                        price={`R$ ${dish.price}`}

                        onCart={handleAddToCart}
                      />
                    </SwiperSlide>
                  ))
                }
              </SlideDish>
            </Category>
          </div>
        </main>
      <Footer />
    </Container>
  )
}