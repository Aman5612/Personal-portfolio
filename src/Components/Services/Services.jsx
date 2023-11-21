import React from "react";
import "./Services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div id="services" className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p> Full-stack development.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Website Development with the Help of Website Templates</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Authentication and Authorization.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>E-commerce Solutions.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>API Integration.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Serverless Architecture.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
