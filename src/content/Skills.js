import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Skill() {
  const [sectionRef] = useInView({
    triggerOnce: false,
    threshold: 0.9,
  });

  const skills = [
    "Html",
    "Css",
    "Styled-Components",
    "TailwindCSS",
    "JavaScript",
    "TypeScript",
    "Git",
    "Github",
    "ReactJs",
    "NextJs",
    "Firebase",
    "Zustand",
  ];

  return (
    <SkillsSection id="skills">
      <SkillsContainer>
        <SkillsHeader>
          Skills <AnimatedEmoji>🤹‍♂️</AnimatedEmoji>
        </SkillsHeader>
        <SkillsSubtitle>
          Over the years, I have enhanced my proficiency in these skills...
        </SkillsSubtitle>
        <SkillsGrid>
          {skills.map((skill, index) => (
            <SkillCard
              key={skill}
              whileHover={{ scale: 0.96 }}
              ref={sectionRef}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -300 : 300,
              }}
              transition={{ duration: 0.6 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <SkillCardContent>
                <SkillText>{skill}</SkillText>
              </SkillCardContent>
            </SkillCard>
          ))}
        </SkillsGrid>
      </SkillsContainer>
    </SkillsSection>
  );
}

const SkillsSection = styled.section`
  padding: 4rem 1rem;
  background: #0e0e0e;
  color: #fff;
  display: flex;
  justify-content: center;
  font-family: Circular Std Book;
  overflow-x: hidden;
`;

const SkillsContainer = styled.div`
  width: 45%;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  @media (max-width: 850px) {
    width: 90%;
    z-index: 1;
  }
`;

const SkillsHeader = styled.h2`
  display: flex;
  align-items: center;
  font-family: "ClashBold", sans-serif;
  color: white;
  font-weight: 600;
  font-size: 40px;
`;

const SkillsSubtitle = styled.p`
  font-weight: 500;
  color: #ffffff99;
  margin-top: 0.5rem;
  margin-bottom: 2rem;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  justify-content: center;
  width: 100%;
  @media (max-width: 850px) {
    grid-template-columns: 1fr;
    justify-contents: center;
    margin: 0 auto;
  }
`;

const SkillCard = styled(motion.div)`
  background: linear-gradient(to right, #a586ed, lightblue, gold, #a388ed);
  padding: 1px;
`;

const SkillCardContent = styled.div`
  background-color: #1e1e1e;
  padding: 50px 32px;
`;

const SkillText = styled.p`
  color: white;
  font-family: "Clash", sans-serif;
  font-weight: 500;
`;

const AnimatedEmoji = styled.small`
  animation: bounce 1s infinite;
`;
