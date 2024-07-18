import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  .text-wrapper {
    text-align: center;
    h2{
      font-size: 3.2rem;
      font-weight: 400;
      margin-block: 2.4rem;
    }
    p{
      font-size: 1.6rem;
      line-height: 2.5rem;
    }
  }

  img{
    height: 26rem;
    width: 26rem;
  }

`