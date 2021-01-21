import React, { Component } from "react";
import "../cssFolder/navbar.css";
import { Link } from "react-router-dom";

class NavBar extends Component {
  state = {
    imageUrl:
      "https://images.techhive.com/images/article/2015/09/thinkstockphotos-482247865-100611735-large.jpg",
  };
  render() {
    return (
      <React.Fragment>
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
            <Link className="navbar-brand" to="/">
              <span className="fa fa-globe  nav-b-title  p-1 m-1 text-decoration-none">
                {" "}
                <span className="cara-t  nav-b-title font-weight-bold">
                  {" "}
                  CARAMEL GROUP
                </span>
              </span>
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav cara-grp-links ml-auto">
                <li class="nav-item">
                  <Link
                    class="nav-link  "
                    aria-current="page"
                    aria-current="true"
                    to="/"
                  >
                    HOME
                  </Link>
                </li>
                <li class="nav-item dropdown abt-us-links">
                  <Link
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                    to="/ourGroup"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    ABOUT US
                  </Link>
                  <div className="dropdown-menu abt-us-dd">
                    <Link className="dropdown-item ddi" to="/WhoWeAre">
                      who we are
                    </Link>
                    <Link className="dropdown-item ddi" to="/whatwebelieve">
                      mission statememt
                    </Link>
                    <Link className="dropdown-item ddi" to="/whatwebelieve">
                      core values
                    </Link>
                    <Link className="dropdown-item ddi" to="/whatwebelieve">
                      our grand vision
                    </Link>
                    <Link className="dropdown-item ddi" to="/ourTeam">
                      our Team
                    </Link>
                  </div>
                </li>
                <li class="nav-item dropdown our-grp-links">
                  <Link
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    OUR GROUP
                  </Link>
                  <div className="dropdown-menu our-grp-dd">
                    <Link className="dropdown-item ddi" to="/caramelTechAndSol">
                      Caramel technologies and solutions
                    </Link>
                    <Link className="dropdown-item ddi" to="/ourGroup">
                      our group
                    </Link>
                  </div>
                </li>
                {/* <li class="nav-item dropdown careers-links">
                  <Link
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                    to="#"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    CAREERS
                  </Link>
                  <div className="dropdown-menu careers-dd">
                    <Link className="dropdown-item ddi" to="#">
                      our culture
                    </Link>
                    <Link className="dropdown-item ddi" to="#">
                      internships
                    </Link>
                    <Link className="dropdown-item ddi" to="#">
                      Job opportunities
                    </Link>
                    <Link className="dropdown-item ddi" to="#">
                      Testimonials
                    </Link>
                    <Link className="dropdown-item ddi" to="#">
                      FAQ/interview Tips
                    </Link>
                  </div>
                </li> */}
                <li class="nav-item dropdown cnt-us-links">
                  <Link
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    CONTACT US
                  </Link>
                  <div className="dropdown-menu cnt-us-dd">
                    <Link className="dropdown-item ddi" to="/contactus">
                      contact form
                    </Link>
                    <Link className="dropdown-item ddi" to="/contactus">
                      Address
                    </Link>
                    <Link className="dropdown-item ddi" to="/contactus">
                      support
                    </Link>
                  </div>
                </li>
                <li class="nav-item">
                  <div className="fa fa-search mt-2"></div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default NavBar;
