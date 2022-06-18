import styled from 'styled-components';

export const Container = styled.section`
  width: 70rem;
  height: 35rem;

  margin: 0 auto;
  margin-top: 5rem;

  text-align: center; 

  h2 {
    display: inline;
    font-size: 3rem;
  }

  h5 {
    margin-bottom: 3rem;
  }
`;

export const HrTitle = styled.hr`
  color: #ff9900;
  width: 40rem;
  margin: .5rem auto;
`;

export const HrSubtitle = styled.hr`
  color: #ff9900;
  width: 32.5rem;
  margin: .5rem 0;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  text-align: start;
`;

export const Video = styled.div`
  width: 32.5rem;
  height: 25rem;
  text-align: start;
`;

export const Description = styled.div`
  width: 32.5rem;
  height: 25rem;

  p {
    font-size: .75rem;
  } 
`;
