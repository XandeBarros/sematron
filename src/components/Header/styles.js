import styled from 'styled-components';

export const SHeader = styled.header`
  width: 100%;
  height: 6rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  width: 70rem;

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

  color: inherit; /* blue colors for links too */
  text-decoration: inherit; /* no underline */

  border-bottom: ${(props) => props.active ? '2px solid #ff9900': ''};
  font-weight: ${(props) => props.active ? '700': '400'};

  &:hover {
    border-bottom: 2px solid #ff9900;
    font-weight: 700;
  }
`;