import React from "react";
import about from "../assets/About.png";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
const AboutSection = () => {
  return (
    <div id="about" className="pt-20">
      <div className="text-center text-[42px] lg:text-6xl">About</div>

      <div className="flex justify-start gap-12 mt-8 px-10 items-center">
        <img
          src={about}
          alt=""
          className="flex-2 hidden md:block md:h-[300px]"
          data-aos="zoom-in-right"
        />
        <div className="flex-1 w-full text-[14px] md:text-[16px] lg:text-[20px]" data-aos="zoom-in-left">
          I am skilled in all aspects of the design process, from user research
          and wireframing to prototyping and implementation. I am also
          proficient in a variety of front-end development technologies, using
          Modern frameworks.
          <div className="mt-8 max-w-[400px] h-[2px] bg-white"></div>
          <div className="flex mt-8 flex-col gap-4 text-[14px] md:text-[16px] lg:text-[20px]">
            <div data-aos="flip-up" data-aos-delay="100">
              <FontAwesomeIcon icon={faLocationDot} className="text-yellow" />
              <span className="ml-4">Gujarat, India</span>
            </div>
            <div data-aos="flip-up" data-aos-delay="200">
              <FontAwesomeIcon icon={faPhone} className="text-yellow" />
              <span className="ml-4">+91 8849207626</span>
            </div>
            <div data-aos="flip-up" data-aos-delay="300">
              <FontAwesomeIcon icon={faEnvelope} className="text-yellow" />
              <span className="ml-4">parthpujara08@gmail.com</span>
            </div>
          </div>
          <div className="flex mt-6">
            <a href="https://www.linkedin.com/in/parth-pujara/" target="_blank" data-aos="zoom-in" data-aos-delay="600">
              <div className="bg-white px-10 py-2 text-yellow rounded-md cursor-pointer hover:shadow-2xl hover:shadow-[#ffffff] font-bold">
                Hire Me
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
