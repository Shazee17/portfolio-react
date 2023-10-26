import React from "react";

const About = () => {
  return (
    <div name="about" className="bg-[#13151e] w-full h-screen text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-8 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-orange-500">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid px-8 sm:grid-cols-2 gap-8">
          <div>
            <p className="sm:text-right text-4xl font-bold text-[#7a7a7a] hover:text-gray-200 duration-300"> 
              Hi, I'm <span className="text-orange-500">Shahzaman</span>, lovely to meet you. Please take a look around.
            </p>
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, exercitationem.
            Eos atque similique suscipit veritatis ad nostrum facilis sequi fugiat.
            Fugiat sit ex corporis corrupti nihil accusantium dignissimos dolores dolore.
            Tempora necessitatibus eum minus rem in quia optio ipsam expedita?
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
