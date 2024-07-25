import styled from "styled-components";

export const Container = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  gap: 1rem;
  border: none;
  background-color: transparent;

  svg{
    color: ${({ theme }) => theme.LIGHT.L200};
    font-size: 1.8rem;
    fill: ${({ theme, $isactive }) => $isactive ? theme.LIGHT.L200 : `transparent`};

    &:hover{
      cursor: pointer;
      fill: ${({ theme }) => theme.LIGHT.L200};
    }

  }
  input{
    z-index: -1;
    position: absolute;
    top: 0.2rem;
    left: 0.3rem;
    opacity: 0;
  }
`