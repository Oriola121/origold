import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function Drop() {
  return (
    
	<DropDown>
    <DropHold>
        <Link
            to='/about'
            style={{ color: "white", textDecoration: "none" }}>
            <a>Admission</a>
        </Link>
        {/* <Link
            to='/schoolarship'
            style={{ color: "white", textDecoration: "none" }}
            <a>Scholarship</a>
        </Link> */}
    </DropHold>
</DropDown>
 )
}

const DropHold = styled.div`
display: none;
position: absolute;
background-color: #f9f9f9;

min-width: 200px;
color: white;
box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
z-index: 10;
margin-top: 13px;
opacity: 1;

a {
    color: black;
    padding: 10px 12px;
    text-decoration: none;
    display: block;
    text-align: left;
    opacity: 1;

    :hover {
        background-color: #ddd;
    }
}
`

const DropDown = styled.div`
border: none;
outline: none;
color: white;
/* padding: 14px 16px; */
background-color: inherit;
font-family: inherit;
margin: 0;

display: flex;
font-weight: bold;
text-transform: uppercase;
font-size: 13px;
color: #adb8bb;

&:hover ${DropHold} {
    display: block;
}
`
