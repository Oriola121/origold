import React from "react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";

export default function Hero() {
  const [sectionRef, inView] = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  return (
    <HeroContainer ref={sectionRef}>
      <p className={`display-text ${inView ? "animate" : ""}`}>
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

  .display-text {
    font-family: Mark Pro;
    font-size: 83.52px;
    font-weight: 750;
    color: white;
    opacity: 0;
    transform: translateY(50px);
    transition: opacity 1s ease, transform 1s ease;

    &.animate {
      opacity: 1;
      transform: translateY(0);
    }

    .animated-product {
      background: linear-gradient(to right, #a586ed 20%, red 30%, #a388ed 70%, lightblue 80%);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      text-fill-color: transparent;
      background-size: 200% auto;
      animation: textShine 7s ease-in-out infinite;
    }

    @media screen and (max-width: 890px) {
      width: 90%;
      margin-left: 0;
      font-size: 58px;
      font-weight: 750;
      z-index: 1;
    }
  }

  @keyframes textShine {
    to {
      background-position: 200%;
    }
  }
`;