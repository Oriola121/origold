import React from "react";
import styled from "styled-components";
import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaWhatsapp,
  FaFacebook,
} from "react-icons/fa";

export default function Contact() {
  return (
    <ContactContainer id="contact">
      <ContactWrapper>
        <p className="no-stranger">
          <span className="colorful-stranger">Dont be a stranger!</span>👋
        </p>
        <p className="connect-note">Connect with me online</p>
        <div className="socials-area">
          <span className="social-1">
            <a
              href="https://www.linkedin.com/in/abdurrahman-muhibudeen/"
              target="_blank"
              className="social-link"
              rel="noreferrer"
            >
              <FaLinkedin />
              <p>Linkedin</p>
            </a>
            <a
              href="https://github.com/Oriola121"
              target="_blank"
              className="social-link"
              rel="noreferrer"
            >
              <FaGithub />
              <p>Github</p>
            </a>
            <a
              href="https://wa.me/2348102557217"
              rel="noopener noreferrer"
              target="_blank"
              className="social-link"
            >
              <FaWhatsapp />
              <p>Whatsapp</p>
            </a>
          </span>
          <span className="socials-2">
            <a
              href="https://twitter.com/Realtor_OriGold"
              target="_blank"
              className="social-link"
              rel="noreferrer"
            >
              <FaTwitter />
              <p>Twitter</p>
            </a>
            <a
              href="https://web.facebook.com/OrigoldMuhibudeen"
              target="_blank"
              className="social-link"
              rel="noreferrer"
            >
              <FaFacebook />
              <p>Facebook</p>
            </a>
          </span>
        </div>
      </ContactWrapper>
    </ContactContainer>
  );
}

const ContactContainer = styled.div`
  width: 100%;
  height: 50%;
  background: #0e0e0e;
  display: flex;
  align-items: center;
  justify-content: center;
  
`;
const ContactWrapper = styled.div`
width: 45%;
height: 90%;
display: flex;
flex-direction: column;
justify-content: center;
@media screen and (max-width: 890px){
  height: 90%;
  width: 90%;
  margin-left: 0;
  z-index: 1;
}
.no-stranger{
  font-family: Mark Pro;
  font-size: 46.4px;
  font-weight: 700;
}
.colorful-stranger{
  color: transparent;
  background: linear-gradient(to right, #A586ED, lightblue, gold, #A388ED);
  -webkit-backgroung-clip: text;
  background-clip: text;
}
.connect-note{
  font-family: Circular Std Book;
  font-size: 15.776px;
  font-weight: 400;
  line-height: 20.5088px;
  color: rgb(196, 196, 196);
}
.socials-area{
  width: 50%;
  height: 30%; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
}
.social-1{
  display: flex;
  gap: 2rem;
}
.socials-2{
  display: flex;
  gap: 2.5rem;
}
.social-link{
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
`;
