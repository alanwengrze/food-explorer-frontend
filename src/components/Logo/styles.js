import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;

  h1{
    font-size: 3.2rem;
  }

  img{
    height: 2.5rem;
    width: 2.5rem;
  }

  span{
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.CAKE_200};
  }
`;