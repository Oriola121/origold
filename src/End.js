import React from 'react'
import fold1 from './image/fold2.webp'
import styled from 'styled-components'
import Soc from './Soc'
import { IoMdDownload } from 'react-icons/io'
import CV from './image/Ori Gold resume.pdf'

function End() {
  return (
    <Endcont>
        <div className='org2'>
        <div className='orga'><p className='vp'>VIEW PROJECTS</p>
        <a href= {CV} className='clink' download='Ori Gold Resume'>
        <p>DOWNLOAD CV</p><IoMdDownload/></a>
        <Soc/>
        </div></div>
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


 .fold{
    height: 200px;
}
.org2{
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.vp{
    // height: 10%;
    font-family: D-DIN Condensed;
    font-size: 20px;
    display: inline-block; /* Display inline block */
    position: relative; /* Set position relative */
    color: #fff;
}

.vp:after {
    content: ''; /* Add content after the element */
    position: absolute; /* Position absolute for pseudo-element */
    width: 9.5%; /* Full width */
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

.orga{
    width: 40%;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
@media screen and (max-width: 1075px){
    width: 80%;
    // height: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    color: #fff;
    gap: 2rem;
    // margin-top: 2rem;
    // margin-left: 0.7rem;
}
}

.clink{
    display: flex;
    // justify-content: center;
    align-items: center;
    gap: 3px;
    font-family: D-DIN Condensed;
    font-size: 20px;
}
  
a:{
    color: #fff;
    text-decoration: none;
}

a:link{
    color: #fff;
    text-decoration: none;
}

a:visited{
    color: #fff;
    text-decoration: none;
}

a:hover{
    color: #A586ED;
    text-decoration: none;
}
 `