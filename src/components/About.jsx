import React from "react";

const About = () => {
  return (
    <div name="about" className="bg-[#0d0e18] w-full h-screen text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-8">
          <div className="flex items-center justify-between pb-8">
            <p className="text-4xl font-bold inline text-orange-500">About</p>
            <div className="flex-1 ml-4 h-1 bg-orange-500"></div>
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid px-8 sm:grid-cols-2 gap-8">
          <div>
            <p className="sm:text-right text-4xl font-bold text-[#7a7a7a] hover:text-gray-200 duration-300"> 
              Graduated from <span className="text-orange-500">Sukkur IBA University</span>, majoring in Computer Science.
              <br/>
              <span className="text-orange-500">2020 - 2024</span>
            </p>
          </div>
          <div>
          I am a full-stack developer with two years of experience in both frontend and backend technologies, as well as database development. I specialize in building dynamic and efficient web applications, with a focus on creating seamless user experiences. Additionally, I have a growing expertise in AI prompt engineering, generative AI, and large language models (LLMs), along with some experience in LangChain JS for advanced AI-driven solutions.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
