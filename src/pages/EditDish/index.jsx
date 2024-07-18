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
  return (
    <Container>
      <Header />
      <main>
        <ButtonText 
          title="Voltar"
          icon={FiChevronLeft}
        />
        <h2>Editar prato</h2>
        <Form>
          <InputWrapper>
            <Label title="Imagem do prato"/>
            <Input 
              type="file" 
              title="Selecione a imagem para alterá-la"
              icon={FiUpload}
            />
          </InputWrapper>
          <InputWrapper>
            <Label title="Nome"/>
            <Input placeholder="Ex: Salada Ceasar"/>
          </InputWrapper>
          <InputWrapper>
            <Label title="Categoria"/>
            <select name="Categorias" id="">
              <option value="refeicao">Refeição</option>
              <option value="sobremesa">Sobremesa</option>
              <option value="bebida">Bebidas</option>
            </select>
          </InputWrapper>
          <InputWrapper>
            <Label title="Ingredientes"/>
            <div className="ingredients">
              <DishItem 
                placeholder="Ex: Picanha"
                isNew
              />
              <DishItem 
                placeholder="Ex: Picanha"
                isNew
              />
              <DishItem 
                value="Picanha"
              />
            </div>
          </InputWrapper>
          <InputWrapper>
            <Label title="Preço"/>
            <Input 
              type="number" 
              placeholder="R$ 00,00"
            />
          </InputWrapper>
          <InputWrapper>
            <Label title="Descrição"/>
            <Textarea />
          </InputWrapper>
          <div className="button-wrapper">
            <Button title="Excluir prato"/>
            <Button title="Salvar alterações" secundary/>
          </div>
        </Form>
      </main>
      <Footer />
    </Container>
  )
}