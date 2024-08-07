import styled from "styled-components";
import Top from "./content/Top";
import Mid from "./content/Mid";
import End from "./content/End";

export default function Main() {
  return (
    <Maincont id="home">
      <Top />
      <Mid />
      <End />
    </Maincont>
  );
}

const Maincont = styled.div`
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
