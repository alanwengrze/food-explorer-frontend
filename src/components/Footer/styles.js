import styled from "styled-components";

export const Container = styled.footer`
  grid-area: footer;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 2rem;
  

  background-color: ${({ theme }) => theme.DARK.D700};

  > div {
    gap: 0;
    color: ${({ theme }) => theme.LIGHT.L700};
    h1 {
      font-size: 1rem;
    }
    img{
      height: 1.2rem;
    }
  }

  span{
    font-size: 0.5rem;
    color: ${({ theme }) => theme.LIGHT.L200};
  }

  @media (min-width: ${({ theme }) => theme.SCREENS.SM}) {
    flex-direction: row;
  }
`;