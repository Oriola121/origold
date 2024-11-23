import React from "react";
import Main from "./Main";
import GlobalStyle from "./GlobalStyle";
import About from "./content/About";
import Contact from "./content/Contact";
import Project from './content/Project'

export default function App() {
  return (
    <div style={{width: '100%', height: '100vh', background: '#0e0e0e'}}>
      <GlobalStyle />
      <Main />
      <About />
      {/* <Project/> */}
      <Contact />
    </div>
  );
}
