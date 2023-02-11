import Col from "react-bootstrap/Col";
const Moment = ({ image }) => {
  return (
    <Col lg={3}>
      <div className="single-moment">
        <img src={image} className="w-100" alt="" />
      </div>
    </Col>
  );
};
export default Moment;
