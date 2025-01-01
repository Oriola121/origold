import { motion } from "framer-motion";
import styled from "styled-components";



export default function Experience
() {
return (
    <Container>
      <Header>
        <Title>
          Experience <small>🚀</small>
        </Title>
        <Subtitle>Some list of my experience over the year..</Subtitle>
      </Header>
      <ContentWrapper>
        <VerticalLine />
        <DetailsWrapper>
          <Detail>
            <IconWrapper>
              <span>
                {/* <ExpCircle /> */}
              </span>
            </IconWrapper>
            <DetailContent>
              <h3>
                Web Developer Instructor <span>-</span> &nbsp;
                <span>2022-2023</span>
              </h3>
              <p>ICMY-WEB DEVELOPMENT</p>
              <h5>
                I worked with my team to make a beautiful and responsive website. I also
                teach web development to students.
              </h5>
            </DetailContent>
          </Detail>
          <Detail>
            <IconWrapper>
              <span>
              </span>
            </IconWrapper>
            <DetailContent>
              <h3>
                Frontend Engineer <span>-</span> &nbsp;
                <span>contract-October 2023</span>
              </h3>
              <p>Redge</p>
              <h5>
                Worked as a contract frontend developer, built the user interface, and
                integrated APIs for a loan app.
              </h5>
            </DetailContent>
          </Detail>
        </DetailsWrapper>
      </ContentWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 12px;

  @media (min-width: 1024px) {
    align-items: flex-end;
  }
`;

const Header = styled.div`
  font-family: 'Poppins', sans-serif;
`;

const Title = styled.h2`
  display: flex;
  align-items: center;
  margin-left: 0;
  font-family: 'Clash Display Bold', sans-serif;
  color: white;
  font-size: 20px;
  font-weight: 600;

  @media (min-width: 1024px) {
    margin-left: 80px;
    font-size: 50px;
    line-height: 49.2px;
  }

  small {
    animation: bounce 1.5s infinite;
  }
`;

const Subtitle = styled.p`
  font-weight: 500;
  color: rgba(255, 255, 255, 0.6);
  font-size: 15px;
  line-height: 22.5px;
  text-align: left;

  @media (min-width: 1024px) {
    font-size: 20px;
    line-height: 30px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  position: relative;
  z-index: 10000000000;
  margin-top: 30px;

  @media (min-width: 1024px) {
    justify-content: space-between;
  }
`;

const VerticalLine = styled.div`
  width: 2px;
  height: 740px;
  background-color: rgba(30, 215, 96, 0.1);
`;

const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
`;

const Detail = styled.div`
  display: flex;
  gap: 28px;

  @media (min-width: 1024px) {
    gap: 48px;
  }
`;

const IconWrapper = styled.div`
  position: relative;

  span {
    position: absolute;
    top: -4px;
    transform: translateX(-55%);

    @media (min-width: 1024px) {
      transform: translateX(-50%);
    }
  }
`;

const DetailContent = styled.div`
  h3 {
    font-weight: 600;
    color: white;
    font-size: 20px;
    line-height: 30px;

    span {
      font-style: italic;
      color: rgba(255, 255, 255, 0.6);
    }
  }

  p {
    color: #1ed760;
    font-weight: 600;
    margin-top: 10px;
    font-size: 18px;
    line-height: 27px;
  }

  h5 {
    color: rgba(255, 255, 255, 0.6);
    font-weight: 500;
    margin-top: 20px;
    max-width: 300px;

    @media (min-width: 1024px) {
      margin-top: 19px;
      max-width: 651px;
      font-size: 18px;
      line-height: 27px;
    }
  }
`;
