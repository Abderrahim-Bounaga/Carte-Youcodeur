import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Table, ButtonToggle } from 'reactstrap';

export default class StudentTableRow extends Component {
    render() {
        return (
   
            <tr>
            <th scope="row"></th>
            <td>{this.props.obj.FirstName}</td>
            <td>{this.props.obj.LastName}</td>
            <td>{this.props.obj.email}</td>
            <td><ButtonToggle color="success">Vue</ButtonToggle>{' '}</td>
            <td><ButtonToggle color="danger">Delete</ButtonToggle>{' '}</td>
          </tr>
        );
    }
}