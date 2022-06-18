import React from 'react';

import { Container, HrTitle, BoxNumbers, Number } from './styles';

export default function Numbers() {
  return(
    <Container>
      <h2>
        Sematron em Números
      </h2> 
      <HrTitle /> 
      <BoxNumbers>
        <div>
          <Number><p>17</p></Number>
          <h4>Anos</h4>
        </div>

        <div>
          <Number><p>5385</p></Number>
          <h4>Participantes</h4>
        </div>

        <div>
          <Number><p>149</p></Number>
          <h4>Palestras</h4>
        </div>

        <div>
          <Number><p>106</p></Number> 
          <h4>Parcerias</h4>
        </div>
      </BoxNumbers>
    </Container>
  );
}