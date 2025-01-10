import React from "react";
import Form from "./Form";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full min-h-screen bg-black  text-gray-300 px-8 pt-8 pb-8 md:pt-16 md:pb-16"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        {/* Header */}
        <div className="flex items-center justify-between pb-8">
          <p className="text-4xl font-bold inline ">Contact</p>
          <div className="flex-1 ml-4 h-1 bg-orange-500"></div>
        </div>

        {/* Form Container */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="p-6 rounded-md bg-[#151414] flex flex-col justify-between">
            <h3 className="text-2xl font-bold pb-4 text-orange-500">
              Let's Collaborate
            </h3>
            <p>
              I'm open to opportunities and collaborations. Feel free to reach
              out to discuss your project ideas, questions, or just to say hi!
            </p>
            <p className="pt-4 text-orange-500">Email: shahzaman856@gmail.com</p>
          </div>

          {/* Form */}
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Contact;
