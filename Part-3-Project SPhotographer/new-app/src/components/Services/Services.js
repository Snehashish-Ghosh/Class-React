import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import Service1 from "../../images/service-one.png";
import Service2 from "../../images/service-two.png";
import Service3 from "../../images/service-three.png";

import "./Services.css";
import Service from "../Service/Service";

const Services = () => {
  return (
    <section className="services-area">
      <Container>
        <h2 className="text-center">My Services</h2>
        <Row>
          <Service
            image={Service1}
            heading="Sporting Events Photography"
            price="300"
            text="I'm the leading sporting event photographer in Bangladesh. I offer
            quality images and products, on-site printing and great pricing!"
          />
          <Service
            image={Service2}
            heading="Live Match Photography"
            price="100"
            text="My live match photography is best in the world. The quality of
            the photos are just amazing and beautiful and ready to use for
            your next platform."
          />
          <Service
            image={Service3}
            heading="Team Picture Day Photography"
            price="150"
            text="I offers top quality posed team & individual photography
            services for any size team and league. You will get best team
            photos from me"
          />
        </Row>
      </Container>
    </section>
  );
};
export default Services;
