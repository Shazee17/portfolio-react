import React from "react";
import { FaHtml5, FaJs, FaCss3Alt, FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiMongodb } from "react-icons/si";

const SkillsGrid = () => {
  const skills = [
    { name: "HTML", icon: FaHtml5 },
    { name: "JavaScript", icon: FaJs },
    { name: "TypeScript", icon: SiTypescript },
    { name: "React", icon: FaReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "CSS", icon: FaCss3Alt },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Node.js", icon: FaNodeJs },
    { name: "MongoDB", icon: SiMongodb },
    { name: "GitHub", icon: FaGithub },
  ];

  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center col-span-2 lg:col-span-1"
            >
              <Icon size={70} className="text-orange-500 hover:text-white cursor-pointer" />
              <p className="mt-2 text-center text-sm font-medium text-gray-300">{skill.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillsGrid;
