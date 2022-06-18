import React from 'react';

import { Container, Content, Description, HrTitle, HrSubtitle, Video } from './styles';

export default function About() {
  return(
    <Container id="About"> 
      <h2>
        Sobre a Sematron
      </h2>

      <HrTitle />

      <h5>Há 17 anos reunindo estudantes de engenharia para o intercâmbio de conhecimento.</h5>
      
      <Content>
        <Video>
          <h3>XVII Sematron</h3>
          <HrSubtitle />
          <iframe width="520" height="320" src="https://www.youtube.com/embed/1i_AOg1lmSg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </Video>
        <Description>
          <h3>Missão e Visão</h3>
          <HrSubtitle />

          <h4>Missão</h4>
          <p>
            Promover o intercâmbio de conhecimento através de eventos acadêmicos de excelência, que conectem pessoas, aproximem-nas dos novos conceitos de tecnologia e engenharia mecatrônica e sirvam como ponte entre o mercado de trabalho e o ambiente acadêmico.
          </p>

          <h4>Visão</h4>
          <p>
            Consolidar-se como um grupo que realiza eventos acadêmicos de grande impacto no cenário nacional. 
          </p>
        </Description>
      </Content>
    </Container>
  );
};
