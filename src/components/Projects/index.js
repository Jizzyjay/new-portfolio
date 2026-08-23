import React from "react";
import { useState } from "react";
import {
  Container,
  Wrapper,
  Title,
  Desc,
  CardContainer,
  ToggleButtonGroup,
  ToggleButton,
} from "./ProjectsStyle";
import ProjectCard from "../Cards/ProjectCards";
import { projects } from "../../data/constants";

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState("all");

  const categories = [
    "all",
    ...new Set(projects.map((project) => project.category).filter(Boolean)),
  ];

  const filteredProjects =
    toggle === "all"
      ? projects
      : projects.filter((project) => project.category === toggle);

  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>Selected work that blends product thinking, UX, and clean execution.</Desc>
        <ToggleButtonGroup>
          {categories.map((category) => (
            <ToggleButton
              key={category}
              active={toggle === category}
              onClick={() => setToggle(category)}
            >
              {category === "all" ? "All" : category}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
        <CardContainer>
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              openModal={openModal}
              setOpenModal={setOpenModal}
            />
          ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
