import React from "react";
import i1 from "../assets/Contact 1.png";
import i from "../assets/Contact.png";

const ContactSection = () => {
  return (
    <div id="contact" className="pt-20">
        <div className="text-center text-[42px] lg:text-6xl mb-8">Contact</div> 
      <div className="contact_background md:pr-12 p-6" data-aos="fade-right">
        <div className="absolute top-[-130px] right-0 hidden md:block">
          <img src={i} alt="" className="h-[200px] w-[200px]:" data-aos="fade-down" data-aos-delay="300"/>
        </div>
        <div className="flex items-center w-full gap-10">
          <img src={i1} alt="" className="hidden md:block h-[250px] lg:h-[400px]" data-aos="fade-up"  data-aos-delay="350"/>
          <div className="w-full flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="">User name</label>
              <input type="text" className="bg-white mb-3 rounded-md ps-5  lg:px-3 py-2 text-blue font-bold" />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="">Email</label>
              <input type="text" className="bg-white mb-3 rounded-md ps-5 lg:px-3 py-2 text-blue font-bold" />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="">Message</label>
              <textarea
                name=""
                id=""
                cols="40"
                rows="5"
                className="bg-white mb-3 rounded-lg ps-5 lg:px-3 py-2 text-blue font-bold"
              ></textarea>
            </div>
            <div className="flex">
              <div className="bg-white px-10 py-2 text-yellow rounded-md cursor-pointer hover:shadow-2xl hover:shadow-[#ffffff] font-bold">
                Send
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
