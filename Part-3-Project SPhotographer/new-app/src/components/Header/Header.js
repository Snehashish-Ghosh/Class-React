import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import image from "../../images/logo.png";
import Logo from "../Logo/Logo";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user] = useAuthState(auth);
  // Sign Out
  const handleLogOut = () => {
    signOut(auth);
  };
  return (
    <header className="header">
      <Navbar bg="dark" variant="dark" expand="lg" className="py-3 fixed-top">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <Logo image={image} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
              <NavLink to="/about" className="nav-link">
                About
              </NavLink>
              <NavLink to="/blog" className="nav-link">
                Blog
              </NavLink>
              <NavLink to="/more" className="nav-link">
                More
              </NavLink>
              {user ? (
                <NavLink
                  to="/login"
                  className="nav-link"
                  onClick={handleLogOut}
                >
                  Log Out
                </NavLink>
              ) : (
                <NavLink to="/login" className="nav-link btn btn-primary">
                  Login
                </NavLink>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
export default Header;
