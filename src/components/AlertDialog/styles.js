import styled from "styled-components";

export const Container = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: none;
  position: absolute;
  z-index: 10;
  background-color: rgba(010, 010, 010, 0.85);


  &[data-open="true"] {
    display: block;
  }

  .wrapper{
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .alert-dialog {
    animation: modalAnimation 0.5s ease-in-out;
    position: absolute;
    z-index: 20;
    background-color: ${({ theme }) => theme.DARK.D900};
    width: 35rem;
    height: 15rem;
    border-radius: 0.5rem;
    border: 1px solid ${({ theme }) => theme.LIGHT.L600};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    p{
      margin-top: 4rem;
    }

    .btn-wrapper {
      width: 100%;
      display: flex;
      justify-content: end;
      margin: 0 2rem 1rem 0;
      gap: 1rem;
      button {
        font-size: 1.4rem;
        font-weight: 400;
        border: 1px solid ${({ theme }) => theme.LIGHT.L500};
        border-radius: 0.5rem;
        background-color: ${({ theme }) => theme.DARK.D900};
        padding: 1rem 2rem;
        color: ${({ theme }) => theme.LIGHT.L100};

        transition: filter 0.4s;

        &:hover {
          filter: brightness(0.9);
        }
      }

      button:last-child{
        background-color: ${({ theme }) => theme.LIGHT.L100};
        color: ${({ theme }) => theme.DARK.D900};
        
      }
    }

  }

  
`;