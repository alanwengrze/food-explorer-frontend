import { useState, useEffect } from 'react';
import { api } from '../../services/api';
import { useNavigate } from 'react-router-dom';
import { Container, Banner } from './styles';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Category } from '../../components/Category';
import bannerImg from '../../assets/bannerImg.png';

import { motion } from 'framer-motion';
import { SlideDish } from '../../components/SlideDish'
import { SwiperSlide } from 'swiper/react';
import { DishCard } from '../../components/DishCard';

export function Home(){

  const [search, setSearch] = useState('');
  const [dishes, setDishes] = useState([]);
  const [countCart, setCountCart] = useState(0);
  const [dishesCount, setDishesCount] = useState(0);
  const handleAddDishes = () => {
    setDishesCount(prevState => prevState + 1);
  }
  const handleRemoveDishes = () => {
    dishesCount > 0 &&
    setDishesCount(prevState => prevState - 1);
  }

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
      const responseName = await api.get(`/dishes?name=${search}`);
      const responseIngredients = await api.get(`/dishes?ingredients=${search}`);

      if(responseName.data.length > 0){
        setDishes(responseName.data);
      } else if(responseIngredients.data.length > 0){
        setDishes(responseIngredients.data);
      }else{
        setDishes([]);
      }
    }

    fetchDishes();
  }, [search]);


  useEffect(() => {
    async function fetchAllDishes(){
      const response = await api.get('/dishes');
      setDishes(response.data);
    }

    fetchAllDishes();
  }, []);
  return(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
    <Container>
      <Header 
        onSearch={
          (e) => setSearch(e.target.value)}
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
            <Category title='Bebidas'>
              <SlideDish>
                {
                  dishes.filter(dish => dish.category === "drink" ).map((dish, index) => (
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
          </div>
        </main>
      <Footer />
    </Container>
    </motion.div>
  )
}