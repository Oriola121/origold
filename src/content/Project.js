import { useState } from "react";
import styled from "styled-components";
import myDataVideo from "../assets/myData.mp4";
import { motion } from "framer-motion";
import VideoDisplay from "./VideoDisplay";

const Projects = [
  {
    id: 1,
    name: "myData",
    description:
      "A dynamic database application built with JavaScript, React, and styled-components. This app leverages Firebase to perform CRUD operations, allowing users to create, read, update, and delete data entries in real-time. It features an intuitive interface, responsive design, and seamless interactions, providing users with a smooth experience for managing their data. The application supports secure data storage and retrieval using Firebase's real-time database, with data synchronization across all connected clients. The design is fully responsive, ensuring compatibility across all device sizes.",
    videoUrl: myDataVideo,
    liveLink: "https://lsetf-student-database.web.app/student",
    github: "https://github.com/Oriola121/origold",
    technology: "JavaScript + React + styled-components + Firebase",
  },
  {
    id: 2,
    name: "MyCityApp Admin Dashboard",
    description: `
    A robust admin dashboard for managing and monitoring activities on the MyCityApp platform.
    Built using Next.js, Zustand, and Tailwind CSS, the dashboard includes functionalities for 
    handling business listings, services, uploaded documents, and user interactions. My role 
    involved creating modular UI components, implementing state management, and integrating 
    essential features to enhance usability for the platform administrators.
`,
    videoUrl: myDataVideo,
    technology:
      "JavaScript + Next + Tailwind CSS + Zustand + PostgreSQL + Prisma ",
  },
];

export default function Project() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleDescription = (id) => {
    if (expandedIndex === id) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(id);
    }
  };

  return (
    <Section id="projects">
      <Container>
        <ProjectsGrid>
          {Projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <ProjectCard>
                <ProjectContent>
                  <VideoDisplay videoUrl={project.videoUrl} />
                  <ProjectInfo>
                    <h3>{project.name}</h3>
                    <ExpandableText
                      className={expandedIndex === project.id ? "expanded" : ""}
                    >
                      {expandedIndex === project.id
                        ? project.description
                        : `${project.description.slice(0, 150)}...`}
                    </ExpandableText>
                    <ExpandButton onClick={() => toggleDescription(project.id)}>
                      {expandedIndex === project.id ? "Show Less" : "Show More"}
                    </ExpandButton>

                    <p
                      style={{
                        marginTop: "5px",
                        marginBottom: "10px",
                        textAlign: "center",
                        fontFamily: "D-DIN Condensed",
                      }}
                    >
                      <strong>{project.technology}</strong>
                    </p>
                    <Links>
                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Live Demo
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          GitHub Repo
                        </a>
                      )}
                    </Links>
                  </ProjectInfo>
                </ProjectContent>
              </ProjectCard>
            </motion.div>
          ))}
        </ProjectsGrid>
      </Container>
    </Section>
  );
}

const Section = styled.section`
  padding: 4rem 1rem;
  background: #0e0e0e;
  color: #fff;
  display: flex;
  justify-content: center;
  font-family: Circular Std Book;
`;

const Container = styled.div`
  width: 45%;
  max-width: 1000px;
  text-align: center;
  margin: 0 auto;

  @media screen and (max-width: 850px) {
    width: 90%;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;

  @media screen and (max-width: 850px) {
    grid-template-columns: 1fr;
    justify-contents: center;
    max-width: 600px;
    margin: 0 auto;
  }
`;

const ProjectCard = styled.article`
  background: #1e1e1e;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
  text-align: center;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: linear-gradient(
      to right,
      #a586ed 20%,
      #ff5555 30%,
      #a388ed 70%,
      #5fade4 80%
    );
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;

const ProjectContent = styled.div`
  display: flex;
  gap: 20px;
  align-items: flex-start;
  justify-content: center;

  @media screen and (max-width: 850px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ProjectInfo = styled.div`
  width: 50%;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 850px) {
    width: 100%;
    max-width: 500px;
    margin-top: 20px;
  }

  h3 {
    text-align: center;
    font-family: D-DIN Condensed;
  }
`;

const ExpandableText = styled.p`
  color: #ddd;
  line-height: 1.6;
  font-size: 0.95rem;
  margin: 0.5rem 0 1rem;
  max-height: 100px;
  overflow: hidden;
  transition: max-height 0.3s ease-out;
  text-align: center;
  &.expanded {
    max-height: none;
  }
`;

const ExpandButton = styled.button`
  width: 50%;
  padding: 8px 16px;
  background: transparent;
  border: 1px solid #a586ed;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  margin: 10px auto;
  display: block;
  transition: background-color 0.3s ease;

  @media screen and (max-width: 850px) {
    width: 100%;
    max-width: 200px;
  }

  &:hover {
    background: #a586ed;
    color: #0e0e0e;
  }
`;

const Links = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;

  a {
    text-decoration: none;
    color: #fff;
    padding: 0.5rem 1rem;
    border: 1px solid #a586ed;
    border-radius: 5px;
    transition: 0.3s ease;

    &:hover {
      background: #a586ed;
      color: #0e0e0e;
    }
  }
`;
