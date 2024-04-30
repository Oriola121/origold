import React from 'react'
import styled from 'styled-components'
import Top from './Top'
import Mid from './Mid'
import End from './End'

export default function Main() {
  return (
    <Maincont id='home'>
            <Top/>
            <Mid/>
            <End/>
    </Maincont>
  )
}

const Maincont = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
flex-wrap: wrap;
color: #fff;

@media screen and (max-width: 890px){
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    color: #fff;
}
`