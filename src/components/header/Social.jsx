import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillFacebook } from "react-icons/ai";

const Social = () => {
  return (
    <div className="header__social" target="_blank">
      <a href="https://www.linkedin.com/in/zuhaib-khalifa-a76926169">
        <BsLinkedin />
      </a>
      <a href="https://github.com/Zuhaibkhalifa" target="_blank">
        <BsGithub />
      </a>
      <a href="https://www.instagram.com/zuhaibk10/" target="_blank">
        <FaInstagramSquare />
      </a>
      <a href="https://www.facebook.com/m.zuhaib.mohammed/" target="_blank">
        <AiFillFacebook />
      </a>
    </div>
  );
};

export default Social;
