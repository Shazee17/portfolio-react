import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0d0e18] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/lejEz5dj" className='flex flex-col max-w-[800px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-orange-500 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>Submit the form below to contact me</p>
            </div>
            <input className='p-2 bg-[#e8e8e8] rounded-sm' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#e8e8e8] rounded-sm' type="text" placeholder='Email' name='email' />
            <textarea className='bg-[#e8e8e8] p-2 rounded-sm' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 px-6 py-3 my-5 hover:bg-orange-500 hover:border-orange-500 duration-300 mx-auto flex items-start'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact