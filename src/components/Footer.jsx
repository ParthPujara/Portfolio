import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
const Footer = () => {
  let Links = [
    { name: "HOME", link: "#home" },
    { name: "ABOUT", link: "#about" },
    { name: "SKILLS", link: "#skills" },
    { name: "CONTACT", link: "#contact" },
  ];
  return (
    <div>
      <div className="mt-16">
        <footer className="bg-gray-900 text-white">
          <div className="lg:px-16 px-8 bg-[#ffffff19] py-7 flex items-center">
            <div>
            <div className="font-bold text-2xl mb-8">
          <span>Parth</span>
        </div>
              <div className="text-teal-400 flex-1">I like building new things and creating impressive designs and develop them into code. I worked on Many projects as a developer using most recent Technologies.</div>
              <div className="mt-5 flex gap-6">
            
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-yellow text-2xl cursor-pointer"
              />
              <FontAwesomeIcon
                icon={faGithub}
                className="text-yellow text-2xl cursor-pointer"
              />
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-yellow text-2xl cursor-pointer"
              />
            
            </div>
            </div>
          
            <div className="md:px-10 md:py-16 flex flex-1 justify-end lg:flex-row flex-col">
              {Links.map((link) => (
                <li className="ml-8 my-0 font-semibold p-1 hover:bg-yellow transition-all duration-300 rounded-md list-none flex justify-center">
                  <a href={link.link} className="text-white duration-300">
                    {link.name}
                  </a>
                </li>
              ))}
            </div>
          </div>
          <div className="flex justify-center gap-4 pt-5 text-gray-400 text-sm pb-8">
            <span>© 2024 Parth Pujara.</span>
            <span> All rights reserved.</span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
