import React from 'react';

import { Container, Content, Description, Hr, Video } from './styles';

export default function About() {
  return(
    <Container id="About"> 
      <h2>
        Sobre a <h1>Sematron</h1>
      </h2>

      <hr className="title"></hr>

      <p>Há 17 anos reunindo estudantes de engenharia para o intercâmbio de conhecimento.</p>
      
      <Content>
        <Video>
          <h3>XVII Sematron</h3>
          <hr className="subtitle"></hr>
          <iframe width="520" height="320" src="https://www.youtube.com/embed/1i_AOg1lmSg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Video>
        <Description>
          <h3>Missão e Visão</h3>
          <hr className="subtitle"></hr>

          <h4>Missão</h4>
          Promover o intercâmbio de conhecimento através de eventos acadêmicos de excelência, que conectem pessoas, aproximem-nas dos novos conceitos de tecnologia e engenharia mecatrônica e sirvam como ponte entre o mercado de trabalho e o ambiente acadêmico.

          <h4>Visão</h4>
          Consolidar-se como um grupo que realiza eventos acadêmicos de grande impacto no cenário nacional. 
        </Description>
      </Content>
    </Container>
  );
};
