import React from 'react'
import styled from 'styled-components'
import pro1 from './image/LSETF1.png'

export default function Project() {
  return (
    <Procont>
        <a href='https://lsetf-student-database.web.app/student' className='pro1'>
            <img src={pro1}/>
            <p>LSETF/USADF student database</p>
        </a>
    </Procont>
  )
}

const Procont = styled.div`
width: 100%;
height: 100%;
background: #0E0E0E;
color: #fff;

.pro1{
    width: 70%;
    height: 70%;
}
`