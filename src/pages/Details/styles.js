import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
   display: grid;
    grid-template-rows: auto 1fr auto;
    grid-template-areas: 
      "header"
      "content"
      "footer";
  
  > main {
    position: relative;
    grid-area: content;
    overflow-y: scroll;
    padding: 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.5rem;
    margin-top: 4rem;

    > button:first-child{
      position: absolute;
      top: 0;
      left: 20%;
      font-size:2.4rem;

      display: flex;
      align-items: center;
    }

    .ingredients {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
    }

  .add-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;

    button:last-child{
      width: auto;
      padding: 2rem ;

      font-size: .8rem;
    }
  }

  }
`