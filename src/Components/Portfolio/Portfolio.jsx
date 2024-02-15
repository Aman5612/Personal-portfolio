import React from "react";
import "./Portfolio.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/devexchange.png";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.png";

const data = [
  {
    id: 1,
    image: IMG4,
    title:
      "DevExchange- A place for developers to exchange ideas & solving problems",
    github: "https://github.com",
    demo: "https://devexchange.amantiwari.tech",
  },
  {
    id: 2,
    image: IMG2,
    title: "Full-Stack Amazon Clone: E-Comm. Replica with Payment System",
    github: "https://github.com",
    demo: "https://challenge-53703.web.app",
  },
  {
    id: 3,
    image: IMG3,
    title: "YouTube Clone with YouTube API Integration",
    github: "https://github.com",
    demo: "https://watchboxx.netlify.app",
  },
  {
    id: 4,
    image: IMG1,
    title: "Lyriks App - Better Version of Spotify App",
    github: "https://github.com",
    demo: "https://lyrikss-app.netlify.app",
  },
  {
    id: 5,
    image: IMG5,
    title: "FitnessGuru-Heaven for fitness freaks",
    github: "https://github.com/Aman5612/FitnessGuruBootstrap.git",
    demo: "https://aman5612.github.io/FitnessGuruBootstrap/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div
        className="container 
      portfolio__container"
      >
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article className="portfolio__item" key={id}>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3 className="font-bold text-[18px]">{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  target="_blank"
                  className="btn"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
        <article className="portfolio__item" key="6">
          <div className="portfolio__item-image">
            <img src={IMG6} alt="GoogleMeet(clone)" />
          </div>
          <h3 className="font-bold text-[18px]">GoogleMeet Clone(WebRTC)</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Aman5612/VideoChat-WebRTC.git"
              target="_blank"
              className="btn"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://people-meet.netlify.app/"
              target="_blank"
              className="btn btn-primary"
              rel="noreferrer"
            >
              In Development
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
