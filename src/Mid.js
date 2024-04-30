import React from 'react'
import styled from 'styled-components'

function Mid() {
  return (
    <Midcont>
        <p className='intro'>
            <span>turning ideas into</span><br/><span>real life </span> 
            <span className='prograd'>products</span><br/> <span>is my calling</span></p>
    </Midcont>
  )
}

export default Mid
const Midcont = styled.div`
width: 100%;
height: 50%;
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;



.intro{
  font-family: Mark Pro;
  font-size: 83.52px;
  font-weight: 750;
  gradient-color: #A586ED #A388ED #56869D;
@media screen and (max-width: 890px){
  font-size: 60px;
  font-weight: 750;
  
}
}

.prograd{
  background: linear-gradient(to right, #A586ED 20%, red 30%, #A388ED 70%, lightblue 80%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-fill-color: transparent;
  background-size: 200% auto;
  animation: textShine 7s ease-in-out infinite;


@keyframes textShine {
to {
    background-position: 200%;
}
 `