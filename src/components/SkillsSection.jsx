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
      icon: "HTML 5",
      name: faHtml5,
      color: "#F06529",
    },
    {
      icon: "CSS 3",
      name: faCss3Alt,
      color: "#264de4",
    },
    // {
    //   icon: "JavaScript",
    //   name: faSquareJs,
    //   color: "#F0DB4F",
    // },
    {
      icon: "React",
      name: faReact,
      color: "#61DBFB",
    },
    {
      icon: "Node JS",
      name: faNodeJs,
      color: "#3C873A",
    },
    {
      icon: "Bootstrap",
      name: faBootstrap,
      color: "#FFFFFF",
    },
    {
      icon: "Github",
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
      <div className="md:max-w-[70vw] w-screen mx-auto">
        <div className="flex justify-center items-center md:mt-14 mt-6 md:gap-10 gap-5 flex-wrap px-20">
          {social.map((item, index) => (
            <span
              data-aos="flip-left"
              data-aos-delay={`${300 + index * 100}`}
              className="group"
            >
              <div className="text-lg text-center opacity-0 group-hover:opacity-100 transition-all duration-100 text-white">
                {item.icon}
              </div>
              <FontAwesomeIcon
                icon={item.name}
                color={item.color}
                className="px-4 py-3 transition-all duration-300 text-4xl md:text-5xl group-hover:text-4xl group-hover:md:text-6xl"
                key={item.name}
              />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
