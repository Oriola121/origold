import React from 'react'
import styled from 'styled-components'

function Load() {
  return (
    <Loadcont className='preloader'>
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

.preloader {
  width: 100vw;
  height: 100vh;
  background-color: #10101a;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 129993994;
  display: grid;
  place-content: center
}

.preloader__wrapper {
  display: flex;
  align-items: center;
  justify-content: center
}

.preloader__left {
  margin-right: 1rem
}

.preloader__right {
  margin-left: 1rem;
  width: max-content;
  height: 4rem;
  overflow: hidden;
  position: relative
}

.preloader__right:before {
  background-image: linear-gradient(180deg,#10101a 5%,rgba(16,16,26,0) 30%)
}

.preloader__right:after,.preloader__right:before {
  content: "";
  display: block;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1
}

.preloader__right:after {
  background-image: linear-gradient(0deg,#10101a 5%,rgba(16,16,26,0) 30%)
}

.preloader__text {
  font-family: D-DIN Condensed,sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 210%;
  letter-spacing: .19em;
  color: var(--color-white);
  animation: preloaderTextAnim 12s linear;
  animation-delay: 3s
}
@keyframes preloaderTextAnim {
  0% {
      transform: translateY(0)
  }

  50%,to {
      transform: translateY(-600%)
  }
}
`