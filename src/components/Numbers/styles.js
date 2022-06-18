import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  height: 35rem;

  margin: 0 auto;

  text-align: center;

  background-color: rgba(3, 3, 3, 0.2);

  padding-top: 4rem;

  h2 {
    display: inline;
    font-size: 3rem;
  }
`;

export const HrTitle = styled.hr`
  color: #ff9900;
  width: 40rem;
  margin: .5rem auto;
`;

export const BoxNumbers = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  margin: 0 auto;
  margin-top: 7.5rem;
  width: 40rem;

  h4 {
    margin-top: 1.5rem;
  }
`;

export const Number = styled.div`
  border-radius: 50%;
  border: 2px solid #ff9000;

  height: 7.5rem;
  width: 7.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  p {
    font-size: 1.75rem;
  }
`;
