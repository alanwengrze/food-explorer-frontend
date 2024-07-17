import styled from "styled-components";

export const Container = styled.div`
  grid-area: header;
  width: 100%;
  padding: 4rem 2rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.DARK.D700};

  > div{
    gap: 0;
    img {
      height: 2rem;
    }
    h1{
      font-size: 1.2rem;
    }
  }

  
   
  svg {
    font-size: 2.5rem;
  }

  @media (min-width: ${({ theme }) => theme.SCREENS.SM}) {
    .menu-icon{
      display: none;
    }
    > div {
        gap: 0.5rem;

        h1{
          font-size: 1.5rem;
        }
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

  &[data-openMenu="true"] {
    display: block;
  }
`