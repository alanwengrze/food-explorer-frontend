import styled from "styled-components";
export const Container = styled.button`
  width: 100%;
  text-align: center;
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};

  height: 3rem;
  border: none;
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.LIGHT.L100};
`;