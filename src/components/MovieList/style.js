import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 992px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 2rem;
  grid-gap: 10px;

  position: relative;
  transition: transform 0.2s;

  & > div {
    display: flex;
    flex-wrap: nowrap;
  }

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    box-shadow: 0 0 50px rgba(0, 0, 0, 0.5);
  }

  @media screen and (max-width: 576px) {
    & img {
      max-height: 22.5rem;
    }
  }
`;

export const ContainerOverlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  background: rgba(0, 0, 0, 0.8);
  width: 84%;
  transition: 0.5s ease;
  opacity: 0;
  bottom: 0;
  font-size: 20px;
  padding: 20px;
  text-align: center;
  color: #fff;

  &:hover {
    opacity: 1;
  }
`;
