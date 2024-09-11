import React from 'react'
import styled from 'styled-components'
import OG from '../image/ori.jpg'            

export default function About() {
  return (
    <Abcont id='about'>
      <Aboutwrap>
      <img src={OG} alt='Origold' className='og'/>
      <p className='bout'>Hello stranger! 👋, I'm AbdurRahman and I'm on a mission to transform digital products, 
      <br/>from daily struggles to delightful experiences! (I'm a frontend developer, by the way).</p>
      </Aboutwrap>
    </Abcont>
  )
}

const Abcont = styled.div`
width: 100%;
height: 30%;
background: #0E0E0E;
display: flex;
align-items: center;
justify-content: center;
@media screen and (max-width: 890px){
  width: 100%;
  height: 30%;
  background: #0E0E0E;
  display: flex;
  align-items: center;
  justify-content: center;
}
`
const Aboutwrap = styled.div`
width: 70%;
height: 70%;
display: flex;
align-items: center;
justify-content: center;
color: #fff;
margin-top: 4rem;
margin-left: 3rem;
gap: 1rem;
@media screen and (max-width: 890px){
  margin-left: 0;
  width: 90%;
  height: 80%;
}

.og{
  height: 100px;
  border-radius: 30%;
  border: 2px solid #A586ED;
}

.bout{
  font-family: Circular Std Book;
  font-size: 15.776px;
  color: rgb(196, 196, 196);
  Line height: 20.5088px;
}
`