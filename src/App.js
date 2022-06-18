import React from "react";

import GlobalStyle from './styles/global';

import Header from './components/Header';
import Slider from './components/Slider';
import About from './components/About';
import Numbers from './components/Numbers';
import Edition from './components/Editions';

import { images } from './components/Slider/images';
import { profImages } from './components/Editions/profImages';

export default function App() {
  return(
    <>
      <GlobalStyle />
      <Header />
      <Slider images={images}/>
      <About />
      <Numbers />
      <Edition images={profImages}/>
    </>
  );
}
