import React from "react";
import styled from "styled-components";
import profileImg from "../assets/oriola.jpg";
import { useInView } from "react-intersection-observer";
// import Experience from "./Experience";
export default function About() {
  const [sectionRef, inView] = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });
  return (
    <AboutContainer id="about" ref={sectionRef}>
      <AboutWrapper className={inView ? "animate" : ""}>
        <div>
        <img src={profileImg} alt="Oriola" className="profile-img" />
        <p className="about-me">
          Hello stranger! 👋, I'm AbdurRahman and I'm on a mission to transform
          digital products, from daily struggles to delightful experiences! (I'm
          a frontend developer, by the way).
        </p></div>
        {/* <Experience /> */}
      </AboutWrapper>
    </AboutContainer>
  );
}

const AboutContainer = styled.div`
  background: #0e0e0e;
  display: flex;
  justify-content: center;
  padding: 4rem 1rem;
  margin: 0 auto;
`;
const AboutWrapper = styled.div`
width: 45%;
height: 90%;
color: #fff;
gap: 1rem;
line-height: 1.3rem;
opacity: 0;
  transform: translateY(50px);
  transition: opacity 1s ease, transform 1s ease;

  &.animate {
  opacity: 1;
  transform: translateY(0);
    }
@media screen and (max-width: 890px){
  width: 90%;
  height: 90%;
  z-index: 1;
}

.profile-img{
  height: 100px;
  border-radius: 30%;
  border: 2px solid #A586ED;
}

.about-me{
  font-family: Circular Std Book;
  font-size: 15.776px;
  color: rgb(196, 196, 196);
  Line height: 20.5088px;
}
`;
