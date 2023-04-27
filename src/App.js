import React, { useState } from "react";
import { ThemeProvider } from 'styled-components';

import Header from "./Components/Header";
import Container from "./Components/Container";
import GlobalStyle from "./GlobalStyle";
import { temaClaro, temaOscuro } from './Components/UI/temas';
import { BtnTema } from "./Components/UI";
import SwitcherTema from './Components/SwitcherTema';


function App() {

  localStorage.getItem('tema') === null && localStorage.setItem('tema', true);
  const dato = JSON.parse(localStorage.getItem('tema'))

  const [tema, setTema] = useState(dato);
  

  const toggleTema = () => {
    setTema((theme) => {
      const t = !theme;
      localStorage.setItem('tema', t);
      return t;      
    });
  }


  return (
    <ThemeProvider theme={ tema ? temaClaro : temaOscuro}>
      <GlobalStyle />
      <BtnTema onClick={toggleTema}>
        <SwitcherTema tema={tema} />
      </BtnTema>
      <Header />
      <Container />
    </ThemeProvider>
  );
}

export default App;
