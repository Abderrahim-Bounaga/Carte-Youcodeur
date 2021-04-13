import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import { Button , NavLink } from 'reactstrap';
import axios from 'axios';

const token = localStorage.getItem('auto_token');
const AuthStr = 'Bearer '.concat(token);

 class Home extends Component {

    componentDidMount() {
        axios.get(`http://localhost:5001/user/`, {
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



    render() {
        return (
            
            <div class="card text-center">
            <div class="card-header">
              Apprenant
            </div>
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text"><span class="badge bg-secondary">FirstName:</span> With supporting text below as a natural lead-in to additional content.</p>
              <p class="card-text"><span class="badge bg-secondary">LastName:</span> With supporting text below as a natural lead-in to additional content.</p>
              <p class="card-text"><span class="badge bg-secondary">phoneNumber:</span> With supporting text below as a natural lead-in to additional content.</p>
              <p class="card-text"><span class="badge bg-secondary">email:</span> With supporting text below as a natural lead-in to additional content.</p>
              
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            <div class="card-footer text-muted">
              
            </div>
          </div>
        
        )
    }
}

export {Home};
