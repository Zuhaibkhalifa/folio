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
      <h2>About me</h2>
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
              <h5>Professional Experience</h5>
              <small>Fresher</small>
            </article>
            <article className="about__card">
              <BsClipboardData className="about__icon" />
              <h5>Interest</h5>
              <small>Web Development</small>
            </article>
            <article className="about__card">
              <MdWork className="about__icon" />
              <h5>projects</h5>
              <small>2+ projects</small>
            </article>
          </div>
          <p>
            I'm Zuhaib, and I graduated from the visvesvaraya in 2022 with a
            bachelors degree in Computer Science. My interests are in Front End
            Engineering, and I love to create beautiful and performant products
            with delightful user experiences.
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
