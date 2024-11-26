import React from "react";
import fold1 from "../assets/fold2.webp";
import styled from "styled-components";
import Socials from "./Socials";
import { IoMdDownload } from "react-icons/io";
import Resume from "../assets/Muhibudeen AbdurRahman Resume.pdf";
import { Link as ScrollLink } from "react-scroll";

export default function FootLayer() {
  return (
    <FootContainer>
      <div className="footer-area">
        <div className="footer-contents">
          <AnimatedScrollLink to="projects" smooth={true}>
            VIEW PROJECTS
          </AnimatedScrollLink>
          <DownloadLink href={Resume} download>
            DOWNLOAD RESUME
            <IoMdDownload />
          </DownloadLink>
          <Socials />
        </div>
      </div>
      <img src={fold1} alt="" className="fold" />
    </FootContainer>
  );
}

const FootContainer = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: space-between;

  .fold {
    height: 200px;
    position: fixed;
    right: 0;
    margin-top: 2rem;
  }

  .footer-area {
    height: 100%;
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 890px) {
      z-index: 1;
    }
  }

  .footer-contents {
    width: 40%;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;

    @media screen and (max-width: 1075px) {
      width: 80%;
      display: flex;
      flex-wrap: wrap;
      color: #fff;
      gap: 2rem;
      margin-top: 1rem;
      margin-left: -1rem;
    }
  }
`;
const AnimatedScrollLink = styled(ScrollLink)`
  font-family: D-DIN Condensed;
  font-size: 20px;
  display: inline-block;
  position: relative;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s ease;

  &:after {
    content: "";
    position: absolute;
    width: 23.5%;
    transform: scaleX(0);
    height: 1px;
    bottom: 0;
    left: 0;
    background-color: #fff;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  &:hover {
    color: #a586ed;

    &:after {
      transform: scaleX(1);
      transform-origin: bottom left;
      background: linear-gradient(to right, #a586ed, lightblue, gold, #a388ed);
    }
  }
`;

const DownloadLink = styled.a`
  display: flex;
  align-items: center;
  gap: 3px;
  font-family: D-DIN Condensed;
  font-size: 20px;
  color: #fff;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    color: #a586ed;

    svg {
      fill: #a586ed;
    }
  }
`;
