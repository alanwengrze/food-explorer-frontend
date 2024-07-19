import styled from "styled-components";

export const Container = styled.div`
  grid-area: header;
  width: 100%;
  padding: 4rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  background-color: ${({ theme }) => theme.DARK.D700};

  .logo{
    h1{
      font-size: 2.4rem;
      
      /* don't break words */
      white-space: nowrap;
    }
    img{
      width: 2.4rem;
    }
  }

  .desktop-header{
    display: none;
  }

  svg {
    font-size: 2.8rem;
  }


  @media (min-width: ${({ theme }) => theme.SCREENS.MD}){
    padding: 4rem 10rem 2rem;

    .menu-icon{
      display: none;
    }

    .desktop-header{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;

    div:first-child{
      flex: 1;
    }

    .desktop-orders-button{
      width: auto;
      font-size: 1.2rem;
      padding: 1rem 2rem;
    }
  }

  .mobile-orders-button {
    display: none;
  }

  }
`;

export const Menu = styled.div`
  display: none;
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  z-index: 1;
  background-color: ${({ theme }) => theme.DARK.D400};
  font-weight: 300;
  .search-wrapper{
    grid-area: content;
    padding: 2rem;

    > button {
      text-align: start;
      width: 100%;
      margin-top: 2rem;
      font-size: 1.6rem;
      font-weight: 300;

      border-bottom: 1px solid ${({ theme }) => theme.DARK.D1000};
    }
  }

  > header {
    grid-area: header;

    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 4rem 2rem 2rem;
    background-color: ${({ theme }) => theme.DARK.D700};
    > span {
      font-size: 1.6rem;
    }

    > svg {
      font-size: 2rem;
    }
  }

  &[data-open-menu="true"] {
    display: grid;
    grid-template-rows: auto 1fr auto;
    grid-template-areas: 
      "header"
      "content"
      "footer";
  }
`