import { useState, useEffect } from "react";
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



export function EditDish() {
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [imageFile, setImageFile] = useState(null);

  const params = useParams();
  const navigate = useNavigate();


  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);

    console.log(imageFile);
  }

  const handleAddIngredient = () => {
    if(newIngredient === "") {
      return alert("Por favor, adicione um ingrediente.");
    }
    setIngredients(prevState => [...prevState, newIngredient]);
    console.log(ingredients);

    setNewIngredient('');
  }

  const handleRemoveIngredient = (deleted) => {
    setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted));
  }

  const handleUpdateDish = async () => {

    if(ingredients.length === 0) {
      return alert("Não é possível editar pratos sem ingredientes");
    }
    if(newIngredient !== ""){
      return alert ("Não é possível editar pratos sem ingredientes");
    }

    try {
      if(imageFile){
        const formData = new FormData();
        formData.append("image", imageFile);
        const response = await api.patch(`/dishes/${params.id}/image`, formData);
        console.log(response);
      }

      await api.put(`/dishes/${params.id}`, {
        name,
        description,
        price,
        category,
        ingredients,
        image: imageFile
      });
    } catch (error) {
      if(error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível editar o prato");
      }
    }
    alert("Prato editado com sucesso");
    navigate(-1);
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
            <Button title="Excluir prato"/>
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