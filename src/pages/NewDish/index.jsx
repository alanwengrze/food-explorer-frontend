import { useState } from "react";
import { api } from "../../services/api";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { FiChevronLeft, FiUpload } from "react-icons/fi";
import { Container } from "./styles";
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Form } from "../../components/Form";
import { Label } from "../../components/Label";
import { Input } from "../../components/Input";
import { InputWrapper } from "../../components/InputWrapper";
import { DishItem } from "../../components/DishItem";
import { Textarea } from "../../components/Textarea";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";

import { useNavigate } from "react-router-dom";

export function NewDish() {
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');

  const navigate = useNavigate();

  const handleImageChange = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    setImageFile(file);

    console.log(file);
  }

  const handleAddIngredient = (e) => {
    e.preventDefault();

    if(newIngredient === "") {
      return toast.error("Por favor, adicione um ingrediente.");
    }
    setIngredients(prevState => [...prevState, newIngredient]);

    setNewIngredient('');
  }

  const handleRemoveIngredient = (deleted) => {
    setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted));
  }

  const handleAddDish = async (e) => {
    e.preventDefault();
    
    if(!ingredients) {
      return toast.error("Não é possível adicionar pratos sem ingredientes");
    }
    if(newIngredient !== ""){
      return toast.error("Você tem um ingrediente que não foi adicionado");
    }
    try {
      await api.post("/dishes", {
        name,
        description,
        price,
        category,
        ingredients
      });
    } catch (error) {
      if(error.response) {
        return toast.error(error.response.data.message);
      }
    }

    toast.success("Prato criado com sucesso!", 
      {
        position: "top-center",
        autoClose: 1500,
        pauseOnHover: false
      });

    setTimeout(()=>{
      navigate("/");
    }, 2000)
  }

  const handleBack = (e) => {
    e.preventDefault();

    navigate(-1);
  }
  return (
    <Container>
      <ToastContainer 
        theme="dark"
        autoClose={3000}
        position="top-right"
        pauseOnHover={false}
      />
      <Header />
      <main>
        <ButtonText
          onClick={handleBack}
          title="Voltar"
          icon={FiChevronLeft}
        />
        <h2>Adicionar prato</h2>
        <Form >
          <div className="input-wrapper">
          <InputWrapper>
            <Label title="Imagem do prato"/>
            <Input 
              type="file" 
              title="Selecione a imagem para alterá-la"
              icon={FiUpload}
              onChange={handleImageChange}
            />
          </InputWrapper>
          <InputWrapper>
            <Label title="Nome"/>
            <Input 
              placeholder="Ex: Salada Ceasar"
              onChange={e => setName(e.target.value)}
            />
          </InputWrapper>
          <InputWrapper>
            <Label title="Categoria"/>
            <select 
              name="Categorias" 
              id=""
              defaultValue="meal"
              onChange={e => setCategory(e.target.value)}
            >
              <option value="meal">Refeição</option>
              <option value="dessert">Sobremesa</option>
              <option value="drink">Bebidas</option>
            </select>
          </InputWrapper>
          </div>
          <div className="input-wrapper ing">
          <InputWrapper>
            <Label title="Ingredientes"/>
            <div className="ingredients">
              <DishItem
                isNew
                placeholder="Ex: Picanha"
                value={newIngredient}
                onChange={e => setNewIngredient(e.target.value)}
                onClick={handleAddIngredient}
              />
             {
              ingredients.map((ingredient, index) => (
               <DishItem 
                key={String(index)}
                value={ingredient}
                onClick={() => handleRemoveIngredient(ingredient)}
               />
              ))
             }
            </div>
          </InputWrapper>
          <div className="price">
            <InputWrapper>
              <Label title="Preço"/>
              <Input
                type="number" 
                placeholder="R$ 00,00"
                onChange={e => setPrice(e.target.value)}
              />
            </InputWrapper>
          </div>
          </div>
          <InputWrapper>
            <Label title="Descrição"/>
            <Textarea 
              placeholder="Fale sobre o prato..."
              onChange={e => setDescription(e.target.value)}
            />
          </InputWrapper>
          <div className="button-wrapper">
            <Button 
              title="Salvar alterações" 
              $secundary
              onClick={handleAddDish}
            />
          </div>
        </Form>
      </main>
      <Footer />
    </Container>
  )
}