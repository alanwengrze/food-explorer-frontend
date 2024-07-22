import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-areas: 
    "header"
    "content"
    "footer";

  > main {
    grid-area: content;
    overflow-y: scroll;
    padding: 2rem;

    > button:first-child{
      font-size:2.8rem;
      display: flex;
      align-items: center;

      svg{
        font-size: 3rem;
      }
    }

    @media (min-width: ${({ theme }) => theme.SCREENS.MD}) {
      padding: 2rem 10rem;
    }

    > button:first-child{
      font-size:1.6rem;
      display: flex;
      align-items: center;
    }

    h2{
      font-weight: 400;
      margin-block: 3rem;
      letter-spacing: 0.2rem;
    }

    form{
      display: flex;
      flex-direction: column;
      gap: 3rem;

      .input-wrapper{
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

      select{
        height: 4.5rem;
        background-color: ${({ theme }) => theme.DARK.D900};
        color: ${({ theme }) => theme.LIGHT.L100};
        border: 0;
        padding: 1rem;
        border-radius: .5rem;
        margin-bottom: 1rem;
      }

      option{
        border-radius: 0;
      }

      .ingredients{
        width: auto;
        display: flex;
        flex-wrap: wrap;
        gap: 3rem;
        background-color: ${({ theme }) => theme.DARK.D800};
        padding: 1rem;
        border-radius: .5rem;
      }

      .button-wrapper{
        display: flex;
        gap: 2rem;

        button:first-child{
          background-color: ${({ theme }) => theme.DARK.D800};
        }
      }

      @media (min-width: ${({ theme }) => theme.SCREENS.MD}) {
        .input-wrapper{
          flex-direction: row;
          gap: 2rem;
        }

        .price{
          width: 30%;
        }

        .button-wrapper{
          justify-content: end;
          gap: 2rem;

          button{
            width: auto;
            padding: 2rem;
          }
          
        }
      }
    }
  }
`;