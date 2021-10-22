import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  min-width: 100vw;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 3rem;
`

export const Card = styled.div`
  padding: 1rem;

  img {
    width: 50rem;
    height: auto;
    border-radius: .5rem;
  }
`