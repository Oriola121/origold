import React from 'react'
import styled from 'styled-components'
import Top from './Top'
import Mid from './Mid'

export default function Main() {
  return (
    <Maincont>
        <Top/>
        <Mid/>
    </Maincont>
  )
}

const Maincont = styled.div`
width: 100%;
height: 100vh;
background: #10101A;
color: #fff;
`