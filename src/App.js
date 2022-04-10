import React from "react";

import GlobalStyle from './styles/global';

import Header from './components/Header';
import Slider from "./components/Slider";

export default function App() {
  return(
    <>
      <GlobalStyle />
      <Header />
      <Slider />
    </>
  );
}
