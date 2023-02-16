import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import "./Banner.css";
import { useEffect, useState } from "react";

const Banner = () => {
  const [banner, setBanner] = useState([]);
  useEffect(() => {
    fetch("banner.json")
      .then((res) => res.json())
      .then((data) => setBanner(data));
  }, []);
  return (
    <section className="banner">
      <Carousel>
        {banner.map((item) => (
          <Carousel.Item key={item.id}>
            <img className="d-block w-100" src={item.img} alt="First slide" />
            <Carousel.Caption>
              <h3>{item.subheading}</h3>
              <h2>{item.heading}</h2>
              <p>{item.text}</p>
              <Button variant="secondary">{item.buttontext}</Button>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
};
export default Banner;
