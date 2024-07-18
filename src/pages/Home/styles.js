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
  }

  .category-wrapper{
    background-color: ${({ theme }) => theme.GRADIENTS.G100};

  }
`;

export const Banner = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.DARK.D700};
  margin-bottom: 5rem;
  .img-wrapper{
    width: 100%;
    height: 10rem;
    position: relative;
    img{
      position: absolute;
      width: 14rem;
      height: 10rem;
      top: 0;
      left: -15px;
    }
  }
  
  .text-wrapper{
    margin-right: 1rem;
    h2{
      font-size: 1.4rem;
      margin-bottom: 1rem;
    }
    p{
      font-size: 1rem;
      font-weight: 300;
    }
  } 

  @media (min-width: ${({ theme }) => theme.SCREENS.SM}) {
    justify-content: space-between;
    margin-inline: 2rem;
    .img-wrapper{
      width: auto;
      height: 22rem;
      position: relative;

      img{
        position: absolute;
        width: 28rem;
        height: 22rem;
        top: 0;
        left: -30px;
      }
    }

    .text-wrapper{
      h2{
        font-size: 2.2rem;
      }
      p{
        font-size: 1rem;
        font-weight: 300;
      }
    } 
  }

  @media (min-width: ${({ theme }) => theme.SCREENS.MD}) {
    justify-content: space-between;

    .img-wrapper{
      width: auto;
      height: 25rem;
      position: relative;

      img{
        position: absolute;
        width: 36rem;
        height:25rem;
        top: 0;
        left: -40px;
      }
    }

    .text-wrapper{
      h2{
        font-size: 3.2rem;
        
      }
      p{
        font-size: 1.4rem;
        font-weight: 300;
        line-height: 1rem;
      }
    } 
  };

  @media (min-width: ${({ theme }) => theme.SCREENS.LG}) {
    .img-wrapper{
      width: auto;
      height: 32rem;
      position: relative;

      img{
        position: absolute;
        width: 44rem;
        height:32rem;
        top: 0;
        left: -40px;
      }
    }

    .text-wrapper{
      h2{
        font-size: 3.2rem;
      }
      p{
        font-size: 1.8rem;
        font-weight: 300;
        line-height: 1rem;
      }
    } 
  }

  @media (min-width: ${({ theme }) => theme.SCREENS.XL}) {

    .img-wrapper{
      width: auto;
      height: 40rem;
      position: relative;

      img{
        position: absolute;
        width: 63rem;
        height:40rem;
        top: 0;
        left: -40px;
      }
    }

    .text-wrapper{
      h2{
        font-size: 4.2rem;
      }
      p{
        font-size: 2.4rem;
        font-weight: 300;
      }
    } 
  }

`;

