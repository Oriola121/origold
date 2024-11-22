import React from 'react'
import fold1 from '../assets/fold1.webp'
import profileImg from '../assets/am.png'
import styled from 'styled-components'
import { BsCaretDownFill } from 'react-icons/bs'

export default function Head() {
  document.querySelectorAll('a[href^="/"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
  return (
    <HeadContainer>
        <img src={fold1} className='fold'/>
        <div className='animated-box'>
        <div className='box-content'>
            <img src={profileImg} className='profile-img'/>
            <p className='animated-name'>MUHIBUDEEN ABDURRAHMAN ORIOLA</p>
            <div className='dropdown-container'>
              <p className='dropdown-button'>MENU <BsCaretDownFill className='menu-button'/></p>
              <div className="dropdown-content">
                <a href='/' style={{ color: "white", textDecoration: "none" }}>Home</a>
                <a href='/about' style={{ color: "white", textDecoration: "none" }}>About</a>
              </div>
            </div>
        </div></div>
    </HeadContainer>
  )
}


const HeadContainer = styled.div`
width: 100%;
height: 25%;
display: flex;
justify-content: space-between;

.fold{
  // width: 7%;
  height: 200px;
}
.profile-img{
  height: 50px;
  border-radius: 30%;
  margin-left: 2rem;
@media screen and (max-width: 890px){
  height: 50px;
  margin-left: 0.6rem;
}
}
.animated-box{
  height: 20%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  position: fixed;
}
.box-content{
  height: 45%;
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid grey;
  border-radius: 15px;
  // margin-top: 1.8rem;
  font-family: Circular Std Book;
  font-weight: 700;
  font-size: 12px;
  background: #595A5E;
  opacity: 80%;
 
@media screen and (max-width: 890px){
  height: 35%;
  width: 80%;
  margin-left: 0.5rem;
  font-size: 12px;
}

}
.animated-name{
  padding: 0;
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: .15em; /* Adjust as needed */
  animation: 
  typing 10s steps(40, end),
  blink-caret .75s step-end infinite;
  animation-iteration-count: infinite;
 
 /* The typing effect */
@keyframes typing {
  from { width: 0 }
  to { width:41.5% }
 }
@media screen and (max-width: 890px){
  padding: 0;
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: .15em; /* Adjust as needed */
  animation: 
  typing 10s steps(40, end),
  blink-caret .75s step-end infinite;
  animation-iteration-count: infinite;
 
 /* The typing effect */
@keyframes typing {
  from { width: 0 }
  to { width: 50.5% }
 }
}
}
.dropdown-container{
  gap: 5px;
  padding: 0;
  position: relative;
  display: inline-block;
  margin-right: 3rem;
@media screen and (max-width: 890px){
  gap: 5px;
  padding: 0px;
  position: relative;
  display: inline-block;
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
}
.menu-button{
  font-size: 20px;   
}
/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: absolute;
  // background-color: #f1f1f1;
  min-width: 80px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

/* Links inside the dropdown */
.dropdown-content a {
  color: #fff;
  padding: 8px 16px;
  text-decoration: none;
  display: block;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {
  background-color: #A586ED;
}

/* Show the dropdown menu on hover */
.dropdown-container:hover .dropdown-content {
  display: block;
}

// /* Change the background color of the dropdown button when the dropdown content is shown */
// .dropdown-container:hover .dropdown-button {
//   background-color: red;
//   // #3e8e41;
// }
`