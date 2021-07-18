import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.css";

var user = {
  email: "react",
  password: "password",
  name: "React Learner",
};
var isAuthenticated = false;

export default class Login extends Component {
  
  authenticate(e) {
    e.preventDefault();
    if (
      user.email === e.target.formBasicUsername.value &&
      user.password === e.target.formBasicPassword.value
    ) {
      isAuthenticated = true;
    } else {
      isAuthenticated = false;
    }
    console.log("isAuthenticated : ", isAuthenticated);
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Form onSubmit={this.authenticate}>
            <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Control type="text" placeholder="username" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
        </Row>
      </Container>
    );
  }
}