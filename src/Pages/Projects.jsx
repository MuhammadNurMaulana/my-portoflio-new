import React, { useEffect } from "react";
import { Container } from "../Components/Container";
import { ProjectsComponents } from "../Components/ProjectsComponent";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import lists from "../Components/service/lists.json";

export const Projects = () => {
  useEffect(() => {
    document.title = "Projects || Maulana";
  }, []);
  return (
    <Container>
      <div className="h-[100vh]">
        <ProjectsComponents />
        <div className="grid grid-cols-1 grid-rows-1 md:grid-cols-2  gap-4 mt-10 ">
          {lists.map((list) => (
            <div key={list.title} className="bg-slate-400/20 rounded-md overflow-hidden">
              <img src={list.src} alt={list.src} className="w-full h-[220px] md:h-[180px]" />
              <div className="p-3">
                <div className="flex justify-between items-center mt-1 mb-2 font-mono font-bold text-xl">
                  <h1>{list.title}</h1>
                  <Link to={list.path} target="_blank">
                    <FaGithub />
                  </Link>
                </div>
                <h1 className="h-[100px] font-semibold">{list.description}</h1>
                <div className="flex gap-2">
                  {list.tech.map((techImg, index) => (
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
