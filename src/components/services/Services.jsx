import React from "react";
import "./services.css";
import { BsCheckLg } from "react-icons/bs";

function services() {
  return (
    <section id="services">
      <h5>What i offer</h5>''
      <h2>Services</h2>;
      <div className="container services__container">
        <article className="services">
          <div className="services__head">
            <h3>UI/UX design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Lorem, ipsum dolor.</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Lorem, ipsum dolor.</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Lorem, ipsum dolor.</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Lorem, ipsum dolor.</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Lorem, ipsum dolor.</p>
            </li>
          </ul>
        </article>

        <article className="services">
          <div className="services__head">
            <h3>WEb Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Lorem, ipsum dolor.</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Lorem, ipsum dolor.</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Lorem, ipsum dolor.</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Lorem, ipsum dolor.</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Lorem, ipsum dolor.</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Lorem, ipsum dolor.</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Lorem, ipsum dolor.</p>
            </li>
          </ul>
        </article>

        <article className="services">
          <div className="services__head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Lorem, ipsum dolor.</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Lorem, ipsum dolor.</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Lorem, ipsum dolor.</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Lorem, ipsum dolor.</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Lorem, ipsum dolor.</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Lorem, ipsum dolor.</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Lorem, ipsum dolor.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default services;
