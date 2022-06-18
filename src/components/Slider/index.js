import React, { useState } from 'react';

import { Container, Dot, DotContainer, ImageContainer, NavButton, NavDiv } from './styles';

export default function Slider({ images }) {
  const [imageIndex, setImageIndex] = useState(0);
 
  const next = () => {
    setImageIndex(state => state += 1);
    if (imageIndex === images.length - 1) setImageIndex(0);
  };
  
  const prev = () => {
    setImageIndex(state => state -= 1);
    if (imageIndex === 0) setImageIndex(images.length - 1);
  };

  return(
    <Container>
      <ImageContainer src={images[imageIndex].image}/>
      <NavDiv right>
        <NavButton right onClick={next}>
          <i className="fa-solid fa-angle-right fa-3x"></i>
        </NavButton>
      </NavDiv>
      <NavDiv>
        <NavButton onClick={prev}>
          <i className="fa-solid fa-angle-left fa-3x"></i>
        </NavButton>
      </NavDiv>
      <DotContainer>
        {images.map((dot, index) => (
          <Dot key={index} active={(index === imageIndex)}></Dot>
        ))}
      </DotContainer>
    </Container>
  );
};
