import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
    --swiper-navigation-size: 24px;
  }

  body{
    font-family: Roboto, sans-serif;
    font-size: 1.6rem;
    background: ${({ theme }) => theme.DARK.D400};
    color: ${({ theme }) => theme.LIGHT.L300};
  }

  body, button, input, textarea {
    font-size: 1.4rem;
  }

  a{
    text-decoration: none;
  }

  button, input, textarea {
    font-family: Poppins;
  }

  button{
    cursor: pointer;
  }
`;