import React from "react";
import SkillsGrid from "./SkillsGrid";

const Skills = () => {
  return (
    <div
      name="skills"
      className="px-4 bg-black text-orange-500 w-full min-h-screen pt-8 pb-8 md:pt-16 md:pb-16"
    >
      <div className="max-w-[1000px] mx-auto p-8 flex flex-col justify-center w-full h-full">
        {/* Section Heading */}
        <div className="flex items-center justify-between p-8">
          <p className="text-4xl  text-gray-300 font-bold inline">Skills</p>
          <div className="flex-1 ml-4 h-1 bg-orange-500"></div>
        </div>

        {/* Skills Grid */}
        <SkillsGrid />
      </div>
    </div>
  );
};

export default Skills;
