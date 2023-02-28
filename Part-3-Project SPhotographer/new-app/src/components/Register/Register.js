import React from "react";
import Container from "react-bootstrap/esm/Container";
import SectionHeading from "../SectionHeading/SectionHeading";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./Register.css";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useState } from "react";
import auth from "../../firebase.init";
import { NavLink } from "react-router-dom";
import GoogleSignUp from "../GoogleSignUp/GoogleSignUp";
import GitSignUp from "../GitSignUp/GitSignUp";
import FbSignUp from "../FbSignUp/FbSignUp";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const messageDiv = document.getElementById("message-div");

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  if (error) {
    messageDiv.innerHTML = error;
  }
  if (loading) {
    messageDiv.innerHTML = "Loading...";
  }
  if (user) {
    messageDiv.innerHTML = "User Registered";
  }

  return (
    <section className="register-area text-center">
      <Container>
        <SectionHeading heading="Create an Account" />
        <div className="reg-area py-5">
          <Row>
            <Col lg={{ span: 6, offset: 3 }}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
              </Form.Group>
              <p>
                Already Have an Account?
                <NavLink to="/login" className="nav-link reg-link">
                  Login Here.
                </NavLink>
              </p>
              <Button
                variant="primary"
                type="submit"
                onClick={() => createUserWithEmailAndPassword(email, password)}
              >
                Register
              </Button>
              <div id="message-div" className="mt-3"></div>
              <span className="or-style">or</span>
              <GoogleSignUp />
              <GitSignUp />
              <FbSignUp />
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Register;
