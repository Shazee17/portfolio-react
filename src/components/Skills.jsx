import React from 'react'

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';

const Skills = () => {
  return (
    <div name="skills" className='px-4 bg-[#0d0e18] text-gray-300 w-full h-screen'>
        <div className='max-w-[1000px] mx-auto p-8 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl inline border-b-4 border-orange-500 font-bold '>Skills</p>
                <p className='py-2'>These are some of the technologies I've worked with</p>
            </div>

            {/* Icons container */}
            <div className='grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>
                <div className='shadow-md hover:scale-110 hover:shadow-[#1c2838] duration-500 py-6 cursor-pointer rounded-sm'>
                    <img src={HTML} alt="HTML icon" className='w-20 mx-auto' />
                    <p className='my-2'>HTML</p>
                </div>

                <div className='shadow-md hover:scale-110 hover:shadow-[#1c2838] duration-500 py-6 cursor-pointer rounded-sm'>
                    <img src={CSS} alt="CSS icon" className='w-20 mx-auto' />
                    <p className='my-2'>CSS</p>
                </div>

                <div className='shadow-md hover:scale-110 hover:shadow-[#1c2838] duration-500 py-6 cursor-pointer rounded-sm'>
                    <img src={JavaScript} alt="js icon" className='w-20 mx-auto' />
                    <p className='my-2'>JavaScript</p>
                </div>

                <div className='shadow-md hover:scale-110 hover:shadow-[#1c2838] duration-500 py-6 cursor-pointer rounded-sm'>
                    <img src={ReactImg} alt="React icon" className='w-20 mx-auto' />
                    <p className='my-2'>React</p>
                </div>

                <div className='shadow-md hover:scale-110 hover:shadow-[#1c2838] duration-500 py-6 cursor-pointer rounded-sm'>
                    <img src={Tailwind} alt="Tailwind icon" className='w-20 mx-auto' />
                    <p className='my-2'>Tailwind CSS</p>
                </div>

                <div className='shadow-md hover:scale-110 hover:shadow-[#1c2838] duration-500 py-6 cursor-pointer rounded-sm'>
                    <img src={GitHub} alt="Github icon" className='w-20 mx-auto' />
                    <p className='my-2'>Github</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills