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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2.5rem;
    margin-top: 2rem;

    > a {
      font-size:2.4rem;
      margin: 4rem 10rem 0 0;
      display: flex;
      align-items: center;

      svg{
        font-size: 2.4rem;
      }
    }

    @media (min-width: ${({ theme }) => theme.SCREENS.MD}) {
      padding: 2rem 10rem;
      align-items: flex-start;
      justify-content: right;

      > a {
        margin: 4rem 0 0 0;
      }
    }

  }
`;

export const Dish = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  .img-wrapper{
    img {
      width: 24rem;
      height: 24rem;
    }
  }

  .details-wrapper{
    width: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2.4rem;

    h2{
      font-size: 2.4rem;
      font-weight: 400;
    }

    p{
      line-height: 2.4rem;
    }
  }

  .ingredients {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
    }

  .add-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    button:last-child{
      width: auto;
      padding: 2rem ;

      font-size: .8rem;
    }
  }

  @media (min-width: ${({ theme }) => theme.SCREENS.SM}){
    .edit-button{
      width: auto;
      padding: 2rem;
    }
  }


  @media (min-width: ${({ theme }) => theme.SCREENS.MD}) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 4rem;

   .img-wrapper {

    img{
      width: 30rem;
      height: 30rem;
    }
   }

    .details-wrapper{
      align-items: flex-start;

      h2{
        font-size: 2.8rem;
        font-weight: 500;
      }

      p{
        font-size: 1.4rem;
        line-height: 2.6rem;
      }

      .add-wrapper {
        button:last-child{
          
          width: auto;
          padding: 2rem ;
          font-size: 1.6rem;
        }
      }
    }
  }

  @media (min-width: ${({ theme }) => theme.SCREENS.LG}) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 4rem;

   .img-wrapper {

    img{
      width: 39rem;
      height: 39rem;
    }
   }

    .details-wrapper{
      align-items: flex-start;

      p{
        font-size: 2rem;
        line-height: 3rem;
      }

      
      .add-wrapper {
        button {
          font-size: 1.6rem;
        }
      }
    }
  }
`;