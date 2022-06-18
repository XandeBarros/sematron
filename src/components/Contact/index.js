import React from 'react';
import { Container, Box } from './styles';

export default function Contact() {
  return (
    <Container>
      <h2>
        Contato
      </h2>

      <Box>
        <address>
          <h5>Grupo Sematron</h5>
          Av. Trabalhador São-Carlense, 400<br />
          Pq. Arnold Schmidt - São Carlos, SP<br />
          CEP: 13566-590<br />
          Tel.: (17) 99999-8888 <br />
          Email: <a href='mailto:contato@sematron.com.br'>contato@sematron.com.br</a>
        </address>

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3699.0811716949434!2d-47.899093885513516!3d-22.008200585476057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b8773359c8ccf7%3A0xab557949236b2c4e!2sAnfiteatro+Jorge+Caron!5e0!3m2!1spt-BR!2sbr!4v1553655742083" allowfullscreen="" frameborder="0"></iframe> 
      </Box>
    </Container>
  );
};
