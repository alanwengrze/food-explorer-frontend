import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  padding: 3rem;
  width: 100%;
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.DARK.D200};

  > svg:first-child {
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 1.8rem;

    transition: 0.4s;

    &:hover {
      cursor: pointer;
      color: ${({ theme }) => theme.COLORS.CAKE_100};
      fill: ${({ theme }) => theme.COLORS.CAKE_100};
    }
  }

 
  > img {
    width: 9rem;
    height: 9rem;
  }

  > span{
    font-size: 1.2rem;
  }
  
  > p {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.CAKE_200};
  }

  .add-wrapper {
    width: 100%;
  }
  .add-wrapper > button:last-child {
    margin-top: 1.5rem;
    width: 100%;
    
  }

  @media (min-width: ${({ theme }) => theme.SCREENS.SM}) {

    img{
      width: 12rem;
      height: 12rem;
    }
    
    > span{
    font-size: 1.6rem;
    }
  
    > p {
      font-size: 1.8rem;
      color: ${({ theme }) => theme.COLORS.CAKE_200};
      }

  }

  @media (min-width: ${({ theme }) => theme.SCREENS.MD}) {
    img{
      width: 15rem;
      height: 15rem;
    }
  }

  @media (min-width: ${({ theme }) => theme.SCREENS.LG}) {

    img{
      width: 20rem;
      height: 20rem;
    }

    > span{
    font-size: 2.2rem;
    }
  
    > p {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.COLORS.CAKE_200};
      }

      .add-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        > button:last-child {
          margin:0;
          width: 8rem;
          height: 4rem;
        }
      }
  }
`