import styled from "styled-components";

export const Container = styled.header`
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

    @media (min-width: ${({ theme }) => theme.SCREENS.MD}) {
      padding: 2rem 10rem;
    }
  }

`;

export const Banner = styled.div`
  height: 13rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-image: ${({ theme }) => theme.GRADIENTS.G200};
  border-radius: 0.8rem;
  margin-block: 4rem;
  position: relative;

  .img-wrapper{
    width: 100%;
    
    img{
      position: absolute;
      object-fit: cover;
      object-position: top;
      width: 17rem;
      height: 15rem;
      top: -20px;
      left: -20px;
    }
  }
  
  .text-wrapper{
    h2{
      font-size: 1.2rem;
      margin-bottom: 1rem;
    }
    p{
      font-size: 0.8rem;
      font-weight: 300;
    }
  } 

  @media (min-width: ${({ theme }) => theme.SCREENS.SM}) {

    .img-wrapper{
      img{
        width: 20rem;
      }
    }

    .text-wrapper{
      margin-right: 2rem;

      h2{
        font-size: 1.8rem;
        line-height: 2.4rem;
      }
      p{
        font-size: 1.4rem;
      }
    }
  }

  @media (min-width: ${({ theme }) => theme.SCREENS.MD}) {

    .text-wrapper{

      h2{
        font-size: 2.4rem;
      }

      p{
        font-size: 1.6rem;
      }
    }
  }

  @media (min-width: ${({ theme }) => theme.SCREENS.LG}) {

    height: 26rem;
    margin: 12rem 0 4rem 0;

    .text-wrapper{
      
      h2{
        font-size: 3.2rem;
        font-family: Poppins;
        font-weight: 500;
        line-height: 5rem;
      }
      p{
        font-size: 1.4rem;

        white-space: nowrap;
      }
    }

    .img-wrapper{
      width: 100%;
      
    img{
        position: absolute;
        object-fit: cover;
        object-position: top;
        width: 50rem;
        height: 33rem;
        top: -70px;
        left: -60px;
      }
    }

  }

  @media (min-width: ${({ theme }) => theme.SCREENS.XL}) {

    .text-wrapper{
      margin-right: 8rem;

      h2{
        font-size: 4rem;
      }

      p{
        font-size: 1.8rem;
      }
    }
  }

`;

