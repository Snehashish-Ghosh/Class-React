import React from "react";
import Container from "react-bootstrap/esm/Container";
import AboutHeader from "../AboutHeader/AboutIHeader";
import "./NotFound.css";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <AboutHeader />
      <section className="not-found-area">
        <Container>
          <div className="not-found-text text-center">
            <h2>404</h2>
            <h3>Not Found</h3>
            <NavLink to="/" className="nav-link">
              <button>Go Home</button>
            </NavLink>
          </div>
        </Container>
      </section>
    </>
  );
};

export default NotFound;
