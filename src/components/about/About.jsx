import React from "react";
import "./about.css";
import ME from "../../images/me2.png";
import { FaAward } from "react-icons/fa";
import { BsClipboardData } from "react-icons/bs";
import { MdWork } from "react-icons/md";

const About = () => {
  return (
    <section id="about">
      <h5>Get to know </h5>
      <h2>Aboutme</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ years of ecperienc</small>
            </article>
            <article className="about__card">
              <BsClipboardData className="about__icon" />
              <h5>clients</h5>
              <small>my clients</small>
            </article>
            <article className="about__card">
              <MdWork className="about__icon" />
              <h5>projects</h5>
              <small>5+ projects</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Cupiditate, accusamus dolorem maxime sint voluptatem adipisci minima
            non quod voluptates quis!
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
