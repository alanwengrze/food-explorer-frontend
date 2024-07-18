import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;

  span{
    font-size: 1.8rem;
  }

  button {
    transition: 0.4s;

    &:hover{
    color: ${({ theme }) => theme.COLORS.TOMATO_100};
    }
  }
`;