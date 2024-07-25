import { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { api } from "../../services/api";
import { useParams, useNavigate } from "react-router-dom";
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
import { AlertDialog } from "../../components/AlertDialog";	

export function EditDish() {
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [openAlert, setOpenAlert] = useState(false);

  const params = useParams();
  const navigate = useNavigate();

  const openAlertDialog = (e) => {
    e.preventDefault();

    setOpenAlert(true);
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);

    console.log(imageFile);
  }

  const handleAddIngredient = (e) => {
    e.preventDefault();
    
    if(newIngredient === "") {
      return toast.error("Por favor, adicione um ingrediente.");
    }
    setIngredients(prevState => [...prevState, newIngredient]);
    console.log(ingredients);

    setNewIngredient('');
  }

  const handleRemoveIngredient = (deleted) => {
    setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted));
  }

  const handleUpdateDish = async (e) => {
    e.preventDefault();

    if(ingredients.length === 0) {
      return toast.error("Não é possível editar pratos sem ingredientes");
    }
    if(newIngredient !== ""){
      return toast.error("Não é possível editar pratos sem ingredientes");
    }

    try {
      if(imageFile){
        const formData = new FormData();
        formData.append("image", imageFile);
        await api.patch(`/dishes/${params.id}/image`, formData);
      }

      await toast.promise(
        api.put(`/dishes/${params.id}`, {
          name,
          description,
          price,
          category,
          ingredients,
          image: imageFile
        }), {
          pending: "Editando prato...",
          success: "Prato editado com sucesso!",
          error: "Ocorreu um erro ao editar o prato"
        }
      )
    } catch (error) {
      if(error.response) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Não foi possível editar o prato");
      }
    }

    setTimeout(()=>{
      navigate("/");
    }, 2000);
  }
  const handleRemoveDish = async (e) => {
    e.preventDefault();

    try {
      await api.delete(`/dishes/${params.id}`);
    } catch (error) {
      if(error.response) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Não foi possível remover o prato");
      }
    }
    toast.success("Prato removido com sucesso", {
      position: "top-center",
      autoClose: 1500,
      pauseOnHover: false
    });

    setTimeout(()=>{
      navigate("/");
    }, 2000);
  }
  useEffect(() => {
    api.get(`/dishes/${params.id}`).then(response => {
      setName(response.data.name);
      setDescription(response.data.description);
      setPrice(response.data.price);
      setCategory(response.data.category);
    })
  }, []);
  return (
    <Container>
      <ToastContainer 
        theme="dark"
        autoClose={3000}
      />
      <Header />
      <main>
        <ButtonText
          to="/"
          title="Voltar"
          icon={FiChevronLeft}
        />
        <h2>Editar prato</h2>
        <Form>
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
              value={name}
              title={name}
              onChange={e => setName(e.target.value)}
            />
          </InputWrapper>
          <InputWrapper>
            <Label title="Categoria"/>
            <select 
              name="Categorias" 
              id=""
              defaultValue={category}
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
                placeholder="Ex: Picanha"
                isNew
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
                value={price}
                title={price}
                onChange={e => setPrice(e.target.value)}
              />
            </InputWrapper>
          </div>
          </div>
          <InputWrapper>
            <Label title="Descrição"/>
            <Textarea
              value={description}
              onChange={e => setDescription(e.target.value)}
            />
          </InputWrapper>
          <div className="button-wrapper">
            <AlertDialog
              isOpen={openAlert}
              message="Tem certeza que deseja remover o prato?"
              onConfirm={handleRemoveDish}
              onCancel={() => setOpenAlert(false)}
            />
            <Button 
              title="Excluir prato"
              onClick={openAlertDialog}
            />
            <Button 
              title="Salvar alterações" 
              secundary
              onClick={handleUpdateDish}
            />
          </div>
        </Form>
      </main>
      <Footer />
    </Container>
  )
}