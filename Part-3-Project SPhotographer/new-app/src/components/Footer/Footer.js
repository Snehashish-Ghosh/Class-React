import Logo from "../../images/logo.png";
import Container from "react-bootstrap/esm/Container";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="footer-area">
      <Container className="text-center">
        <img src={Logo} className="w-15 py-3" alt="" />
        <p>© 2022 Spotographer, All Rights Reserved.</p>
      </Container>
    </section>
  );
};
export default Footer;
