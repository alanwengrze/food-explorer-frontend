import styled from "styled-components";

export const Container = styled.ul`
  list-style: none;
  border-radius: 0.5rem;
  border: none;
  background-color: ${({ theme }) => theme.DARK.D1000};

  li{
    padding: 1rem;
  }
`;