import React from "react";
import "./portfolio.css";
import IMG1 from "../../images/img1.png";

function portfolio() {
  return (
    <section id="portfolio">
      <h5>My recent Work</h5>
      <h2>portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="" target="_blank" className="btn">
              Github
            </a>
            <a href="" target="_blank" className="btn btn-primary">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="" target="_blank" className="btn">
              Github
            </a>
            <a href="" target="_blank" className="btn btn-primary">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="" target="_blank" className="btn">
              Github
            </a>
            <a href="" target="_blank" className="btn btn-primary">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="" target="_blank" className="btn">
              Github
            </a>
            <a href="" target="_blank" className="btn btn-primary">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="" target="_blank" className="btn">
              Github
            </a>
            <a href="" target="_blank" className="btn btn-primary">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="" target="_blank" className="btn">
              Github
            </a>
            <a href="" target="_blank" className="btn btn-primary">
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default portfolio;
