import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  height: 35rem;

  margin: 0 auto;
  margin-top: 3rem;

  background-color: rgba(3, 3, 3, 0.2);

  text-align: center; 

  h2 {
    display: inline;
    font-size: 3rem;
  }

  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;
`;

export const Box = styled.div`
  width: 80%;
  height: 80%;

  padding: 1rem;

  background-color: white;

  display: flex;
  justify-content: space-between;

  address {
    font-style: normal;
    text-align: left;

    a {
      text-decoration: none;
      color: #ff9900;
    }
  }

  iframe {
    width: 30rem; 
    height: 100%;
  }
`;