import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  max-width: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 2rem;
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.DARK.D200};

  > svg:first-child {
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 1.8rem;

    &:hover {
      cursor: pointer;
      color: ${({ theme }) => theme.COLORS.CAKE_100};
      fill: ${({ theme }) => theme.COLORS.CAKE_100};
    }
  }

  > span{
    font-size: 1.4rem;
  }
  
  > p {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.CAKE_200};
  }
  > img {
    width: 9rem;
    height: 9rem;
  }
`