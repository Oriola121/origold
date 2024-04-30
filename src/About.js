import React from 'react'
import styled from 'styled-components'
import OG from './image/ori.jpg'            

export default function About() {
  return (
    <Abcont id='about'>
      <Aboutwrap>
      <img src={OG} className='og'/>
      <p className='bout'>Hi there! You've got an idea and you want to make it real?</p>
      </Aboutwrap>
    </Abcont>
  )
}

const Abcont = styled.div`
width: 100%;
height: 20%;
background: #0E0E0E;
display: flex;
align-items: center;
justify-content: center;
`
const Aboutwrap = styled.div`
width: 70%;
height: 70%;
background: #0E0E0E;
display: flex;
color: #fff;
margin-left: 15rem;

.og{
  height: 100px;
  border-radius: 30%;
@media screen and (max-width: 890px){}
  // height: 50px;
  // margin-left: 1rem;
}
`