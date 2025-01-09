import React from "react";
import ImageCarousel from "../ImageCarousel";
import { projectData } from "./ProjectData";

const ProjectComponent = ({ project }) => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Project Details */}
      <div className="p-6 rounded-md bg-black flex flex-col justify-between">
        <h3 className="text-2xl font-bold pb-4 text-orange-500">
          {project.name}
        </h3>
        <div>
          {project.details.map((detail, index) => (
            <p key={index} className="pb-2">
              {detail}
            </p>
          ))}
        </div>
        <p className="pt-4 text-orange-500">Technologies</p>
        <ul className="flex flex-wrap gap-2 pt-2">
          {project.technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <li
                key={index}
                className="flex items-center space-x-2 bg-[#333333] p-2 rounded-md"
              >
                <Icon size={20} className="text-orange-500 hover:text-white" />
                <span className="text-sm">{tech.name}</span>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Project Images */}
      <ImageCarousel images={project.images} />
    </div>
  );
};

export default ProjectComponent;
