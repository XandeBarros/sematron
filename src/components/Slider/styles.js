import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 80vh;

  position: relative;
`;

export const ImageContainer = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;
`;

export const NavDiv = styled.div`
  width: 3rem;
  height: 3rem;
  background: rgba(3, 3, 3, 0.1);

  padding: 0;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) => props.right ? css`right: 2%` : css`left: 2%`}
`;

export const NavButton = styled.button`
  width: 3rem;
  height: 3rem;

  outline: none;
  border: none;
  background: none;

  cursor: pointer;
  padding: 0;

  color: white;

  box-shadow: 0 .25rem 4rem 1rem rgba(3, 3, 3, 0.9), inset 0 --3rem 3rem rgba(3, 3, 3, 0.5);
`;

export const DotContainer = styled.div`
  gap: .25rem;
  
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  bottom: 3%;
  left: 50%;
  transform: translate(-50%, 0);
`;

export const Dot = styled.div`
  width: .75rem;
  height: .75rem;
  
  border-radius: 50%;

  background-color: white;
  cursor: pointer;

  ${(props) => props.active ? css`background-color: black` : css`background-color: white`}
`;


