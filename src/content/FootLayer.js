import React from "react";
import fold1 from "../assets/fold2.webp";
import styled from "styled-components";
import Socials from "./Socials";
import { IoMdDownload } from "react-icons/io";
import CV from "../assets/Muhibudeen AbdurRahman Resume.pdf";

export default function FootLayer() {
  return (
    <FootContainer>
      <div className="footer-area">
        <div className="project-button">
          <p className="view-project">VIEW PROJECTS</p>
          <a
            href={CV}
            className="resume-download"
            download="Muhibudeen AbdurRahman Resume"
          >
            <span>DOWNLOAD CV</span>
            <IoMdDownload />
          </a>
          <Socials />
        </div>
      </div>
      <img src={fold1} alt="fold" className="fold" />
    </FootContainer>
  );
}

const FootContainer = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  justify-content: space-between;

  .fold {
    height: 200px;
  }
  .footer-area {
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .view-project {
    font-family: D-DIN Condensed;
    font-size: 20px;
    display: inline-block; /* Display inline block */
    position: relative; /* Set position relative */
    color: #fff;
  }

  .view-project:after {
    content: ""; /* Add content after the element */
    position: absolute; /* Position absolute for pseudo-element */
    width: 23.5%; /* Full width */
    transform: scaleX(0); /* Initial scale of 0 for underline effect */
    height: 1px; /* Height of the underline */
    bottom: 0; /* Align to bottom */
    left: 0; /* Align to left */
    background-color: #fff; /* Background color of the underline */
    transform-origin: bottom right; /* Set transform origin */
    transition: transform 0.25s ease-out; /* Transition effect for the underline */
  }

  .view-project:hover:after {
    transform: scaleX(1); /* Scale the underline on hover */
    transform-origin: bottom left; /* Set transform origin */
  }

  .project-button {
    width: 40%;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    @media screen and (max-width: 1075px) {
      width: 80%;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      color: #fff;
      gap: 2rem;
      margin-top: 2rem;
      margin-left: -1rem;
    }
  }

  .resume-download {
    display: flex;
    // justify-content: center;
    align-items: center;
    gap: 3px;
    font-family: D-DIN Condensed;
    font-size: 20px;
  }

  a: {
    color: #fff;
    text-decoration: none;
  }

  a:link {
    color: #fff;
    text-decoration: none;
  }

  a:visited {
    color: #fff;
    text-decoration: none;
  }

  a:hover {
    color: #a586ed;
    text-decoration: none;
  }
`;
