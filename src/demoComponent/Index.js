import React, { Component } from "react";
import axios from "axios";
import TableRow from "./TableRow";
import Table from 'react-bootstrap/Table';

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = { business: [] };
  }

  componentDidMount() {
    axios
      .get("https://reqres.in/api/users?page=2")
      .then((response) => {
        this.setState({ business: response.data.data });
        console.log('response.data.data',response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  tabRow() {
    return this.state.business.map(function (object, i) {
      return <TableRow obj={object} key={object.id} />;
    });
  }

  render() {
    return (
      <div>
        <h3 align="center">Business List</h3>
        <Table responsive variant="dark" className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th colSpan="2">Action</th>
            </tr>
          </thead>
          <tbody>{this.tabRow()}</tbody>
        </Table>
      </div>
    );
  }
}
