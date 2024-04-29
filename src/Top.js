import React from 'react'
import fold1 from './image/fold1.png'
import styled from 'styled-components'
import { FaBars } from 'react-icons/fa'

function Top() {
  return (
    <Topcont>
        <img src={fold1} className='fold'/>
        <div className='boxtent'>
            <p className='ori'>MUHIBUDEEN ABDURRAHMAN ORIOLA</p>
            <p className='men'>MENU <FaBars/>
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
    z-index: 999;
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
 }
 
 /* The typing effect */
 @keyframes typing {
   from { width: 0 }
   to { width: 35% }
 }
}
.men{
    display: flex;
    align-items: center;
    gap: 5px;
   padding: 50px;
}
`