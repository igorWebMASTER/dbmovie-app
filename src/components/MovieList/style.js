import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 992px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 2rem;

  & > div {
    display: flex;
    padding-left: 10px;
    flex-wrap: nowrap;
  }

  @media screen and (max-width: 576px) {
    & img {
      max-height: 22.5rem;
    }
  }
`;
