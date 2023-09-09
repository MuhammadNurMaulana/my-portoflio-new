import React, { useEffect } from "react";
import { Container } from "../Components/Container";
import { ProjectsComponents } from "../Components/ProjectsComponent";

export const Projects = () => {
  useEffect(() => {
    document.title = "Projects || Maulana";
  }, []);
  return (
    <Container>
      <ProjectsComponents></ProjectsComponents>
    </Container>
  );
};
