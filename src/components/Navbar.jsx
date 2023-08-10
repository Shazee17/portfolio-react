import React, { useState } from "react";
import {
  FaBars,FaTimes,FaGithub,FaLinkedin, FaInstagram
} from "react-icons/fa";
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed w-full h-[80px] flex justify-center items-center px-8b #0d0e14 text-gray-300 classN">
      <ul className="hidden md:flex">
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Work</li>
        <li>Contact</li>
      </ul>

      {/* Hamburger */}
      <div className="px-8 ml-auto z-10 md:hidden" onClick={handleClick}>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Navigation */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center  bg-[#13161f]"
        }
      >
        <li className="py-6 text-3xl font-semibold">Home</li>
        <li className="py-6 text-3xl font-semibold">About</li>
        <li className="py-6 text-3xl font-semibold">Skills</li>
        <li className="py-6 text-3xl font-semibold">Work</li>
        <li className="py-6 text-3xl font-semibold">Contact</li>
      </ul>

      {/* Socials */}
      <div className="hidden lg:flex fixed flex-col left-0 top-[65%]">
        <ul>
          <li className="px-4 w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#12111c] rounded-sm font-medium">
            <a href="/" className="flex justify-between items-center w-full text-gray-300">
              Linkedin <FaLinkedin size={30}/>
            </a>
          </li>

          <li className="px-4 w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#12111c] rounded-sm font-medium">
            <a href="/" className="flex justify-between items-center w-full text-gray-300">
              Github <FaGithub size={30}/>
            </a>
          </li>

          <li className="px-4 w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#12111c] rounded-sm font-medium">
            <a href="/" className="flex justify-between items-center w-full text-gray-300">
              Email <HiOutlineMail size={30}/>
            </a>
          </li>

        </ul>
      </div>
    </div>
  );
};

export default Navbar;
