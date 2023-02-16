import React from "react";
import Col from "react-bootstrap/esm/Col";
import AboutImg from "../../images/about-img.png";

const AboutImage = () => {
  return (
    <Col lg={5} className="p-2">
      <img src={AboutImg} className="w-100" alt="" />
    </Col>
  );
};

export default AboutImage;
