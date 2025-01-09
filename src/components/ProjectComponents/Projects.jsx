import React from "react";
import ProjectComponent from "./ProjectComponent";
import { projectData } from "./ProjectData"

const Projects = () => {
  return (
    <div className="space-y-12">
      {projectData.map((project, index) => (
        <ProjectComponent key={index} project={project} />
      ))}
    </div>
  );
};

export default Projects;
