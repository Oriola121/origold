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
}
.men{
    display: flex;
    align-items: center;
    gap: 5px;
   padding: 50px;
}
`