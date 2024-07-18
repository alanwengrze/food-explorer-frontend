import styled from "styled-components";

export const Container = styled.footer`
  grid-area: footer;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
  

  background-color: ${({ theme }) => theme.DARK.D700};

  > div {
    gap: 0;
    color: ${({ theme }) => theme.LIGHT.L700};

    h1{
      font-size: 1.2rem;
    }
    img{
      height: 1.4rem;
    }
  }

  span{
    color: ${({ theme }) => theme.LIGHT.L200};
    font-size: 0.8rem;
  }

  @media (min-width: ${({ theme }) => theme.SCREENS.SM}) {
    span{
      font-size: 1.2rem;
    }
    > div h1{
      font-size: 1.8rem;
    }
  }
`;