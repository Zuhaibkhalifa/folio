import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../images/me.png";
import Social from "./Social";

function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Zuhaib Khalifa</h1>
        <h5>Front-end Developer</h5>
        <CTA />
        <Social />
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
        <div className="me">
          <img src={ME} alt="me" />
        </div>
      </div>
    </header>
  );
}

export default Header;
