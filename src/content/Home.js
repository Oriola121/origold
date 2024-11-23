import styled from "styled-components";
import Head from "./Head";
import Hero from "./Hero";
import FootLayer from "./FootLayer";

export default function Home() {
  return (
    <MainContainer id="home">
      <Head />
      <Hero />
      <FootLayer />
    </MainContainer>
  );
}

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  color: #fff;

  @media screen and (max-width: 890px) {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    color: #fff;
  }
`;
