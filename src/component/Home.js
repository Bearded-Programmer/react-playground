import React, { Component } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import { Loading } from "./Loading";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isDataAvailable: false,
    };
  }

  getUsers() {
    this.setState({
      isDataAvailable: false,
    });
    axios("https://api.randomuser.me/?nat=US&results=10").then((response) => {
      this.setState({
        users: response.data.results,
        isDataAvailable: true,
      });
    });
  }

  componentDidMount() {
    this.getUsers();
  }

  render() {
    return (
      <Tabs defaultActiveKey="user" id="home-tab" className="mb-3">
        <Tab eventKey="home" title="Home">
          <Container fluid>
            <Row></Row>
            WIP
          </Container>
        </Tab>
        <Tab eventKey="profile" title="Profile">
          <Container fluid>
            <Row></Row>
            WIP
          </Container>
        </Tab>
        <Tab eventKey="user" title="User">
          <Container fluid>
            <Row>
              {!this.isDataAvailable ? (
                this.state.users.map((user) => {
                  return (
                    <Card
                      key={user.email}
                      border="Info"
                      bg={"light"}
                      style={{ width: "18rem" }}
                      text={"dark"}
                    >
                      <Card.Img src={user.picture.large} />
                      <Card.Title>
                        {user.name.title +
                          " " +
                          user.name.first +
                          " " +
                          user.name.last}
                      </Card.Title>
                      <Card.Body>
                        <Row>
                          <div>{user.email}</div>
                          <div>
                            {user.gender} ({user.dob.age})
                          </div>
                        </Row>
                      </Card.Body>
                    </Card>
                  );
                })
              ) : (
                <Loading loadingText="blah blah" />
              )}
            </Row>
          </Container>
        </Tab>
      </Tabs>
    );
  }
}
