import React, { useState }  from 'react';

import { menuItems } from './menuItems';

import homeLight from '../../assets/images/header_light.png';

import { SHeader, Container, SNav, SA } from './styles';

export default function Header() {
  const [active, setActive] = useState([true, false, false, false, false, false]);

  const handleState = (e) => {
    const element = e.target.text;

    if (!element) return;
    
    const nav = Array.from(menuItems).map(item => item.title)
    setActive(prevState => prevState.map(state => state ? !state : state));  
    setActive(prevState => nav.map((targetElement, index) => targetElement === element ? !prevState[index] : prevState[index]));  
  }


  return(
    <SHeader>
      <Container>
        <img src={homeLight}></img>

        <SNav onClick={e => handleState(e)}>
          {menuItems.map((item, index) => {
            return(
              <SA
                key={index}
                href={item.url}
                active={active[index]}
              >
                {item.title}
              </SA>
            );
          })}
        </SNav>
      </Container>
    </SHeader>
  );
};
