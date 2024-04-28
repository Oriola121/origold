import React from 'react'
import styled from 'styled-components'
import Top from './Top'
import Mid from './Mid'

export default function Main() {
  return (
    <Maincont>
        <Mainwrap>
            <Top/>
            <Mid/>
        </Mainwrap>
    </Maincont>
  )
}

const Maincont = styled.div`
width: 100%;
height: 100vh;
background: #0E0E0E;
display: flex;
align-items: center;
justify-content: center;
color: #fff;
`
const Mainwrap = styled.div`
width: 95%;
height: 90%;
background: #10101A;
`