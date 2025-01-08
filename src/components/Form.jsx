import React from 'react'

const Form = () => {
  return (
    <form
            method="POST"
            action="https://getform.io/f/lejEz5dj"
            className=" p-6 rounded-md bg-[#151414] flex flex-col"
          >
            <input
              className="p-3 bg-[#433e3e] text-white rounded-sm mb-4 outline-none focus:ring-2 focus:ring-orange-500"
              type="text"
              placeholder="Name"
              name="name"
              required
            />
            <input
              className="p-3 bg-[#433e3e] text-white rounded-sm mb-4 outline-none focus:ring-2 focus:ring-orange-500"
              type="email"
              placeholder="Email"
              name="email"
              required
            />
            <textarea
              className="p-3 bg-[#433e3e] text-white rounded-sm mb-4 outline-none focus:ring-2 focus:ring-orange-500"
              name="message"
              rows="5"
              placeholder="Your message"
              required
            ></textarea>
            <button
              type="submit"
              className="text-orange-500 border-orange-500 text-lg font-bold group border-2 px-6 py-3 my-2 flex items-center hover:bg-orange-500 hover:text-white hover:border-orange-500 duration-300"
            >
              Send Message
            </button>
          </form>
  )
}

export default Form