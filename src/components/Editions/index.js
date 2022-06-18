import React from 'react';

import { arrImages } from './images';
import { Card, Cards, Container, DepBox, Depoimentos, Infos } from './styles';

export default function Edition({ images }) {
  return (
    <Container> 
      <h2>
        Outras Edições
      </h2>
      <Cards>
        {arrImages.map(image => {
          return (
            <Card>
              <img src={image.img} alt={image.alt}></img>
              <Infos>
                <h4>{image.date}</h4>
                <h3>{image.title}</h3>
                <p>{image.description}</p>  
              </Infos>
            </Card>
          )
        })}
      </Cards>
      
      <DepBox>
        {images.map((item, index) => (
          index === 0 &&
          <Depoimentos>
            <img src={item.image} alt={item.alt}/>
            <h3>{item.name}</h3>
            <h4>{item.institution}</h4>
            <p>{item.description}</p>
          </Depoimentos>
        ))}
      </DepBox>
    </Container>
  );
};
