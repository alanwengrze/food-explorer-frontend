import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  .logo{
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }

  span{
    font-size: 1.2rem;
    color: ${({ theme }) => theme.COLORS.CAKE_200};
  }

  @media (min-width: ${({theme}) => theme.SCREENS.MD}) {
    display: block;
    span{
      display: block;
      text-align: end;
    }
  }
`;