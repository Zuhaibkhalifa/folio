import React from "react";
import "./experience.css";
import { BsCheckSquareFill } from "react-icons/bs";

function experience() {
  return (
    <section id="experience">
      <h5>What skills I have</h5>
      <h2>My Exeprience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3> Front-end Development</h3>
          <div className="experience__content">
            <article className="experience__Details">
              <BsCheckSquareFill className="experience__Details-icons" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">intermediate</small>
              </div>
            </article>
            <article className="experience__Details">
              <BsCheckSquareFill className="experience__Details-icons" />
              <div>
                <h4>css</h4>
                <small className="text-light">intermediate</small>
              </div>
            </article>
            <article className="experience__Details">
              <BsCheckSquareFill className="experience__Details-icons" />
              <div>
                <h4>bootstrap</h4>
                <small className="text-light">intermediate</small>
              </div>
            </article>
            <article className="experience__Details">
              <BsCheckSquareFill className="experience__Details-icons" />
              <div>
                <h4>Javascript</h4>
                <small className="text-light">intermediate</small>
              </div>
            </article>
            <article className="experience__Details">
              <BsCheckSquareFill />
              <div>
                <h4>React</h4>
                <small className="text-light">intermediate</small>
              </div>
            </article>
            <article className="experience__Details">
              <BsCheckSquareFill className="experience__Details-icons" />
              <div>
                <h4>Core-Java</h4>
                <small className="text-light">intermediate</small>
              </div>
            </article>
            <article className="experience__Details">
              <BsCheckSquareFill className="experience__Details-icons" />
              <div>
                <h4>python</h4>
                <small className="text-light">intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default experience;
