import React from 'react'
import fold1 from './image/fold1.png'


function End() {
  return (
    <Endcont>
        <p>VIEW PROJECTS</p>
        <img src={fold1} className='fold'/>
    </Endcont>
  )
}

export default End

 const Endcont = styled.div`
 width: 100%;
 height: 25%;
 display: flex;
 
 .fold{
    height: 200px;   
}
 `