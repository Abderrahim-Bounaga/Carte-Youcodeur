import React, { useState } from 'react';
import {Link} from 'react-router-dom';


  function _renderLoginOrLogout(){
    return(
      <Link class="nav-link " aria-current="page" to="/login">login</Link>
    );

}


const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  
  _renderLoginOrLogout()
  return (
    <div>
     
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">Carte Youcodeu</Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse " id="navbarNavAltMarkup">
            <div class="navbar-nav ">
              <Link class="nav-link " aria-current="page" to="/">Home</Link>
              <Link class="nav-link " aria-current="page" to="/login">login</Link>
              <Link class="nav-link " aria-current="page" to="/SignUp">SignUp</Link>
              <Link class="nav-link " aria-current="page" to="/DashBord">DashBord</Link>
              
            </div>
          </div>
        </div>
      </nav>

       
    </div>
  );
}

export {NavBar};