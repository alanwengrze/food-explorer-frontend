import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.DARK.D900};
  border-radius: 0.4rem;

  > input {
    height: 2.5rem;
    width: 100%;
    padding: 1.5rem;
    color: ${({ theme }) => theme.LIGHT.L100};
    background: transparent;
    border: 0;
    outline: none;
    
    &::placeholder {
      color: ${({ theme }) => theme.LIGHT.L500};
    }
  }

  > svg {
    margin-left: 1rem;
    color: ${({ theme }) => theme.LIGHT.L500};
    
  }

`;