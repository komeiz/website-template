import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../cssFolder/navbar2.css';

class Navbar2 extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
     
       <div>
       <nav class="navbar navbar-expand-lg navbar-dark  first-nav">
          <div className="container-md d-flex">
            <ul className="navbar-nav reach-us">
              <li className="nav-item active">
                <Link className="nav-link font-weight-bold" to="#">
                  reach us on anytime
                  <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  <i className="fa fa-phone pr-1"></i>+96670456780
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  <i className="fa fa-envelope pr-1"></i>pun@gmail.com
                </Link>
              </li>
            </ul>
            <span className="social-media-icons">
              <Link
                to="#"
                className="fa fa-facebook p-1 m-1 text-decoration-none "
              ></Link>
              <Link
                to="#"
                className="fa fa-twitter  p-1 m-1 text-decoration-none"
              ></Link>
              <Link
                to="#"
                className="fa fa-youtube p-1 m-1 text-decoration-none"
              ></Link>
              <Link
                to="#"
                className="fa fa-linkedin p-1 m-1 text-decoration-none"
              ></Link>
            </span>
          </div>
        </nav>

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container">
  <div className="navbar-brand text-primary d-flex " >
                 <Link to="/caramelTechAndSol">
                 <li className="fa fa-arrow-left"></li>
                  <li className="fa fa-home"></li></Link>
                  <Link className="ml-5 text-decoration-none" to="/">
                  CARAMEL GROUP
                </Link>
                </div>
  
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" 
    data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav navbar-2-links ml-auto">
        <li class="nav-item">
        <Link className="nav-link" to="/aboutTechAndSol">
                  About
                </Link>
        </li>
        <li class="nav-item">
        <Link className="nav-link " to="/innovationhub">
                  innovaton hub
                </Link>
        </li>
        <li class="nav-item">
        <Link className="nav-link" to="/support">
                  support s services
                </Link>
        </li>
        <li class="nav-item">
        <div className="fa fa-search mt-2"></div>
        </li>
      </ul>
    </div>
  </div>
</nav>





       
                    
         </div>                   
        
      </React.Fragment>
    );
  }
}

export default Navbar2;
