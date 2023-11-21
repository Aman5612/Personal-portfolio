import React from "react";
import "./Experience.css";
import { BsFiletypeSql, BsGithub, BsPatchCheckFill } from "react-icons/bs";
import { RiHtml5Fill } from "react-icons/ri";
import { TiCss3 } from "react-icons/ti";
import { IoLogoJavascript, IoLogoNodejs } from "react-icons/io";
import { FaBootstrap } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";

import {
  SiExpress,
  SiFirebase,
  SiMongodb,
  SiTailwindcss,
} from "react-icons/si";
import { GrReactjs } from "react-icons/gr";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>

          <div className="experience__content">
            <article className="experience__details">
              <div>
                <RiHtml5Fill className="experience__details-icon" />
                <h4>HTML</h4>
              </div>
              <progress value="90" max="100"></progress>
            </article>

            <article className="experience__details">
              <div>
                <TiCss3 className="experience__details-icon" />
                <h4>CSS</h4>
                {/* <small className="text-light">Intermediate</small> */}
              </div>
              <progress value="90" max="100"></progress>
            </article>

            <article className="experience__details">
              <div>
                <IoLogoJavascript className="experience__details-icon" />
                <h4>JavaScript</h4>
                {/* <small className="text-light">Experienced</small> */}
              </div>
              <progress value="80" max="100"></progress>
            </article>

            <article className="experience__details">
              <div>
                <FaBootstrap className="experience__details-icon" />
                <h4>Bootstrap</h4>
                {/* <small className="text-light">Experienced</small> */}
              </div>
              <progress value="70" max="100"></progress>
            </article>

            <article className="experience__details">
              <div>
                <SiTailwindcss className="experience__details-icon" />
                <h4>Tailwind</h4>
                {/* <small className="text-light">Experienced</small> */}
              </div>
              <progress value="50" max="100"></progress>
            </article>

            <article className="experience__details">
              <div>
                <GrReactjs className="experience__details-icon" />
                <h4>React</h4>
                {/* <small className="text-light">Experienced</small> */}
              </div>
              <progress value="90" max="100"></progress>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3>Backend Development</h3>

          <div className="experience__content">
            <article className="experience__details">
              <div>
                <IoLogoNodejs className="experience__details-icon" />
                <h4>Node JS</h4>
                {/* <small className="text-light">Experienced</small> */}
              </div>
              <progress value="90" max="100"></progress>
            </article>

            <article className="experience__details">
              <div>
                <SiMongodb className="experience__details-icon" />
                <h4>MongoDB</h4>
                {/* <small className="text-light">Intermediate</small> */}
              </div>
              <progress value="75" max="100"></progress>
            </article>

            <article className="experience__details">
              <div>
                <SiExpress className="experience__details-icon" />
                <h4>Express.js</h4>
                {/* <small className="text-light">Intermediate</small> */}
              </div>
              <progress value="75" max="100"></progress>
            </article>

            <article className="experience__details">
              <div>
                <BsFiletypeSql className="experience__details-icon" />
                <h4>SQL</h4>
                {/* <small className="text-light">Basic</small> */}
              </div>
              <progress value="35" max="100"></progress>
            </article>

            <article className="experience__details">
              <div>
                <SiFirebase className="experience__details-icon" />
                <h4>Firebase</h4>
                {/* <small className="text-light">Experienced</small> */}
              </div>
              <progress value="50" max="100"></progress>
            </article>

            <article className="experience__details">
              <div>
                <BsGithub className="experience__details-icon" />
                <h4>Git&GitHub</h4>
                {/* <small className="text-light">Basic</small> */}
              </div>
              <progress value="90" max="100"></progress>
            </article>
          </div>
        </div>

        <div id="dsa" className="experience__frontend">
          <div className="experience__content">
            <article className="experience__details">
              <div>
                <TbBrandCpp
                  style={{ fontSize: "2rem" }}
                  className="experience__details-icon"
                />
                <h4>Data Structures & Algorithm</h4>

                {/* <small className="text-light">Experienced</small> */}
              </div>
              <progress value="90" max="100"></progress>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
