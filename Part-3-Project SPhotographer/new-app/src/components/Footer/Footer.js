import image from "../../images/logo.png";
import Container from "react-bootstrap/esm/Container";
import "./Footer.css";
import Logo from "../Logo/Logo";

const Footer = () => {
  return (
    <section className="footer-area">
      <Container className="text-center">
        <Logo image={image} />
        <p className="mt-3">© 2022 Spotographer, All Rights Reserved.</p>
      </Container>
    </section>
  );
};
export default Footer;
