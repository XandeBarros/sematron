import styled from 'styled-components';

export const SHeader = styled.header`
  width: 100%;
  height: 6rem;
`;

export const Container = styled.div`
  width: 80%;

  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    height: 5rem;
  }
`;

export const SNav = styled.nav`
  width: 40rem;
  
  display: flex;
  align-items: center;
  justify-content: space-between;

`;

export const SA = styled.a`
  cursor: pointer;

  border-bottom: ${(props) => props.active ? '2px solid #ff9900': ''};
  font-weight: ${(props) => props.active ? '700': '400'} ;
`;