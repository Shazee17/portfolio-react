import React, { useState } from "react";
import ImageCarousel from "../ImageCarousel";


const ProjectComponent = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDetails = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 border-[1px] border-gray-500">
      {/* Project Details */}
      <div className="p-6 rounded-md bg-[#474545] flex flex-col">
        <h3 className="text-2xl font-bold pb-4 text-orange-500">
          {project.name}
        </h3>

        {/* Responsive Details */}
        <div className="text-gray-300 leading-relaxed space-y-2">
          {/* Mobile: Show partial details */}
          <div className="block md:hidden">
            {isExpanded
              ? project.details.map((line, index) => <p key={index}>{line}</p>)
              : project.details.slice(0, 1).map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
            <button
              onClick={toggleDetails}
              className="mt-4 text-orange-500 hover:text-white hover:underline"
            >
              {isExpanded ? "View Less" : "View More"}
            </button>
          </div>

          {/* Desktop: Show all details */}
          <div className="hidden md:block">
            {project.details.map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
        </div>

      </div>

      


      <div className="p-5">
        {/* Project Images */}
      <ImageCarousel images={project.images} />


       {/* Technologies Used in Project */}
      <p className="pt-4 text-orange-500">Technologies</p>
        <ul className="flex flex-wrap  pt-2">
          {project.technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <li key={index} className="flex items-center space-x-2 mb-2 ">
                <Icon size={20} className="text-orange-500 hover:text-white" />
                <span>{tech.name}</span>
              </li>
            );
          })}
        </ul>

       {/* Project Links */}
       <p className="pt-4 text-orange-500">Links</p>
        <ul className="flex pt-2 ">
          {project.links.map((link, index) => {
            const Icon = link.icon 
            return (
              <li key={index}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 hover:text-orange-500"
                >
                  <Icon size={20} className="text-orange-500" />
                  <span>{link.name}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ProjectComponent;
