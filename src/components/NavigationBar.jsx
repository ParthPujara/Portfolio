import { faBarsStaggered, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

function NavigationBar() {
  let Links = [
    { name: "HOME", link: "#home" },
    { name: "ABOUT", link: "#about" },
    { name: "SKILLS", link: "#skills" },
    { name: "CONTACT", link: "#contact" },
  ];
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState("");

  const changeNavbarBackground = () => {
    if (window.scrollY >= 80) {
      setIsScrolled("active");
    } else {
      setIsScrolled("");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavbarBackground);

    return () => {
      window.removeEventListener("scroll", changeNavbarBackground);
    };
  }, []);

  return (
    <div className="fixed top-0 z-[99] w-full">
      <div
        className={`flex items-center justify-between py-4 md:px-10 px-7 text-black navbar duration-500 transition-height  ${isScrolled} ${
          open ? "h-[400px]" : ""
        }`}
      >
        {/* logo section */}
        <div className="font-bold text-2xl cursor-pointer self-start">
          <span>Parth</span>
        </div>
        {/* Menu icon */}
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7 text-white text-2xl"
        >
          {
            open ? (
              <span>
                <FontAwesomeIcon icon={faXmark} />
              </span>
            ) : (
              <span>
                <FontAwesomeIcon icon={faBarsStaggered} />
              </span>
            )
            //  <XMarkIcon/> : <Bars3BottomRightIcon />
          }
        </div>
        {/* linke items */}
        <ul
          className={`md:flex md:items-center  absolute md:static md:z-auto z-[99] left-0 w-full md:w-auto transition-all duration-500 ease-in flex-col md:flex-row ${
            open ? "top-12 mobileNavbar" : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <a href={link.link} className="text-white duration-300">
              <li className="md:ml-8 md:my-0 my-7 font-semibold px-2 py-1 hover:bg-yellow transition-all duration-300 rounded-md" onClick={()=>open?setOpen(false):''}>
                {link.name}
              </li>
            </a>
          ))}
        </ul>
        {/* button */}
      </div>
    </div>
  );
}

export default NavigationBar;
