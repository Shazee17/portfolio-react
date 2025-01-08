import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import {Link} from "react-scroll"

const Home = () => {
  return (
    <div name="home" className="bg-[#000000] h-screen w-full">
      {/* Container */}
      <div className="flex flex-col justify-center h-full max-w-[1000px] mx-auto px-8">
        <p className="text-xl text-orange-500 pt-11">Heya, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-orange-500">
  Shah Zaman <span className="text-xl sm:text-xl pt-11">& I'm a</span>
</h1>

        <h2 className="text-4xl sm:text-9xl font-bold text-orange-500 cursor-pointer hover:text-gray-200 duration-300">
          FULLSTACK DEVELOPER.
        </h2>
        <p className="text-white py-4 max-w-[700px]">
          I specialize in building (and occasionally designing) exceptional
          digital experiences.
        </p>

        <div>
      <Link to='work' smooth={true} duration={500} className="flex items-center">
      <button className="text-orange-500 border-orange-500 text-lg font-bold group border-2 px-6 py-3 my-2 flex items-center hover:bg-orange-500 hover:text-white hover:border-orange-500 duration-300">
        View Work 
        <span className="group-hover:rotate-90 duration-300 pl-2">
          <HiArrowNarrowRight />
        </span>
        </button>
      </Link>
    
        </div>
      </div>
    </div>
  );
};

export default Home;
