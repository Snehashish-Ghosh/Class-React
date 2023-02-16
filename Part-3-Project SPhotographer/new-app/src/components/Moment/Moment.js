import Col from "react-bootstrap/Col";
import "./Moment.css";
const Moment = ({ item }) => {
  return (
    <Col lg={3}>
      <div className="single-moment">
        <img src={item.img} className="w-100" alt="" />
      </div>
    </Col>
  );
};
export default Moment;
