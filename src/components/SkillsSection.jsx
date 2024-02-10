import {
  faBootstrap,
  faCss3Alt,
  faGithub,
  faHtml5,
  faNodeJs,
  faReact,
  faSquareJs,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import i from "../assets/Skills 1.png";
import i1 from "../assets/Skills.png";

const SkillsSection = () => {
  const social = [
    {
      name: faHtml5,
      color: "#F06529",
    },
    {
      name: faCss3Alt,
      color: "#264de4",
    },
    {
      name: faSquareJs,
      color: "#F0DB4F",
    },
    {
      name: faReact,
      color: "#61DBFB",
    },
    {
      name: faNodeJs,
      color: "#3C873A",
    },
    {
      name: faBootstrap,
      color: "#FFFFFF",
    },
    {
      name: faGithub,
      color: "#FFFFFF",
    },
  ];
  return (
    <div id="skills" className="pt-20">
      <div>
        <div className="text-center text-[42px] lg:text-6xl">Skills</div>
        <div className="absolute right-8 mt-[-100px] hidden md:block">
          <img src={i} alt="" className="xl:h-[200px] h-[150px]" />
        </div>
        <div className="absolute left-8 lg:mt-[-50px] hidden md:block ">
          <img src={i1} alt="" className="mh:h-[250px] h-[230px]" />
        </div>
      </div>
      <div className="text-3xl md:text-5xl flex justify-center items-center md:mt-14 mt-6 md:gap-10 gap-5 flex-wrap px-20">
        {social.map((item, index) => (
          <span data-aos="flip-left" data-aos-delay={`${300 + index * 100}`}>
            <FontAwesomeIcon
              icon={item.name}
              color={item.color}
              className="bg-blue rounded-full px-4 py-3"
              key={item.name}
            />
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
