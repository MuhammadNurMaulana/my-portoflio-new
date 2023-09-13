import React, { useEffect } from "react";
import { Container } from "../Components/Container";
import { ProjectsComponents } from "../Components/ProjectsComponent";
import { ListProject } from "../Components/ProjectsComponent/ListProject";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

export const Projects = () => {
  useEffect(() => {
    document.title = "Projects || Maulana";
  }, []);
  return (
    <Container>
      <div className="h-[100vh]">
        <ProjectsComponents />
        <div className="grid grid-cols-1 grid-rows-1 md:grid-cols-2  gap-4 mt-10 ">
          {ListProject.map((project) => (
            <div key={project.title} className="bg-slate-400/20 rounded-md overflow-hidden">
              <img src={project.src} alt={project.src} className="w-full h-[220px] md:h-[180px]" />
              <div className="p-3">
                <div className="flex justify-between items-center mt-1 mb-2 font-mono font-bold text-xl">
                  <h1>{project.title}</h1>
                  <Link to={project.path} target="_blank">
                    <FaGithub />
                  </Link>
                </div>
                <h1 className="h-[100px] font-semibold">{project.description}</h1>
                <div className="flex gap-2">
                  {project.tech.map((techImg, index) => (
                    <img src={techImg} key={index} alt={`Tech ${index + 1}`} className="w-7 h-7" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};
