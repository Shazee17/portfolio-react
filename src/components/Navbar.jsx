import React, { useState, useEffect } from "react";
import {
  FaBars, FaTimes, FaGithub, FaLinkedin, FaInstagram
} from "react-icons/fa";
import { HiOutlineMail } from 'react-icons/hi';
import {Link} from "react-scroll"

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <div className={`bg-[#0d0e18] fixed w-full h-[80px] flex justify-center items-center px-8 #0d0e14 text-gray-300 ${isScrolled ? 'scrolled' : ''}`}>
      <ul className="hidden md:flex">
        <li className="hover:text-orange-500">
          <Link to='home' smooth={true} duration={500}>Home</Link>
        </li>
        <li className="hover:text-orange-500"><Link to='about' smooth={true} duration={500}>About</Link></li>
        <li className="hover:text-orange-500"><Link to='skills' smooth={true} duration={500}>Skills</Link></li>
        <li className="hover:text-orange-500"><Link to='work' smooth={true} duration={500}>Work</Link></li>
        <li className="hover:text-orange-500"><Link to='contact' smooth={true} duration={500}>Contact</Link></li>
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
        <li className="py-6 text-3xl font-semibold"><Link onClick={handleClick} to='home' smooth={true} duration={500}>Home</Link></li>
        <li className="py-6 text-3xl font-semibold"><Link onClick={handleClick} to='about' smooth={true} duration={500}>About</Link></li>
        <li className="py-6 text-3xl font-semibold"><Link onClick={handleClick} to='skills' smooth={true} duration={500}>Skills</Link></li>
        <li className="py-6 text-3xl font-semibold"><Link onClick={handleClick} to='work' smooth={true} duration={500}>Work</Link></li>
        <li className="py-6 text-3xl font-semibold"><Link onClick={handleClick} to='contact' smooth={true} duration={500}>Contact</Link></li>
      </ul>

      {/* Socials */}
      <div className="hidden lg:flex fixed flex-col left-0 top-[65%]">
        <ul>
          <li className="px-4 w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#12111c] rounded-sm font-medium">
            <a href="https://www.linkedin.com/in/shahzaman-abbasi/" className="flex justify-between items-center w-full text-gray-300">
              Linkedin <FaLinkedin size={30}/>
            </a>
          </li>

          <li className="px-4 w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#12111c] rounded-sm font-medium">
            <a href="https://github.com/Shazee17" className="flex justify-between items-center w-full text-gray-300">
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
