import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  span{
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.CAKE_200};
  }
`;