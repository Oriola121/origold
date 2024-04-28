import React from 'react'
import fold1 from './image/fold1.png'
import styled from 'styled-components'

function Top() {
  return (
    <Topcont>
        <img src={fold1} className='fold'/>
    </Topcont>
  )
}

export default Top

const Topcont = styled.div`
width: 100%;
height: 25%;
background: purple;

.fold{
    width: 100%; height: 25%;   
}
`