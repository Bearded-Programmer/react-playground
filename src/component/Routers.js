import React, { Component } from "react";
import Login from "./Login";
import Home from "./Home";
import LoginValidator from "./LoginValidator";
import { Switch, Route } from "react-router-dom";

export default class Routers extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/home" component={Home} />
        <Route path="/" component={LoginValidator} />
      </Switch>
    );
  }
}
