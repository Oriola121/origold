import React from 'react'
import fold1 from './image/fold1.webp'
import OG from './image/ori.png'
import styled from 'styled-components'
import { BsCaretDownFill } from 'react-icons/bs'
// import Drop from './Drop'

function Top() {
  return (
    <Topcont>
        <img src={fold1} className='fold'/>
        <div className='boxtent'>
            <img src={OG} className='og'/>
            <p className='ori'>MUHIBUDEEN ABDURRAHMAN ORIOLA</p>
            <p className='men'>MENU <BsCaretDownFill className='ardan'/>
            {/* <Drop/> */}
            </p>
        </div>
    </Topcont>
  )
}

export default Top

const Topcont = styled.div`
width: 100%;
height: 25%;
display: flex;

.fold{
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
.boxtent{
  height: 35%;
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid grey;
  border-radius: 15px;
  margin-left: 15rem;
  margin-top: 1.8rem;
  font-family: Circular Std Book;
  font-weight: 700;
  font-size: 12px;
  background: #595A5E;
  opacity: 0.6;
  z-index: 1;
@media screen and (max-width: 890px){
  height: 35%;
  width: 70%;
  margin-left: 2rem;
  font-size: 12px;
}

}
.ori{
  padding: 50px;
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
  to { width: 35% }
 }
@media screen and (max-width: 890px){
  padding: 30px;
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
  to { width: 52% }
 }
}
}
.men{
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 50px;
@media screen and (max-width: 890px){
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 25px;
}
}
.ardan{
  font-size: 20px;   
}
`