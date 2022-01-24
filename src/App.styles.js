import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-flow: wrap;
  padding: 1em;
  margin: 2em 3em 0 3em;
  justify-content: space-between;
`;

export const Left = styled.section`
  width: 38%;
  @media (max-width: 767.98px) {
    width: 100%;
  }
`;
export const Right = styled.section`
  width: 58%;
  @media (max-width: 767.98px) {
    width: 100%;
  }
`;
