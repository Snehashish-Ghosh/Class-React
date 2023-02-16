import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const Service = ({ item }) => {
  return (
    <Col lg={4}>
      <div className="single-service">
        <img src={item.img} className="w-100" alt="" />
        <h3>{item.name}</h3>
        <h5>Price: ${item.price}</h5>
        <p>{item.description}</p>
        <Button variant="secondary">Book Now</Button>
      </div>
    </Col>
  );
};

export default Service;
