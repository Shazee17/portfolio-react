import React from "react";

// Sample project images
import Project1 from "../assets/projects/realestate.jpg";
import Project2 from "../assets/projects/workImg.jpeg";

const project = [
  {
    name: "Project 1",
    image: Project1,
    github: "https://github.com/project1",
    live: "https://live-project1.com",
  },
  {
    name: "Project 2",
    image: Project2,
    github: "https://github.com/project2",
    live: "https://live-project2.com",
  },
  {
    name: "Project 3",
    image: Project2,
    github: "https://github.com/project3",
    live: "https://live-project3.com",
  },
];

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen bg-[#13151e] px-8 text-gray-300">
      <div className="max-w-[1000px] mx-auto p-8 flex flex-col justify-center w-full h-full">
        {/* Section Heading */}
        <div className="flex items-center justify-between pb-8">
          <p className="text-4xl font-bold inline">Work</p>
          <div className="flex-1 ml-4 h-1 bg-orange-500"></div>
        </div>
        
        {/* Subtitle */}
        <p className="py-4 text-gray-400 text-center">
          Check out some of my recent work
        </p>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {project.map((item, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${item.image})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div bg-cover bg-center relative"
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition-opacity duration-300">
                <span className="text-2xl font-bold text-white tracking-wider mb-4">
                  {item.name}
                </span>
                <div className="flex gap-4">
                  <a href={item.github} target="_blank" rel="noopener noreferrer">
                    <button className="text-center rounded-lg px-4 py-2 bg-orange-500 text-white font-bold text-lg hover:bg-orange-400 transition-all duration-300">
                      Code
                    </button>
                  </a>
                  <a href={item.live} target="_blank" rel="noopener noreferrer">
                    <button className="text-center rounded-lg px-4 py-2 bg-white text-gray-700 font-bold text-lg hover:bg-gray-300 transition-all duration-300">
                      Live
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
