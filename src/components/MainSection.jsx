import React from "react";
import i from "../assets/Home 1.png";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const MainSection = () => {
  return (
    <div id="home">
      <div className="flex justify-between items-center md:h-[90vh] mt-[80px]">
        <div className="flex flex-col gap-2 md:gap-4" data-aos="fade-right">
          <div className="text-[14px] md:text-[18px] lg:text-xl">
            Hii there !
          </div>
          <div className="text-[16px] md:text-[24px] lg:text-3xl text-[#ffffff]">
            I'm Parth Pujara
          </div>
          <div className="text-[24px] md:text-[42px] lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-[#efb300] to-[#ffffff]">
            FrontEnd Developer
          </div>
          <div className="max-w-[620px] md:max-w-[520px] text-[14px]">
            I like building new things and creating impressive designs and
            develop them into code. I worked on Many projects as a developer
            using most recent Technologies.
          </div>
          <div className="flex md:text-xl">
            <a
              href="src/CV/Parth Pujara CV.pdf"
              target="_blank"
              className="flex-1 text-center mr-4 bg-white p-2 md:p-3 rounded-md text-yellow font-bold cursor-pointer hover:shadow-2xl hover:shadow-[#ffffff] "
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
              data-aos-delay="300"
            >
              Download CV
            </a>
            <a
              href="https://www.linkedin.com/in/parth-pujara/"
              target="_blank"
              className=" flex-1 text-center border-2 border-white p-2 md:p-3 rounded-md cursor-pointer hover:shadow-2xl hover:shadow-[#ffffff]"
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
              data-aos-delay="500"
            >
              Hire Me
            </a>
          </div>
          <div className="mt-5 flex gap-3">
            {/* <a href="mailto:parthpujara08@gmail.com?subject='Join our company'&body='There is a job opputunity for you'"> */}
            <a href="https://gmail.com" target="_blank">
              <div
                className="bg-blue p-3 md:p-4 rounded-full"
                data-aos="zoom-in"
                data-aos-delay="700"
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-yellow md:text-3xl text-2xl"
                />
              </div>
            </a>
            <a href="https://github.com/ParthPujara" target="_blank">
              <div
                className="bg-blue p-3 md:p-4 rounded-full"
                data-aos="zoom-in"
                data-aos-delay="800"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="text-yellow md:text-3xl text-2xl"
                />
              </div>
            </a>
            <a href="https://www.linkedin.com/in/parth-pujara/" target="_blank">
              <div
                className="bg-blue p-3 md:p-4 rounded-full"
                data-aos="zoom-in"
                data-aos-delay="900"
              >
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  className="text-yellow md:text-3xl text-2xl"
                />
              </div>
            </a>
          </div>
        </div>
        <div className="hidden md:block" data-aos="fade-left">
          <img src={i} />
        </div>
      </div>
    </div>
  );
};

export default MainSection;
