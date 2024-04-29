import React from 'react'
import fold1 from './image/fold2.png'
import styled from 'styled-components'

function End() {
  return (
    <Endcont>
        <p className='vp'>VIEW PROJECTS</p>
        <img src={fold1} className='fold'/>
    </Endcont>
  )
}

export default End

 const Endcont = styled.div`
width: 100%;
height: 25%;
display: flex;
justify-content: space-between;
// align-items: flex-end;

 .fold{
    height: 160px;   
}

.vp{
    height: 10%;
    font-family: D-DIN Condensed;
    Font size: 16.704px;
    margin-left: 21rem;
    margin-top: 2rem;
    display: inline-block; /* Display inline block */
    position: relative; /* Set position relative */
    color: #fff;
}

.vp:after {
    content: ''; /* Add content after the element */
    position: absolute; /* Position absolute for pseudo-element */
    width: 100%; /* Full width */
    transform: scaleX(0); /* Initial scale of 0 for underline effect */
    height: 1px; /* Height of the underline */
    bottom: 0; /* Align to bottom */
    left: 0; /* Align to left */
    background-color: #fff; /* Background color of the underline */
    transform-origin: bottom right; /* Set transform origin */
    transition: transform 0.25s ease-out; /* Transition effect for the underline */
}

.vp:hover:after {
    transform: scaleX(1); /* Scale the underline on hover */
    transform-origin: bottom left; /* Set transform origin */
}
 `