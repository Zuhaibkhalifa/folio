import React from "react";
import "./experience.css";
import { BsCheckSquareFill } from "react-icons/bs";

function experience() {
  return (
    <section id="experience">
      <h5>Wjhat skills i have</h5>
      <h2>My eceprince</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3> frontend Development</h3>
          <div className="experience__content">
            <article className="experience__Details">
              <BsCheckSquareFill />
              <h4>HTML</h4>
              <small className="text-light">intermediate</small>
            </article>
            <article className="experience__Details">
              <BsCheckSquareFill />
              <h4>css</h4>
              <small className="text-light">intermediate</small>
            </article>
            <article className="experience__Details">
              <BsCheckSquareFill />
              <h4>bootstrap</h4>
              <small className="text-light">intermediate</small>
            </article>
            <article className="experience__Details">
              <BsCheckSquareFill />
              <h4>Javascript</h4>
              <small className="text-light">intermediate</small>
            </article>
            <article className="experience__Details">
              <BsCheckSquareFill />
              <h4>React</h4>
              <small className="text-light">intermediate</small>
            </article>
            <article className="experience__Details">
              <BsCheckSquareFill />
              <h4>Core-Java</h4>
              <small className="text-light">intermediate</small>
            </article>
            <article className="experience__Details">
              <BsCheckSquareFill />
              <h4>python</h4>
              <small className="text-light">intermediate</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default experience;
