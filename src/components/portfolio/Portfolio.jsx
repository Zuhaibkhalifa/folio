import React from "react";
import "./portfolio.css";
import IMG1 from "../../images/img1.png";
import IMG2 from "../../images/img2.png";
import IMG3 from "../../images/img3.png";
import IMG4 from "../../images/img4.png";
import IMG5 from "../../images/img5.png";
import IMG6 from "../../images/img6.png";
import IMG7 from "../../images/img7.png";

function portfolio() {
  return (
    <section id="portfolio">
      <h5>My recent Work</h5>
      <h2>portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG7} alt="" />
          </div>
          <h3>Musically</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Zuhaibkhalifa/Musically"
              target="_blank"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://zuhaibkhalifa.github.io/Musically/"
              target="_blank"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>Todo</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Zuhaibkhalifa/mini-projects-/tree/main/Todo"
              target="_blank"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://cosmic-kleicha-fb360c.netlify.app"
              target="_blank"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Bit Box</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Zuhaibkhalifa/mini-projects-/tree/main/bitbox"
              target="_blank"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://animated-brigadeiros-cc6f8c.netlify.app"
              target="_blank"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>Clock</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Zuhaibkhalifa/mini-projects-/tree/main/clock"
              target="_blank"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://stupendous-toffee-07af1d.netlify.app"
              target="_blank"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>Data Science</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Zuhaibkhalifa/data-science-hone-page"
              target="_blank"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://dapper-entremet-420358.netlify.app"
              target="_blank"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG6} alt="" />
          </div>
          <h3>Score Keeper</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Zuhaibkhalifa/homepage"
              target="_blank"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://willowy-nougat-ea7ac3.netlify.app"
              target="_blank"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default portfolio;
