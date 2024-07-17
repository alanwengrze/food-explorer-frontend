import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;

  padding: 10rem 3rem;

  > form {
    margin-top: 3rem;
  }

  > button:last-child{
    margin-top: 2rem;
  }
`;