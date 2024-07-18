import styled from "styled-components";
export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  text-align: center;
  font-weight: 300;
  background-color: ${({theme, $secundary})=> $secundary ? theme.COLORS.TOMATO_400 : theme.COLORS.TOMATO_100};

  font-size: 1.2rem;

  height: 3rem;
  border: none;
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.LIGHT.L100};

  transition: filter 0.4s;

  &:hover {
    filter: brightness(0.9);
  }

  @media (min-width: ${({ theme }) => theme.SCREENS.SM}) {
    font-size: 1.6rem;
  }
`;