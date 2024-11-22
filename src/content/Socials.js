import React from 'react'
import styled from 'styled-components'
import { FaGithub,FaTwitter,FaLinkedin,FaWhatsapp,FaFacebook } from 'react-icons/fa'

export default function Socials() {
  return (
    <SocialContainer>
        <SocialWrapper>
          <span>
          <a href='https://www.linkedin.com/in/abdurrahman-muhibudeen/' target='_blank' rel="noreferrer" >
            <FaLinkedin /></a>
          <a href='https://web.facebook.com/OrigoldMuhibudeen' target='_blank' rel="noreferrer" >
            <FaFacebook/></a>
          <a href='https://twitter.com/Realtor_OriGold' target='_blank' rel="noreferrer" >
            <FaTwitter/></a>
          <a href='https://github.com/Oriola121' target='_blank' rel="noreferrer" >
            <FaGithub/></a>
          <a href="https://wa.me/2348102557217"  rel="noopener noreferrer" target='_blank' >
            <FaWhatsapp /></a></span>
          </SocialWrapper>
    </SocialContainer>
  )
}


const SocialContainer = styled.div`
width: 100%;
height: 20%;
display: flex;
align-items: center;
`
const SocialWrapper = styled.div`
width: 30%;
height: 100%;
display: flex;
align-items: center;
gap: 20px;
font-family: D-DIN Condensed;
@media screen and (max-width: 890px){
  width: 50%;
  display: flex;
  align-items: center;
}

span{
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: -1rem;
a{
  color: inherit;

:hover{
  color: #A586ED;
    }
  }
@media screen and (max-width: 890px){
  width: 90%;
}
}
`