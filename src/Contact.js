import React from 'react'
import styled from 'styled-components'
import { FaGithub,FaTwitter,FaLinkedin,FaWhatsapp,FaFacebook } from 'react-icons/fa'

export default function Contact() {
  return (
    <Concont>
      <Conwrap>
        <p className='don'><span className='str'>Dont be a stranger!</span>👋</p>
        <p className='con'>Connect with me online</p>
        <div className='soctot'>
          <span className='soc'>
            <a href='https://www.linkedin.com/in/abdurrahman-muhibudeen-9a0328226/' target='_blank' className='consoc'>
            <FaLinkedin /><p>Linkedin</p></a>
            <a href='https://github.com/Oriola121' target='_blank' className='consoc'>
            <FaGithub/><p>Github</p></a>
            <a href="https://wa.me/2348102557217"  rel="noopener noreferrer" target='_blank' className='consoc'>
            <FaWhatsapp /><p>Whatsapp</p></a></span>
          <span className='soc2'>
            <a href='https://twitter.com/Realtor_OriGold' target='_blank' className='consoc'>
            <FaTwitter/><p>Twitter</p></a>
            <a href='https://web.facebook.com/OrigoldMuhibudeen' target='_blank' className='consoc'>
            <FaFacebook/><p>Facebook</p></a></span></div>
      </Conwrap>
    </Concont>
  )
}

const Concont = styled.div`
width: 100%;
height: 50%;
background: #0E0E0E;
display: flex;
align-items: center;
justify-content: center;
// @media screen and (max-width: 890px){
//   width: 100%;
//   height: 20%;
//   background: #0E0E0E;
//   display: flex;
//   align-items: center;
//   justify-content: center;
}
`
const Conwrap = styled.div`
width: 52%;
height: 90%;
display: flex;
flex-direction: column;
// align-items: center;
justify-content: center;
@media screen and (max-width: 890px){
  width: 98%;
  height: 90%;
  margin-left: 0.5rem;
}
.don{
  font-family: Mark Pro;
  font-size: 46.4px;
  font-weight: 700;
}
.str{
  color: transparent;
  background: linear-gradient(to right, #A586ED, lightblue, gold, #A388ED);
  -webkit-backgroung-clip: text;
  background-clip: text;
}
.con{
  font-family: Circular Std Book;
  font-size: 15.776px;
  font-weight: 400;
  line-height: 20.5088px;
  color: rgb(196, 196, 196);
}
.soctot{
  width: 50%;
  height: 30%; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
}
.soc{
  display: flex;
  gap: 2rem;
}
.soc2{
  display: flex;
  gap: 2.5rem;
}
.consoc{
  display: flex;
  gap: 0.5rem;
  font-family: D-DIN Condensed;
  font-size: 20px;
  font-weight: 100;
  line-height: 17.0752px;
  color: rgb(255, 255, 255);
  text-decoration; none;
  align-items: center;
}
a:{
  color: #fff;
  text-decoration: none;
}

a:link{
  color: #fff;
  text-decoration: none;
}

a:visited{
  color: #fff;
  text-decoration: none;
}

a:hover{
  color: #A586ED;
  text-decoration: none;
}
}
`