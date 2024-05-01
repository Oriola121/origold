import React from 'react'
import Main from './Main'
import GlobalStyle from './GlobalStyle'
import About from './About'
import styled from 'styled-components'
import Contact from './Contact'
import Project from './Project'

function App() {
  return (
    <Appcont>
      <GlobalStyle/>
      <Main/>
      <About/>
      <Project/>
      <Contact/>
    </Appcont>
  )
}

export default App

const Appcont = styled.div`
width: 100%;
height: 100vh;
background: #0E0E0E;
`