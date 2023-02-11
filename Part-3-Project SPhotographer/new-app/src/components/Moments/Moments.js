import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/esm/Row";
import Moment1 from "../../images/moment1.png";
import Moment2 from "../../images/moment2.png";
import Moment3 from "../../images/moment3.png";
import Moment4 from "../../images/moment4.png";
import Moment5 from "../../images/moment5.png";
import Moment6 from "../../images/moment6.png";
import Moment7 from "../../images/moment7.png";
import Moment8 from "../../images/moment8.png";
import "./Moments.css";
import Moment from "../Moment/Moment";

const Moments = () => {
  return (
    <section className="moment-area">
      <Container>
        <h2 className="text-center">Some Moments</h2>
        <Row>
          <Moment image={Moment1} />
          <Moment image={Moment2} />
          <Moment image={Moment3} />
          <Moment image={Moment4} />
          <Moment image={Moment5} />
          <Moment image={Moment6} />
          <Moment image={Moment7} />
          <Moment image={Moment8} />
        </Row>
      </Container>
    </section>
  );
};
export default Moments;
