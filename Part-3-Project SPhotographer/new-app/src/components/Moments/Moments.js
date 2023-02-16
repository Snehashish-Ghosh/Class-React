import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/esm/Row";
import "./Moments.css";
import Moment from "../Moment/Moment";
import SectionHeading from "../SectionHeading/SectionHeading";
import { useState } from "react";

const Moments = () => {
  const [images, setImages] = useState([]);
  useState(() => {
    fetch("moments.json")
      .then((res) => res.json())
      .then((data) => setImages(data));
  }, []);
  return (
    <section className="moment-area">
      <Container>
        <SectionHeading heading="Some Moments" />
        <Row>
          {images.map((item) => (
            <Moment key={item.id} item={item}></Moment>
          ))}
        </Row>
      </Container>
    </section>
  );
};
export default Moments;
