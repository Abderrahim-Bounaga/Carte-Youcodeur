import React,{useEffect, Component} from 'react';
import { Table, ButtonToggle } from 'reactstrap';
import axios from 'axios';
import StudentTableRow from '../components/StudentTableRow';

const token = localStorage.getItem('auto_token');
const AuthStr = 'Bearer '.concat(token);
class DashBord extends Component{

  
   
  constructor(props) {
    super(props)
    this.state = {
      students: []
    };
  }
  // console.log(token)
  componentDidMount() {
    axios.get('http://localhost:5001/user', {
      headers: { Authorization: AuthStr }
    })
    .then((response) => {
    console.log(response.data);
    this.setState({
      students: response.data
    });
  }).catch((err)=>{
    console.log(err.response)
  })
 }

 DataTable() {
  return this.state.students.map((res, i) => {
    return <StudentTableRow obj={res} key={i} />;
  });
}

 render() {
  return (
    <Table dark>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Vues</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
      {this.DataTable()}
         
      </tbody>
    </Table>
  );
}
}
export {DashBord};