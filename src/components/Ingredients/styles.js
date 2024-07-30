import styled from "styled-components";

export const Container = styled.ul`
  list-style: none;
  border-radius: 0.5rem;
  border: none;
  background-color: ${({ theme }) => theme.DARK.D1000};
  transition: 0.5s;
  &:hover{
      background-color: ${({theme}) => theme.DARK.D900};
      cursor: default;
    }

  li{
    padding: 1rem;
  }
`;