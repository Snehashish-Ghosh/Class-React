import Carousel from "react-bootstrap/Carousel";
import Banner1 from "../../images/banner1.png";
import Banner2 from "../../images/banner2.png";
import Banner3 from "../../images/banner3.png";
import Button from "react-bootstrap/Button";
import "./Banner.css";

const Banner = () => {
  return (
    <section className="banner">
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={Banner1} alt="First slide" />
          <Carousel.Caption>
            <h3>SPOTOGRAPHER</h3>
            <h2>Sports Photographer</h2>
            <p>I Capture Sports Moments and Actions.</p>
            <Button variant="secondary">More About Me</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Banner2} alt="Second slide" />

          <Carousel.Caption>
            <h3>SPOTOGRAPHER</h3>
            <h2>Sports Photographer</h2>
            <p>I Capture Sports Moments and Actions.</p>
            <Button variant="secondary">More About Me</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Banner3} alt="Third slide" />

          <Carousel.Caption>
            <h3>SPOTOGRAPHER</h3>
            <h2>Sports Photographer</h2>
            <p>I Capture Sports Moments and Actions.</p>
            <Button variant="secondary">More About Me</Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
};
export default Banner;
