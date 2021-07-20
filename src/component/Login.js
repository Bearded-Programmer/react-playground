import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.css";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      isAuthenticated: false,
    };
  }

  setUser() {
    this.setState({
      user: {
        email: "react",
        password: "password",
        name: "React Learner",
      },
    });
  }

  componentDidMount() {
    this.setUser();
  }

  authenticate(e) {
    e.preventDefault();
    if (
      "react" === e.target.formBasicUsername.value &&
      "password" === e.target.formBasicPassword.value
    ) {
      this.setState({
        isAuthenticated: true,
      });
    }
    console.log("isAuthenticated : ", this.state.isAuthenticated);
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
