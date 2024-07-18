import { Container } from './styles'
export function Dish({ children, name, image, description, price, isAdmin }) {
  return(
    <Container>
      <img src={image} alt={name} />
      <div className="text-wrapper">
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    </Container>
  )
}