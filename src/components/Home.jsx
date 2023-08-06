import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="bg-[#0d0e14] h-screen w-full">
      {/* Container */}
      <div className="flex flex-col justify-center h-full max-w-[1000px] mx-auto px-8">
        <p className="text-orange-500">Heya, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#b3b3b3]">
          Shah Zaman
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#7a7a7a]">
          I'm a Front-End Developer.
        </h2>
        <p className="text-[#7a7a7a] py-4 max-w-[700px]">
          I'm specializing in building (and occasionally designing) exceptional
          digital experiences. Currently, I’m focused on building responsive
          full-stack web applications.
        </p>

        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-orange-500 hover:border-orange-500 duration-300">
            View Work
            <span className="group-hover:rotate-90 duration-300 pl-2">
              <HiArrowNarrowRight />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
