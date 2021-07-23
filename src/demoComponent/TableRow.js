import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class TableRow extends Component {
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
  }

  delete() {
    axios
      .delete("https://reqres.in/api/users/" + this.props.obj.id)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <tr>
        <td>{this.props.obj.first_name}</td>
        <td>{this.props.obj.last_name}</td>
        <td>{this.props.obj.email}</td>
        <td>
          <Link to={"/edit/" + this.props.obj.id} className="btn btn-primary">
            <i class="bi bi-pencil"></i> Edit
          </Link>
        </td>
        <td>
          <button onClick={this.delete} className="btn btn-danger">
            <i class="bi bi-archive"></i> Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default TableRow;
