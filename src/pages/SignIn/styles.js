import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 10rem 3rem;

  > form {
    margin-top: 3rem;

    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 3.2rem;

    h1{
      font-weight: 400;
      font-family: "Poppins";
    }
    
    /* input background */
    div{
      div{
        background-color: ${({ theme }) => theme.DARK.D900};
      }
    }
  }

  @media (min-width: ${({ theme }) => theme.SCREENS.MD}) {
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    form{
      width: 45rem;
      padding: 6.4rem;
      border-radius: 1rem;
      background-color: ${({ theme }) => theme.DARK.D700};
      
    }
  }
`;