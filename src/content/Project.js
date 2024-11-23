import React from "react";
import styled from "styled-components";
// import pro1 from '../assest/LSETF1.png'

export default function Project() {
  return (
    <ProjectContainer id="projects">
      <ProjectWrapper>
        <a
          href="https://lsetf-student-database.web.app/student"
          className="pro1"
        >
          {/* <img src={pro1}/> */}
          <p>LSETF/USADF student database</p>
        </a>
      </ProjectWrapper>
    </ProjectContainer>
  );
}

const ProjectContainer = styled.div`
  width: 100%;
  height: 100%;
  background: #0e0e0e;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ProjectWrapper = styled.div`
  width: 45%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 890px){
  // height: 90%;
  width: 90%;
}
  .pro1 {
    width: 70%;
    height: 70%;
  }
`;
