import React from "react";
import styled from "styled-components";
import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaWhatsapp,
  FaFacebook,
} from "react-icons/fa";
import { GrMailOption } from "react-icons/gr";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const socialLinks = [
  {
    name: "LinkedIn",
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/abdurrahman-muhibudeen/",
  },
  {
    name: "Github",
    icon: <FaGithub />,
    url: "https://github.com/Oriola121",
  },
  {
    name: "Whatsapp",
    icon: <FaWhatsapp />,
    url: "https://wa.me/2348102557217",
  },
  {
    name: "Facebook",
    icon: <FaFacebook />,
    url: "https://web.facebook.com/OrigoldMuhibudeen",
  },
  {
    name: "Email",
    icon: <GrMailOption />,
    url: "https://mail.google.com/mail/?view=cm&fs=1&to=muhibudeen.oriola@gmail.com",
  },
  {
    name: "Twitter",
    icon: <FaTwitter />,
    url: "https://twitter.com/Realtor_OriGold",
  },
];

export default function Contact() {
  const [contactRef] = useInView({
    threshold: 0.9,
    triggerOnce: false,
  });
  return (
    <ContactContainer id="contact">
      <ContactWrapper>
        <p className="no-stranger">
          <span className="colorful-stranger">Don't be a stranger!</span>👋
        </p>
        <p className="connect-note">Connect with me online</p>
        <div className="socials-area">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              ref={contactRef}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              {social.icon}
              <p>{social.name}</p>
            </motion.a>
          ))}
        </div>
      </ContactWrapper>
    </ContactContainer>
  );
}

const ContactContainer = styled.div`
  padding: 4rem 1rem;
  overflow: hidden;
  background: #0e0e0e;
  display: flex;
  justify-content: center;
  margin: 0 auto;
`;

const ContactWrapper = styled.div`
  width: 45%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 890px) {
    width: 90%;
    z-index: 1;
  }

  .no-stranger {
    font-family: Mark Pro;
    font-size: 46.4px;
    font-weight: 700;
  }

  .colorful-stranger {
    color: transparent;
    background: linear-gradient(to right, #a586ed, lightblue, gold, #a388ed);
    -webkit-background-clip: text;
    background-clip: text;
  }

  .connect-note {
    font-family: Circular Std Book;
    font-size: 15.776px;
    font-weight: 400;
    line-height: 20.5088px;
    color: rgb(196, 196, 196);
  }

  .socials-area {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    margin-top: 2rem;
    width: 100%;
    @media screen and (max-width: 850px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 450px) {
      grid-template-columns: repeat(2, minmax(90px, 1fr));
      gap: 0.8rem;
    }
  }

  .social-link {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-family: D-DIN Condensed;
    font-size: 20px;
    font-weight: 100;
    line-height: 17.0752px;
    color: #fff;
    text-decoration: none;

    &:hover {
      color: #a586ed;
    }
  }
`;
