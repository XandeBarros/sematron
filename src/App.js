import React from "react";

import GlobalStyle from './styles/global';

import Header from './components/Header';
import Slider from './components/Slider';
import About from './components/About';
import Numbers from './components/Numbers';

export default function App() {
  return(
    <>
      <GlobalStyle />
      <Header />
      <Slider />
      <About />
      <Numbers />
    </>
  );
}
