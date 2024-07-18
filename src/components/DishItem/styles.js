import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({theme, $isnew})=> $isnew? "transparent" : theme.LIGHT.L600};
  
  color: ${({theme, $isnew})=> $isnew? theme.LIGHT.L500: theme.LIGHT.L100};

  border: ${({theme, $isnew})=> $isnew ? `2px dashed ${theme.LIGHT.L500}` : "none"};

  border-radius: .5rem;

  button {
    border: 0;
    background: none;
    svg{
      color: ${({theme, $isnew})=> $isnew? theme.LIGHT.L500 : theme.LIGHT.L100};
      font-size: 1.8rem;
      margin-right: 1rem;
    }
  }

  > input{
    height: 3rem;
    padding: 1.2rem;
    color: ${({theme})=> theme.LIGHT.L100};
    background: transparent;
    border: 0;
    outline: none;

    &::placeholder{
      color: ${({theme})=> theme.LIGHT.L500};
    }
  }


`;