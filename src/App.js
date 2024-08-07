import React from "react";
import Main from "./Main";
import GlobalStyle from "./GlobalStyle";
import About from "./content/About";
import styled from "styled-components";
import Contact from "./content/Contact";
// import Project from './content/Project'

function App() {
  return (
    <Appcont>
      <GlobalStyle />
      <Main />
      <About />
      {/* <Project/> */}
      <Contact />
    </Appcont>
  );
}

export default App;

const Appcont = styled.div`
  width: 100%;
  height: 100vh;
  background: #0e0e0e;
`;
