import { Container } from "./styles";
import logo from "../../assets/logo.svg";
import { useAuth } from "../../hooks/auth"
export function Logo({isAdmin}) {
  const { user } = useAuth();
  user && user.role === "admin" ? isAdmin = true : isAdmin = false
  return(
    <Container>
      <div className="logo">
        <img src={logo} alt="logo"/>
        <h1>food explorer</h1>
      </div>
      {isAdmin && <span>admin</span>}
    </Container>
  )
};