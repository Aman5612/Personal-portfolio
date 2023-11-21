import React, { useEffect, useState } from "react";
import "./Nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";

function Nav() {
  const [navState, setNavState] = useState("#");
  useEffect(() => {
    // Function to update the active state based on scroll position
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Determine the current active section based on scroll position
      // You can adjust the offset values to match your layout
      if (scrollPosition < 500) {
        setNavState("#");
      } else if (scrollPosition < 1000) {
        setNavState("#about");
      } else if (scrollPosition < 1500) {
        setNavState("#experience");
      } else if (scrollPosition < 2000) {
        setNavState("#services");
      } else if (scrollPosition) {
        setNavState("#contact");
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav>
      <a
        href="#"
        onClick={() => setNavState("#")}
        className={navState === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setNavState("#about")}
        className={navState === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => setNavState("#experience")}
        className={navState === "#experience" ? "active" : ""}
      >
        <BiBook />
      </a>
      <a
        href="#services"
        onClick={() => setNavState("#services")}
        className={navState === "#services" ? "active" : ""}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        onClick={() => setNavState("#contact")}
        className={navState === "#contact" ? "active" : ""}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
}

export default Nav;
