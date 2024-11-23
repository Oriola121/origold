import React from "react";
import styled from "styled-components";
import myDataVideo from "../assets/myData.mp4";
import { motion } from "framer-motion";

const Projects = [
  {
    id: 1,
    name: "myData",
    description: "A database app using Firebase to perform CRUD operations.",
    videoUrl: myDataVideo,
    liveLink: "https://lsetf-student-database.web.app/student",
    github: "https://github.com/Oriola121/origold",
  },
  {
    id: 2,
    name: "MyCityApp Admin",
    description: "A database app using Firebase to perform CRUD operations.",
    videoUrl: myDataVideo,
    liveLink: "https://example.com/project2",
    github: "https://github.com/Oriola121/origold",
  },
  {
    id: 3,
    name: "myData",
    description: "A database app using Firebase to perform CRUD operations.",
    videoUrl: myDataVideo,
    liveLink: "https://example.com/project3",
    github: "https://github.com/Oriola121/origold",
  },
  {
    id: 4,
    name: "myData",
    description: "A database app using Firebase to perform CRUD operations.",
    videoUrl: myDataVideo,
    liveLink: "https://example.com/project4",
    github: "https://github.com/Oriola121/origold",
  },
];

export default function Project() {
  return (
    <Section id="projects">
      <Container>
        <h2>Projects</h2>
        <ProjectsGrid>
          {Projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <ProjectCard>
                <VideoWrapper>
                  <video controls>
                    <source src={project.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </VideoWrapper>
                <ProjectInfo>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <Links>
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub Repo
                    </a>
                  </Links>
                </ProjectInfo>
              </ProjectCard>
            </motion.div>
          ))}
        </ProjectsGrid>
      </Container>
    </Section>
  );
}

// Styled Components

const Section = styled.section`
  padding: 4rem 1rem;
  background: #0e0e0e;
  color: #fff;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 45%;
  max-width: 1000px;
  text-align: center;

  h2 {
    font-size: 2rem;
    color: #a586ed;
    margin-bottom: 2rem;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    z-index: 1;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  background: #1e1e1e;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
  text-align: center;
`;

const VideoWrapper = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9; /* Ensures consistent video alignment */
  overflow: hidden;

  video {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    object-fit: cover; /* Ensures uniform alignment */
  }
`;

const ProjectInfo = styled.div`
  h3 {
    font-size: 1.25rem;
    color: #a586ed;
  }

  p {
    color: #ddd;
    line-height: 1.6;
    font-size: 0.95rem;
    margin: 0.5rem 0 1rem;
  }
`;

const Links = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;

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
