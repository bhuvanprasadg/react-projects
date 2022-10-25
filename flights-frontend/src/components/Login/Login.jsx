import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = ({ login }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <Container>
      <Row>
        <Col>
          <div>
            <label htmlFor="email">email</label>
            <input
              type="text"
              name="email"
              id="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div>
            <button
              onClick={() => {
                console.log("Inside onClick of Login component");
                console.log(`email: ${email}`);
                login({ email: email, password: password }, navigate);
              }}
              type="submit"
            >
              Login
            </button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
