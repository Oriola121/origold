import React from "react";
import styled from "styled-components";

export default function Hero() {
  return (
    <HeroContainer>
      <p className="display-text">
        <span>turning ideas into</span>
        <br />
        <span>real life </span>
        <span className="animated-product">products</span>
        <br /> <span>is what I do</span>
      </p>
    </HeroContainer>
  );
}

const HeroContainer = styled.div`
width: 100%;
height: 50%;
display: flex;
justify-content: center;
flex-wrap: wrap;

.display-text{
  font-family: Mark Pro;
  font-size: 83.52px;
  font-weight: 750;
  gradient-color: #A586ED #A388ED #56869D;
@media screen and (max-width: 890px){
  width: 90%;
  margin-left: 0;
  font-size: 58px;
  font-weight: 750;
  
}

.animated-product{
  background: linear-gradient(to right, #A586ED 20%, red 30%, #A388ED 70%, lightblue 80%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-fill-color: transparent;
  background-size: 200% auto;
  animation: textShine 7s ease-in-out infinite;


@keyframes textShine {
to {
    background-position: 200%;
}
 `;
