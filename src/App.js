import "./App.css";
import { Component } from "react";
import Create from './demoComponent/Create';
import Edit from './demoComponent/Edit';
import Index from './demoComponent/Index';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
        <Navbar bg="dark" variant="dark">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link to={"/"} className="navbar-brand">
              React CRUD Example
            </Link>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to={"/"} className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/create"} className="nav-link">
                    Create
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/index"} className="nav-link">
                    Index
                  </Link>
                </li>
              </ul>
            </div>
          </nav>{" "}
         
          </Navbar>
          <br />
          <h2>Welcome to React CRUD Tutorial</h2> <br />
          <Switch>
            <Route exact path="/create" component={Create} />
            <Route path="/edit/:id" component={Edit} />
            <Route path="/index" component={Index} />
          </Switch>
        </div>
      </Router>
    );
  }
}
