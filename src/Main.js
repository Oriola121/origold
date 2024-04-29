import React from 'react'
import styled from 'styled-components'
import Top from './Top'
import Mid from './Mid'
import End from './End'

export default function Main() {
  return (
    <Maincont>
            <Top/>
            <Mid/>
            <End/>
    </Maincont>
  )
}

const Maincont = styled.div`
width: 100%;
height: 100vh;
background: #0E0E0E;
// display: flex;
// align-items: center;
// justify-content: center;
color: #fff;
`