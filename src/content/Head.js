import React, { useState } from "react";
import fold1 from "../assets/fold1.webp";
import profileImg from "../assets/am.png";
import styled from "styled-components";
import { BsCaretDownFill } from "react-icons/bs";
import { Link as ScrollLink } from "react-scroll";

export default function Head() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <HeadContainer>
      <img src={fold1} className="fold" alt="fold" />
      <div className="animated-box">
        <div className="box-content">
          <img src={profileImg} className="profile-img" alt="profile" />
          <p className="animated-name">MUHIBUDEEN ABDURRAHMAN ORIOLA</p>
          <div 
            className="dropdown-container"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <p className="dropdown-button">
              MENU <BsCaretDownFill className="menu-button" />
            </p>
            <div className={`dropdown-content ${isDropdownOpen ? 'show' : ''}`}>
              <div className="links-grid">
                <ScrollLink 
                  to="home" 
                  spy={true} 
                  smooth={true} 
                  duration={500}
                  className="scroll-link"
                >
                  Home
                </ScrollLink>
                <ScrollLink 
                  to="about" 
                  spy={true} 
                  smooth={true} 
                  duration={500}
                  className="scroll-link"
                >
                  About
                </ScrollLink>
                <ScrollLink 
                  to="projects" 
                  spy={true} 
                  smooth={true} 
                  duration={500}
                  className="scroll-link"
                >
                  Projects
                </ScrollLink>
                <ScrollLink 
                  to="contact" 
                  spy={true} 
                  smooth={true} 
                  duration={500}
                  className="scroll-link"
                >
                  Contact
                </ScrollLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HeadContainer>
  );
}

const HeadContainer = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  justify-content: space-between;

  .fold {
    height: 200px;
  }

  .profile-img {
    height: 50px;
    border-radius: 30%;
    margin-left: 2rem;
    @media screen and (max-width: 890px) {
      height: 50px;
      margin-left: 0.6rem;
    }
  }

  .animated-box {
    height: 20%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    position: fixed;
  }

  .box-content {
    height: 45%;
    width: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 2px solid grey;
    border-radius: 15px;
    font-family: Circular Std Book;
    font-weight: 700;
    font-size: 12px;
    background: #595a5e;
    opacity: 80%;

    @media screen and (max-width: 890px) {
      height: 35%;
      width: 80%;
      margin-left: 0.5rem;
      font-size: 12px;
    }
  }

  .animated-name {
    padding: 0;
    overflow: hidden;
    white-space: nowrap;
    margin: 0 auto;
    letter-spacing: 0.15em;
    animation: typing 10s steps(40, end), blink-caret 0.75s step-end infinite;
    animation-iteration-count: infinite;
    color: white;

    @keyframes typing {
      from {
        width: 0;
      }
      to {
        width: 41.5%;
      }
    }

    @media screen and (max-width: 890px) {
      @keyframes typing {
        from {
          width: 0;
        }
        to {
          width: 50.5%;
        }
      }
    }
  }

  .dropdown-container {
    position: relative;
    display: inline-block;
    margin-right: 3rem;
    cursor: pointer;

    @media screen and (max-width: 890px) {
      margin-right: 0.5rem;
    }
  }

  .dropdown-button {
    color: white;
    padding: 10px;
    font-size: 12px;
    border: none;
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .menu-button {
    font-size: 20px;
  }

  .dropdown-content {
    visibility: hidden;
    opacity: 0;
    position: absolute;
    right: 0;
    top: calc(100% + 5px);
    background: #595a5e;
    min-width: 300px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 2;
    border-radius: 8px;
    transition: all 0.3s ease;
    transform: translateY(-10px);
    pointer-events: none;
    padding: 1rem;

    &.show {
      visibility: visible;
      opacity: 1;
      transform: translateY(0);
      pointer-events: auto;
    }
      @media screen and (max-width: 650px) {
      min-width: 50px;
    }
  }

  .links-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.5rem;
 justify-content: end;
    @media screen and (max-width: 650px) {
      grid-template-columns: 1fr;
    }
  }

  .scroll-link {
    color: white;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    cursor: pointer;
    transition: background-color 0.3s ease;
    text-align: center;
    
    &:hover {
      background-color: #a586ed;
      border-radius: 4px;
    }
  }
`;