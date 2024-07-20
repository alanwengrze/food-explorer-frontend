import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
  color: ${({ theme }) => theme.LIGHT.L100};
  background: transparent;
  border: none;
 
  svg{
    font-size: 1.8rem;
  }
`;