import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import AboutImage from "../AboutImage/AboutImage";
import AboutText from "../AboutText/AboutText";

const AboutComponents = () => {
  return (
    <section className="about-components-area">
      <Container>
        <Row className="align-items-center">
          <AboutImage />
          <AboutText />
        </Row>
      </Container>
    </section>
  );
};

export default AboutComponents;
