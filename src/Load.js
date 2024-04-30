import React from 'react'
import styled from 'styled-components'

function Load() {
  return (
    <Loadcont className='.loader'>
        <span><p>HTML</p>
        <p>CSS</p>
        <p>REACT JS</p></span>
    </Loadcont>
  )
}

export default Load

const Loadcont = styled.div`
width: 100%;
height: 100%;
background: #0E0E0E;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
color: #fff;

.loader{
    border: 0 solid transparent;
    border-radius: 50%;
    position: fixed;
    top: calc(50vh-75px);
    left: calc(50vw-75px);
}
.loader:before, .loader:after{
    content: '';
    border: 1em solid #ff5733;
    border-radius: 50%;
    width: inherit;
    height: inherit;
    position: absolute;
    top: 0;
    left: 0;
    animation: loader 2s linear infinite;
    opacity: 0;
}
.loader:before{
    animation-delay: .5s;
}
@keyframes loader {
    0% {
      transform: scale(0);
      opacity: 0;
    }
    50% {
        opacity: 1;
    }
    100% {
        transform: scale(1);
        opacity: 0;
}
`