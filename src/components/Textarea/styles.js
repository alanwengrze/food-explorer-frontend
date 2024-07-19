import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 18rem;
  background-color: ${({ theme }) => theme.DARK.D800};
  border: none;
  border-radius: .5rem;
  padding: 1.6rem;
  resize: none;
  outline: none;

  color: ${({ theme }) => theme.LIGHT.L100};
`;