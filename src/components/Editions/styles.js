import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  height: 35rem;

  margin: 0 auto;

  text-align: center;

  padding-top: 4rem;

  h2 {
    display: inline;
    font-size: 3rem;
    margin-bottom: 4rem;
  }

  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Cards = styled.section`
  margin: 0 auto;

  display: grid;
  grid-template-columns: auto auto;
  gap: 2rem;

  margin-bottom: 3rem;
`;

export const Card = styled.div`
  border: 2px #ff9900 solid;

  width: 32.5rem;
  height: max-content;

  img {
    width: 100%;
  }
`;

export const Infos = styled.div`
  padding: 1rem;

  h3, h4 {
    text-align: left;
  }

  h4 {
    color: #ff9900;
    font-size: .85rem;
  }

  h3 {
    margin-bottom: 1rem;
  }

  p {
    text-align: left;
    font-size: .85rem;
  }
`;

export const DepBox = styled.div`
  background-color: rgba(3, 3, 3, 0.2);
  width: 100%;
  min-height: 32.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  padding: 1rem;
`;

export const Depoimentos = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;  

  img {
    border-radius: 50%;
    border: 4px white solid;
    width: 5rem;
    height: 5rem;
  }

  h3 {
    font-size: 1rem;
  }

  h4 {
    font-size: .65rem;
  }

  p {
    text-align: center;
    padding: 1rem;
    width: 60%;
    font-size: .75rem;
  }
`;
