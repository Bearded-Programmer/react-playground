import React, { Component } from "react";
import Home from "./Home";
import { Redirect, Route } from "react-router-dom";

export default class LoginValidator extends Component {
  render() {
    if (!this.state.isAuthenticated) {
      return <Redirect to="/login" />;
    }

    return (
      <div>
        <Route exact path="/home" component={Home} />
      </div>
    );
  }
}
