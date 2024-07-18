import { Container } from "./styles";
import logo from "../../assets/logo.svg";
export function Logo({isAdmin = true}) {
  return(
    <Container $isadmin={isAdmin}>
      <img src={logo} alt="logo"/>
      <h1>food explorer</h1>
      {isAdmin && <span>admin</span>}
    </Container>
  )
};