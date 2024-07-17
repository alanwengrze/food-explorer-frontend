import styled from "styled-components";

export const Container = styled.div`
  grid-area: header;
  width: 100%;
  padding: 4rem 2rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.DARK.D700};

  > div{
    gap: 0;
    img {
      height: 2rem;
    }
    h1{
      font-size: 1.2rem;
    }
  }

  
   
  svg {
    font-size: 2.5rem;
  }

  @media (min-width: ${({ theme }) => theme.SCREENS.SM}) {
    > div {
        gap: 0.5rem;

        h1{
          font-size: 1.5rem;
        }
      }
  }
`;

export const Menu = styled.div`
  
`