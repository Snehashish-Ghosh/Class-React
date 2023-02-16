import React from "react";
import AboutHeaderImg from "../../images/AboutHeaderImg.png";
import "./AboutIHeader.css";

const AboutHeader = () => {
  return (
    <section className="about-img">
      <img src={AboutHeaderImg} className="w-100" alt="" />
    </section>
  );
};

export default AboutHeader;
