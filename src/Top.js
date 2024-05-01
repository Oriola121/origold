import React from 'react'
import fold1 from './image/fold1.webp'
import OG from './image/am.png'
// import OG from './image/ori.png'
import styled from 'styled-components'
import { BsCaretDownFill } from 'react-icons/bs'

function Top() {
  return (
    <Topcont>
        <img src={fold1} className='fold'/>
        <div className='org'>
        <div className='boxtent'>
            <img src={OG} className='og'/>
            <p className='ori'>MUHIBUDEEN ABDURRAHMAN ORIOLA</p>
            <div className='dropper'>
              <p className='dropbtn'>MENU <BsCaretDownFill className='ardan'/></p>
              <div class="dropcon">
                <a href='#' style={{ color: "white", textDecoration: "none" }}>Home</a>
                <a href='#about' style={{ color: "white", textDecoration: "none" }}>About</a>
              </div>
            </div>
        </div></div>
    </Topcont>
  )
}

export default Top

const Topcont = styled.div`
width: 100%;
height: 25%;
display: flex;
justify-content: space-between;

.fold{
  // width: 7%;
  height: 200px;
}
.og{
  height: 50px;
  border-radius: 30%;
  margin-left: 2rem;
@media screen and (max-width: 890px){
  height: 50px;
  margin-left: 0.6rem;
}
}
.org{
  height: 20%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  position: fixed;
}
.boxtent{
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
  margin-left: 3rem;
  font-size: 12px;
}

}
.ori{
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
.dropper{
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
.dropbtn {
  color: white;
  padding: 10px;
  font-size: 12px;
  border: none;
  display: flex;
  align-items: center;
}
.ardan{
  font-size: 20px;   
}
/* Dropdown Content (Hidden by Default) */
.dropcon {
  display: none;
  position: absolute;
  // background-color: #f1f1f1;
  min-width: 80px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

/* Links inside the dropdown */
.dropcon a {
  color: #fff;
  padding: 8px 16px;
  text-decoration: none;
  display: block;
}

/* Change color of dropdown links on hover */
.dropcon a:hover {
  background-color: #A586ED;
}

/* Show the dropdown menu on hover */
.dropper:hover .dropcon {
  display: block;
}

// /* Change the background color of the dropdown button when the dropdown content is shown */
// .dropper:hover .dropbtn {
//   background-color: red;
//   // #3e8e41;
// }
`