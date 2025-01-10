import React from "react";
import Projects from "./ProjectComponents/Projects";


const Work = () => {
  return (
    <div
  name="work"
  className="w-full bg-[#13151e] py-8 px-8 text-gray-300"
>
  <div className="max-w-[1000px] mx-auto p-8 flex flex-col justify-center">
    {/* Section Heading */}
    <div className="flex items-center justify-between pb-8">
      <p className="text-4xl font-bold inline">Work</p>
      <div className="flex-1 ml-4 h-1 bg-orange-500"></div>
    </div>

    {/* Subtitle */}
    <p className="py-4 text-gray-400 text-center">
      Check out some of my recent work
    </p>

    {/* Projects */}
    <div className="">
    <Projects />
    </div>


    <p className="py-8 text-xl text-gray-300 text-center">
      Check more of my work on <span className="text-orange-500"><a href="https://github.com/Shazee17">Github</a></span>
    </p>
  </div>
</div>

  );
};

export default Work;
